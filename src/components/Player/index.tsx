import {
    CircularProgress,
    CircularProgressLabel,
    VStack,
} from '@chakra-ui/react'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { useAppState } from '../../overmind'
import Channel from './Channel'
import PlayStopButton from './PlayStopButton'

export const Player: React.FC = () => {
    const { activeLoops, isPlaying, loops, loopProgress } = useAppState()
    const channels = activeLoops.map((loopId) => loops[loopId])

    return (
        <CircularProgress value={loopProgress} size="200px">
            <CircularProgressLabel as={VStack}>
                <PlayStopButton />
                {channels.map((loop: Loop) => (
                    <AudioPlayerProvider key={loop.name}>
                        <Channel file={loop.path} isPlaying={isPlaying} />
                    </AudioPlayerProvider>
                ))}
            </CircularProgressLabel>
        </CircularProgress>
    )
}

export default Player
