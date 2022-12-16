const repeatString = function(string, num) {
    
    let list = "";
   
    if (num < 0){
        return "ERROR";
    }
   
    else{
    for (i = 0; i < num; i++){
        list += string;
        }
    return list;}
};

// Do not edit below this line
module.exports = repeatString;
