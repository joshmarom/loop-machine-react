import { SimpleGrid } from '@chakra-ui/react'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { useActions, useAppState } from '../../overmind'
import { LoopButton } from '../LoopButton'
import Channel from '../Player/Channel'

export const Pad = () => {
    const { loops } = useAppState()
    const { addLoopToQueue, deactivateLoop } = useActions()

    const handleClick = (loopId: string) => {
        if (loops[loopId].status === 'inactive') {
            addLoopToQueue(loopId)
            return
        }

        deactivateLoop(loopId)
    }

    return (
        <SimpleGrid columns={3} spacing={4}>
            {Object.entries(loops).map(([, { status, name, path }]) => (
                <LoopButton
                    key={name}
                    status={status}
                    onClick={() => handleClick(name)}
                >
                    {name}
                    <AudioPlayerProvider>
                        <Channel file={path} isPlaying={false} />
                    </AudioPlayerProvider>
                </LoopButton>
            ))}
        </SimpleGrid>
    )
}

export default Pad
