import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Img12 from "../assets/12.png"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Your weekly calorie consumption',
    // },
  },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fir', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Calorie Consumption',
      // Max 2000 calories per day
      data: [1800, 2008, 1680, 2081, 1956, 2000, 1900],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [65, 33, 44, 86, 56],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function DailyReport() {
  return (
    <div>
      <div className='text-center text-6xl font-base'>Daily Report</div>

      <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
        <div className=''>
          <div class="mt-4 bg-white shadow-md rounded-lg text-left">
            <div class="h-2 bg-tertiary rounded-t-md"></div>
            <div class="px-8 py-4">
              <label class="block font-semibold text-2xl pt-4"> What did you eat for your meal? </label>
              <textarea type="text" placeholder="What did you eat for your meal?" class="border w-full text-xl h-36 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
            </div>

            <div class="px-8 py-4">
              <label class="block font-semibold text-2xl pt-4"> What are the main Ingredients used in it </label>
              <textarea type="text" placeholder="What are the main Ingredients used in it" class="border w-full text-xl h-56 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
            </div>

            <div className='ml-6'>
              <Link to="/reportresult">
                <button class="m-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Submit</button>
              </Link>
            </div>

          </div>



          <div className='grid place-items-center'>
            <div className='w-[40rem] py-8'>
              <img src={Img12} alt="img" />
              {/* <Line options={options} data={data} /> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
