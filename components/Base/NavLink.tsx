import { Nav, NavLinkProps } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkWrapperProps extends NavLinkProps {
  href: string;
  children?: React.ReactNode | string;
}

const NavLink: React.FC<NavLinkWrapperProps> = ({href, children, ...navLinkProps}) => {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <Nav.Link active={router.pathname === href} {...navLinkProps}>{children}</Nav.Link>
    </Link>
  );
};

export default NavLink;