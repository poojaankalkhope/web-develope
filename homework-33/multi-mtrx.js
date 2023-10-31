//let matrix1 = [[1,2] , [3,4]]
//let matrix2 = [[5,6] , [7,8]]
//let matrix3 = [[], []]
 

//for(let i=0; i< matrix1.length; i++){
  //  for(let j=0; j< matrix1[i].length; j++){
    //    matrix3[i][j] = matrix1[i][j] * matrix2[i][j]
    //}
//
//}



// console.log(matrix3)



function multiplyMatrices(matrix1, matrix2) {
    if (matrix1[0].length !== matrix2.length) {
        // Check if the number of columns in matrix1 is equal to the number of rows in matrix2
        return "Cannot multiply matrices. Incompatible dimensions.";
    }

    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[i].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i].push(sum);
        }
    }
    return result;
}

let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];

let resultMatrix = multiplyMatrices(matrix1, matrix2);

console.log(resultMatrix);


