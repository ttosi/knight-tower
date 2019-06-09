'use strict';
const BaseClass = require('./baseClass');

module.exports = class User extends BaseClass {
    constructor(user) {
        super();
        Object.assign(this, {
            username: 'ttosi',
            email: 'ttosi519@gmail.com'
        }, user);
    };
};