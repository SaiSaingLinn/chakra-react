// Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// Global colors
import Colors from "./colors"

// Global style overrides
import GlobalStyle from './styles'

// Component style overrides
import Button from "./components/button"

const overrides = {
    // colors
    colors: { ...Colors },
    // global style
    styles: { ...GlobalStyle },
    components: {
        Button: { ...Button }
    }
}

const theme = extendTheme(overrides)

export default theme