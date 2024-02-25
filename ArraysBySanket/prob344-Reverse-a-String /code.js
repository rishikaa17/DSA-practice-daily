// https://leetcode.com/problems/reverse-string/description/
var reverseString = function(s) {
    let n = s.length;
    let i = 0;
    let j = n-1;
    while( i <= j ) {
        //swaping 
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        // move to the next position 
        i++;
        j--;
    }
};