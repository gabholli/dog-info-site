import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-neutral-100 h-20 flex justify-center items-center
            text-xl">
            <div className="flex gap-10">
                <Link
                    className="hover:underline"
                    to="/">
                    Home
                </Link>
            </div>
        </header>
    )
}