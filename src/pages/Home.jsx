import React, { useEffect } from 'react';
import { LANDING_DESC, LANDING_TITLE, VIEW_MORE } from '../data/constants';
import { db } from '../database/firebaseConfig';
import topeleven from '../images/top-eleven.png';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    db;
  }, []);

  return (
    <main className="home">
      <div className="home_text m-3 mr-0">
        <h1 className="text-center">{LANDING_TITLE}</h1>
        <p className="text-center mb-5">{LANDING_DESC}</p>
        <button className="btn btn-light m-5">{VIEW_MORE}</button>
      </div>
      <div className="home_image">
        <img src={topeleven} alt="top eleven" className="image_topeleven" />
      </div>
      <div className="home_scroll">▼</div>
      <div className="row"></div>
    </main>
  );
};

export default Home;
