export const Button = ({
    children,
    variant = "default",
    className = "",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "ghost";
}) => {
    const base =
        "px-4 py-2 rounded font-semibold focus:outline-none transition-colors";
    const variants = {
        default: " bg-amber-700 rounded-md transition-transform shadow-lg",
        ghost: "",
    };
    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};