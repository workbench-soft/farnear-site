if (navigator.userAgent.indexOf("FarnearApp") >= 0) document.documentElement.classList.add("in-app");
else addEventListener("load", function () {
  var load = function () { if (/[?&]chat=/.test(location.search) || /^\/r\/?$/.test(location.pathname)) return;
    var s = document.createElement("script"); s.async = true; s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8598703460892343"; document.head.appendChild(s); };
  if (window.requestIdleCallback) requestIdleCallback(load, { timeout: 3000 });
  else setTimeout(load, 1000);
});