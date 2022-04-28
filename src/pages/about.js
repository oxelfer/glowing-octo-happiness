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

      <div className='about-container'>
        <article className='about__section'>
          <h2 className='about__title'>History</h2>
          <p className='about__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit perferendis dolores adipisci distinctio eligendi voluptas aperiam labore nesciunt quas exercitationem illo quos nihil neque, est praesentium, alias hic enim ea accusantium error dignissimos sint temporibus aliquid magnam! Provident quibusdam quam ullam aut mollitia, earum illo quis esse, odit assumenda natus itaque voluptatibus dolor rerum eos sed voluptatum possimus! Exercitationem, modi!</p>
          <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum earum sequi aspernatur, excepturi accusamus quos assumenda vel sit nesciunt quidem qui ab neque deleniti voluptatum error illum ad consequatur, recusandae sint ullam provident?</p>
        </article>

        <article className='about__section'>
          <h2 className='about__title'>Building</h2>
          <p className='about__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid ipsa voluptatem modi obcaecati sunt optio molestias voluptas, saepe consectetur tempora cum aliquam architecto error fugit sint ullam officia magnam nostrum? Cum praesentium recusandae aspernatur commodi, vel maiores dolore pariatur architecto itaque est rem sed enim repudiandae ipsum veritatis dignissimos.</p>
        </article>
        
        <article className='about__section'>
          <h2 className='about__title'>Director</h2>
          <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, facilis! Delectus, cum iure. Ab veniam totam nostrum, mollitia natus, optio nulla ad dolore, incidunt eveniet error veritatis.</p>
          <p className='about__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad voluptatum repellendus consequuntur beatae assumenda tempora a, alias esse. Facilis repellat possimus asperiores laudantium esse iusto et, libero, saepe praesentium autem molestias, eaque voluptatum quam nesciunt? Neque hic perferendis mollitia rerum fugiat fuga ad iusto?</p>
        </article>

      </div>
    </>
  )
}