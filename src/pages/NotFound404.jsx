import React from 'react';
import '../styles/NotFound404.css';

const NotFound404 = () => {
  return (
    <main className="d-flex justify-content-center align-items-center container-404">
      <h1 className="border-404">404 &nbsp;</h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead">| &nbsp; La página solicitada no existe.</h2>
      </div>
    </main>
  );
};

export default NotFound404;
