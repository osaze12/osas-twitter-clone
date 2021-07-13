import React from 'react'
import { connect } from 'react-redux'
import './picture.css'

function Picture({state}) {
    return (
        <div className="profile-pix">
              <p>{state.username.charAt(0).toUpperCase() || 'O'}</p>
        </div>
    )
}
const mapStateToProps = (state) => ({
    state: state
})
export default  connect(mapStateToProps) (Picture)
