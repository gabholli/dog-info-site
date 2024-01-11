import React from "react"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="bg-sky-100 min-h-svh">
            <Outlet />
        </div>
    )
}