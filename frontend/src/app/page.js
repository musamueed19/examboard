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

export default function DashBoardPage() {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div className={classes.navBody}>
          <div className={classes.logo}>
            <Image src={logoIcon} />
            <h1>ExamBoard</h1>
          </div>
          <ul className={classes.ul}>
            <li className={`${classes.li} ${classes.active}`}>
              <Image src={homeIcon} />
              <Link href="/">Home</Link>
            </li>
            <li className={classes.li}>
              <Image src={usersIcon} />
              <Link href="/">Users</Link>
            </li>
          </ul>
        </div>

        <div className={classes.settings}>
          <Image src={settingsIcon} />
          <Link href="/">Settings</Link>
        </div>
      </div>
      <div className={classes.main}>
        <header className={classes.header}>
          <Image src={hamburgerIcon} />
          <div className={classes.profilers}>
            <Image src={bellIcon} />
            <div className={classes.userIcon}>
              <Link href='/auth/login'>
                <Image src={profileIcon} />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
