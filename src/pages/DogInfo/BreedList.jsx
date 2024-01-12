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
            url: "https://dog-info-site-backend.onrender.com/images/search"
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

    return <h1>Breeds here</h1>
}