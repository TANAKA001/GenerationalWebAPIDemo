// Badge.tsx

import React, { FC } from "react";
import "./Badge.style.scss";

export interface BadgeProps {
  theme?: "default" | "primary" | "danger" | "warning" | "success" | "info" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "pill" | "square";
  label?: string;
  role?: string;
  children?: React.ReactNode;
}

const defaultProps: BadgeProps = {
  theme: "default",
  size: "md",
  shape: "square",
  role: "status",
};

const Badge: FC<BadgeProps> = (props: BadgeProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div
      className={`badge ${props.theme} ${props.size} ${props.shape}`}
      data-testid={"Badge"}
      role={props.role}
      aria-label={props.label}
    >
      {props.children}
    </div>
  );
};

export default Badge;
