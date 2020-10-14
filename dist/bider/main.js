(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section section-lg section-shaped pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <div class=\"container py-lg-md d-flex\">\n                <div class=\"col px-0\">\n                    <div class=\"card card-profile shadow mt-50\" *ngIf=\"noPosts\">\n                        <div class=\"px-4\">\n                            <div class=\"text-center pt-3 pb-3\">\n                                <h4>No Wishlists Yet!</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-lift--hover shadow mt-50\" *ngFor=\"let post of userPosts\">\n                        <div class=\"px-4\">\n                            <div class=\"row\">\n                                <div class=\"column\">\n                                    <ngb-carousel>\n                                        <ng-template ngbSlide *ngFor=\"let img of post.images\">\n                                            <img [src]=\"getImage(img.pic)\" alt=\"Image\" height=\"150px\" width=\"150px\">\n                                        </ng-template>\n                                    </ngb-carousel>\n                                </div>\n                                <div class=\"column postValue\">\n                                    <div class=\"row\">\n                                        <h2>{{post.title}}</h2>\n                                    </div>\n                                    <div class=\"row\">\n                                        <h5>{{post.description}}</h5>\n                                    </div>\n                                    <div class=\"row\">\n                                        <h6>Posted by: {{post.user.firstName}} {{post.user.lastName}}</h6>\n                                    </div>\n                                </div>\n                                <div class=\"column\">\n                                    <div class=\"row\">\n                                        <button type=\"button\" class=\"btn btn-link\" (click)=\"toggleSelected(post)\">\n                                        <span>\n                                            <i class=\"fa fa-heart-o\" style=\"color: red; font-size: 24px;\" *ngIf=\"!post.selected\"></i>\n                                            <i class=\"fa fa-heart\" style=\"color: red; font-size: 24px;\" *ngIf=\"post.selected\"></i>\n                                        </span>\n                                        </button>\n                                    </div>\n                                    <div class=\"row\">\n                                        <input #bid name=\"bid\" id=\"bid\" type=\"number\" style=\"width: 100px; padding: 8px; margin-bottom: 10px;\" [(ngModel)]=\"post.bidAmt\" value=\"post.minBid\">\n                                    </div>\n                                    <div class=\"row\">\n                                        <button type=\"button\" class=\"btn btn-success\" style=\"margin-left: 20px;\" (click)=\"bidPost(post)\">\n                                        Bid\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- SVG separator -->\n            <div class=\"separator separator-bottom separator-skew\">\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n            </div>\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"shape shape-style-1 bg-gradient-default\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <div class=\"container pt-lg-md\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-lg-5\">\n                    <div class=\"card bg-secondary shadow border-0\">\n                        <div class=\"card-body px-lg-5 py-lg-5\" *ngIf=\"!security\">\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                                </div>\n                                <input name=\"username\" class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"userName\">\n                            </div>\n                            <div *ngIf=\"isNull\" class=\"alert alert-danger\">\n                                Email is required.\n                            </div>\n                            <div class=\"text-center\">\n                                <button [disabled]=\"submitted\" type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"onSubmit()\">Submit</button>\n                            </div>\n                        </div>\n                        <div class=\"card-body px-lg-5 py-lg-5\" *ngIf=\"security\">\n                            <div class=\"text-center mb-4\">\n                                <small>{{securityQuestion}}</small>\n                            </div>\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n                                </div>\n                                <input name=\"answer\" class=\"form-control\" placeholder=\"Answer\" type=\"text\" [(ngModel)]=\"answer\" required>\n                            </div>\n                            <div *ngIf=\"isNull\" class=\"alert alert-danger\">\n                                Answer is required.\n                            </div>\n                            <div *ngIf=\"wrongAnswer\" class=\"alert alert-danger\">\n                                Answer is incorrect.\n                            </div>\n                            <div class=\"text-center\">\n                                <button [disabled]=\"submitted\" type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"checkAnswer()\">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n        <!-- Hero for FREE version -->\n        <section class=\"section section-lg section-hero section-shaped\">\n            <!-- Background circles -->\n            <div class=\"shape shape-style-1 shape-primary\">\n                <span class=\"span-150\"></span>\n                <span class=\"span-50\"></span>\n                <span class=\"span-50\"></span>\n                <span class=\"span-75\"></span>\n                <span class=\"span-100\"></span>\n                <span class=\"span-75\"></span>\n                <span class=\"span-50\"></span>\n                <span class=\"span-100\"></span>\n                <span class=\"span-50\"></span>\n                <span class=\"span-100\"></span>\n            </div>\n            <div class=\"container shape-container d-flex align-items-center py-lg\">\n                <div class=\"col px-0\">\n                    <div class=\"row align-items-center justify-content-center\">\n                        <div class=\"col-lg-6 text-center\">\n                            <img src=\"../assets/img/brand/logo.png\" style=\"width: 200px;\" class=\"img-fluid\">\n                            <p class=\"lead text-white\">You choose what You pay. It's Free!</p>\n                            <div class=\"btn-wrapper mt-5\">\n                                <a routerLink=\"/login\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\n                                    <span class=\"btn-inner--text\">Log In</span>\n                                </a>\n                                <a routerLink=\"/register\" class=\"btn btn-lg btn-primary btn-icon mb-3 mb-sm-0\">\n                                    <span class=\"btn-inner--text\">Sign Up for Free</span>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- SVG separator -->\n            <div class=\"separator separator-bottom separator-skew zindex-100\">\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n            </div>\n        </section>\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section section-lg section-shaped pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <div class=\"container py-lg-md d-flex\">\n                <div class=\"col px-0\">\n                    <div class=\"card card-profile shadow mt-50\" *ngIf=\"noPosts\">\n                        <div class=\"px-4\">\n                            <div class=\"text-center pt-3 pb-3\">\n                                <h4>No posts</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-lift--hover shadow mt-50\" *ngFor=\"let post of userPosts\">\n                        <div class=\"px-4\">\n                            <div class=\"row\">\n                                <div class=\"column\">\n                                    <ngb-carousel>\n                                        <ng-template ngbSlide *ngFor=\"let img of post.images\">\n                                            <img [src]=\"getImage(img.pic)\" alt=\"Image\" height=\"150px\" width=\"150px\">\n                                        </ng-template>\n                                    </ngb-carousel>\n                                </div>\n                                <div class=\"column postValue\">\n                                    <div class=\"row\">\n                                        <h2>{{post.title}}</h2>\n                                    </div>\n                                    <div class=\"row\">\n                                        <h5>{{post.description}}</h5>\n                                    </div>\n                                    <div class=\"row\">\n                                        <h6>Posted by: {{post.user.firstName}} {{post.user.lastName}}</h6>\n                                    </div>\n                                </div>\n                                <div class=\"column\">\n                                    <div class=\"row\">\n                                        <button type=\"button\" class=\"btn btn-link\" (click)=\"toggleSelected(post)\" style=\"margin-left: 20px;\">\n                                        <span>\n                                            <i class=\"fa fa-heart-o\" style=\"color: red; font-size: 24px;\" *ngIf=\"!post.selected\"></i>\n                                            <i class=\"fa fa-heart\" style=\"color: red; font-size: 24px;\" *ngIf=\"post.selected\"></i>\n                                        </span>\n                                        </button>\n                                    </div>\n                                    <div class=\"row\">\n                                        <input #bid name=\"bid\" id=\"bid\" type=\"number\" style=\"width: 100px; padding: 8px; margin-bottom: 10px;\" [(ngModel)]=\"post.bidAmt\" value=\"post.minBid\">\n                                    </div>\n                                    <div class=\"row\">\n                                        <button type=\"button\" class=\"btn btn-success\" style=\"margin-left: 20px;\" (click)=\"bidPost(post)\">\n                                        Bid\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- SVG separator -->\n            <div class=\"separator separator-bottom separator-skew\">\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n            </div>\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"shape shape-style-1 bg-gradient-default\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <div class=\"container pt-lg-md\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-lg-5\">\n                    <div class=\"card bg-secondary shadow border-0\">\n                        <div class=\"card-header bg-white pb-5\">\n                            <div class=\"text-muted text-center mb-3\">\n                                <small>Sign in with</small>\n                            </div>\n                            <div class=\"btn-wrapper text-center\">\n                                <a (click)=\"googleLogin()\" class=\"btn btn-neutral btn-icon\">\n                                    <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                                    <span class=\"btn-inner--text\">Google</span>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-body px-lg-5 py-lg-5\">\n                            <div class=\"text-center text-muted mb-4\">\n                                <small>Or sign in with credentials</small>\n                            </div>\n                            <form role=\"form\">\n                                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                                    <div class=\"input-group input-group-alternative\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                                        </div>\n                                        <input name=\"username\" class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"userName\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                                    <div class=\"input-group input-group-alternative\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                                        </div>\n                                        <input name=\"password\" class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" [(ngModel)]=\"password\">\n                                    </div>\n                                </div>\n                                <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LflJ_4UAAAAAPR6bM0EvBRSv93huK7Vny18eVlD\"></re-captcha>\n                                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                                    <input class=\"custom-control-input\" id=\" customCheckLogin\" name=\"rememberMe\" type=\"checkbox\" [(ngModel)]=\"rememberMe\">\n                                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                                        <span>Remember me</span>\n                                    </label>\n                                </div>\n                                <div class=\"text-center\">\n                                    <button type=\"submit\" (click)=\"login()\" class=\"btn btn-primary my-4\">Sign in</button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-6\">\n                            <a [routerLink]=\"['/forgotPassword']\" class=\"text-light\">\n                                <small>Forgot password?</small>\n                            </a>\n                        </div>\n                        <div class=\"col-6 text-right\">\n                            <a [routerLink]=\"['/register']\" class=\"text-light\">\n                                <small>Create new account</small>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"profile-page\">\n    <section class=\"section-profile-cover section-shaped my-0\">\n        <!-- Circles background -->\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <!-- SVG separator -->\n        <div class=\"separator separator-bottom separator-skew\">\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n            </svg>\n        </div>\n    </section>\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\" mt--400\">\n                <button type=\"button\" class=\"btn btn-white mt-4\" (click)=\"newPostFunction()\" *ngIf=\"!newPost\">New post</button>\n            </div>\n            <div class=\"card card-profile shadow mt-50\" *ngIf=\"newPost\">\n                <div class=\"px-4\">\n                    <div class=\"text-center pt-3 pb-3\">\n                        <div class=\"text-danger font-italic\">\n                            <span class=\"text-danger font-weight-700\">{{maxFiles}}</span>\n                        </div>\n                        <div class=\"fileContainer\" appDnd (fileDropped)=\"onFileDropped($event)\">\n                            <input type=\"file\" #itemImage multiple hidden accept=\".png, .jpg, .jpeg\" (change)=\"onFileDropped($event.target.files)\" />\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"63\" height=\"64\" viewBox=\"0 0 63 64\">\n                                <g fill=\"#3B454F\" fill-rule=\"nonzero\">\n                                    <path\n                                        d=\"M42.656 15.135a1.953 1.953 0 0 1-1.391-.578L31.5 4.795l-9.765 9.762a1.97 1.97 0 1 1-2.785-2.785L30.106.616a1.97 1.97 0 0 1 2.785 0l11.157 11.156a1.97 1.97 0 0 1-1.392 3.363z\" />\n                                    <path\n                                        d=\"M31.5 36.791a1.97 1.97 0 0 1-1.969-1.969V2.01a1.97 1.97 0 0 1 3.938 0v32.812a1.97 1.97 0 0 1-1.969 1.969z\" />\n                                    <path\n                                        d=\"M55.781 63.041H7.22A7.225 7.225 0 0 1 0 55.822V41.385a4.599 4.599 0 0 1 4.594-4.594h7.234a4.567 4.567 0 0 1 4.402 3.276l2.814 9.382a.658.658 0 0 0 .628.467h23.656a.658.658 0 0 0 .628-.467l2.814-9.385a4.572 4.572 0 0 1 4.402-3.273h7.234A4.599 4.599 0 0 1 63 41.385v14.437a7.225 7.225 0 0 1-7.219 7.219zM4.594 40.729a.656.656 0 0 0-.657.656v14.437a3.286 3.286 0 0 0 3.282 3.282H55.78a3.286 3.286 0 0 0 3.282-3.282V41.385a.656.656 0 0 0-.657-.656h-7.234a.65.65 0 0 0-.628.467L47.73 50.58a4.628 4.628 0 0 1-4.402 3.274H19.672a4.567 4.567 0 0 1-4.402-3.276l-2.814-9.382a.65.65 0 0 0-.628-.467H4.594z\" />\n                                </g>\n                            </svg>\n\n                            <h3>Drag and drop file here</h3>\n                            <h3>or</h3>\n                            <button type=\"button\" class=\"btn btn-primary mt-4 mb-4\" (click)=\"itemImage.click()\">Upload images</button>\n                        </div>\n                        <div class=\"row justify-content-center\">\n                            <div class=\"column imgDisplay\" *ngFor=\"let img of imgURL\">\n                                <img [src]=\"img\" alt=\"Image\">\n                            </div>\n                        </div>\n                        <div class=\"input-group input-group-alternative mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                            </div>\n                            <input class=\"form-control\" name=\"title\" placeholder=\"Title\" type=\"text\" [(ngModel)]=\"data.title\" required>\n                        </div>\n                        <div class=\"input-group input-group-alternative mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                            </div>\n                            <input class=\"form-control\" name=\"desc\" placeholder=\"Description\" type=\"text\" [(ngModel)]=\"data.description\" required>\n                        </div>\n                        <div class=\"input-group input-group-alternative mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                            </div>\n                            <input class=\"form-control\" name=\"bid\" placeholder=\"Min. bid\" type=\"number\" [(ngModel)]=\"data.minBid\" required>\n                        </div>\n                        <div class=\"text-center\">\n                            <button type=\"submit\" class=\"btn btn-danger mt-4\" (click)=\"newPostFunction()\">Cancle</button>\n                            <button [disabled]=\"posted\" type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"post()\">Post</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card card-profile shadow mt-50\" *ngIf=\"noPosts\">\n                <div class=\"px-4\">\n                    <div class=\"text-center pt-3 pb-3\">\n                        No posts\n                    </div>\n                </div>\n            </div>\n            <div class=\"card card-lift--hover shadow mt-50\" *ngFor=\"let post of userPosts\">\n                <div class=\"px-4\">\n                    <div class=\"row\">\n                        <div class=\"column\">\n                            <ngb-carousel>\n                                <ng-template ngbSlide *ngFor=\"let img of post.images\">\n                                    <img [src]=\"getImage(img.pic)\" alt=\"Image\" height=\"150px\" width=\"150px\">\n                                </ng-template>\n                            </ngb-carousel>\n                        </div>\n                        <div class=\"column postValue\">\n                            <div class=\"row\">\n                                <h2>{{post.title}}</h2>\n                            </div>\n                            <div class=\"row\">\n                                <h5>{{post.description}}</h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"profile-page\">\n    <section class=\"section-profile-cover section-shaped my-0\">\n        <!-- Circles background -->\n        <div class=\"shape shape-style-1 shape-primary alpha-4\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <!-- SVG separator -->\n        <div class=\"separator separator-bottom separator-skew\">\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n        </div>\n    </section>\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"card card-profile shadow mt--300\">\n                <div class=\"px-4\">\n                    <div class=\"text-center mt--5 myForm\">\n                        <form name=\"form\" role=\"form\">\n                            <div class=\"row form-group justify-content-center\">\n                                <div class=\"col-lg-3 order-lg-2\">\n                                    <div class=\"card-profile-image\">\n                                        <input class=\"form-control\" type=\"file\" accept=\".png, .jpg, .jpeg\" #profile hidden (change)=\"onFileChange($event)\">\n                                        <img [src]=\"imgURL\" onerror=\"this.src = '../assets/img/profile.png';\" class=\"rounded-circle myImg\" (click)=\"profile.click()\">\n                                    </div>\n                                </div>\n                            </div>\n                            <br><br><br><br><br><br><br>\n                            <div class=\"form-group\">\n                                <div class=\"input-group input-group-alternative mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                                    </div>\n                                    <input class=\"form-control\" name=\"fName\" placeholder=\"First Name\" type=\"text\" [(ngModel)]=\"user.firstName\" required>\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                                    </div>\n                                    <input class=\"form-control\" name=\"lName\" placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"user.lastName\" required/>\n\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"input-group input-group-alternative mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\"><i class=\"ni ni-pin-3\"></i></span>\n                                    </div>\n                                    <input class=\"form-control\" name=\"country\" placeholder=\"Country\" type=\"text\" [(ngModel)]=\"user.country\" required/>\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\"><i class=\"ni ni-mobile-button\"></i></span>\n                                    </div>\n                                    <input class=\"form-control\" name=\"number\" placeholder=\"Number\" type=\"phone\" [(ngModel)]=\"user.phone\" required/>\n                                </div>\n                            </div>\n                            <div class=\"text-center\">\n                                <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"updateProfile()\">Update</button>\n                            </div>\n                        </form>\n                        <br>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"shape shape-style-1 bg-gradient-default\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <div class=\"container pt-lg-md\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-lg-5\">\n                    <div class=\"card bg-secondary shadow border-0\">\n                        <div class=\"card-body px-lg-5 py-lg-5\">\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                                </div>\n                                <input #pass=\"ngModel\" class=\"form-control\" name=\"pass\" placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 and not more than 15 characters\"\n                                    required/>\n                            </div>\n                            <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"pass.errors.required\">\n                                    Password is required.\n                                </div>\n                                <div *ngIf=\"pass.errors.pattern\">\n                                    Min 1 number, min 1 uppercase and lowercase letter, min 8 and max 15 characters.\n                                </div>\n                            </div>\n                            <br>\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                                </div>\n                                <input #passRe=\"ngModel\" class=\"form-control\" name=\"passRe\" placeholder=\"Re-Type Password\" type=\"password\" [(ngModel)]=\"Re_password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 and not more than 15 characters\"\n                                    required/>\n                            </div>\n                            <div *ngIf=\"passRe.invalid && (passRe.dirty || passRe.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"passRe.errors.required\">\n                                    Re-Type Password is required.\n                                </div>\n                                <div *ngIf=\"passRe.errors.pattern\">\n                                    Min 1 number, min 1 uppercase and lowercase letter, min 8 and max 15 characters.\n                                </div>\n                            </div>\n                            <div class=\"text-danger font-italic\">\n                                <span class=\"text-danger font-weight-700\">{{passwordError}}</span>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"pass.valid && passRe.valid\">\n                                <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"onSubmit()\">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section section-lg section-shaped pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <div class=\"container py-lg-md d-flex\">\n                <div class=\"col px-0\">\n                    <ul class=\"card list-group\">\n                        <li *ngFor=\"let post of userPosts\" class=\"list-group-item\">\n                            <a (click)=\"openPopUp(post)\" href=\"javascript:void(0)\">{{post.title}}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <!-- SVG separator -->\n            <div class=\"separator separator-bottom separator-skew\">\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n            </div>\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\n    <div class=\"container\">\n        <hr>\n        <div class=\"row align-items-center justify-content-md-between\">\n            <div class=\"col-md-6\">\n                <div class=\"copyright\">\n                    &copy; {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com?ref=adsa-footer\" target=\"_blank\">Creative Tim</a>.\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <ul class=\"nav nav-footer justify-content-end\">\n                    <li class=\"nav-item\">\n                        <a [routerLink]=\"['/support']\">Support Us</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n    <div class=\"container\">\n        <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['']\">\n            <img src=\"../assets/img/brand/logo.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n            <div class=\"input-group\" *ngIf=\"authApi.isLoggedIn()\">\n                <input type=\"text\" placeholder=\" Search...\" name=\"search\" #search matInput [matAutocomplete]=\"auto\" (input)=\"filterTitleValue(search.value)\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let title of filteredTitle\" [value]=\"title\">\n                        {{title}}\n                    </mat-option>\n                </mat-autocomplete>\n                <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\" (click)=\"searchButton(search.value)\">\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-search\"></i></span>\n                </button>\n            </div>\n            <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\" *ngIf=\"authApi.isLoggedIn()\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"Home\" [routerLink]=\"['']\">\n                        <i class=\"fa fa-home\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Home</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"Wishlist\" [routerLink]=\"['/favorites']\">\n                        <i class=\"fa fa-heart\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Wishlist</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"History\">\n                        <i class=\"fa fa-history\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">History</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"Order Cart\">\n                        <i class=\"fa fa-shopping-cart\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Cart</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"Posts\" [routerLink]=\"['/posts']\">\n                        <i class=\"fa fa-edit\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">My Posts</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"Profile\" [routerLink]=\"['/profile']\">\n                        <i class=\"fa fa-user\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <div class=\"text-center\">\n                        <button type=\"submit\" (click)=\"logout()\" class=\"btn btn-outline-danger btn-sm\">\n                            <i class=\"fa fa-sign-out\"></i>\n                        </button>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"shape shape-style-1 bg-gradient-default\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <div class=\"container pt-lg-md\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-lg-5\">\n                    <div class=\"card bg-secondary shadow border-0\">\n                        <div class=\"card-header bg-white pb-5\">\n                            <div class=\"text-muted text-center mb-3\">\n                                <small>Sign up with</small>\n                            </div>\n                            <div class=\"text-center\">\n                                <a (click)=\"signupGoogle()\" class=\"btn btn-neutral btn-icon\">\n                                    <span class=\"btn-inner--icon\"><img src=\"./assets/img/icons/common/google.svg\"></span>\n                                    <span class=\"btn-inner--text\">Google</span>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-body px-lg-5 py-lg-5\">\n                            <div class=\"text-center text-muted mb-4\">\n                                <small>Or sign up with credentials</small>\n                            </div>\n                            <form role=\"form\" ngNativeValidate>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                                    <div class=\"input-group input-group-alternative mb-3\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                                        </div>\n                                        <input #fName=\"ngModel\" class=\"form-control\" name=\"fName\" placeholder=\"First Name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"user.firstName\" required>\n                                    </div>\n                                    <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"fName.errors.required\">\n                                            Firstname is required.\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                                    <div class=\"input-group input-group-alternative mb-3\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                                        </div>\n                                        <input #lName=\"ngModel\" class=\"form-control\" name=\"lName\" placeholder=\"Last Name\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" [(ngModel)]=\"user.lastName\" required/>\n                                    </div>\n                                    <div *ngIf=\"lName.invalid && (lName.dirty || lName.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"lName.errors.required\">\n                                            LastName is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                                    <div class=\"input-group input-group-alternative mb-3\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                                        </div>\n                                        <input #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" class=\"form-control\" name=\"email\" placeholder=\"Email\" type=\"email\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" [(ngModel)]=\"user.userName\" required/>\n                                    </div>\n                                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"email.errors.required\">\n                                            Email is required.\n                                        </div>\n                                        <div *ngIf=\"email.errors.pattern\">\n                                            Email is invalid.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\n                                    <div class=\"input-group input-group-alternative\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                                        </div>\n                                        <input #pass=\"ngModel\" class=\"form-control\" name=\"pass\" placeholder=\"Password\" type=\"password\" (focus)=\"focus3=true\" (blur)=\"focus3=false\" [(ngModel)]=\"password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 and not more than 15 characters\"\n                                            required/>\n                                    </div>\n                                    <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"pass.errors.required\">\n                                            Password is required.\n                                        </div>\n                                        <div *ngIf=\"pass.errors.pattern\">\n                                            Min 1 number, min 1 uppercase and lowercase letter, min 8 and max 15 characters.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\n                                    <div class=\"input-group input-group-alternative\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                                        </div>\n                                        <input #passRe=\"ngModel\" class=\"form-control\" name=\"passRe\" placeholder=\"Re-Type Password\" type=\"password\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" [(ngModel)]=\"Re_password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 and not more than 15 characters\"\n                                            required/>\n                                    </div>\n                                    <div *ngIf=\"passRe.invalid && (passRe.dirty || passRe.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"passRe.errors.required\">\n                                            Re-Type Password is required.\n                                        </div>\n                                        <div *ngIf=\"passRe.errors.pattern\">\n                                            Min 1 number, min 1 uppercase and lowercase letter, min 8 and max 15 characters.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\n                                    <div class=\"input-group input-group-alternative\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"ni ni-settings-gear-65\"></i>{{placeholder}}</span>\n                                        </div>\n                                        <select #secQtn=\"ngModel\" id=\"qtn\" name=\"secQtn\" class=\"form-control\" (click)=\"focus5=!focus5\" [(ngModel)]=\"user.securityQuestion\" required (change)=\"onChange()\">\n                                            <option *ngFor=\"let qtn of allQtns\" [ngValue]=\"qtn\">{{ qtn.question }}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{'focused':focus6===true}\">\n                                    <div class=\"input-group input-group-alternative\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n                                        </div>\n                                        <input #ans=\"ngModel\" class=\"form-control\" name=\"ans\" placeholder=\"Answer\" type=\"text\" (focus)=\"focus6=true\" (blur)=\"focus6=false\" [(ngModel)]=\"user.answer\" required/>\n                                    </div>\n                                    <div *ngIf=\"ans.invalid && (ans.dirty || ans.touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"ans.errors.required\">\n                                            Answer is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"text-danger font-italic\">\n                                    <span class=\"text-danger font-weight-700\">{{passwordError}}</span>\n                                </div>\n                                <div class=\"row my-4\">\n                                    <div class=\"col-12\">\n                                        <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                                            <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\" required />\n                                            <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                        <span>I agree with the\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\n                        </span>\n                      </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"fName.valid && lName.valid && email.valid && pass.valid && passRe.valid && ans.valid\">\n                                    <div class=\"text-center\">\n                                        <button [disabled]=\"created\" type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"signup()\">Create account</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n        <!-- shape Hero -->\n        <section class=\"section section-lg section-shaped pb-250\">\n            <div class=\"shape shape-style-1 shape-default\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <div class=\"py-lg-md\" style=\"text-align: center; padding-left: 50px;\">\n                <p style=\"color: white; font-size: large; font-weight: bold;\">Support us with your love so we can keep improving for you!</p>\n                <input type=\"number\" min=\"1\" max=\"10000\" [(ngModel)]=\"price\"><br><br>\n                <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n            </div>\n            <!-- SVG separator -->\n            <div class=\"separator separator-bottom separator-skew\">\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n            </div>\n        </section>\n        <!-- 1st Hero Variation -->\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/registrationConfirm.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/registrationConfirm.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <section class=\"section section-shaped section-lg\">\r\n        <div class=\"shape shape-style-1 bg-gradient-default\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n        <div class=\"container pt-lg-md\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-5\">\r\n                    <div class=\"card bg-secondary shadow border-0\">\r\n                        <div class=\"card-body px-lg-5 py-lg-5\">\r\n                            <div class=\"text-center\">\r\n                                <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"register()\">Verify account</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        if (st < lastScrollTop && st < navbarHeight) {
            if (st + window.innerHeight < document.body.scrollHeight) {
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var _shared_constants_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/constants.service */ "./src/app/shared/constants.service.ts");
/* harmony import */ var _verification_registrationConfirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./verification/registrationConfirm.component */ "./src/app/verification/registrationConfirm.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_dnd_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./posts/dnd.directive */ "./src/app/posts/dnd.directive.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm5/angularx-social-login.js");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _search_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/popup.component */ "./src/app/search/popup.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/__ivy_ngcc__/fesm5/ngx-paypal.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm5/ng-recaptcha.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
































var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["GoogleLoginProvider"]("827977904723-fvcasgi8cie24p610ep2bcco1nhk0i67.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _verification_registrationConfirm_component__WEBPACK_IMPORTED_MODULE_17__["RegisterConfirmComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_20__["PostsComponent"],
                _posts_dnd_directive__WEBPACK_IMPORTED_MODULE_21__["DndDirective"],
                _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_23__["FavoriteComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_26__["SearchComponent"],
                _search_popup_component__WEBPACK_IMPORTED_MODULE_28__["PopupComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_29__["SupportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["SocialLoginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["NoopAnimationsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_30__["NgxPayPalModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"], _shared_constants_service__WEBPACK_IMPORTED_MODULE_16__["ConstantsService"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_search_popup_component__WEBPACK_IMPORTED_MODULE_28__["PopupComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _verification_registrationConfirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verification/registrationConfirm.component */ "./src/app/verification/registrationConfirm.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    { path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    { path: 'register',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
    },
    { path: 'register/regitrationConfirm/:token',
        component: _verification_registrationConfirm_component__WEBPACK_IMPORTED_MODULE_9__["RegisterConfirmComponent"]
    },
    { path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
    { path: 'landing',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]
    },
    { path: 'forgotPassword',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"]
    },
    { path: 'forgotPassword/reset/:token',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"]
    },
    { path: 'posts',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_12__["PostsComponent"]
    },
    {
        path: 'favorites',
        component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__["FavoriteComponent"]
    },
    {
        path: 'search/:token',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]
    },
    {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_15__["SupportComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/*!*************************************************!*\
  !*** ./src/app/favorite/favorite.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column {\r\n    padding: 20px;\r\n}\r\n\r\n.postValue {\r\n    width: 680px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnBvc3RWYWx1ZSB7XHJcbiAgICB3aWR0aDogNjgwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/*!************************************************!*\
  !*** ./src/app/favorite/favorite.component.ts ***!
  \************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent(apiService, config, authApi, router) {
        this.apiService = apiService;
        this.config = config;
        this.authApi = authApi;
        this.router = router;
        config.interval = 3000;
        config.pauseOnHover = true;
    }
    FavoriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authApi.isLoggedIn()) {
            this.router.navigateByUrl('/');
        }
        this.apiService.getFavorite().subscribe(function (data) {
            if (data.length > 0) {
                _this.noPosts = false;
                _this.userPosts = data;
                _this.userPosts.forEach(function (post) {
                    post.selected = true;
                });
                console.log(_this.userPosts);
            }
            else {
                console.log(_this.noPosts);
                _this.noPosts = true;
            }
        });
    };
    FavoriteComponent.prototype.getImage = function (img) {
        return 'data:image/png;base64,' + img;
    };
    FavoriteComponent.prototype.toggleSelected = function (postData) {
        console.log(postData);
        if (postData.selected == false) {
            this.apiService.addFavorite(postData).subscribe(function (data) {
                if (data == true) {
                    postData.selected = true;
                }
                console.log(data);
            });
        }
        else {
            this.apiService.removeFavorite(postData).subscribe(function (data) {
                if (data == true) {
                    postData.selected = false;
                    window.location.reload();
                }
                console.log(data);
            });
        }
    };
    FavoriteComponent.prototype.bidPost = function (post) {
        if (post.minBid > post.bidAmt) {
            alert("The min bid is " + post.minBid);
        }
        else {
            this.apiService.bidPost(post.id, post.bidAmt).subscribe(function (data) {
                alert("Success");
                window.location.reload();
                console.log(data);
            });
        }
    };
    FavoriteComponent.ctorParameters = function () { return [
        { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] },
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    FavoriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorite',
            template: __importDefault(__webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./favorite.component.css */ "./src/app/favorite/favorite.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authApi) {
        this.authApi = authApi;
        this.security = false;
        this.isNull = false;
        this.wrongAnswer = false;
        this.submitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userName == null) {
            this.isNull = true;
        }
        else {
            this.authApi.getQuestion(this.userName).subscribe(function (data) {
                console.log(data);
                _this.submitted = false;
                _this.securityQuestion = data.question;
                _this.security = true;
            });
        }
    };
    ForgotPasswordComponent.prototype.checkAnswer = function () {
        var _this = this;
        this.wrongAnswer = false;
        if (this.userName == null) {
            this.isNull = true;
        }
        else {
            this.submitted = true;
            var data = new FormData();
            data.append("userName", this.userName);
            data.append("answer", this.answer);
            this.authApi.checkAnswer(data).subscribe(function (res) {
                if (res == false) {
                    _this.wrongAnswer = true;
                    _this.submitted = false;
                }
                else {
                    alert("Email has been sent");
                    window.location.reload();
                }
            });
        }
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"] }
    ]; };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __importDefault(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authApi, router) {
        this.authApi = authApi;
        this.router = router;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authApi.isLoggedIn()) {
            this.router.navigateByUrl('/landing');
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column {\r\n    padding: 20px;\r\n}\r\n\r\n.postValue {\r\n    width: 680px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucG9zdFZhbHVlIHtcclxuICAgIHdpZHRoOiA2ODBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LandingComponent = /** @class */ (function () {
    function LandingComponent(apiService, config, authApi, router) {
        this.apiService = apiService;
        this.config = config;
        this.authApi = authApi;
        this.router = router;
        config.interval = 3000;
        config.pauseOnHover = true;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authApi.isLoggedIn()) {
            this.router.navigateByUrl('/');
        }
        this.apiService.getPosts().subscribe(function (data) {
            if (data.length > 0) {
                _this.noPosts = false;
                _this.userPosts = data;
                _this.userPosts.forEach(function (post) {
                    post.selected = false;
                });
                console.log(_this.userPosts);
            }
            else {
                console.log(_this.noPosts);
                _this.noPosts = true;
            }
        });
    };
    LandingComponent.prototype.getImage = function (img) {
        return 'data:image/png;base64,' + img;
    };
    LandingComponent.prototype.toggleSelected = function (postData) {
        console.log(postData);
        if (postData.selected == false) {
            this.apiService.addFavorite(postData).subscribe(function (data) {
                if (data == true) {
                    postData.selected = true;
                }
                console.log(data);
            });
        }
        else {
            this.apiService.removeFavorite(postData).subscribe(function (data) {
                if (data == true) {
                    postData.selected = false;
                }
                console.log(data);
            });
        }
    };
    LandingComponent.prototype.bidPost = function (post) {
        if (post.minBid > post.bidAmt) {
            alert("The min bid is " + post.minBid);
        }
        else {
            this.apiService.bidPost(post.id, post.bidAmt).subscribe(function (data) {
                alert("Success");
                window.location.reload();
                console.log(data);
            });
        }
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] },
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm5/angularx-social-login.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authApi, authService) {
        this.router = router;
        this.authApi = authApi;
        this.authService = authService;
        this.recaptchaVerified = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response: " + captchaResponse);
        this.recaptchaVerified = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.recaptchaVerified) {
            alert("Please verify reCaptcha!");
            window.location.reload();
        }
        else {
            this.authApi.login(this.userName, this.password).subscribe(function (data) {
                if (_this.authApi.isLoggedIn()) {
                    if (_this.rememberMe) {
                        _this.authApi.rememberUser(_this.userName);
                    }
                    console.log(_this.authApi.getUpdated());
                    if (_this.authApi.getUpdated()) {
                        _this.router.navigateByUrl('/landing');
                    }
                    else {
                        alert("Update your profile.");
                        _this.router.navigateByUrl('/profile');
                    }
                }
                else {
                    alert("Password is incorrect");
                }
            });
        }
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.authApi.loginSocial(userData.email).subscribe(function (data) {
                if (_this.authApi.isLoggedIn()) {
                    if (_this.authApi.getUpdated()) {
                        _this.router.navigateByUrl('/landing');
                    }
                    else {
                        alert("Update your profile.");
                        _this.router.navigateByUrl('/profile');
                    }
                }
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceAPI"] },
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceAPI"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/posts/dnd.directive.ts":
/*!****************************************!*\
  !*** ./src/app/posts/dnd.directive.ts ***!
  \****************************************/
/*! exports provided: DndDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DndDirective = /** @class */ (function () {
    function DndDirective() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dragover listener
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    };
    // Dragleave listener
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    };
    // Drop listener
    DndDirective.prototype.ondrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.fileover'),
        __metadata("design:type", Boolean)
    ], DndDirective.prototype, "fileOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DndDirective.prototype, "fileDropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "ondrop", null);
    DndDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDnd]'
        })
    ], DndDirective);
    return DndDirective;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileContainer {\r\n    width: 450px;\r\n    height: 300px;\r\n    padding: 2rem;\r\n    text-align: center;\r\n    border: dashed 1px #979797;\r\n    position: relative;\r\n    margin: 0 auto;\r\n}\r\n\r\nh3 {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #38424c;\r\n}\r\n\r\n.images {\r\n    margin-left: 150px;\r\n}\r\n\r\n.imgDisplay {\r\n    padding: 10px;\r\n}\r\n\r\n.column {\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM4NDI0YztcclxufVxyXG5cclxuLmltYWdlcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbn1cclxuXHJcbi5pbWdEaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_compressor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/compressor.service */ "./src/app/shared/compressor.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var PostsComponent = /** @class */ (function () {
    function PostsComponent(resizer, apiService, config, authApi, router) {
        var _this = this;
        this.resizer = resizer;
        this.apiService = apiService;
        this.config = config;
        this.authApi = authApi;
        this.router = router;
        this.newPost = false;
        this.posted = false;
        this.maxFiles = '';
        this.files = [];
        this.imgURL = [];
        this.data = { title: '', description: '', minBid: 0 };
        this.uploadData = new FormData();
        this.reader = new FileReader();
        this.recursiveCompress = function (image, index, array) {
            return _this.resizer.compress(image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
                console.log('compressed ' + index + image.name);
                _this.reader.readAsDataURL(response);
                _this.uploadData.append("files", response);
                _this.files.push(response);
                _this.reader.onload = function (ev) {
                    _this.imgURL.push(_this.reader.result);
                };
                return {
                    data: response,
                    index: index + 1,
                    array: array,
                };
            }));
        };
        config.interval = 3000;
        config.pauseOnHover = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authApi.isLoggedIn()) {
            this.router.navigateByUrl('/');
        }
        this.apiService.getPostForUser().subscribe(function (data) {
            if (data.length > 0) {
                _this.noPosts = false;
                console.log(data);
                _this.userPosts = data;
            }
            else {
                _this.noPosts = true;
            }
        });
    };
    PostsComponent.prototype.onFileDropped = function ($event) {
        console.log($event);
        this.prepareFilesList($event);
    };
    PostsComponent.prototype.prepareFilesList = function (files) {
        var _this = this;
        if (this.files.length < 3 && files.length + this.files.length <= 3) {
            var compress = this.recursiveCompress(files[0], 0, files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["expand"])(function (res) {
                return res.index > res.array.length - 1
                    ? rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]
                    : _this.recursiveCompress(files[res.index], res.index, files);
            }));
            compress.subscribe(function (res) {
                if (res.index > res.array.length - 1) {
                    console.log(_this.imgURL);
                }
            });
        }
        else {
            this.maxFiles = 'Maximum 3 files allowed.';
        }
    };
    PostsComponent.prototype.newPostFunction = function () {
        this.newPost = !this.newPost;
    };
    PostsComponent.prototype.post = function () {
        this.posted = true;
        this.uploadData.append("title", this.data.title);
        this.uploadData.append("description", this.data.description);
        this.uploadData.append("minBid", this.data.minBid.toString());
        this.uploadData.append("body", JSON.stringify(this.data));
        this.apiService.newPost(this.uploadData).subscribe(function (data) {
            console.log(data);
            window.location.reload();
        });
    };
    PostsComponent.prototype.getImage = function (img) {
        return 'data:image/png;base64,' + img;
    };
    PostsComponent.ctorParameters = function () { return [
        { type: _shared_compressor_service__WEBPACK_IMPORTED_MODULE_1__["CompressorService"] },
        { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __importDefault(__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_compressor_service__WEBPACK_IMPORTED_MODULE_1__["CompressorService"],
            _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myForm {\n  margin: 0px 100px;\n}\n\n.myImg {\n  height: 200px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcRG9jdW1lbnRzXFxBdXNpZVxcVVFcXFNlbSAxXFxXSVNcXFByb2plY3Qvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Rm9ybSB7XHJcbiAgICBtYXJnaW46IDBweCAxMDBweDtcclxufVxyXG5cclxuLm15SW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn0iLCIubXlGb3JtIHtcbiAgbWFyZ2luOiAwcHggMTAwcHg7XG59XG5cbi5teUltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authApi, router) {
        this.authApi = authApi;
        this.router = router;
        this.user = { userName: '', firstName: '', lastName: '', country: null, phone: null, profileImg: {} };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authApi.isLoggedIn()) {
            this.router.navigateByUrl('/');
        }
        else {
            this.user.userName = this.authApi.getUser();
            this.authApi.getUserDetails(this.user.userName).subscribe(function (data) {
                console.log(data);
                _this.user.firstName = data.firstName;
                _this.user.lastName = data.lastName;
                _this.user.country = data.country != null ? data.country : null;
                _this.user.phone = data.phone != null ? data.phone : null;
                if (data.profileImg != null)
                    _this.imgURL = 'data:image/png;base64,' + data.profileImg.pic;
                else if (data.socialImage != null)
                    _this.imgURL = data.socialImage;
            });
        }
    };
    ProfileComponent.prototype.onFileChange = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        var reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = function (event1) {
            _this.imgURL = reader.result;
        };
    };
    ProfileComponent.prototype.updateProfile = function () {
        var uploadData = new FormData();
        if (this.selectedFile != null) {
            uploadData.append("profileImg", this.selectedFile, this.selectedFile.name);
        }
        else {
            uploadData.append("profileImg", null);
        }
        uploadData.append("userName", this.user.userName);
        uploadData.append("firstName", this.user.firstName);
        uploadData.append("lastName", this.user.lastName);
        uploadData.append("country", this.user.country);
        uploadData.append("phone", this.user.phone);
        console.log(uploadData.get("profileImg"));
        this.authApi.updateUser(uploadData).subscribe(function (data) {
            console.log(data);
            alert("Profile Updated");
            window.location.reload();
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_encode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/encode.service */ "./src/app/shared/encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(authApi, route, router, encryption) {
        this.authApi = authApi;
        this.route = route;
        this.router = router;
        this.encryption = encryption;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.token = param.token;
            _this.authApi.resetPasswordTokenVerify(param.token).subscribe(function (data) {
                _this.user = data;
                console.log(_this.user);
            });
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.password == this.Re_password) {
            var pass = this.encryption.encrypt(this.password);
            console.log(this.encryption.decrypt(this.user.password));
            if (this.encryption.decrypt(this.user.password) == this.password) {
                this.passwordError = "New password cannot be same as old password.";
            }
            else {
                this.user.password = pass;
                this.authApi.resetPassword(this.user, this.token).subscribe(function (res) {
                    alert("Password changed successfully");
                    _this.router.navigateByUrl('/login');
                });
            }
        }
        else {
            this.passwordError = "Password do not match";
        }
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_encode_service__WEBPACK_IMPORTED_MODULE_3__["EncryptService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResetPasswordComponent.prototype, "Re_password", void 0);
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_encode_service__WEBPACK_IMPORTED_MODULE_3__["EncryptService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/search/popup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/search/popup.component.ts ***!
  \*******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PopupComponent = /** @class */ (function () {
    function PopupComponent(post, apiService) {
        this.post = post;
        this.apiService = apiService;
        console.log(post);
        post.selected = false;
    }
    PopupComponent.prototype.getImage = function (img) {
        return 'data:image/png;base64,' + img;
    };
    PopupComponent.prototype.toggleSelected = function (postData) {
        console.log(postData);
        if (postData.selected == false) {
            this.apiService.addFavorite(postData).subscribe(function (data) {
                if (data == true) {
                    postData.selected = true;
                }
                console.log(data);
            });
        }
        else {
            this.apiService.removeFavorite(postData).subscribe(function (data) {
                if (data == true) {
                    postData.selected = false;
                }
                console.log(data);
            });
        }
    };
    PopupComponent.prototype.bidPost = function (post) {
        if (post.minBid > this.bidAmt) {
            alert("The min bid is " + post.minBid);
        }
        else {
            this.apiService.bidPost(post.id, this.bidAmt).subscribe(function (data) {
                alert("Success");
                window.location.reload();
                console.log(data);
            });
        }
    };
    PopupComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
    ]; };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: "  \n    <style>\n    .column {\n        padding: 20px;\n        margin-left: 20px;\n    }\n    .postValue {\n        width: 680px;\n    }\n    </style>\n            <div class=\"row justify-content-center\">\n                <ngb-carousel>\n                    <ng-template ngbSlide *ngFor=\"let img of post.images\">\n                        <img [src]=\"getImage(img.pic)\" alt=\"Image\" height=\"150px\" width=\"150px\">\n                    </ng-template>\n                </ngb-carousel>\n            </div>\n            <div class=\"row\">\n                <div class=\"column justify-content-center\">\n                    <div class=\"row\"><h2>{{post.title}}</h2></div>\n                    <div class=\"row\"><h5>{{post.description}}</h5></div>\n                    <div class=\"row\"><h6>Posted by: {{post.user.firstName}} {{post.user.lastName}}</h6></div>\n                </div>\n                <div class=\"column\">\n                    <button type=\"button\" class=\"btn btn-link\" (click)=\"toggleSelected(post)\">\n                        <span>\n                            <i class=\"fa fa-heart-o\" style=\"color: red; font-size: 24px;\" *ngIf=\"!post.selected\"></i>\n                            <i class=\"fa fa-heart\" style=\"color: red; font-size: 24px;\" *ngIf=\"post.selected\"></i>\n                        </span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <input #bid name=\"bid\" id=\"bid\" type=\"number\" style=\"width: 100px; padding: 8px; margin-bottom: 10px; margin-left: 10px;\" [(ngModel)]=\"bidAmt\" value=\"post.minBid\">\n                <button type=\"button\" class=\"btn btn-success\" style=\"margin-left: 20px;\" (click)=\"bidPost(post)\">\n                    Bid\n                </button>\n            </div>\n    "
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.component */ "./src/app/search/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, restApi, dialog) {
        this.route = route;
        this.restApi = restApi;
        this.dialog = dialog;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param) {
                console.log(param);
                _this.restApi.getSearchResults(param.token).subscribe(function (data) {
                    console.log(data);
                    _this.userPosts = data;
                });
            }
        });
    };
    SearchComponent.prototype.openPopUp = function (post) {
        var dialogRef = this.dialog.open(_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], {
            data: post
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/Questions.ts":
/*!*************************************!*\
  !*** ./src/app/shared/Questions.ts ***!
  \*************************************/
/*! exports provided: Questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Questions = /** @class */ (function () {
    function Questions() {
    }
    return Questions;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthServiceAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceAPI", function() { return AuthServiceAPI; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _remember_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remember.service */ "./src/app/shared/remember.service.ts");
/* harmony import */ var _encode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encode.service */ "./src/app/shared/encode.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants.service */ "./src/app/shared/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var AuthServiceAPI = /** @class */ (function () {
    function AuthServiceAPI(http, enc, remeberService, cookie, constant, router) {
        this.http = http;
        this.enc = enc;
        this.remeberService = remeberService;
        this.cookie = cookie;
        this.constant = constant;
        this.router = router;
        this.COOKIE_NAME = "rememberMe";
        this.SESSION_NAME = "currentUser";
        this.SECRET_KEY = "6LflJ_4UAAAAAATeer1Fx6Au2MRDTqQEscJPtINI";
        this.UPDATED = false;
        this.ISSOCIAL = false;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            })
        };
    }
    AuthServiceAPI.prototype.login = function (uname, pass) {
        var _this = this;
        return this.http.post(this.constant.baseApiUrl + '/login', uname, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            var password = _this.enc.decrypt(user.password);
            if (user && pass == password) {
                sessionStorage.setItem(_this.SESSION_NAME, JSON.stringify(user.userName));
                if (user.country != null && user.phone != null) {
                    _this.UPDATED = true;
                }
                else {
                    _this.router.navigateByUrl('/profile');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User not found.");
                //this.loginVar.loginError = "Username is incorrect";
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User not found');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.loginSocial = function (uname) {
        var _this = this;
        return this.http.post(this.constant.baseApiUrl + '/loginSocial', uname, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                sessionStorage.setItem(_this.SESSION_NAME, JSON.stringify(user.userName));
                _this.ISSOCIAL = true;
                if (user.country != null && user.phone != null) {
                    _this.UPDATED = true;
                }
                else {
                    _this.router.navigateByUrl('/profile');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User not found.");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User not found');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.isLoggedIn = function () {
        if (sessionStorage.getItem(this.SESSION_NAME) || this.loginRememberedUser()) {
            return true;
        }
        return false;
    };
    AuthServiceAPI.prototype.logout = function () {
        if (this.cookie.check(this.COOKIE_NAME)) {
            var id = this.cookie.get(this.COOKIE_NAME);
            this.remeberService.deleteRememberedUser(id);
            this.deleteRememberMeCookie();
        }
        sessionStorage.removeItem(this.SESSION_NAME);
    };
    AuthServiceAPI.prototype.rememberUser = function (username) {
        var id = this.remeberService.rememberUser(username);
        this.cookie.set(this.COOKIE_NAME, id, 60 * 60 * 24 * 30, "/");
    };
    AuthServiceAPI.prototype.loginRememberedUser = function () {
        if (this.cookie.check(this.COOKIE_NAME)) {
            var id = this.cookie.get(this.COOKIE_NAME);
            var username = this.remeberService.getRememberedUser(id);
            if (username != null) {
                sessionStorage.setItem(this.SESSION_NAME, JSON.stringify(username));
                return true;
            }
        }
        return false;
    };
    AuthServiceAPI.prototype.deleteRememberMeCookie = function () {
        this.cookie.delete(this.COOKIE_NAME, "/");
    };
    AuthServiceAPI.prototype.createUser = function (user) {
        console.log(this.constant.baseApiUrl);
        return this.http.post(this.constant.baseApiUrl + '/register', JSON.stringify(user), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User already exists!");
                window.location.reload();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User Exists');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.confirmUser = function (token) {
        var _this = this;
        return this.http.get(this.constant.baseApiUrl + '/register/regitrationConfirm?token=' + token, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
                alert("Invalid Verification token!");
                _this.router.navigateByUrl("/");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid Verification token!');
            }
            else if (error.status === 400) {
                alert("Verification link has expired");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Verification link has expired');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.updateUser = function (upload) {
        return this.http.post(this.constant.baseApiUrl + '/update', upload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    AuthServiceAPI.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem(this.SESSION_NAME));
    };
    AuthServiceAPI.prototype.getUserDetails = function (uname) {
        return this.http.post(this.constant.baseApiUrl + '/login', uname, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User not found.");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User not found');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.getQuestion = function (uname) {
        return this.http.get(this.constant.baseApiUrl + '/getQuestion?uname=' + uname, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User not found");
                window.location.reload();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User Not found');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.checkAnswer = function (data) {
        return this.http.post(this.constant.baseApiUrl + '/checkAnswer', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User not found");
                window.location.reload();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User Not found');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.resetPasswordTokenVerify = function (token) {
        var _this = this;
        return this.http.get(this.constant.baseApiUrl + '/forgotPassword/reset?token=' + token, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
                alert("Invalid Verification token!");
                _this.router.navigateByUrl("/");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid Verification token!');
            }
            else if (error.status === 400) {
                alert("Verification link has expired");
                _this.router.navigateByUrl("/");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Verification link has expired');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.resetPassword = function (user, token) {
        return this.http.post(this.constant.baseApiUrl + '/resetPassword?token=' + token, JSON.stringify(user), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 400) {
                alert("User already exists!");
                window.location.reload();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User Exists');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
            }
        }));
    };
    AuthServiceAPI.prototype.getUpdated = function () {
        return this.UPDATED;
    };
    AuthServiceAPI.prototype.setUpdated = function (b) {
        this.UPDATED = b;
    };
    AuthServiceAPI.prototype.isSocial = function () {
        return this.ISSOCIAL;
    };
    AuthServiceAPI.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _encode_service__WEBPACK_IMPORTED_MODULE_5__["EncryptService"] },
        { type: _remember_service__WEBPACK_IMPORTED_MODULE_4__["RememberMeService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
        { type: _constants_service__WEBPACK_IMPORTED_MODULE_7__["ConstantsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AuthServiceAPI = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _encode_service__WEBPACK_IMPORTED_MODULE_5__["EncryptService"],
            _remember_service__WEBPACK_IMPORTED_MODULE_4__["RememberMeService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_7__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AuthServiceAPI);
    return AuthServiceAPI;
}());



/***/ }),

/***/ "./src/app/shared/compressor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/compressor.service.ts ***!
  \**********************************************/
/*! exports provided: CompressorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompressorService", function() { return CompressorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CompressorService = /** @class */ (function () {
    function CompressorService() {
    }
    CompressorService.prototype.compress = function (file) {
        var width = 100;
        var height = 100;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            reader.onload = function (ev) {
                var img = new Image();
                img.src = ev.target.result;
                (img.onload = function () {
                    var elem = document.createElement('canvas');
                    elem.width = width;
                    elem.height = height;
                    var ctx = elem.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.canvas.toBlob(function (blob) {
                        observer.next(new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now(),
                        }));
                    }, 'image/jpeg', 1);
                }),
                    (reader.onerror = function (error) { return observer.error(error); });
            };
        });
    };
    CompressorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CompressorService);
    return CompressorService;
}());



/***/ }),

/***/ "./src/app/shared/constants.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/constants.service.ts ***!
  \*********************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
        this.baseAppUrl = 'http://35.225.246.52:4200';
        this.baseApiUrl = 'http://35.225.246.52:8080';
        this.key = "bider password encryption";
        this.questions = [
            {
                "id": "084b918e-15cd-49ca-8d4b-80257860432b",
                "question": "What is your mother's maiden name?",
                "shortName": "maidenName"
            },
            {
                "id": "0d40a4ea-1cb9-4abf-9252-31528fc4c07e",
                "question": "Where was your best family vacation as a kid?",
                "shortName": "vacationName"
            },
            {
                "id": "3d6e415a-88ff-4467-af92-1b512229dca3",
                "question": "Where were you born?",
                "shortName": "birthPlace"
            },
            {
                "id": "573e6cd5-49f6-44c9-8412-47c9664028d4",
                "question": "What is your first pet's name?",
                "shortName": "petName"
            },
            {
                "id": "72a8916e-7dd2-4194-866e-9bcc20a66908",
                "question": "What is your childhood nickname?",
                "shortName": "nickName"
            },
            {
                "id": "9c789c5d-e7ce-4f44-9e47-72a9e7917874",
                "question": "Who was your childhood hero?",
                "shortName": "heroName"
            },
            {
                "id": "bed4c381-e4d8-49c3-a91e-43bf53469e65",
                "question": "What was your first car?",
                "shortName": "firstCar"
            },
            {
                "id": "c57443e8-a21d-4b11-aeca-23f63d112a9b",
                "question": "What is your favourite hobby?",
                "shortName": "hobbyName"
            },
            {
                "id": "c5d26eca-9b2c-46b0-ba73-50f615bbe67b",
                "question": "What elementary school did you attend?",
                "shortName": "schoolName"
            }
        ];
    }
    ConstantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/app/shared/encode.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/encode.service.ts ***!
  \******************************************/
/*! exports provided: EncryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptService", function() { return EncryptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.service */ "./src/app/shared/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EncryptService = /** @class */ (function () {
    function EncryptService(constant) {
        this.constant = constant;
    }
    EncryptService.prototype.encrypt = function (text) {
        var encText = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(text, this.constant.key);
        return encText.toString();
    };
    EncryptService.prototype.decrypt = function (text) {
        var encText = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(text, this.constant.key);
        return encText.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    };
    EncryptService.ctorParameters = function () { return [
        { type: _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"] }
    ]; };
    EncryptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]])
    ], EncryptService);
    return EncryptService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm5/angularx-social-login.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/shared/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router, authApi, authService, restApi) {
        this.location = location;
        this.router = router;
        this.authApi = authApi;
        this.authService = authService;
        this.restApi = restApi;
        this.isCollapsed = true;
        this.yScrollStack = [];
        this.titles = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        if (this.authApi.isLoggedIn()) {
            this.restApi.getTitles().subscribe(function (data) {
                _this.titles = data;
            });
        }
    };
    NavbarComponent.prototype.logout = function () {
        if (this.authApi.isLoggedIn()) {
            this.authApi.logout();
            if (this.authApi.isSocial()) {
                this.authService.signOut();
            }
            this.router.navigateByUrl('');
        }
    };
    NavbarComponent.prototype.filterTitleValue = function (searchValue) {
        var _this = this;
        this.filterValue = searchValue.toLowerCase();
        this.filteredTitle = this.titles.filter(function (option) { return option.toLowerCase().includes(_this.filterValue); });
    };
    NavbarComponent.prototype.searchButton = function (searchValue) {
        this.router.navigateByUrl('/search/' + searchValue);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceAPI"] },
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceAPI"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/remember.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/remember.service.ts ***!
  \********************************************/
/*! exports provided: RememberMeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RememberMeService", function() { return RememberMeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.service */ "./src/app/shared/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RememberMeService = /** @class */ (function () {
    function RememberMeService(constant) {
        this.constant = constant;
    }
    RememberMeService.prototype.rememberUser = function (username) {
        var random = Math.random().toString();
        localStorage.setItem(random, username);
        return random;
    };
    RememberMeService.prototype.getRememberedUser = function (id) {
        return localStorage.getItem(id);
    };
    RememberMeService.prototype.deleteRememberedUser = function (id) {
        localStorage.removeItem(id);
    };
    RememberMeService.ctorParameters = function () { return [
        { type: _constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"] }
    ]; };
    RememberMeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"]])
    ], RememberMeService);
    return RememberMeService;
}());



