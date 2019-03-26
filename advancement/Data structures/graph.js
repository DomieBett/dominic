class Graph {
    constructor() {
        this.edges = {};
        this.directed = false;
    }

    addVertex(vertex) {
        this.edges[vertex] = this.edges[vertex] ? this.edges[vertex] : {};
    }

    addEdge(vertex1, vertex2, weight) {
        if (!weight) {
            weight = 0;
        }

        this.edges[vertex1][vertex2] = weight;

        if (! this.directed) {
            this.edges[vertex2][vertex1] = weight;
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.edges[vertex1] && this.edges[vertex1][vertex2]) {
            delete this.edges[vertex1][vertex2];
        }

        if (this.edges[vertex2] && this.edges[vertex2][vertex1] && (! this.directed)) {
            delete this.edges[vertex2][vertex1];
        }
    }

    removeVertex(vertex) {
        for (const adjacentVertex in this.edges[vertex]) {
            this.removeEdge(adjacentVertex, vertex)
        }

        delete this.edges[vertex];
    }
}

class DirectedGraph extends Graph {
    constructor() {
        super();
        this.directed = true;
    }
}

class UndirectedGraph extends Graph {
    constructor() {
        super();
    }
}
