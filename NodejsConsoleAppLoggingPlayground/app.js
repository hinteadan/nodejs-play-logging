var xpressApp = require('express')();
var scribe = require('scribe-js')();
var console = process.console;
var moment = require('moment');
const logDateFormatString = 'YYYY-MM-DD HH:mm:ss';

function now() {
    return moment().format(logDateFormatString);
}

xpressApp
    .use(scribe.express.logger())
    .use('/', scribe.webPanel())
    .listen(9969, _ => console.log(`Web App Running @ ${now()}`));

console.log('Hello world');

console.log(`Constructed @ ${now()}`)
process.stdin.on('data', x => console.log(`Exited @ ${now()}`) && setTimeout(process.exit, 500));
