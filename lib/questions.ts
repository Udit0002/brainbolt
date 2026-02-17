export const questions = [


{
  question: "What is 8 + 6?",
  options: ["12", "13", "14", "15"],
  correctAnswer: "14",
  difficulty: 1
},
{
  question: "Which language runs in the browser?",
  options: ["C++", "Java", "Python", "JavaScript"],
  correctAnswer: "JavaScript",
  difficulty: 1
},
{
  question: "Which keyword declares a constant in JavaScript?",
  options: ["let", "const", "var", "static"],
  correctAnswer: "const",
  difficulty: 1
},
{
  question: "What does CPU stand for?",
  options: [
    "Central Process Unit",
    "Central Processing Unit",
    "Computer Personal Unit",
    "Central Programming Unit"
  ],
  correctAnswer: "Central Processing Unit",
  difficulty: 2
},
{
  question: "Binary representation of decimal 2?",
  options: ["10", "01", "11", "100"],
  correctAnswer: "10",
  difficulty: 2
},
{
  question: "Which symbol is used for AND in most languages?",
  options: ["&&", "||", "&", "!"],
  correctAnswer: "&&",
  difficulty: 2
},
{
  question: "What is 2^3?",
  options: ["6", "8", "9", "4"],
  correctAnswer: "8",
  difficulty: 2
},
{
  question: "Which loop runs at least once?",
  options: ["for", "while", "do-while", "foreach"],
  correctAnswer: "do-while",
  difficulty: 3
},
{
  question: "Which is NOT a primitive data type in Java?",
  options: ["int", "float", "String", "boolean"],
  correctAnswer: "String",
  difficulty: 3
},
{
  question: "Which HTTP method is used to fetch data?",
  options: ["POST", "PUT", "GET", "DELETE"],
  correctAnswer: "GET",
  difficulty: 3
},
{
  question: "Which number is prime?",
  options: ["9", "15", "17", "21"],
  correctAnswer: "17",
  difficulty: 3
},
{
  question: "Which of these is a frontend framework?",
  options: ["Node.js", "Express", "React", "MongoDB"],
  correctAnswer: "React",
  difficulty: 3
},
{
  question: "Which data type stores decimal values?",
  options: ["int", "boolean", "float", "char"],
  correctAnswer: "float",
  difficulty: 2
},
{
  question: "Which operator increases value by 1?",
  options: ["--", "++", "+=", "="],
  correctAnswer: "++",
  difficulty: 2
},
{
  question: "Which of these is case sensitive?",
  options: ["HTML", "CSS", "JavaScript", "HTTP"],
  correctAnswer: "JavaScript",
  difficulty: 3
},

{
  question: "Time complexity of binary search?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  correctAnswer: "O(log n)",
  difficulty: 4
},
{
  question: "Which structure follows FIFO?",
  options: ["Stack", "Queue", "Tree", "Heap"],
  correctAnswer: "Queue",
  difficulty: 4
},
{
  question: "Which structure follows LIFO?",
  options: ["Queue", "Stack", "Graph", "Array"],
  correctAnswer: "Stack",
  difficulty: 4
},
{
  question: "Worst case time of linear search?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  correctAnswer: "O(n)",
  difficulty: 4
},
{
  question: "Which traversal prints BST in sorted order?",
  options: ["Preorder", "Inorder", "Postorder", "Level order"],
  correctAnswer: "Inorder",
  difficulty: 5
},
{
  question: "Average lookup time in HashMap?",
  options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
  correctAnswer: "O(1)",
  difficulty: 5
},
{
  question: "Height of balanced BST?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
  correctAnswer: "O(log n)",
  difficulty: 5
},
{
  question: "Which structure is used in BFS?",
  options: ["Stack", "Queue", "Heap", "Tree"],
  correctAnswer: "Queue",
  difficulty: 6
},
{
  question: "Which structure is used in DFS (iterative)?",
  options: ["Queue", "Stack", "Graph", "Heap"],
  correctAnswer: "Stack",
  difficulty: 6
},
{
  question: "Worst case search in BST?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  correctAnswer: "O(n)",
  difficulty: 6
},
{
  question: "Which DS is best for priority scheduling?",
  options: ["Stack", "Queue", "Heap", "LinkedList"],
  correctAnswer: "Heap",
  difficulty: 6
},
{
  question: "Circular queue prevents?",
  options: ["Overflow", "Underflow", "Memory waste", "Stack overflow"],
  correctAnswer: "Memory waste",
  difficulty: 6
},
{
  question: "Which DS stores key-value pairs?",
  options: ["Array", "HashMap", "Stack", "Queue"],
  correctAnswer: "HashMap",
  difficulty: 5
},
{
  question: "Time complexity to insert in heap?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  correctAnswer: "O(log n)",
  difficulty: 6
},

/* ===============================
   DIFFICULTY 7–8 (ALGORITHMS) – 30
================================ */

{
  question: "Average time of QuickSort?",
  options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
  correctAnswer: "O(n log n)",
  difficulty: 7
},
{
  question: "Which sorting is stable?",
  options: ["HeapSort", "MergeSort", "QuickSort", "Selection"],
  correctAnswer: "MergeSort",
  difficulty: 7
},
{
  question: "Dijkstra works for?",
  options: [
    "Negative edges",
    "Positive weights",
    "Unweighted graphs",
    "Trees only"
  ],
  correctAnswer: "Positive weights",
  difficulty: 8
},
{
  question: "Which algorithm finds MST?",
  options: ["Dijkstra", "Kruskal", "Bellman-Ford", "BFS"],
  correctAnswer: "Kruskal",
  difficulty: 8
},
{
  question: "Floyd Warshall time complexity?",
  options: ["O(V^2)", "O(V^3)", "O(E log V)", "O(V log V)"],
  correctAnswer: "O(V^3)",
  difficulty: 8
},
{
  question: "Binary search requires array to be?",
  options: ["Sorted", "Unsorted", "Random", "Unique"],
  correctAnswer: "Sorted",
  difficulty: 7
},
{
  question: "Time complexity of MergeSort?",
  options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
  correctAnswer: "O(n log n)",
  difficulty: 7
},
{
  question: "Which algorithm is used for topological sorting?",
  options: ["DFS", "BFS", "Dijkstra", "Prim"],
  correctAnswer: "DFS",
  difficulty: 7
},
{
  question: "Kadane’s Algorithm is used to find?",
  options: [
    "Longest increasing subsequence",
    "Maximum subarray sum",
    "Shortest path",
    "Minimum spanning tree"
  ],
  correctAnswer: "Maximum subarray sum",
  difficulty: 7
},
{
  question: "Which algorithm detects negative cycles?",
  options: ["Dijkstra", "Bellman-Ford", "Prim", "Kruskal"],
  correctAnswer: "Bellman-Ford",
  difficulty: 8
},
{
  question: "Time complexity of HeapSort?",
  options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
  correctAnswer: "O(n log n)",
  difficulty: 7
},
{
  question: "Which algorithm is used in A* search?",
  options: ["Greedy + Heuristic", "DFS only", "Binary Search", "MergeSort"],
  correctAnswer: "Greedy + Heuristic",
  difficulty: 8
},
{
  question: "Time complexity of BFS?",
  options: ["O(V)", "O(E)", "O(V+E)", "O(V log E)"],
  correctAnswer: "O(V+E)",
  difficulty: 7
},
{
  question: "Time complexity of DFS?",
  options: ["O(V)", "O(E)", "O(V+E)", "O(V^2)"],
  correctAnswer: "O(V+E)",
  difficulty: 7
},
{
  question: "Which algorithm uses divide and conquer?",
  options: ["MergeSort", "InsertionSort", "BubbleSort", "Linear Search"],
  correctAnswer: "MergeSort",
  difficulty: 7
},
{
  question: "Longest Common Subsequence is solved using?",
  options: ["Greedy", "Dynamic Programming", "Backtracking only", "Binary Search"],
  correctAnswer: "Dynamic Programming",
  difficulty: 8
},
{
  question: "Time complexity of naive string matching?",
  options: ["O(n)", "O(m+n)", "O(n*m)", "O(log n)"],
  correctAnswer: "O(n*m)",
  difficulty: 7
},
{
  question: "Which algorithm improves string matching to O(n+m)?",
  options: ["KMP", "DFS", "QuickSort", "Prim"],
  correctAnswer: "KMP",
  difficulty: 8
},
{
  question: "Knapsack problem is solved using?",
  options: ["Greedy always", "Dynamic Programming", "DFS only", "Binary Search"],
  correctAnswer: "Dynamic Programming",
  difficulty: 8
},
{
  question: "Which technique is used in QuickSort?",
  options: ["Dynamic Programming", "Divide and Conquer", "Greedy", "Backtracking"],
  correctAnswer: "Divide and Conquer",
  difficulty: 7
},
{
  question: "Which algorithm finds strongly connected components?",
  options: ["Kosaraju", "Dijkstra", "Prim", "Bellman-Ford"],
  correctAnswer: "Kosaraju",
  difficulty: 8
},
{
  question: "Time complexity of counting sort?",
  options: ["O(n)", "O(n+k)", "O(n log n)", "O(n^2)"],
  correctAnswer: "O(n+k)",
  difficulty: 7
},
{
  question: "Which algorithm is best for nearly sorted arrays?",
  options: ["Insertion Sort", "HeapSort", "QuickSort", "Selection Sort"],
  correctAnswer: "Insertion Sort",
  difficulty: 7
},
{
  question: "Which paradigm does Prim’s algorithm use?",
  options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
  correctAnswer: "Greedy",
  difficulty: 8
},
{
  question: "Which algorithm finds articulation points?",
  options: ["DFS", "BFS", "Dijkstra", "HeapSort"],
  correctAnswer: "DFS",
  difficulty: 8
},
{
  question: "Which algorithm is used for pattern matching with hashing?",
  options: ["KMP", "Rabin-Karp", "DFS", "Prim"],
  correctAnswer: "Rabin-Karp",
  difficulty: 8
},
{
  question: "Time complexity of exponential recursion (naive Fibonacci)?",
  options: ["O(n)", "O(n log n)", "O(2^n)", "O(log n)"],
  correctAnswer: "O(2^n)",
  difficulty: 7
},
{
  question: "Which algorithm is used in PageRank?",
  options: ["DFS", "Matrix multiplication iteration", "HeapSort", "Binary Search"],
  correctAnswer: "Matrix multiplication iteration",
  difficulty: 8
},
{
  question: "Which algorithm can be used to check bipartite graph?",
  options: ["BFS", "QuickSort", "Prim", "MergeSort"],
  correctAnswer: "BFS",
  difficulty: 7
},
{
  question: "Time complexity of Strassen’s matrix multiplication?",
  options: ["O(n^3)", "O(n^2.81)", "O(n log n)", "O(n^2)"],
  correctAnswer: "O(n^2.81)",
  difficulty: 8
},

/* ===============================
   DIFFICULTY 9–10 (EDGE CASES) – 20
================================ */

{
  question: "Worst case of QuickSort?",
  options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
  correctAnswer: "O(n^2)",
  difficulty: 9
},
{
  question: "Max edges in undirected graph with V vertices?",
  options: ["V(V-1)", "V^2", "V(V-1)/2", "2V"],
  correctAnswer: "V(V-1)/2",
  difficulty: 10
},
{
  question: "Bellman-Ford handles?",
  options: [
    "Negative edges",
    "Only positive edges",
    "Trees",
    "Binary graphs"
  ],
  correctAnswer: "Negative edges",
  difficulty: 9
},
{
  question: "Time complexity of finding SCC using Kosaraju?",
  options: ["O(V+E)", "O(V^2)", "O(E log V)", "O(V log E)"],
  correctAnswer: "O(V+E)",
  difficulty: 10
},
{
  question: "Space complexity of adjacency matrix?",
  options: ["O(V)", "O(E)", "O(V^2)", "O(V+E)"],
  correctAnswer: "O(V^2)",
  difficulty: 9
}


]