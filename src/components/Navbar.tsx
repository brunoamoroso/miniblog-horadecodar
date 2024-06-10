import {
  NavigationMenu,
  NavigationMenuContent,
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
    <NavigationMenu className="max-w-full w-full border-b-2 px-4 justify-start backdrop-blur-sm"> 
        <NavigationMenuList className="p-2">
                {
                  menuLinks.map((menuLink) => (
                    <NavigationMenuItem className="py-2 px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-sm">
                      <NavigationMenuLink href={menuLink.to}>{menuLink.text}</NavigationMenuLink>
                    </NavigationMenuItem>
                  ))
                }
        </NavigationMenuList>
    </NavigationMenu>
  );
}
