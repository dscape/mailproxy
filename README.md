# mailproxy

`mailproxy` is a node.js program which serves as a poor person alternative to google apps.
poor money wise, we all have beautiful souls

the app works by forwarding your domain to your personal email. you can take it from there.

## installing

you can install it with [npm]:

```
npm install -g mailproxy
```

you will need to point your [MX] records on your domain to the server hosting
this application

### configuring

you can configure the program using a gui:

```
mailproxy &
open http://localhost:1707
```

you will be prompted for a gmail username, gmail password and a routing table

*important*: please create a new gmail account for this. no reason to save your password here

you should now see a "All Done!" confirmation. Your server is up and running

### running from the command line

if you don't want to use a `gui` (e.g. automated server installs) please use the following
syntax:

```
mailproxy -u gmailUser -p gmailPass -r routingTableFile.json
```

where `routingTableFile.json` looks something like this:

``` js
{
  "nuno@domain.io": "dscape@gmail.com",
  "pedro@domain.io": "pgte@yahoo.com",
  "david@another.io": "david@zoho.com",
  "*@another.io": "dscape@gmail.com"
}
```

## developers

### requiring this module

you can also call this programmatically and do whatever you like:

``` javascript
var mailproxy = require('mailproxy');

mailproxy.createServer(function (request, proxy) {
  proxy.routeMail(request, {
    gmailUsername: "foo",
    gmailPassword: "bar"
  }, {
    "nuno@domain.io": "dscape@gmail.com",
    "pedro@domain.io": "pgte@yahoo.com",
    "david@another.io": "david@zoho.com",
    "*@another.io": "dscape@gmail.com"
  });
}).listen(25);

console.log("mail proxy on 25!");
```

you can use this without the `routeMail` method, but then you are probably better off just using whatever
module is actually doing the heavy work

## limitations

right now you can't reply as the person who owns that domain. it's possible, but more work than i was
willing to do at this point. if you want to do it but don't know how, reach out and i'll discuss the
implementation i thought of. if you don't need help and want to do it, just send a pull request sir!

[npm]: http://npmjs.org