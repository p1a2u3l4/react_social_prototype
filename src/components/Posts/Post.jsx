import React from 'react'

const Post = (props) => {
    return(
        <div className={props}>
            <p>{props.value}</p>
        </div>
    )
}

export default Post