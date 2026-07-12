import { Link } from "react-router-dom";

// A simple reusable button.
// It can work as a normal <button> or as a React Router <Link>.
//
// Props:
// - children: the text/content inside the button
// - variant: "primary" | "outline" | "ghost"  (changes the color style)
// - to: if provided, the button becomes a Link that navigates to this path
// - type: button type (default "button")
// - onClick: click handler
// - className: extra classes to merge
// - ...rest: any other button props
function Button({
  children,
  variant = "primary",
  to,
  type = "button",
  onClick,
  className = "",
  ...rest
}) {
  // Choose classes based on the variant
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full px-6 py-2.5 transition-all duration-300 active:scale-95";

  const variants = {
    // Solid red button
    primary: "bg-primary text-white hover:bg-[#c42f3b] shadow-soft hover:shadow-hover",
    // Outlined button
    outline:
      "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white",
    // Light/transparent button
    ghost: "bg-white/90 text-text hover:bg-white shadow-soft",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  // If "to" is given, render a Link (for navigation)
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  // Otherwise render a normal button
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
