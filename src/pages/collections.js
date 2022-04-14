import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './collections.css';

export function Collections() {

  const [pieces, setPieces] = useState([]);
  
  useEffect(() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true&limit=12&fields=id,title,artist_display,date_display,medium_display,department_title,dimensions,category_titles,image_id,alt_text`)
      .then(response => response.json())
      .then(data => {
        setPieces(data.data);
      });

  }, []);
  

  return (
    <>
      <h2>Collections placeholder</h2>
      {pieces.map((item, index) => {
        return (
          <article key={pieces[index]['id']} className='object__card'>
            <header>
              <h3 className='card__title'>{pieces[index]['title']}</h3>
              <p className='card__author'>{pieces[index]['artist_display']}</p>
            </header>
            <Link to={`/collections/${pieces[index]['id']}`} className='card__link'>
              <picture className='card__picture'>
                <img className='card__image' src={`https://www.artic.edu/iiif/2/${pieces[index]['image_id']}/full/843,/0/default.jpg`} alt={pieces[index]['title']} />
              </picture>
            </Link>
            <p className='card__ref'> {pieces[index]['id']} </p>
            

          </article>

        )
      })}
      

    </>
  )
}