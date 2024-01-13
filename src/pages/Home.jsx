import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-12">
            <h1 className="text-center text-4xl">Dog Information Site</h1>
            <p className="text-center text-2xl">Find information about your favorite breed</p>
            <Link
                className="bg-sky-200 px-4 py-2 rounded text-xl hover:underline"
                to="breeds"
            >
                Find dog information
            </Link>
        </div >
    )
};