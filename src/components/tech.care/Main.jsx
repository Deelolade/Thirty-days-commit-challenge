import React from 'react'
import Chart from "./Chart"
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { BsLungs } from "react-icons/bs";
import { PiThermometerHotDuotone } from "react-icons/pi";
import { LuHeartPulse } from "react-icons/lu";

const Main = () => {
    return (
        <div>
            <main className="w-[50vw] mx-6 bg-white px-6 py-5 rounded-lg h-[80vh]">
                <h1 className='font-bold text-2xl mb-5'>Diagnosis History</h1>
                <div className="top flex rounded-lg shadow-md bg-purple-100 pt-5 pr-4">
                    <Chart />
                    <div className="w-[35%]  h-80  mt-7 ">
                        <div className=" flex leading-4">
                            <GoDotFill className='text-pink-500 mr-1' /><h6 className='font-semibold'>Systolic</h6>
                        </div>
                        <h4 className='text-xl font-bold my-3'>160</h4>
                        <div className=" flex ">
                            <TiArrowSortedUp className='mt-1' /><p>Higher than Average</p>
                        </div>
                        <hr className='border-t-2 border-slate-500  my-6 opacity-20' />
                        <div className="flex leading-4">
                            <GoDotFill className='text-purple-500 mr-1' /><h6 className='font-semibold'>Diastolic</h6>
                        </div>
                        <h4 className='text-xl font-bold my-3'>78</h4>
                        <div className=" flex">
                            <TiArrowSortedDown className='mt-1' /><p>Lower than Average</p>
                        </div>
                    </div>
                </div>
                <div className=" my-5 flex justify-between ">
                    <div className="lungs w-72 h-[26vh] p-5 bg-blue-100 rounded-lg">
                        <div className="rounded-full h-20 w-20 bg-white flex">
                            <BsLungs className='mx-auto text-5xl text-black hover:text-blue-500  my-auto' />
                        </div>
                        <p className='mt-4'>Respiratory Rate</p>
                        <h4 className='text-3xl font-bold mt-1'>22 bpm</h4>
                        <p className='mt-6 '>Normal</p>
                    </div>
                    <div className="thermometer w-72 h-[26vh] p-5 bg-pink-200 rounded-lg">
                        <div className="rounded-full h-20 w-20 bg-white flex">
                            <PiThermometerHotDuotone className='mx-auto text-5xl text-black  hover:text-pink-500 my-auto' />
                        </div>
                        <p className='mt-4'>Temperature</p>
                        <h4 className='text-3xl font-bold mt-1'>98.6&deg; F</h4>
                        <p className='mt-6 '>Normal</p>

                    </div>
                    <div className="heart w-72 h-[26vh] p-5 bg-red-100 rounded-lg">
                        <div className="rounded-full h-20 w-20 bg-white flex  ">
                            <LuHeartPulse className='mx-auto text-5xl text-black my-auto hover:text-red-500' />
                        </div>
                        <p className='mt-4'>Heart Rate</p>
                        <h4 className='text-3xl font-bold mt-1'>78 bpm</h4>
                        <p className='mt-6 '>Lower than Average</p>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
