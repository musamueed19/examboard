"use client";

import Image from "next/image";
import classes from "./page.module.css";
import logoIcon from "@/public/assets/logo.svg";
import homeIcon from "@/public/assets/icons/home.svg";
import usersIcon from "@/public/assets/icons/users.svg";
import settingsIcon from "@/public/assets/icons/settings.svg";
import hamburgerIcon from "@/public/assets/icons/hamburger.svg";
import profileIcon from "@/public/assets/icons/profile.svg";
import bellIcon from "@/public/assets/icons/bell.svg";
import Link from "next/link";
import { useRef, useState } from "react";

export default function DashBoardPage() {
  const [activeItem, setActiveItem] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navRef = useRef(null);
  const mainRef = useRef(null);

  function hideNavHandler() {
    if (!showNav) {
      navRef.current.style.display = "none";
      mainRef.current.style.width = "100%";
    } else {
      navRef.current.style.display = "flex";
      mainRef.current.style.width = "80%";
    }
    setShowNav(!showNav);
  }

  return (
    <main>
    </main>
  );
}
