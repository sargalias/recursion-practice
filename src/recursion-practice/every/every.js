const every = ([n1, ...rest], predicate) => {
  const n1Result = predicate(n1);

  if (rest.length === 0) {
    return n1Result;
  }
  return n1Result && every([...rest], predicate);
};

const everyPTC = ([n1, ...rest], predicate, resultSoFar = true) => {
  const newResultSoFar = resultSoFar && predicate(n1);
  if (rest.length === 0) {
    return newResultSoFar;
  }

  return everyPTC([...rest], predicate, newResultSoFar);
};

export { every, everyPTC };
