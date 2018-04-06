var FirebaseCore = require('firebase.core');
var FirebaseAnalytics = require('firebase.analytics');
var FirebasePerformance = require('firebase.performance');
var FirebaseAuth = require('firebase.auth');
var FirebaseCloudMessaging = require('firebase.cloudmessaging');

// Configure Firebase. Required for all (!) services
FirebaseCore.configure();

//
// ---- Analytics ----
//

// Get the App Instance ID
Ti.API.info('App Instance ID: ' + FirebaseAnalytics.appInstanceID);

// Log to the Firebase console
FirebaseAnalytics.log('My Event', { /* Optional arguments */ });

// Set user-property string
FirebaseAnalytics.setUserPropertyString({
	name: 'My Name',
	value: 'My Value'
});

// Set User-ID
FirebaseAnalytics.setUserID('MyUserID');

//
// ---- Performance ----
//

// Start the named trace
FirebasePerformance.startTrace('trace_name');

// Increment the counter value
FirebasePerformance.incrementCounter('trace_name', 'counter_name', 1); // Trace name, counter name, increment (optional)

// Stop the named trace
FirebasePerformance.stopTrace('trace_name');

// Manually disable data collection (enabled by default)
FirebasePerformance.dataCollectionEnabled = false;

// Returns all trace-names
Ti.API.log(FirebasePerformance.allTraces);

//
// ---- Authentication ----
//

FirebaseAuth.signInWithEmail({
	email: 'john@doe.com',
	password: 'T1t4n1umR0ck$***',
	success: function(e) {
		alert('Logged in!');
	},
	error: function(e) {
		Ti.API.error('Error logging in: ' + e.error);
	}
});

//
// ---- Cloud Messaging ---
//

// Register for push notifications
FirebaseCloudMessaging.registerForPushNotifications();

// Subscribe to topic
FirebaseCloudMessaging.subcribeToTopic('titanium');

// Unsubscribe from topic
FirebaseCloudMessaging.unsubcribeFromTopic('titanium');

//
// ---- Storage ---
//

// TODO: Write example

//
// ---- Crash Reporting ---
//

// TODO: Write example

//
// ---- Remote Config ---
//

// TODO: Write example

//
// ---- Database ---
//

// TODO: Write example
