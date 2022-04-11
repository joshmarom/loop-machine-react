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
        intervalId: Timeout | null
        isPlaying: boolean
        loopProgress: number
        loopsPreloaded: boolean
        queue: string[]
        activeLoops: string[]
    }
    interface Root {
        render(children: React.ReactChild | Iterable<React.ReactNode>): void
        unmount(): void
    }
}

export {}
