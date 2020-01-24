/* jshint esversion: 6 */

const http = require("http");
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

http.createServer(function (request, response)
{
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');
