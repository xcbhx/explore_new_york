import './Items.css';
import { Link } from "react-router-dom";

function Items(props) {
  const { name, image, address, hours, id } = props;

  return (
    <div className="Items">
      <Link className='Item-Title' to={`/details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
        width="300"
        height="300"
        alt="" 
        />
      </Link>
      <div className='Item-Info'>
        <div>{address}</div>
        <div className='hours'>{hours}</div>
      </div>
    </div>
  )
};

export default Items;