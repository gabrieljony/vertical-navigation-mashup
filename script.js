/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Helpdesk Management.qvf', config);

	//get objects -- inserted here --
	app.getObject('QV06','hRZaKk');
	app.getObject('QV04','jTuCwkB');
	app.getObject('QV03','jTuCwkB');
	app.getObject('QV05','jTuCwkB');
	app.getObject('QV02','JsVPe');
	app.getObject('QV01','JARjh');
	//create cubes and lists -- inserted here --
	
	$('.nav-pills a').click(function(){
		console.log('clicou:');
		qlik.resize();
	});


} );
