import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-sky-200 h-20 flex justify-center items-center
            text-xl">
            <div className="flex gap-10 hover:underline">
                <Link to="/">Home</Link>
            </div>
        </header>
    )
}