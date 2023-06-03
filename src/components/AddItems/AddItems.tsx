import React from 'react';

interface IAddItemsProps {
  image: string,
  name: string,
  price: number,
  clickButton: React.MouseEventHandler<HTMLDivElement>,
}
const AddItems: React.FC<IAddItemsProps> = props => {
  return (
    <div>
      <div className="btn" onClick={props.clickButton}>
        <img src={props.image} alt=""/>
        <p className="name"> {props.name}</p>
        <p> {props.price}</p>
      </div>

    </div>
  );
};

export default AddItems;