"use client"

import {signOut} from "next-auth/react"

const NavButtonSignout = () => {
    return (
        // ubah ke sign out beneran
        <button
            type="button"
            className="mx-2 rounded-xl border border-black bg-office_gray py-2.5 px-5 text-white transition-all hover:bg-white
            font-bold
             hover:text-black text-center text-sm font-inter flex items-center justify-center"
        >
            Log Out
        </button>
    )
}

export default NavButtonSignout