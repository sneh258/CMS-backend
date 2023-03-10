const express = require('express');
const router = express.Router();

const collectionController = require('./../controllers/collection');

router.route('/create').post(collectionController.addRecord);

router.route('/update').patch(collectionController.editRecord);

router.route('/column').delete(collectionController.deleteRecord);

router.route('/details').get(collectionController.listCollections)
    .post(collectionController.getDataOfCollection);

module.exports = router;
