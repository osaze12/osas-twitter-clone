import { Tooltip } from '@chakra-ui/tooltip'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux'
import './NewTweet.css'

function NewTweet({tooltip, w, h, setSize, dispatch}) {

    const styles = {
        width: w,
        height: h
    }
    return (
        <div className='tweet_feather' onClick={()=> dispatch({type:'MODAL', payload: true})}>
            <a href='#tweet' style={styles}>
                <Tooltip label={tooltip} fontSize='smaller'>
                    <span className='feather_add' style={{fontSize: `${setSize ? setSize : ''}`}}><FontAwesomeIcon icon={faFeatherAlt} /> </span>
                </Tooltip>
            </a>
        </div>
    )
}
const mapStateToProps = (state) => ({
    showModal: state.showModal
})
export default connect(mapStateToProps) (NewTweet)
