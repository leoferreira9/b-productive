const listModels = require("../models/list-models");

module.exports = {
    // GET /app
    index: (req, res) => {
        const lists = listModels.getAllLists();
        res.render('app', { lists });
    },

    // GET /app/new-list
    create: (req, res) => {
        res.render('newList');
    },

    // POST /app/new-list
    save: (req, res) => {
        const { list_title } = req.body;

        const newList = listModels.createList(list_title);
        listModels.saveList(newList);

        res.redirect("/app");
    },

    // GET /app/:id
    show: (req, res) => {
        const { id } = req.params;

        const list = listModels.getListById(id);
        
        res.render("tasks", { list });
    },

    // POST /app/:id/newTask
    addTask: (req, res) => {
        const { id } = req.params;
        const { newTaskTitle } = req.body;

        const list = listModels.getListById(id);

        const task = listModels.createTask(newTaskTitle);

        listModels.saveTask(list, task);

        res.redirect(`/app/${id}`);
    },

    // POST /app/:listId/complete/:taskId
    complete: (req, res) => {
        const { listId, taskId } = req.params;

        listModels.completeTask(listId, taskId);

        res.redirect(`/app/${listId}`);
    },

    // POST /app/:listId/undo/:taskId
    undo: (req, res) => {
        const { listId, taskId } = req.params;

        listModels.undoTask(listId, taskId);

        res.redirect(`/app/${listId}`);
    },

    //DELETE /app/:listId/delete
    delete: (req, res) => {
        const { listId } = req.params;
        listModels.deleteList(listId);
        res.redirect('/app');
    }
}