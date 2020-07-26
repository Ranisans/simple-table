import React from 'react';

const Row = ({ rowData, cellData }) => {
  const ref = React.createRef();

  React.useEffect(() => {
    const row = ref.current;
    const data = JSON.parse(JSON.stringify(rowData));
    function dispatch(e) {
      e.stopPropagation();
      row.dispatchEvent(new CustomEvent(
        'data', { bubbles: true, detail: { record: data } },
      ));
    }
    row.addEventListener('click', (e) => { dispatch(e); });
    return () => { row.removeEventListener('click', dispatch); };
  }, []);

  return (
  <div className="table_row" ref={ref}>
    { cellData.map((singleKey) => (
        <div
          className={`table_cell ${singleKey.cellClass}`}
          key={singleKey.cellClass}
        >{rowData[singleKey.key]}
        </div>
    ))
    }
  </div>
  );
};

export default Row;
