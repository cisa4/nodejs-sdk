const app = require('../index');

function setPowerState(deviceId, data) {
  console.log(deviceId, data);
}
function setPowerLevel(deviceId, data) {
  console.log(deviceId, data);
}

function adjustPowerLevel(deviceId, data) {
  console.log(deviceId, data);
}

function setColor(deviceId, data) {
  console.log(deviceId, data);
}

function setRangeValue(deviceId, data) {
  console.log(deviceId, data);
}
function setLockState(deviceId, data) {
  console.log(deviceId, data);
}

function setBrightness(deviceId, data) {
  console.log(deviceId, data);
}

function setVolume(deviceId, data) {
  console.log(deviceId, data);
}

function adjustVolume(deviceId, data) {
  console.log(deviceId, data);
}

function setMute(deviceId, data) {
  console.log(deviceId, data);
}


const callbacks = {
  setPowerState,
  setPowerLevel,
  adjustPowerLevel,
  setColor,
  setRangeValue,
  setLockState,
  setBrightness,
  setVolume,
  adjustVolume,
  setMute,
};

app(callbacks);
