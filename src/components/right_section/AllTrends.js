import { Box } from '@chakra-ui/layout'
import React from 'react'
import TrendList from './TrendList'

function AllTrends() {
    return (
        <Box>
            <TrendList location='Trending in Nigeria'
                trend_name='Telemundo'
                tweets_count='15,569 Tweets'
            />

            <TrendList location='Trending in Nigeria'
                trend_name='Suya'
                tweets_count='4,569 Tweets'
            />

            <TrendList
                ads={true}
                title='#TECNOSpark7P'
                desc='Pre-order now! Get a TECNO wristband and a chance to win N1million'
                promoted_by='TECNO Mobile Nigeria'
            />


            <TrendList 
                trend_name='Ebube Agu'
                tweets_count='124.569 Tweets'
                field='Technology'
            />

            <TrendList 
                trend_name='Government'
                tweets_count='4,569 Tweets'
                field='Politics'
            />

            <TrendList
                show_more={true}
                button='Show more'
            />




        </Box>
    )
}

export default AllTrends
