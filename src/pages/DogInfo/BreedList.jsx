import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function BreedList() {

    const [loading, setLoading] = useState(false)
    const [dogData, setDogData] = useState([])

    useEffect(() => {
        setLoading(true)

        const options = {
            method: "GET",
            url: "https://dog-info-site-backend.onrender.com/breeds"
        }

        axios.request(options)
            .then(response => {
                console.log(response.data)
                setDogData(response.data)
            })
            .catch(error => {
                console.error(error)
            })

    }, [])

    const dogBreedList = dogData?.map(dog => {
        return (
            <div>
                <Link
                    className="hover:underline"
                >
                    {dog.name}
                </Link>
            </div>
        )
    })

    return (
        <div className="flex flex-col justify-center items-center p-8 gap-y-8">
            <h1 className="font-bold text-2xl">Select a breed:</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
                gap-4">
                {dogBreedList}
            </div>
        </div>
    )
}