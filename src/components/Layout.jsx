import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="font-arial bg-sky-100 grid grid-rows-[auto_1fr_auto] 
        grid-cols-1 w-full min-h-svh">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}