import Title from '../components/title';
import IntroParagraph from '../components/intro';
import MapComponent from '../components/maps';

import IntroMock from '../mocks/intro-mock';

import './visit.css';

export function Visit() {
  const introText = IntroMock()[5];

  return (
    <>
      <Title text='How to visit' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />
      
      <MapComponent />
    </>
  )
}