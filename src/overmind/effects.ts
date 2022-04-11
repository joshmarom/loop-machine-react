import loops from '../assets/loops'

export const getLoops = () =>
    loops.reduce((acc, loop) => {
        acc[loop.name] = {
            ...loop,
            status: 'inactive',
        }
        return acc
    }, {})

export const preloadLoops = (loops: Loop[]) => {
    const promises = Object.keys(loops).map((loopId) => {
        const audio = new Audio()
        audio.src = loops[loopId].path
        return new Promise((resolve) => {
            audio.addEventListener('canplaythrough', resolve)
        })
    })
    return Promise.all(promises)
}
