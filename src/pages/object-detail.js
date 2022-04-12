import { useParams } from 'react-router-dom';

import './object-detail.css';

export function ObjectDetail() {

  const params = useParams();

  return (
    <h2>Object detail placeholder - {params.id}</h2>
  )
}