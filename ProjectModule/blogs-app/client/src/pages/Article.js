import React , {useState , useEffect}from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content';

//pages 
import PageNotFound from './PageNotFound'
//component
import Articles from '../component/Articles'
import CommentList from '../component/CommentList'
import AddCommentForm from '../component/AddCommentForm'

function Article() {
  const {name} = useParams();
  const article = articleContent.find((article)=> article.name === name);
  const [articlesInfo , setArticleInfo] =  useState({comments:[]});
  useEffect(()=>{
    console.log("component mountent");
    const fetchData =async ()=>{
      const result = await fetch( `/api/articles/${name}`);
      const body = await result.json();
      // console.log('body: ', body);
      setArticleInfo(body);
            
    }
    fetchData();
  },[name]);

  if(!article) return <PageNotFound/>
  const otherArticles = articleContent.filter(article=> article.name !== name)
  return (
    <> 
      <h1 className='ms:test-4xl text-2xl font-bold my-6 text-gray-900'>
        Welcome to my Articale Page:- {article.title}
      </h1>
      {article.content.map((paragraph , index )=>(
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ) )} 
      <CommentList comments = {articlesInfo.comments}/>
      <AddCommentForm articleName = {name} setArticleInfo = {setArticleInfo}/>

      <h1 className="ms:text-2xl text-xl font-bold my-4 text-gray-900">Other Articles</h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles = { otherArticles}/>
      </div>
    </>
  )
}

export default Article
