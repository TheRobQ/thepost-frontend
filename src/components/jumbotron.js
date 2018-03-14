import React from 'react'
import LargePics from './largePics'
import {Grid, Row, Column} from 'react-bootstrap'

const Jumbotron = ({trending_articles, getArticleId}) => {
  console.log(trending_articles.length);
  if(trending_articles.length === 0){
  return (
     <div className="row topRow" style={{
        backgroundColor: 'black'
     }}><p style={{color:'white', marginTop: '48px', fontSize:'50px'}}>Please wait while we fetch your content</p></div>)
   } else{
     return (<div className="row topRow" style={{
        backgroundColor: 'black'
     }}>
       {trending_articles.map(article => (<LargePics key={article.id} article={article} getArticleId={getArticleId}/>))}
     </div>)
   }
}
export default Jumbotron
