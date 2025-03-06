import './Items.css';
import { Link } from "react-router-dom";

function Items(props) {
  const { name, image, id } = props;

  return (
    <div className="Items">
      <Link className='Item-Title' to={`/details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <div className='Image-wrapper'>
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
          width="300"
          height="300"
          alt="" 
          className='Item-images'
          />
        </Link>
      </div>
    </div>
  )
};

export default Items;