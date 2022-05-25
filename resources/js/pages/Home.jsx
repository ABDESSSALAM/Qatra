import React from 'react'
import axios from 'axios'
const baseUrl='http://127.0.0.1:8000/api/user';


function Home() {
  const test = async ()=>{
    await axios.get(baseUrl).then(({dt})=>{
      console.log(dt)
    })
  }
  return (
    <div>
      <button onClick={test}>tester</button>
    </div>
  )
}

export default Home