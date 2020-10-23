import { useState, useEffect } from 'react';

const useTitle = ({ quotes }) => {
  const [judul, setJudul] = useState(quotes['']);

  useEffect(() => {
    setTimeout(() => {
      setJudul(quotes['']);
    }, 10000);
  });
  return [judul, setJudul];
};

export default useTitle;
