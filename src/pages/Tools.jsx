import { Formik } from 'formik';
import React, { useState } from 'react';
import { CALCULATE, TITLE_EXERCISES, TITLE_TRAINING, TOTAL, TRAINING_SECTION } from '../data/constants';
import filterExercises from '../functions/filterExercises';
import filterSelectExercise from '../functions/filterSelectExercise';
import getTotal from '../functions/totalSkills';
import '../styles/Exercises.css';

const Tools = () => {
  const [total, setTotal] = useState();
  const [exerciseTypeSelected, setExerciseTypeSelected] = useState('Ataque');
  const [exerciseSelected, setExerciseSelected] = useState([]);
  const exercisesTypeArray = filterExercises(exerciseTypeSelected);
  const exercisesTypes = filterExercises();
  const handleSelect = (e) => {
    const id = e.target.value;
    setExerciseSelected(filterSelectExercise(id));
  };
  return (
    <main>
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5 mb-2">{TITLE_TRAINING}</h1>
          <p>{TRAINING_SECTION}</p>
        </div>
        <div className="row">
          <h1 className="text-center my-5">{TITLE_EXERCISES}</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {exercisesTypes?.map((i, index) => (
            <button
              key={index}
              className={`col-sm-3 col-10 btn ${(i !== exerciseTypeSelected && 'btn-outline-primary') || 'btn-primary'} mx-2 my-1`}
              onClick={() => {
                setExerciseTypeSelected(i);
              }}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="row d-flex justify-content-center my-3">
          <select className="form-select" name="exercise" onChange={handleSelect}>
            {exercisesTypeArray?.map((i, index) => (
              <option className="dropdown-item" key={index} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col m-2">
          {exerciseSelected &&
            exerciseSelected.map((i, index) => (
              <div className="col my-4" key={index}>
                <h5 className="card-header border-bottom border-secondary">{i.name}</h5>
                <div className="card-body">
                  <Formik
                    initialValues={{}}
                    onSubmit={(values) => {
                      setTotal(getTotal(values, i.value));
                    }}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form className="row" onSubmit={handleSubmit}>
                        {i?.skills.map((s, index) => (
                          <label key={index} className="col-sm-2 form-label">
                            {s}
                            <input
                              className="form-control"
                              placeholder="100"
                              type="number"
                              name={s}
                              values={s}
                              onChange={handleChange}
                            ></input>
                          </label>
                        ))}
                        {total && (
                          <label className="col text-end my-3">
                            {TOTAL}:<p className="">{total}</p>
                          </label>
                        )}
                        <button className="btn btn-primary my-1" type="submit">
                          {CALCULATE}
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Tools;
