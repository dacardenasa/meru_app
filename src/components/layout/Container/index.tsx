import clsx from "clsx";

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <main
      {...rest}
      className={clsx("flex flex-col items-center p-24", className)}
    >
      {children}
    </main>
  );
};

export default Container;
