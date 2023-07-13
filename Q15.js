var string = "check wait work check go"
var word_reversed_string = "";
string+=" ";
var s="";
for(i of string){
    if(i==" "){
        word_reversed_string+=s.split("").reverse().join("") + " ";
        s="";
    }
    else{
        s+=i;
    }
}
console.log(word_reversed_string);