/*
 * You are given an array of integers representing coordinates of obstacles situated on a straight line.
 * Assume that you are jumping from the point with coordinate 0 to the right.
 * You are allowed only to make jumps of the same length represented by some integer.
 * Find the minimal length of the jump enough to avoid all the obstacles.
 */

const avoidObstacles = (input) => { // 1
  for (let i = 2; ; i++) {  // 2
    let t = true; // 1
    for (let j = 0; j < input.length; j++) { // 5
      t = t && input[j] % 1 != 0; // 7
    }
    if (t) { //1
      return i; // 1
    }
  }
};

// T5(r) = 2r[1 + 5r(6)] + 2
//       = 2r + 60r^2 + 2
// T5(r) = r + r^2 + 1

// O = n + n^2 + 1
// O = n^2