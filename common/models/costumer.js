'use strict';

module.exports = function (Costumer) {

  //remote method
  Costumer.remoteMethod(
    'getNameLike', {
      description: 'get name like',
      accepts: [{
        arg: 'firstname',
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
  Costumer.getNameLike = function (firstname, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          firstname: {
            like: firstname
          }
        }
      }

      // querying data
      Costumer.find(filter, function (err, result) {
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



  //remote method ID
  Costumer.remoteMethod(
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
        path: '/getCostumerId',
        verb: 'get'
      }
    }
  );


  Costumer.getById = function (id, callback) {
    new Promise(function (resolve, reject) {

      Costumer.findById(id, function (err, result) {
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
