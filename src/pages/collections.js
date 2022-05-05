import { Link } from 'react-router-dom';

import Title from '../components/title';
import IntroParagraph from '../components/intro';
import CarouselNews from '../components/carousel-news';
import GoBackButton from '../components/go-back-button';

import IntroMock from '../mocks/intro-mock';

import './collections.css';

export function Collections() {
  // Data from mock (intro-mock), bound to mock item index
  const introText = IntroMock()[1];

  return (
    <>
      <Title text='Museum collections' />

      <IntroParagraph text={introText.page + ' - ' + introText.text} />

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/cats' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src='./imgs/cat.jpg' alt='' />
            </picture>
            <h3 className='collection__title'>Cat collection</h3>
          </div>
        </Link>
      </article>

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/dogs' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src='./imgs/dog.jpg' alt='' />
            </picture>
            <h3 className='collection__title'>Dog collection</h3>
          </div>
        </Link>
      </article>

      <CarouselNews />

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/sunflowers' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src='./imgs/sunflower.jpg' alt='' />
            </picture>
            <h3 className='collection__title'>Sunflower collection</h3>
          </div>
        </Link>
      </article>

      <article className='collection__article'>
        <Link className='collection__link' to={{ pathname: '/catalogue/fruit' }}>
          <div className='collection__container'>
            <picture className='collection__picture'>
              <img className='collection__image' src='./imgs/still-life.jpg' alt='' />
            </picture>
            <h3 className='collection__title'>Fruit collection</h3>
          </div>
        </Link>
      </article>

      <GoBackButton />
    </>
  );
}