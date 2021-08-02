const getRanges = (array: (number)[]) => {
  const ranges = [];
  let rangeStart;
  let rangeEnd;

  for (let i = 0; i < array.length; i++) {
    rangeStart = array[i];
    rangeEnd = rangeStart;
    while (array[i + 1] - array[i] === 1) {
      rangeEnd = array[i + 1];
      i++;
    }
    ranges.push(rangeStart + (rangeStart === rangeEnd ? '' : '-' + rangeEnd));
  }
  return ranges;
};

export default getRanges;
