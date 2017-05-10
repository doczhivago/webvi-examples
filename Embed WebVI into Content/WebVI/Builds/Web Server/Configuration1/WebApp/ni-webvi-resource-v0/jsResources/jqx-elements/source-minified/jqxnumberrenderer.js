"use strict";JQX.Utilities.Assign("NumberRenderer",function(){function e(i){babelHelpers.classCallCheck(this,e);var t=this;t.numericValue=i,t.powersToPrefixes={24:"Y",21:"Z",18:"E",15:"P",12:"T",9:"G",6:"M",3:"k",0:"","-2":"c","-3":"m","-6":"u","-9":"n","-12":"p","-15":"f","-18":"a","-21":"z","-24":"y"}}return babelHelpers.createClass(e,[{key:"isENotation",value:function(e){return new RegExp(/e/i).test(e)}},{key:"largeExponentialToDecimal",value:function(e){try{BigNumber}catch(e){throw new Error("Missing reference to jqxmath.js.")}void 0===e&&(e=this.numericValue);var i=e.toString().toLowerCase(),t=i.indexOf("e"),r=new BigNumber(i.slice(0,t)),n=i.slice(t+2),a=i.slice(t+1,t+2),l=new BigNumber(10),o=l.pow(a+n);return r.multiply(o).toString()}},{key:"bigNumberToExponent",value:function(e){var i=this.numericValue;i.constructor!==BigNumber&&(i=new BigNumber(i));var t=i._f,r=i.toString();if(t<=10)return new JQX.Utilities.NumberRenderer(parseFloat(r)).toDigits(e);if(e>=t)return r;var n=void 0;i._s===!1?n="":(n="-",r=r.slice(1));for(var a=r.slice(1,e);a.length>0&&"0"===a.charAt(a.length-1);)a=a.slice(0,a.length-1);var l=a.length>0?".":"",o=t-1;return n+r.slice(0,1)+l+a+"E+"+o}},{key:"toScientific",value:function(){var e=this,i=Number(e.numericValue.toString()).toExponential(),t=i.indexOf("e"),r=i.slice(t+1),n=parseFloat(i.slice(0,t));if("-2"===r)return n+"c";var a=parseInt(r,10)%3;if(a>0)for(var l=0;l<a;l++)n*=10;else a<0&&(n=parseFloat(new BigNumber(n).multiply(Math.pow(10,a)).toString()));if(r>0){var o=n>=0?0:1,s=i.slice(o,t).length-a-2;s>=0&&(n=n.toFixed(s))}var u=parseInt(r,10)-a;return n+e.powersToPrefixes[u.toString()]}},{key:"toDigits",value:function(e,i){var t=this;return null!==e?t.applySignificantDigits(e):null!==i?t.applyPrecisionDigits(i):t.applySignificantDigits(8)}},{key:"applySignificantDigits",value:function(e){function i(e){for(;"0"===e.charAt(e.length-1);)e=e.slice(0,-1);return"."===e.charAt(e.length-1)&&(e=e.slice(0,-1)),e}var t=this,r=parseFloat(t.numericValue).toPrecision(e).toUpperCase();if(r.indexOf(".")!==-1)if(t.isENotation(r)){var n=r.indexOf("."),a=r.indexOf("E"),l=r.slice(n,a);l=i(l),r=r.slice(0,n)+l+r.slice(a)}else r=i(r);return r}},{key:"applyPrecisionDigits",value:function(e){var i=this;e=Math.min(e,20);var t=parseFloat(i.numericValue).toFixed(e);return i.isENotation(t)&&(t=i.largeExponentialToDecimal(t)+"."+"0".repeat(e)),t}},{key:"getLogarithm",value:function(e){var i=this.numericValue,t=void 0;if(void 0===e&&(e=10),10===e)try{t=Math.log10(i)}catch(e){t=Math.log(i)/Math.log(10)}else t=Math.log(i)/Math.log(e);return t}}]),e}());
//# sourceMappingURL=jqxnumberrenderer.js.map