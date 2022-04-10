import loops from '../assets/loops'

export const loopsObj = loops.reduce((acc, loop) => {
    acc[loop.name] = {
        ...loop,
        status: 'inactive',
    }
    return acc
}, {})
