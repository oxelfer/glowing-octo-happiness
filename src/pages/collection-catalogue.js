import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Title from '../components/title';
import IntroParagraph from '../components/intro';
import GoBackButton from '../components/go-back-button';

import IntroMock from '../mocks/intro-mock';

import './collection-catalogue.css';

export function CollectionCatalogue() {

  const params = useParams();

  const [pieces, setPieces] = useState([]);
  
  useEffect(() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${params.search}&query[term][is_public_domain]=true&limit=14&fields=id,title,artist_display,date_display,medium_display,department_title,dimensions,category_titles,image_id,alt_text`)
      .then(response => response.json())
      .then(data => {
        setPieces(data.data);
      });

  }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const introText = IntroMock()[6];
  
  return (
    <>
      <Title text={`${capitalize(params.search)} catalogue`} />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />

      <div className='catalogue-container'>
        {pieces.map((item, index) => {
          return (
            <article key={pieces[index]['id']} className='catalogue__card'>
              <header>
                <h3 className='catalogue__title'>{pieces[index]['title']}</h3>
                <p className='catalogue__author'>{pieces[index]['artist_display']}</p>
              </header>
              <Link to={`/object/${pieces[index]['id']}`} className='catalogue__link'>
              {pieces[index]['image_id'] && 
                <picture className='catalogue__picture'>
                  <img className='catalogue__image' src={`https://www.artic.edu/iiif/2/${pieces[index]['image_id']}/full/400,/0/default.jpg`} alt={pieces[index]['alt_text']} title={`${pieces[index]['title']} by ${pieces[index]['artist_display']}`} />
                </picture>}
              </Link>
              <p className='catalogue__ref'> {pieces[index]['id']} </p>
              <Link to={`/object/${pieces[index]['id']}`} className='catalogue__link catalogue__button'>Object detail</Link>
              
            </article>
          )
        })}
      </div>

      {!pieces[0] &&
        <h2 className='catalogue__loading'>Loading...</h2>
      }

      <GoBackButton />
    </>
  )
}