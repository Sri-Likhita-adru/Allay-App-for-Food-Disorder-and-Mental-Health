import React from 'react'
import { Link } from 'react-router-dom'
import CaloriImg from "../assets/calorie.svg"

export default function CalorieCalc() {
    return (
        <div>
            <div className='text-center text-6xl font-base'>Calorie Calculator</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div class="h-2 bg-tertiary rounded-t-md"></div>
                        <div class="px-8 py-4">
                            <label class="block font-semibold text-2xl pt-4"> Height(in cm) </label>
                            <input type="text" placeholder="Height" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        </div>

                        <div class="px-8 py-4">
                            <label class="block font-semibold text-2xl pt-4"> Weight(in kg) </label>
                            <input type="text" placeholder="Weight" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        </div>

                        <div class="px-8 py-4">
                            <label class="block font-semibold text-2xl pt-4"> Age </label>
                            <input type="text" placeholder="Age" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        </div>

                        <div className='ml-6'>
                                <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Calculate</button>
                        </div>
                    </div>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={CaloriImg} alt="img" width="422" height="422" />
                </div>
            </div>
        </div>
    )
}
