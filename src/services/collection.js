const db = require('./../../database/models');

const addRecord = async (collection_id, record) => {
    const collection = await db.Collection.findOne({ where: { id: collection_id }, include: db.RecordType });
    if (!collection)
    {
        throw new Error('Collection has not been found');
    }
    const newRecord = await db.Content.create({
        collection_id,
        record_type_id: collection.RecordType.id,
        values: record,
    });
    return newRecord;
};

const listCollections = async () => {
    return await db.Collection.findAll();
};

const editRecord = async (collection_id, record) => {
    const collection = await db.Collection.findOne({
        where: { id: collection_id },
      
    });
    if (!collection) {
        throw new Error('Collection has not been found');
    }
    await db.Content.update({ values: record.values }, { where: { id: record.id }});
    return { message: 'Updated!!!' };
};

const deleteRecord = async (collection_id, record_id) => {
    const collection = await db.Collection.findOne({
        where: { id: collection_id },
    });
    if (!collection) {
        throw new Error('Collection has not been found');
    }
    await db.Content.destroy({where:{id:record_id}});
    return { message: 'Updated!!!' };
};

const getDataOfCollection = async (collection_id) => {
    const collection = await db.Collection.findOne({ where: { id: collection_id }, include: db.Content });
    if (!collection) {
        throw new Error('Collection has not been found');
    }
    return collection.Contents;
};

module.exports = { listCollections,addRecord ,editRecord,deleteRecord,getDataOfCollection};