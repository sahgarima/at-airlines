import React from 'react'
// import style from './Dropdown.scss'
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import style from './Dropdown.scss'
import { connect } from 'react-redux';
import { changeOrigin} from '../../Redux/actions';


const countryOptions = [
  { label1 : 'af', value: 'DEL', flag: 'af', label : 'Delhi' },
  { label1 : 'ax', value: 'BOM', flag: 'ax', label : 'Mumbai' },
  { label1 : 'al', value: 'ALB', flag: 'al', label : 'Albania' },
  { label1 : 'dz', value: 'ALG', flag: 'dz', label : 'Algeria' },
  { label1 : 'as', value: 'ASA', flag: 'as', label : 'American Samoa' },
  { label1 : 'ad', value: 'AND', flag: 'ad', label : 'Andorra' },
  { label1 : 'ao', value: 'ANG', flag: 'ao', label : 'Angola' },
  { label1 : 'ai', value: 'ANL', flag: 'ai', label : 'Anguilla' },
  { label1 : 'ag', value: 'ANT', flag: 'ag', label : 'Antigua' },
  { label1 : 'ar', value: 'ARG', flag: 'ar', label : 'Argentina' },
  { label1 : 'am', value: 'ARI', flag: 'am', label : 'Armenia' },
  { label1 : 'aw', value: 'ARB', flag: 'aw', label : 'Aruba' },
  { label1 : 'au', value: 'AUL', flag: 'au', label : 'Australia' },
  { label1 : 'at', value: 'AUS', flag: 'at', label : 'Austria' },
  { label1 : 'az', value: 'AZN', flag: 'az', label : 'Azerbaijan' },
  { label1 : 'bs', value: 'BHS', flag: 'bs', label : 'Bahamas' },
  { label1 : 'bh', value: 'BHN', flag: 'bh', label : 'Bahrain' },
  { label1 : 'bd', value: 'BLS', flag: 'bd', label : 'Bangladesh' },
  { label1 : 'bb', value: 'BRD', flag: 'bb', label : 'Barbados' },
  { label1 : 'by', value: 'BEL', flag: 'by', label : 'Belarus' },
  { label1 : 'be', value: 'BLG', flag: 'be', label : 'Belgium' },
  { label1 : 'bz', value: 'BZ', flag: 'bz', label : 'Belize' },
  { label1 : 'bj', value: 'BEN', flag: 'bj', label : 'Benin' },
]

library.add(fas);

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="map-marker-alt" />;
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};
const Placeholder = props => {
  return <components.Placeholder {...props} />;
};

function Dropdown(props) {

  function handleChange(event){
      props.dispatch(changeOrigin(event.value,props.keyOf))
      props.dispatch(changeOrigin(event.label,props.labelOf))
  }
  return (
    <div className="App">
      <Select
        closeMenuOnSelect={false}
        components={{ Placeholder, DropdownIndicator }}
        placeholder={props.to}
        options={countryOptions}
         onChange={handleChange}
      />
    </div>
  );
  
}

export default connect()(Dropdown)