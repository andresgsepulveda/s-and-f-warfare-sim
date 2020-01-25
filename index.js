/* jshint esversion: 6 */

const server = require('server');
const {get, post} = server.router;
server([
  get('/', ctx => 'Hello World!')
]);

const unit_utils = require("./unit_utils");
const sim_utils = require("./sim_utils");


unit_utils.load_default_traits();
unit_utils.load_default_orders();
unit_utils.load_default_attitudes();
unit_utils.load_default_sizes();
unit_utils.load_default_ancestries();
unit_utils.load_default_equipment()
unit_utils.load_default_types();
unit_utils.load_default_experience();
