import './footer.css'

export default function Footer() {
  return (
    <footer id='footer-container' className='footer-container'>
      <div className='footer__row'>
        <div className='footer__col-left'>
          <picture className='footer__picture'>
            <img className='footer__image' src='/logoname192mm.png' alt="" />
          </picture>
          <p className='footer__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur praesentium quisquam provident, aperiam reprehenderit ut obcaecati architecto quidem dolores doloremque consequuntur nulla sunt doloribus, quaerat delectus sapiente debitis, incidunt laboriosam aliquid asperiores facere nemo consectetur?</p>
          <div className='footer__socialmedia'>
            <a href="#">Meta</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        <div className='footer__col-center'>
          <p>Placeholder center - Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id veritatis dolores ipsa, vel, quasi unde voluptas delectus modi adipisci alias aliquam quisquam quod? Illum, nam animi. Est, error eos.</p>
        </div>

        <div className='footer__col-right'>
          <p>Placeholder right - Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id veritatis dolores ipsa, vel, quasi unde voluptas delectus modi adipisci alias aliquam quisquam quod? Illum, nam animi. Est, error eos.</p>
        </div>
      </div>

      <div className='footer__copyrights'>
        <p>All rights reserved &copy; Mock-up Museum</p>
      </div>

    </footer>
  )
}