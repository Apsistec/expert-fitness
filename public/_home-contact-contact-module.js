(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_home-contact-contact-module"],{

/***/ "2mqV":
/*!***********************************************!*\
  !*** ./src/app/_home/contact/contact.page.ts ***!
  \***********************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.page.html */ "bO3C");
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.page.scss */ "755U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_conference_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_data/conference-data */ "RzYU");
/* harmony import */ var _map_dark_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-dark-style */ "6VI2");








let ContactPage = class ContactPage {
    constructor(doc, confData, platform) {
        this.doc = doc;
        this.confData = confData;
        this.platform = platform;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appEl = this.doc.querySelector('ion-app');
            let isDark = false;
            let style = [];
            if (appEl.classList.contains('dark-theme')) {
                style = _map_dark_style__WEBPACK_IMPORTED_MODULE_7__["darkStyle"];
            }
            const googleMaps = yield getGoogleMaps('AIzaSyBiBxbmdVNvYMRdFSJDf-uWRsQ7Y7DPjbg');
            let map;
            this.confData.getMap().subscribe((mapData) => {
                const mapEle = this.mapElement.nativeElement;
                map = new googleMaps.Map(mapEle, {
                    center: mapData.find((d) => d.center),
                    zoom: 16,
                    styles: style,
                });
                mapData.forEach((markerData) => {
                    const infoWindow = new googleMaps.InfoWindow({
                        content: `<h3>${markerData.displayName}</h3><h6>${markerData.address}</h6><h4>${markerData.phone}</h4>`,
                    });
                    const marker = new googleMaps.Marker({
                        position: markerData,
                        map,
                        title: markerData.displayName,
                    });
                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                });
                googleMaps.event.addListenerOnce(map, 'idle', () => {
                    mapEle.classList.add('show-map');
                });
            });
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        const el = mutation.target;
                        isDark = el.classList.contains('dark-theme');
                        if (map && isDark) {
                            map.setOptions({ styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_7__["darkStyle"] });
                        }
                        else if (map) {
                            map.setOptions({ styles: [] });
                        }
                    }
                });
            });
            observer.observe(appEl, {
                attributes: true,
            });
        });
    }
};
ContactPage.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _data_conference_data__WEBPACK_IMPORTED_MODULE_6__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
ContactPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['mapCanvas', { static: true },] }]
};
ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactPage);

