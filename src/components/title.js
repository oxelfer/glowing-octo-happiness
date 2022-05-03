import './title.css';

export default function Title(props) {
  // Formatting for title of pages
  return (
    <h2 className='title'>{props.text}</h2>
  )
}