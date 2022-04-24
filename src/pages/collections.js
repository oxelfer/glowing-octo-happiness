import { Link } from 'react-router-dom';

import Title from '../components/title';
import CarouselNews from '../components/carousel-news';
import GoBackButton from '../components/go-back-button';

import cat from '../imgs/cat.jpg';
import dog from '../imgs/dog.jpg';
import sunflower from '../imgs/sunflower.jpg';
import fruit from '../imgs/still-life.jpg'; 

import './collections.css';

export function Collections() {
  return (
    <>
      <Title text='Museum collections' />

      <p className='collection__intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quae deleniti, delectus accusantium commodi id magni quis voluptatum facilis. Illum necessitatibus consectetur sint, deserunt natus voluptatibus sed soluta quod iusto aliquid nostrum qui ad alias earum esse inventore eum nulla at. Illum pariatur consequatur iure itaque nisi numquam est commodi.</p>

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/cats' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src={cat} alt='' />
            </picture>
            <h3 className='collection__title'>Cat collection</h3>
          </div>
        </Link>
      </article>

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/dogs' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src={dog} alt='' />
            </picture>
            <h3 className='collection__title'>Dog collection</h3>
          </div>
        </Link>
      </article>

      <div className='collection__news'>
        <CarouselNews />
      </div>

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/sunflowers' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src={sunflower} alt='' />
            </picture>
            <h3 className='collection__title'>Sunflower collection</h3>
          </div>
        </Link>
      </article>

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/fruit' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src={fruit} alt='' />
            </picture>
            <h3 className='collection__title'>Fruit collection</h3>
          </div>
        </Link>
      </article>

      <GoBackButton />
    </>
  )
}