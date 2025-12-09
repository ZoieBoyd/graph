import { Graph } from "./graph.js";

const graph = new Graph();

console.log("--- Social Network Simulation ---\n");

console.log("Profiles created: ");
graph.addNode("James");
graph.addNode("Michael");
graph.addNode("Lisa");
graph.addNode("Jane");
graph.addNode("Albert");
graph.display();

console.log("Friendships established: ");
graph.addEdge("James", "Michael");
graph.addEdge("James", "Lisa");
graph.addEdge("James", "Jane");
graph.addEdge("Michael", "Lisa");
graph.addEdge("Jane", "Albert");
graph.display();

console.log("James unfriends Lisa: ");
graph.removeEdge("James", "Lisa");
graph.display();

console.log("Michael deletes his profile: ");
graph.removeNode("Michael");
graph.display();
