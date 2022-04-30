import './map.css';

export default function MapComponent() {
  return (
    <div className='mapcontainer'>
      <iframe className='map-embed' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78082.03514516244!2d-15.908485566154443!3d30.12936467534248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e379e6e01b8b%3A0xffacc13a8f1fa74c!2sIlhas%20Selvagens!5e0!3m2!1spt-PT!2spt!4v1651317929936!5m2!1spt-PT!2spt' width='600' height='450' style={{border:0}} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
  )
}