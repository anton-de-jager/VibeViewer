"use strict";(self.webpackChunkvibeViewer=self.webpackChunkvibeViewer||[]).push([[356],{5356:(y,d,a)=>{a.r(d),a.d(d,{DeviceWeb:()=>w});var s=a(5861),v=a(7423);class w extends v.Uw{getId(){var e=this;return(0,s.Z)(function*(){return{uuid:e.getUid()}})()}getInfo(){var e=this;return(0,s.Z)(function*(){if(typeof navigator>"u"||!navigator.userAgent)throw e.unavailable("Device API not available in this browser");const i=navigator.userAgent,n=e.parseUa(i);return{model:n.model,platform:"web",operatingSystem:n.operatingSystem,osVersion:n.osVersion,manufacturer:navigator.vendor,isVirtual:!1,webViewVersion:n.browserVersion}})()}getBatteryInfo(){var e=this;return(0,s.Z)(function*(){if(typeof navigator>"u"||!navigator.getBattery)throw e.unavailable("Device API not available in this browser");let i={};try{i=yield navigator.getBattery()}catch{}return{batteryLevel:i.level,isCharging:i.charging}})()}getLanguageCode(){return(0,s.Z)(function*(){return{value:navigator.language.split("-")[0].toLowerCase()}})()}getLanguageTag(){return(0,s.Z)(function*(){return{value:navigator.language}})()}parseUa(e){const i={},n=e.indexOf("(")+1;let c=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(c=e.indexOf(") Gecko"));const r=e.substring(n,c);if(-1!==e.indexOf("Android")){const t=r.replace("; wv","").split("; ").pop();t&&(i.model=t.split(" Build")[0]),i.osVersion=r.split("; ")[1]}else if(i.model=r.split("; ")[0],typeof navigator<"u"&&navigator.oscpu)i.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))i.osVersion=r;else{const t=r.split("; ").pop();if(t){const o=t.replace(" like Mac OS X","").split(" ");i.osVersion=o[o.length-1].replace(/_/g,".")}}i.operatingSystem=/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"ios":/Win/.test(e)?"windows":/Mac/i.test(e)?"mac":"unknown";const m=!!window.InstallTrigger,g=!!window.ApplePaySession,h=!!window.chrome,f=/Edg/.test(e),u=/FxiOS/.test(e),p=/CriOS/.test(e),x=/EdgiOS/.test(e);if(g||h&&!f||u||p||x){let t;t=u?"FxiOS":p?"CriOS":x?"EdgiOS":g?"Version":"Chrome";const o=e.split(" ");for(const l of o)if(l.includes(t)){const S=l.split("/")[1];i.browserVersion=S}}else if(m||f){const l=e.split("").reverse().join("").split("/")[0].split("").reverse().join("");i.browserVersion=l}return i}getUid(){if(typeof window<"u"&&window.localStorage){let e=window.localStorage.getItem("_capuid");return e||(e=this.uuid4(),window.localStorage.setItem("_capuid",e),e)}return this.uuid4()}uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const i=16*Math.random()|0;return("x"===e?i:3&i|8).toString(16)})}}}}]);