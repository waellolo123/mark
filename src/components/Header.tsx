"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

export default function Header({session}:{session: Session}){
  return (
    <header className="border-b p-4 flex justify-between items-center">
      <Link
      className="text-blue-500 font-bold text-2xl"
      href="/">Tunisia Market</Link>
      <nav className="flex gap-4 *:rounded *:px-2">
        <Link href="/new" className="border-blue-500 text-blue-500 flex items-center gap-2 border"> 
        <FaPlusCircle />
        <span className="font-semibold">Add Post</span>
        </Link>
        {!session?.user && (
          <>
          <button
          onClick={()=> signIn("google")}
          className="border-0 font-semibold text-white bg-blue-500">Login</button>
          <button className="bg-blue-500 text-white border-0">Register</button>
          </>
        )}
        {session?.user && (
          <div className="flex gap-4 items-center">
          <div className="overflow-hidden">
          <Link href="/account">
          <Image src={session.user.image as string} alt="avatar" width={34} height={34} className="rounded" />  
          </Link>  
          {/* <span className="font-semibold text-slate-400">{session?.user.email}</span>    */}
          </div>  
          <button
          onClick={()=>signOut()}
          className="bg-blue-500 text-white font-semibold border-0 px-2 py-1 rounded">Logout</button>
          </div>
        )}
      </nav>
    </header>
  )
}