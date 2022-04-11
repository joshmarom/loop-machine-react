import {
    Box,
    ChakraProvider,
    Container,
    Flex,
    Grid,
    Link,
    theme,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Pad from './components/Pad'
import { useActions } from './overmind'
import Player from './components/Player'
import { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'

export const App = () => {
    const { loadLoops } = useActions()

    useEffect(() => {
        loadLoops()
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" templateRows="max-content 1fr" gap={4} p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Container maxW="lg">
                        <Flex
                            gap={4}
                            direction="column"
                            h="100%"
                            alignItems="center"
                        >
                            <Box>
                                <Player />
                            </Box>
                            <Pad />
                            <Link
                                href="https://github.com/joshmarom/loop-machine-react"
                                mt="auto"
                            >
                                <BsGithub />
                            </Link>
                        </Flex>
                    </Container>
                </Grid>
            </Box>
        </ChakraProvider>
    )
}

export default App
