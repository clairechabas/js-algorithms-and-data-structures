/**
 * Graphs
 *
 * -- Definition
 * A graph is a collection of nodes with connections between them.
 * We represent graphs with an adjacency matrix or an adjacency list.
 *
 * -- Useful for
 * Social networks (the Internet)
 * Location / Mapping
 * Recommendation engines
 * Routing algorithms
 * Visual hierarchy
 * File system optimizations
 *
 * -- Terminology
 * Vertex: a node
 * Edge: a connection between 2 nodes
 * Weighted/Unweighted: when edges have a value assocatied to them
 * Directed/Undirected: when edges has a direction (from node A to node B) or not
 *
 * -- Complexity
 *               | Adjacency List | Adjacency Matrix
 * Add Vertex:           O(1)            O(|V^2|)
 * Add Edge:             O(1)             O(1)
 * Remove Vertex:   O(|E| + |E|)        O(|V^2|)
 * Remove Edge:       O(|E|)            O(1)
 * Query:          O(|E| + |E|)         O(1)
 * Storage:        O(|E| + |E|)         O(|V^2|)
 *
 * -- Comparison and choice
 * In general, a matrix takes up more space and is slower to iterate over each edge,
 * but it's faster to access a specific edge.
 * While a list takes up less space and is faster to iterate over every edge but
 * it's slower to query for a specific edge.
 *
 * We'll go with an adjancency list because of the less space it takes and
 * real world data tends to be sparse, not connected, there are a lot of nodes
 * but there aren't as many connections so the list is more suitable for this.
 */

// We're building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return "Sorry this value already exists";
    }

    this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    // Remove all the associated edges
    this.adjacencyList[vertex].forEach((linkedVertex) =>
      this.removeEdge(vertex, linkedVertex)
    );

    // Remove the vertex (removing the key from the list)
    delete this.adjacencyList[vertex];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  /**
   * Graph Traversal
   *
   * Use cases
   * - Peer to peer networking
   * - Web crawlers
   * - Finding the "closest" matches/recommendations
   * - Shortest path problems: GPS navigation, solving mazes, AI (shortest path to win the game)
   */
  // Visiting as deep a vertex as possible before visiting the neighbors
  depthFirstSeachRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  depthFirstSeachIteractive(start) {
    const result = [];
    const visited = {};
    let currentVertex;

    const stack = [start];
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      // We add currentVertex's neighbors to the stack
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  // Visiting all the neighbors before moving forward
  breadthFirstSeach(start) {
    const result = [];
    const visited = {};
    let currentVertex;

    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Testing
const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Paris");
graph.addVertex("Berlin");
graph.addVertex("Strasbourg");
graph.addVertex("Hoi An");
graph.addVertex("Nantes");
console.log(graph.adjacencyList);

graph.addEdge("Tokyo", "Paris");
graph.addEdge("Tokyo", "Hoi An");
graph.addEdge("Tokyo", "Berlin");
graph.addEdge("Paris", "Strasbourg");
graph.addEdge("Paris", "Berlin");
graph.addEdge("Paris", "Nantes");
graph.addEdge("Berlin", "Nantes");
graph.addEdge("Hoi An", "Nantes");
console.log("After adding edges", graph.adjacencyList);

graph.removeEdge("Paris", "Strasbourg");
console.log("After removing an edge", graph.adjacencyList);

graph.removeVertex("Tokyo");
console.log("After removing the Tokyo vertex", graph.adjacencyList);

// Testing Graph Traversal
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g);
console.log("DepthFirst Recursive Result", g.depthFirstSeachRecursive("A"));
console.log("DepthFirst Iterative Result", g.depthFirstSeachIteractive("A"));
console.log("BreadthFirst Result", g.breadthFirstSeach("A"));
