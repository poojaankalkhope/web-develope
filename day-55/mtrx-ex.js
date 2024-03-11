const originalMatrix = [
    [1, 4],
    [9, 7]
]

function Reverse2DMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;


    const Reverse2DMatrix = [];

    for (let i = 0; i < numCols; i++) {
        Reverse2DMatrix[i] = [];
        for (let j = 0; j < numRows; j++) {
             Reverse2DMatrix[i][j] = matrix[j][i];
        }
    }

    return Reverse2DMatrix;
}


const transposedMatrix = Reverse2DMatrix(originalMatrix);

console.log("Original Matrix:");
console.log(originalMatrix);

console.log("Transposed Matrix:");
console.log(transposedMatrix);


 