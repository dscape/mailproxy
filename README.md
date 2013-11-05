# mailproxy

`mailproxy` is a node.js program which serves as a poor person alternative to google apps.
poor money wise, we all have beautiful souls

the app works by forwarding your domain to your personal email. you can take it from there.

## installing

you can install it with [npm]:

```
npm install -g mailproxy
```

set your dns so that mail gets delivered to your email

### configuring

you can configure the program using a gui:

```
mailproxy &
open http://localhost:1707
```

you will be prompted for a routing table

add/remove as you please

### running from the command line

if you don't want to use a `gui` (e.g. automated server installs) please use the following
syntax:

```
mailproxy -r routingTableFile.json
```

where `routingTableFile.json` looks something like this:

``` js
{
  "nuno@domain.io": "dscape@gmail.com",
  "pedro@domain.io": "pgte@yahoo.com",
  "david@another.io": "david@zoho.com"
}
```

[npm]: http://npmjs.org
[mx]: https://support.google.com/a/answer/140034