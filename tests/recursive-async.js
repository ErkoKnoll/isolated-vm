const ivm = require('isolated-vm');
(async function() {
	let isolate = new ivm.Isolate;
	let context = await isolate.createContext();
	let script  = await isolate.compileScript('function test() { test(); }; test();');
	await script.run(context);
}()).catch(function() {
	console.log('pass');
});
