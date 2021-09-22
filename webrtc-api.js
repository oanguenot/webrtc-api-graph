function saveSvg(svgEl, name) {
  svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svgEl.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = name;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
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
  const browser = document.querySelector('#browser');
  const browser_name = parseUA(navigator.userAgent);
  browser.innerHTML = browser_name

  button.onclick = async () => {
    const svg = document.querySelector("#render")
    saveSvg(svg, `webrtc_model_${browser_name}.svg`);
  }

  mermaid.initialize({
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'linear',
      diagramPadding: 8,
    },
    securityLevel: 'loose',
  });

  let model = "classDiagram\n"

  const webrtcAPI = [
    "MediaDevices",
    "MediaDeviceInfo",
    "MediaStream",
    "MediaStreamTrack",
    "RTCPeerConnection",
    "RTCDataChannel",
    "RTCCertificate",
    "RTCDTMFSender",
    "RTCDtlsTransport",
    "RTCIceCandidate",
    "RTCIceTransport",
    "RTCRtpTransceiver",
    "RTCRtpReceiver",
    "RTCRtpSender",
    "RTCSctpTransport",
    "RTCSessionDescription",
    "RTCStatsReport",
    "RTCEncodedAudioFrame",
    "RTCEncodedVideoFrame",
    "RTCError",
    "RTCEncodedAudioFrame",
    "RTCEncodedVideoFrame",
    "AudioFrame",
    "VideoFrame",
    "MediaStreamTrackProcessor",
    "MediaStreamTrackGenerator",
    "WritableStream",
    "ReadableStream",
    "ReadableStreamDefaultReader",
    "TransformStream",
    "AudioNode",
    "AudioContext",
    "AudioListener",
    "PannerNode",
    "AudioBufferSourceNode",
    "GainNode",
    "StereoPannerNode",
    "AnalyserNode",
    "DelayNode",
    "BiquadFilterNode",
    "MediaElementAudioSourceNode",
    "MediaStreamAudioSourceNode",
    "MediaStreamAudioDestinationNode",
    "ConstantSourceNode",
    "ConvolverNode",
    "ChannelSplitterNode",
    "ChannelMergerNode",
    "OscillatorNode",
    "AudioScheduledSourceNode",
    "HTMLMediaElement"

  ]
  // Relation

  model += "AudioContext <-- AudioNode\n"
  model += "MediaStreamTrack <-- RTCPeerConnection\n"
  model += "MediaStreamTrack <-- MediaStream\n"
  model += "MediaStream <-- RTCPeerConnection\n"
  model += "MediaDeviceInfo <-- MediaDevices\n"
  model += "MediaStream <-- MediaDevices\n"
  model += "RTCRtpTransceiver <-- RTCPeerConnection\n"
  model += "RTCRtpReceiver <-- RTCRtpTransceiver\n"
  model += "RTCRtpSender <-- RTCRtpTransceiver\n"
  model += "MediaStreamTrack <-- RTCRtpSender\n"
  model += "MediaStreamTrack <-- RTCRtpReceiver\n"
  model += "RTCDtlsTransport <-- RTCRtpSender\n"
  model += "RTCDTMFSender <-- RTCRtpSender\n"
  model += "RTCDtlsTransport <-- RTCRtpReceiver\n"
  model += "RTCIceTransport <-- RTCDtlsTransport\n"
  model += "RTCIceCandidate <-- RTCIceTransport\n"
  model += "RTCStatsReport <-- RTCRtpReceiver\n"
  model += "RTCStatsReport <-- RTCRtpSender\n"
  model += "RTCStatsReport <-- RTCPeerConnection\n"
  model += "RTCDataChannel <-- RTCPeerConnection\n"
  model += "RTCSessionDescription <-- RTCPeerConnection\n"
  model += "RTCCertificate <-- RTCPeerConnection\n"
  model += "RTCSctpTransport <-- RTCPeerConnection\n"
  model += "RTCDtlsTransport <-- RTCSctpTransport\n"
  model += "MediaStream <-- RTCRtpSender\n"

  model += "MediaStreamTrackProcessor <-- MediaStreamTrack\n"
  model += "MediaStreamTrack <-- MediaStreamTrackGenerator\n"
  model += "MediaStreamTrackGenerator <-- WritableStream\n"
  model += "ReadableStream <-- MediaStreamTrackProcessor\n"
  model += "ReadableStream <-- TransformStream\n"
  model += "WritableStream <-- TransformStream\n"
  model += "WritableStreamDefaultWriter <-- WritableStream\n"
  model += "ReadableStreamDefaultReader <-- ReadableStream\n"
  model += "VideoFrame <-- ReadableStreamDefaultReader\n"
  model += "VideoFrame <-- WritableStreamDefaultWriter\n"
  model += "MediaStreamTrack <-- WritableStream\n"
  model += "MediaElementAudioSourceNode <-- AudioContext\n"
  model += "HTMLMediaElement <-- MediaElementAudioSourceNode\n"
  model += "MediaStream <-- MediaStreamAudioSourceNode\n"
  model += "MediaStreamAudioDestinationNode <-- AudioContext\n"
  model += "MediaStream <-- MediaStreamAudioDestinationNode\n"
  model += "MediaStreamTrack <-- HTMLMediaElement\n"
  model += "AudioNode <-- GainNode\n"
  model += "AudioNode <-- AnalyserNode\n"
  model += "AudioNode <-- PannerNode\n"
  model += "AudioNode <-- StereoPannerNode\n"
  model += "AudioNode <-- DelayNode\n"
  model += "AudioNode <-- ConstantSourceNode\n"
  model += "AudioNode <-- ConvolverNode\n"
  model += "AudioNode <-- OscillatorNode\n"
  model += "AudioNode <-- AudioSchedulerSourceNode\n"
  model += "AudioNode <-- AudioBufferSourceNode\n"
  model += "AudioNode <-- AudioScheduledSourceNode\n"
  model += "AudioNode <-- ChannelSplitterNode\n"
  model += "AudioNode <-- ChannelMergerNode\n"
  model += "AudioNode <-- BiquadFilterNode\n"
  model += "PannerNode <-- AudioListener\n"

  // Discover API
  webrtcAPI.forEach(apiName => {

    try {
      const api = eval(apiName)
      if (api) {
        const descriptors = Object.getOwnPropertyDescriptors(api.prototype)
        const nbElt = Object.keys(descriptors).length

        model += `class ${api.name}{\n`
        model += `<<${nbElt}>>\n`
        Object.keys(descriptors).sort((a, b) => (a.localeCompare(b))).forEach(key => {
          const obj = descriptors[key]
          if ("value" in obj) {
            model += `${key}()\n`
          } else {
            model += `${key}\n`
          }
        });
        model += "}\n";
      }
    } catch (err) {
      console.log("Error", err);
    }
  })

  var element = document.querySelector("#webrtc");

  var insertSvg = function (svgCode, bindFunctions) {
    element.innerHTML = svgCode;
  };
  var graph = mermaid.mermaidAPI.render('render', model, insertSvg);
}

document.addEventListener("DOMContentLoaded", ready);
