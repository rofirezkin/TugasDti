import React from 'react';
import {
  Tandon,
  Doctor,
  Museum,
  Web,
  Leptop,
  fotoPortofolio,
} from '../assets/images';
import { MyProject, Content } from '../component';

function Portofolio() {
  const imgSrc = Leptop;
  const listMyProject = [
    {
      foto: Tandon,
      judul: 'React Native',
      description:
        ' pembuatan aplikasi IoT android dengan react native, dimana aplikasi ini bisa memonitoring kekeruhan air',
      link:
        'https://www.figma.com/file/J5fjmtuli0pDwzBxmqYSip/Aplikasi-tandon-Air?node-id=0%3A1gle.com',
    },
    {
      foto: Web,
      judul: 'Website Marketplace',
      description:
        'Pembuatan Aplikasi Website Marketplace dengan Framework Laravel, jenis aplikasi B2C atau Aplikasi Dropshipper',
      link:
        'https://www.figma.com/file/J5fjmtuli0pDwzBxmqYSip/Aplikasi-tandon-Air?node-id=0%3A1gle.com',
    },
    {
      foto: Museum,
      judul: 'Website Museum Kota Makassar',
      description:
        'Pembuatan Website Museum Makassar,dengan bahasa pemograman PHP dan javascript',
      link:
        'https://www.figma.com/file/xzs5C4emJL82Fn3pZdufnH/Untitled?node-id=1%3A2',
    },
    {
      foto: Doctor,
      judul: 'React Native Konsultasi Dokter',
      description:
        'Pembuatan aplikasi konsultasi dokter berbasis Android, dengan bahasa pemograman react native',
      link:
        'https://www.figma.com/file/QqbElH8hobFpGRD12gYhY7/MyDoctor?node-id=0%3A1',
    },
  ];

  return (
    <div>
      <Content
        imgSrc={imgSrc}
        title="MY PORTOFOLIO"
        imgProf={fotoPortofolio}
        subKategori="UI/UX | Web | Android"
      />

      <div className="line-bar text-center ">
        <h3 className="sub-margin">This My Project</h3>
      </div>
      <div className="container sub-margin">
        <div className="row">
          {listMyProject.map((data) => {
            return <MyProject key={data.number} data={data} />;
          })}
        </div>
      </div>
      <div className="margin-bawah" />
    </div>
  );
}

export default Portofolio;
