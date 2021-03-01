(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["particlejs"] = factory();
	else
		root["particlejs"] = factory();
})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
		/******/   // The module cache
		/******/   var installedModules = {};
		/******/
		/******/   // The require function
		/******/   function __webpack_require__(moduleId) {
			/******/
			/******/     // Check if module is in cache
			/******/     if(installedModules[moduleId]) {
				/******/       return installedModules[moduleId].exports;
				/******/     }
			/******/     // Create a new module (and put it into the cache)
			/******/     var module = installedModules[moduleId] = {
				/******/       i: moduleId,
				/******/       l: false,
				/******/       exports: {}
				/******/     };
			/******/
			/******/     // Execute the module function
			/******/     modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/     // Flag the module as loaded
			/******/     module.l = true;
			/******/
			/******/     // Return the exports of the module
			/******/     return module.exports;
			/******/   }
		/******/
		/******/
		/******/   // expose the modules object (__webpack_modules__)
		/******/   __webpack_require__.m = modules;
		/******/
		/******/   // expose the module cache
		/******/   __webpack_require__.c = installedModules;
		/******/
		/******/   // define getter function for harmony exports
		/******/   __webpack_require__.d = function(exports, name, getter) {
			/******/     if(!__webpack_require__.o(exports, name)) {
				/******/       Object.defineProperty(exports, name, {
					/******/         configurable: false,
					/******/         enumerable: true,
					/******/         get: getter
					/******/       });
				/******/     }
			/******/   };
		/******/
		/******/   // define __esModule on exports
		/******/   __webpack_require__.r = function(exports) {
			/******/     Object.defineProperty(exports, '__esModule', { value: true });
			/******/   };
		/******/
		/******/   // getDefaultExport function for compatibility with non-harmony modules
		/******/   __webpack_require__.n = function(module) {
			/******/     var getter = module && module.__esModule ?
				/******/       function getDefault() { return module['default']; } :
				/******/       function getModuleExports() { return module; };
			/******/     __webpack_require__.d(getter, 'a', getter);
			/******/     return getter;
			/******/   };
		/******/
		/******/   // Object.prototype.hasOwnProperty.call
		/******/   __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
		/******/
		/******/   // __webpack_public_path__
		/******/   __webpack_require__.p = "";
		/******/
		/******/
		/******/   // Load entry module and return exports
		/******/   return __webpack_require__(__webpack_require__.s = 1);
		/******/ })
		/************************************************************************/
		/******/ ([
			/* 0 */
			/***/ (function(module, __webpack_exports__, __webpack_require__) {

				"use strict";
				__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/asset-shapes.ts
				/**
				 * 銈偦銉冦儓銈掑惈銈€銈儢銈搞偋銈儓銇с仚銆傘亾銇偗銉┿偣銇皢鏉ュ鏇淬仚銈嬪彲鑳芥€с亴楂樸亜銇仹 deprecated 銇ㄣ仐銇俱仚銆�
				 * 鍒╃敤銇椼仾銇勩仹銇忋仩銇曘亜銆�
				 * @type {{}}
				 */
				var Assets = {};
				var asset_shapes_images = {};
				var asset_shapes_createjs = window["createjs"];
				var ss = {};
				(function (lib, img, cjs, ss) {
					var p; // shortcut to reference prototypes
					// library properties:
					lib.properties = {
						width: 550,
						height: 400,
						fps: 24,
						color: "#999999",
						manifest: []
					};
					// symbols:
					(lib.triangle = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(-0.7, -27.8)
							.lineTo(32, 27.1)
							.lineTo(-32, 27.8)
							.closePath();
						this.shape.setTransform(0, -7);
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -34.8, 64, 55.7);
					(lib.star_10 = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(-4.3, 18.3)
							.lineTo(-19.9, 29.3)
							.lineTo(-14.1, 10.3)
							.lineTo(-32, 10.3)
							.lineTo(-19.7, 0.7)
							.lineTo(-31.2, -8.7)
							.lineTo(-15.2, -8.8)
							.lineTo(-21.7, -26.4)
							.lineTo(-5.4, -16.4)
							.lineTo(-0.2, -31.8)
							.lineTo(4.4, -17.6)
							.lineTo(17.8, -27.4)
							.lineTo(13.1, -8.5)
							.lineTo(30.3, -8.1)
							.lineTo(19.9, 0.1)
							.lineTo(32, 8.4)
							.lineTo(12.8, 9.5)
							.lineTo(18.2, 29.8)
							.lineTo(4.9, 20)
							.lineTo(1.4, 31.8)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -31.7, 64, 63.6);
					(lib.star = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(-0.2, 17.3)
							.lineTo(-20.2, 31.5)
							.lineTo(-13, 7.4)
							.lineTo(-32, -8)
							.lineTo(-7.8, -8.4)
							.lineTo(0.3, -32)
							.lineTo(8, -8.2)
							.lineTo(32, -7.4)
							.lineTo(12.8, 7.5)
							.lineTo(19.4, 32)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);
					(lib.square = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill()
							.beginStroke("#FFFFFF")
							.setStrokeStyle(8, 1, 1)
							.moveTo(-32, -32)
							.lineTo(32, -32)
							.lineTo(32, 32)
							.lineTo(-32, 32)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-36, -36, 72, 72);
					(lib.reverse_blur_circle = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill()
							.beginStroke("#FFFFFF")
							.setStrokeStyle(8, 1, 1)
							.moveTo(32, 0)
							.curveTo(32, 13.2, 22.6, 22.6)
							.curveTo(13.3, 32, 0, 32)
							.curveTo(-13.2, 32, -22.7, 22.6)
							.curveTo(-32, 13.2, -32, 0)
							.curveTo(-32, -13.3, -22.7, -22.7)
							.curveTo(-13.2, -32, 0, -32)
							.curveTo(13.3, -32, 22.6, -22.7)
							.curveTo(32, -13.3, 32, 0)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-36, -36, 72, 72);
					(lib.kirakira2 = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(-4, 9.5)
							.curveTo(-7.8, 0, -13.4, -0.1)
							.curveTo(-7.8, -0.2, -4, -9.9)
							.curveTo(-0.1, -19.2, 0, -32)
							.curveTo(0.1, -19.2, 4, -9.9)
							.curveTo(8, -0.2, 13.4, -0.1)
							.curveTo(8, 0, 4, 9.5)
							.curveTo(0.1, 19, 0, 32)
							.curveTo(-0.1, 19, -4, 9.5)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-13.4, -32, 26.8, 64);
					(lib.kirakira = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(-9.6, 9.3)
							.curveTo(-18.9, 0, -32, -0.1)
							.curveTo(-18.9, -0.2, -9.6, -9.6)
							.curveTo(-0.2, -19, -0.1, -32)
							.curveTo(0, -19, 9.4, -9.6)
							.curveTo(18.9, -0.2, 32, -0.1)
							.curveTo(18.9, 0, 9.4, 9.3)
							.curveTo(0, 18.8, -0.1, 32)
							.curveTo(-0.2, 18.8, -9.6, 9.3)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);
					(lib.heart = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(-20.2, 10)
							.lineTo(-24.8, 3.5)
							.curveTo(-27, 0.1, -28.5, -3.1)
							.curveTo(-30.1, -6.4, -31.1, -9.5)
							.curveTo(-32, -13, -32, -16)
							.curveTo(-32, -19.7, -30.4, -22.7)
							.curveTo(-29.1, -25.4, -26.6, -27.4)
							.curveTo(-24, -29.1, -21, -30.1)
							.curveTo(-18.1, -31.1, -15, -31.1)
							.curveTo(-11.7, -31.1, -8.8, -29.9)
							.curveTo(-6.4, -29, -4.5, -27.4)
							.curveTo(-3, -25.9, -1.7, -23.9)
							.lineTo(0, -20.8)
							.lineTo(1.7, -23.9)
							.curveTo(3, -25.9, 4.5, -27.4)
							.curveTo(6.6, -29.1, 8.8, -29.9)
							.curveTo(11.7, -31.1, 15.2, -31.1)
							.curveTo(18.4, -31.1, 21.3, -30.1)
							.curveTo(24.2, -29.1, 26.7, -27.2)
							.curveTo(29.1, -25.3, 30.5, -22.6)
							.curveTo(32, -19.7, 32, -16.1)
							.curveTo(32, -13.3, 31, -9.7)
							.curveTo(30.2, -6.5, 28.5, -3.2)
							.curveTo(27.1, 0, 24.9, 3.3)
							.lineTo(20.3, 9.7)
							.curveTo(13.4, 17.7, 9.7, 21.6)
							.lineTo(0, 31)
							.curveTo(-13.6, 18.3, -20.2, 10)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -31, 64, 62.1);
					(lib.flower = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.moveTo(4, 27.3)
							.curveTo(0.5, 23.7, 0.5, 18.9)
							.lineTo(0.5, 15.2)
							.lineTo(-0.5, 15.2)
							.lineTo(-0.7, 18.9)
							.curveTo(-0.9, 24, -4.1, 27.6)
							.curveTo(-7.4, 31.1, -12.1, 31.1)
							.curveTo(-17, 31.1, -20.8, 27.5)
							.curveTo(-24.7, 23.7, -24.7, 19.1)
							.curveTo(-24.7, 15.3, -22.2, 12.1)
							.curveTo(-19.7, 8.8, -16.1, 7.7)
							.lineTo(-12.5, 6.4)
							.lineTo(-12.7, 5.8)
							.lineTo(-13, 5.4)
							.lineTo(-16.5, 6.6)
							.lineTo(-20.2, 7.1)
							.curveTo(-25.3, 7.1, -28.7, 4)
							.curveTo(-32, 0.7, -32, -4.1)
							.curveTo(-32, -9.4, -28.7, -13)
							.curveTo(-25.5, -16.8, -20.6, -16.8)
							.curveTo(-17.8, -16.8, -15, -15.4)
							.curveTo(-12.2, -14, -10.5, -11.6)
							.lineTo(-8.4, -8.7)
							.lineTo(-8, -8.8)
							.lineTo(-7.4, -9.3)
							.lineTo(-9.6, -12.2)
							.curveTo(-10.7, -14, -11.3, -15.8)
							.curveTo(-11.9, -17.9, -12, -19.9)
							.curveTo(-12, -24.7, -8.5, -28)
							.curveTo(-5.3, -31.1, -0.1, -31.1)
							.curveTo(5.2, -31.1, 8.5, -28)
							.curveTo(11.7, -24.7, 11.8, -19.9)
							.curveTo(11.7, -17.7, 11.2, -15.7)
							.curveTo(10.7, -13.8, 9.5, -12.2)
							.lineTo(7.4, -9.3)
							.lineTo(7.8, -9)
							.lineTo(8.2, -8.7)
							.lineTo(10.5, -11.6)
							.curveTo(12.2, -14, 14.8, -15.4)
							.curveTo(17.6, -16.8, 20.4, -16.8)
							.curveTo(25.3, -16.8, 28.5, -13)
							.curveTo(32, -9.4, 32, -4.1)
							.curveTo(32, 0.8, 28.5, 4)
							.curveTo(25.3, 7.1, 20, 7.1)
							.lineTo(16.4, 6.6)
							.lineTo(12.9, 5.5)
							.curveTo(12.8, 5.6, 12.8, 5.6)
							.curveTo(12.7, 5.7, 12.7, 5.7)
							.curveTo(12.7, 5.8, 12.7, 5.8)
							.curveTo(12.7, 5.9, 12.7, 6)
							.lineTo(12.5, 6.4)
							.lineTo(15.9, 7.7)
							.curveTo(19.7, 9.1, 22.1, 12.2)
							.curveTo(24.5, 15.3, 24.5, 19.1)
							.curveTo(24.5, 23.7, 20.8, 27.5)
							.curveTo(16.9, 31.1, 11.9, 31.1)
							.curveTo(7.4, 31.1, 4, 27.3)
							.closePath()
							.moveTo(-7.7, -5.9)
							.curveTo(-10.9, -2.7, -10.9, 1.8)
							.curveTo(-10.9, 6.3, -7.7, 9.4)
							.curveTo(-4.6, 12.5, -0.1, 12.5)
							.curveTo(4.4, 12.5, 7.6, 9.4)
							.curveTo(10.6, 6.3, 10.6, 1.8)
							.curveTo(10.6, -2.7, 7.6, -5.9)
							.curveTo(4.4, -9, -0.1, -9)
							.curveTo(-4.6, -9, -7.7, -5.9)
							.closePath();
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -31, 64, 62.2);
					(lib.circle = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginFill("#FFFFFF")
							.beginStroke()
							.drawEllipse(-10.8, -10.8, 21.7, 21.7);
						this.shape.setTransform(0, 0, 2.949, 2.949);
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);
					(lib.blur_circle = function () {
						this.initialize();
						// 銉偆銉ゃ兗 1
						this.shape = new cjs.Shape();
						this.shape.graphics
							.beginRadialGradientFill(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], 0, 0, 0, 0, 0, 11)
							.beginStroke()
							.drawEllipse(-10.8, -10.8, 21.7, 21.7);
						this.shape.setTransform(0, 0, 3, 3);
						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-32.5, -32.5, 65.1, 65.1);

					(lib.sakura1 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(26.4,13.9)
							.bezierCurveTo(26.5,11.8,26.3,9.5,25.7,7)
							.bezierCurveTo(24.6,1.7,22.5,1.3,21.1,0.6)
							.bezierCurveTo(19.1,-0.5,16.9,-0.3,15.6,1.6)
							.bezierCurveTo(11.7,7.3,11.7,15.9,12.9,22.6)
							.bezierCurveTo(13.3,25.3,13.4,27.7,13.2,29.7)
							.bezierCurveTo(12.8,30,12.4,30.4,12,30.7)
							.bezierCurveTo(7,34.8,2.7,37.2,2.7,37.2)
							.bezierCurveTo(2.7,37.2,-2.1,41.5,1,41.2)
							.bezierCurveTo(2.6,41.1,5.1,41.9,7.9,42)
							.bezierCurveTo(10.7,42.1,13.7,41.6,16.3,39)
							.bezierCurveTo(18.9,36.4,21.6,32,23.7,27.3)
							.bezierCurveTo(25.6,22.8,26.8,18.1,26.4,13.9)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura2 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(2.2,39.4)
							.bezierCurveTo(5.8,39.8,10.6,36.3,13.2,34.1)
							.bezierCurveTo(17.6,30.2,21.9,26.2,26.6,22.5)
							.bezierCurveTo(33.6,16.9,32.8,6.7,29,3.1)
							.bezierCurveTo(21.7,-3.7,9.8,2.1,5,8.9)
							.bezierCurveTo(1.6,13.7,0.01,19.5,0,25.3)
							.bezierCurveTo(0,26.7,0.4,39.2,2.2,39.4)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura3 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(35.3,5.4)
							.bezierCurveTo(35.3,5.3,35.3,5.2,35.3,5.2)
							.bezierCurveTo(35.3,5.2,35.3,5.1,35.3,5.1)
							.bezierCurveTo(35.3,4.1,35,3.2,34.6,2.5)
							.bezierCurveTo(34.6,2.4,34.5,2.4,34.5,2.3)
							.bezierCurveTo(34.5,2.3,34.5,2.3,34.5,2.3)
							.bezierCurveTo(33.9,1.4,33.1,0.7,32.2,0.4)
							.bezierCurveTo(26.9,-1.7,19.8,3.8,16.6,7.5)
							.bezierCurveTo(10.7,14.4,9.3,22.8,5.9,31)
							.bezierCurveTo(3.7,36.2,0.3,40.8,0.3,40.8)
							.bezierCurveTo(-1.2,42.4,2.3,41.8,7,38.1)
							.bezierCurveTo(9,36.6,12.5,33.7,16.2,30.7)
							.bezierCurveTo(20.1,27.5,24.1,24.1,26.1,21.9)
							.bezierCurveTo(30.3,17.5,32.9,13.8,34.3,10.6)
							.bezierCurveTo(35.1,8.7,35.4,7,35.3,5.4)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura4 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(4.4,0.9)
							.bezierCurveTo(9.4,3,13.6,4.2,16.8,6.8)
							.bezierCurveTo(28.9,17,26.9,22.7,25.1,25.9)
							.bezierCurveTo(22.8,29.9,7.9,31,4.2,16.5)
							.bezierCurveTo(3.3,13,2.7,8.6,0.5,3.1)
							.bezierCurveTo(-1.2,-1.1,1.8,-0.2,4.4,0.9)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura5 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(52.9,2.7)
							.bezierCurveTo(50.9,-1,44.7,0.2,41.4,0.4)
							.bezierCurveTo(36.9,0.7,31.4,1.3,26.2,1.9)
							.bezierCurveTo(21,2.4,14.5,2.6,9.2,2.9)
							.lineTo(0,3.3)
							.bezierCurveTo(4.7,8.8,9.6,12.2,14.7,14.3)
							.bezierCurveTo(19.8,16.4,25,17.1,30,16.9)
							.bezierCurveTo(35,16.7,39.9,15.6,43.9,14)
							.bezierCurveTo(47.3,12.6,50.2,10.9,52.2,8.9)
							.bezierCurveTo(54,7.9,54.8,6.1,52.9,2.7)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura6 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(1.2,0)
							.bezierCurveTo(4.5,0,12.8,0.4,21,2.4)
							.bezierCurveTo(28.2,4.1,41,8,40.1,17.6)
							.bezierCurveTo(40.1,17.9,40,18.1,39.8,18.3)
							.bezierCurveTo(39.6,18.4,39.4,18.4,39.3,18.4)
							.bezierCurveTo(37.6,18.4,36.4,19.1,34.7,18.5)
							.bezierCurveTo(30.2,16.8,24.9,13.1,19.5,9.9)
							.bezierCurveTo(14.1,6.6,8.7,3.7,4.8,2.9)
							.bezierCurveTo(-3.1,1.5,1.2,0,1.2,0)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura7 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(3.2,9.7)
							.bezierCurveTo(6.1,12.7,19.8,23.1,31.2,25.2)
							.bezierCurveTo(33.9,25.7,40.8,25.4,43.3,23.4)
							.bezierCurveTo(45.5,21.7,46.2,16.4,45.6,13.7)
							.bezierCurveTo(44.8,10.2,38.5,0.299999999999999,28.6,0)
							.bezierCurveTo(22.2,-0.2,12.2,2.1,9.4,3.3)
							.bezierCurveTo(6.6,4.4,2.8,3.2,1,3.3)
							.bezierCurveTo(-1.5,3.4,1.2,7.7,3.2,9.7)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura8 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(15.5,0)
							.bezierCurveTo(13.5,0.2,10.6,3.9,7.8,8.1)
							.bezierCurveTo(5,12.3,2.3,17,1.1,19.6)
							.bezierCurveTo(-0.0999999999999999,22.3,-0.2,25.7,0.3,28.8)
							.bezierCurveTo(0.8,31.9,1.8,34.8,2.9,36.2)
							.bezierCurveTo(5,38.9,9.9,39,12.8,39.7)
							.bezierCurveTo(17.2,40.7,21.3,36.1,23.5,32.9)
							.bezierCurveTo(26.9,28,26.8,24.6,25.3,19.1)
							.bezierCurveTo(24.3,15.5,23,11.7,21.7,9.40000000000001)
							.bezierCurveTo(19.3,4.9,16.5,-0.1,15.5,0)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura9 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(26.5,22.3)
							.bezierCurveTo(18.6,28.2,10.7,31.9,2.4,27.7)
							.bezierCurveTo(-0.2,26.4,-1,17.5,1.6,14.3)
							.bezierCurveTo(4.2,11.1,7.9,7.9,13.4,6)
							.bezierCurveTo(24.4,2.2,28.5,7.9,33.4,1.7)
							.bezierCurveTo(36.1,-1.8,37.2,0.6,36.7,4.2)
							.bezierCurveTo(36.5,5.9,32,18.2,26.5,22.3)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura10 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(6.9,3.3)
							.bezierCurveTo(3.3,6,0,11.5,0,16.3)
							.bezierCurveTo(0,32.1,8.7,29,20.3,24.6)
							.bezierCurveTo(33,19.8,40.8,22.2,40.8,22.2)
							.bezierCurveTo(40.8,22.2,42.2,21.9,41.5,20.7)
							.bezierCurveTo(41.5,20.7,40.6,17.9,38.9,14.4)
							.bezierCurveTo(34.7,6,29.7,2.6,21.3,0.5)
							.bezierCurveTo(15.8,-0.8,10.4,0.6,6.9,3.3)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura11 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(28.4,24.2)
							.bezierCurveTo(26.4,24.9,28,21,22.1,19.3)
							.bezierCurveTo(18.3,18.2,12.2,20.2,8.5,18.6)
							.bezierCurveTo(3.4,16.2,1,14,0.2,10.1)
							.bezierCurveTo(-0.9,4.3,2.2,1.7,3.8,0.9)
							.bezierCurveTo(6.9,-0.6,11.8,-0.3,15.4,2.2)
							.bezierCurveTo(20.7,5.8,26.4,13.3,28.7,19.5)
							.bezierCurveTo(30.3,23.4,29.3,23.9,28.4,24.2)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura12 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(8.5,1)
							.bezierCurveTo(11.3,3,14.8,9.9,15.8,12.2)
							.bezierCurveTo(18.6,18.6,19.5,20.4,21.5,22.6)
							.bezierCurveTo(23.5,24.9,20.3,25.8,15.6,22.3)
							.bezierCurveTo(13.2,20.6,10.3,17.9,7.6,15)
							.bezierCurveTo(4.9,12,2.4,8.8,0.7,5.7)
							.bezierCurveTo(-2.5,-0.4,5.7,-1,8.5,1)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					(lib.sakura13 = function() {
						this.initialize();

						this.shape = new cjs.Shape();
						this.shape.graphics.beginFill("#FFFFFF")
							.moveTo(27.2,29.6)
							.bezierCurveTo(23.7,28.8,18.2,28.1,12.9,25.8)
							.bezierCurveTo(7.7,23.4,2.7,19.5,0.8,13.1)
							.bezierCurveTo(-1.1,6.5,0,0.1,8.3,0)
							.bezierCurveTo(13,-0.1,15.2,0.8,18.6,4.2)
							.bezierCurveTo(22.4,8,26.2,14.1,29,24)
							.bezierCurveTo(29.2,26.1,31,30.4,27.2,29.6)
							.closePath();

						this.addChild(this.shape);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

					// stage content:
					(lib.assetshapes = function () {
						this.initialize();
						// triangle
						this.instance = new lib.triangle();
						this.instance.setTransform(323.6, 39.6);
						// square
						this.instance_1 = new lib.square();
						this.instance_1.setTransform(518, 151.5);
						// kirakira2
						this.instance_2 = new lib.kirakira2();
						this.instance_2.setTransform(420.8, 32.6);
						// kirakira
						this.instance_3 = new lib.kirakira();
						this.instance_3.setTransform(32, 151.5);
						// flower
						this.instance_4 = new lib.flower();
						this.instance_4.setTransform(396.5, 151.5);
						// star_10
						this.instance_5 = new lib.star_10();
						this.instance_5.setTransform(518, 32.6);
						// star
						this.instance_6 = new lib.star();
						this.instance_6.setTransform(275, 151.5);
						// circle
						this.instance_7 = new lib.circle();
						this.instance_7.setTransform(226.4, 32.6);
						// reverse_blur_circle
						this.instance_8 = new lib.reverse_blur_circle();
						this.instance_8.setTransform(153.5, 151.5);
						// blur_circle
						this.instance_9 = new lib.blur_circle();
						this.instance_9.setTransform(129.2, 32.6);
						// heart
						this.instance_10 = new lib.heart();
						this.instance_10.setTransform(32, 32.6);

						this.instance_11 = new lib.sakura1();
						this.instance_11.setTransform(30, 30);

						this.instance_12 = new lib.sakura2();
						this.instance_12.setTransform(30, 30);

						this.instance_13 = new lib.sakura3();
						this.instance_13.setTransform(30, 30);

						this.instance_14 = new lib.sakura4();
						this.instance_14.setTransform(30, 30);

						this.instance_15 = new lib.sakura5();
						this.instance_15.setTransform(30, 30);

						this.instance_16 = new lib.sakura6();
						this.instance_16.setTransform(30, 30);

						this.instance_17 = new lib.sakura7();
						this.instance_17.setTransform(30, 30);

						this.instance_18 = new lib.sakura8();
						this.instance_18.setTransform(30, 30);

						this.instance_19 = new lib.sakura9();
						this.instance_19.setTransform(30, 30);

						this.instance_20 = new lib.sakura10();
						this.instance_20.setTransform(30, 30);

						this.instance_21 = new lib.sakura11();
						this.instance_21.setTransform(30, 30);

						this.instance_22 = new lib.sakura12();
						this.instance_22.setTransform(30, 30);

						this.instance_23 = new lib.sakura13();
						this.instance_23.setTransform(30, 30);

						this.addChild(this.instance_23, this.instance_22, this.instance_21, this.instance_20, this.instance_19, this.instance_18, this.instance_17, this.instance_16, this.instance_15, this.instance_14, this.instance_13, this.instance_12, this.instance_11, this.instance_10, this.instance_9, this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
					}).prototype = p = new cjs.Container();
					p.nominalBounds = new cjs.Rectangle(275, 200, 554, 187.5);
				})((Assets = Assets || {}), (asset_shapes_images = asset_shapes_images || {}), (asset_shapes_createjs = asset_shapes_createjs || {}), (ss = ss || {}));


// CONCATENATED MODULE: ./src/assets/shape-generator.ts

				/**
				 * 銈枫偋銈ゃ儣銈掋偆銉炽偣銈裤兂銈瑰寲銇欍倠銈儵銈广仹銇欍€�
				 * ParticleJS銇唴閮ㄧ殑銇埄鐢ㄤ互澶栥仹銇娇鐢ㄣ仐銇亜銇撱仺銈掋偑銈广偣銉°仐銇俱仚銆�
				 */
				var shape_generator_ShapeGenerator = /** @class */ (function () {
					function ShapeGenerator() {
					}
					/**
					 * 銈枫偋銈ゃ儣銈ゃ兂銈广偪銉炽偣銈掍綔鎴愩仐銇俱仚銆�
					 * @param {string} id
					 * @returns {createjs.Container}
					 * @see data-shape.ts
					 */
					ShapeGenerator.prototype.generateShape = function (id) {
						var cls = Assets[id];
						return new cls();
					};
					return ShapeGenerator;
				}());


// CONCATENATED MODULE: ./src/data/data-color.ts
				/**
				 * 鑹层伄鎯呭牨銈掓壉銇嗐儑銉笺偪鍨嬨偗銉┿偣銇с仚銆�
				 */
				var ColorData = /** @class */ (function () {
					function ColorData() {
						/**
						 * 鑹茬浉銈掕〃銇椼伨銇�(0-360)銆�
						 * @type {number}
						 */
						this.hue = 0;
						/**
						 * 鑹茬浉銇伆銈夈仱銇嶃倰绀恒仐銇俱仚銆�
						 * @type {number}
						 */
						this.hueVariance = 0;
						/**
						 * 褰╁害銇с仚(0-100)銆�
						 * @type {number}
						 */
						this.saturation = 0;
						/**
						 * 褰╁害銇伆銈夈仱銇嶃仹銇欍€�
						 * @type {number}
						 */
						this.saturationVariance = 0;
						/**
						 * 杓濆害銇с仚(0-100)銆�
						 * @type {number}
						 */
						this.luminance = 0;
						/**
						 * 杓濆害銇伆銈夈仱銇嶃仹銇欍€�
						 * @type {number}
						 */
						this.luminanceVariance = 0;
					}
					return ColorData;
				}());


// CONCATENATED MODULE: ./src/enum/alpha-curve-type.ts
				/**
				 * 閫忔槑搴︺伄瑷堢畻寮忋伄绋銇с仚銆�
				 */
				var AlphaCurveType;
				(function (AlphaCurveType) {
					/**
					 * 閫氬父銇€忔槑搴︺伄瑷堢畻寮忋仹銇欍€�
					 */
					AlphaCurveType[AlphaCurveType["Normal"] = 0] = "Normal";
					/**
					 * 銉┿兂銉€銉犮仹銇欍€�
					 */
					AlphaCurveType[AlphaCurveType["Random"] = 1] = "Random";
				})(AlphaCurveType || (AlphaCurveType = {}));

// CONCATENATED MODULE: ./src/data/data-drawing.ts


				/**
				 * 銉戙兗銉嗐偅銈儷銇弿鐢绘儏鍫便倰鎵便亞銉囥兗銈垮瀷銈儵銈广仹銇欍€�
				 */
				var data_drawing_DrawingData = /** @class */ (function () {
					/**
					 * 銈炽兂銈广儓銉┿偗銈裤兗銇с仚銆�
					 * @param json
					 */
					function DrawingData(json) {
						if (json === void 0) { json = null; }
						/**
						 * 鑳屾櫙鑹层仹銇欍€�
						 * @type {string}
						 */
						this.bgColor = "";
						/**
						 * 骞呫仹銇欍€�
						 * @type {number}
						 */
						this.width = 0.0;
						/**
						 * 楂樸仌銇с仚銆�
						 * @type {number}
						 */
						this.height = 0.0;
						/**
						 * 1绉掋亗銇熴倞銇櫤鐢熸暟銇с仚銆�
						 * @type {number}
						 */
						this.emitFrequency = 0;
						/**
						 *  鐧虹敓鍩烘簴浣嶇疆 - X搴ф (px)銇с仚銆�
						 * @type {number}
						 */
						this.startX = 0;
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф銇伆銈夈仱銇� (px)銇с仚銆�
						 * @type {number}
						 */
						this.startXVariance = 0;
						/**
						 * 鐧虹敓浣嶇疆 - Y搴ф (px)銇с仚銆�
						 * @type {number}
						 */
						this.startY = 0;
						/**
						 * 鐧虹敓浣嶇疆 - Y搴ф銇伆銈夈仱銇� (px)銇с仚銆�
						 * @type {number}
						 */
						this.startYVariance = 0;
						/**
						 * 鍒濇湡閫熷害 - 鏂瑰悜 (搴�)銇с仚銆�
						 * @type {number}
						 */
						this.initialDirection = 0;
						/**
						 * 鍒濇湡閫熷害 - 鏂瑰悜銇伆銈夈仱銇� (搴�)銇с仚銆�
						 * @type {number}
						 */
						this.initialDirectionVariance = 0;
						/** 鍒濇湡閫熷害 (px)銇с仚銆�
						 * @type {number}
						 */
						this.initialSpeed = 0;
						/** 鍒濇湡閫熷害銇伆銈夈仱銇嶃仹銇欍€�
						 * @type {number}
						 */
						this.initialSpeedVariance = 0;
						/** 鎽╂摝銇с仚銆�
						 * @type {number}
						 */
						this.friction = 0;
						/** 閲嶅姏銇с仚銆�
						 * @type {number}
						 */
						this.accelerationSpeed = 0;
						/** 閲嶅姏鏂瑰悜 (搴�)銇с仚銆�
						 * @type {number}
						 */
						this.accelerationDirection = 0;
						/** 闁嬪鏅傘伄銈广偙銉笺儷銇с仚銆�
						 * @type {number}
						 */
						this.startScale = 0;
						/** 闁嬪鏅傘伄銈广偙銉笺儷銇伆銈夈仱銇嶃仹銇欍€� */
						this.startScaleVariance = 0;
						/** 绲備簡鏅傘伄銈广偙銉笺儷銇с仚銆�
						 * @type {number}
						 */
						this.finishScale = 0;
						/** 绲備簡鏅傘伄銈广偙銉笺儷銇伆銈夈仱銇嶃仹銇欍€�
						 * @type {number}
						 */
						this.finishScaleVariance = 0;
						/**
						 * 銉┿偆銉�(銉曘儸銉笺儬鏁�)銇с仚銆�
						 * @type {number}
						 */
						this.lifeSpan = 0; /**
						 * 銉┿偆銉曘伄銇般倝銇ゃ亶(銉曘儸銉笺儬鏁�)銇с仚銆�
						 * @type {number}
						 */
						/**  */ this.lifeSpanVariance = 0;
						/**
						 *  闁嬪鏅傘伄閫忔槑搴︺仹銇欍€�
						 * @type {number}
						 */
						this.startAlpha = 0;
						/**
						 * 闁嬪鏅傘伄閫忔槑搴︺伄銇般倝銇ゃ亶銇с仚銆�
						 * @type {number}
						 */
						this.startAlphaVariance = 0;
						/**
						 * 绲備簡鏅傘伄閫忔槑搴︺仹銇欍€�
						 * @type {number}
						 */
						this.finishAlpha = 0;
						/**
						 * 绲備簡鏅傘伄閫忔槑搴︺伄銇般倝銇ゃ亶銇с仚銆�
						 * @type {number}
						 */
						this.finishAlphaVariance = 0;
						/**
						 * 浣跨敤銇欍倠銈枫偋銈ゃ儣ID瑷畾銇с仚銆�
						 * @type {string[]}
						 */
						this.shapeIdList = [""];
						/**
						 * 鍒濇湡銈儵銉笺伄瑷畾銇с仚銆�
						 * @type {ColorData}
						 */
						this.startColor = new ColorData();
						/**
						 * 銈枫偋銈ゃ儣銈掑姞绠楀悎鎴愩仐銇俱仚銆�
						 * @type {boolean}
						 */
						this.blendMode = true;
						/**
						 * 閫忔槑搴︺伄瑷堢畻寮忋伄瑷畾銇с仚銆�
						 * @type {AlphaCurveType.Normal}
						 */
						this.alphaCurveType = AlphaCurveType.Normal;
						if (json) {
							this.importFromJson(json);
						}
					}
					/**
					 * 銉戙兗銉嗐偅銈儷銇ō瀹氥倰JSON褰㈠紡銇偑銉栥偢銈с偗銉堛亱銈夎銇胯炯銇裤伨銇欍€�
					 * @param json
					 */
					DrawingData.prototype.importFromJson = function (json) {
						var checkSkipKey = function (key) {
							return key == "width" || key == "height" || key == "bgColor";
						};
						this.setData(json, checkSkipKey);
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇ō瀹氥倰DrawingData銈儢銈搞偋銈儓銇嬨倝瑾伩杈笺伩銇俱仚
					 * @param {DrawingData} obj
					 */
					DrawingData.prototype.importData = function (obj) {
						var checkSkipKey = function (key) {
							return (key == "width" || key == "height" || key == "startX" || key == "startY");
						};
						this.setData(obj, checkSkipKey);
					};
					DrawingData.checkReflectEnable = function () {
						try {
							var result = !!(Reflect && Reflect.has);
							return result;
						}
						catch (e) {
							return false;
						}
					};
					DrawingData.prototype.setData = function (obj, checkSkipKey) {
						if (DrawingData.ENABLE_REFLECT) {
							for (var key in obj) {
								// 鐒¤銇欍倠銉椼儹銉戙儐銈ｃ兗
								if (checkSkipKey(key)) {
									continue;
								}
								if (Reflect.has(this, key) == true) {
									var val = obj[key];
									// 銈ゃ優銉夈偔銇儣銉儜銉嗐偅銉煎弽鏄犳柟娉曘倰閬╃敤 ICS-Ikeda 2016-01-22
									Reflect.set(this, key, val);
								}
							}
						}
						else {
							var self_1 = this;
							for (var key in obj) {
								// 鐒¤銇欍倠銉椼儹銉戙儐銈ｃ兗
								if (checkSkipKey(key)) {
									continue;
								}
								if (this.hasOwnProperty(key)) {
									self_1[key] = obj[key];
								}
							}
						}
					};
					DrawingData.ENABLE_REFLECT = DrawingData.checkReflectEnable();
					return DrawingData;
				}());


// CONCATENATED MODULE: ./src/data/data-shape.ts
				/**
				 * Created by 銆宎sset-shapes.fla銆�/銆実enerate-assets.jsfl銆� on Wed Jan 20 2016
				 * !!!!!銇撱伄銈炽兗銉夈伅JSFL銇嬨倝鑷嫊鐢熸垚銇曘倢銇熴偝銉笺儔銇с仚銆備慨姝ｃ仚銈嬪牬鍚堛伅銇旀敞鎰忋亸銇犮仌銇勩€�!!!!!
				 */
				var ShapeData = /** @class */ (function () {
					function ShapeData() {
						this.assetList = [
							"blur_circle",
							"circle",
							"flower",
							"heart",
							"kirakira",
							"kirakira2",
							"reverse_blur_circle",
							"square",
							"star",
							"star_10",
							"triangle",
							"sakura1",
							"sakura2",
							"sakura3",
							"sakura4",
							"sakura5",
							"sakura6",
							"sakura7",
							"sakura8",
							"sakura9",
							"sakura10",
							"sakura11",
							"sakura12",
							"sakura13"
						];
					}
					return ShapeData;
				}());


// CONCATENATED MODULE: ./src/enum/shape-type.ts
				/**
				 * 銈枫偋銈ゃ儣銇ó椤炪倰瀹氱京銇椼仧銈儵銈广仹銇欍€�
				 */
				var ShapeType = /** @class */ (function () {
					function ShapeType() {
					}
					/**
					 * 銇点倧銇ｃ仺銇椼仧鍐嗐伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.BLUR_CIRCLE = "blur_circle";
					/**
					 * 鍐嗐伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.CIRCLE = "circle";
					/**
					 * 鑺便伄褰伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.FLOWER = "flower";
					/**
					 * 銉忋兗銉堛伄褰伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.HEART = "heart";
					/**
					 * 銈儵銈儵(1)銇偡銈с偆銉桰D銇с仚銆�
					 * @type {string}
					 */
					ShapeType.KIRAKIRA = "kirakira";
					/**
					 * 銈儵銈儵(2)銇偡銈с偆銉桰D銇с仚銆�
					 * @type {string}
					 */
					ShapeType.KIRAKIRA2 = "kirakira2";
					/**
					 * 涓ぎ銇岀拱銈婃姕銇嬨倢銇熷唵銇偡銈с偆銉桰D銇с仚銆�
					 * @type {string}
					 */
					ShapeType.REVERSE_CIRCLE = "reverse_blur_circle";
					/**
					 * 鍥涜褰伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.SQUARE = "square";
					/**
					 * 鏄熷舰銇偡銈с偆銉桰D銇с仚銆�
					 * @type {string}
					 */
					ShapeType.STAR = "star";
					/**
					 * 鏄熷舰(妫樸亴10)銇偡銈с偆銉桰D銇с仚銆�
					 * @type {string}
					 */
					ShapeType.STAR_10 = "star_10";
					/**
					 * 涓夎褰伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.TRIANGLE = "triangle";
					/**
					 * 娉°伄銈枫偋銈ゃ儣ID銇с仚銆�
					 * @type {string}
					 */
					ShapeType.SAKURA1  = "sakura1";
					ShapeType.SAKURA2  = "sakura2";
					ShapeType.SAKURA3  = "sakura3";
					ShapeType.SAKURA4  = "sakura4";
					ShapeType.SAKURA5  = "sakura5";
					ShapeType.SAKURA6  = "sakura6";
					ShapeType.SAKURA7  = "sakura7";
					ShapeType.SAKURA8  = "sakura8";
					ShapeType.SAKURA9  = "sakura9";
					ShapeType.SAKURA10 = "sakura10";
					ShapeType.SAKURA11 = "sakura11";
					ShapeType.SAKURA12 = "sakura12";
					ShapeType.SAKURA13 = "sakura13";

					return ShapeType;
				}());


// CONCATENATED MODULE: ./src/particle/particle.ts

				/**
				 * 銉戙兗銉嗐偅銈儷銈ㄣ儫銉冦偪銉笺伄銉愩儶銉ャ兗銈儢銈搞偋銈儓銇偗銉┿偣銇с仚銆�
				 */
				var particle_Particle = /** @class */ (function () {
					/**
					 * 銈炽兂銈广儓銉┿偗銈裤兗銇с仚銆�
					 */
					function Particle() {
						this.particleShape = new createjs.Container();
						this.startColor = new ColorData();
					}
					return Particle;
				}());


// CONCATENATED MODULE: ./src/particle/particle-system.ts




				/**
				 * ParticleJS銇儛銉笺偢銉с兂鎯呭牨銈掔ず銇椼伨銇欍€�
				 * @type {string}
				 */
				var VERSION = "1.0.0";
				/**
				 * 鐝惧湪銇儛銉笺偢銉с兂銇ㄤ簰鎻涙€с亴銇傘倠銇嬨仼銇嗐亱銈掋儊銈с儍銈仐銇俱仚銆�
				 * @param value
				 */
				function checkVersion(value) {
					var currentVersion = VERSION.split(".");
					//  銇撱亾銇仢銈傘仢銈傘亾銇亜鎯冲畾銇犮亼銈屻仼銈傘€�
					if (currentVersion.length <= 2) {
						console.log("銉愩兗銈搞儳銉宠〃瑷樸偍銉┿兗銇岀櫤鐢熴仐銇俱仐銇熴€�");
						return false;
					}
					//  version銇岀┖銇牬鍚�
					if (!value) {
						if (currentVersion[0] == "0" && currentVersion[1] == "1") {
							//銆�0.1.鈻层€嶃伄銉愩兗銈搞儳銉炽伄ParticleSystem銇晱椤屻仾銇忓嫊浣溿仌銇涖倠
							return true;
						}
						else {
							//  銉愩兗銈搞儳銉炽亴绌恒伄鍫村悎銇偍銉┿兗
							return false;
						}
					}
					var jsonVersion = value.split(".");
					//  銉°偢銉ｃ兗銉愩兗銈搞儳銉炽伄銉併偋銉冦偗
					if (currentVersion[0] != jsonVersion[0]) {
						return false;
					}
					//  銉炪偆銉娿兗銉愩兗銈搞儳銉炽伄銉併偋銉冦偗
					if (currentVersion[1] != jsonVersion[1]) {
						return false;
					}
					//  銉儞銈搞儳銉崇暘鍙枫亴鍚屻仒銇倝浜掓彌鎬с亴銇傘倠銇ㄨ銇ｃ仸鑹亜
					return true;
				}
				/**
				 * 銉戙兗銉嗐偅銈儷銇埗寰°偗銉┿偣銇с仚銆�
				 */
				var particle_system_ParticleSystem = /** @class */ (function () {
					function ParticleSystem() {
						/** @private  */
						this._frameCount = 0;
						this._drawingData = new data_drawing_DrawingData();
						this._particlesPool = [];
						this._activeParticles = [];
						this.container = new createjs.Container();
						// 銉戙儠銈┿兗銉炪兂銈瑰悜涓娿伄鍩烘湰銉嗐偗銉嬨儍銈�
						this.container.mouseChildren = false;
						this.container.mouseEnabled = false;
						this._playing = true;
						this.shapeGenerator = new shape_generator_ShapeGenerator();
					}
					/**
					 * 銉戙兗銉嗐偅銈儷銇偄銉嬨儭銉笺偡銉с兂銇屽啀鐢熴仌銈屻仸銇勩倠銇嬨仼銇嗐亱銈掔ず銇椼伨銇欍€�
					 * @returns {boolean}
					 */
					ParticleSystem.prototype.isPlaying = function () {
						return this._playing;
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇ō瀹氥儑銉笺偪銈掑彇銈婅炯銇裤伨銇欍€�
					 */
					ParticleSystem.prototype.setData = function (drawingData) {
						this._drawingData = drawingData;
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇ō瀹氥儑銉笺偪銈扟son褰㈠紡銇偑銉栥偢銈с偗銉堛仹鍙栥倞杈笺伩銇俱仚銆�
					 */
					ParticleSystem.prototype.importFromJson = function (jsonObject) {
						if (!checkVersion(jsonObject["VERSION"] || "")) {
							console.warn("瑾伩杈笺倱銇燡SON銉曘偂銈ゃ儷銇≒articleJS銇儛銉笺偢銉с兂銇岀暟銇倞銇俱仚銆俓n" +
								"https://github.com/ics-creative/ParticleJS");
						}
						this._drawingData.importFromJson(jsonObject);
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銈枫偣銉嗐儬銇洿鏂般倰琛屻亜銇俱仚銆�
					 */
					ParticleSystem.prototype.update = function () {
						if (!this._playing) {
							return;
						}
						this.emit();
						this.animate();
						this.lifeCheck();
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇嫊銇嶃倰鏇存柊銇椼伨銇欍€�
					 */
					ParticleSystem.prototype.animate = function () {
						var rad = createjs.Matrix2D.DEG_TO_RAD * this._drawingData.accelerationDirection;
						var accX = Math.cos(rad) * this._drawingData.accelerationSpeed;
						var accY = Math.sin(rad) * this._drawingData.accelerationSpeed;
						for (var i = 0; i < this._activeParticles.length; i++) {
							var particle = this._activeParticles[i];
							// 鍔犻€熷害瑷堢畻 (閲嶅姏)
							particle.vx += accX;
							particle.vy += accY;
							// 鎽╂摝瑷堢畻
							particle.vx *= 1 - this._drawingData.friction;
							particle.vy *= 1 - this._drawingData.friction;
							// 搴ф瑷堢畻
							particle.x += particle.vx;
							particle.y += particle.vy;

							// 鍥炶虎
							particle.particleShape.rotation ++;

							// 搴ф銇仼鐢�
							particle.particleShape.x = particle.x;
							particle.particleShape.y = particle.y;

							var lifeParcent = particle.currentLife / particle.totalLife;
							switch (Number(particle.alphaCurveType)) {
								case AlphaCurveType.Random:
									var min = Math.min(particle.finishAlpha, particle.startAlpha);
									var max = Math.max(particle.finishAlpha, particle.startAlpha);
									particle.particleShape.alpha = Math.random() * (max - min) + min;
									break;
								case AlphaCurveType.Normal:
								default:
									var alpha = this.calcCurrentValue(particle.startAlpha, particle.finishAlpha, lifeParcent);
									particle.particleShape.alpha = alpha;
									break;
							}
							var scale = this.calcCurrentValue(particle.startScale, particle.finishScale, lifeParcent);
							particle.particleShape.scaleX = particle.particleShape.scaleY = scale;
							//  銉戙兗銉嗐偅銈儷銇屾銈撱仹銇勩仧銈夈€併偑銉栥偢銈с偗銉堛儣銉笺儷銇Щ鍕�
							if (particle.currentLife < 0) {
								particle.isAlive = false;
							}
							// 骞撮舰杩藉姞
							particle.currentLife--;
						}
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇岀敓銇嶃仸銇勩倠銇嬬⒑瑾嶃仐銇俱仚銆�
					 */
					ParticleSystem.prototype.lifeCheck = function () {
						for (var i = 0; i < this._activeParticles.length; i++) {
							// 銈傘仐銈傛銈撱仹銇勩仧銈夈€併偄銈儐銈ｃ儢銉偣銉堛亱銈夊銇椼仸銉椼兗銉伀淇濆瓨銇欍倠銆�
							if (!this._activeParticles[i].isAlive) {
								var particle = this._activeParticles[i];
								this.container.removeChild(particle.particleShape);
								this._activeParticles.splice(i, 1);
								this._particlesPool.push(particle);
								i--;
							}
						}
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銈掑叏銇﹀墛闄ゃ仐銇俱仚銆�
					 */
					ParticleSystem.prototype.clear = function () {
						for (var i = 0; i < this._activeParticles.length; i++) {
							var particle = this._activeParticles[i];
							particle.isAlive = false;
							this.container.removeChild(particle.particleShape);
							this._activeParticles.splice(i, 1);
							this._particlesPool.push(particle);
							i--;
						}
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銈枫偣銉嗐儬銈掔牬妫勩仐銇俱仚銆�
					 */
					ParticleSystem.prototype.dispose = function () {
						for (var i = 0; i < this._activeParticles.length; i++) {
							var particle = this._activeParticles[i];
							particle.isAlive = false;
							this.container.removeChild(particle.particleShape);
						}
						this._activeParticles.splice(0, this._activeParticles.length);
						this._particlesPool.splice(0, this._particlesPool.length);
						this._activeParticles = null;
						this._particlesPool = null;
						this.container = null;
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇敓鎴愩倰琛屻亜銇俱仚銆�
					 */
					ParticleSystem.prototype.emit = function () {
						// 銈ゃ兂銈裤兗銉愩儷銉併偋銉冦偗
						var framerate = Math.round(createjs.Ticker.framerate);
						var frameInSec = this._frameCount % framerate;
						var emitPerSec = this._drawingData.emitFrequency;
						var loopInt = emitPerSec == 0 ? 0 : Math.floor(emitPerSec / framerate);
						// 鈶� 鏁存暟鍒嗐伄瀹熻鍥炴暟
						for (var i = 0; i < loopInt; i++) {
							this.emitParticle();
						}
						// 鈶� 灏忔暟鐐瑰垎銇疅琛屽洖鏁�
						var loopFloat = emitPerSec / framerate - loopInt;
						// 銉曘儸銉笺儬銉兗銉堛倛銈婂皯銇亜鍫村悎銆併亱銇ゃ€佺敓鎴恜ersec銇�0銇с伅銇亜銇ㄣ亶
						if (emitPerSec != 0 && frameInSec % Math.floor(1 / loopFloat) == 0) {
							this.emitParticle();
						}
						this._frameCount++;
						if (this._frameCount >= framerate) {
							this._frameCount = 0;
						}
					};
					/**
					 * 鍊嬨€呫伄銉戙兗銉嗐偅銈儷銈掔敓鎴愩仐銆併儜銉笺儐銈ｃ偗銉偡銈广儐銉犮伀鐧婚尣銇椼伨銇欍€�
					 * @returns {Particle}
					 */
					ParticleSystem.prototype.emitParticle = function () {
						var particle = this.generateParticle();
						this.container.addChild(particle.particleShape);
						this._activeParticles.push(particle);
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銈掔敓鎴愩仐銆併儜銉┿儭銉笺偪銉笺倰瑷畾銇椼伨銇欍€�
					 * @returns {Particle}
					 */
					ParticleSystem.prototype.generateParticle = function () {
						var particle = null;
						if (this._particlesPool.length >= 1) {
							particle = this._particlesPool.shift();
						}
						else {
							particle = new particle_Particle();
						}
						this.setParticleParameter(particle);
						return particle;
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銉戙儵銉°兗銈裤伄瑷畾銈掕銇勩伨銇欍€�
					 * @param particle
					 */
					ParticleSystem.prototype.setParticleParameter = function (particle) {
						particle.particleShape.removeAllChildren();
						particle.isAlive = true;
						particle.x = this.calcRandomValueWithVariance(this._drawingData.startX, this._drawingData.startXVariance, false);
						particle.y = this.calcRandomValueWithVariance(this._drawingData.startY, this._drawingData.startYVariance, false);
						this.generateShape(particle, this._drawingData.shapeIdList);
						//  鐢熷瓨鏈熼枔
						particle.totalLife = Math.max(1, this.calcRandomValueWithVariance(this._drawingData.lifeSpan, this._drawingData.lifeSpanVariance, true));
						particle.currentLife = particle.totalLife;
						//  銈广償銉笺儔
						var speed = Math.max(0, this.calcRandomValueWithVariance(this._drawingData.initialSpeed, this._drawingData.initialSpeedVariance, false));
						var angle = createjs.Matrix2D.DEG_TO_RAD *
							this.calcRandomValueWithVariance(this._drawingData.initialDirection, this._drawingData.initialDirectionVariance, false);
						particle.vx = Math.cos(angle) * speed;
						particle.vy = Math.sin(angle) * speed;
						//  銈儷銉曘偂
						particle.startAlpha = this.calcRandomValueWithRange(0.0, 1.0, this.calcRandomValueWithVariance(this._drawingData.startAlpha, this._drawingData.startAlphaVariance, false));
						particle.finishAlpha = this.calcRandomValueWithRange(0.0, 1.0, this.calcRandomValueWithVariance(this._drawingData.finishAlpha, this._drawingData.finishAlphaVariance, false));
						//  銈广偙銉笺儷
						particle.startScale = Math.max(0, this.calcRandomValueWithVariance(this._drawingData.startScale, this._drawingData.startScaleVariance, false));
						particle.finishScale = Math.max(0, this.calcRandomValueWithVariance(this._drawingData.finishScale, this._drawingData.finishScaleVariance, false));
						// 銉栥儸銉炽儔銉兗銉夈倰瑷畾
						particle.particleShape.compositeOperation =
							this._drawingData.blendMode == true ? "lighter" : null;
						particle.alphaCurveType = this._drawingData.alphaCurveType;
					};
					/**
					 * 銉戙兗銉嗐偅銈儷銇娇鐢ㄣ仚銈嬨偡銈с偆銉椼倰鐢熸垚銇椼伨銇欍€�
					 * @param particle
					 * @param shapeIdList
					 */
					ParticleSystem.prototype.generateShape = function (particle, shapeIdList) {

						/* ===== add ===== */
						var charaColorArray = [
							{ h: 330, s:  80, l: 92 },
							{ h:  47, s:  95, l: 83 },
							{ h: 104, s:  65, l: 78 },
							{ h: 353, s:  83, l: 84 },
							{ h: 218, s:  77, l: 88 },
							{ h: 196, s: 100, l: 82 },
							{ h: 253, s:  65, l: 80 }
						];
						var randomColor = charaColorArray[Math.floor(Math.random() * charaColorArray.length)];
						/* ===== add ===== */

						particle.particleShape.removeAllChildren();
						var startColor = this._drawingData.startColor;
						/*
						particle.startColor.hue =
							this.calcRandomValueWithVariance(startColor.hue, startColor.hueVariance, false) % 360;
						particle.startColor.luminance = this.calcRandomValueWithVariance(startColor.luminance, startColor.luminanceVariance, false);
						particle.startColor.saturation = this.calcRandomValueWithVariance(startColor.saturation, startColor.saturationVariance, false);
						var hue = Number(particle.startColor.hue);
						var saturation = Number(particle.startColor.saturation);
						var luminance = Number(particle.startColor.luminance);
						*/
						// var color = "hsl(" + hue + ", " + saturation + "%, " + luminance + "%)";

						/* ===== add ===== */
						var color = "hsl(" + randomColor["h"] + ", " + randomColor["s"] + "%, " + randomColor["l"] + "%)";
						/* ===== add ===== */

						var r = Math.floor(Math.random() * this._drawingData.shapeIdList.length);
						var shapeId = this._drawingData.shapeIdList.length == 0
							? ""
							: this._drawingData.shapeIdList[r];
						particle.colorCommand = null;
						var container = this.shapeGenerator.generateShape(shapeId);
						particle.particleShape.addChild(container);
						var shape = container.getChildAt(0); // 銇撱亞銇勩亞浣溿倞銇仚銈�
						if (shape == null) {
							return;
						}
						var instructions = shape.graphics.instructions;
						if (instructions && instructions.length > 0) {
							for (var i = 0; i < instructions.length; i++) {
								var cmd = instructions[i];
								if (cmd instanceof createjs.Graphics.Fill) {
									// 濉椼倞銇仺銇�
									// 銈般儵銉囥兗銈枫儳銉冲銈娿仩銇ｃ仧銈�
									if (cmd.style instanceof CanvasGradient) {
										// 鏄斻伄銈般儵銉囥兗銈枫儳銉炽倰淇濇寔
										var oldStyle = cmd.style;
										var g = ParticleSystem.HELPER_GRAPHICS;
										var newStyle = g.beginRadialGradientFill([color, "hsla(" + hue + ", " + saturation + "%, " + luminance + "%, 0)"], oldStyle.props.ratios, oldStyle.props.x0, oldStyle.props.y0, oldStyle.props.r0, oldStyle.props.x1, oldStyle.props.y1, oldStyle.props.r1).command;
										instructions[i] = newStyle;
									}
									else {
										// 鍗樿壊濉椼倞銇倝
										cmd.style = color;
										particle.colorCommand = cmd;
									}
								}
								else if (cmd instanceof createjs.Graphics.Stroke) {
									// 绶氥伄銇ㄣ亶
									cmd.style = color;
									particle.colorCommand = cmd;
								}
							}
						}
					};
					/**
					 * 涓€鏅傜殑銇儜銉笺儐銈ｃ偗銉伄鍐嶇敓銈掑仠姝仐銇俱仚銆�
					 */
					ParticleSystem.prototype.pause = function () {
						this._playing = false;
					};
					/**
					 * pause()銇у仠姝仐銇熴儜銉笺儐銈ｃ偗銉伄鍐嶇敓銈掑啀闁嬨仐銇俱仚銆�
					 */
					ParticleSystem.prototype.resume = function () {
						this._playing = true;
					};
					/**
					 * 涓€瀹氱瘎鍥层伄鏁板€ゃ倰瑷堢畻銇椼伨銇欍€�
					 * @param minValue
					 * @param maxValue
					 * @param value
					 * @returns {number}
					 */
					ParticleSystem.prototype.calcRandomValueWithRange = function (minValue, maxValue, value) {
						return Math.min(maxValue, Math.max(minValue, value));
					};
					/**
					 * 銇般倝銇ゃ亶銇亗銈嬪€ゃ倰瑷堢畻銇楀彇寰椼仐銇俱仚銆�
					 * @param value 鍩烘簴鍊ゃ仹銇欍€�
					 * @param variance 銉愩儵銇ゃ亶銇瘎鍥层仹銇欍€�
					 * @param isInteger 鏁存暟銇с亗銈嬨亱銈掓寚瀹氥仐銇俱仚銆�
					 * @returns {number}  鏁板€ゃ倰杩斻仐銇俱仚銆�
					 */
					ParticleSystem.prototype.calcRandomValueWithVariance = function (value, variance, isInteger) {
						var result = Number(value) + (Math.random() - 0.5) * variance;
						if (isInteger == true) {
							return Math.floor(result);
						}
						return result;
					};
					/**
					 * 鐝惧湪銇勾榻緷瀛樸伄鏁板€ゃ倰瑷堢畻銇椼伨銇欍€�
					 * @param start 闁嬪鏅傘伄鍊ゃ仹銇欍€�
					 * @param end 绲備簡鏅傘伄鍊ゃ仹銇欍€�
					 * @param life 鐝惧湪銇鍛姐倰绀恒仐銇俱仚銆傞枊濮嬫檪銇�1.0銇с€佺祩浜嗘檪銇�0.0銇兂瀹氥仹銇欍€�
					 * @returns {number} 鐝惧湪銇€ゃ仹銇欍€�
					 */
					ParticleSystem.prototype.calcCurrentValue = function (start, end, life) {
						return Number(start) * life + Number(end) * (1 - life);
					};
					Object.defineProperty(ParticleSystem.prototype, "emitFrequency", {
						/**
						 * 1绉掋亗銇熴倞銇櫤鐢熸暟銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.emitFrequency;
						},
						/**
						 * 1绉掋亗銇熴倞銇櫤鐢熸暟銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.emitFrequency = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startX", {
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф (px)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startX;
						},
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф (px)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startX = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startXVariance", {
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф銇伆銈夈仱銇� (px)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startX;
						},
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф銇伆銈夈仱銇� (px)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startXVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startY", {
						/**
						 * 鐧虹敓浣嶇疆 - Y搴ф (px)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startY;
						},
						/**
						 * 鐧虹敓浣嶇疆 - Y搴ф (px)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startY = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startYVariance", {
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф銇伆銈夈仱銇� (px)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startYVariance;
						},
						/**
						 * 鐧虹敓鍩烘簴浣嶇疆 - X搴ф銇伆銈夈仱銇� (px)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startYVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "initialDirection", {
						/**
						 * 鍒濇湡閫熷害 - 鏂瑰悜 (搴�)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.initialDirection;
						},
						/**
						 * 鍒濇湡閫熷害 - 鏂瑰悜 (搴�)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.initialDirection = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "initialDirectionVariance", {
						/**
						 * 鍒濇湡閫熷害 - 鏂瑰悜銇伆銈夈仱銇� (搴�)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.initialDirectionVariance;
						},
						/**
						 * 鍒濇湡閫熷害 - 鏂瑰悜銇伆銈夈仱銇� (搴�)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.initialDirectionVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "initialSpeed", {
						/**
						 * 鍒濇湡閫熷害 (px)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.initialSpeed;
						},
						/**
						 * 鍒濇湡閫熷害 (px)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.initialSpeed = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "initialSpeedVariance", {
						/**
						 * 鍒濇湡閫熷害銇伆銈夈仱銇嶃仹銇欍€�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.initialSpeedVariance;
						},
						/**
						 * 鍒濇湡閫熷害銇伆銈夈仱銇嶃仹銇欍€�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.initialSpeedVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "friction", {
						/**
						 * 鎽╂摝銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.friction;
						},
						/**
						 * 鎽╂摝銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.friction = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "accelerationSpeed", {
						/**
						 * 閲嶅姏銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.accelerationSpeed;
						},
						/**
						 * 閲嶅姏銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.accelerationSpeed = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "accelerationDirection", {
						/**
						 * 閲嶅姏銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.accelerationDirection;
						},
						/**
						 * 閲嶅姏鏂瑰悜 (搴�)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.accelerationDirection = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startScale", {
						/**
						 * 闁嬪鏅傘伄銈广偙銉笺儷銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startScale;
						},
						/**
						 * 闁嬪鏅傘伄銈广偙銉笺儷銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startScale = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startScaleVariance", {
						/**
						 * 闁嬪鏅傘伄銈广偙銉笺儷銇伆銈夈仱銇嶃仹銇欍€�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startScaleVariance;
						},
						/**
						 * 闁嬪鏅傘伄銈广偙銉笺儷銇伆銈夈仱銇嶃仹銇欍€�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startScaleVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "finishScale", {
						/**
						 * 绲備簡鏅傘伄銈广偙銉笺儷銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.finishScale;
						},
						/**
						 * 绲備簡鏅傘伄銈广偙銉笺儷銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.finishScale = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "finishScaleVariance", {
						/**
						 * 绲備簡鏅傘伄銈广偙銉笺儷銇伆銈夈仱銇嶃仹銇欍€�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.finishScaleVariance;
						},
						/**
						 * 绲備簡鏅傘伄銈广偙銉笺儷銇伆銈夈仱銇嶃仹銇欍€�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.finishScaleVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "lifeSpan", {
						/**
						 * 銉┿偆銉�(銉曘儸銉笺儬鏁�)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.lifeSpan;
						},
						/**
						 * 銉┿偆銉�(銉曘儸銉笺儬鏁�)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.lifeSpan = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "lifeSpanVariance", {
						/**
						 * 銉┿偆銉曘伄銇般倝銇ゃ亶(銉曘儸銉笺儬鏁�)銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.lifeSpanVariance;
						},
						/**
						 * 銉┿偆銉曘伄銇般倝銇ゃ亶(銉曘儸銉笺儬鏁�)銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.lifeSpanVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startAlpha", {
						/**
						 * 濮嬫檪銇€忔槑搴︺仹銇欍€�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startAlpha;
						},
						/**
						 * 濮嬫檪銇€忔槑搴︺仹銇欍€�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startAlpha = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startAlphaVariance", {
						/**
						 * 闁嬪鏅傘伄閫忔槑搴︺伄銇般倝銇ゃ亶銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.startAlphaVariance;
						},
						/**
						 * 闁嬪鏅傘伄閫忔槑搴︺伄銇般倝銇ゃ亶銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startAlphaVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "finishAlpha", {
						/**
						 * 绲備簡鏅傘伄閫忔槑搴︺仹銇欍€�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.finishAlpha;
						},
						/**
						 * 绲備簡鏅傘伄閫忔槑搴︺仹銇欍€�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.finishAlpha = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "finishAlphaVariance", {
						/**
						 * 绲備簡鏅傘伄閫忔槑搴︺伄銇般倝銇ゃ亶銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.finishAlphaVariance;
						},
						/**
						 * 绲備簡鏅傘伄閫忔槑搴︺伄銇般倝銇ゃ亶銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.finishAlphaVariance = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "shapeIdList", {
						/**
						 * 浣跨敤銇欍倠銈枫偋銈ゃ儣ID瑷畾銇с仚銆�
						 * @returns {string[]}
						 */
						get: function () {
							return this._drawingData.shapeIdList;
						},
						/**
						 * 浣跨敤銇欍倠銈枫偋銈ゃ儣ID瑷畾銇с仚銆�
						 * @param string[]
						 */
						set: function (value) {
							this._drawingData.shapeIdList = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "startColor", {
						/**
						 * 鍒濇湡銈儵銉笺伄瑷畾銇с仚銆�
						 * @returns {ColorData}
						 */
						get: function () {
							return this._drawingData.startColor;
						},
						/**
						 * 鍒濇湡銈儵銉笺伄瑷畾銇с仚銆�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.startColor = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "blendMode", {
						/**
						 * true銇仺銇嶃偡銈с偆銉椼倰鍔犵畻鍚堟垚銇椼伨銇欍€�
						 * @returns {boolean}
						 */
						get: function () {
							return this._drawingData.blendMode;
						},
						/**
						 * true銇仺銇嶃偡銈с偆銉椼倰鍔犵畻鍚堟垚銇椼伨銇欍€�
						 * @param value
						 */
						set: function (value) {
							this._drawingData.blendMode = value;
						},
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(ParticleSystem.prototype, "alphaCurveType", {
						/**
						 * 閫忔槑搴︺伄瑷堢畻寮忋伄瑷畾銇с仚銆�
						 * @returns {number}
						 */
						get: function () {
							return this._drawingData.alphaCurveType;
						},
						/**
						 * 閫忔槑搴︺伄瑷堢畻寮忋伄瑷畾銇с仚銆�
						 * @param value - 0:閫氬父, 1:銉┿兂銉€銉�
						 */
						set: function (value) {
							this._drawingData.alphaCurveType = value;
						},
						enumerable: true,
						configurable: true
					});
					/**
					 *  銈般儵銉曘偅銉冦偗銈儢銈搞偋銈儓銇с仚銆傚唴閮ㄨ▓绠椼伀浣跨敤銇椼伨銇欍€�
					 */
					ParticleSystem.HELPER_GRAPHICS = new createjs.Graphics();
					return ParticleSystem;
				}());


// CONCATENATED MODULE: ./src/particlejs.ts
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ParticleSystem", function() { return particle_system_ParticleSystem; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Particle", function() { return particle_Particle; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DrawingData", function() { return data_drawing_DrawingData; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ColorData", function() { return ColorData; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShapeData", function() { return ShapeData; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShapeGenerator", function() { return shape_generator_ShapeGenerator; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AlphaCurveType", function() { return AlphaCurveType; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShapeType", function() { return ShapeType; });
				/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Assets", function() { return Assets; });












				/***/ }),
			/* 1 */
			/***/ (function(module, exports, __webpack_require__) {

				module.exports = __webpack_require__(0);


				/***/ })
			/******/ ]);
});
//# sourceMappingURL=particlejs.js.map