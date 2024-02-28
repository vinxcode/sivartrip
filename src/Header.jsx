import { useState } from 'react';
import useStore from './useStore';
import { Map, Heart } from 'lucide-react';

const Header = () => {

  const { rutas, incrementar } = useStore()
  const [mostrarRutas, setMostrarRutas] = useState(false)

  const handleRutas = () => {
    if(mostrarRutas){
      setMostrarRutas(false)
    } else {
      setMostrarRutas(true)
    }
  }

  return (
    <div className="flex justify-around items-center font-fredoka font-bold bg-quarzo w-full p-5 shadow-lg">
      <a href="#" className="no-underline"><h1 className="text-secondary">Sivartrip</h1></a>
      <div className='flex items-center justify-center gap-5'>
        
        <div className='flex items-center justify-center gap-1 cursor-pointer relative'
        onClick={handleRutas}>
          <Map strokeWidth={2} size={24} color='#BF1363' />
          <p className='text-secondary'>Ruta</p>
          {
            mostrarRutas && (
              <div className='w-80 h-80 bg-white shadow-xl absolute top-12 flex flex-col justify-start items-start p-6 gap-2 cursor-default'>
                {
                  rutas.map((ruta, index) => (
                    <div className='' key={index}>
                        <h3 className='text-primary'>{ ruta.name }</h3>
                        <p>{ ruta.location }</p>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
        
        <div className='flex items-center justify-center gap-1 cursor-pointer '>
          <Heart strokeWidth={3} size={20} color='#BF1363' />
          <p className='text-secondary'>Favoritos</p>
        </div>

      </div>
    </div>
  )
}

export default Header