import React, { useState } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'block' : 'hidden';

    return (
      <div
        key={item.title}
        className="shadow-sm p-2"
        onClick={() => onTitleClicked(index)}
      >
        <div className={`inline-flex items-center `}>
          {active == 'hidden' ? (
            <BiChevronRight className="fill-current text-blue-600" />
          ) : (
            <BiChevronDown className="fill-current text-blue-600" />
          )}
          {item.title}
        </div>
        <div className={`p-2 ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="m-4">{renderedItems}</div>;
};

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;
