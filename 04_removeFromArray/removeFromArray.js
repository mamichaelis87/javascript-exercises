const removeFromArray = function(list, ...itemsToRemove) {

   //or(let i = 0; i < list.length; i++){
        for (let j = 0; j < itemsToRemove.length; j++){
           list = list.filter(listItem => listItem !== itemsToRemove[j]);
           
            //if (list[i] === itemsToRemove[j]){
           //     list.splice(i,1);
            //}
        }
    //}
    return list;

};

// Do not edit below this line
module.exports = removeFromArray;
