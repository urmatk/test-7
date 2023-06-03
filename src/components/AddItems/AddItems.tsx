import React from 'react';

interface IAddItemsProps {
  image: string,
  clickButton: React.MouseEventHandler<HTMLButtonElement>,
}
const AddItems: React.FC<IAddItemsProps> = props => {
  return (
    <div>
      <div>
        <button className='btns' onClick={props.clickButton} style={{ backgroundImage:`url(${props.image}`}} ></button>
      </div>

    </div>
  );
};

export default AddItems;