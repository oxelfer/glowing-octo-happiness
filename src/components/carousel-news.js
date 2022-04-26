import { useState, useEffect } from 'react';

import NewsItems from '../mocks/news-mock';

import './carousel-news.css';

export default function CarouselNews() {

  const newsItems = NewsItems();
  /* console.log(newsItems); */

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    console.log('Going back!')
  }

  const nextSlide = () => {
    console.log('Going forward!')
  }

  return (
    <div className='carousel__container'>
      {newsItems.map( (item, index) => {
        return (
          <article key={item.id} className={`carousel__slide ${ index === current ? '.carousel__slide--active' : ''}`}>
            <picture className='carousel__picture'>
              <img className='carousel__image' src={item.image} alt={item.alt} />
            </picture>
            <div className='carousel__content'>
              <h3 className='carousel__title'>{item.title}</h3>
              <a className='carousel__link' href={item.url}>{item.button}</a>
            </div>
          </article>
        )
      })}
      
      <button className='carousel__button carousel__arrow-left' onClick={prevSlide}>
        <span className='material-symbols-outlined symbol__size'>
          chevron_left
        </span>
      </button>

      <button className='carousel__button carousel__arrow-right' onClick={nextSlide}>
        <span className='material-symbols-outlined symbol__size'>
          navigate_next
        </span>
      </button>

    </div>
    
  )
}