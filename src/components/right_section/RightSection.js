import { Box } from '@chakra-ui/layout'
import React from 'react'
import Footer from '../Footer'
import Search from './Search'
import TrendSection from './TrendSection'

function RightSection() {
    return (
        <Box paddingLeft='10' paddingRight='10' marginRight='16' position='fixed' >
            <Search />
            <TrendSection />

            <Footer />
        </Box>
    )
}

export default RightSection
