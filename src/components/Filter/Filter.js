
import PropTypes from "prop-types";
import style from './Filter.module.css';

const Filter = ({ filter, handleChange}) => {
  return (
    <div className={style.containerFilter}>
<input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />
    </div>
    
  );
};

Filter.propTypes = {
    filter:PropTypes.string,
    handleChange: PropTypes.func,
};

export default Filter;