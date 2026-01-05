import { ArchiveIcon, BadgeInfoIcon, MailIcon } from "lucide-react";
interface NavMenuItem {
  id: number;
  name: string;
  link: string;
  icon: React.ElementType;
}

const NavMenu: NavMenuItem[] = [
  // { id: 1, name: "Home", link: "/home", icon: HomeIcon, },
  { id: 1, name: "Works", link: "/works", icon: ArchiveIcon, },
  { id: 2, name: "About", link: "/about", icon: BadgeInfoIcon, },
  { id: 3, name: "Contact", link: "/contact", icon :MailIcon },
];

export default NavMenu;
