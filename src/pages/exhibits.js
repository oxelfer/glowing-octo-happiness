import { Link } from 'react-router-dom';

import Title from '../components/title';
import IntroParagraph from '../components/intro';
import CarouselNews from '../components/carousel-news';
import GoBackButton from '../components/go-back-button';

import IntroMock from '../mocks/intro-mock';

import bird from '../imgs/bird.jpg';
import lizard from '../imgs/reptile.jpg';

import './exhibits.css';

export function Exhibits() {
  const introText = IntroMock()[2];

  return (
    <>
      <Title text='Exhibits' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />

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