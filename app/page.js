"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [titel, setTitel] = useState("")
  const [Dec, setDec] = useState("")
  const [mainTsk, setMainTsk] = useState([])

  const submitHandaler = (e) => {
    e.preventDefault()

    setMainTsk([...mainTsk,{titel, Dec}])

    setTitel("");
    setDec("");
    console.log(mainTsk);
  }

  const deleteHandaler = (i) => {
    let copyTsk = [...mainTsk];
    copyTsk.splice(i,1);
    setMainTsk(copyTsk);
  }

  let renderTsk = <h2>No Task Available</h2>

  if(mainTsk.length>0){
    renderTsk =mainTsk.map((t, i)=>{
      return (
        <li key={i} className=' flex justify-between items-baseline'>
          <div className='flex items-center justify-between font-semibold text-xl mt-5 gap-6 w-1/2'>
            <h5 className='text-2xl font-semibold'>{t.titel}</h5>
            <h6 className='text-xl font-semibold'>{t.Dec}</h6>
          </div>
          <button onClick={() =>{
            deleteHandaler(i)
          }} className=' bg-red-400 text-white px-4 py-2 rounded font-bold '>Delete</button>
        </li>
      )
    })
  }


  return (
    <>
      <h1 className=' bg-black text-white p-5 text-center font-bold text-2xl'>My ToDo List</h1>

      <form onSubmit={submitHandaler} className='flex justify-center items-center flex-wrap'>
        <input type="text" 
        placeholder='Enter your Task' 
        className=' text-2xl border-zinc-800 border-2 m-8 pz4 py-2'
        value={titel}
        onChange ={(e) =>{
          setTitel(e.target.value)
        }}
        />

        <input type="text" 
        placeholder='Enter Task Decription' 
        className=' text-2xl border-zinc-800 border-2 m-8 pz4 py-2'
        value={Dec}
        onChange = {(e) =>{
          setDec(e.target.value)
        }}
        />

        <button className='bg-black p-2 text-white rounded-md font-bold'>Add Task</button>
      </form>

      <hr/>

      <div className='p-8 bg-slate-400'>
        <ul>
          {renderTsk}
        </ul>
      </div>
    </>
  )
}

export default page