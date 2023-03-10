const db = require('./../../database/models');
const collectionService = require('./../../src/services/collection');

describe('Testing Collection Services', () => {
    it('should return a list of collections', async () => {
        const mockData = {
            name: 'abc_company',
        };
        jest.spyOn(db.Collection, 'findAll').mockResolvedValue(mockData);
        const data = await collectionService.listCollections();
        expect(data).toEqual(mockData);
    });
});
