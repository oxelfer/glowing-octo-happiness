import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Title from '../components/title';
import GoBackButton from '../components/go-back-button';

import './object-detail.css';

export function ObjectDetail() {

  const params = useParams();

  const [piece, setPiece] = useState({});
  
  useEffect(() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks/${params.id}?fields=id,title,artist_display,date_display,medium_display,department_title,dimensions,category_titles,image_id,alt_text`)
      .then(response => response.json())
      .then(data => {
        setPiece(data.data);
      });

  }, []);
    
  return (
    <>
      <Title text={`${piece['title']} - ${params.id}`} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum delectus quisquam, magni iusto officiis! Quam deleniti iure ratione cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate aperiam eveniet consequuntur magnam molestias porro earum in rem totam, nostrum deleniti nesciunt laudantium maxime, nisi itaque dolores, consectetur praesentium?</p>
      <article className='object__card'>
        <header>
          <h3 className='card__title'>{piece['title']}</h3>
          <p className='card__author'>{piece['artist_display']}</p>
        </header>

        {piece['image_id'] && 
          <picture className='card__picture'>
            <img className='card__image' src={`https://www.artic.edu/iiif/2/${piece['image_id']}/full/600,/0/default.jpg`} alt={piece['alt_text']} title={`${piece['title']} by ${piece['artist_display']}`} />
          </picture>}

        <p className='card__ref'> {piece['id']} </p>
      </article>

      <GoBackButton />

    </>
  )
}