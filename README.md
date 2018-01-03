
<p align="center"><img src="./titanium-firebase-logo@2x.png" height="200" alt="Firebase in Axway Titanium" /></p>


# Firebase in Axway Titanium
This project will contain all Firebase-related modules for Analytics, Cloud-Messaging, Authentication, Firestore etc.

## Requirements
- [x] iOS: Titanium SDK **6.2.0+**
- [x] Android: Titanium SDK **7.0.0+** and [Ti.PlayServices](https://github.com/appcelerator-modules/ti.playservices)

## ⚠️ Android Notes
If this module is used together with other modules that use the Google Play Services (e.g. Ti.Map or Ti.Admob)
you have to use at least Titanium SDK 7.0.0 for Android which resolves duplicate dependencies for you. 

Latest module versions that support 7.0.0 and have Ti.PlayServices included:
  - [Ti.Map 4.0.0](https://github.com/appcelerator-modules/ti.map/releases/tag/android-4.0.0)
  - [Ti.Admob 4.0.0](https://github.com/appcelerator-modules/ti.admob/releases/tag/android-4.0.0)
  
You are not using 7.0.0 because of modules that are not updated so far? Update open source modules quickly by using
the [Android 64-Bit Migration Guide](http://docs.appcelerator.com/platform/latest/#!/guide/Android_Module_Upgrade_Guide).

## Features
The list of supported features will be updated once a new feature is added to the list. 
Feel free to take over a new feature by creating the module and making a pull-request to update this readme.

| Feature | Repository | iOS | Android | Releases |
| ------- | ---------- | --- | ------- | -------- |
| Core | [titanium-firebase-core](https://github.com/hansemannn/titanium-firebase-core) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-core/releases) |
| Analytics | [titanium-firebase-analytics](https://github.com/hansemannn/titanium-firebase-analytics) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-analytics/releases) |
| Performance | [titanium-firebase-performance](https://github.com/hansemannn/titanium-firebase-performance) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-performance/releases) |
| Storage | [titanium-firebase-storage](https://github.com/hansemannn/titanium-firebase-storage) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-storage/releases) |
| Cloud Messaging | [titanium-firebase-cloud-messaging](https://github.com/hansemannn/titanium-firebase-cloud-messaging) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-cloud-messaging/releases) |
| Crash Reporting | [titanium-firebase-crash-reporting](https://github.com/hansemannn/titanium-firebase-crash-reporting) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-crash-reporting/releases) |
| Authentication | [titanium-firebase-auth](https://github.com/hansemannn/titanium-firebase-auth) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-auth/releases) |
| Remote Config | [titanium-firebase-config](https://github.com/hansemannn/titanium-firebase-config) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-config/releases) |

## Notes
In order to use any of the modules, the `titanium-firebase-core` module needs to be included in the project in order
to call the `configure` method. 

## Contributors
* Please see https://github.com/hansemannn/titanium-firebase/graphs/contributors
* Interested in contributing? Read the [contributors/committer's](https://wiki.appcelerator.org/display/community/Home) guide.

## License 
Apache 2.0
