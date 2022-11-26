import { randomNumber } from "../randomNumber-generator";

function GraphGenerator(numberOfRows: number, numberOfColumns: number, maximumWeigth?: number, minimumWeigth?: number): any[] {
  const matrix: any[] = [];

  for (let i = 0; i < numberOfRows; i++) {
    const newRow = [randomNumber(maximumWeigth, minimumWeigth)]
    matrix.push(newRow);

    for (let j = 1; j < numberOfColumns; j++) {
      const newColumValues = randomNumber(maximumWeigth, minimumWeigth)
      matrix[i].push(newColumValues);
    }
  }

  return matrix;
}

function GraphVisualizer(graph: any[]) {
  console.table(graph);
}

export { GraphGenerator, GraphVisualizer };
