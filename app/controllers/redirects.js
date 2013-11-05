var Redirects = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Redirect.all(function(err, redirects) {
      self.respondWith(redirects, {type:'Redirect'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , redirect = geddy.model.Redirect.create(params);

    if (!redirect.isValid()) {
      this.respondWith(redirect);
    }
    else {
      redirect.save(function(err, data) {
        if (err) {
          throw err;
        }
        if(err)
          return self.respondWith(redirect, {status: err});
        self.redirect({controller: 'redirects'});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Redirect.first(params.id, function(err, redirect) {
      if (err) {
        throw err;
      }
      if (!redirect) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(redirect);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Redirect.first(params.id, function(err, redirect) {
      if (err) {
        throw err;
      }
      if (!redirect) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(redirect);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Redirect.first(params.id, function(err, redirect) {
      if (err) {
        throw err;
      }
      redirect.updateProperties(params);

      if (!redirect.isValid()) {
        self.respondWith(redirect);
      }
      else {
        redirect.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(redirect, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Redirect.first(params.id, function(err, redirect) {
      if (err) {
        throw err;
      }
      if (!redirect) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Redirect.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(redirect);
        });
      }
    });
  };

};

exports.Redirects = Redirects;
