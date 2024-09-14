import { create } from "zustand";
import { persist } from "zustand/middleware";

export const FILTER_ALL = "all";
export const FILTER_ACTIVE = "active";
export const FILTER_COMPLETED = "completed";

export const useTodoStore = create(
  persist(
    (set, get) => ({
      todoList: [],
      filter: "all",

      addItemToTodoList: (task) => {
        const newTodo = { task: task, isCompleted: false, id: Date.now() };
        set(() => ({ todoList: [...get().todoList, newTodo] }));
      },

      getTodoByID: (id) =>
        get()
          .getFilterdTodos()
          .find((todo) => todo.id === id),

      toggleTodoStatus: (id) =>
        set(() => ({
          todoList: get().todoList.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        })),

      deleteitemFromTodos: (id) =>
        set(() => ({
          todoList: get().todoList.filter((todo) => todo.id !== id),
        })),

      clearCompleted: () =>
        set(() => ({
          todoList: get().todoList.filter((todo) => todo.isCompleted === false),
        })),
      setFilter: (filter) => set({ filter }),
      setSortedList: (list) => set({todoList: list}),
      reset: () => set(intialState),
    }),
    {
      name: "TodoList-storage",
    }
  )
);
