import { Link } from 'react-router-dom';

import Title from '../components/title';
import IntroParagraph from '../components/intro';
import CarouselNews from '../components/carousel-news';
import GoBackButton from '../components/go-back-button';

import IntroMock from '../mocks/intro-mock';

import './exhibits.css';

export function Exhibits() {
  // Data from mock (intro-mock), bound to mock item index
  const introText = IntroMock()[2];

  return (
    <>
      <Title text='Exhibits' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />

      <article className='exhibits__article'>
        <Link className='exhibits__link' to={{ pathname: '/catalogue/birds' }}>
          <div className='exhibits__container'>
            <picture className='exhibits__picture'>
              <img className='exhibits__image' src='./imgs/bird.jpg' alt='' />
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
              <img className='exhibits__image' src='./imgs/reptile.jpg' alt='' />
            </picture>
            <h3 className='exhibits__title'>Lizard exhibit</h3>
          </div>
        </Link>
      </article>

      <GoBackButton />
    </>
  );
}