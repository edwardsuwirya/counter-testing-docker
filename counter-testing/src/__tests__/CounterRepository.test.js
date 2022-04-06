import client from '../shared/ApiClient';
import CounterRepository from "../features/counter/CounterRepository";

describe('Counter Repository', () => {
    it('Should return increment response success', async () => {
        client.get = jest.fn()
        client.get.mockResolvedValue({data: {result: 1}});
        client.create = jest.fn()
        const result = await CounterRepository().callIncrementService(1)
        expect(client.get).toHaveBeenCalledWith(`/increment?num=1`);
        expect(result).toBe(1);
    });
    it('Should return decrement response success', async () => {
        client.get = jest.fn()
        client.get.mockResolvedValue({data: {result: 2}});
        const result = await CounterRepository().callDecrementService(1)
        expect(client.get).toHaveBeenCalledWith(`/decrement?num=1`);
        expect(result).toBe(2);
    });
})
