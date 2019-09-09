const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Amanecer con un cerdito" },
    "task-2": { id: "task-2", content: "Dormir mas de 6hs" },
    "task-3": { id: "task-3", content: "LLorar por el Vitel Toné", type: "BUG" },
    "task-4": { id: "task-4", content: "Ordenar la pieza", type: "BUG" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TO DO",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "DOING",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;
