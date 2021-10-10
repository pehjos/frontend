import React from 'react'
import './Video.css'
import Videoplay from './video.mp4'
import Robot from './video.mp4'
import Robots from './video.mp4'
import Videocard from './Videocard'
function Video() {
    return (
        <div className="video">
             <div className="videocontent">
             <Videocard
            newsrc="time blog"
            newtype="IB"
            newstypeimg ="https://thumbs.dreamstime.com/b/blue-soap-bubbles-isolated-pink-bakground-background-bright-soap-bubbles-png-bubbles-set-isolated-transparent-145694204.jpg"
           videosrc={Robot}
            title="New jesey team has join the primer "
            description="On this year early june the national team of the united state join the legue as stated by the country prime minister the contract was sigh to be taken in 2121"
            time="50m"
            comment="56"
            share="200" 
             love="4k"
            
            
            />

<Videocard
            newsrc="time blog"
            newtype="IB"
            newstypeimg ="https://thumbs.dreamstime.com/b/blue-soap-bubbles-isolated-pink-bakground-background-bright-soap-bubbles-png-bubbles-set-isolated-transparent-145694204.jpg"
           videosrc={Robots}
            title="New jesey team has join the primer "
            description="On this year early june the national team of the united state join the legue as stated by the country prime minister the contract was sigh to be taken in 2121"
            time="50m"
            
            comment="56"
            share="200" 
             love="4k"
            
            />

<Videocard
            newsrc="time blog"
            newtype="IB"
            newstypeimg ="https://thumbs.dreamstime.com/b/blue-soap-bubbles-isolated-pink-bakground-background-bright-soap-bubbles-png-bubbles-set-isolated-transparent-145694204.jpg"
           videosrc={Videoplay}
            title="New jesey team has join the primer "
            description="On this year early june the national team of the united state join the legue as stated by the country prime minister the contract was sigh to be taken in 2121national team of the united state join the legue as stated by the country prime minister the contract was sigh to be taken in 2121"
            time="50m"
            comment="56"
           share="200" 
            love="4k"
            />


            </div>  
        </div>
    )
}

export default Video
