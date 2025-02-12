const express = require("express");
const router = express.Router();
const listController = require("./controllers/list-controller");

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/app', listController.index);
router.get('/app/new-list', listController.create);
router.post('/app/new-list', listController.save);
router.get('/app/:id', listController.show);
router.post('/app/:id/newTask', listController.addTask);
router.post('/app/:listId/complete/:taskId', listController.complete);
router.post('/app/:listId/undo/:taskId', listController.undo);
router.post('/app/:listId/delete', listController.delete);

module.exports = router;