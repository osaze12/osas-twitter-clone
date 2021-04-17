import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import './Search.css'

function Search() {
    return (
        <Box className='search'>
            <InputGroup >
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color='gray.300' fontSize='20px' />}
                />
                <Input focusBorderColor='rgba(29,161,242,1.00)' 
                    type="tel" placeholder="Search Twitter" 
                    borderRadius='full' size='lg' 
                    border='none' fontSize='sm' />
            </InputGroup>
        </Box>
    )
}

export default Search
