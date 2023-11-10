var esc = function(param) {
  return encodeURIComponent(param)
    .replace(/[!'()*]/g, escape)
    .replace(/%20/g, '+');
};
var isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var httpBuildQuery = function(queryData, numericPrefix, argSeparator, tempKey) {
  numericPrefix = numericPrefix || null;
  argSeparator = argSeparator || '&';
  tempKey = tempKey || null;

  var query = Object.keys(queryData).map(k => {
    var res;
    var key = k;

    if (tempKey) {
      key = tempKey + '[' + key + ']';
    }

    if (typeof queryData[k] === 'object') {
      res = httpBuildQuery(queryData[k], null, argSeparator, key);
    } else {
      if (numericPrefix) {
        key = isNumeric(key) ? numericPrefix + Number(key) : key;
      }
      res = esc(key) + '=' + esc(queryData[k]);
    }

    return res;
  });

  return query.join(argSeparator).replace(/[!'()*]/g, '');
};

export function httpRequestUrl(action, params){
  var localhost = '192.168.1.66';
  //var localhost = '10.98.106.128';
  //var url = 'http://'+localhost+'/MEOW_API/api/'+action;
  var url = 'https://api.meowmag.mx/api/'+action;
      url = url + '?apikey=RbaAiObyaKdUOSd63BCX&'+ httpBuildQuery(params);
  //console.log('REQUEST URL:', url);
  return url;
}
export async function http_fetch(action, params){
  if(!params){
    params = {};
  }
  try{
    var url = httpRequestUrl(action, params);
    const result = await fetch(url);
    let responseJson = await result.json();
    //console.log('REQUEST RESPONSE:', responseJson);
    return responseJson;
  }catch(err){
    //console.warn('REQUEST FAILED:', err.message);
    return false;
  }
}
