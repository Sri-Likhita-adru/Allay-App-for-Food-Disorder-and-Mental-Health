import React from 'react'
import { Link } from 'react-router-dom'
import BookYogaImg from '../assets/book.jpg'
import OnlineYogaImg from '../assets/online_yoga.jpg'

export default function TherapySessions() {
    return (
        <div>
            <div className='text-center text-6xl font-base'>Therapy Sessions</div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full p-28 space-x-4" >

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={BookYogaImg} />
                    </div>
                    <Link to="/booktherapy">
                        <div className='grid place-items-center'>
                            <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Book Yoga</button>
                        </div>
                    </Link>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={OnlineYogaImg} />
                    </div>
                    <a href='https://meet.google.com/guf-kyyk-sfs' target="_blank" className='grid place-items-center'>
                        <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Attend Online</button>
                    </a>
                </div>

            </div>
        </div>
    )
}
