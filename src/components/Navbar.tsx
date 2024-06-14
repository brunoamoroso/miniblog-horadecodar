import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const menuLinks = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Sobre',
    to: '/about'
  }
];

export default function Navbar() {
  return (
    <NavigationMenu className="sticky max-w-full w-full border-b-2 px-4 justify-between backdrop-blur-sm">
      <h1 className="flex font-bold font-2xl">Mini Blog</h1>
        <NavigationMenuList className="flex p-2">
                {
                  menuLinks.map((menuLink) => (
                    <NavigationMenuItem>
                      <NavigationMenuLink to={menuLink.to}>{menuLink.text}</NavigationMenuLink>
                    </NavigationMenuItem>
                  ))
                }
        </NavigationMenuList>
    </NavigationMenu>
  );
}
