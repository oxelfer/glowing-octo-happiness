import { Link } from 'react-router-dom';

import Title from '../components/title';
import GoBackButton from '../components/go-back-button';

import './collections.css';

export function Collections() {

  return (
    <>
      <Title text='Museum collections' />

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quae deleniti, delectus accusantium commodi id magni quis voluptatum facilis. Illum necessitatibus consectetur sint, deserunt natus voluptatibus sed soluta quod iusto aliquid nostrum qui ad alias earum esse inventore eum nulla at. Illum pariatur consequatur iure itaque nisi numquam est commodi.</p>

      <Link to={{ pathname: '/catalogue/cats' }}>
        <p>Testing link to catalogue with props to use 'cats' as search term</p>
      </Link>

      <Link to={{ pathname: '/catalogue/dogs' }}>
        <p>Testing link to catalogue with props to use 'dogs' as search term</p>
      </Link>

      <Link to={{ pathname: '/catalogue/sunflowers' }}>
        <p>Testing link to catalogue with props to use 'sunflowers' as search term</p>
      </Link>

      <GoBackButton />
      
    </>
  )
}