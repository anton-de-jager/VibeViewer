"use strict";(self.webpackChunkvibeViewer=self.webpackChunkvibeViewer||[]).push([[434],{7434:(f,a,s)=>{s.r(a),s.d(a,{LocalNotificationsWeb:()=>c});var o=s(5861),d=s(7423);class c extends d.Uw{constructor(){super(...arguments),this.pending=[],this.deliveredNotifications=[],this.hasNotificationSupport=()=>{if(!("Notification"in window)||!Notification.requestPermission)return!1;if("granted"!==Notification.permission)try{new Notification("")}catch(i){if("TypeError"==i.name)return!1}return!0}}getDeliveredNotifications(){var i=this;return(0,o.Z)(function*(){const t=[];for(const e of i.deliveredNotifications){const n={title:e.title,id:parseInt(e.tag),body:e.body};t.push(n)}return{notifications:t}})()}removeDeliveredNotifications(i){var t=this;return(0,o.Z)(function*(){for(const e of i.notifications){const n=t.deliveredNotifications.find(r=>r.tag===String(e.id));n?.close(),t.deliveredNotifications=t.deliveredNotifications.filter(()=>!n)}})()}removeAllDeliveredNotifications(){var i=this;return(0,o.Z)(function*(){for(const t of i.deliveredNotifications)t.close();i.deliveredNotifications=[]})()}createChannel(){var i=this;return(0,o.Z)(function*(){throw i.unimplemented("Not implemented on web.")})()}deleteChannel(){var i=this;return(0,o.Z)(function*(){throw i.unimplemented("Not implemented on web.")})()}listChannels(){var i=this;return(0,o.Z)(function*(){throw i.unimplemented("Not implemented on web.")})()}schedule(i){var t=this;return(0,o.Z)(function*(){if(!t.hasNotificationSupport())throw t.unavailable("Notifications not supported in this browser.");for(const e of i.notifications)t.sendNotification(e);return{notifications:i.notifications.map(e=>({id:e.id}))}})()}getPending(){var i=this;return(0,o.Z)(function*(){return{notifications:i.pending}})()}registerActionTypes(){var i=this;return(0,o.Z)(function*(){throw i.unimplemented("Not implemented on web.")})()}cancel(i){var t=this;return(0,o.Z)(function*(){t.pending=t.pending.filter(e=>!i.notifications.find(n=>n.id===e.id))})()}areEnabled(){var i=this;return(0,o.Z)(function*(){const{display:t}=yield i.checkPermissions();return{value:"granted"===t}})()}requestPermissions(){var i=this;return(0,o.Z)(function*(){if(!i.hasNotificationSupport())throw i.unavailable("Notifications not supported in this browser.");return{display:i.transformNotificationPermission(yield Notification.requestPermission())}})()}checkPermissions(){var i=this;return(0,o.Z)(function*(){if(!i.hasNotificationSupport())throw i.unavailable("Notifications not supported in this browser.");return{display:i.transformNotificationPermission(Notification.permission)}})()}transformNotificationPermission(i){switch(i){case"granted":return"granted";case"denied":return"denied";default:return"prompt"}}sendPending(){var i;const t=[],e=(new Date).getTime();for(const n of this.pending)(null===(i=n.schedule)||void 0===i?void 0:i.at)&&n.schedule.at.getTime()<=e&&(this.buildNotification(n),t.push(n));this.pending=this.pending.filter(n=>!t.find(r=>r===n))}sendNotification(i){var t;if(null!==(t=i.schedule)&&void 0!==t&&t.at){const e=i.schedule.at.getTime()-(new Date).getTime();return this.pending.push(i),void setTimeout(()=>{this.sendPending()},e)}this.buildNotification(i)}buildNotification(i){const t=new Notification(i.title,{body:i.body,tag:String(i.id)});return t.addEventListener("click",this.onClick.bind(this,i),!1),t.addEventListener("show",this.onShow.bind(this,i),!1),t.addEventListener("close",()=>{this.deliveredNotifications=this.deliveredNotifications.filter(()=>!this)},!1),this.deliveredNotifications.push(t),t}onClick(i){this.notifyListeners("localNotificationActionPerformed",{actionId:"tap",notification:i})}onShow(i){this.notifyListeners("localNotificationReceived",i)}}}}]);