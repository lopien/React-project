import React, { useEffect, useState } from 'react';
import './news.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import data from './new.json';

// import axios from 'axios';



const News = () => {
  // const [photos, setPhotos] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);
  // const [totalCount, settotalCount] = useState(0);

  // useEffect(()=>{
  //   if (fetching) {
  //     console.log('fetching');
  //     axios.get(`http://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
  //       .then(response => {
  //         setPhotos([...photos, ...response.data])
  //         setCurrentPage(prevState => prevState + 1)
  //         settotalCount(response.headers['x-total-count'])
  //       })
  //       .finally(() => setFetching(false))
  //   }
  // }, [fetching]);

  // useEffect(()=>{
  //   document.addEventListener('scroll', scrollHandler)
  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler)
  //   }
  // },[]);

  // const scrollHandler = (e) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
  //     && photos.length === totalCount) {
  //     setFetching(true);
  //   }
  // }

  const template = Object.keys(data).map((item) => 
      <div className="news" key={data[item].id}>
      <img className="news-img" src={data[item].photo} alt=""/>
      <p className="news-text">{data[item].id} {data[item].text}</p>
    </div>
    );

        // {photos.map(photo =>
        //   <div className="news" key={photo.id}>
        //     <img className="news-img" src={photo.thumbnailUrl} alt=""/>
        //     <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
        //       Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        //   </div>
        // )}



  return(
    <>
      <Menu/>
      <Header/>
      {template}
    </>
    );
  };

export default News;