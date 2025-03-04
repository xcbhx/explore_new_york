import './LocationList.css';
import Items from '../Items/Items';
import data from '../../newYork-data.js';
import { useState } from 'react';

function LocationList() {
  const [query, setQuery] = useState("");

  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
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
  })

  return (
    <div className='LocationList'>
      { spaces }
    </div>
  )
};

export default LocationList;