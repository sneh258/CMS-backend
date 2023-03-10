const express = require('express');
const router = express.Router();

const recordController = require('./../controllers/record');
const validation = require('./../middlewares/authValidation');

router.route('/create').post(validation.validate,recordController.createRecordType);

router.route('/update').patch(validation.validate,recordController.updateRecordType);

router
    .route('/column')
    .post(validation.validate,recordController.addColumn)
    .patch(validation.validate,recordController.editColumnName)
    .delete(validation.validate,recordController.deleteRecordColumn);

router.route('/details')
    .get(validation.validate,recordController.listRecords);

module.exports = router;
