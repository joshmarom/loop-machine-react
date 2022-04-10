import { ChakraProvider, Box, Grid, theme, Container } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Pad from './components/Pad'
import { useActions, useAppState } from './overmind'
import Player from './components/Player'
import { useEffect } from 'react'

export const App = () => {
    const { grabLoops } = useActions()
    const { loops } = useAppState()

    useEffect(() => {
        if (!Object.keys(loops).length) grabLoops()
    }, [loops, grabLoops])

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" templateRows="max-content 1fr" gap={4} p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Container maxW="lg">
                        <Player />
                        <Pad />
                    </Container>
                </Grid>
            </Box>
        </ChakraProvider>
    )
}

export default App
