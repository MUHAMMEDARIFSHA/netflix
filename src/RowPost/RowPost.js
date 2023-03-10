import React ,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../axios'
import {API_KEY,IMAGE_URL} from '../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [UrlId,setUrlId] = useState('')
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
       console.log(response.data.results)
        setMovie(response.data.results)
      })
  },)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=> {
console.log(id);
// axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
    
  }else{
    console.log("array empty")
  }

})
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
{movie.map((obj)=>
   <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small_poster':'poster'} src={`${IMAGE_URL+obj.backdrop_path}`} alt='poster'/>
)}
       
        
      </div>
{UrlId && <Youtube videoId={UrlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
