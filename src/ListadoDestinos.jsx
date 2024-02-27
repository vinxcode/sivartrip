import Destino from './Destino'

const ListadoDestinos = (props) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl w-[800px] mx-auto bg-quarzo p-8 shadow-xl">
        {
          props.dataDestinos.map((destino, index) => (
            <Destino key={index} destino={destino}/>
            ))
        }
    </div>
  )
}

export default ListadoDestinos