import Title from './title';

import './newsletter.css';

export default function Newsletter() {
  return (
    <>
      <Title text='Get all the news' />

      <div className='newsletter-container'>
        <p className='newsletter__paragraph'>Subscribe to our newsletter to get email updates about our news, exhibits and activities.</p>

        <form className='newsletter__form' action='' method='post'>
          <div className='newsletter__input-set'>
            <label className='newsletter__label' htmlFor='fname'>First name*: </label>
            <input className='newsletter__field' type='text' id='fname' name='fname' placeholder='First name' required />
          </div>
          <div className='newsletter__input-set'>
            <label className='newsletter__label' htmlFor='lname'>Last name*: </label>
            <input className='newsletter__field' type='text' id='lname' name='lname' placeholder='Last name' required />
          </div>
          <div className='newsletter__input-set'>
            <label className='newsletter__label' htmlFor='email'>Enter your email*: </label>
            <input className='newsletter__field' type='email' id='email' name='email' placeholder='Email' required />
          </div>
          <div className='newsletter__input-set'>
            <input className='newsletter__button' type='submit' value='Sign up' />
          </div>
        </form>

        <p className='newsletter__paragraph'>*Required fields.</p>

      </div>
    </>
  );
}