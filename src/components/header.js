import { Link } from 'react-router-dom';

import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <picture className='header__picture'>
        <img className='header__logo' src="/logobasic192mm.png" alt="" />
      </picture>

      <div className='header__right'>
        <div className='header__search'>
          <p>Placeholder search</p>
        </div>
        <nav>
          <ul className='header__site-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='collections'>Collections</Link></li>
            <li><Link to='exhibits'>Exhibits</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='contacts'>Contacts</Link></li>
            <li><Link to='visit'>Visit</Link></li>
          </ul>
        </nav>


      </div>


    </header>
  )
}