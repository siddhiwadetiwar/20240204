describe('additionOperation function', () => {
  it('should add two positive numbers correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    expect(additionOperation(array1, array2)).toEqual([5, 7, 9]);
  });

  it('should add numbers of different lengths correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    expect(additionOperation(array1, array2)).toEqual([1, 6, 8]);
  });

  it('should add a single-digit number to a multi-digit number correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [7];
    expect(additionOperation(array1, array2)).toEqual([1, 3, 0]);
  });

  it('should add zero to a number correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [0];
    expect(additionOperation(array1, array2)).toEqual([1, 2, 3]);
  });

  it('should throw an error when adding arrays containing negative numbers', () => {
    const array1 = [-1, 2, 3];
    const array2 = [4, -5, 6];
    expect(() => additionOperation(array1, array2)).toThrowError("Negative numbers as input are invalid");
  });

  it('should throw an error when adding arrays containing numbers greater than 9', () => {
    const array1 = [10, 2, 3];
    const array2 = [7, 8, 9];
    expect(() => additionOperation(array1, array2)).toThrowError("Numbers greater than 9 as input are invalid");
  });

  it('should return an empty array when adding two empty arrays', () => {
    const array1 = [];
    const array2 = [];
    expect(additionOperation(array1, array2)).toEqual([]);
  });

  it('should add infinite length array', () =>{
    const array1 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,4];
    const array2 = [1];
    expect(additionOperation(array1,array2)).toEqual([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,5]);
  });
});


describe('multiplicationOperation function', () => {
  it('should multiply two positive numbers correctly', () => {
    const array1 = [2, 3];
    const array2 = [4, 5];
    expect(multiplicationOperation(array1, array2)).toEqual([1, 0, 3, 5]); // 23 * 45 = 1035
  });

  it('should multiply numbers with different lengths correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    expect(multiplicationOperation(array1, array2)).toEqual([5, 5, 3, 5]); // 123 * 45 = 5535
  });

  it('should multiply a single-digit number by a multi-digit number correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [7];
    expect(multiplicationOperation(array1, array2)).toEqual([8, 6, 1]); // 123 * 7 = 861
  });

  it('should multiply any number by zero correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [0];
    expect(multiplicationOperation(array1, array2)).toEqual([0]); // 123 * 0 = 0
  });

  it('should throw an error when multiplying arrays containing negative numbers', () => {
    const array1 = [-1, 2, 3];
    const array2 = [4, -5, 6];
    expect(() => multiplicationOperation(array1, array2)).toThrowError("Negative numbers as input are invalid");
  });

  it('should throw an error when multiplying arrays containing numbers greater than 9', () => {
    const array1 = [10, 2, 3];
    const array2 = [7, 8, 9];
    expect(() => multiplicationOperation(array1, array2)).toThrowError("Numbers greater than 9 as input are invalid");
  });

  it('should throw an error when multiplying empty arrays', () => {
    const array1 = [];
    const array2 = [];
    expect(() => multiplicationOperation(array1, array2)).toThrowError("Empty arrays are not allowed"); // Empty array multiplication
  });
});

describe('subtractionOperation function', () => {
  it('should subtract two positive numbers correctly', () => {
    const array1 = [5, 8, 7];
    const array2 = [3, 4, 2];
    expect(subtractionOperation(array1, array2)).toEqual([2, 4, 5]); // 587 - 342 = 245
  });

  it('should subtract numbers with different lengths correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    expect(subtractionOperation(array1, array2)).toEqual([7, 8]); // 123 - 45 = 78
  });

  it('should subtract a single-digit number from a multi-digit number correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [7];
    expect(subtractionOperation(array1, array2)).toEqual([1, 1, 6]); // 123 - 7 = 116
  });

  it('should subtract zero from a number correctly', () => {
    const array1 = [1, 2, 3];
    const array2 = [0];
    expect(subtractionOperation(array1, array2)).toEqual([1, 2, 3]); // 123 - 0 = 123
  });

  it('should throw an error when subtracting arrays containing negative numbers', () => {
    const array1 = [-1, 2, 3];
    const array2 = [4, -5, 6];
    expect(() => subtractionOperation(array1, array2)).toThrowError("Negative numbers as input are invalid");
  });

  it('should throw an error when subtracting arrays containing numbers greater than 9', () => {
    const array1 = [10, 2, 3];
    const array2 = [7, 8, 9];
    expect(() => subtractionOperation(array1, array2)).toThrowError("Numbers greater than 9 as input are invalid");
  });

  it('should return [0] when subtracting two identical arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    expect(subtractionOperation(array1, array2)).toEqual([0]); // 123 - 123 = 0
  });
});


