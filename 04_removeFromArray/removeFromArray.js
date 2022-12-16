const removeFromArray = function(list, ...itemsToRemove) {

   
        for (let j = 0; j < itemsToRemove.length; j++){
           list = list.filter(listItem => listItem !== itemsToRemove[j]);
           
        }
    
    return list;

};

// Do not edit below this line
module.exports = removeFromArray;
