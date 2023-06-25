import { forwardRef } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button {...props} ref={ref} />;
  }
);
