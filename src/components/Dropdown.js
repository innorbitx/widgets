import PropTypes from 'prop-types';
import { BiCaretDown } from 'react-icons/bi';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  return (
    <div className="">
      <input type="text" className="form-input rounded-xl text-blue-500" />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select a Color
      </label>
      <div className="">
        <BiCaretDown className="fill-current text-blue-600" />
        <div className="">Select Color</div>
        <div className="">{renderedOptions}</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
};

export default Dropdown;
