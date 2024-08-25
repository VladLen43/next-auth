'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex items-center justify-center flex-col w-full h-full gap-2">
      <Link href='/template'>Content</Link>
      <Link href='/about'>About</Link>
      <button onClick={() => signOut({ callbackUrl: '/signin' })}>Выйти</button>
    </div>
  );
}
