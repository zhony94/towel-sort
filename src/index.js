
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let variable = []  
  if (matrix.length === undefined){
    return [];
  }else {
    
    for(let i=0; i<matrix.length; i++){
      if(!(i%2 === 0)){
        variable = variable.concat(matrix[i].reverse())
      }else {
        variable = variable.concat(matrix[i])
      }
    }  
  }return variable
}
