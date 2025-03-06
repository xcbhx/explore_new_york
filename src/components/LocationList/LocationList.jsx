import './LocationList.css';
import Items from '../Items/Items';
import data from '../../newYork-data.js';
import { useOutletContext} from 'react-router-dom';


function LocationList() {
  const { searchQuery} = useOutletContext();

  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title.toLowerCase().includes(searchQuery.toLowerCase())
      const inAddress = obj.address.toLowerCase().includes(searchQuery.toLowerCase())
      return inTitle || inAddress
    })
    .map((obj) => {
      const { id, title, address, images, hours } = obj
      return (
        <Items 
          id={id}
          key={`${title}-${id}`}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      )
  });

  return (
    <div className='LocationList'>
      { spaces }
    </div>
  )
};

export default LocationList;