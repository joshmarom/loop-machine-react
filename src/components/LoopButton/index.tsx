import { AspectRatio, Box } from '@chakra-ui/react'

interface Props {
    status: loopStatus
    children: React.ReactNode
    onClick: () => void
}

export const LoopButton: React.FC<Props> = ({ status, children, ...props }) => {
    const statusColor = {
        active: ['blue.500', 'white'],
        queued: ['blue.100', 'blue.700'],
        inactive: ['gray.200', 'gray.700'],
    }

    return (
        <AspectRatio ratio={1}>
            <Box
                as="button"
                borderRadius={4}
                borderColor="gray.200"
                bg={statusColor[status][0]}
                color={statusColor[status][1]}
                fontSize="lg"
                fontWeight="bold"
                transition="all 0.3s"
                p={4}
                {...props}
            >
                {children}
            </Box>
        </AspectRatio>
    )
}
