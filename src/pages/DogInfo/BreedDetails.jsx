import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

export default function BreedDetails() {
    const { name } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [dogData, setDogData] = useState([])

    console.log(name)

    useEffect(() => {
        setLoading(true)

        const options = {
            method: "GET",
            url: `https://dog-info-site-backend.onrender.com/breeds/${name}`
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

    }, [name])

    return (
        <h1>Facts about </h1>
    )
}