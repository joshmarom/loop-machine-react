import loops from '../assets/loops'

export const getLoops = () =>
    loops.reduce((acc: LoopsObj, loop) => {
        acc[loop.name] = {
            ...loop,
            status: 'inactive',
        }
        return acc
    }, {})

export const preloadLoops = (loops: LoopsObj) => {
    const promises = Object.values(loops).map(({ path }: Loop) => {
        const audio = new Audio()
        audio.src = path
        return new Promise((resolve) => {
            audio.addEventListener('canplaythrough', resolve)
        })
    })
    return Promise.all(promises)
}
