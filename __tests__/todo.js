const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo list getting Tested", () => {
  beforeAll(() => {
    add({
      title: "Complete OS assignment.",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding a new todo in the list", () => {
    let length = all.length;

    add({
      title: "Sliptest Flat",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking this todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Finding all todos that are over due", () => {
    let toDolist = overdue();

    expect(
      toDolist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("Finding all todos that are due for today", () => {
    let toDolist = dueToday();

    expect(
      toDolist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("Finding all todos that are due for later", () => {
    let toDolist = dueLater();

    expect(
      toDolist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
