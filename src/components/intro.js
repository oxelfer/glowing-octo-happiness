import './intro.css';

export default function IntroParagraph(props) {
  // Formatting for introduction paragraph of pages
  return (
    <p className='intro-text'>{props.text}</p>
  );
}