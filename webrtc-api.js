'use strict';
import {interfaces, prepareMermaidAPIDiagram, buildMermaidDiagram} from './interfaces.js';

let completeStatsModel;
let objText = {};

function buildTextExport(model, name) {
  let textStat = "";
  const keys = [...Object.keys(model)];
  // Sort report alphabetically
  keys.sort();

  // Parse keys and extract properties
  keys.forEach(key => {
    textStat += `${name} ${key}\n`;
    // order properties alphabetically
    model[key].sort((name1, name2) => {
      const index1 = name1.indexOf(" ");
      const index2 = name2.indexOf(" ");
      const prop1 = name1.substr(index1 + 1)
      const prop2 = name2.substr(index2 + 1);

      if(prop1.toLowerCase() < prop2.toLowerCase()) { return -1; }
      if(prop1.toLowerCase() < prop2.toLowerCase()) {return 1; }
      return 0;
    });
    textStat += model[key].join("\n");
    textStat += "\n\n";
  });

  return textStat;
}

function saveBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = name.replace(/\s+/g, '').replace("%20", "");
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
function saveSvg(svgEl, name) {
  svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const svgData = svgEl.outerHTML;
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
  saveBlob(svgBlob, name);
}

function saveToText(content, name) {
  const txtBlob = new Blob([content], { type: "text/plain;charset=utf-8" });
  saveBlob(txtBlob, name)
}

const parseUA = (userAgent) => {
  if (userAgent.includes('Firefox/')) {
    return (`Firefox-v${userAgent.split('Firefox/')[1].split(" ")[0]}`)
  }

  if (userAgent.includes('Edg/')) {
    return (`Edge-v${userAgent.split('Edg/')[1].split(" ")[0]}`)
  }

  if (userAgent.includes('Chrome/')) {
    return (`Chrome-v${userAgent.split('Chrome/')[1].split(" ")[0]}`)
  }

  if (userAgent.includes('Safari/')) {
    return (`Safari-v${userAgent.split('Safari/')[1].split(" ")[0]}`)
  }
}

const ready = async () => {
  console.log('DOM is ready');
  const button = document.querySelector('#save');
  const buttonTxt = document.querySelector('#saveTxt');
  const browser = document.querySelector('#browser');
  const browser_name = parseUA(navigator.userAgent);
  browser.innerHTML = browser_name

  button.onclick = () => {
    const svg = document.querySelector("#render")
    saveSvg(svg, `webrtc_model_${browser_name}.svg`);
  }

  buttonTxt.onclick = () => {
    saveToText(completeStatsModel, `webrtc_model_${browser_name}.txt`)
  }

  mermaid.initialize({
    startOnLoad: true,
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      curve: 'basis',
      diagramPadding: 8,
    },
    securityLevel: 'loose',
  });

  // Discover API
  interfaces.forEach(apiName => {
    let api

    objText[apiName] = [];

    try {
      api = eval(apiName)
    }
    catch (err) {
      console.log(`api ${apiName} is not defined`);
    }

    if (api) {
      const descriptors = Object.getOwnPropertyDescriptors(api.prototype)
      Object.keys(descriptors).sort((a, b) => (a.localeCompare(b))).forEach(key => {
        const obj = descriptors[key]
        if ("value" in obj) {
          objText[apiName].push(`${key}()`);
        } else {
          objText[apiName].push(`${key}`);
        }
      });
    }
  });

  // Build text export
  completeStatsModel = buildTextExport(objText, "Interface");
  let mermaidModel = prepareMermaidAPIDiagram();
  mermaidModel = buildMermaidDiagram(mermaidModel, objText);

  const element = document.querySelector("#webrtc");

  const insertSvg = function (svgCode, bindFunctions) {
    element.innerHTML = svgCode;
  };
  mermaid.mermaidAPI.render('render', mermaidModel, insertSvg);
}

document.addEventListener("DOMContentLoaded", ready);
