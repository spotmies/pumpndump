import React, { useEffect } from "react";
import "./home.scss";

function NumberInput(props) {
  const [num, setNum] = React.useState(1);

  const add = () => {
    setNum(parseInt(num) + 1);
  };

  const minus = () => {
    if (num === 1) return;
    setNum(parseInt(num) - 1);
  };

  useEffect(() => {
    props.onChange(num);
  }, [num]);

  return (
    <div className="num-div">
      <p className="grey-color-text minus-text" onClick={minus}>
        -
      </p>
      <input
        type="number"
        className="num-space"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <p className="grey-color-text plus-text" onClick={add}>
        x
      </p>
    </div>
  );
}

export default NumberInput;
