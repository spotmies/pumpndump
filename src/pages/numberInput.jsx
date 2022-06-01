import React from 'react';
import './home.scss';


function NumberInput() {
    const [num, setNum] = React.useState(0);

    const add = () => {
        setNum(num + 1);
    }

    const minus = () => {
      setNum(num - 1);
    }

  return (
    <div className="num-div">
        <p className="grey-color-text" onClick={minus}>-</p>
        <input type="number" className="num-space" value={num} />
        <p  className="grey-color-text" onClick={add}>+</p>
    </div>
  )
}

export default NumberInput