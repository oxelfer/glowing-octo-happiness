import { Link } from 'react-router-dom';

import Title from '../components/title';
import CarouselNews from '../components/carousel-news';
import GoBackButton from '../components/go-back-button';

import bird from '../imgs/bird.jpg';
import lizard from '../imgs/reptile.jpg';

import './exhibits.css';

export function Exhibits() {
  return (
    <>
      <Title text='Exhibits' />
      
      <p className='exhibits__intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quae deleniti, delectus accusantium commodi id magni quis voluptatum facilis. Illum necessitatibus consectetur sint, deserunt natus voluptatibus sed soluta quod iusto aliquid nostrum qui ad alias earum esse inventore eum nulla at. Illum pariatur consequatur iure itaque nisi numquam est commodi.</p>

      <article className='exhibits__article'>
        <Link className='exhibits__link' to={{ pathname: '/catalogue/birds' }}>
          <div className='exhibits__container'>
            <picture className='exhibits__picture'>
              <img className='exhibits__image' src={bird} alt='' />
            </picture>
            <h3 className='exhibits__title'>Bird exhibit</h3>
          </div>
        </Link>
      </article>

      <CarouselNews />

      <article className='exhibits__article'>
        <Link className='exhibits__link' to={{ pathname: '/catalogue/lizards' }}>
          <div className='exhibits__container'>
            <picture className='exhibits__picture'>
              <img className='exhibits__image' src={lizard} alt='' />
            </picture>
            <h3 className='exhibits__title'>Lizard exhibit</h3>
          </div>
        </Link>
      </article>

      <GoBackButton />

    </>
  )
}