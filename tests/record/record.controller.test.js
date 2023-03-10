const recordController = require('../../src/controllers/record');
const recordService = require('../../src/services/record');

describe('Testing Record Controller', () => {
    const mockData = {
        id: 1,
        name: 'abc',
    };
    it('should return record list', async () => {
        jest.spyOn(recordService, 'listRecords').mockResolvedValue(mockData);
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.listRecords(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith(mockData);
    });
    it('should send error response', async () => {
        jest
            .spyOn(recordService, 'listRecords')
            .mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.listRecords(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
    it('should create record', async () => {
        jest.spyOn(recordService, 'createRecordType').mockResolvedValue(mockData);
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.createRecordType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(201);
        expect(mockRes.json).toBeCalledWith({ data: mockData });
    });
    it('should send error response', async () => {
        jest
            .spyOn(recordService, 'createRecordType')
            .mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.createRecordType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
    it('should update record', async () => {
        jest.spyOn(recordService, 'updateRecordType').mockResolvedValue(mockData);
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.updateRecordType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({ data: mockData });
    });
    it('should send error response', async () => {
        jest
            .spyOn(recordService, 'updateRecordType')
            .mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.updateRecordType(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
    it('should delete column from record type', async () => {
        jest
            .spyOn(recordService, 'deleteRecordColumn')
            .mockResolvedValue({ message: 'Field has been deleted' });
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.deleteRecordColumn(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({
            data: { message: 'Field has been deleted' },
        });
    });
    it('should send error response', async () => {
        jest
            .spyOn(recordService, 'deleteRecordColumn')
            .mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.deleteRecordColumn(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
    it('should add a new column to record type', async () => {
        jest
            .spyOn(recordService, 'addColumn')
            .mockResolvedValue({ message: 'column name has been edited' });
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.addColumn(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({
            data: { message: 'column name has been edited' },
        });
    });
    it('should send error response', async () => {
        jest
            .spyOn(recordService, 'addColumn')
            .mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.addColumn(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
    it('should edit column name of record type', async () => {
        jest
            .spyOn(recordService, 'editColumnName')
            .mockResolvedValue({ message: 'column name has been edited' });
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.editColumnName(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
        expect(mockRes.json).toBeCalledWith({
            data: { message: 'column name has been edited' },
        });
    });
    it('should send error response', async () => {
        jest
            .spyOn(recordService, 'editColumnName')
            .mockRejectedValue(new Error('Internal Server Error'));
        const mockReq = {
            body: jest.fn(),
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        await recordController.editColumnName(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.json).toBeCalledWith({ error: 'Internal Server Error' });
    });
});
