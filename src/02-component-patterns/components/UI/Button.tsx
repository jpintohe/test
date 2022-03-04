interface ButtonProps {
  children?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

export const Button = ({
  children,
  onClick,
  className
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
