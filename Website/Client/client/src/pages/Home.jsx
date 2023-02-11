import React from 'react'
import HeroHomeImg from "../assets/hero.svg"

export default function Home() {
    return (
        <div>
            <main className="flex flex-col items-center justify-center mt-4">

                <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
                    <div className=''>
                        <h1 className='text-3xl md:text-6xl'>About Us</h1>
                        <p className='text-xl md:text-2xl py-4 tracking-wider'>A shoort description of web site.</p>

                    </div>
                    <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                        <img src={HeroHomeImg} alt="img" width="350" height="350" />
                    </div>
                </div>

                <section
                    className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center parallex1">
                    <h1 className="text-5xl font-semibold mt-20 mb-10">
                        Keep your mind and body healthy
                    </h1>

                    <span className="text-center font-bold text-xl my-20">
                        <p className=''>Stay fit </p>

                        <hr className="h-[0.15rem] w-96 my-4 bg-black" />

                        <p className=''>Control your eating habits</p>

                        <hr className="h-[0.15rem] w-96 my-4 bg-black" />

                        <p className=''>Maintain a proper diet</p>

                    </span>
                </section>

                <section className="p-20 space-y-8">
                    <div className=''>
                        <h1 className='text-5xl'>Tips to keep your mind calm:</h1>
                        <ul className="text-xl ml-5 py-4">
                            <li className="list-disc py-1">Take a break.</li>
                            <li className="list-disc py-1">Try guided meditation.</li>
                            <li className="list-disc py-1">Focus on your breathing.</li>
                            <li className="list-disc py-1">Spend some time in nature.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}
