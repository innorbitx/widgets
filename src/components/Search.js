import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="shadow m-6 p-4 rounded-lg">
        <div className="font-bold">{result.title}</div>
        <div className="content inline-flex">
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

          <div className="block">
            <a
              className="bg-green-500 p-4 text-white rounded-lg ml-2"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <label>Enter search term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          className="form-input rounded-xl text-blue-500"
        />
      </div>
      <div className="">{renderedResults}</div>
    </div>
  );
};

export default Search;
