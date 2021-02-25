// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return (
        <div> 
            <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
            <button className="resolution" onClick={this.handleResClick}>Resolution</button>
        </div>
        )
    }
}

export default YouTubeDebugger