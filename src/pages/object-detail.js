import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Title from '../components/title';
import GoBackButton from '../components/go-back-button';

import './object-detail.css';

export function ObjectDetail() {

  const params = useParams();

  const [piece, setPiece] = useState({});
  
  useEffect(() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks/${params.id}?fields=id,title,artist_display,date_display,medium_display,department_title,dimensions,category_titles,image_id,thumbnail`)
      .then(response => response.json())
      .then(data => {
        setPiece(data.data);
      });

  }, []);

  return (
    <div className='object-container'>
      {piece['title'] && <Title text={`${piece['title']} - ref. ${params.id}`} />}

      {piece['image_id'] &&
        <article className='object__card'>
          <header className='card__header'>
            <h3 className='card__title'>{piece['title']}</h3>
            <p className='card__author'><span className='category'>Author:</span> {piece['artist_display']}</p>
          </header>

          
          <picture className='card__picture'>
            <img className='card__image' src={`https://www.artic.edu/iiif/2/${piece['image_id']}/full/600,/0/default.jpg`} alt={piece['title']} title={`${piece['title']} by ${piece['artist_display']}`} />
          </picture>

          <p className='card__department'><span className='category'>Department:</span> {piece['department_title']} </p>
          <p className='card__dimensions'><span className='category'>Dimensions:</span> {piece['dimensions']}</p>
          <p className='card__medium'><span className='category'>Medium:</span> {piece['medium_display']}.</p>
          <p className='card__date'><span className='category'>Date:</span> {piece['date_display']} </p>
          <p className='card__ref'><span className='category'>Ref.:</span> {piece['id']} </p>
        </article>
      }

      {!piece['image_id'] && 
        <h2 className='object__loading'>Loading...</h2>
      }

      <GoBackButton />

    </div>
  )
}