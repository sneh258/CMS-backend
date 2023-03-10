const db = require('../../database/models');

const listRecords = async () => {
    const recordData = await db.RecordType.findAll();
    return recordData;
};

const createRecordType = async (name) => {
    const collection = await db.Collection.create({ name });
    return db.RecordType.create({ name, collection_id: collection.id });
};

const updateRecordType = async (name, id) => {
    await db.RecordType.update({ name }, { where: { id } });
    const updatedContentType = await db.RecordType.findOne({ where: { id } });
    await db.Collection.update(
        { name },
        { where: { id: updatedContentType.collection_id } }
    );
    return { message: 'Record has been Updated' };
};

const deleteRecordColumn= async (id,field_name) => {
    const recordType = await db.RecordType.findOne({ where: { id } });
    const newFieldData = { ...recordType.field };
    delete newFieldData[field_name];
    await db.RecordType.update({ field: newFieldData }, { where: { id } });
    const allContent = await db.Content.findAll({
        where: { record_type_id: recordType.id },
    });
    await Promise.all(
        allContent.map((data) => {
            const newData = { ...data.value };
            delete newData[field_name];
            db.Content.update({ value: newData }, { where: { id: data.id } });
        })
    );
    return { message: 'Field has been deleted' };
};

const addColumn = async (id, field_name) => {
    const recordType = await db.RecordType.findOne({ where: { id } });
    const newFieldData = { ...recordType.fields };
    await db.RecordType.update({ fields: newFieldData }, { where: { id } });
    const record = await db.Content.findAll({
        where: { record_type_id: recordType.id },
    });
    await Promise.all(
        record.map((data) => {
            const newValue = { ...data.values };
            newValue[field_name] = null;
            db.Content.update({ values: newValue }, { where: { id: data.id } });
        })
    );
    return { message: 'Field has been added' };
};

const editColumnName = async (id, field_name, new_field_name) => {
    const recordType = await db.RecordType.findOne({ where: { id } });
    const newFieldData = { ...recordType.field };
    newFieldData[new_field_name] = newFieldData[field_name];
    delete newFieldData[field_name];
    await db.RecordType.update({ field: newFieldData }, { where: { id } });
    const content = await db.Content.findAll({
        where: { record_type_id: recordType.id },
    });
    await Promise.all(
        content.map((data) => {
            const newDataValue = { ...data.values };
            newDataValue[new_field_name] = newDataValue[field_name];
            delete newDataValue[field_name];
            db.Content.update({ value: newDataValue }, { where: { id: data.id } });
        })
    );
    return { message: 'column name has been edited' };
};
module.exports = { listRecords,createRecordType ,updateRecordType,deleteRecordColumn,addColumn,editColumnName};
