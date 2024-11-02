const { Forum } = require('../models');

const createForum = async (req) => {
    const forum = await Forum.create(req);
    return forum;
}

const getForum = async (name) => {
    return await Forum.findOne({
        name
    });
}

const deleteForum = async (name) => {
    return await Forum.deleteOne({
        name
    })
}
module.exports = {
    createForum,
    getForum,
    deleteForum
};