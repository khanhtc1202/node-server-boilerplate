module.exports = function(config, utils) {
    var obj = {};
    
    obj.reply = function(req, res, next) {
        res.status(200).send({ data: "OK" });
    };
    
    return obj;
};
