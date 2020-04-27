import React from "react";
const Radio = props => {
  return (
    <div className="RadioButton">
      <input
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        type="radio"
        checked={props.checked}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
export default Radio;

/*
import React from "react";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };

    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  render() {
    return null;

    
  }
}
export default Radio;
*/
