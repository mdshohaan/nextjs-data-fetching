"use client";
import { signIn } from "next-auth/react";
import style from './btn.module.css';

export default function LoginButton() {
  return (
    <div>
      <button className={`${style["btn"]}`} onClick={() => signIn}>
        <span>Login</span>
      </button>
    </div>
  );
}
