var storage = require('chromeapp/storage')();
var manifest = require('chromeapp/manifest')();

function handleInterfaceDiscovery(interfaces) {
  var networks = interfaces.filter(isIPv4).map(function(data) {
    return data.address + '/' + data.prefixLength;
  });
  
  console.log(networks);
}

function isIPv4(data) {
  // ensure we do not have : separated parts
  return data.address.split(':').length <= 1;
}

chrome.system.network.getNetworkInterfaces(handleInterfaceDiscovery);