function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------


// I see, what I did was simply use odds or evens i % 2 ===0 or % 2 !==0 to determine wheter to add a # or _ 
// then for the next row I swapped
// so I would either string += # else string +=_

  let board = "";
  let row = "";


  function chessBdRow(x) {
    if (x == "#") {
      x = "_";
    }
    else { x = "#"; }
    return x;
  }
  let x = "#";
  let row = "";
  
  // loop to create a row - should be nested inside a loop that creates the board by stacking the rows
  for (i = 0; i <= 8; i++) {
    chessBdRow(x);
    row = row + x;
  }


  
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
