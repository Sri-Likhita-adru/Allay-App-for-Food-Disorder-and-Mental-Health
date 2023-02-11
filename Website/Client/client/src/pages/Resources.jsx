import React from 'react'
import { Link } from 'react-router-dom'
import CalorieCalc from "../assets/Calorie.svg"
import Report from "../assets/report.svg"
import MealRecomm from "../assets/mealrecomm.svg"

export default function Resources() {
  return (
    <div>
      <div className='text-center text-6xl font-base'>Resources</div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full p-28 space-x-4" >

        <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 w-72 rounded-2xl object-cover" src={CalorieCalc} />
          </div>
          <Link to="/calorieCalc">
            <div className='grid place-items-center'>
              <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Calorie Calculator</button>
            </div>
          </Link>
        </div>

        <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 w-72 rounded-2xl object-cover" src={Report} />
          </div>
          <Link to="/report">
            <div className='grid place-items-center'>
              <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Daily Report</button>
            </div>
          </Link>
        </div>

        <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 w-72 rounded-2xl object-cover" src={MealRecomm} />
          </div>
          <Link to="/meal">
            <div className='grid place-items-center'>
              <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Meal Recommendation</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
