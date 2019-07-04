"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("potayan").addEventListener("click", () => {
    chrome.extension.getBackgroundPage().sendSoiya();
  });
});
