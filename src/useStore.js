import { create } from 'zustand'

const useStore = create((set) => ({
    contador: 0,
    ruta: [],
    favoritos: [],

    incrementar: () => set((state) => ({ contador: state.contador + 1 })),
}))

export default useStore