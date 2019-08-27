'use strict';

module.exports = function (Admin) {


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
        path: '/getNameLike',
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
};
