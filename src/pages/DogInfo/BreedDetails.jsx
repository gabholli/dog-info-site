import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

export default function BreedDetails() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [dogData, setDogData] = useState([])

    useEffect(() => {
        setLoading(true)

        const options = {
            method: "GET",
            url: `https://dog-info-site-backend.onrender.com/breeds/${id}`
        }

        axios.request(options)
            .then(response => {
                console.log(response.data)
                setDogData(response.data)
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])

    return (
        <div className="flex flex-col justify-center items-center text-center px-4 
            py-8 gap-y-10">
            <Link
                className="hover:underline"
                to=".."
                relative="path">
                &larr; <span className="text-3xl">Back to breeds list</span>
            </Link>
            <h1 className="text-4xl underline">Facts about {dogData.name}s:</h1>
            {dogData.bred_for && <h2 className="text-3xl underline">Reasons for breeding:</h2>}
            {dogData.bred_for && <p className="text-2xl">{dogData.bred_for}</p>}
            {dogData.breed_group && <h2 className="text-3xl underline">Breed group:</h2>}
            {dogData.breed_group && <p className="text-3xl">{dogData.breed_group}</p>}
            {dogData.height?.imperial && <h2 className="text-3xl underline">Height in inches:</h2>}
            {dogData.height?.imperial && <p className="text-2xl">{dogData.height?.imperial}</p>}
            {dogData.life_span && <h2 className="text-3xl underline">Average life span:</h2>}
            {dogData.life_span && <p className="text-2xl">{dogData.life_span}</p>}
            {dogData.origin && <h2 className="text-3xl underline">Place(s) of origin:</h2>}
            {dogData.origin && <p className="text-2xl">{dogData.origin}</p>}
            {dogData.temperament && <h2 className="text-3xl underline">Temperament:</h2>}
            {dogData.temperament && <p className="text-2xl">{dogData.temperament}</p>}
            {dogData.weight?.imperial && <h2 className="text-3xl underline">Weight in pounds:</h2>}
            {dogData.weight?.imperial && <p className="text-2xl">{dogData.weight?.imperial}</p>}
        </div>
    )
}