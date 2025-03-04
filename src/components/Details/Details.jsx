import './Details.css';
import data from '../../newYork-data.js'
import { useParams } from 'react-router-dom';


function Details() {
  const params = useParams();
  const { id } = params;
  const { images, title, desc, hours } = data[id];

  return (
    <div className='Details'>
      <div className='image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>

      <div className='Details-info'>
        <h1 className='title'>{ title }</h1>
        <p className='desc'>{ desc }</p>
        <p className='hours'>{ hours }</p>
      </div>
    </div>
  )
};

export default Details;