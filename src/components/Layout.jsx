import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="bg-clouds bg-cover bg-center 
        font-arial grid grid-rows-[auto_1fr_auto] grid-cols-1 w-full min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}