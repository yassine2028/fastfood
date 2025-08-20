"use client";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { Logo } from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartIcon } from "./CartIcon";
export const NavLinks = [
  { title: "Acceuil", href: "/" },
  { title: "Menu", href: "/menu" },


];
export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* BANNER */}
      <div className="w-full pt-4 md:pt-2 pb-2 font-medium text-sm  text-white bg-green-950">
        <div className="px-4 mx-auto flex flex-row justify-center sm:justify-between items-center gap-4 text-center">
          <div className="hidden sm:flex flex-row items-center justify-center gap-2">
            <p className="flex flex-row items-center justify-center gap-2">
              <MapPin className="text-yellow-500" /> Marrakech, Daoudiate 
            </p>
            <span>|</span>
            <p className="flex flex-row items-center justify-center gap-2">
              <Mail className="text-yellow-500" />{" "}
              <a href="mailto:info@Snack.com">info@Snack.com</a>
            </p>
            <span>|</span>
            <p className="flex flex-row items-center justify-center gap-2">
              <Clock className="text-yellow-500" /> Heures du travail: 11:00 -
              23:00
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <p className=" flex flex-row items-center justify-center gap-2">
              <Phone className="text-yellow-500" /> +0123456789
            </p>
            <span className="max-sm:hidden">|</span>
            <div className="hidden sm:flex flex-row items-center justify-center gap-2">
              <Instagram className="h-10 w-10 text-pink-500 rounded-full border p-1.5 hover:bg-gray-200 hover:text-pink-700 transition-all duration-300" />
              <Facebook className="h-10 w-10 text-blue-500 rounded-full border p-1.5 hover:bg-gray-200 hover:text-blue-700 transition-all duration-300" />
              <Youtube className="h-10 w-10 text-red-500 rounded-full border p-1.5 hover:bg-gray-200 hover:text-red-700 transition-all duration-300" />
              <Twitter className="h-10 w-10 text-sky-500 rounded-full border p-1.5 hover:bg-gray-200 hover:text-sky-700 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}


      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  bg-gradient-to-r from-black via-black to-gray-500 relative transition-all">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`hover:text-[#ffbe33] transition-all duration-300 hover:scale-105 relative group font-semibold tracking-wide font-sans text-lg text-white outfit cursor-pointer`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <Search className="hidden p-2 rounded-full border w-10 h-10 hover:bg-[#ffbe33] hover:text-white text-[#ffbe33] transition-all duration-300 hover:scale-105 cursor-pointer " />

          <div className="relative cursor-pointer">
            <CartIcon />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex  items-center gap-5">
          <CartIcon />
          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
            className="sm:hidden border border-gray-500 rounded"
          >
            <Menu />
          </button>
          <div
            className={`${
              open ? "flex" : "hidden"
            }  z-50 absolute top-[60px] left-0 w-full bg-white transition-all ease-in-out duration-500 shadow-md pt-4 pb-1 flex-col items-start gap-2 px-5 text-md md:hidden`}
          >
            {NavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`hover:text-red-500 hoverEffect relative group border-b w-full`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
    </>
  );
};
