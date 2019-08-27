'use strict';

module.exports = function (Commodity) {
  //remote method
  Commodity.remoteMethod(
    'getNameLike', {
      description: 'get name like',
      accepts: [{
        arg: 'name',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getNameLike',
        verb: 'get'
      }
    }
  );


  //fungsi getNameLike - > get name with first name param
  Commodity.getNameLike = function (name, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          name: {
            like: name
          }
        }
      }

      // querying data
      Commodity.find(filter, function (err, result) {
        if (err) reject(err)
        if (result === null) {
          err = new Error("Nama Tidak Dapat Ditemukan")
          err.statusCode = 404
          reject(err)
        }
        resolve(result)
      })
    }).then(function (res) {
      //callback result
      if (!res) callback(err)
      return callback(null, res)
    }).catch(function (err) {
      callback(err);
    });
  }









  //remote method
  Commodity.remoteMethod(
    'getNameLike', {
      description: 'get name like',
      accepts: [{
        arg: 'category',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getNameCategory',
        verb: 'get'
      }
    }
  );


  //fungsi getNameLike - > get name with first name param
  Commodity.getNameLike = function (category, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          category: {
            like: category
          }
        }
      }

      // querying data
      Commodity.find(filter, function (err, result) {
        if (err) reject(err)
        if (result === null) {
          err = new Error("Nama Tidak Dapat Ditemukan")
          err.statusCode = 404
          reject(err)
        }
        resolve(result)
      })
    }).then(function (res) {
      //callback result
      if (!res) callback(err)
      return callback(null, res)
    }).catch(function (err) {
      callback(err);
    });
  };





  //remote method ID
  Commodity.remoteMethod(
    'getById', {
      description: 'get by id',
      accepts: [{
        arg: 'id',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getCommodityId',
        verb: 'get'
      }
    }
  );


  Commodity.getById = function (id, callback) {
    new Promise(function (resolve, reject) {

      Commodity.findById(id, function (err, result) {
        if (err) reject(err)
        if (result === null) {
          err = new Error("Nama Tidak Dapat Ditemukan")
          err.statusCode = 404
          reject(err)
        }
        resolve(result)
      })
    }).then(function (res) {
      //callback result
      if (!res) callback(err)
      return callback(null, res)
    }).catch(function (err) {
      callback(err);
    });
  }
};
