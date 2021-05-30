import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BiCaretDown } from 'react-icons/bi';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="hover:bg-blue-500"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="p-3">
      {/* <input type="text" className="form-input rounded-xl text-blue-500" /> */}
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="shadow-lg block rounded-lg">
        <div
          onClick={() => setOpen(!open)}
          className="p-4 flex justify-between"
        >
          <div className="">{selected.label}</div>
          <BiCaretDown className="fill-current text-blue-600" />
        </div>
        <div
          className={`p-4 pt-0 divide-y divide-blue-300 ${
            open ? 'block' : 'hidden'
          }`}
          onClick={() => setOpen(false)}
        >
          {renderedOptions}
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.any,
  onSelectedChange: PropTypes.any,
  label: PropTypes.string,
};

export default Dropdown;
