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
        default: "bg-primary text-white hover:bg-primary/80",
        ghost: "bg-transparent text-primary hover:bg-primary/10 border border-primary",
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