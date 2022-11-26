import { GraphGenerator, GraphVisualizer } from "./module/graph-generator";
import { Dijkstra } from "./module/dijkstra-algorithm";

function main() {
  const graph = GraphGenerator(5, 5); 
  GraphVisualizer(graph);
  
  const startNode = [0, 0];
  const endNode = [4, 3];
  Dijkstra(graph, startNode, endNode);
}

main();
