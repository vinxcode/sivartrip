import useStore from './useStore';
import { Map, Heart } from 'lucide-react';

const Header = () => {

  const { contador, incrementar } = useStore()

  return (
    <div className="flex justify-around items-center font-fredoka font-bold bg-quarzo w-full p-5 shadow-lg">
      <a href="#" className="no-underline"><h1 className="text-secondary">Sivartrip</h1></a>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex items-center justify-center gap-1 cursor-pointer'>
          <Map strokeWidth={2} size={24} color='#BF1363' />
          <p className='text-secondary'>Ruta</p>
        </div>
        <div className='flex items-center justify-center gap-1 cursor-pointer'>
          <Heart strokeWidth={3} size={20} color='#BF1363' />
          <p className='text-secondary'>Favoritos</p>
        </div>
      </div>
    </div>
  )
}

export default Header