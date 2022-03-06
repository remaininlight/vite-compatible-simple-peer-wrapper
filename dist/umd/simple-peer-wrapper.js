(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["simple-peer-wrapper"] = {}));
})(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var debug = require("debug")("simple-peer");

  var getBrowserRTC = require("get-browser-rtc");

  var randombytes = require("randombytes");

  var stream = require("vite-compatible-readable-stream");

  var queueMicrotask = require("queue-microtask"); // TODO: remove when Node 10 is not supported


  var errCode = require("err-code");

  var _require = require("buffer"),
      Buffer = _require.Buffer;

  var MAX_BUFFERED_AMOUNT = 64 * 1024;
  var ICECOMPLETE_TIMEOUT = 5 * 1000;
  var CHANNEL_CLOSING_TIMEOUT = 5 * 1000; // HACK: Filter trickle lines when trickle is disabled #354

  function filterTrickle(sdp) {
    return sdp.replace(/a=ice-options:trickle\s\n/g, "");
  }

  function warn(message) {
    console.warn(message);
  }
  /**
   * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
   * Duplex stream.
   * @param {Object} opts
   */


  var Peer = /*#__PURE__*/function (_stream$Duplex) {
    _inherits(Peer, _stream$Duplex);

    var _super = _createSuper(Peer);

    function Peer(opts) {
      var _this;

      _classCallCheck(this, Peer);

      opts = Object.assign({
        allowHalfOpen: false
      }, opts);
      _this = _super.call(this, opts);
      _this._id = randombytes(4).toString("hex").slice(0, 7);

      _this._debug("new peer %o", opts);

      _this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString("hex") : null;
      _this.initiator = opts.initiator || false;
      _this.channelConfig = opts.channelConfig || Peer.channelConfig;
      _this.channelNegotiated = _this.channelConfig.negotiated;
      _this.config = Object.assign({}, Peer.config, opts.config);
      _this.offerOptions = opts.offerOptions || {};
      _this.answerOptions = opts.answerOptions || {};

      _this.sdpTransform = opts.sdpTransform || function (sdp) {
        return sdp;
      };

      _this.streams = opts.streams || (opts.stream ? [opts.stream] : []); // support old "stream" option

      _this.trickle = opts.trickle !== undefined ? opts.trickle : true;
      _this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false;
      _this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
      _this.destroyed = false;
      _this.destroying = false;
      _this._connected = false;
      _this.remoteAddress = undefined;
      _this.remoteFamily = undefined;
      _this.remotePort = undefined;
      _this.localAddress = undefined;
      _this.localFamily = undefined;
      _this.localPort = undefined;
      _this._wrtc = opts.wrtc && _typeof(opts.wrtc) === "object" ? opts.wrtc : getBrowserRTC();

      if (!_this._wrtc) {
        if (typeof window === "undefined") {
          throw errCode(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
        } else {
          throw errCode(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        }
      }

      _this._pcReady = false;
      _this._channelReady = false;
      _this._iceComplete = false; // ice candidate trickle done (got null candidate)

      _this._iceCompleteTimer = null; // send an offer/answer anyway after some timeout

      _this._channel = null;
      _this._pendingCandidates = [];
      _this._isNegotiating = false; // is this peer waiting for negotiation to complete?

      _this._firstNegotiation = true;
      _this._batchedNegotiation = false; // batch synchronous negotiations

      _this._queuedNegotiation = false; // is there a queued negotiation request?

      _this._sendersAwaitingStable = [];
      _this._senderMap = new Map();
      _this._closingInterval = null;
      _this._remoteTracks = [];
      _this._remoteStreams = [];
      _this._chunk = null;
      _this._cb = null;
      _this._interval = null;

      try {
        _this._pc = new _this._wrtc.RTCPeerConnection(_this.config);
      } catch (err) {
        _this.destroy(errCode(err, "ERR_PC_CONSTRUCTOR"));

        return _possibleConstructorReturn(_this);
      } // We prefer feature detection whenever possible, but sometimes that's not
      // possible for certain implementations.


      _this._isReactNativeWebrtc = typeof _this._pc._peerConnectionId === "number";

      _this._pc.oniceconnectionstatechange = function () {
        _this._onIceStateChange();
      };

      _this._pc.onicegatheringstatechange = function () {
        _this._onIceStateChange();
      };

      _this._pc.onconnectionstatechange = function () {
        _this._onConnectionStateChange();
      };

      _this._pc.onsignalingstatechange = function () {
        _this._onSignalingStateChange();
      };

      _this._pc.onicecandidate = function (event) {
        _this._onIceCandidate(event);
      }; // HACK: Fix for odd Firefox behavior, see: https://github.com/feross/simple-peer/pull/783


      if (_typeof(_this._pc.peerIdentity) === "object") {
        _this._pc.peerIdentity["catch"](function (err) {
          _this.destroy(errCode(err, "ERR_PC_PEER_IDENTITY"));
        });
      } // Other spec events, unused by this implementation:
      // - onconnectionstatechange
      // - onicecandidateerror
      // - onfingerprintfailure
      // - onnegotiationneeded


      if (_this.initiator || _this.channelNegotiated) {
        _this._setupData({
          channel: _this._pc.createDataChannel(_this.channelName, _this.channelConfig)
        });
      } else {
        _this._pc.ondatachannel = function (event) {
          _this._setupData(event);
        };
      }

      if (_this.streams) {
        _this.streams.forEach(function (stream) {
          _this.addStream(stream);
        });
      }

      _this._pc.ontrack = function (event) {
        _this._onTrack(event);
      };

      _this._debug("initial negotiation");

      _this._needsNegotiation();

      _this._onFinishBound = function () {
        _this._onFinish();
      };

      _this.once("finish", _this._onFinishBound);

      return _this;
    }

    _createClass(Peer, [{
      key: "bufferSize",
      get: function get() {
        return this._channel && this._channel.bufferedAmount || 0;
      } // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
      // https://bugs.chromium.org/p/chromium/issues/detail?id=882743

    }, {
      key: "connected",
      get: function get() {
        return this._connected && this._channel.readyState === "open";
      }
    }, {
      key: "address",
      value: function address() {
        return {
          port: this.localPort,
          family: this.localFamily,
          address: this.localAddress
        };
      }
    }, {
      key: "signal",
      value: function signal(data) {
        var _this2 = this;

        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");

        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (err) {
            data = {};
          }
        }

        this._debug("signal()");

        if (data.renegotiate && this.initiator) {
          this._debug("got request to renegotiate");

          this._needsNegotiation();
        }

        if (data.transceiverRequest && this.initiator) {
          this._debug("got request for transceiver");

          this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
        }

        if (data.candidate) {
          if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
            this._addIceCandidate(data.candidate);
          } else {
            this._pendingCandidates.push(data.candidate);
          }
        }

        if (data.sdp) {
          this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(function () {
            if (_this2.destroyed) return;

            _this2._pendingCandidates.forEach(function (candidate) {
              _this2._addIceCandidate(candidate);
            });

            _this2._pendingCandidates = [];
            if (_this2._pc.remoteDescription.type === "offer") _this2._createAnswer();
          })["catch"](function (err) {
            _this2.destroy(errCode(err, "ERR_SET_REMOTE_DESCRIPTION"));
          });
        }

        if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
          this.destroy(errCode(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
        }
      }
    }, {
      key: "_addIceCandidate",
      value: function _addIceCandidate(candidate) {
        var _this3 = this;

        var iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);

        this._pc.addIceCandidate(iceCandidateObj)["catch"](function (err) {
          if (!iceCandidateObj.address || iceCandidateObj.address.endsWith(".local")) {
            warn("Ignoring unsupported ICE candidate.");
          } else {
            _this3.destroy(errCode(err, "ERR_ADD_ICE_CANDIDATE"));
          }
        });
      }
      /**
       * Send text/binary data to the remote peer.
       * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
       */

    }, {
      key: "send",
      value: function send(chunk) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");

        this._channel.send(chunk);
      }
      /**
       * Add a Transceiver to the connection.
       * @param {String} kind
       * @param {Object} init
       */

    }, {
      key: "addTransceiver",
      value: function addTransceiver(kind, init) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");

        this._debug("addTransceiver()");

        if (this.initiator) {
          try {
            this._pc.addTransceiver(kind, init);

            this._needsNegotiation();
          } catch (err) {
            this.destroy(errCode(err, "ERR_ADD_TRANSCEIVER"));
          }
        } else {
          this.emit("signal", {
            // request initiator to renegotiate
            type: "transceiverRequest",
            transceiverRequest: {
              kind: kind,
              init: init
            }
          });
        }
      }
      /**
       * Add a MediaStream to the connection.
       * @param {MediaStream} stream
       */

    }, {
      key: "addStream",
      value: function addStream(stream) {
        var _this4 = this;

        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");

        this._debug("addStream()");

        stream.getTracks().forEach(function (track) {
          _this4.addTrack(track, stream);
        });
      }
      /**
       * Add a MediaStreamTrack to the connection.
       * @param {MediaStreamTrack} track
       * @param {MediaStream} stream
       */

    }, {
      key: "addTrack",
      value: function addTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");

        this._debug("addTrack()");

        var submap = this._senderMap.get(track) || new Map(); // nested Maps map [track, stream] to sender

        var sender = submap.get(stream);

        if (!sender) {
          sender = this._pc.addTrack(track, stream);
          submap.set(stream, sender);

          this._senderMap.set(track, submap);

          this._needsNegotiation();
        } else if (sender.removed) {
          throw errCode(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
        } else {
          throw errCode(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
        }
      }
      /**
       * Replace a MediaStreamTrack by another in the connection.
       * @param {MediaStreamTrack} oldTrack
       * @param {MediaStreamTrack} newTrack
       * @param {MediaStream} stream
       */

    }, {
      key: "replaceTrack",
      value: function replaceTrack(oldTrack, newTrack, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");

        this._debug("replaceTrack()");

        var submap = this._senderMap.get(oldTrack);

        var sender = submap ? submap.get(stream) : null;

        if (!sender) {
          throw errCode(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        }

        if (newTrack) this._senderMap.set(newTrack, submap);

        if (sender.replaceTrack != null) {
          sender.replaceTrack(newTrack);
        } else {
          this.destroy(errCode(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"));
        }
      }
      /**
       * Remove a MediaStreamTrack from the connection.
       * @param {MediaStreamTrack} track
       * @param {MediaStream} stream
       */

    }, {
      key: "removeTrack",
      value: function removeTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");

        this._debug("removeSender()");

        var submap = this._senderMap.get(track);

        var sender = submap ? submap.get(stream) : null;

        if (!sender) {
          throw errCode(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        }

        try {
          sender.removed = true;

          this._pc.removeTrack(sender);
        } catch (err) {
          if (err.name === "NS_ERROR_UNEXPECTED") {
            this._sendersAwaitingStable.push(sender); // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874

          } else {
            this.destroy(errCode(err, "ERR_REMOVE_TRACK"));
          }
        }

        this._needsNegotiation();
      }
      /**
       * Remove a MediaStream from the connection.
       * @param {MediaStream} stream
       */

    }, {
      key: "removeStream",
      value: function removeStream(stream) {
        var _this5 = this;

        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");

        this._debug("removeSenders()");

        stream.getTracks().forEach(function (track) {
          _this5.removeTrack(track, stream);
        });
      }
    }, {
      key: "_needsNegotiation",
      value: function _needsNegotiation() {
        var _this6 = this;

        this._debug("_needsNegotiation");

        if (this._batchedNegotiation) return; // batch synchronous renegotiations

        this._batchedNegotiation = true;
        queueMicrotask(function () {
          _this6._batchedNegotiation = false;

          if (_this6.initiator || !_this6._firstNegotiation) {
            _this6._debug("starting batched negotiation");

            _this6.negotiate();
          } else {
            _this6._debug("non-initiator initial negotiation request discarded");
          }

          _this6._firstNegotiation = false;
        });
      }
    }, {
      key: "negotiate",
      value: function negotiate() {
        var _this7 = this;

        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");

        if (this.initiator) {
          if (this._isNegotiating) {
            this._queuedNegotiation = true;

            this._debug("already negotiating, queueing");
          } else {
            this._debug("start negotiation");

            setTimeout(function () {
              // HACK: Chrome crashes if we immediately call createOffer
              _this7._createOffer();
            }, 0);
          }
        } else {
          if (this._isNegotiating) {
            this._queuedNegotiation = true;

            this._debug("already negotiating, queueing");
          } else {
            this._debug("requesting negotiation from initiator");

            this.emit("signal", {
              // request initiator to renegotiate
              type: "renegotiate",
              renegotiate: true
            });
          }
        }

        this._isNegotiating = true;
      } // TODO: Delete this method once readable-stream is updated to contain a default
      // implementation of destroy() that automatically calls _destroy()
      // See: https://github.com/nodejs/readable-stream/issues/283

    }, {
      key: "destroy",
      value: function destroy(err) {
        this._destroy(err, function () {});
      }
    }, {
      key: "_destroy",
      value: function _destroy(err, cb) {
        var _this8 = this;

        if (this.destroyed || this.destroying) return;
        this.destroying = true;

        this._debug("destroying (error: %s)", err && (err.message || err));

        queueMicrotask(function () {
          // allow events concurrent with the call to _destroy() to fire (see #692)
          _this8.destroyed = true;
          _this8.destroying = false;

          _this8._debug("destroy (error: %s)", err && (err.message || err));

          _this8.readable = _this8.writable = false;
          if (!_this8._readableState.ended) _this8.push(null);
          if (!_this8._writableState.finished) _this8.end();
          _this8._connected = false;
          _this8._pcReady = false;
          _this8._channelReady = false;
          _this8._remoteTracks = null;
          _this8._remoteStreams = null;
          _this8._senderMap = null;
          clearInterval(_this8._closingInterval);
          _this8._closingInterval = null;
          clearInterval(_this8._interval);
          _this8._interval = null;
          _this8._chunk = null;
          _this8._cb = null;
          if (_this8._onFinishBound) _this8.removeListener("finish", _this8._onFinishBound);
          _this8._onFinishBound = null;

          if (_this8._channel) {
            try {
              _this8._channel.close();
            } catch (err) {} // allow events concurrent with destruction to be handled


            _this8._channel.onmessage = null;
            _this8._channel.onopen = null;
            _this8._channel.onclose = null;
            _this8._channel.onerror = null;
          }

          if (_this8._pc) {
            try {
              _this8._pc.close();
            } catch (err) {} // allow events concurrent with destruction to be handled


            _this8._pc.oniceconnectionstatechange = null;
            _this8._pc.onicegatheringstatechange = null;
            _this8._pc.onsignalingstatechange = null;
            _this8._pc.onicecandidate = null;
            _this8._pc.ontrack = null;
            _this8._pc.ondatachannel = null;
          }

          _this8._pc = null;
          _this8._channel = null;
          if (err) _this8.emit("error", err);

          _this8.emit("close");

          cb();
        });
      }
    }, {
      key: "_setupData",
      value: function _setupData(event) {
        var _this9 = this;

        if (!event.channel) {
          // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
          // which is invalid behavior. Handle it gracefully.
          // See: https://github.com/feross/simple-peer/issues/163
          return this.destroy(errCode(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        }

        this._channel = event.channel;
        this._channel.binaryType = "arraybuffer";

        if (typeof this._channel.bufferedAmountLowThreshold === "number") {
          this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
        }

        this.channelName = this._channel.label;

        this._channel.onmessage = function (event) {
          _this9._onChannelMessage(event);
        };

        this._channel.onbufferedamountlow = function () {
          _this9._onChannelBufferedAmountLow();
        };

        this._channel.onopen = function () {
          _this9._onChannelOpen();
        };

        this._channel.onclose = function () {
          _this9._onChannelClose();
        };

        this._channel.onerror = function (event) {
          var err = event.error instanceof Error ? event.error : new Error("Datachannel error: ".concat(event.message, " ").concat(event.filename, ":").concat(event.lineno, ":").concat(event.colno));

          _this9.destroy(errCode(err, "ERR_DATA_CHANNEL"));
        }; // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
        // https://bugs.chromium.org/p/chromium/issues/detail?id=882743


        var isClosing = false;
        this._closingInterval = setInterval(function () {
          // No "onclosing" event
          if (_this9._channel && _this9._channel.readyState === "closing") {
            if (isClosing) _this9._onChannelClose(); // closing timed out: equivalent to onclose firing

            isClosing = true;
          } else {
            isClosing = false;
          }
        }, CHANNEL_CLOSING_TIMEOUT);
      }
    }, {
      key: "_read",
      value: function _read() {}
    }, {
      key: "_write",
      value: function _write(chunk, encoding, cb) {
        if (this.destroyed) return cb(errCode(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));

        if (this._connected) {
          try {
            this.send(chunk);
          } catch (err) {
            return this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
          }

          if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
            this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount);

            this._cb = cb;
          } else {
            cb(null);
          }
        } else {
          this._debug("write before connect");

          this._chunk = chunk;
          this._cb = cb;
        }
      } // When stream finishes writing, close socket. Half open connections are not
      // supported.

    }, {
      key: "_onFinish",
      value: function _onFinish() {
        var _this10 = this;

        if (this.destroyed) return; // Wait a bit before destroying so the socket flushes.
        // TODO: is there a more reliable way to accomplish this?

        var destroySoon = function destroySoon() {
          setTimeout(function () {
            return _this10.destroy();
          }, 1000);
        };

        if (this._connected) {
          destroySoon();
        } else {
          this.once("connect", destroySoon);
        }
      }
    }, {
      key: "_startIceCompleteTimeout",
      value: function _startIceCompleteTimeout() {
        var _this11 = this;

        if (this.destroyed) return;
        if (this._iceCompleteTimer) return;

        this._debug("started iceComplete timeout");

        this._iceCompleteTimer = setTimeout(function () {
          if (!_this11._iceComplete) {
            _this11._iceComplete = true;

            _this11._debug("iceComplete timeout completed");

            _this11.emit("iceTimeout");

            _this11.emit("_iceComplete");
          }
        }, this.iceCompleteTimeout);
      }
    }, {
      key: "_createOffer",
      value: function _createOffer() {
        var _this12 = this;

        if (this.destroyed) return;

        this._pc.createOffer(this.offerOptions).then(function (offer) {
          if (_this12.destroyed) return;
          if (!_this12.trickle && !_this12.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp);
          offer.sdp = _this12.sdpTransform(offer.sdp);

          var sendOffer = function sendOffer() {
            if (_this12.destroyed) return;
            var signal = _this12._pc.localDescription || offer;

            _this12._debug("signal");

            _this12.emit("signal", {
              type: signal.type,
              sdp: signal.sdp
            });
          };

          var onSuccess = function onSuccess() {
            _this12._debug("createOffer success");

            if (_this12.destroyed) return;
            if (_this12.trickle || _this12._iceComplete) sendOffer();else _this12.once("_iceComplete", sendOffer); // wait for candidates
          };

          var onError = function onError(err) {
            _this12.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
          };

          _this12._pc.setLocalDescription(offer).then(onSuccess)["catch"](onError);
        })["catch"](function (err) {
          _this12.destroy(errCode(err, "ERR_CREATE_OFFER"));
        });
      }
    }, {
      key: "_requestMissingTransceivers",
      value: function _requestMissingTransceivers() {
        var _this13 = this;

        if (this._pc.getTransceivers) {
          this._pc.getTransceivers().forEach(function (transceiver) {
            if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
              transceiver.requested = true; // HACK: Safari returns negotiated transceivers with a null mid

              _this13.addTransceiver(transceiver.sender.track.kind);
            }
          });
        }
      }
    }, {
      key: "_createAnswer",
      value: function _createAnswer() {
        var _this14 = this;

        if (this.destroyed) return;

        this._pc.createAnswer(this.answerOptions).then(function (answer) {
          if (_this14.destroyed) return;
          if (!_this14.trickle && !_this14.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp);
          answer.sdp = _this14.sdpTransform(answer.sdp);

          var sendAnswer = function sendAnswer() {
            if (_this14.destroyed) return;
            var signal = _this14._pc.localDescription || answer;

            _this14._debug("signal");

            _this14.emit("signal", {
              type: signal.type,
              sdp: signal.sdp
            });

            if (!_this14.initiator) _this14._requestMissingTransceivers();
          };

          var onSuccess = function onSuccess() {
            if (_this14.destroyed) return;
            if (_this14.trickle || _this14._iceComplete) sendAnswer();else _this14.once("_iceComplete", sendAnswer);
          };

          var onError = function onError(err) {
            _this14.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
          };

          _this14._pc.setLocalDescription(answer).then(onSuccess)["catch"](onError);
        })["catch"](function (err) {
          _this14.destroy(errCode(err, "ERR_CREATE_ANSWER"));
        });
      }
    }, {
      key: "_onConnectionStateChange",
      value: function _onConnectionStateChange() {
        if (this.destroyed) return;

        if (this._pc.connectionState === "failed") {
          this.destroy(errCode(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
        }
      }
    }, {
      key: "_onIceStateChange",
      value: function _onIceStateChange() {
        if (this.destroyed) return;
        var iceConnectionState = this._pc.iceConnectionState;
        var iceGatheringState = this._pc.iceGatheringState;

        this._debug("iceStateChange (connection: %s) (gathering: %s)", iceConnectionState, iceGatheringState);

        this.emit("iceStateChange", iceConnectionState, iceGatheringState);

        if (iceConnectionState === "connected" || iceConnectionState === "completed") {
          this._pcReady = true;

          this._maybeReady();
        }

        if (iceConnectionState === "failed") {
          this.destroy(errCode(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE"));
        }

        if (iceConnectionState === "closed") {
          this.destroy(errCode(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
        }
      }
    }, {
      key: "getStats",
      value: function getStats(cb) {
        var _this15 = this;

        // statreports can come with a value array instead of properties
        var flattenValues = function flattenValues(report) {
          if (Object.prototype.toString.call(report.values) === "[object Array]") {
            report.values.forEach(function (value) {
              Object.assign(report, value);
            });
          }

          return report;
        }; // Promise-based getStats() (standard)


        if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
          this._pc.getStats().then(function (res) {
            var reports = [];
            res.forEach(function (report) {
              reports.push(flattenValues(report));
            });
            cb(null, reports);
          }, function (err) {
            return cb(err);
          }); // Single-parameter callback-based getStats() (non-standard)

        } else if (this._pc.getStats.length > 0) {
          this._pc.getStats(function (res) {
            // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
            if (_this15.destroyed) return;
            var reports = [];
            res.result().forEach(function (result) {
              var report = {};
              result.names().forEach(function (name) {
                report[name] = result.stat(name);
              });
              report.id = result.id;
              report.type = result.type;
              report.timestamp = result.timestamp;
              reports.push(flattenValues(report));
            });
            cb(null, reports);
          }, function (err) {
            return cb(err);
          }); // Unknown browser, skip getStats() since it's anyone's guess which style of
          // getStats() they implement.

        } else {
          cb(null, []);
        }
      }
    }, {
      key: "_maybeReady",
      value: function _maybeReady() {
        var _this16 = this;

        this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady);

        if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = true; // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339

        var findCandidatePair = function findCandidatePair() {
          if (_this16.destroyed) return;

          _this16.getStats(function (err, items) {
            if (_this16.destroyed) return; // Treat getStats error as non-fatal. It's not essential.

            if (err) items = [];
            var remoteCandidates = {};
            var localCandidates = {};
            var candidatePairs = {};
            var foundSelectedCandidatePair = false;
            items.forEach(function (item) {
              // TODO: Once all browsers support the hyphenated stats report types, remove
              // the non-hypenated ones
              if (item.type === "remotecandidate" || item.type === "remote-candidate") {
                remoteCandidates[item.id] = item;
              }

              if (item.type === "localcandidate" || item.type === "local-candidate") {
                localCandidates[item.id] = item;
              }

              if (item.type === "candidatepair" || item.type === "candidate-pair") {
                candidatePairs[item.id] = item;
              }
            });

            var setSelectedCandidatePair = function setSelectedCandidatePair(selectedCandidatePair) {
              foundSelectedCandidatePair = true;
              var local = localCandidates[selectedCandidatePair.localCandidateId];

              if (local && (local.ip || local.address)) {
                // Spec
                _this16.localAddress = local.ip || local.address;
                _this16.localPort = Number(local.port);
              } else if (local && local.ipAddress) {
                // Firefox
                _this16.localAddress = local.ipAddress;
                _this16.localPort = Number(local.portNumber);
              } else if (typeof selectedCandidatePair.googLocalAddress === "string") {
                // TODO: remove this once Chrome 58 is released
                local = selectedCandidatePair.googLocalAddress.split(":");
                _this16.localAddress = local[0];
                _this16.localPort = Number(local[1]);
              }

              if (_this16.localAddress) {
                _this16.localFamily = _this16.localAddress.includes(":") ? "IPv6" : "IPv4";
              }

              var remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];

              if (remote && (remote.ip || remote.address)) {
                // Spec
                _this16.remoteAddress = remote.ip || remote.address;
                _this16.remotePort = Number(remote.port);
              } else if (remote && remote.ipAddress) {
                // Firefox
                _this16.remoteAddress = remote.ipAddress;
                _this16.remotePort = Number(remote.portNumber);
              } else if (typeof selectedCandidatePair.googRemoteAddress === "string") {
                // TODO: remove this once Chrome 58 is released
                remote = selectedCandidatePair.googRemoteAddress.split(":");
                _this16.remoteAddress = remote[0];
                _this16.remotePort = Number(remote[1]);
              }

              if (_this16.remoteAddress) {
                _this16.remoteFamily = _this16.remoteAddress.includes(":") ? "IPv6" : "IPv4";
              }

              _this16._debug("connect local: %s:%s remote: %s:%s", _this16.localAddress, _this16.localPort, _this16.remoteAddress, _this16.remotePort);
            };

            items.forEach(function (item) {
              // Spec-compliant
              if (item.type === "transport" && item.selectedCandidatePairId) {
                setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
              } // Old implementations


              if (item.type === "googCandidatePair" && item.googActiveConnection === "true" || (item.type === "candidatepair" || item.type === "candidate-pair") && item.selected) {
                setSelectedCandidatePair(item);
              }
            }); // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
            // But wait until at least 1 candidate pair is available

            if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
              setTimeout(findCandidatePair, 100);
              return;
            } else {
              _this16._connecting = false;
              _this16._connected = true;
            }

            if (_this16._chunk) {
              try {
                _this16.send(_this16._chunk);
              } catch (err) {
                return _this16.destroy(errCode(err, "ERR_DATA_CHANNEL"));
              }

              _this16._chunk = null;

              _this16._debug('sent chunk from "write before connect"');

              var cb = _this16._cb;
              _this16._cb = null;
              cb(null);
            } // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
            // fallback to using setInterval to implement backpressure.


            if (typeof _this16._channel.bufferedAmountLowThreshold !== "number") {
              _this16._interval = setInterval(function () {
                return _this16._onInterval();
              }, 150);
              if (_this16._interval.unref) _this16._interval.unref();
            }

            _this16._debug("connect");

            _this16.emit("connect");
          });
        };

        findCandidatePair();
      }
    }, {
      key: "_onInterval",
      value: function _onInterval() {
        if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
          return;
        }

        this._onChannelBufferedAmountLow();
      }
    }, {
      key: "_onSignalingStateChange",
      value: function _onSignalingStateChange() {
        var _this17 = this;

        if (this.destroyed) return;

        if (this._pc.signalingState === "stable") {
          this._isNegotiating = false; // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'

          this._debug("flushing sender queue", this._sendersAwaitingStable);

          this._sendersAwaitingStable.forEach(function (sender) {
            _this17._pc.removeTrack(sender);

            _this17._queuedNegotiation = true;
          });

          this._sendersAwaitingStable = [];

          if (this._queuedNegotiation) {
            this._debug("flushing negotiation queue");

            this._queuedNegotiation = false;

            this._needsNegotiation(); // negotiate again

          } else {
            this._debug("negotiated");

            this.emit("negotiated");
          }
        }

        this._debug("signalingStateChange %s", this._pc.signalingState);

        this.emit("signalingStateChange", this._pc.signalingState);
      }
    }, {
      key: "_onIceCandidate",
      value: function _onIceCandidate(event) {
        if (this.destroyed) return;

        if (event.candidate && this.trickle) {
          this.emit("signal", {
            type: "candidate",
            candidate: {
              candidate: event.candidate.candidate,
              sdpMLineIndex: event.candidate.sdpMLineIndex,
              sdpMid: event.candidate.sdpMid
            }
          });
        } else if (!event.candidate && !this._iceComplete) {
          this._iceComplete = true;
          this.emit("_iceComplete");
        } // as soon as we've received one valid candidate start timeout


        if (event.candidate) {
          this._startIceCompleteTimeout();
        }
      }
    }, {
      key: "_onChannelMessage",
      value: function _onChannelMessage(event) {
        if (this.destroyed) return;
        var data = event.data;
        if (data instanceof ArrayBuffer) data = Buffer.from(data);
        this.push(data);
      }
    }, {
      key: "_onChannelBufferedAmountLow",
      value: function _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb) return;

        this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);

        var cb = this._cb;
        this._cb = null;
        cb(null);
      }
    }, {
      key: "_onChannelOpen",
      value: function _onChannelOpen() {
        if (this._connected || this.destroyed) return;

        this._debug("on channel open");

        this._channelReady = true;

        this._maybeReady();
      }
    }, {
      key: "_onChannelClose",
      value: function _onChannelClose() {
        if (this.destroyed) return;

        this._debug("on channel close");

        this.destroy();
      }
    }, {
      key: "_onTrack",
      value: function _onTrack(event) {
        var _this18 = this;

        if (this.destroyed) return;
        event.streams.forEach(function (eventStream) {
          _this18._debug("on track");

          _this18.emit("track", event.track, eventStream);

          _this18._remoteTracks.push({
            track: event.track,
            stream: eventStream
          });

          if (_this18._remoteStreams.some(function (remoteStream) {
            return remoteStream.id === eventStream.id;
          })) return; // Only fire one 'stream' event, even though there may be multiple tracks per stream

          _this18._remoteStreams.push(eventStream);

          queueMicrotask(function () {
            _this18._debug("on stream");

            _this18.emit("stream", eventStream); // ensure all tracks have been added

          });
        });
      }
    }, {
      key: "_debug",
      value: function _debug() {
        var args = [].slice.call(arguments);
        args[0] = "[" + this._id + "] " + args[0];
        debug.apply(null, args);
      }
    }]);

    return Peer;
  }(stream.Duplex);

  Peer.WEBRTC_SUPPORT = !!getBrowserRTC();
  /**
   * Expose peer and data channel config for overriding all Peer
   * instances. Otherwise, just set opts.config or opts.channelConfig
   * when constructing a Peer.
   */

  Peer.config = {
    iceServers: [{
      urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
    }],
    sdpSemantics: "unified-plan"
  };
  Peer.channelConfig = {}; //module.exports = Peer;

  var SimplePeerClientWrapper = /*#__PURE__*/function () {
    function SimplePeerClientWrapper(socket, debug, simplePeerOptions) {
      _classCallCheck(this, SimplePeerClientWrapper);

      this.initPeerRequest = false;
      this.socket = socket;
      this.localStream;
      this.debug = debug;
      this.connections = [];
      this.onDataCallback;
      this.onStreamCallback; // this.onTrackCallback;

      this.onCloseCallback;
      this.onErrorCallback;
      this.simplePeerOptions = simplePeerOptions;
    }

    _createClass(SimplePeerClientWrapper, [{
      key: "setlocalStream",
      value: function setlocalStream(stream) {
        this.localStream = stream;
      }
    }, {
      key: "init",
      value: function init() {
        this.debug && console.log('running init Peer Client. # of ' + this.connections.length);
        this.initPeerRequest = true;

        for (var i = 0; i < this.connections.length; i++) {
          this.socket.emit('initiate peer', this.connections[i].room);

          if (this.connections[i].initiator) {
            this.attemptPeerStart(this.connections[i]);
          }
        }
      }
    }, {
      key: "attemptPeerStart",
      value: function attemptPeerStart(connection) {
        this.debug && console.log('Attempting peer start', connection.peerStarted, connection.roomReady);

        if (!connection.peerStarted && connection.roomReady) {
          this.debug && console.log('Creating peer connection');
          this.createPeerConnection(connection);
        } else {
          this.debug && console.log('Not creating peer connection');
        }
      }
    }, {
      key: "createPeerConnection",
      value: function createPeerConnection(connection) {
        var _this = this;

        this.debug && console.log('creating simple peer');

        var options = this._getPeerOptions(connection.initiator);

        var peer = new Peer(options); // If initiator,peer.on'signal' will fire right away, if not it waits for signal
        // https://github.com/feross/simple-peer#peeronsignal-data--

        peer.on('signal', function (data) {
          return _this._sendSignal(data, connection);
        });
        peer.on('connect', function (data) {
          return _this._handleConnection(data);
        });
        peer.on('error', function (err) {
          return _this._handleError(err);
        });
        peer.on('stream', function (stream) {
          return _this._handleStream(stream);
        });
        peer.on('data', function (data) {
          return _this._handleData(data);
        }); // peer.on('track', (track, stream) =>
        //   this._handleTrack(track, stream),
        // );

        peer.on('close', function () {
          return _this._handleClose();
        });
        connection.peerStarted = true;
        connection.peer = peer;
      }
    }, {
      key: "isPeerStarted",
      value: function isPeerStarted() {
        var peerStarted = false; // if any peer connection is not started then it returns false

        for (var i = 0; i < this.connections.length; i++) {
          peerStarted = this.connections[i].peerStarted;
        }

        return peerStarted;
      }
    }, {
      key: "setEventCallback",
      value: function setEventCallback(event, callback) {
        switch (event) {
          case 'data':
            this.onDataCallback = callback;
            break;

          case 'stream':
            this.onStreamCallback = callback;
            break;
          // case 'track':
          //   this.onTrackCallback = callback;
          //   break;

          case 'close':
            this.onCloseCallback = callback;
            break;

          case 'error':
            this.onErrorCallback = callback;
        }
      }
    }, {
      key: "sendData",
      value: function sendData(data) {
        var msg = JSON.stringify({
          data: data,
          userId: this.socket.id
        });

        for (var i = 0; i < this.connections.length; i++) {
          var peer = this.connections[i];

          if (peer.peerStarted) {
            var peerConn = peer.peer;

            if (peerConn.connected) {
              peerConn.write(msg);
            }
          }
        }
      }
    }, {
      key: "terminateSession",
      value: function terminateSession() {
        for (var i = 0; i < this.connections.length; i++) {
          var peer = this.connections[i].peer;
          peer.destroy(); // simple-peer method to close and cleanup peer connection

          this.connections[i].peer = null;
          this.connections[i].peerStarted = false;
        }

        this.socket.emit('hangup');
        this.socket.close();
      }
    }, {
      key: "_getPeerOptions",
      value: function _getPeerOptions(initiator) {
        var options = {
          initiator: initiator
        };

        if (typeof this.localStream !== 'undefined') {
          options.stream = this.localStream;
        }

        var spOptions = Object.entries(this.simplePeerOptions);

        if (spOptions.length > 0) {
          var _iterator = _createForOfIteratorHelper(spOptions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  value = _step$value[1];

              options[key] = value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return options;
      }
    }, {
      key: "_sendSignal",
      value: function _sendSignal(data, connection) {
        this.debug && console.log('sending signal');
        var message = {
          room: connection.room,
          data: JSON.stringify(data)
        };
        this.socket.emit('sending signal', message);
      }
    }, {
      key: "_handleConnection",
      value: function _handleConnection(data) {
        console.log('SIMPLE PEER IS CONNECTED');
      }
    }, {
      key: "_handleStream",
      value: function _handleStream(stream) {
        this.onStreamCallback(stream);
      }
    }, {
      key: "_handleError",
      value: function _handleError(err) {
        if (typeof this.onErrorCallback !== 'undefined') {
          this.onErrorCallback(err);
        } else {
          console.log(err);
        }
      }
    }, {
      key: "_handleData",
      value: function _handleData(data) {
        var decodedString = new TextDecoder('utf-8').decode(data);
        var decodedJSON = JSON.parse(decodedString);
        this.onDataCallback(decodedJSON);
      }
    }, {
      key: "_handleClose",
      value: function _handleClose() {
        if (typeof this.onCloseCallback !== 'undefined') {
          this.onCloseCallback();
        }

        this.debug && console.log('Closing Connection');
      }
    }, {
      key: "_handleRemoteHangup",
      value: function _handleRemoteHangup() {
        this.debug && console.log('Handling remote hangup');
        this.terminateSession(true);
      }
    }, {
      key: "_closePeerConnection",
      value: function _closePeerConnection() {// peerStarted = false;
        // peer.destroy();
        // peer = null;
      }
    }]);

    return SimplePeerClientWrapper;
  }();
   //module.exports = SimplePeerClientWrapper;

  //import { io } from "socket.io-client";
  //import io from 'socket.io-client'
  var io = require('socket.io-client'); //const SimplePeerClientWrapper = require('./simple-peer-client-wrapper.js');

  var SocketIOClientWrapper = /*#__PURE__*/function () {
    function SocketIOClientWrapper() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          stream = _ref.stream,
          serverUrl = _ref.serverUrl,
          _ref$debug = _ref.debug,
          debug = _ref$debug === void 0 ? false : _ref$debug,
          _ref$simplePeerOption = _ref.simplePeerOptions,
          simplePeerOptions = _ref$simplePeerOption === void 0 ? {} : _ref$simplePeerOption;

      _classCallCheck(this, SocketIOClientWrapper);

      this.debug = debug;

      if (typeof serverUrl === 'undefined') {
        console.error('simple-peer-wrapper requires that you specify a serverUrl on startup. Please specify a serverUrl and try again. See documentation for more information https://github.com/lisajamhoury/simple-peer-wrapper');
      }

      this.debug && console.log('connecting socket to ' + serverUrl);
      this.socket = io.connect(serverUrl);
      this.peerClient = new SimplePeerClientWrapper(this.socket, this.debug, simplePeerOptions);

      if (typeof stream !== 'undefined') {
        this.peerClient.setlocalStream(stream);
      }

      this._initSocket();
    }

    _createClass(SocketIOClientWrapper, [{
      key: "_initSocket",
      value: function _initSocket() {
        var _this = this;

        this.socket.on('created', function (room) {
          return _this._handleCreated(room);
        });
        this.socket.on('full', function (room) {
          return _this._handleFullRoom(room);
        });
        this.socket.on('join', function (room) {
          return _this._handleJoinRoom(room);
        });
        this.socket.on('joined', function (room) {
          return _this._handleJoinedRoom(room);
        });
        this.socket.on('initiate peer', function (room) {
          return _this._handleInitPeer(room);
        });
        this.socket.on('sending signal', function (message) {
          return _this._handleSendSignal(message);
        });
        this.socket.on('log', function (array) {
          return _this._handleLog(array);
        });
        this.socket.on('message', function (message) {
          return _this._handleMessage(message);
        });

        this._startSocketCommunication();
      } // starts socket client communication with signal server automatically

    }, {
      key: "_startSocketCommunication",
      value: function _startSocketCommunication() {
        this.socket.emit('create or join');
        this.debug && console.log('Attempted to create or join room');
      }
    }, {
      key: "_handleCreated",
      value: function _handleCreated(room) {
        this.debug && console.log('Created room ' + room);
      } // room only holds two clients, can be changed in signal_socket.js

    }, {
      key: "_handleFullRoom",
      value: function _handleFullRoom(room) {
        this.debug && console.log('Room ' + room + ' is full');
      } // called by initiator client only

    }, {
      key: "_handleJoinRoom",
      value: function _handleJoinRoom(room) {
        this.debug && console.log('Another peer made a request to join room ' + room);
        this.debug && console.log('This peer is the initiator of room ' + room + '!');

        this._logConnection(room, true, true, false);

        if (this.peerClient.initPeerRequest) {
          this.debug && console.log('initing peer from handle join');
          this.peerClient.init();
        }
      } // called by non-initiator client

    }, {
      key: "_handleJoinedRoom",
      value: function _handleJoinedRoom(room) {
        this.debug && console.log('joined: ' + room);

        this._logConnection(room, false, true, false);

        if (this.peerClient.initPeerRequest) {
          this.debug && console.log('initing peer from handle joined');
          this.peerClient.init();
        }
      }
    }, {
      key: "_logConnection",
      value: function _logConnection(_room, _initiator, _roomReady, _peerStarted) {
        this.debug && console.log('logging connection');
        var newConnection = {
          room: _room,
          // socket.io server room
          initiator: _initiator,
          // client initiates the communication
          roomReady: _roomReady,
          // socket.io room is created or joined
          peerStarted: _peerStarted // the peer connection is started

        };
        this.peerClient.connections.push(newConnection);
      } // logs messages from server

    }, {
      key: "_handleLog",
      value: function _handleLog(array) {
        log.apply(console, array);
      }
    }, {
      key: "_handleInitPeer",
      value: function _handleInitPeer(room) {
        var connection = this._findConnection(room);

        this.peerClient.attemptPeerStart(connection);
      }
    }, {
      key: "_handleSendSignal",
      value: function _handleSendSignal(message) {
        this.debug && console.log('receiving simple signal data');

        var connection = this._findConnection(message.room);

        if (!connection.peerStarted) {
          this.debug && console.log('Creating peer from messages!');
          this.peerClient.createPeerConnection(connection);
          connection.peer.signal(message.data);
        } else {
          connection.peer.signal(message.data);
        }
      }
    }, {
      key: "_findConnection",
      value: function _findConnection(room) {
        var connection = null;

        for (var i = 0; i < this.peerClient.connections.length; i++) {
          if (this.peerClient.connections[i].room === room) {
            connection = this.peerClient.connections[i];
          }
        }

        if (connection === null) {
          this.debug && console.log('UT OH THAT CONNECTION DOESNT EXIST');
        } else {
          this.debug && console.log('found the connection for room: ' + room);
        }

        return connection;
      } // This client receives a message

    }, {
      key: "_handleMessage",
      value: function _handleMessage(message) {
        this.debug && console.log('MESSAGE ' + message);

        if (message.type) {
          this.debug && console.log('received msg typ ' + message.type);
        } else {
          this.debug && console.log('Client received message: ' + message);
        } // TO DO HANDLE BYE
        // } else if (message === 'bye' && peerStarted) {
        //   handleRemoteHangup();

      }
    }, {
      key: "_emitSocketMessage",
      value: function _emitSocketMessage(message) {
        this.debug && console.log('Client sending message: ', message);
        this.socket.emit('message', message);
      }
    }]);

    return SocketIOClientWrapper;
  }();
   //module.exports = SocketIOClientWrapper;

  var SimplePeerWrapper = /*#__PURE__*/function () {
    function SimplePeerWrapper(options) {
      _classCallCheck(this, SimplePeerWrapper);

      this.socketClient = new SocketIOClientWrapper(options);
      this.peerClient = this.socketClient.peerClient;
    }

    _createClass(SimplePeerWrapper, [{
      key: "connect",
      value: function connect() {
        this.peerClient.init();
      }
    }, {
      key: "isConnectionStarted",
      value: function isConnectionStarted() {
        return this.peerClient.isPeerStarted();
      }
    }, {
      key: "send",
      value: function send(data) {
        this.peerClient.sendData(data);
      }
    }, {
      key: "on",
      value: function on(event, callback) {
        this.peerClient.setEventCallback(event, callback);
      }
    }, {
      key: "close",
      value: function close() {
        this.peerClient.terminateSession();
      }
    }]);

    return SimplePeerWrapper;
  }();
   //module.exports = SimplePeerWrapper;

  exports.SimplePeerWrapper = SimplePeerWrapper;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=simple-peer-wrapper.js.map
