// const express = require('express');
// const router = express.Router();

// const users = require('../models/users/users-collection');
// const todos = require('../models/todo/todo-collection');

// router.get('/api/v1/:model', handleGetAllItems);
// router.get('/api/v1/:model/:id', handleGetAllItems);
// router.post('/api/v1/:model', handleAllPost);
// router.put('/api/v1/:model/:id', handlePutItem);
// router.delete('/api/v1/:model/:id', handleDeleteItem);


// router.param('model', getModel);

// function getModel(req, res, next) {
//     let model = req.params.model;
//     switch (model) {
//         case 'users':
//             req.model = users;
//             next();
//             break;
//         case 'todos':
//             req.model = todos;
//             next();
//             break;
//         default:
//             next('Invalid Model !! ');
//             break;

//     }
// }

// function handleGetAllItems(req, res, next) {
//     req.model.get(req.params.id).then(result => {
//         res.status(200).send(result);

//     }).catch(next);
// }



// function handleAllPost(req, res, next) {
//     req.model.create(req.body).then(result => {
//         res.json(result);
//     }).catch(next);
// }


// function handlePutItem(req, res, next) {
//     req.model.update(req.params.id, req.body).then(result => {
//         res.json(result);
//     }).catch(next);
// }


// function handleDeleteItem(req, res, next) {
//     req.model.delete(req.params.id, req.body).then(result => {
//         res.json(result);

//     }).catch(next);
// }




// module.exports = router;
