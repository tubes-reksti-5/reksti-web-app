"use client"
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react"
import NavButtonSignout from "./navButtonSignout"
import {useEffect, useState} from "react";

const Navbar = () => {
    // ganti sama user auth beneran
    const isUserLogged = true

    return (
        <nav className="flex-between w-full mb-6">
            <Link href="/" className="flex gap-4 flex-center">
                <Image
                    src="/assets/thumb_logo.png"
                    alt="OfficeNexus Logo"
                    width={40}
                    height={40}
                    className="object-contain pt-8 ml-4"
                />
                <h1 className="headline_text text-office_gray text-left"> OfficeNexus </h1>
            </Link>


            {/*Desktop Navigation */}
            <div className="sm:flex hidden">
                {/* ganti ke status user logged in beneran */}
                {isUserLogged? (
                    <div className="flex-between gap-4 md:gap-8 mr-4 mt-7">
                        <NavButtonSignout/>
                    </div>

                ) : (	// else
                    // todo ganti ke sign in sama register option beneran
                    <div className="flex-between gap-4 md:gap-4">
                     {/* ini kosong aja kalo gk logged in */}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar