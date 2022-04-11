import React, { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import { useAppState } from '../../overmind'

interface ChannelProps {
    file: string
    isPlaying: boolean
}

export const Channel = ({ file, isPlaying }: ChannelProps) => {
    const [tick, setTick] = React.useState(0)
    const { interval } = useAppState()
    const { play, stop } = useAudioPlayer({
        src: file,
        format: 'mp3',
        html5: true,
    })

    useEffect(() => {
        if (isPlaying) {
            play()
            setTimeout(() => {
                stop()
                setTick(tick + 1)
            }, interval)
        } else {
            stop()
        }
    }, [isPlaying, play, stop, tick])

    return <React.Fragment />
}

export default Channel
