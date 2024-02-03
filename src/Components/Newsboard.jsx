import { useEffect, useState } from "react"
import { Newsitem } from "./Newsitem";
import './Newsboard.css'

export const Newsboard = ({category}) => {
    let [articles,setArticles]= useState([]);
    useEffect(()=>{
        let fetchdata = async() => {
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        console.log(data.articles);
    };
        fetchdata()
    },[category])
  return (
    <div>
        <h2 className="text-center p-3">Latest <span className="badge bg-danger">News</span></h2>
        <div className="Cont-news">{articles.map((news,index)=>{
            return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>})}</div>
        
    </div>
  )
}
