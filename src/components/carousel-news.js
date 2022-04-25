import './carousel-news.css';

import robin from '../imgs/robin.jpg';
import lizard from '../imgs/lizard.jpg';
import workshop from '../imgs/workshop.jpg';

export default function CarouselNews() {

  return (
    <div className='carousel__container'>

      <div className='carousel__slide'>
        <img className='carousel__image' src={robin} alt='' />
        <div className='carousel__caption'>Winged paintings</div>
      </div>

      <div className='carousel__slide'>
        <img className='carousel__image' src={lizard} alt='' />
        <div className='carousel__caption'>Lizards in art</div>
      </div>

      <div className='carousel__slide'>
        <img className='carousel__image' src={workshop} alt='' />
        <div className='carousel__caption'>Conservation activities</div>
      </div>

      <a className='carousel__arrow-left material-symbols-outlined'>
        chevron_left
      </a>

      <a className='carousel__arrow-right material-symbols-outlined'>
        navigate_next
      </a>

    </div>
    
  )
}