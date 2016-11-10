module.exports.myFirst = function() {
    var second = require('./second');
    return second.mySecond();
}

