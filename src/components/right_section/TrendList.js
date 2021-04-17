import { Box, Divider, Text } from '@chakra-ui/layout'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import React from 'react'
import './TrendList.css';

function TrendList({location, field, trend_name, tweets_count, ads, title, desc, promoted_by, show_more, button}) {
    return (
        <Box >
           <Divider  />
            <Box cursor='pointer' className='trendlist' padding='2'>
                
                {show_more ?
                <>
                    <Box className='show_more_button'>
                        <Text fontSize='md' color='#1da1f2'>{button} </Text>
                    </Box>
                </>
                :
                <>
                    {ads ? 
                    <>
                        <Box className='ads_top'>
                            <Text><b>{title} </b></Text>
                        </Box>

                        <Box className='ads_center' maxW='300px'>
                            <Text fontSize="sm" lineHeight='5' color='gray'>{desc}</Text>
                        </Box>

                        <Box className='ads_buttom'>
                            <Text fontSize='xs' color='grey'><ExternalLinkIcon /> Promoted by{promoted_by}</Text>
                        </Box>
                    </>
                    :
                    <>
                        <Box className='trend_list_top'>
                            {field ? <Text fontSize="sm" color='gray'>{field} &bull; Trending </Text>
                            :
                            <Text fontSize="sm" color='gray'>{location} </Text>
                            }
                        </Box>

                        <Box className='trend_list_center'>
                            <Text><b>{trend_name}</b> </Text>
                        </Box>

                        <Box className='trend_list_buttom'>
                            <Text fontSize="sm" color='gray'>{tweets_count} </Text>
                        </Box>
                    </>
                    }
                </>
                }
            </Box>
        </Box>
    )
}

export default TrendList
