(function(window){var svgSprite='<svg><symbol id="icon-checkbox" viewBox="0 0 1024 1024"><path d="M426.005333 725.994667l384-384-60.010667-61.994667-324.010667 324.010667-152-152-60.010667 60.010667zM810.005333 128q36.010667 0 60.992 26.005333t25.002667 60.010667l0 596.010667q0 34.005333-25.002667 60.010667t-60.992 26.005333l-596.010667 0q-36.010667 0-60.992-26.005333t-25.002667-60.010667l0-596.010667q0-34.005333 25.002667-60.010667t60.992-26.005333l596.010667 0z"  ></path></symbol><symbol id="icon-checkboxoutlineblank" viewBox="0 0 1024 1024"><path d="M810.005333 128q34.005333 0 60.010667 26.005333t26.005333 60.010667l0 596.010667q0 34.005333-26.005333 60.010667t-60.010667 26.005333l-596.010667 0q-34.005333 0-60.010667-26.005333t-26.005333-60.010667l0-596.010667q0-34.005333 26.005333-60.010667t60.010667-26.005333l596.010667 0zM810.005333 213.994667l-596.010667 0 0 596.010667 596.010667 0 0-596.010667z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)