import { useState } from 'react'
import ListadoDestinos from './ListadoDestinos'
import Header from './Header'
import dataDestinos from './dataDestinos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
      <div className='flex flex-col gap-5
      absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]'>
        <Header />
        <ListadoDestinos dataDestinos={dataDestinos}/>
      </div>
    </div>
  )
}

export default App

