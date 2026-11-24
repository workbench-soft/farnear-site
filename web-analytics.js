if (navigator.userAgent.indexOf("FarnearApp") < 0) addEventListener("load", function () {
  if (/[?&]chat=/.test(location.search) || /^\/r\/?$/.test(location.pathname)) return;
  var s = document.createElement("script"); s.defer = true; s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: "f5de78701e794dfc9e06d753109f57d5", spa: false }));
  document.head.appendChild(s);
});