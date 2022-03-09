
<p align="center"><img src="./titanium-firebase-logo@2x.png" height="200" alt="Firebase in Axway Titanium" /></p>

# Firebase in Appcelerator Titanium
This project will contain all Firebase-related modules for Analytics, Cloud-Messaging, Authentication, Firestore etc.

## Supporting this effort

The whole Firebase support in Titanium is developed and maintained by the community (`@hansemannn` and `@m1ga`). To keep
this project maintained and be able to use the latest Firebase SDK's, please see the "Sponsor" button of this repository,
thank you!

## Premium supporter

### Centreville Tech

Centreville Tech are strategic design+development advisors based in central Alabama.

<img src="https://hans-knoechel.de/.github/sponsor-centreville-tech.png" alt="Centreville Tech" width="200" />

## Requirements
- [x] iOS: Titanium SDK **9.2.0+**
- [x] Android: Titanium SDK **9.0.0+** and [Ti.PlayServices](https://github.com/appcelerator-modules/ti.playservices)

## Demo

⏩ [hansemannn/titanium-firebase-demo](https://github.com/hansemannn/titanium-firebase-demo)

## Installation

1. Download the core-module [titanium-firebase-core](https://github.com/hansemannn/titanium-firebase-core/releases) - <strong>only needed for iOS</strong>
2. Download the desired feature-module(s) from the below list
3. Unpack them to your project directory
4. Configure your Firebase project
	- <strong>iOS</strong>:
		- Download the `GoogleService-Info.plist` from your project and copy it to `[application_name]/Resources/iphone/` (classic) or `[application_name]/app/assets/iphone` (Alloy)
	- <strong>Android</strong>:
		- Download the `google-services.json` and copy it to `[application_name]/platform/android/` (classic) or `[application_name]/app/platform/android/` (Alloy)


5. Require the your modules and call the `configure` method to configure your Firebase application:
```js
var FirebaseCore = require('firebase.core');
FirebaseCore.configure();
```
6. You are good to go!


## Features
The list of supported features will be updated once a new feature is added to the list.
Feel free to take over a new feature by creating the module and making a pull-request to update this readme.

| Feature | Repository | iOS | Android | Releases |
| ------- | ---------- | --- | ------- | -------- |
| **Core** (required) | **[titanium-firebase-core](https://github.com/hansemannn/titanium-firebase-core)** | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-core/releases) |
| Analytics | [titanium-firebase-analytics](https://github.com/hansemannn/titanium-firebase-analytics) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-analytics/releases) |
| Performance | [titanium-firebase-performance](https://github.com/hansemannn/titanium-firebase-performance) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-performance/releases) |
| Authentication | [titanium-firebase-auth](https://github.com/hansemannn/titanium-firebase-auth) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-auth/releases) |
| Cloud Messaging | [titanium-firebase-cloud-messaging](https://github.com/hansemannn/titanium-firebase-cloud-messaging) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-cloud-messaging/releases) |
| In-App Messaging | [titanium-firebase-in-app-messaging](https://github.com/hansemannn/titanium-firebase-in-app-messaging) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-in-app-messaging/releases) |
| Crashlytics | [titanium-crashlytics](https://github.com/hansemannn/titanium-crashlytics) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-crashlytics/releases) |
| Remote Config | [titanium-firebase-config](https://github.com/hansemannn/titanium-firebase-config) | ✅ | ✅ | [Download](https://github.com/hansemannn/titanium-firebase-config/releases) |
| Storage | [titanium-firebase-storage](https://github.com/hansemannn/titanium-firebase-storage) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-storage/releases) |
| Database | [titanium-firebase-database](https://github.com/hansemannn/titanium-firebase-database) | ✅ | ❌ | [Download](https://github.com/hansemannn/titanium-firebase-database/releases) |

## ⚠️ Android Notes

The `titanium-firebase-core` module is not required for Android anymore. If you use it it will add `AdMob` as a dependency which is found by the Play-Store even if you don't use it. So if you don't need it you don't include `titanium-firebase-core` into your project. The config from `google-services.json` is automatically included by gradle.


### Disable Analytics

By default Firebase trys to use Analytics and you might see the erros in your log:
```bash
[ERROR] FA: AppMeasurementReceiver not registered/enabled
[ERROR] FA: AppMeasurementService not registered/enabled
[ERROR] FA: Uploading is not possible. App measurement disabled
```
To disable them you can add the follwing elements to the `<application>` part of your tiapp.xml:
```xml
<application>
	<meta-data android:name="firebase_analytics_collection_enabled" android:value="false"/>
	<meta-data android:name="google_analytics_adid_collection_enabled" android:value="false"/>
</application>
```

## Contributors
* Please see https://github.com/hansemannn/titanium-firebase/graphs/contributors
* Interested in contributing? Read the [contributors/committer's](https://wiki.appcelerator.org/display/community/Home) guide.

## License
Apache 2.0
