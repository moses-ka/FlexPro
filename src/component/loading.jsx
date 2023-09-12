import React from 'react'
import {VscLoading} from 'react-icons/vsc'
export default function Loading() {
  return (
    <div className='flex justify-center items-center'>
        <VscLoading className="animate-spin text-5xl text-black" />

    </div>
  )
}
