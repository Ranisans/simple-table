import sortingLogic from './sortingLogic';
import testData from '../VirtualTable/testData';

describe('sorting logic', () => {
  let data;
  beforeEach(() => {
    data = JSON.parse(JSON.stringify(testData));
  });
  it('sorting by id return correct array of object', () => {
    const result = sortingLogic(data, 'id', true);
    expect(result[0].id).toEqual(5);
    expect(result.pop().id).toEqual(991);
  });

  it('sorting by the wrong key does not sort anything', () => {
    const result = sortingLogic(data, 'if', true);
    expect(testData).toEqual(result);
  });
});
