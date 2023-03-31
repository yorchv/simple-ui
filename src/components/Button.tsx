import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  className: string;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;