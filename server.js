// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var path = require('path');

var port = 15000;
var url = "http://localhost:" + port;

var express = require('express');
var app = express();

app.use(function (req, res, next) {
  next();
});

var oidc = require('./oidc.js');
oidc(url, app);

app.use('/', express.static(path.join(__dirname, '')));

console.log("listening on " + url);
app.listen(port);