/***/ }),

/***/ "./src/app/shared/rest-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/rest-api.service.ts ***!
  \********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.service */ "./src/app/shared/constants.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RestApiService = /** @class */ (function () {
    function RestApiService(http, constant) {
        this.http = http;
        this.constant = constant;
        this.COOKIE_NAME = "rememberMe";
        this.SESSION_NAME = "currentUser";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    RestApiService.prototype.newPost = function (data) {
        return this.http.post(this.constant.baseApiUrl + '/post/newPost?user=' + this.getUser(), data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.getPostForUser = function () {
        return this.http.get(this.constant.baseApiUrl + "/post/userPosts?user=" + this.getUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.getPosts = function () {
        return this.http.get(this.constant.baseApiUrl + "/post/posts?user=" + this.getUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem(this.SESSION_NAME));
    };
    RestApiService.prototype.addFavorite = function (postData) {
        return this.http.post(this.constant.baseApiUrl + '/favoritePost?user=' + this.getUser(), postData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.removeFavorite = function (postData) {
        return this.http.post(this.constant.baseApiUrl + '/deleteFavoritePost?user=' + this.getUser(), postData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.getFavorite = function () {
        return this.http.get(this.constant.baseApiUrl + '/favorites?user=' + this.getUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.getTitles = function () {
        return this.http.get(this.constant.baseApiUrl + '/post/titles?user=' + this.getUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.getSearchResults = function (search) {
        return this.http.get(this.constant.baseApiUrl + '/post/search?user=' + this.getUser() + '&search=' + search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.prototype.bidPost = function (postId, bidAmt) {
        return this.http.get(this.constant.baseApiUrl + '/post/bid?user=' + this.getUser() + '&postId=' + postId + '&bidAmt=' + bidAmt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('backend comm error');
        }));
    };
    RestApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"] }
    ]; };
    RestApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/encode.service */ "./src/app/shared/encode.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _shared_Questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Questions */ "./src/app/shared/Questions.ts");
/* harmony import */ var _shared_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants.service */ "./src/app/shared/constants.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm5/angularx-social-login.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(authApi, encryption, constant, authService, router) {
        this.authApi = authApi;
        this.encryption = encryption;
        this.constant = constant;
        this.authService = authService;
        this.router = router;
        this.placeholder = " Select security question";
        this.created = false;
        this.user = { userName: '', password: '', firstName: '', lastName: '', securityQuestion: new _shared_Questions__WEBPACK_IMPORTED_MODULE_3__["Questions"], answer: '', social: false, socialImage: null };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.allQtns = this.constant.questions;
    };
    SignupComponent.prototype.onChange = function () {
        this.placeholder = "";
    };
    SignupComponent.prototype.signup = function () {
        if (this.password === this.Re_password) {
            this.created = true;
            this.user.password = this.encryption.encrypt(this.password);
            console.log(this.user);
            console.log(JSON.stringify(this.user));
            console.log(this.constant.baseApiUrl);
            this.authApi.createUser(this.user).subscribe(function (data) {
                console.log(data);
                alert("Please verify the email to complete registration.");
                window.location.reload();
            });
        }
        else {
            this.passwordError = "Password do not match";
        }
    };
    SignupComponent.prototype.signupGoogle = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            console.log(userData);
            _this.user.firstName = userData.firstName;
            _this.user.lastName = userData.lastName;
            _this.user.userName = userData.email;
            _this.user.social = true;
            _this.user.socialImage = userData.photoUrl;
            _this.user.securityQuestion.id = "c5d26eca-9c2c-46c0-ca73-50f615cce67c";
            _this.user.securityQuestion.question = "Google Account";
            _this.user.securityQuestion.shortName = "google";
            _this.authApi.createUser(_this.user).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("currentUser", JSON.stringify(data.userName));
                _this.authApi.ISSOCIAL = true;
                if (data.country != null && data.phone != null) {
                    _this.authApi.setUpdated(true);
                }
                _this.router.navigateByUrl('/profile');
            });
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceAPI"] },
        { type: _shared_encode_service__WEBPACK_IMPORTED_MODULE_1__["EncryptService"] },
        { type: _shared_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] },
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "Re_password", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "password", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceAPI"],
            _shared_encode_service__WEBPACK_IMPORTED_MODULE_1__["EncryptService"],
            _shared_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
        this.price = '1';
    }
    SupportComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    SupportComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: 'AUD',
            clientId: 'AU4HzCjN1Gh9wtU8HHImcJC-YgjpDHXEtC2NNuwZYySnOTWhTKwt-M_ooduWJO1xivfdajSGvQRlFZxI',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'AUD',
                            value: _this.price
                        }
                    }
                ]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(function (details) {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: function (data) {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                //this.showSuccess = true;
            },
            onCancel: function (data, actions) {
                console.log('OnCancel', data, actions);
            },
            onError: function (err) {
                console.log('OnError', err);
            },
            onClick: function (data, actions) {
                console.log(_this.price);
                console.log('onClick', data, actions);
            },
        };
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __importDefault(__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/verification/registrationConfirm.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/verification/registrationConfirm.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi9yZWdpc3RyYXRpb25Db25maXJtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/verification/registrationConfirm.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/verification/registrationConfirm.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterConfirmComponent", function() { return RegisterConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var RegisterConfirmComponent = /** @class */ (function () {
    function RegisterConfirmComponent(authApi, route, router) {
        this.authApi = authApi;
        this.route = route;
        this.router = router;
    }
    RegisterConfirmComponent.prototype.ngOnInit = function () {
    };
    RegisterConfirmComponent.prototype.register = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.authApi.confirmUser(param.token).subscribe(function (data) {
                console.log(JSON.stringify(data));
                alert("Account verified");
                _this.router.navigateByUrl('/profile');
            });
        });
    };
    RegisterConfirmComponent.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceAPI"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    RegisterConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-confirm',
            template: __importDefault(__webpack_require__(/*! raw-loader!./registrationConfirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/registrationConfirm.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./registrationConfirm.component.scss */ "./src/app/verification/registrationConfirm.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceAPI"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterConfirmComponent);
    return RegisterConfirmComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Argon Design System Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Ausie\UQ\Sem 1\WIS\Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map