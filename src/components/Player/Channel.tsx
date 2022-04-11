import React, { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

interface ChannelProps {
    file: string
    isPlaying: boolean
}

export const Channel = ({ file, isPlaying }: ChannelProps) => {
    const { play, stop } = useAudioPlayer({
        src: file,
        format: 'mp3',
        html5: true,
    })

    const [tick, setTick] = React.useState(0)

    useEffect(() => {
        if (isPlaying) {
            play()
            setTimeout(() => {
                setTick(tick + 1)
            }, 8000)
        } else {
            stop()
        }
    }, [isPlaying, play, stop, tick])

    return <React.Fragment />
}

export default Channel
