import Title from '../components/title';
import IntroParagraph from '../components/intro';

import IntroMock from '../mocks/intro-mock';

import './home.css';

export function Home() {
  const introText = IntroMock()[0];

  return (
    <>
      <Title text='Mock-up Museum' />

      <IntroParagraph text={introText.page + ' - ' + introText.text} />
    </>
  )
}