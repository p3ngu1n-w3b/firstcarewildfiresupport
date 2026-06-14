import React from "react";

const variants = {
  primary: "btn",
  outline: "btn-outline",
  whatsapp: "btn-whatsapp",
  ghost:
    "inline-flex items-center justify-center gap-2 font-semibold text-brand hover:text-brand-hover transition-colors cursor-pointer",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  as,
  ...props
}) => {
  const Tag = as || "button";
  return (
    <Tag className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
