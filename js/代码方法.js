// 封装 storage 方法，带过期时间
var Storage = (function() {
  return {
    set: function(key, value, expireSeconds) {
      localStorage[key] = JSON.stringify({
        value: value,
        expired:
          expireSeconds === undefined
            ? undefined
            : Date.now() + 1000 * expireSeconds
      });
    },
    get: function(key) {
      if (localStorage[key] === undefined) {
        return;
      }
      var o = JSON.parse(localStorage[key]);
      if (o.expired === undefined || Date.now() < o.expired) {
        return o.value;
      } else {
        delete localStorage[key];
      }
    }
  };
})();

// 写个 Tab => 要求面向对象