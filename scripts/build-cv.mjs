// Compiles the LaTeX CVs and copies the PDFs to public/cv/ so the site can
// serve them. Vercel has no LaTeX toolchain, so run `pnpm cv` locally after
// editing cv.tex / cv_spanish.tex and commit the generated PDFs.
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const outDir = join(root, "public", "cv");

const cvs = [
	{ source: "cv.tex", target: "Daniel-Velasco-CV-EN.pdf" },
	{ source: "cv_spanish.tex", target: "Daniel-Velasco-CV-ES.pdf" },
];

mkdirSync(outDir, { recursive: true });
const buildDir = mkdtempSync(join(tmpdir(), "cv-build-"));

try {
	for (const { source, target } of cvs) {
		try {
			execFileSync(
				"pdflatex",
				["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, source],
				{ cwd: root, stdio: "pipe" },
			);
		} catch (error) {
			const log = error.stdout?.toString() ?? "";
			console.error(`Failed to compile ${source}:\n${log.split("\n").filter((l) => l.startsWith("!")).join("\n") || log.slice(-2000)}`);
			process.exit(1);
		}
		const pdf = join(buildDir, source.replace(/\.tex$/, ".pdf"));
		copyFileSync(pdf, join(outDir, target));
		console.log(`${source} -> public/cv/${target}`);
	}
} finally {
	rmSync(buildDir, { recursive: true, force: true });
}
