import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

interface ChannelProps {
    file: string
    isPlaying: boolean
}

export const Channel = ({ file, isPlaying }: ChannelProps) => {
    const { play, stop } = useAudioPlayer({
        src: file,
        format: 'mp3',
        loop: true,
        html5: true,
        buffer: true,
    })

    useEffect(() => {
        if (isPlaying) play()
        else stop()
    }, [isPlaying, play, stop])

    return <></>
}

export default Channel
