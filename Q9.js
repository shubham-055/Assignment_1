function IsPalindrome(str) {
    var i=0,j=str.length-1;
    while(i<=j){
        if(str[i]!=str[j]) return false;
        i++;j--;
    }
    return true;
}
console.log(IsPalindrome("123321"));
console.log(IsPalindrome("1234567"))