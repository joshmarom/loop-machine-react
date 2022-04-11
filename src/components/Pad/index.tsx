import { SimpleGrid } from '@chakra-ui/react'
import { useActions, useAppState } from '../../overmind'
import { LoopButton } from '../LoopButton'

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
        <SimpleGrid columns={3} spacing={4} w="100%">
            {Object.entries(loops).map(([, { status, name }]) => {
                return (
                    <LoopButton
                        key={name}
                        status={status}
                        onClick={() => handleClick(name)}
                    >
                        {name}
                    </LoopButton>
                )
            })}
        </SimpleGrid>
    )
}

export default Pad
