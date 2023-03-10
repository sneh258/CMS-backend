const express = require('express');
const router = express.Router();

const recordController   = require('./../controllers/record');

router.route('/create').post(recordController.createRecordType);

router.route('/update').patch(recordController.updateRecordType);

router
    .route('/column')
    .post(recordController.addColumn)
    .patch(recordController.editColumnName)
    .delete(recordController.deleteRecordColumn);

router.route('/details')
    .get(recordController.listRecords);

module.exports = router;
