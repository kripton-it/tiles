export const getStartTable = (size) => {
  const length = size * size;
  // Initial array: for size = 2 - [1, 2, 3, 4]
  const array = new Array(length).fill(0).map((item, index) => index + 1);
  // Shuffle initial array: for size = 2 - [3, 1, 4, 2]
  for (let i = length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // Empty table
  const table = new Array(size);

  for (let i = 0; i < size; i++) {
    // Empty row
    table[i] = new Array(size);

    for (let j = 0; j < size; j++) {
      // Fill row with values from shuffled array
      table[i][j] = Math.ceil(array[i * size + j] / 2);
    }
  }

  return table; // for size = 2 - [[2, 1], [2, 1]]
}