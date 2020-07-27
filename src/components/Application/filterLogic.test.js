import filterLogic from './filterLogic';
import testData from '../VirtualTable/testData';

describe('filter logic', () => {
  it('filter by letter return correct array of object', () => {
    const result = filterLogic(testData, 'pele');
    expect(result.length).toEqual(2);
  });
  it('filter by number return correct array of object', () => {
    const result = filterLogic(testData, '639');
    expect(result.length).toEqual(2);
  });
});
