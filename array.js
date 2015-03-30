// Katie Harold
// Test 2 Problem 3
// Filter


// this also doesn't work but it was a start..

var data = ["banana", "apple", "grape"];


function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[data]))
			passed.push(array[data]);
	}
	return passed;
}

print(filter(data));
