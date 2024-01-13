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
        <div className="flex flex-col gap-y-12 p-8 justify-center items-center">
            <Link
                className="hover:underline text-center"
                to=".."
                relative="path">
                &larr; <span className="text-3xl">Back to breeds list</span>
            </Link>
            <h1 className="text-4xl underline text-center">Facts about {dogData.name}s:</h1>
            <div className="md:hidden flex flex-col justify-center items-center text-center px-4 
            py-8 gap-y-10">
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
            <table className="max-[767px]:hidden table-fixed border-collapse border border-black">
                {
                    dogData.bred_for &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Reasons for breeding:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.bred_for}</td>
                    </tr>
                }
                {
                    dogData.breed_group &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Breed group:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.breed_group}</td>
                    </tr>
                }
                {
                    dogData.height?.imperial &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Height in inches:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.height?.imperial}</td>
                    </tr>
                }
                {
                    dogData.life_span &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Average life span:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.life_span}</td>
                    </tr>
                }
                {
                    dogData.origin &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Place(s) of origin:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.origin}</td>
                    </tr>
                }
                {
                    dogData.temperament &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Temperament:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.temperament}</td>
                    </tr>
                }
                {
                    dogData.weight?.imperial &&
                    <tr>
                        <td className="border border-black px-8 py-4 text-2xl">Weight in pounds:</td>
                        <td className="border border-black px-8 py-4 text-2xl">{dogData.weight?.imperial}</td>
                    </tr>
                }
            </table>
        </div>
    )
}