module.exports = {
  getMatrix1 : function(){
    return [
              [8,0,1,9,3],
              [4,5,2,9,7],
              [3,3,6,9,0],
              [0,6,8,8,3],
              [9,0,3,8,7],
            ];
  //   	return [
  // 			['a','b','c'],
  // 			['d','e','f'],
  // 			['g','h','i']
		// ];
  }
};

// Start
	// return [
 //  			['a','b','c'],
 //  			['d','e','f'],
 //  			['g','h','i']
	// 	];

// CW
// [
//   ['g','d','a'],
//   ['h','e','b'],
//   ['i','f','c']
// ]

// CCW
// [
//   ['c','f','i'],
//   ['b','e','h'],
//   ['a','d','g']
// ]