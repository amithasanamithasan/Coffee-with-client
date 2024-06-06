
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffeecard from './Components/Coffeecard'
import { useState } from 'react'

function App() {
  const lodadedcoffees=useLoaderData()
  //  instend deleted
const[coffeess, setCoffess] =useState(lodadedcoffees);

  return (
    <div className='m-20'>
 
 <h1 className='text-3xl'>
        COFFEEY SHOP:
      </h1>
      <div className='grid grid-cols-2 gap-4'>
      {
        lodadedcoffees.map(coffee => (
          <Coffeecard key={coffee._id} 
          coffee={coffee}>
            coffeess={coffeess}
            setCoffess={setCoffess}
          </Coffeecard>
        ))
      }
     </div>
    </div>
  )
}

export default App
