const sorting = (data, key, isIncrease) => {
  const modifier = isIncrease ? 1 : -1;
  data.sort((a, b) => {
    if (a[key] > b[key]) return 1 * modifier;
    if (a[key] < b[key]) return -1 * modifier;
    return 0;
  });
  return JSON.parse(JSON.stringify(data));
};

export default sorting;
