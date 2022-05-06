import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
function Widget() {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widget_article">
                <div className="widget_articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widget_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widget'>
            <div className="widget_header">
                <h2>Linkedin News</h2>
                <Info />
            </div>
            {newsArticle("I'm back to react", "News")}
            {newsArticle("I'm back to react", "News")}
            {newsArticle("I'm back to react", "News")}
            {newsArticle("I'm back to react", "News")}
        </div>
    )
}

export default Widget
