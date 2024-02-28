import { create } from 'zustand'
import dataDestinos from './dataDestinos'

const useStore = create((set) => ({
    contador: 0,
    destinos: dataDestinos,
    ruta: [],
    favoritos: [],

    incrementar: () => set((state) => ({ contador: state.contador + 1 })),
}))

export default useStore