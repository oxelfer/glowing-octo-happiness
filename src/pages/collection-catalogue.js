import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Title from '../components/title';
import GoBackButton from '../components/go-back-button';

import './collection-catalogue.css';

export function CollectionCatalogue() {

  const params = useParams();

  const [pieces, setPieces] = useState([]);
  
  useEffect(() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${params.search}&query[term][is_public_domain]=true&limit=12&fields=id,title,artist_display,date_display,medium_display,department_title,dimensions,category_titles,image_id,alt_text`)
      .then(response => response.json())
      .then(data => {
        setPieces(data.data);
      });

  }, []);
  

  return (
    <>
      <Title text={`Permanent ${params.search} collection`} />
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quae modi inventore distinctio tempora ipsam? Pariatur itaque vel maxime reiciendis quasi natus saepe, illo odio earum similique laborum quia dignissimos veritatis vero, ratione, recusandae perspiciatis animi ea. Consequuntur, sit? Quos est doloremque, nobis saepe cumque molestiae unde dolores quod molestias!</p>

      {pieces.map((item, index) => {
        return (
          <article key={pieces[index]['id']} className='object__card'>
            <header>
              <h3 className='card__title'>{pieces[index]['title']}</h3>
              <p className='card__author'>{pieces[index]['artist_display']}</p>
            </header>
            <Link to={`/object/${pieces[index]['id']}`} className='card__link'>
            {pieces[index]['image_id'] && 
              <picture className='card__picture'>
                <img className='card__image' src={`https://www.artic.edu/iiif/2/${pieces[index]['image_id']}/full/400,/0/default.jpg`} alt={pieces[index]['alt_text']} title={`${pieces[index]['title']} by ${pieces[index]['artist_display']}`} />
              </picture>}
            </Link>
            <p className='card__ref'> {pieces[index]['id']} </p>
            
          </article>

        )
      })}
      
      <Link to={`/collections`}>
        <p>Testing link to collections</p>
      </Link>

      <GoBackButton />
    </>
  )
}