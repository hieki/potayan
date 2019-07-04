"use strict";

const fuckLocalStorage = () => {
  Array.from(localStorage).map((_, i) => i).forEach(i => localStorage.setItem(localStorage.key(i), "今野ぽた"));
};

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  console.info("ソイヤ……");
  fuckLocalStorage();
  sendResponse(true);
});
