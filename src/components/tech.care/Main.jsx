import React from 'react'
import Chart from "./Chart"
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";

const Main = () => {
    return (
        <div>
            <main className="w-[50vw] mx-8 bg-white px-6 py-6 rounded-lg ">
                <h1 className='font-bold text-2xl mb-8'>Diagnosis History</h1>
                <div className="top flex rounded-lg shadow-md bg-purple-100 pt-5 pr-4">
                    <Chart />
                    <div className="w-[35%]  h-80  mt-7 ">
                        <div className=" flex leading-4">
                            <GoDotFill className='text-pink-500 mr-1' /><h6 className='font-semibold'>Systolic</h6>
                        </div>
                        <h4 className='text-xl font-bold my-3'>160</h4>
                        <div className=" flex ">
                        <TiArrowSortedUp className='mt-1'/><p>Higher than Average</p>
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
            </main>
        </div>
    )
}

export default Main