function getGoogleMaps(apiKey) {
    const win = window;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=beta`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            const googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}


/***/ }),

/***/ "6VI2":
/*!*************************************************!*\
  !*** ./src/app/_home/contact/map-dark-style.js ***!
  \*************************************************/
/*! exports provided: darkStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkStyle", function() { return darkStyle; });
const darkStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];


/***/ }),

/***/ "755U":
/*!*************************************************!*\
  !*** ./src/app/_home/contact/contact.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-canvas {\n  position: absolute;\n  height: 40vh;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hvbWUvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSxpQ0FBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvX2hvbWUvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDo0MHZoO1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59XG4iXX0= */");

/***/ }),

/***/ "Jb7R":
/*!*************************************************!*\
  !*** ./src/app/_home/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/shared.module */ "i2L+");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-routing.module */ "qKrs");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact.page */ "2mqV");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../about-us/about-us.component */ "LlLa");









let ContactPageModule = class ContactPageModule {
};
ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactPageRoutingModule"],
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_7__["ContactPage"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"]],
    })
], ContactPageModule);



/***/ }),

/***/ "JnUm":
/*!************************************!*\
  !*** ./src/app/_data/user-data.ts ***!
  \************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");



let UserData = class UserData {
    constructor(storage) {
        this.storage = storage;
        this.favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    hasFavorite(sessionName) {
        return this.favorites.indexOf(sessionName) > -1;
    }
    addFavorite(sessionName) {
        this.favorites.push(sessionName);
    }
    removeFavorite(sessionName) {
        const index = this.favorites.indexOf(sessionName);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
    }
    login(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:login'));
        });
    }
    signup(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:signup'));
        });
    }
    logout() {
        return this.storage
            .remove(this.HAS_LOGGED_IN)
            .then(() => {
            return this.storage.remove('username');
        })
            .then(() => {
            window.dispatchEvent(new CustomEvent('user:logout'));
        });
    }
    setUsername(username) {
        return this.storage.set('username', username);
    }
    getUsername() {
        return this.storage.get('username').then((value) => {
            return value;
        });
    }
    isLoggedIn() {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            return value === true;
        });
    }
    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value;
        });
    }
};
UserData.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
UserData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserData);



/***/ }),

/***/ "LlLa":
/*!******************************************************!*\
  !*** ./src/app/_home/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-us.component.html */ "VuBX");
/* harmony import */ var _about_us_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component.scss */ "gqWo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() { }
};
AboutUsComponent.ctorParameters = () => [];
AboutUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutUsComponent);



/***/ }),

/***/ "RzYU":
/*!******************************************!*\
  !*** ./src/app/_data/conference-data.ts ***!
  \******************************************/
/*! exports provided: ConferenceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceData", function() { return ConferenceData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data */ "JnUm");






let ConferenceData = class ConferenceData {
    constructor(http, user) {
        this.http = http;
        this.user = user;
    }
    load() {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            return this.http
                .get('assets/data/conference_data.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
        }
    }
    processData(data) {
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking employees to sessions
        this.data = data;
        // loop through each day in the schedule
        this.data.schedule.forEach((day) => {
            // loop through each timeline group in the day
            day.groups.forEach((group) => {
                // loop through each session in the timeline group
                group.sessions.forEach((session) => {
                    session.employees = [];
                    if (session.employeeNames) {
                        session.employeeNames.forEach((employeeName) => {
                            const speaker = this.data.employees.find((s) => s.displayName === employeeName);
                            if (speaker) {
                                session.employees.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    }
    getTimeline(dayIndex, queryText = '', excludeTracks = [], segment = 'all') {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            const day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            const queryWords = queryText
                .split(' ')
                .filter((w) => !!w.trim().length);
            day.groups.forEach((group) => {
                group.hide = true;
                group.sessions.forEach((session) => {
                    // check if this session should show or not
                    this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    }
    filterSession(session, queryWords, excludeTracks, segment) {
        let matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session displayName than it passes the query test
            queryWords.forEach((queryWord) => {
                if (session.displayName.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        let matchesTracks = false;
        session.tracks.forEach((trackName) => {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segment is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        let matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.displayName)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    }
    getEmployees() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.employees.sort((a, b) => {
                const aName = a.displayName.split(' ').pop();
                const bName = b.displayName.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    }
    getTracks() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.tracks.sort();
        }));
    }
    getMap() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.map;
        }));
    }
};
ConferenceData.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
ConferenceData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ConferenceData);



/***/ }),

/***/ "VuBX":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/about-us/about-us.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-text>\n  <h4>PROFESSIONAL FITNESS TRAINING</h4>\n  <p>\n    EXPERT FITNESS created Shay Gillham in his vision to to provide fitness\n    enthusiasts who wanted to learn more about the potential achievements which\n    could be achieved by incorporating a fitness professional in order to gain a\n    premium experience. With strong experience in large gyms and from his time\n    working in CCU providing cardiac rehab , he was able to bring together a\n    solid foundation from which to facilitate guidance to others by using the\n    latest fitness technology, and heart healthy nutrition concepts which have\n    both continually eveloved. He has focused on providing his clients with a\n    core set of values which include consistency, balance, and motivation while\n    providing access to many of the latest, best in class analysis equipment,\n    and continually evolving workout equipment. Shay also has a no-nonsense\n    attitude but that does not mean he doesn't have fun. In fact, he continues\n    to be open minded, while remaining results driven at all times. His facility\n    will alwasys be clean, sanitized, and ready as soon as you walk in the door.\n    Such a clean and positive environment with access to the latest techniques\n    and instruction from someone who has truly \"lived it\" his entire life. You\n    will be hard pressed to find an equally qualified trainer along with a\n    premier workout facility at such a fair price anywhere. Whether you are\n    interested in shedding the pounds or even maximizing your existing effort,\n    Shat at EXPERT FITNESS offers a myriad of fitness options at great prices in\n    a friendly can do atmosphere.\n  </p>\n  <p>\n    At Expert Fitness our training team is comprised of true career trainers.\n    Requirements include an extensive formal education, a nationally recognized\n    personal training certification and advanced specialty education in the\n    areas of \"Scientific Core Conditioning\" taught by spine rehabilitation\n    specialist Paul Chek and \"Optimal Performance Training\" from the National\n    Academy of Sports Medicine\n  </p>\n  <h4>NUTRITIONAL COUNSELING</h4>\n  <p>\n    Having a properly designed nutritional plan is as important as a member's\n    exercise program. Comprehensive dietary analysis, metabolic testing and\n    nutritional counseling are all part of the Expert Fitness training system.\n    These services are available as a whole or independently through our\n    registered dietitian. Setup an appointment today to get started!\n  </p>\n\n  <h4>BACK PAIN PREVENTION AND POST REHAB EXERCISE PROGRAMING</h4>\n  <p>\n    If you have ever suffered or is currently expiriencing back pain, you may\n    have a postural problem. Our fitness professionals understand the functional\n    anatomy of the torso and extremities as they relate to improved spinal\n    health. Our fitness professionals are trained in using proper exercise\n    technique, proper exercise selection and recognizing the need for exercise\n    modification for orthopedic concerns. Effective assessment techniques are\n    used for effective program developement. Click here to read on exercise and\n    spinal health.\n  </p>\n</ion-text>\n\n<h3>ONLINE PERSONAL TRAINING</h3>\n<h4>Online Personal Training (Silver)</h4>\n\n<p>\n  You can now have your own virtual personal trainer and the guidance and\n  accountability you need without being out HUNDREDS of dollars. We provide you\n  with our unique software which we use to build your custom workouts, nutrition\n  plan, and community for ongoing support. • Online Training Software • Getting\n  Started Right Webinar If you decide you want some one on one time at our\n  personal training studio with a trainer, session are discounted 15% OFF.\n</p>\n\n<h4>Online Personal Training (GOLD)</h4>\n<p>\n  This expanded program not only will provide you with our • Online Training\n  Software • Getting Started Right Webinar You will also receive: • Weekly\n  education webinars covering topics from goals setting, maximizing metabolism,\n  supercharging your weight loss and more. • In addition you get our worksheets\n  with each lesson which will help you apply the information faster, maximizing\n  your results. If you decide you want some one on one time at our personal\n  training studio with a trainer, session are discounted 15% OFF.\n</p>\n\n<h3>Online Personal Training (Platinum)</h3>\n<p>\n  Yet one more expansion providing you with the ultimate accountability and\n  guidance without being out of pocket HUNDREDS of dollars. The SILVER online\n  training program will provide you with our • Online Training Software •\n  Getting Started Right Webinar • Weekly education webinars covering topics from\n  goals setting, maximizing metabolism, supercharging your weight loss and more.\n  • In addition you get our worksheets with each lesson which will help you\n  apply the information faster, maximizing your results. • With the enhanced\n  program you will fax your weekly worksheet in to your assigned trainer which\n  will call you and provide a weekly phone consultation. If you decide you want\n  some one on one time at our personal training studio with a trainer, session\n  are discounted 15% OFF\n</p>\n");

/***/ }),

/***/ "bO3C":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/contact/contact.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div #mapCanvas class=\"map-canvas\"></div>\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n\n      <ion-col>\n        <app-about-us></app-about-us>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n<app-footer></app-footer>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "gqWo":
/*!********************************************************!*\
  !*** ./src/app/_home/about-us/about-us.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19ob21lL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "qKrs":
/*!*********************************************************!*\
  !*** ./src/app/_home/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "2mqV");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"],
    },
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=_home-contact-contact-module.js.map