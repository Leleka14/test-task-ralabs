(this["webpackJsonptest-task-ralabs"]=this["webpackJsonptest-task-ralabs"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),o=a.n(c),i=(a(73),a(7)),s=(a(78),a(36)),l=a(119),h=a(120),u=a(1),d=function(){return Object(u.jsx)("h2",{className:"header",children:"Weather Portal"})},j=a(66),b=a.n(j),m="https://www.weatherbit.io/static/img/icons/",w="LOAD_WEATHER",f="WEATHER_ISLOADING",p="WEATHER_FAILED",O="LOAD_CURRENT_CITY",y=function(e){return function(t){return t({type:f}),console.log(e),fetch("".concat("https://api.weatherbit.io/v2.0/forecast/daily","?city=").concat(e,"&key=").concat("552d1850c10d4272aff7ab2676c84424")).then((function(e){if(e.ok)return e.json();var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.errorMessage)})).then((function(e){t(function(e){return{type:w,payload:e}}(e))})).catch((function(e){return t((a=e.errorMessage,{type:p,payload:a}));var a}))}},x=function(){return function(e){navigator.geolocation.getCurrentPosition((function(t){return fetch("http://api.positionstack.com/v1/reverse?access_key=29503943e43100352ab460a761bd9a9c&query=".concat(t.coords.latitude,",").concat(t.coords.longitude)).then((function(e){return e.json()})).then((function(t){e(function(e){return{type:O,payload:e}}(t))}))}),console.log)}},g=function(){return Object(u.jsxs)("div",{className:"col col-12",children:[Object(u.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(u.jsx)("p",{children:"Loading . . ."})]})},v=function(e){var t="".concat(m).concat(e.weather.weather.icon,".png");return Object(u.jsxs)("div",{className:"col-md-6 weather-card-wrapper",children:[Object(u.jsxs)("h4",{children:["Weather in ",e.city," for ","".concat(new Date(e.date).getDate()," ").concat(new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(e.date)))]}),Object(u.jsx)("div",{className:"weather-card container",children:Object(u.jsxs)("div",{className:"weather-card-main",children:[Object(u.jsxs)(l.a,{children:[Object(u.jsx)("div",{className:"col-sm-4 weather-card-main-image-wrapper",children:Object(u.jsx)("img",{className:"weather-card-main-image",alt:"Not Found",width:"100px",src:t})}),Object(u.jsxs)("div",{className:"weather-card-main-info col-sm-7",children:[Object(u.jsxs)("p",{children:["Average Temperature: ",e.weather.temp,"\xb0C"]}),Object(u.jsxs)("p",{children:["Probability of Precipitation: ",e.weather.pop,"%"]}),Object(u.jsxs)("p",{children:["Wind speed: ",Math.round(e.weather.wind_spd),"m/s"]}),Object(u.jsxs)("p",{children:["Humidity: ",e.weather.rh,"%"]})]})]}),Object(u.jsx)("p",{children:function(e,t,a,r){var n="";return e>=18&&(n+="".concat(["You should wear something light as it will be warm, more than 15\xb0.","If i was you, i would wear shorts as it would be warm.","Don't wear anything with longsleeves, it will be warm."][Math.floor(3*Math.random())])),e>=10&&e<18&&(n+=" ".concat(["It would be cool weather.","Temperature wouldn't be too low, but wouldn't be too high either, be careful.","In my opinion this would be perfect temperature, not high, not low."][Math.floor(3*Math.random())])),e<10&&(n+=" ".concat(["I recommend you to wear coat, temparature would be less than 10\xb0.","Be careful, it seems like it's still cool weather, but it's not.","It's easy to catch a cold, you should put on something warm."][Math.floor(3*Math.random())])),t<10&&(n+=" ".concat(["No rain at all.","Gods of rain told me that they would be merciful this day.","Nothing will fall from sky, unless some bird will be flying over you."][Math.floor(3*Math.random())])),t>=10&&t<50&&(n+=" ".concat(["It shouldn't be raining, but there is a small chance.","You should look at the sky from time to time, small chance of rain.","There is a small probability if rain."][Math.floor(3*Math.random())])),t>=50&&(n+=" ".concat(["You really should take an umbrella, it would be raining.","There is a high chance of rain.","Don't plan anything outside, it would be raining."][Math.floor(3*Math.random())])),a>=70&&(n+=" ".concat("It will cloudy.")),a<70&&a>=30&&(n+=" ".concat("Half of sky will be in clouds.")),a<30&&(n+=" ".concat("Sky would be clear.")),r>=5&&(n+=" ".concat("It also will be windy.")),r<5&&(n+=" ".concat("Wind will be weak.")),n}(e.weather.temp,e.weather.pop,e.weather.clouds,e.weather.wind_spd)})]})})]})},W=function(e){var t=e.text,a=e.className;return Object(u.jsx)("div",{className:a,children:t})},k=Object(i.connect)((function(e){return{twoWeekWeather:e.Data}}),(function(e){return{fetchWeather:function(t){return e(y(t))}}}))((function(e){var t=Object(r.useState)(0),a=Object(s.a)(t,2),c=a[0],o=a[1];Object(r.useEffect)((function(){e.city&&e.fetchWeather(e.city)}),[e.city]);var i=function(e){var t=new Date(e);return"".concat(t.getDate()," ").concat(new Intl.DateTimeFormat("en-US",{month:"long"}).format(t))},h=function(){if(e.twoWeekWeather.isLoading)return Object(u.jsx)(g,{});if(e.twoWeekWeather.weather){var t=W({text:"<",className:"arrow-prev"}),a=W({text:">",className:"arrow-next"}),r=e.twoWeekWeather.weather.data.map((function(e,t){var a="".concat(m).concat(e.weather.icon,".png");return Object(u.jsxs)("li",{onClick:function(){return o(t)},className:"menu-item weather-list-element",children:[Object(u.jsx)("p",{children:i(e.datetime)}),Object(u.jsx)("img",{alt:"Not Found",width:"45px",height:"30px",src:a}),Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("p",{className:"offset-1 col-4",children:[Object(u.jsx)("small",{children:"min:"}),Object(u.jsx)("br",{}),e.min_temp,"\xb0"]}),Object(u.jsxs)("p",{className:"offset-1 col-4",children:[Object(u.jsx)("small",{children:"max:"}),Object(u.jsx)("br",{}),e.max_temp,"\xb0"]})]})]},e.datetime)}));return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsxs)("h2",{children:["Weather at ",e.twoWeekWeather.weather.city_name,", ",i(e.twoWeekWeather.weather.data[0].datetime)," - ",i(e.twoWeekWeather.weather.data[e.twoWeekWeather.weather.data.length-1].datetime)]}),Object(u.jsx)(b.a,{data:r,arrowLeft:t,arrowRight:a,wheel:!1,scrollBy:3,translate:1})]})}return Object(u.jsx)("div",{})},d=function(){return e.twoWeekWeather.weather?Object(u.jsx)(v,{city:e.twoWeekWeather.weather.city_name,date:e.twoWeekWeather.weather.data[c].datetime,weather:e.twoWeekWeather.weather.data[c]}):Object(u.jsx)("div",{})};return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]})})),N=a(50),C=Object(i.connect)((function(e){return{currentCity:e.CurrentCity.currentCity}}),(function(e){return{fetchCurrentCity:function(){return e(x())}}}))((function(e){var t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1];Object(r.useEffect)((function(){e.fetchCurrentCity()}),[]);var o=Object(r.useCallback)((function(){c(e.currentCity)}),[e.currentCity]);Object(r.useEffect)((function(){o(e.currentCity)}),[e.currentCity,o]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(d,{}),Object(u.jsx)(N.LocalForm,{onSubmit:function(e){return function(e){""!==e.city&&c(e.city)}(e)},children:Object(u.jsxs)(l.a,{className:"form-group",children:[Object(u.jsx)(N.Control.text,{placeholder:"Type city",className:"col-10 col-md-4 form-control",model:".city"}),Object(u.jsxs)(h.a,{type:"submit",className:"col-2 col-md-1",color:"success",children:[Object(u.jsx)("i",{className:"fa fa-lg fa-search"}),Object(u.jsx)("sub",{children:"..."})]})]})}),Object(u.jsx)(k,{city:n})]})})),M=a(10),D=a(67),I=a(68),E=a.n(I),T=a(14),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errorMessage:null,weather:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(T.a)(Object(T.a)({},e),{},{isLoading:!1,errorMessage:null,weather:t.payload});case f:return Object(T.a)(Object(T.a)({},e),{},{isLoading:!0,errorMessage:null,weather:null});case p:return Object(T.a)(Object(T.a)({},e),{},{isLoading:!1,errorMessage:t.payload,weather:null});default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentCity:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{currentCity:t.payload.data[0].region};default:return e}},F=Object(M.createStore)(Object(M.combineReducers)({Data:L,CurrentCity:_}),Object(M.applyMiddleware)(D.a,E.a));var A=function(){return Object(u.jsx)(i.Provider,{store:F,children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(C,{})})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};a(115),a(116),a(117);o.a.render(Object(u.jsx)(A,{}),document.getElementById("root")),S()},73:function(e,t,a){},78:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.32675157.chunk.js.map