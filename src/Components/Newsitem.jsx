
import "./Newsitem.css"
import Unavailable_image from '../assets/Unavailable_image.jpeg'
export const Newsitem = ({title,description,src,url}) => {
    
    if (description!==null){
        return (
     <div className="card bg-dark text-light"  >
     <img src={src ? src: Unavailable_image} className="card-img-top" stlye={{maxWidth:"100%"}} alt="..."/>
     <div className="card-body card-cont">
     <h5 className="card-title">{title}</h5>
     <p className="card-text Collapss">{description.slice(0,90)+" ..." }</p>
     <a href={url} className="btn btn-primary readmorebtn">Read More</a>
     </div>
    </div>);
    }

  }
  
    
    
  

