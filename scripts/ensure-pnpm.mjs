const userAgent = process.env.npm_config_user_agent ?? "";
const execPath = process.env.npm_execpath ?? "";

const isPnpm =
	userAgent.startsWith("pnpm/") || /(?:^|[/\\])pnpm(?:\.c?js)?$/.test(execPath);

if (!isPnpm) {
	console.error(
		[
			"This project uses pnpm only.",
			"Run: pnpm install",
			"Do not use npm, yarn, bun, or other package managers for installs.",
		].join("\n"),
	);
	process.exit(1);
}
