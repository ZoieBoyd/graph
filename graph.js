export class Graph {
    constructor() {
        this.nodes = new Array();
        this.adjacencyList = new Map();
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList.set(node, new Array());
    }

    addEdge(startNode, endNode) {
        if (this.nodes.includes(startNode) && this.nodes.includes(endNode)) {
            this.adjacencyList.get(startNode).push(endNode);
            this.adjacencyList.get(endNode).push(startNode);
        }
        console.log(this.adjacencyList);
    }
}
