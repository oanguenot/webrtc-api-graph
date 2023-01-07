export const interfaces = [
  "AnalyserNode",
  "AudioNode",
  "AudioContext",
  "AudioListener",
  "AudioBuffer",
  "AudioBufferSourceNode",
  "AudioDecoder",
  "AudioData",
  "AudioEncoder",
  "AudioDestinationNode",
  "AudioNode",
  "AudioProcessingEvent",
  "AudioScheduledSourceNode",
  "AudioWorklet",
  "AudioWorkletNode",
  "BiquadFilterNode",
  "ConstantSourceNode",
  "ConvolverNode",
  "ChannelSplitterNode",
  "ChannelMergerNode",
  "DelayNode",
  "EncodedVideoChunk",
  "EncodedAudioChunk",
  "GainNode",
  "HTMLMediaElement",
  "HTMLVideoElement",
  "HTMLAudioElement",
  "HTMLTrackElement",
  "HTMLCanvasElement",
  "ImageCapture",
  "ImageData",
  "ImageBitmap",
  "ImageTrack",
  "MediaDevices",
  "MediaCapabilities",
  "MediaDeviceInfo",
  "MediaStream",
  "MediaError",
  "MediaRecorder",
  "MediaSession",
  "MediaSource",
  "MediaEncryptedEvent",
  "MediaStreamTrack",
  "MediaStreamTrackProcessor",
  "MediaStreamTrackGenerator",
  "MediaElementAudioSourceNode",
  "MediaStreamAudioSourceNode",
  "MediaStreamAudioDestinationNode",
  "MimeType",
  "OscillatorNode",
  "OffscreenCanvas",
  "PannerNode",
  "Permissions",
  "PermissionStatus",
  "ReadableStream",
  "ReadableStreamDefaultReader",
  "RTCCertificate",
  "RTCDataChannel",
  "RTCDataChannelEvent",
  "RTCDTMFSender",
  "RTCDtlsTransport",
  "RTCError",
  "RTCEncodedAudioFrame",
  "RTCEncodedVideoFrame",
  "RTCIceCandidate",
  "RTCIceTransport",
  "RTCPeerConnection",
  "RTCPeerConnectionIceEvent",
  "RTCPeerConnectionIceErrorEvent",
  "RTCRtpReceiver",
  "RTCRtpSender",
  "RTCRtpTransceiver",
  "RTCSctpTransport",
  "RTCSessionDescription",
  "RTCStatsReport",
  "RTCTrackEvent",
  "StereoPannerNode",
  "SourceBuffer",
  "VideoFrame",
  "VideoDecoder",
  "VideoEncoder",
  "TransformStream",
  "TextTrack",
  "WebTransport",
  "WritableStream",
]

export const prepareMermaidAPIDiagram = () => {
  let model = "classDiagram\n"
  model += "AudioContext <-- AudioNode\n"
  model += "MediaDeviceInfo <-- MediaDevices\n"
  model += "RTCRtpTransceiver <-- RTCPeerConnection\n"
  model += "RTCRtpReceiver <-- RTCRtpTransceiver\n"
  model += "RTCRtpSender <-- RTCRtpTransceiver\n"
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
  model += "OffscreenCanvas <-- HTMLCanvasElement\n"
  model += "MediaStreamTrackProcessor <-- MediaStreamTrack\n"
  model += "MediaStreamTrackGenerator <-- WritableStream\n"
  model += "ReadableStream <-- MediaStreamTrackProcessor\n"
  model += "ReadableStream <-- TransformStream\n"
  model += "WritableStream <-- TransformStream\n"
  model += "WritableStreamDefaultWriter <-- WritableStream\n"
  model += "ReadableStreamDefaultReader <-- ReadableStream\n"
  model += "VideoFrame <-- ReadableStreamDefaultReader\n"
  model += "VideoFrame <-- WritableStreamDefaultWriter\n"
  model += "ImageBitmap <-- VideoFrame\n"
  model += "ImageData <-- ImageBitmap\n"
  model += "OffscreenCanvas <-- ImageData\n"
  model += "MediaElementAudioSourceNode <-- AudioContext\n"
  model += "AudioBuffer <-- AudioContext\n"
  model += "HTMLMediaElement <-- MediaElementAudioSourceNode\n"
  model += "HTMLMediaElement <-- HTMLAudioElement\n"
  model += "HTMLMediaElement <-- HTMLVideoElement\n"
  model += "HTMLMediaElement <-- HTMLModelElement\n"
  model += "HTMLMediaElement <-- HTMLCanvasElement\n"
  model += "MediaStreamAudioDestinationNode <-- AudioContext\n"
  model += "AudioDestinationNode <-- AudioContext\n"
  model += "MediaStream <-- RTCPeerConnection\n"
  model += "MediaStream <-- MediaDevices\n"
  model += "MediaStream <-- MediaRecorder\n"
  model += "MediaStream <-- HTMLCanvasElement\n"
  model += "MediaStream <-- MediaStreamAudioSourceNode\n"
  model += "MediaStream <-- MediaStreamAudioDestinationNode\n"
  model += "MediaStream <-- RTCRtpSender\n"
  model += "MediaStreamTrack <-- RTCPeerConnection\n"
  model += "MediaStreamTrack <-- MediaStream\n"
  model += "MediaStreamTrack <-- RTCRtpSender\n"
  model += "MediaStreamTrack <-- RTCRtpReceiver\n"
  model += "MediaStreamTrack <-- HTMLMediaElement\n"
  model += "MediaStreamTrack <-- WritableStream\n"
  model += "MediaStreamTrack <-- MediaStreamTrackGenerator\n"
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
  model += "SourceBuffer <-- MediaSource\n"
  model += "TextTrack <-- HTMLTrackElement\n"
  model += "PermissionStatus <-- Permissions\n"
  return model;
}

export const buildMermaidDiagram = (existingModel, nodes) => {
  Object.keys(nodes).forEach(report => {
    existingModel += `class ${report} {\n`;
    const nbElt = nodes[report].length;
    existingModel += `<<${nbElt}>>\n`
    existingModel += `<<report>>\n`
    nodes[report].forEach(elt => {
      existingModel += `${elt}\n`;
    })
    existingModel += "}\n";
  });
  return existingModel;
}
