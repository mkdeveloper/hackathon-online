"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./../ui/navigation-menu";

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-x-5">
        <NavigationMenuItem>Female</NavigationMenuItem>
        <NavigationMenuItem>Male</NavigationMenuItem>
        <NavigationMenuItem>Kids</NavigationMenuItem>
        <NavigationMenuItem>All Products</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
