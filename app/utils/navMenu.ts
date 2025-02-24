interface NavMenuItem {
    id: number;
    name: string;
    link: string;
  }
  
  const NavMenu: NavMenuItem[] = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Works", link: "/works" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
  ];
  
  export default NavMenu;
  