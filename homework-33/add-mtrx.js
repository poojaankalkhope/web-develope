let matrix1 = [[1,2] , [3,4]]
let matrix2 = [[5,6] , [7,8]]
let matrix3 = [[], []]
 

for(let i=0; i< matrix1.length; i++){
    for(let j=0; j< matrix1[i].length; j++){
        matrix3[i][j] = matrix1[i][j] + matrix2[i][j]
    }
}


console.log(matrix3) 


let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];

function addMatrices(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let resultMatrix = addMatrices(matrix1, matrix2);

console.log(resultMatrix);
