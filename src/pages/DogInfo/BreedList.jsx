import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function BreedList() {

    const [loading, setLoading] = useState(false)
    const [dogData, setDogData] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [activePage, setActivePage] = useState(1)

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
            <div
                className="text-center"
                key={dog.id}>
                <Link
                    className="hover:underline text-2xl"
                >
                    <img
                        className="size-80 object-cover mb-7"
                        src={dog.image.url}>

                    </img>
                    {dog.name}
                </Link>
            </div>
        )
    })

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = dogBreedList.slice(indexOfFirstItem, indexOfLastItem)
    const pageNumbers = []

    function paginate(pageNumber) {
        return setCurrentPage(pageNumber)
    }

    for (let i = 1; i <= Math.ceil(dogBreedList.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    function handlePageClick(number) {
        setActivePage(number)
        paginate(number)
    }

    const tenItemList = pageNumbers.map(number => {
        return (
            <li
                className="hover:underline"
                key={number}
            >
                <a
                    onClick={() => {
                        handlePageClick(number)
                        paginate(number)
                    }}
                >
                    {number}
                </a>
            </li>
        )
    })

    return (
        <div className="flex flex-col justify-center items-center p-8 gap-y-8">
            <h1 className="font-bold text-2xl">Select a breed:</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
                gap-8">
                {currentItems}
            </div>
            <div>
                <nav className="flex flex-col gap-y-6">
                    <h1 className="font-bold text-xl text-center">Pages:</h1>
                    <ul className="list-none flex flex-wrap justify-center gap-x-8 md:gap-x-6 
                                    gap-y-4 cursor-pointer">
                        {
                            tenItemList
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}