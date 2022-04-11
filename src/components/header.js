import { Link } from 'react-router-dom';

import './header.css';

export default function Header() {
  return (
    <header>
      <p>Placeholder while I think about the header... and test Git.</p>

      <nav>
        <ul className='site-nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='collections'>Collections</Link></li>
          <li><Link to='exhibits'>Exhibits</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contacts'>Contacts</Link></li>
          <li><Link to='visit'>Visit</Link></li>
        </ul>
      </nav>

    </header>
  )
}