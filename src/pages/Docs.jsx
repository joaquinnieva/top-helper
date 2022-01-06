import React from 'react';
import '../styles/Docs.css';

const Docs = () => {
  return (
    <main>
      <div className="container-xxl my-md-4 bd-layout">
        <aside className="bd-sidebar bg-light rounded ">
          <nav className="bd-links p-4" id="bd-docs-nav" aria-label="Docs navigation">
            <div className="list-unstyled mb-0 py-3 pt-md-1">
              <div className="btn d-inline-flex align-items-center rounded collapsed">
                <i className="bi bi-dot" />
                Entrenamiento
              </div>

              <div className="btn d-inline-flex align-items-center rounded collapsed">
                <i className="bi bi-dot" />
                Transferencias
              </div>
            </div>
          </nav>
        </aside>
        <main className="bg-light rounded p-4">main</main>
      </div>
    </main>
  );
};

export default Docs;
