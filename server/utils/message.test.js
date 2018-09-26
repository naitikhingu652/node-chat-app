const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should create correct message object', () => {
        let from = 'Naitik'
        let text = 'Test Message'
        let message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should create correct location message object', () => {
        let from = 'Naitik'
        let latitude = 18.59932;
        let longitude = 73.70897839999999;
        let url = 'https://www.google.com/maps?q=18.59932,73.70897839999999';
        let message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});