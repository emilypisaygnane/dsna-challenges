const { Stack } = require('./stack.js');

describe('Stack', () => {
  it('should add to the front', () => {
    const spy = jest.spyOn(global.console, 'log');
    const myStructure = new Stack([4, 6, 8]);
    myStructure.push(3);
    myStructure.print();
    // expect(spy).toHaveBeenCalledWith('3,4,6,8');
    expect(myStructure.print()).toEqual('3,4,6,8');
  });

  it('should add to the back', () => {
    const myStructure = new Stack([4, 6, 8]);
    myStructure.pop(3);
    expect(myStructure.print).toEqual('4,6,8,3');
  });

  it('should return the count', () => {
    const myStructure = new Stack([4, 6, 8]);
    expect(myStructure.count).toBe(3);
  });
});