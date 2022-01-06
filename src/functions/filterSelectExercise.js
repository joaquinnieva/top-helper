import InfoExercises from "../data/infoExercises";

const filterSelectExercise = (filter) => {
  const exercise = InfoExercises.filter((i) => i.id == filter);
  return exercise;
};

export default filterSelectExercise;
