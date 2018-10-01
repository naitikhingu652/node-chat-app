const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Naitik',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Minal',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Khushboo',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Naitik',
            room: 'The Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user available id', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user for unavailable id', () => {
        let userId = '4';
        let user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user for available id', () => {
        let userId = '1';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user for unavailable id', () => {
        let userId = '4';
        let user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for Node Course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Naitik', 'Khushboo']);
    });

    it('should return names for React Course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Minal']);
    });
});