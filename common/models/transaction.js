'use strict';

module.exports = function (Transaction) {


  //get name costumer
  //remote method
  Transaction.remoteMethod(
    'getNameLike', {
      description: 'get name like',
      accepts: [{
        arg: 'costumer',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getNameCostumer',
        verb: 'get'
      }
    }
  );


  //fungsi getNameLike - > get name with first name param
  Transaction.getNameLike = function (costumer, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          costumer: {
            like: costumer
          }
        }
      }

      // querying data
      Transaction.find(filter, function (err, result) {
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





  //get name item
  //remote method
  Transaction.remoteMethod(
    'getNameLike', {
      description: 'get name like',
      accepts: [{
        arg: 'item',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getNameItem',
        verb: 'get'
      }
    }
  );


  //fungsi getNameLike - > get name with first name param
  Transaction.getNameLike = function (item, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          item: {
            like: item
          }
        }
      }

      // querying data
      Transaction.find(filter, function (err, result) {
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




  //get transaction ID
  //remote method ID
  Transaction.remoteMethod(
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
        path: '/gettransactionId',
        verb: 'get'
      }
    }
  );


  Transaction.getById = function (id, callback) {
    new Promise(function (resolve, reject) {

      Transaction.findById(id, function (err, result) {
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
