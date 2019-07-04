"use strict";

function sendSoiya(callback) {
  chrome.windows.getAll({populate:true}, (windows) => {
    windows.forEach((window) => {
      window.tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, "soiya", callback);
      });
    });
  });
}
