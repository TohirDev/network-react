import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[70rem] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
