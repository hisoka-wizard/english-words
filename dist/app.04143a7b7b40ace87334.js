webpackJsonp([1],{123:function(t,e,r){"use strict";var n=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(19),c=r(92),a=r(204),s=function(){function WordsComponent(t){this.router=t,this.words=a.Words,this.realtime_word=void 0}return WordsComponent.prototype.createWord=function(){var t=0,e=this.words.length-1,r=function(){var r=t-.5+Math.random()*(e-t+1);return r=Math.round(r)}();this.realtime_word=this.words[r]},WordsComponent.prototype.compareWord=function(t){for(var e=0,r=this.realtime_word.translate;e<r.length;e++){t===r[e]&&this.createWord()}this.createWord()},WordsComponent.prototype.ngOnInit=function(){},WordsComponent}();s=n([i.Component({selector:"words",template:r(361),styles:[r(364)]}),o("design:paramtypes",[c.Router])],s),e.WordsComponent=s},196:function(t,e,r){"use strict";var n=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(e,"__esModule",{value:!0});var o=r(19),i=r(58),c=r(123),a=r(202),s=r(203),d=function(){function AppModule(){}return AppModule}();d=n([o.NgModule({imports:[i.BrowserModule,a.AppRoutingModule],declarations:[s.AppComponent,c.WordsComponent],bootstrap:[s.AppComponent]})],d),e.AppModule=d},202:function(t,e,r){"use strict";var n=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(e,"__esModule",{value:!0});var o=r(123),i=r(19),c=r(92),a=[{path:"",component:o.WordsComponent}],s=function(){function AppRoutingModule(){}return AppRoutingModule}();s=n([i.NgModule({imports:[c.RouterModule.forRoot(a,{useHash:!0})],exports:[c.RouterModule]})],s),e.AppRoutingModule=s},203:function(t,e,r){"use strict";var n=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(e,"__esModule",{value:!0});var o=r(19);r(359);var i=function(){function AppComponent(){}return AppComponent}();i=n([o.Component({selector:"english",template:r(360),styles:[r(363)]})],i),e.AppComponent=i},204:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Words=[{id:0,word:"hi",transcript:"хай",translate:["привет","",""]},{id:0,word:"hello",transcript:"хэлОу",translate:["здравствуйте","привет",""]},{id:0,word:"sorry",transcript:"сОри",translate:["извините","простите",""]}]},359:function(t,e){},360:function(t,e){t.exports="<router-outlet></router-outlet>\n"},361:function(t,e){t.exports='<div class="row">\r\n    <div class="col-12">\r\n        <div class="container ground">\r\n            <button class="btn btn-primary btn-lg" (click)="createWord()">Генератор слова</button>\r\n            <div *ngIf="undefined!==realtime_word">\r\n                <div class="col-12"><h1><strong>{{realtime_word.word}}</strong></h1></div>\r\n                <div class="col-12"><h1><strong>{{realtime_word.transcript}}</strong></h1></div>\r\n            </div>\r\n            <input type="text" class="col-12" #translate>\r\n            <button class="btn btn-primary btn-lg" (click)="compareWord(translate.value)">Ввести ответ</button>\r\n        </div>\r\n    </div>\r\n</div>'},363:function(t,e){t.exports="\n"},364:function(t,e){t.exports="/* html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n  \r\n    background: url(../../../../assets/images/background.jpg) no-repeat center fixed;\r\n    -webkit-background-size: cover;\r\n    background-size: cover; \r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n    background-color:#464646;\r\n  }\r\n\r\n  .title {\r\n      color: black;\r\n      margin:0;\r\n      padding:50px 20px;\r\n  }\r\n  \r\n  .text{\r\n      color: darkslategray;\r\n      margin: 0;\r\n      padding:50px 20px;\r\n  }\r\n  \r\n  .button-pos{\r\n      margin: 20px 0 0 10px;\r\n      width: 300px;\r\n  }\r\n\r\n.ground {\r\n    background-color: rgba(57, 31, 22, 0.5);\r\n    height: 100%;\r\n    width: 100%; \r\n} */"},635:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(93),o=r(19),i=r(196);o.enableProdMode(),n.platformBrowserDynamic().bootstrapModule(i.AppModule)}},[635]);