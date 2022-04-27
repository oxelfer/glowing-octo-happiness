import Title from '../components/title';
import IntroParagraph from '../components/intro';

import IntroMock from '../mocks/intro-mock';

import './about.css';

export function About() {
  const introText = IntroMock()[3];

  return (
    <>
      <Title text='About the Mock-up Museum' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />
    </>
  )
}