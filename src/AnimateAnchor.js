/**
 * @fileoverview 	: in-page-anchor animation plugin
 */


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ﾂｩ 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
	{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ﾂｩ 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// in-page-anchor animation plugin

/**
 *
 * @version 		: 1.3
 * @author 			: Kensuke Amano
 * @license 		: MIT
 * @update 			: September 2013
 * @date 			: April 2013
 * @require 		: jQuery 1.7+
 * @require 		: jQuery Easing v1.3
 * @class 			: AnimateAnchor
 * @static
 */
var AnimateAnchor = (function() {

	"use strict";

	var that 	= 	{},
		scrollParent =(navigator.appName.match(/Opera/)) ? "html" : "html,body",
		isMobile = {
			Android: (function() {
				return navigator.userAgent.match(/Android/i);
			})()
		};


	// public methods:
	function animAnchorTopByHash(time, easing, isAddHash, hashStr) {

		animAnchorTopByElemName(time, easing, isAddHash, "a[href^='" + hashStr + "']", hashStr);
	}

	function animAnchorTopByNumber(time, easing, aTagElemStr, topPx) {

		setLinkListener($(aTagElemStr), topPx, time, easing);
	}

	function animAnchorTopByElemName(time, easing, isAddHash, aTagElemStr, toPosElemStr) {

		var $hash = $(toPosElemStr),
			hash = (isAddHash)? toPosElemStr : "",
			offset = $hash.offset(),
			scrollTop = (offset)? offset.top : 0;

		setLinkListener($(aTagElemStr), scrollTop, time, easing, hash);
	}

	function animAllAnchorTop(ignoreList, time, easing, isAddHash, isSinglehashAnimate) {

		ignoreList 	= mergeIgnoreList(ignoreList, isSinglehashAnimate);
		var $aTagElems 	= computeHashAnchorDoms(ignoreList);
		setLinkListeners($aTagElems, time, easing, isAddHash);

	}

	function animOnHashAccess(ignoreList, time, easing) {

		var curHash = location.hash;

		function scrollStop() {$(scrollParent).queue([]).stop();}
		if (window.addEventListener) window.addEventListener('DOMMouseScroll', scrollStop, false);
		window.onmousewheel = document.onmousewheel = scrollStop;

		$(function(){

			if(curHash && curHash.charAt(0) == "#") {
				$(scrollParent).animate({ scrollTop : 0,scrollLeft : 0 }, 0, 0);

				ignoreList = mergeIgnoreList(ignoreList, false);
				var isIgnore;

				$.each(ignoreList, function(i, el){
					if(el == curHash){
						isIgnore = true;
						return false;
					}
					return true;
				});

				if(!isIgnore){
					var offset 		= $(curHash).offset(),
						scrollTop 	= (offset)? offset.top : 0;
					var animateObjList = createAnimateObjList(scrollTop, time, easing, curHash);
					animate(animateObjList);
					if (navigator.userAgent.indexOf("WebKit") != -1){location.hash = ""}
				}
			}
		});

	}

	that.animAnchorTopByHash 		= animAnchorTopByHash;
	that.animAnchorTopByNumber 		= animAnchorTopByNumber;
	that.animAnchorTopByElemName 	= animAnchorTopByElemName;
	that.animAllAnchorTop 			= animAllAnchorTop;
	that.animOnHashAccess 			= animOnHashAccess;


	// private methods:
	function mergeIgnoreList(ignoreList, isSinglehashAnimate) {

		ignoreList 	= ignoreList 	|| [];
		if(!isSinglehashAnimate)ignoreList.push("#");
		return ignoreList;
	}


	function setLinkListeners($aTagElems, time, easing, isAddHash) {

		$aTagElems
			.each(function(e){
				var $aTagElem 	= $(this),
					hash 		= $aTagElem.attr("href"),
					offset 		= $(hash).offset(),
					scrollTop 	= (offset)? offset.top : 0;
				setLinkListener($aTagElem, scrollTop, time, easing, (isAddHash)? hash : "");
			});
	}

	function setLinkListener($elem, scrollTop, time, easing, hash) {

		time 	= time 		|| "slow";
		easing 	= easing 	|| "easeInOutSine";


		$elem
			.click(function(e) {

				var animateObjList = createAnimateObjList(scrollTop, time, easing, hash);
				var $html = $(scrollParent);
				if(isMobile.Android){


					$(this).blur();
					$html.focus();

					setTimeout(function() {
						animate(animateObjList);
					}, 10);
				} else{
					animate(animateObjList);
				}
				return false;
			});

		if(isMobile.Android){
			$elem.attr("onFocus", "this.blur()");
		}
	}

	function scrollCompleteFunc(hash) {

		return function(e) {
			window.location.hash = hash;
			var $html = $(scrollParent);
			$html.off("scroll mousedown DOMMouseScroll mousewheel keyup", cancelAnimateHandler);
		}
	}

	function computeHashAnchorDoms(ignoreList) {

		var $hashA 	= $('a[href^="#"]');
		return $hashA
			.filter(function() {
				var hash = $(this).attr("href");
				var isIgnore = false;
				$.each(ignoreList, function(i, el) {
					if(el == hash) {
						isIgnore = true;
						return false;
					}
				});
				return !isIgnore;
			});
	}

	function createAnimateObjList(scrollTop, time, easing, hash) {

		var maxTop = $(document).height() - $(window).height();
		var animateObj 	= {
				scrollTop 	: Math.min(scrollTop, maxTop)
			},
			optionObj 	= {
				duration 	: time,
				easing 		: easing
			};
		if(hash) {
			optionObj.complete = scrollCompleteFunc(hash);
		}

		return [animateObj, optionObj];
	}

	function animate(animateObjList){
		var $html = $(scrollParent);
		$html.stop(true, false);
		$html.animate(animateObjList[0], animateObjList[1]);
		$html.one("scroll mousedown DOMMouseScroll mousewheel keyup", cancelAnimateHandler);
	}

	function cancelAnimate() {

		var $html = $(scrollParent);
		$html.stop();
	}

	function cancelAnimateHandler(e) {

		if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
			cancelAnimate();
		}
	}

	return that;
})();




$(function(){
	AnimateAnchor.animAllAnchorTop();
	AnimateAnchor.animOnHashAccess();
});
