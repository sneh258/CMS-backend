const recordServices = require('./../services/record');

const listRecords = async (req, res) => {
    try {
        const recordData = await recordServices.listRecords();
        res.status(200).json(recordData);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const createRecordType = async (req, res) => {
    try {
        const { name } = req.body;
        const recordData = await recordServices.createRecordType(name);
        res.status(201).json({
            data: recordData,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const updateRecordType = async (req, res) => {
    try {
        const { name, id } = req.body;
        const updatedRecordData = await recordServices.updateRecordType(name, id);
        res.status(200).json({
            data: updatedRecordData,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const deleteRecordColumn = async (req, res) => {
    try {
        const { id, field_name } = req.body;
        const updatedContentType = await recordServices.deleteRecordColumn(
            id,
            field_name
        );
        res.status(200).json({
            data: updatedContentType,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const addColumn = async (req, res) => {
    try {
        const { id, field_name } = req.body;
        const updatedContentType = await recordServices.addColumn(
            id,
            field_name,
        );
        res.status(200).json({
            data: updatedContentType,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const listRecordById = async (req, res) => {
    try {
        const { collection_id } = req.body;
        const recordType = await recordServices.listRecordById(collection_id);
        res.status(200).json({
            data: recordType,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const editColumnName = async (req, res) => {
    try {
        const { id, field_name, new_field_name } = req.body;
        const updatedContentType = await recordServices.editColumnName(
            id,
            field_name,
            new_field_name
        );
        res.status(200).json({
            data: updatedContentType,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    createRecordType,
    updateRecordType,
    deleteRecordColumn,
    addColumn,
    listRecordById,
    editColumnName,
    listRecords,
};
