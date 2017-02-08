"use strict";

const DOWNLOAD_ID = "dl-ext-overlay-div";
const DOWNLOAD_LINK_ID = "dl-ext-link-a";
const POLL_INTERVAL = 3 * 1000;

setInterval(() => { 
    let audioPlayer = document.getElementById("player-audio");
    if (audioPlayer) {
        let title = audioPlayer.getAttribute("title");
        let src = audioPlayer.getAttribute("src");
        let playerInfo = document.getElementsByClassName("player-info__title-wrapper");

        if (playerInfo.length > 0 && src) {
            let item = playerInfo.item(0);

            let dlLinkElement = document.getElementById(DOWNLOAD_LINK_ID);
            if (!dlLinkElement){
                document.body.appendChild(createElement(title, src));
            } else {
                dlLinkElement.setAttribute("src", src); 
                dlLinkElement.setAttribute("title", title);
                dlLinkElement.setAttribute("href", src);
            }
        }
    }
}, POLL_INTERVAL);

const createElement = function(title, src) {
    const downloadDiv = document.createElement("div");
    downloadDiv.setAttribute("class", "dl-overlay-div")
    downloadDiv.setAttribute("id", DOWNLOAD_ID)
    downloadDiv.setAttribute("title", "Download: " + title);

    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", src);
    downloadLink.setAttribute("id", DOWNLOAD_LINK_ID);
    downloadLink.setAttribute("download", true);
    downloadLink.setAttribute("target", "_blank");
    const linkContent = document.createElement("span");
    linkContent.setAttribute("class", "dl-ext-span");
    downloadLink.appendChild(linkContent);
    downloadDiv.appendChild(downloadLink);
    return downloadDiv;
};