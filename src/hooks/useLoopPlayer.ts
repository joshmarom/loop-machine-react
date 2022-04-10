import { useActions, useAppState } from '../overmind'

export const useLoopPlayer = () => {
    const { activeLoops, isPlaying, loops, loopProgress } = useAppState()
    const { play, stop } = useActions()

    return {
        loops: activeLoops.map((loopId) => loops[loopId]),
        isPlaying,
        loopProgress,
        play,
        stop,
    }
}

export default useLoopPlayer
