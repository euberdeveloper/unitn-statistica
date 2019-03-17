module.exports = function(obj) {

    function replacer(key, value) {
        return (typeof value === 'function') ? value.toString() : value;
    }

    return JSON.stringify(obj, replacer);

}