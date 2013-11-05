var CreateRedirects = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('from', 'string');
          t.column('to', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('redirect', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('redirect', callback);
  };
};

exports.CreateRedirects = CreateRedirects;
