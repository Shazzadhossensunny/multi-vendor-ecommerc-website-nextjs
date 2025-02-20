"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  ChevronDown,
  Store,
  LogOut,
  Home,
  Settings,
  ShoppingBag,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Toys & Games",
  "Sports & Outdoors",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo purposes

  // Toggle login status (for demo)
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm font-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center h-16 justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                T
              </div>
              <span className="ml-2 text-primary font-heading font-bold text-xl hidden sm:inline-block">
                TradeNexus
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on Mobile, Visible on Tablet/Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 font-sans">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-36 py-2 border border-input rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-full rounded-r-full border-l border-input px-3"
                    >
                      Categories
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category}>
                        <Link
                          href={`/category/${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="w-full"
                        >
                          {category}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Icons & Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {/* Heart Icon - Hidden on Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart Icon */}
            <Button
              className="relative"
              variant="ghost"
              size="icon"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>

            {isLoggedIn ? (
              /* User Profile - When Logged In */
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Image
                      src="/api/placeholder/40/40"
                      alt="User profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard"
                      className="flex items-center w-full"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/my-orders"
                      className="flex items-center w-full"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>My Orders</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={toggleLogin}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              /* Login & Create Shop Buttons - When Logged Out */
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:inline-flex"
                  onClick={toggleLogin}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hidden md:inline-flex"
                >
                  <Store className="mr-2 h-4 w-4" />
                  Create Shop
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={toggleLogin}
                >
                  <User className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search Bar - Visible only on mobile */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-12 py-2 border border-input rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute inset-y-0 right-0 px-3 rounded-r-full border-l border-input"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select a category</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-2 py-4">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className="justify-start"
                    >
                      <Link
                        href={`/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="w-full text-left"
                      >
                        {category}
                      </Link>
                    </Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border pb-4">
            <nav className="flex flex-col space-y-2 pt-2">
              <Link
                href="/"
                className="px-4 py-2 hover:bg-muted rounded-md flex items-center"
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                href="/shop"
                className="px-4 py-2 hover:bg-muted rounded-md flex items-center"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                <span>Shop</span>
              </Link>
              <Link
                href="/wishlist"
                className="px-4 py-2 hover:bg-muted rounded-md flex items-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                <span>Wishlist</span>
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 hover:bg-muted rounded-md flex items-center"
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                  <Button
                    variant="ghost"
                    className="justify-start px-4 py-2"
                    onClick={toggleLogin}
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="justify-start px-4 py-2"
                    onClick={toggleLogin}
                  >
                    <User className="mr-2 h-5 w-5" />
                    <span>Login</span>
                  </Button>
                  <Button variant="default" className="justify-start px-4 py-2">
                    <Store className="mr-2 h-5 w-5" />
                    <span>Create Shop</span>
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
