const models = require('../models');

// models.sequelize.sync({force: true});

module.exports = () => {
    // test환경에서는 force를 true로 설정해서 db값 저장X
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    };
    return models.sequelize.sync(options);
}