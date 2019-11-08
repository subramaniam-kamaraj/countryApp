import React, {useState, useEffect} from 'react';
import Countrylis from './Countrylis';
import List from './List';
import axios from 'axios';

const App = () => {
  const [list, setlist] = useState ([]);

  const fetch = () => {
    axios.get ('https://restcountries.eu/rest/v2/all').then (res => {
      // setlist (JSON.stringify (res.data));
      // console.log (res.data);
      setlist (res.data);
    });
  };

  useEffect (() => {
    fetch ();
  }, []);
  const startsearch = searchdata => {
    axios
      .get ('https://restcountries.eu/rest/v2/name/' + searchdata)
      .then (res => {
        setlist (res.data);
      });
  };

  return (
    <div>
      <Countrylis searchval={startsearch} /><br />
      <List list={list} />
    </div>
  );
};

export default App;
