import GoBackButton from '../components/go-back-button';

import './not-found.css';

export function NotFound() {
  return (
    <>
      <h2 className='notfound__title'>Page not found!</h2>
      
      <GoBackButton />
    </>
  )
}