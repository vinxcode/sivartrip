import { Tag, Clock3, MapPin, Plus, Heart } from 'lucide-react';
import useStore from './useStore';

const Destino = (props) => {

  const { destinos, rutas, agregarDestinoARutas } = useStore()

  const handleAgregarRuta = () => {
    agregarDestinoARutas(props.destino)
  }

  return (
    <article className="shadow-lg p-10 flex flex-col md:flex-row gap-4 font-fredoka md:w-11/12 w-4/5 bg-white rounded-xl">
      <img src={props.destino.imagePath} alt="Playa el tunco"
        className=" w-full md:w-[300px] rounded-xl" />
      <div className="flex flex-col justify-start items-start gap-2">
        <h2>{props.destino.name}</h2>
        <p>{props.destino.description}</p>
        <div className="flex gap-2 justify-center items-center">
          <Tag strokeWidth={3} size={15} color='#0E79B2' />
          {
            props.destino.tags.map((tag, index) => (
              <p className="text-primary" key={index}> #{tag} </p>
            ))
          }
          <div className='flex ml-3 gap-2 justify-center items-center'>
            <Clock3 strokeWidth={3} size={15} color='#0E79B2' />
            <p className='text-primary'>{props.destino.time} minutes</p>
          </div>

        </div>
        <div className='flex justify-center items-center gap-2'>
          <MapPin strokeWidth={3} size={16} color='#BF1363' />
          <p className='text-secondary'> {props.destino.location} </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
          <button className='flex justify-center items-center gap-2 px-5 py-3 bg-primary text-quarzo cursor-pointer rounded-xl border-none
          hover:bg-primary-hover font-fredoka w-full lg:w-1/2'
            onClick={handleAgregarRuta}>
            <Plus strokeWidth={3} size={15} />
            Agregar a la ruta</button>
          <button className='flex justify-center items-center gap-2 px-5 py-3 bg-secondary text-quarzo cursor-pointer rounded-xl border-none
            hover:bg-secondary-hover font-fredoka w-full lg:w-1/2'>
            <Heart strokeWidth={3} size={15} />
            Agregar a Favoritos</button>
        </div>
      </div>
    </article>
  )
}

export default Destino