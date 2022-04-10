import { IconButton } from '@chakra-ui/react'
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs'
import { useActions, useAppState } from '../../overmind'

export const PlayStopButton = () => {
    const { isPlaying } = useAppState()
    const { play, stop } = useActions()

    return (
        <IconButton
            aria-label={isPlaying ? 'Stop' : 'Play'}
            icon={isPlaying ? <BsFillStopFill /> : <BsFillPlayFill />}
            onClick={() => (isPlaying ? stop() : play())}
            fontSize={50}
            height={20}
            width={20}
            borderRadius={'full'}
        />
    )
}

export default PlayStopButton
