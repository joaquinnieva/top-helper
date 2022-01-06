import infoExercises from "../data/infoExercises";

function filterExercises(filters) {
  if (!filters) {
    const exTypes = ["Ataque", "Defensa", "Físico"];
    return exTypes;
  }

  if (filters) {
    const filtered = infoExercises.filter((ex) => {
      return ex.type == filters;
    });
    return filtered;
  }
}

export default filterExercises;
