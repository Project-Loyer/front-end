import React, { Component } from "react";

import { Platform } from 'react-native';

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

import { NotificationsHandler } from '../global/NotificationsHandler.js';

export class PushNotificator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    }
  }

  componentDidMount() {
    FCM.requestPermissions()
    .then(() => console.log('granted'))
    .catch(() => console.log('notification permission rejected'));
    

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.setState({token: token});
    });

    if(Platform.OS === 'ios'){
      FCM.getAPNSToken().then(token => {
        console.log("APNS TOKEN (getFCMToken)", token);
      });
    }

    FCM.getInitialNotification().then(notif => {
      console.log("INITIAL NOTIFICATION", notif)
    });

    this.notificationListener = FCM.on(FCMEvent.Notification, notif => {
      console.log("Notification", notif);
      if(notif.local_notification){
        return;
      }
      if(notif.opened_from_tray){
        return;
      }

      if(Platform.OS ==='ios'){
              //optional
              //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
              //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
              //notif._notificationType is available for iOS platfrom
              switch(notif._notificationType){
                case NotificationType.Remote:
                  notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                  break;
                case NotificationType.NotificationResponse:
                  notif.finish();
                  break;
                case NotificationType.WillPresent:
                  notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                  break;
              }
      }

      this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
        console.log("TOKEN (refreshUnsubscribe)", token);
        this.props.onChangeToken(token);
      });

      // direct channel related methods are ios only
      // directly channel is truned off in iOS by default, this method enables it
      FCM.enableDirectChannel();
      this.channelConnectionListener = FCM.on(FCMEvent.DirectChannelConnectionChanged, (data) => {
        console.log('direct channel connected' + data);
      });
      setTimeout(function() {
        FCM.isDirectChannelEstablished().then(d => console.log(d));
      }, 1000);
      NotificationsHandler.receiveNotification(notif);
      this.showLocalNotification(notif);
    })
  }

  showLocalNotification(notif) {
    
    FCM.presentLocalNotification({
      title: notif.fcm.title,
      body: notif.fcm.body,
      priority: "high",
      click_action: notif.fcm.click_action,
      show_in_foreground: true,
      local: true
    });
  }

  componentWillUnmount() {
    this.notificationListener.remove();
  }


  render() {
    return null;
  }
}