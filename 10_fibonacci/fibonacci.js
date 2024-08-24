const fibonacci = function(position) {
    if (position < 0) return 'OOPS';
    if (position <= 0) return 0;
    if (position === 1) return 1;
    let arr = [1, 1]
    for (let i = 2; i < position; i++)
        arr.push(arr[i-1]+arr[i-2]);
    return arr[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
