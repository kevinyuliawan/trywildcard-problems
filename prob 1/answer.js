/*
The idea here is to take the input, make two arrays by having the original and transposing it, check both of their lines (not the most efficient), and for each line, calculate the amount of permutations possible using spaces!/(spaces-5)! as long as there is at least 5 or more open spaces. Then add up the total amount of permutations.
*/

var lineCount = 0;

function fact(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function parse(input) {
    var globalCount = 0;
    var lineCount = 0;
    var firstArray = input.split('\n');
    var secondArray = transpose(firstArray);
    for (var line = 0; line < firstArray.length; line++) { //for each line
        globalCount += check(firstArray[line].split(""));
        globalCount += check(secondArray[line]);
    }
    return globalCount;
};

function check(line) {
    lineCount++;
    var result = 0;
    var charCount = 0;
    for (var char = 0; char < line.length; char++) { //for each char, keep count
        if (line[char] == "*") charCount++;
    }
    if (charCount >= 5) { //calculate permutations
        result = fact(charCount) / fact(charCount - 5);
    };
    console.log("result: " + result + " | " + "LC: " + lineCount + " | " + line);
    return result;
};

function transpose(old) {
    var newArray = old.map(
        function(currentValue, index, calledArray) {
            return calledArray.map(
                function(currentValue) {
                    return currentValue[index]
                })
        }
    )
    return newArray;
}