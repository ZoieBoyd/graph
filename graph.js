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
    }

    removeNode(node) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === node) {
                this.nodes.splice(i, 1);
                i--;
            }
        }

        this.adjacencyList.delete(node);

        this.adjacencyList.forEach((list) => {
            if (list.includes(node)) {
                list.splice(list.indexOf(node), 1);
            }
        });
    }

    removeEdge(start, end) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end))
            return console.error("Error: One or both of these nodes do not exist.");

        const startNode = this.adjacencyList.get(start);
        const endNode = this.adjacencyList.get(end);

        if (startNode.indexOf(end) === -1 || endNode.indexOf(start) === -1)
            return console.error("Error: Edge does not exist between these nodes.");

        startNode.splice(startNode.indexOf(end), 1);
        endNode.splice(endNode.indexOf(start), 1);
    }

    display() {
        let output = "";
        this.adjacencyList.forEach((values, key) => {
            output += key + " -> " + values.join(", ") + "\n";
        });
        console.log(output);
    }
}
