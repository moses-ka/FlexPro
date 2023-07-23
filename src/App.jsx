import { useState } from 'react'
import Header from './component/navbar'
import {Link ,Router} from "@reach/router"

function App() {
// add routing 

  return (
    <>
      <Header Link={Link} />
      <h1 className='text-center '>hello world</h1>
    </>
  )
}

export default App
