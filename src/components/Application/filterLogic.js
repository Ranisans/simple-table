const filterFunc = (data, filter) => {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (typeof data[key] === 'object') {
      const result = filterFunc(data[key], filter);
      if (result) return true;
    } else if (data[key].toString().toLowerCase().includes(filter)) return true;
  }
  return false;
};

const filterLogic = (dataset, filter) => dataset.filter((data) => filterFunc(data, filter));

export default filterLogic;
