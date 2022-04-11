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
    const { isPlaying, loops, loopProgress } = useAppState()
    const channels = Object.keys(loops).map((loopId) => loops[loopId])

    return (
        <CircularProgress value={loopProgress} size="200px">
            <CircularProgressLabel as={VStack}>
                <PlayStopButton />
                {channels.map(({ name, path, status }: Loop) => (
                    <AudioPlayerProvider key={name}>
                        <Channel
                            file={path}
                            isPlaying={isPlaying && 'active' === status}
                        />
                    </AudioPlayerProvider>
                ))}
            </CircularProgressLabel>
        </CircularProgress>
    )
}

export default Player
