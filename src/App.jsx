import React, { useEffect, useState } from 'react'
import UseEffects from './components/UseEffects'
import Catfacts from './components/Catfacts'
import Events from './components/Events'
import Axios from './components/Axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Intervals from './components/Intervals'
import Genderize from './components/Genderize'
import State from './components/State'
import Agify from './components/Agify'

const client = new QueryClient({
  defaultOptions: {
    refetchWindowsFocus: true
  }
})
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <div>
        {/* <State/> */}
        {/* <UseEffects /> */}
        <Catfacts />
        {/* <Events /> */}
        {/* <Axios/> */}
        {/* <Intervals/> */}
        <Genderize />
        <Agify />
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Tailwind CSS!</h1>
          <p className="mt-4 text-gray-600">
            Tailwind CSS makes it easy to build beautiful user interfaces with utility-first classes.
          </p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Click Me
          </button>
        </div>
      </div>
    </QueryClientProvider>
  )
}


export default App
