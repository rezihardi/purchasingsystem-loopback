'use strict';

module.exports = function (Admin) {

  //get name admin
  //remote method
  Admin.remoteMethod(
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
        path: '/getNameAdmin',
        verb: 'get'
      }
    }
  );


  //fungsi getNameLike - > get name with first name param
  Admin.getNameLike = function (name, callback) {
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
      Admin.find(filter, function (err, result) {
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







  //get admin ID
  //remote method ID
  Admin.remoteMethod(
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
        path: '/getAdminId',
        verb: 'get'
      }
    }
  );


  Admin.getById = function (id, callback) {
    new Promise(function (resolve, reject) {

      Admin.findById(id, function (err, result) {
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
