import { Link } from 'react-router-dom';

import './footer.css';

export default function Footer() {
  return (
    <footer id='footer-container' className='footer-container'>
      <picture className='footer__picture'>
        <img className='footer__image' src='/logoname192mm.png' alt="" />
      </picture>
      <div className='footer__row'>
        <div className='footer__col-left'>
          <h3 className='footer__header'>Visit</h3>
          <p className='footer__paragraph'>Liberty Avenue 7,</p>
          <p className='footer__paragraph'>Concordia,</p>
          <p className='footer__paragraph'>Imagiland</p>
          <a className='footer__link' href='https://www.google.com/maps/place/Ilhas+Selvagens/@32.4312991,-16.4960039,13.75z/data=!4m5!3m4!1s0xc42e379e6e01b8b:0xffacc13a8f1fa74c!8m2!3d30.097608!4d-15.9553276?hl=pt-PT' target='_blank'>Map</a>
          <h3 className='footer__header'>Opening hours</h3>
          <p className='footer__paragraph'>Every day: 10:00 - 20:00</p>
          <div className='footer__socialmedia'>
            <a href='#'><i className='fa-brands fa-facebook footer__icon'></i></a>
            <a href='#'><i className='fa-brands fa-twitter footer__icon'></i></a>
            <a href='#'><i className='fa-brands fa-instagram footer__icon'></i></a>
            <a href='#'><i className='fa-brands fa-youtube footer__icon'></i></a>
          </div>
        </div>

        <div className='footer__col-center'>
          <h3 className='footer__header'>Patrons</h3>
          <p className='footer__paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum possimus iste esse saepe ratione nulla recusandae explicabo dolore aliquam cumque?</p>
          <a className='footer__link' href='#' target='_blank'>Patron ABC</a>
          <a className='footer__link' href='#' target='_blank'>Patron DEF</a>
          <a className='footer__link' href='#' target='_blank'>Patron GHI</a>
          <a className='footer__link' href='#' target='_blank'>Patron JKL</a>
        </div>

        <div className='footer__col-right'>
          <h3 className='footer__header'>Site</h3>
          <ul className='footer__sitemap'>
            <li><Link className='footer__link' to='/'>Home</Link></li>
            <li><Link className='footer__link' to='collections'>Collections</Link></li>
            <li><Link className='footer__link' to='exhibits'>Exhibits</Link></li>
            <li><Link className='footer__link' to='about'>About</Link></li>
            <li><Link className='footer__link' to='contacts'>Contacts</Link></li>
            <li><Link className='footer__link' to='visit'>Visit</Link></li>
          </ul>
        </div>
      </div>

      <div className='footer__copyrights'>
        <p>All rights reserved &copy; {new Date().getFullYear()} Mock-up Museum</p>
      </div>

    </footer>
  );
}