import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import { Chat, Send, Share, ThumbUpAlt } from "@mui/icons-material"

const Post = forwardRef(({ name, descreption, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name} </h2>
                    <p>{descreption}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpAlt} title="Like" />
                <InputOption Icon={Chat} title="Comment" />
                <InputOption Icon={Share} title="Share" />
                <InputOption Icon={Send} title="Send" />
            </div>
        </div>
    )
})

export default Post
