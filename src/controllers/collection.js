const collectionServices = require('./../services/collection');

const addRecord = async (req, res) => {
    try {
        const { collection_id, record } = req.body;
        const data = await collectionServices.addRecord(collection_id, record);
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const listCollections = async (req, res) => {
    try {
        const data = await collectionServices.listCollections();
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const editRecord = async (req, res) => {
    try {
        const { collection_id, record } = req.body;
        const data = await collectionServices.editRecord(collection_id, record);
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const { collection_id, record } = req.body;
        const data = await collectionServices.deleteRecord(collection_id, record);
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getDataOfCollection = async (req, res) => {
    try {
        const { collection_id } = req.body;
        const data = await collectionServices.getDataOfCollection(collection_id);
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
module.exports = {
    addRecord,
    listCollections,
    editRecord,
    deleteRecord,
    getDataOfCollection,
};
