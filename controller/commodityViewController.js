const commodityViewDao = require('../dao/commodityViewDao.js');

const commodityView = {
    mainAllCommodityView(req,resp){
        let params = [];
        params.push(req.body.href);
        commodityViewDao.mainAllCommodityView(params).
        then(function(data) {
            if(data.length>0){
                resp.send(data);
            }else{
                resp.send(data);
            }
        });
    },
    minorAllCommodityView(req,resp){
        let params = [];
        params.push(req.body.href);
        commodityViewDao.minorAllCommodityView(params).
        then(function(data) {
            if(data.length>0){
                resp.send(data);
            }else{
                resp.send(data);
            }
        });
    }

};

module.exports = commodityView;