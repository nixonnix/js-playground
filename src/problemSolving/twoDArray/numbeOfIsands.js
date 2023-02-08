/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or 
vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

// 00, 01, 02, 03
// 10, 11, 13
// 20, 21

[]

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

[00,01]
Output: 3



Input: grid = [
  ["0","0","0","0","0"],
  ["0","1","1","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

op: 2


/**
 * @param {character[][]} grid
 * @return {number}
 */

// each element - check
// prev row, next row, next col
var numIslands = function (grid) {
  if (!Array.isArray(grid)) {
    return;
  }

  const op = [];

  for (let row = 0; row < grid.length; row++) {
    let temp = [];
    for (let col = 0; col < row[0].length; col++) {
      let curr, top, botttom, next;
      if (col >= 0 && row >= 0) {
        curr = grid[row][col];
        top = grid[row - 1][col];
        bottom = grid[row + 1][col];
        next = grid[row][col + 1];
        if (curr && (next || top || bottom)) {
          temp.push([row, col]);
        } else if ((curr && !next) || (curr && !bottom) || (curr && !top)) {
          return;
        }
      }
    }
    op.push(temp);
  }
};
