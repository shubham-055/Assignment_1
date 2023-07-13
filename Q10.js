var Input = ["check", "wait", "work", "check", "go"];
const freq=new Map();
for(item of Input){
    if(freq.has(item)){
        freq.set(item,freq.get(item)+1);
    }
    else{
        freq.set(item,1);
    }
}
console.log(freq);
