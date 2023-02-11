import { useState } from 'react';
import { HiX } from "react-icons/hi"
import BookTherapyImg from "../assets/book_therapy.svg"

export default function BookYoga() {

    const [showSubmit, setShowSubmit] = useState(false);

    return (
        <div>
            <div className='text-center text-6xl font-base'>Book Therapy Sessions</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div class="h-2 bg-tertiary rounded-t-md"></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold text-2xl pt-4"> Your Name </label>
                            <input type="text" placeholder="Name" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block font-semibold text-2xl pt-4"> Reason for the session? </label>
                            <input type="text" placeholder="Reason" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label for="sttend" class="block font-semibold text-2xl pt-4"> Attend session online or offline?</label>

                            <select name="sttend" id="sttend" className='text-xl w-28'>
                                <option className='text-xl w-16' value="Online">Online</option>
                                <option className='text-xl w-16' value="Offline">Offline</option>
                            </select>

                            <label for="bookDate" class="block font-semibold text-2xl pt-4">Book a date:</label>
                            <input type="date" id="bookDate" name="bookDate" className='text-xl'></input>

                            <div className=''>
                                <button onClick={() => setShowSubmit(true)} class="my-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Submit</button>
                                {showSubmit ? (
                                    <div>
                                        <div className="flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                                            <div className="relative my-6 mx-auto w-screen">
                                                <div className="ml-[32rem] border-0 rounded-xl  shadow-lg relative flex flex-col w-[26rem] bg-[#93b0b7] outline-none focus:outline-none ">
                                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">

                                                        <button
                                                            className="absolute right-6"
                                                            onClick={() => setShowSubmit(false)}
                                                            aria-hidden="false"
                                                            aria-label="button"
                                                        >
                                                            <HiX
                                                                className="h-7 w-7 text-white"
                                                                aria-hidden="false"
                                                            />
                                                        </button>
                                                    </div>

                                                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4 text-white">
                                                        <div className="p-8 text-xl">You will be notified once the therapist confirms the session</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                                    </div>
                                ) : null}
                            </div>

                        </div>
                    </div>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={BookTherapyImg} alt="img" width="422" height="422" />
                </div>
            </div>
        </div>
    )
}
