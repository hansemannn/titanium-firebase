# Firebase in Axway Titanium
This project will contain all Firebase-related modules for Analytics, Cloud-Messaging, Authentication, Firestore etc.

## Requirements
- [x] Titanium SDK 6.2.0+

## Features
The list of supported features will be updated once a new feature is added to the list. 
Feel free to take over a new feature by creating the module and making a pull-request to update this readme.

| Feature | Repository | iOS | Android |
| --- | --- | --- | --- |
| Core | [titanium-firebase-core](https://github.com/hansemannn/titanium-firebase-core) | ✅ | ❌ |
| Analytics | [titanium-firebase-analytics](https://github.com/hansemannn/titanium-firebase-analytics) | ✅ | ❌ |
| Storage | [titanium-firebase-storage](https://github.com/hansemannn/titanium-firebase-storage) | ✅ | ❌ |
| Cloud Messaging | [titanium-firebase-cloud-messaging](https://github.com/hansemannn/titanium-firebase-cloud-messaging) | 🔄 | ❌ |
| Crash Reporting | TBA | ❌ | ❌ |
| Authentication | TBA | ❌ | ❌ |
| AdWords | TBA | ❌ | ❌ |

## Getting started
You need the `titanium-firebase-core` to configure any Firebase-related API's using the `configure()` method. Usually, you require multiple
Firebase features together, for example:
```js
const FirebaseCore = require('titanium-firebase-core');
const FirebaseAnalytics = require('titanium-firebase-analytics'); // One of the Titanium Firebase modules

// Call this before any other Firebase API's
FirebaseCore.configure();

// Use any Firebase feature, e.g. Analytics logging
FirebaseAnalytics.log('Titanium rocks!');
```

## Contributors
* Please see https://github.com/hansemannn/titanium-firebase/graphs/contributors
* Interested in contributing? Read the [contributors/committer's](https://wiki.appcelerator.org/display/community/Home) guide.

## License 
Apache 2.0
