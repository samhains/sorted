// describe('Bubble Sort', function(){
//     it('handles an empty array', function(){
//         expect( bubbleSort([]) ).toEqual( [] );
//     });
//     it('handles single items', function(){
//         expect( bubbleSort([1]) ).toEqual( [1] );
//     });
//     it('handles two items', function(){
//         expect( bubbleSort([2,1]) ).toEqual( [1,2] );
//     });
//     it('handles multiple items and duplicate items', function(){
//         expect( bubbleSort([3,9,0,3,6,2]) ).toEqual( [0,2,3,3,6,9] );
//     });

// });

// describe('Merge Sort', function(){
//     it('is able to merge two sorted arrays', function(){
//         expect( merge([1,2,3,4], [5,6,7,8]) ).toEqual( [1,2,3,4,5,6,7,8] );
//         expect( merge([3,7,9,11], [5,6,7,8]) ).toEqual( [3,5,6,7,7,8,9,11] );
//     });


// });

// describe('Split Array function', function() {
//   it('is able to split an array into two halves', function() {
//   	 expect(split([1,2,3,4,5,6,7,8]) ).toEqual( [[1,2,3,4],[5,6,7,8]] );
//   });
// });

describe('MergeSort', function() {
  it('Sort the arrays', function() {
  	 expect(mergeSort([5,6,4,7,3,2,1]) ).toEqual( [1,2,3,4,5,6,7] );
  	 expect(mergeSort([10,3,0,1,1,9]) ).toEqual( [0,1,1,3,9,10]);
  	 test();

  });
});