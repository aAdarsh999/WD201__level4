
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");


  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };


  return {all,add,markAsComplete,overdue,dueToday,dueLater
  };
};

module.exports = todoList;

