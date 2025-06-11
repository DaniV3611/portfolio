import { useEffect, useState } from "react";

const useMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Verificar en el montaje inicial
    checkIsMobile();

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener("resize", checkIsMobile);

    // Limpiar el listener al desmontar
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;
