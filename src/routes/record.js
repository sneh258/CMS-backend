const express = require('express');
const router = express.Router();

const recordController   = require('./../controllers/record');

router.route('/save').post(recordController.createRecordType);

router.route('/update').post(recordController.updateRecordType);

router
    .route('/field')
    .post(recordController.addColumn)
    .patch(recordController.editColumnName)
    .delete(recordController.deleteRecordColumn);

router.route('/details')
    .get(recordController.listRecords);

module.exports = router;
