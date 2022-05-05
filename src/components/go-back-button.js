import { useNavigate } from 'react-router-dom';

import './go-back-button.css';

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button className='goback__button' onClick={() => navigate(-1)}>Previous page</button>
  );
}