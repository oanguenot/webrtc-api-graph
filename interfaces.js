export const interfaces = [
  "AnalyserNode",
  "AudioBuffer",
  "AudioBufferSourceNode",
  "AudioContext",
  "AudioData",
  "AudioDecoder",
  "AudioDestinationNode",
  "AudioEncoder",
  "AudioFrame",
  "AudioListener",
  "AudioNode",
  "AudioParam",
  "AudioProcessingEvent",
  "AudioScheduledSourceNode",
  "AudioSinkInfo",
  "AudioWorklet",
  "AudioWorkletNode",
  "BaseAudioContext",
  "BiquadFilterNode",
  "BrowserCaptureMediaStreamTrack",
  "CanvasCaptureMediaStreamTrack",
  "CaptureController",
  "ChannelMergerNode",
  "ChannelSplitterNode",
  "CompressionStream",
  "ConstantSourceNode",
  "ConvolverNode",
  "DecompressionStream",
  "DelayNode",
  "EncodedVideoChunk",
  "EncodedAudioChunk",
  "GainNode",
  "HTMLAudioElement",
  "HTMLMediaElement",
  "HTMLModelElement",
  "HTMLVideoElement",
  "HTMLTrackElement",
  "HTMLCanvasElement",
  "ImageBitmap",
  "ImageCapture",
  "ImageData",
  "ImageDecoder",
  "ImageTrack",
  "InputDeviceCapabilities",
  "InputDeviceInfo",
  "MediaCapabilities",
  "MediaDevices",
  "MediaDeviceInfo",
  "MediaElementAudioSourceNode",
  "MediaEncryptedEvent",
  "MediaError",
  "MediaMetadata",
  "MediaRecorder",
  "MediaSession",
  "MediaSource",
  "MediaStream",
  "MediaStreamAudioDestinationNode",
  "MediaStreamAudioSourceNode",
  "MediaStreamTrack",
  "MediaStreamTrackGenerator",
  "MediaStreamTrackProcessor",
  "MediaStreamTrackVideoStats",
  "MediaStreamTrackAudioStats",
  "MimeType",
  "OscillatorNode",
  "OffscreenCanvas",
  "PannerNode",
  "Permissions",
  "PermissionStatus",
  "ReadableStream",
  "ReadableStreamDefaultController",
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
  "TextTrack",
  "TextDecoder",
  "TextDecoderStream",
  "TextEncoder",
  "TextEncoderStream",
  "TransformStream",
  "TransformStreamDefaultController",
  "VideoDecoder",
  "VideoEncoder",
  "VideoFrame",
  "WebTransport",
  "WebTransportBidirectionalStream",
  "WebTransportDatagramDuplexStream",
  "WebTransportError",
  "WritableStream",
  "WritableStreamDefaultController",
  "WritableStreamDefaultWriter",
]

export const prepareMermaidAPIDiagram = () => {
  let model = "classDiagram\n"
  model += "AudioContext <-- AudioNode\n"
  model += "AudioContext <-- BaseAudioContext\n"
  model += "AudioBuffer <-- BaseAudioContext\n"
  model += "AudioBuffer <-- AudioBufferSourceNode\n"
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
  model += "AudioSchedulerSourceNode <-- AudioBufferSourceNode\n"
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
