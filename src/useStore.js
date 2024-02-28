import { create } from 'zustand'
import dataDestinos from './dataDestinos'

const useStore = create((set) => ({
    contador: 0,
    destinos: dataDestinos,
    rutas: [],
    favoritos: [],

    incrementar: () => set((state) => ({ contador: state.contador + 1 })),
    agregarDestinoARutas: (destino) => set((state) => ({ rutas: [...state.rutas, destino]}))
}))

export default useStore