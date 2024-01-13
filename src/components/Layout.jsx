import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="bg-sky-100 grid grid-rows-[1fr_auto] 
        grid-cols-1 w-full min-h-svh">
            <Outlet />
            <Footer />
        </div>
    )
}