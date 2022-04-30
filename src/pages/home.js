import Title from '../components/title';
import IntroParagraph from '../components/intro';
import HomeCard from '../components/home-card';
import CarouselNews from '../components/carousel-news'

import IntroMock from '../mocks/intro-mock';

import './home.css';

export function Home() {
  const introText = IntroMock()[0];

  return (
    <>
      <Title text='Mock-up Museum' />

      <IntroParagraph text={introText.page + ' - ' + introText.text} />

      <div className='home-container'>
        <section className='home__section'>
          <HomeCard image='cat' text='Go to cats collection' />
          <HomeCard image='dog' text='Go to dogs collection' />
          <HomeCard image='sunflower' text='Go to sunflower collection' />
          <HomeCard image='still-life' text='Go to fruit collection' />
        </section>

        <CarouselNews />
        
        <section className='home__section'>
          <HomeCard image='bird' text='Go to birds exhibit' />
          <HomeCard image='reptile' text='Go to lizards exhibit' />
        </section>
      </div>
    </>
  )
}