import { React, useState } from 'react'
import { HiX } from "react-icons/hi";

export default function Yoga() {
    return (
        <div>
            <div className='text-center text-6xl font-base'>Yoga</div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 space-x-3 space-y-3" >

                <div className=''>
                    <iframe src="https://www.youtube.com/embed/v7AYKMP6rOE" title="1" height={250} width={400} />
                </div>

                <div className=''>
                    <iframe src="https://www.youtube.com/embed/gXuq4M5rU9E" title="1" height={250} width={400} />
                </div>

                <div className=''>
                    <iframe src="https://www.youtube.com/embed/5Ju3XvZ6S1Q" title="1" height={250} width={400} />
                </div>

                <div className=''>
                    <iframe src="https://www.youtube.com/embed/hJbRpHZr_d0" title="1" height={250} width={400} />
                </div>

                <div className=''>
                    <iframe src="https://www.youtube.com/embed/XCIviBT3Txc" title="1" height={250} width={400} />
                </div>

                <div className=''>
                    <iframe src="https://www.youtube.com/embed/VaoV1PrYft4" title="1" height={250} width={400} />
                </div>

            </div>
        </div>
    )
}