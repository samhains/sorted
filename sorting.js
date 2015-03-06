function bubbleSort(array) {

    for(var i=0;i<array.length;i++){
    	for(var j=0;j<array.length;j++){
    		//debugger;
    		if(array[j]> array[j+1]){
    			var tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
    		}
    	}
    }
    return array;

}

function split(wholeArray) {
	var firstHalf = [];
	var halfLength = Math.floor(wholeArray.length/2);
	for(var i=0;i<halfLength;i++){
		firstHalf[i] = wholeArray.shift();
	}

    /* your code here to define the firstHalf and secondHalf arrays */

    return [firstHalf, wholeArray];
}


function merge(arr1, arr2){
	var sortedArr = [];
	var i = j = 0;
	while(i < arr1.length && j<arr2.length){
		if(arr1[i] < arr2[j]){
			sortedArr.push(arr1[i]);
			i++;
		}
		else {
			sortedArr.push(arr2[j]);
			j++;
		}
	}
	while(j<arr2.length){
		sortedArr.push(arr2[j]);
		j++;
	}
	while(i<arr1.length){
		sortedArr.push(arr1[i]);
			i++;
	}


	return sortedArr;
}

function mergeSort(array){
	if(array.length <= 1)
		return  array;
	//debugger;
	var splitted = split(array);
	var left = mergeSort(splitted[0]);
	var right = mergeSort(splitted[1]);


	return merge(left,right);


}

function test(){
	for(var i=12; i < 20; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = []
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + "native");
    native_test_array.sort(function(a,b){ return a-b; });
    console.timeEnd(num_items + "native");

    console.time(num_items + "bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + "bubble");

    console.time(num_items + "merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + "merge"); 
}

}