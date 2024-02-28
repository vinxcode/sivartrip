import Destino from './Destino'
import useStore from './useStore'

const ListadoDestinos = () => {

  const { destinos } = useStore()

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl w-[800px] mx-auto bg-quarzo p-8 shadow-xl">
        {
          destinos.map((destino, index) => (
            <Destino key={index} destino={destino}/>
            ))
        }
    </div>
  )
}

export default ListadoDestinos