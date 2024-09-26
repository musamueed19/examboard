'use client'

import Link from "next/link";
import classes from "./LoginForm.module.css";
import EmailIcon from "@/public/assets/email.svg";
import PasswordIcon from "@/public/assets/password.svg";
import Image from "next/image";
import eyeCloseIcon from '@/public/assets/eyeClose.svg'
import eyeOpenIcon from '@/public/assets/eyeOpen.svg'
import { useEffect, useRef, useState } from "react";

function LoginForm() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const passwordInputRef = useRef(null);
  function toogleHandler() {
    setIsPasswordShowing((prev) => !prev);
  }
  useEffect(() => { 
    if (passwordInputRef.current) {
      passwordInputRef.current.type = isPasswordShowing ? "text" : "password";
    }
  }, [isPasswordShowing])
  return (
    <form className={classes.form}>
      <div>
        <div className={classes.fieldsContainer}>
          <label className={classes.label}>
            Email <span className={classes.required}>*</span>
          </label>
          <div className={classes.inputsContainer}>
            <Image validate className={classes.inputsIcon} src={EmailIcon} />
            <input
              className={classes.input}
              type="email"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <label className={classes.label}>
            Password <span className={classes.required}>*</span>
          </label>
          <div className={classes.inputsContainer}>
            <Image className={classes.inputsIcon} src={PasswordIcon} />
            <input
              ref={passwordInputRef}
              className={classes.input}
              type="password"
              required
              placeholder="Enter your password"
            />
            <Image onClick={toogleHandler} src={isPasswordShowing ? eyeOpenIcon : eyeCloseIcon} className={`${classes.inputsIcon} ${classes.tooglePassword}`} />
          </div>
        </div>
      </div>
      <div className={classes.loginSupport}>
        <Link href="/auth/forgotpassword" className={classes.forgotPassword}>
          Forgot Password?
        </Link>
      </div>
      <button type="submit" className={classes.btn}>
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
