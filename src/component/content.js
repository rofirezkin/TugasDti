import React, { useState, useEffect } from 'react';

function Content({ imgSrc, title, imgProf, name, subKategori }) {
  const quotes = [
    '“Everybody in this country should learn to program a computer, because it teaches you how to think.”',
    ' “Your most unhappy customers are your greatest source of learning.”',
    '~Steve Jobs~',
    '~Bill Gates~',
  ];
  const [myJudul, setJudul] = useState({
    judul: quotes[0],
    nama: quotes[2],
  });
  useEffect(() => {
    setTimeout(() => {
      setJudul({
        judul: quotes[1],
        nama: quotes[3],
      });
    }, 10000);
  });

  return (
    <div
      className="jumbotron padding-content"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="text-center">
        <h1 className="judul-content">{title}</h1>
        <img
          src={imgProf}
          className="rounded-circle"
          alt="foto profil"
          style={{ width: '15%' }}
        />

        <h1 className="pt-5 judul-nama">{name}</h1>
        <h4 className="sub-judul-content">{subKategori}</h4>
        <h5 className="pt-5 sub-judul-content">{myJudul.judul}</h5>
        <p className="sub-judul-content">{myJudul.nama}</p>
      </div>
    </div>
  );
}

export default Content;
