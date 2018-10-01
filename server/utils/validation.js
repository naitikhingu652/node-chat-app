let isRealString = (str) => {
    return typeof str === 'string' && !/^\d+$/.test(str) && str.trim().length > 0;
};

module.exports = {
    isRealString
};