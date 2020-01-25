/* jshint esversion: 6 */

const ejsLint = require("ejs-lint");
const express = require('express');
const http = require('http');
const path = require('path');

const unit_utils = require("./unit_utils");
const sim_utils = require("./sim_utils");

const app = express();
const port = process.env.PORT || "8000";

unit_utils.load_default_traits();
unit_utils.load_default_orders();
unit_utils.load_default_attitudes();
unit_utils.load_default_sizes();
unit_utils.load_default_ancestries();
unit_utils.load_default_equipment()
unit_utils.load_default_types();
unit_utils.load_default_experience();

app.set('view engine', 'ejs');

app.get("/", (request, response) =>
{
  response.render('pages/index');
});

app.get('/about', (request, response) =>
{
  response.render('pages/about');
});

app.listen(port, () =>
{
  console.log("Listening to request on http://localhost:8000")
});
