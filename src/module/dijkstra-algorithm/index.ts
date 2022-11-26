function Dijkstra(graph: any[], startNode: any[], endNode: any[]) {
  const [startRow, startColumn] = startNode;
  const [endRow, endColumn] = endNode;

  const startNodeValue = graph[startRow][startColumn];
  const endNodeValue = graph[endRow][endColumn];

  console.log(`
    \n Row ${startRow} and Column ${startColumn} -> ${startNodeValue}
    \n Row ${endRow} and Column ${endColumn} -> ${endNodeValue}
  `)
}

export { Dijkstra };
