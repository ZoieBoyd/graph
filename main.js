import { Graph } from "./graph.js";

const graph = new Graph();

graph.addNode("hello");
graph.addNode("bye");
graph.addEdge("hello", "bye");
graph.addEdge("hola", "adios");
