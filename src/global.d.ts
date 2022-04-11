declare global {
    type loopStatus = 'inactive' | 'active' | 'queued'
    interface Loop {
        name: string
        path: string
        status: loopStatus
    }

    interface LoopsObj {
        [key: string]: Loop
    }

    interface State {
        loops: LoopsObj
        interval: number
        intervalId: number | null
        isPlaying: boolean
        loopProgress: number
        loopsPreloaded: boolean
        queue: string[]
        activeLoops: string[]
    }
}

export {}
