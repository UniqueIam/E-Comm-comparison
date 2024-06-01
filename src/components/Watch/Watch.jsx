import React,{ useState,useEffect } from 'react'
import './Watch.css';
import axios from 'axios';

function Watch() {

    const [watchdata,setWatchData] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:4000/watches")
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    },[]);
  return (
   <>
         <div className="watch-list">
      <h1>Dress List</h1>
      <div className="watches">
        {dresses.map(watch => (
          <div key={dress.id} className="watch-item">
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h2>{watch.name}</h2>
            <p>Size: {watch.size}</p>
            <p>Price: ${watch.price}</p>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default Watch
