/**
 * Author: Mike Saraus
 * https://github.com/mikesaraus
 *
 * If SPA is Unsupported (e.g.: Github Pages)
 *
 * @preserve (c) 2022
 */
(function (location, pathSegments) {
  function resolve() {
    if (location.search[1] === '/') {
      const decoded = location.search
        .slice(1)
        .split('&')
        .map(function (s) {
          return s.replace(/~and~/g, '&');
        })
        .join('?');
      window.history.replaceState(
        null,
        null,
        location.pathname.slice(0, -1) + decoded + location.hash
      );
    }
  }

  function redirect() {
    location.href =
      location.protocol +
      '//' +
      location.hostname +
      (location.port ? ':' + location.port : '') +
      location.pathname
        .split('/')
        .slice(0, 1 + pathSegments)
        .join('/') +
      '/?/' +
      location.pathname
        .slice(1)
        .split('/')
        .slice(pathSegments)
        .join('/')
        .replace(/&/g, '~and~') +
      (location.search
        ? '&' + location.search.slice(1).replace(/&/g, '~and~')
        : '') +
      location.hash;
  }

  document.title === '404' ? redirect() : resolve();
})(window.location, 0);
