import { Link } from 'react-router-dom';

import GoBackButton from '../components/go-back-button';

import './collections.css';

export function Collections() {

  return (
    <>
      <h2>Collections placeholder</h2>
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