import Title from '../components/title';
import IntroParagraph from '../components/intro';

import IntroMock from '../mocks/intro-mock';
import ContactsMock from '../mocks/contacts-mock';

import './contacts.css';

export function Contacts() {
  // Data from mock (intro-mock), bound to mock item index
  const introText = IntroMock()[4];

  const contacts = ContactsMock();

  return (
    <>
      <Title text='Contacts' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />

      <div className='contacts-container'>
      {contacts.map( (item) => {
        return (
          <article key={item.id} className='contacts__item'>
            <p className='contacts__department'>{item.department}</p>
            <p className='contacts__name'>{item.name}</p>
            <p className='contacts__email'>{item.email}</p>
          </article>
        )
      })}
      </div>
    </>
  );
}