import React from 'react';

import TableHeader from '../TableHeader';
import Row from '../Row';

const useScrollAware = () => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const ref = React.useRef();

  const onScroll = (e) => requestAnimationFrame(() => {
    setScrollTop(e.target.scrollTop);
  });

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (ref && ref.current) {
      const scrollContainer = ref.current;

      setScrollTop(scrollContainer.scrollTop);
      scrollContainer.addEventListener('scroll', onScroll);
      return () => scrollContainer.removeEventListener('scroll', onScroll);
    }
  }, []);

  return [scrollTop, ref];
};

const VirtualTable = ({
  rowsData, rowHeight, viewportHeight, cellData,
}) => {
  const rowsCount = rowsData.length;
  const totalHeight = rowsCount * rowHeight;
  const renderAhead = 2;

  const [scrollTop, ref] = useScrollAware();

  let startNode = Math.floor(scrollTop / rowHeight) - renderAhead;
  startNode = Math.max(0, startNode);

  // 2 - because rows in buffer above and below
  let visibleNodesCount = Math.ceil(viewportHeight / rowHeight) + 2 * renderAhead;
  visibleNodesCount = Math.min(rowsCount - startNode, visibleNodesCount);

  const offsetY = startNode * rowHeight;

  const visibleRows = rowsData.slice(startNode, startNode + visibleNodesCount);

  return (
    <div className="table" ref={ref}>
      <TableHeader cellData={cellData}/>
      <div className='viewport' style={{ height: totalHeight }}>
        <div style={{
          willChange: 'transform',
          transform: `translateY(${offsetY}px)`,
        }}>
          {visibleRows.map((rowData, index) => (
            <Row rowData={rowData} cellData={cellData} key={index.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTable;
