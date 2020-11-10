import React from 'react'
import Post from './Post.jsx'

const Myposts = () => {
    return(
        <div>
            <Post className="first" value="1 post"/>
            <Post className="second" value="2 post"/>
        </div>
    )
}

export default Myposts