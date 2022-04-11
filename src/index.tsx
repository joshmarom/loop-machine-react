import { ColorModeScript } from '@chakra-ui/react'
import { StrictMode } from 'react'
// @ts-ignore: noImplicitAny
import { createRoot } from 'react-dom/client'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import * as serviceWorker from './serviceWorker'
import App from './App'

const overmind = createOvermind(config)
const rootElement = document.getElementById('root')
const root: Root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Provider value={overmind}>
            <ColorModeScript />
            <App />
        </Provider>
    </StrictMode>
)

serviceWorker.unregister()
