import React from 'react'
import LargePics from './largePics'
import {Grid, Row, Column} from 'react-bootstrap'

const Jumbotron = ({trending_articles, getArticleId}) => {
  return (
    trending_articles.length === 0 ?
     <div>Please wait while we fetch your content</div> :
     <div className="row topRow" style={{
        backgroundColor: 'black'
     }}>
      {trending_articles.map(article => (<LargePics key={article.id} article={article} getArticleId={getArticleId}/>))}
    </div>)
}
export default Jumbotron
