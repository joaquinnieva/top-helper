const getTotal = (state, exerciseValue) => {
  let objeto = Object.values(state);
  let total = 0;
  for (let i = 0; i < objeto.length; i++) {
    total += objeto[i];
  }
  const result = (total / exerciseValue) * 100;
  return result;
};

export default getTotal;
