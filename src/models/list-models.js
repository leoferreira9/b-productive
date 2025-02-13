let lists = [];

function generateID(){
    return Math.floor(Math.random() * 999999);
}

module.exports = {
    getAllLists(){
        return lists;
    },

    getListById(id){
        return lists.find(list => list.id === +id);
    },

    createList(list_title){
        const newList = {
            id: generateID(),
            title: list_title,
            tasks: []
        }
        return newList;
    },

    saveList(list){
        lists.push(list);
    },

    createTask(task_title){
        const newTask = {
            id: generateID(),
            title: task_title,
            completed: false
        }

        return newTask;
    },

    saveTask(list, task){
        list.tasks.push(task);
    },

    completeTask(listId, taskId){
        const list = this.getListById(listId);
        const task = list.tasks.find(task => task.id === +taskId);
        task.completed = true;
    },

    undoTask(listId, taskId){
        const list = this.getListById(listId);
        const task = list.tasks.find(task => task.id === +taskId);
        task.completed = false;
    },

    deleteList(listId){
        const listIndex = lists.findIndex(list => list.id === +listId);
        lists.splice(listIndex, 1);
    }
}