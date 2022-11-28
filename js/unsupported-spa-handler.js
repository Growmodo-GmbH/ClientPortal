/**
* Growmodo Hub v0.6.0
* (c) 2022 Growmodo, GmbH
*
* @preserve
*/
(function(e,n){function a(){if("/"===e.search[1]){const n=e.search.slice(1).split("&").map((function(e){return e.replace(/~and~/g,"&")})).join("?");window.history.replaceState(null,null,e.pathname.slice(0,-1)+n+e.hash)}}function t(){e.href=e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")+e.pathname.split("/").slice(0,1+n).join("/")+"/?/"+e.pathname.slice(1).split("/").slice(n).join("/").replace(/&/g,"~and~")+(e.search?"&"+e.search.slice(1).replace(/&/g,"~and~"):"")+e.hash}"404"===document.title?t():a()})(window.location,0);