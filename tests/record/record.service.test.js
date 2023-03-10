const db = require('../../database/models');
const recordService = require('../../src/services/record');

describe('Testing Record Controller', () => {
    it('should return a list of the records', async() => {
        jest.spyOn(db.RecordType, 'findAll').mockResolvedValue({
            id: 1,
            name: 'abc_company',
        });
        const result = await recordService.listRecords();
        expect(result).toEqual({
            id: 1,
            name: 'abc_company',
        });
    });

    it('should create a new record', async() => {
        jest.spyOn(db.Collection, 'create').mockResolvedValue({
            id: 1,
            name: 'abc_company',
        });
        jest.spyOn(db.RecordType, 'create').mockResolvedValue({
            id: 1,
            collection_id: 1,
            name: 'abc_company',
        });
        const result = await recordService.createRecordType('abc_company');
        expect(result).toEqual({
            id: 1,
            collection_id: 1,
            name: 'abc_company',
        });
    });
    it('should update a RecordType', async () => {
        jest.spyOn(db.RecordType, 'findOne').mockResolvedValue({
            id: 1,
            collection_id: 1,
            name: 'abc_company',
        });
        jest.spyOn(db.RecordType, 'update').mockResolvedValue({
            id: 1,
            collection_id: 1,
            name: 'abc_company',
        });
        jest.spyOn(db.Collection, 'update').mockResolvedValue({
            id: 1,
            name: 'abc_company',
        });
        const result = await recordService.updateRecordType(1, 'abc_company');
        expect(result).toEqual({ message: 'Record has been Updated' });
    });
    it('should delete a column of Record Type', async () => {
        jest.spyOn(db.RecordType, 'findOne').mockResolvedValue({
            id: 1,
            collection_id: 1,
            name: 'abc_company',
            field: {
                value1: 'value1',
            },
        });
        jest.spyOn(db.RecordType, 'update').mockResolvedValue();
        jest.spyOn(db.Content, 'findAll').mockResolvedValue(['1', '2']);
        jest.spyOn(Promise, 'all').mockResolvedValue();
        const result = await recordService.deleteRecordColumn(1, 'abc_company');
        expect(result).toEqual({ message: 'Field has been deleted' });
    });
    it('should edit column Name of Record Type', async () => {
        jest.spyOn(db.RecordType, 'findOne').mockResolvedValue({
            id: 1,
            collection_id: 1,
            name: 'abc_company',
            field: {
                value1: 'value1',
            },
        });
        jest.spyOn(db.RecordType, 'update').mockResolvedValue();
        jest.spyOn(db.Content, 'findAll').mockResolvedValue(['1', '2']);
        jest.spyOn(Promise, 'all').mockResolvedValue();
        const result = await recordService.editColumnName(
            1,
            'abc_company',
            'value1'
        );
        expect(result).toEqual({ message: 'column name has been edited' });
    });

});