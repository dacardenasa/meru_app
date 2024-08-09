import clsx from "clsx";
import Link from "next/link";

type CustomLinkProps = {
  route: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

const CustomLink = ({
  route,
  title,
  icon,
  className = ""
}: CustomLinkProps) => {
  return (
    <Link
      href={route}
      className={clsx(
        "flex items-center justify-center hover:text-red-400 transition-all",
        className
      )}
    >
      {title}
      {icon && icon}
    </Link>
  );
};

export default CustomLink;
