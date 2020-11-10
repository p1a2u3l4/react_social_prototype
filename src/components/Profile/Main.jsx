import React from 'react'
import Myposts from '../Posts/MyPosts'

const Main = () => {
    return(
      <div className="main">
        <img src="https://miro.medium.com/max/10368/1*an7X6yxD1YrMQVTaIg3uWw.jpeg"></img>
        <div className="profilename">
          <div className="avatar"><img src="https://i.stack.imgur.com/uLdOr.png"></img></div>
          <div className="name_surname"><h2>Paul Silev</h2></div>
        </div>

        <div className="posts">
            <div className="new_post"></div>
            <div className="old_posts">
              <Myposts />
            </div>
        </div>
      </div>
    )
}

export default Main