import { Link } from 'react-router-dom';

import './header.css';

export default function Header() {

  // Hides menu in mobile layout
  const hideMenu = () => {
    let menu = document.getElementById('nav-mob-menu');
    let symbol = document.getElementById('click-symbol');
    let main = document.getElementById('main-content');

    if (menu.style.display === 'none') {
      main.style['margin-top'] = '23em';
      menu.style.display = 'block';
      symbol.innerText = 'expand_less';
    } else {
      main.style['margin-top'] = '5em';
      menu.style.display = 'none';
      symbol.innerText = 'expand_more';
    }
  }

  return (
    <header className='header'>
      <picture className='header__picture'>
        <img className='header__logo' src="/logobasic192mm.png" alt="" />
      </picture>

      <div className='header__right'>

        <nav className='header__nav-site'>
          <ul className='nav-site__menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='collections'>Collections</Link></li>
            <li><Link to='exhibits'>Exhibits</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='contacts'>Contacts</Link></li>
            <li><Link to='visit'>Visit</Link></li>
          </ul>
        </nav>

        <nav className='header__nav-mob'>
          <div className='nav-mob__hide' onClick={ hideMenu }>
            <span id='click-symbol' className="material-icons-outlined">
              expand_less
            </span>
          </div>
          <ul id='nav-mob-menu' className='nav-mob__menu'>
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
  );
}