const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should create correct message object', () => {
        let from = 'Naitik'
        let text = 'Test Message'
        let message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});