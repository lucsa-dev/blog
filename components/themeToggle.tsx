import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Aqui temos os ícones de Lua e Sol
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Aqui dizemos que esse componente só deve ser mostrado
    // depois da página carregada. Isso evita que o ícone
    // errado apareça antes do next-themes saber se deve
    // carregar o tema dark ou o tema light
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    // Uma função simples para verificar qual tema está ativo
    function isDark() {
        return theme === "dark";
    }

    return (
        // E a logica em si
        <button
            className="focus:outline-none transition-colors hover:text-pink-600"
            onClick={() => setTheme(isDark() ? "light" : "dark")}
            aria-label="Theme toggle"
        >
            {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
    );
}