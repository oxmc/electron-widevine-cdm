exports.load = (app) => {
	app.commandLine.appendSwitch('widevine-cdm-path', __dirname + '/plugin/');
	app.commandLine.appendSwitch('widevine-cdm-version', '4.10.2198.0');
}
