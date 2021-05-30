import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="">
      <div className="block m-3">
        <label className="text-gray-700 text-sm font-bold mb-2">
          Enter text
        </label>
        <div>
          <input
            type="text"
            className="rounded-lg shadow-xl border-transparent focus:border-transparent focus:outline-none focus:outline-none focus:ring-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        options={options}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="text-sm font-bold">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
