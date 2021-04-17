import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
    styles: {
        
        global: (props) => ({
          body: {
            bg: mode('white', 'black')(props),
            color: mode('black', '#d9d9d9')(props),
          },
       
        }),
      },
  })
