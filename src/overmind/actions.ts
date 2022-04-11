export const loadLoops = async ({ state, effects }) => {
    if (!Object.keys(state.loops).length) {
        state.loops = effects.getLoops()
    }
    if (!state.loopsPreloaded) {
        await effects.preloadLoops(Object.values(state.loops))
        state.loopsPreloaded = true
    }
}

export const setLoopsPreloaded = ({ state }) => (state.loopsPreloaded = true)

export const _updateQueue = ({ state }) => {
    state.queue = Object.keys(state.loops).filter(
        (loopId) => state.loops[loopId].status === 'queued'
    )
}

export const _updateActiveLoops = ({ state }) => {
    state.activeLoops = Object.keys(state.loops).filter(
        (loopId) => state.loops[loopId].status === 'active'
    )
}

export const addLoopToQueue = ({ state, actions }, loopId: string) => {
    state.loops[loopId].status = 'queued'
    actions._updateQueue()
}

export const activateQueuedLoops = ({ state, actions }) => {
    state.queue.forEach(
        (loopId: string | number) => (state.loops[loopId].status = 'active')
    )
    state.queue = []
    actions._updateActiveLoops()
}

export const deactivateLoop = ({ state, actions }, loopId: string) => {
    state.loops[loopId].status = 'inactive'
    actions._updateQueue()
    actions._updateActiveLoops()
}

export const _updateLoopProgress = ({ state }, progress: number) =>
    (state.loopProgress = progress)

export const _setLoopInterval = ({ state, actions }) => {
    state.intervalId = setInterval(() => {
        const newLoop = 100 === state.loopProgress + 10
        const newProgress = newLoop ? 0 : state.loopProgress + 10
        actions._updateLoopProgress(newProgress)
        if (!state.loopProgress) actions.activateQueuedLoops()
    }, state.interval / 10)
}

export const play = ({ state, actions }) => {
    actions.activateQueuedLoops()
    state.isPlaying = true
    actions._setLoopInterval()
}

export const stop = ({ state, actions }) => {
    state.isPlaying = false
    clearInterval(state.intervalId)
    actions._updateLoopProgress(0)
}
