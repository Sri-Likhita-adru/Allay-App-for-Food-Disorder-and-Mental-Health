import React from 'react'
import { Link } from 'react-router-dom'
import BookTherapyImg from "../assets/book_therapy.svg"
import Yoga from "../assets/yoga.svg"
import Journal from "../assets/journal.svg"

export default function Activities() {
    return (
        <div>
            <div className='text-center text-6xl font-base'>Activities</div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full p-28 space-x-4" >

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative grid place-items-center">
                        <img class="h-56 w-72 rounded-2xl object-cover" src={BookTherapyImg} />
                    </div>
                    <Link to="/therapysessions">
                        <div className='grid place-items-center'>
                            <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Therapy</button>
                        </div>
                    </Link>
                </div>


                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative grid place-items-center">
                        <img class="h-56 w-72 rounded-2xl object-cover" src={Yoga} />
                    </div>
                    <Link to="/yoga">
                        <div className='grid place-items-center'>
                            <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Yoga</button>
                        </div>
                    </Link>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative grid place-items-center">
                        <img class="h-56 w-72 rounded-2xl object-cover" src={Journal} />
                    </div>
                    <Link to="/journal">
                        <div className='grid place-items-center'>
                            <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Journal</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
