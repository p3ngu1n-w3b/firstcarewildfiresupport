import React from "react";

const variants = {
  primary: "btn",
  outline: "btn-outline",
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
