import { useEffect, useState } from 'react'
import { useAppState } from '../overmind'

export const useAudioPreloader = () => {
    const { loops } = useAppState()
    const [isLoading, setIsLoading] = useState(true)
    const [promises, setPromises] = useState<Promise<unknown>[]>([])
    const paths = Object.keys(loops).map((loopId) => loops[loopId].path)

    useEffect(() => {
        if (!paths.length) return

        paths.forEach((path) => {
            const audio = new Audio()
            audio.src = path
            const promise = new Promise((resolve) => {
                audio.addEventListener('canplaythrough', resolve)
            })
            promises.push(promise)
        })
        setPromises(promises)
    }, [paths, promises])

    useEffect(() => {
        Promise.all(promises).then(() => {
            setIsLoading(false)
        })
    }, [promises, isLoading])
    return isLoading
}

export default useAudioPreloader
