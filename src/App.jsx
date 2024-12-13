import React, { useEffect, useState } from 'react'
import UseEffects from './components/UseEffects'
import Catfacts from './components/Catfacts'
import Events from './components/Events'
import Axios from './components/Axios'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Intervals from './components/Intervals'
import Genderize from './components/Genderize'
import State from './components/State'

const client = new QueryClient ({
  defaultOptions : {
    refetchWindowsFocus : true
  }
}) 
const App = () => {
  return (
    <QueryClientProvider client={client}>
    <div>
      {/* <State/> */}
      {/* <UseEffects /> */}
      <Catfacts/>
      {/* <Events /> */}
      {/* <Axios/> */}
      {/* <Intervals/> */}
      <Genderize/>
      </div>
    </QueryClientProvider>
  )
}


export default App
