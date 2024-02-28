import Destino from './Destino'
import useStore from './useStore'

const ListadoDestinos = () => {

  const { destinos, rutas } = useStore()

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl w-full md:w-11/12 lg:w-[800px] mx-auto bg-quarzo p-3 md:p-8 shadow-xl">
        {
          destinos.map((destino, index) => (
            <Destino key={index} destino={destino} index={index}/>
            ))
        }
    </div>
  )
}

export default ListadoDestinos