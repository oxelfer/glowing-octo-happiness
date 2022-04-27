import Title from '../components/title';
import IntroParagraph from '../components/intro';

import IntroMock from '../mocks/intro-mock';

import './contacts.css';

export function Contacts() {
  const introText = IntroMock()[4];

  return (
    <>
      <Title text='Contacts' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />
    </>
  )
}