# Firebase in Axway Titanium
This project will contain all Firebase-related modules for Analytics, Cloud-Messaging, Authentication, Firestore etc.

## Requirements
- [x] Titanium SDK 6.2.0+

## Features
The list of supported features will be updated once a new feature is added to the list. 
Feel free to take over a new feature by creating the module and making a pull-request to update this readme.

| Feature | Repository | iOS | Android |
| --- | --- | --- | --- |
| Analytics | [titanium-firebase-analytics](https://github.com/hansemannn/titanium-firebase-analytics) | ✅ | ❌ |
| Storage | [titanium-firebase-storage](https://github.com/hansemannn/titanium-firebase-storage) | ✅ | ❌ |
| Cloud Messaging | [titanium-firebase-cloud-messaging](https://github.com/hansemannn/titanium-firebase-cloud-messaging) | ✅ | ❌ |
| Crash Reporting | [titanium-firebase-crash-reporting](https://github.com/hansemannn/titanium-firebase-crash-reporting) | ✅ | ❌ |
| Authentication | TBA | 🔄 | ❌ |
| AdWords | TBA | ❌ | ❌ |

## Known issues
Right now, you need to at least have the `Analytics` module included in order to call `configure()` on it. I wanted to
keep the different Firebase features separated into own modules to not blow up the app-size, but as `Analytics` depends
on the `FirebaseCore` framework, which makes it hard to distribute the core as an own module. If you have an idea on how to
solve that, let me know!

## Contributors
* Please see https://github.com/hansemannn/titanium-firebase/graphs/contributors
* Interested in contributing? Read the [contributors/committer's](https://wiki.appcelerator.org/display/community/Home) guide.

## License 
Apache 2.0
