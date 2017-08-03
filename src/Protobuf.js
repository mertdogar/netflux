/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export var Message = $root.Message = function () {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {number} [senderId] Message senderId
     * @property {number} [recipientId] Message recipientId
     * @property {boolean} [isService] Message isService
     * @property {Uint8Array} [content] Message content
     * @property {IMeta} [meta] Message meta
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
    }

    /**
     * Message senderId.
     * @member {number}senderId
     * @memberof Message
     * @instance
     */
    Message.prototype.senderId = 0;

    /**
     * Message recipientId.
     * @member {number}recipientId
     * @memberof Message
     * @instance
     */
    Message.prototype.recipientId = 0;

    /**
     * Message isService.
     * @member {boolean}isService
     * @memberof Message
     * @instance
     */
    Message.prototype.isService = false;

    /**
     * Message content.
     * @member {Uint8Array}content
     * @memberof Message
     * @instance
     */
    Message.prototype.content = $util.newBuffer([]);

    /**
     * Message meta.
     * @member {(IMeta|null|undefined)}meta
     * @memberof Message
     * @instance
     */
    Message.prototype.meta = null;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.senderId != null && message.hasOwnProperty("senderId")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.senderId);
        if (message.recipientId != null && message.hasOwnProperty("recipientId")) writer.uint32( /* id 2, wireType 0 =*/16).uint32(message.recipientId);
        if (message.isService != null && message.hasOwnProperty("isService")) writer.uint32( /* id 3, wireType 0 =*/24).bool(message.isService);
        if (message.content != null && message.hasOwnProperty("content")) writer.uint32( /* id 4, wireType 2 =*/34).bytes(message.content);
        if (message.meta != null && message.hasOwnProperty("meta")) $root.Meta.encode(message.meta, writer.uint32( /* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderId = reader.uint32();
                    break;
                case 2:
                    message.recipientId = reader.uint32();
                    break;
                case 3:
                    message.isService = reader.bool();
                    break;
                case 4:
                    message.content = reader.bytes();
                    break;
                case 5:
                    message.meta = $root.Meta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    return Message;
}();

export var Meta = $root.Meta = function () {

    /**
     * Properties of a Meta.
     * @exports IMeta
     * @interface IMeta
     * @property {number} [timestamp] Meta timestamp
     */

    /**
     * Constructs a new Meta.
     * @exports Meta
     * @classdesc Represents a Meta.
     * @constructor
     * @param {IMeta=} [properties] Properties to set
     */
    function Meta(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
    }

    /**
     * Meta timestamp.
     * @member {number}timestamp
     * @memberof Meta
     * @instance
     */
    Meta.prototype.timestamp = 0;

    /**
     * Creates a new Meta instance using the specified properties.
     * @function create
     * @memberof Meta
     * @static
     * @param {IMeta=} [properties] Properties to set
     * @returns {Meta} Meta instance
     */
    Meta.create = function create(properties) {
        return new Meta(properties);
    };

    /**
     * Encodes the specified Meta message. Does not implicitly {@link Meta.verify|verify} messages.
     * @function encode
     * @memberof Meta
     * @static
     * @param {IMeta} message Meta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Meta.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.timestamp);
        return writer;
    };

    /**
     * Decodes a Meta message from the specified reader or buffer.
     * @function decode
     * @memberof Meta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Meta} Meta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Meta.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.Meta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    return Meta;
}();

export var user = $root.user = function () {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.Message = function () {

        /**
         * Properties of a Message.
         * @memberof user
         * @interface IMessage
         * @property {number} [length] Message length
         * @property {user.Message.Type} [type] Message type
         * @property {Uint8Array} [full] Message full
         * @property {user.Message.IChunk} [chunk] Message chunk
         */

        /**
         * Constructs a new Message.
         * @memberof user
         * @classdesc Represents a Message.
         * @constructor
         * @param {user.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message length.
         * @member {number}length
         * @memberof user.Message
         * @instance
         */
        Message.prototype.length = 0;

        /**
         * Message type.
         * @member {user.Message.Type}type
         * @memberof user.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Message full.
         * @member {Uint8Array}full
         * @memberof user.Message
         * @instance
         */
        Message.prototype.full = $util.newBuffer([]);

        /**
         * Message chunk.
         * @member {(user.Message.IChunk|null|undefined)}chunk
         * @memberof user.Message
         * @instance
         */
        Message.prototype.chunk = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message content.
         * @member {string|undefined} content
         * @memberof user.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["full", "chunk"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof user.Message
         * @static
         * @param {user.IMessage=} [properties] Properties to set
         * @returns {user.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link user.Message.verify|verify} messages.
         * @function encode
         * @memberof user.Message
         * @static
         * @param {user.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.length != null && message.hasOwnProperty("length")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.length);
            if (message.type != null && message.hasOwnProperty("type")) writer.uint32( /* id 2, wireType 0 =*/16).int32(message.type);
            if (message.full != null && message.hasOwnProperty("full")) writer.uint32( /* id 3, wireType 2 =*/26).bytes(message.full);
            if (message.chunk != null && message.hasOwnProperty("chunk")) $root.user.Message.Chunk.encode(message.chunk, writer.uint32( /* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof user.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.user.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.length = reader.uint32();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.full = reader.bytes();
                        break;
                    case 4:
                        message.chunk = $root.user.Message.Chunk.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        Message.Chunk = function () {

            /**
             * Properties of a Chunk.
             * @memberof user.Message
             * @interface IChunk
             * @property {number} [id] Chunk id
             * @property {number} [number] Chunk number
             * @property {Uint8Array} [content] Chunk content
             */

            /**
             * Constructs a new Chunk.
             * @memberof user.Message
             * @classdesc Represents a Chunk.
             * @constructor
             * @param {user.Message.IChunk=} [properties] Properties to set
             */
            function Chunk(properties) {
                if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * Chunk id.
             * @member {number}id
             * @memberof user.Message.Chunk
             * @instance
             */
            Chunk.prototype.id = 0;

            /**
             * Chunk number.
             * @member {number}number
             * @memberof user.Message.Chunk
             * @instance
             */
            Chunk.prototype.number = 0;

            /**
             * Chunk content.
             * @member {Uint8Array}content
             * @memberof user.Message.Chunk
             * @instance
             */
            Chunk.prototype.content = $util.newBuffer([]);

            /**
             * Creates a new Chunk instance using the specified properties.
             * @function create
             * @memberof user.Message.Chunk
             * @static
             * @param {user.Message.IChunk=} [properties] Properties to set
             * @returns {user.Message.Chunk} Chunk instance
             */
            Chunk.create = function create(properties) {
                return new Chunk(properties);
            };

            /**
             * Encodes the specified Chunk message. Does not implicitly {@link user.Message.Chunk.verify|verify} messages.
             * @function encode
             * @memberof user.Message.Chunk
             * @static
             * @param {user.Message.IChunk} message Chunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chunk.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.number != null && message.hasOwnProperty("number")) writer.uint32( /* id 2, wireType 0 =*/16).uint32(message.number);
                if (message.content != null && message.hasOwnProperty("content")) writer.uint32( /* id 4, wireType 2 =*/34).bytes(message.content);
                return writer;
            };

            /**
             * Decodes a Chunk message from the specified reader or buffer.
             * @function decode
             * @memberof user.Message.Chunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.Message.Chunk} Chunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.user.Message.Chunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.id = reader.uint32();
                            break;
                        case 2:
                            message.number = reader.uint32();
                            break;
                        case 4:
                            message.content = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            return Chunk;
        }();

        /**
         * Type enum.
         * @enum {string}
         * @property {number} STRING=0 STRING value
         * @property {number} U_INT_8_ARRAY=1 U_INT_8_ARRAY value
         */
        Message.Type = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "STRING"] = 0;
            values[valuesById[1] = "U_INT_8_ARRAY"] = 1;
            return values;
        }();

        return Message;
    }();

    return user;
}();

export var service = $root.service = function () {

    /**
     * Namespace service.
     * @exports service
     * @namespace
     */
    var service = {};

    service.Message = function () {

        /**
         * Properties of a Message.
         * @memberof service
         * @interface IMessage
         * @property {number} [id] Message id
         * @property {Uint8Array} [content] Message content
         */

        /**
         * Constructs a new Message.
         * @memberof service
         * @classdesc Represents a Message.
         * @constructor
         * @param {service.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message id.
         * @member {number}id
         * @memberof service.Message
         * @instance
         */
        Message.prototype.id = 0;

        /**
         * Message content.
         * @member {Uint8Array}content
         * @memberof service.Message
         * @instance
         */
        Message.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof service.Message
         * @static
         * @param {service.IMessage=} [properties] Properties to set
         * @returns {service.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link service.Message.verify|verify} messages.
         * @function encode
         * @memberof service.Message
         * @static
         * @param {service.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.content != null && message.hasOwnProperty("content")) writer.uint32( /* id 2, wireType 2 =*/18).bytes(message.content);
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof service.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {service.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.service.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.content = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Message;
    }();

    return service;
}();

export var webChannel = $root.webChannel = function () {

    /**
     * Namespace webChannel.
     * @exports webChannel
     * @namespace
     */
    var webChannel = {};

    webChannel.Message = function () {

        /**
         * Properties of a Message.
         * @memberof webChannel
         * @interface IMessage
         * @property {webChannel.IInitWebChannel} [initWebChannel] Message initWebChannel
         * @property {boolean} [ping] Message ping
         * @property {boolean} [pong] Message pong
         */

        /**
         * Constructs a new Message.
         * @memberof webChannel
         * @classdesc Represents a Message.
         * @constructor
         * @param {webChannel.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message initWebChannel.
         * @member {(webChannel.IInitWebChannel|null|undefined)}initWebChannel
         * @memberof webChannel.Message
         * @instance
         */
        Message.prototype.initWebChannel = null;

        /**
         * Message ping.
         * @member {boolean}ping
         * @memberof webChannel.Message
         * @instance
         */
        Message.prototype.ping = false;

        /**
         * Message pong.
         * @member {boolean}pong
         * @memberof webChannel.Message
         * @instance
         */
        Message.prototype.pong = false;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message type.
         * @member {string|undefined} type
         * @memberof webChannel.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["initWebChannel", "ping", "pong"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof webChannel.Message
         * @static
         * @param {webChannel.IMessage=} [properties] Properties to set
         * @returns {webChannel.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link webChannel.Message.verify|verify} messages.
         * @function encode
         * @memberof webChannel.Message
         * @static
         * @param {webChannel.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.initWebChannel != null && message.hasOwnProperty("initWebChannel")) $root.webChannel.InitWebChannel.encode(message.initWebChannel, writer.uint32( /* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ping != null && message.hasOwnProperty("ping")) writer.uint32( /* id 2, wireType 0 =*/16).bool(message.ping);
            if (message.pong != null && message.hasOwnProperty("pong")) writer.uint32( /* id 3, wireType 0 =*/24).bool(message.pong);
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof webChannel.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {webChannel.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.webChannel.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.initWebChannel = $root.webChannel.InitWebChannel.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.ping = reader.bool();
                        break;
                    case 3:
                        message.pong = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Message;
    }();

    webChannel.InitWebChannel = function () {

        /**
         * Properties of an InitWebChannel.
         * @memberof webChannel
         * @interface IInitWebChannel
         * @property {number} [topology] InitWebChannel topology
         * @property {number} [wcId] InitWebChannel wcId
         * @property {number} [peerId] InitWebChannel peerId
         */

        /**
         * Constructs a new InitWebChannel.
         * @memberof webChannel
         * @classdesc Represents an InitWebChannel.
         * @constructor
         * @param {webChannel.IInitWebChannel=} [properties] Properties to set
         */
        function InitWebChannel(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * InitWebChannel topology.
         * @member {number}topology
         * @memberof webChannel.InitWebChannel
         * @instance
         */
        InitWebChannel.prototype.topology = 0;

        /**
         * InitWebChannel wcId.
         * @member {number}wcId
         * @memberof webChannel.InitWebChannel
         * @instance
         */
        InitWebChannel.prototype.wcId = 0;

        /**
         * InitWebChannel peerId.
         * @member {number}peerId
         * @memberof webChannel.InitWebChannel
         * @instance
         */
        InitWebChannel.prototype.peerId = 0;

        /**
         * Creates a new InitWebChannel instance using the specified properties.
         * @function create
         * @memberof webChannel.InitWebChannel
         * @static
         * @param {webChannel.IInitWebChannel=} [properties] Properties to set
         * @returns {webChannel.InitWebChannel} InitWebChannel instance
         */
        InitWebChannel.create = function create(properties) {
            return new InitWebChannel(properties);
        };

        /**
         * Encodes the specified InitWebChannel message. Does not implicitly {@link webChannel.InitWebChannel.verify|verify} messages.
         * @function encode
         * @memberof webChannel.InitWebChannel
         * @static
         * @param {webChannel.IInitWebChannel} message InitWebChannel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitWebChannel.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.topology != null && message.hasOwnProperty("topology")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.topology);
            if (message.wcId != null && message.hasOwnProperty("wcId")) writer.uint32( /* id 2, wireType 0 =*/16).uint32(message.wcId);
            if (message.peerId != null && message.hasOwnProperty("peerId")) writer.uint32( /* id 3, wireType 0 =*/24).uint32(message.peerId);
            return writer;
        };

        /**
         * Decodes an InitWebChannel message from the specified reader or buffer.
         * @function decode
         * @memberof webChannel.InitWebChannel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {webChannel.InitWebChannel} InitWebChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitWebChannel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.webChannel.InitWebChannel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.topology = reader.uint32();
                        break;
                    case 2:
                        message.wcId = reader.uint32();
                        break;
                    case 3:
                        message.peerId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return InitWebChannel;
    }();

    return webChannel;
}();

export var channelBuilder = $root.channelBuilder = function () {

    /**
     * Namespace channelBuilder.
     * @exports channelBuilder
     * @namespace
     */
    var channelBuilder = {};

    channelBuilder.Message = function () {

        /**
         * Properties of a Message.
         * @memberof channelBuilder
         * @interface IMessage
         * @property {channelBuilder.IConnection} [request] Message request
         * @property {channelBuilder.IConnection} [response] Message response
         * @property {string} [failed] Message failed
         */

        /**
         * Constructs a new Message.
         * @memberof channelBuilder
         * @classdesc Represents a Message.
         * @constructor
         * @param {channelBuilder.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message request.
         * @member {(channelBuilder.IConnection|null|undefined)}request
         * @memberof channelBuilder.Message
         * @instance
         */
        Message.prototype.request = null;

        /**
         * Message response.
         * @member {(channelBuilder.IConnection|null|undefined)}response
         * @memberof channelBuilder.Message
         * @instance
         */
        Message.prototype.response = null;

        /**
         * Message failed.
         * @member {string}failed
         * @memberof channelBuilder.Message
         * @instance
         */
        Message.prototype.failed = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message type.
         * @member {string|undefined} type
         * @memberof channelBuilder.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["request", "response", "failed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof channelBuilder.Message
         * @static
         * @param {channelBuilder.IMessage=} [properties] Properties to set
         * @returns {channelBuilder.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link channelBuilder.Message.verify|verify} messages.
         * @function encode
         * @memberof channelBuilder.Message
         * @static
         * @param {channelBuilder.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.request != null && message.hasOwnProperty("request")) $root.channelBuilder.Connection.encode(message.request, writer.uint32( /* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response")) $root.channelBuilder.Connection.encode(message.response, writer.uint32( /* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.failed != null && message.hasOwnProperty("failed")) writer.uint32( /* id 3, wireType 2 =*/26).string(message.failed);
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof channelBuilder.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {channelBuilder.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.channelBuilder.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.request = $root.channelBuilder.Connection.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.response = $root.channelBuilder.Connection.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.failed = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Message;
    }();

    channelBuilder.Connection = function () {

        /**
         * Properties of a Connection.
         * @memberof channelBuilder
         * @interface IConnection
         * @property {string} [wsUrl] Connection wsUrl
         * @property {boolean} [isWrtcSupport] Connection isWrtcSupport
         */

        /**
         * Constructs a new Connection.
         * @memberof channelBuilder
         * @classdesc Represents a Connection.
         * @constructor
         * @param {channelBuilder.IConnection=} [properties] Properties to set
         */
        function Connection(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Connection wsUrl.
         * @member {string}wsUrl
         * @memberof channelBuilder.Connection
         * @instance
         */
        Connection.prototype.wsUrl = "";

        /**
         * Connection isWrtcSupport.
         * @member {boolean}isWrtcSupport
         * @memberof channelBuilder.Connection
         * @instance
         */
        Connection.prototype.isWrtcSupport = false;

        /**
         * Creates a new Connection instance using the specified properties.
         * @function create
         * @memberof channelBuilder.Connection
         * @static
         * @param {channelBuilder.IConnection=} [properties] Properties to set
         * @returns {channelBuilder.Connection} Connection instance
         */
        Connection.create = function create(properties) {
            return new Connection(properties);
        };

        /**
         * Encodes the specified Connection message. Does not implicitly {@link channelBuilder.Connection.verify|verify} messages.
         * @function encode
         * @memberof channelBuilder.Connection
         * @static
         * @param {channelBuilder.IConnection} message Connection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Connection.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.wsUrl != null && message.hasOwnProperty("wsUrl")) writer.uint32( /* id 1, wireType 2 =*/10).string(message.wsUrl);
            if (message.isWrtcSupport != null && message.hasOwnProperty("isWrtcSupport")) writer.uint32( /* id 2, wireType 0 =*/16).bool(message.isWrtcSupport);
            return writer;
        };

        /**
         * Decodes a Connection message from the specified reader or buffer.
         * @function decode
         * @memberof channelBuilder.Connection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {channelBuilder.Connection} Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Connection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.channelBuilder.Connection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.wsUrl = reader.string();
                        break;
                    case 2:
                        message.isWrtcSupport = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Connection;
    }();

    return channelBuilder;
}();

export var fullMesh = $root.fullMesh = function () {

    /**
     * Namespace fullMesh.
     * @exports fullMesh
     * @namespace
     */
    var fullMesh = {};

    fullMesh.Message = function () {

        /**
         * Properties of a Message.
         * @memberof fullMesh
         * @interface IMessage
         * @property {fullMesh.IPeers} [connectTo] Message connectTo
         * @property {fullMesh.IPeers} [connectedTo] Message connectedTo
         * @property {number} [joiningPeerId] Message joiningPeerId
         * @property {boolean} [joinSucceed] Message joinSucceed
         * @property {number} [joinFailedPeerId] Message joinFailedPeerId
         */

        /**
         * Constructs a new Message.
         * @memberof fullMesh
         * @classdesc Represents a Message.
         * @constructor
         * @param {fullMesh.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message connectTo.
         * @member {(fullMesh.IPeers|null|undefined)}connectTo
         * @memberof fullMesh.Message
         * @instance
         */
        Message.prototype.connectTo = null;

        /**
         * Message connectedTo.
         * @member {(fullMesh.IPeers|null|undefined)}connectedTo
         * @memberof fullMesh.Message
         * @instance
         */
        Message.prototype.connectedTo = null;

        /**
         * Message joiningPeerId.
         * @member {number}joiningPeerId
         * @memberof fullMesh.Message
         * @instance
         */
        Message.prototype.joiningPeerId = 0;

        /**
         * Message joinSucceed.
         * @member {boolean}joinSucceed
         * @memberof fullMesh.Message
         * @instance
         */
        Message.prototype.joinSucceed = false;

        /**
         * Message joinFailedPeerId.
         * @member {number}joinFailedPeerId
         * @memberof fullMesh.Message
         * @instance
         */
        Message.prototype.joinFailedPeerId = 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message type.
         * @member {string|undefined} type
         * @memberof fullMesh.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["connectTo", "connectedTo", "joiningPeerId", "joinSucceed", "joinFailedPeerId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof fullMesh.Message
         * @static
         * @param {fullMesh.IMessage=} [properties] Properties to set
         * @returns {fullMesh.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link fullMesh.Message.verify|verify} messages.
         * @function encode
         * @memberof fullMesh.Message
         * @static
         * @param {fullMesh.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.connectTo != null && message.hasOwnProperty("connectTo")) $root.fullMesh.Peers.encode(message.connectTo, writer.uint32( /* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.connectedTo != null && message.hasOwnProperty("connectedTo")) $root.fullMesh.Peers.encode(message.connectedTo, writer.uint32( /* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.joiningPeerId != null && message.hasOwnProperty("joiningPeerId")) writer.uint32( /* id 3, wireType 0 =*/24).uint32(message.joiningPeerId);
            if (message.joinSucceed != null && message.hasOwnProperty("joinSucceed")) writer.uint32( /* id 4, wireType 0 =*/32).bool(message.joinSucceed);
            if (message.joinFailedPeerId != null && message.hasOwnProperty("joinFailedPeerId")) writer.uint32( /* id 5, wireType 0 =*/40).uint32(message.joinFailedPeerId);
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof fullMesh.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {fullMesh.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.fullMesh.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.connectTo = $root.fullMesh.Peers.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.connectedTo = $root.fullMesh.Peers.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.joiningPeerId = reader.uint32();
                        break;
                    case 4:
                        message.joinSucceed = reader.bool();
                        break;
                    case 5:
                        message.joinFailedPeerId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Message;
    }();

    fullMesh.Peers = function () {

        /**
         * Properties of a Peers.
         * @memberof fullMesh
         * @interface IPeers
         * @property {Array.<number>} [peers] Peers peers
         */

        /**
         * Constructs a new Peers.
         * @memberof fullMesh
         * @classdesc Represents a Peers.
         * @constructor
         * @param {fullMesh.IPeers=} [properties] Properties to set
         */
        function Peers(properties) {
            this.peers = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Peers peers.
         * @member {Array.<number>}peers
         * @memberof fullMesh.Peers
         * @instance
         */
        Peers.prototype.peers = $util.emptyArray;

        /**
         * Creates a new Peers instance using the specified properties.
         * @function create
         * @memberof fullMesh.Peers
         * @static
         * @param {fullMesh.IPeers=} [properties] Properties to set
         * @returns {fullMesh.Peers} Peers instance
         */
        Peers.create = function create(properties) {
            return new Peers(properties);
        };

        /**
         * Encodes the specified Peers message. Does not implicitly {@link fullMesh.Peers.verify|verify} messages.
         * @function encode
         * @memberof fullMesh.Peers
         * @static
         * @param {fullMesh.IPeers} message Peers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Peers.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.peers != null && message.peers.length) {
                writer.uint32( /* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.peers.length; ++i) {
                    writer.uint32(message.peers[i]);
                }writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Peers message from the specified reader or buffer.
         * @function decode
         * @memberof fullMesh.Peers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {fullMesh.Peers} Peers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Peers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.fullMesh.Peers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.peers && message.peers.length)) message.peers = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.peers.push(reader.uint32());
                            }
                        } else message.peers.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Peers;
    }();

    return fullMesh;
}();

export var spray = $root.spray = function () {

    /**
     * Namespace spray.
     * @exports spray
     * @namespace
     */
    var spray = {};

    spray.Message = function () {

        /**
         * Properties of a Message.
         * @memberof spray
         * @interface IMessage
         * @property {number} [shouldAdd] Message shouldAdd
         * @property {spray.ISample} [exchangeInit] Message exchangeInit
         * @property {spray.ISample} [exchangeResp] Message exchangeResp
         * @property {number} [connectTo] Message connectTo
         * @property {spray.IPeers} [connectedTo] Message connectedTo
         * @property {number} [joinedPeerId] Message joinedPeerId
         * @property {number} [joinedPeerIdFinished] Message joinedPeerIdFinished
         */

        /**
         * Constructs a new Message.
         * @memberof spray
         * @classdesc Represents a Message.
         * @constructor
         * @param {spray.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message shouldAdd.
         * @member {number}shouldAdd
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.shouldAdd = 0;

        /**
         * Message exchangeInit.
         * @member {(spray.ISample|null|undefined)}exchangeInit
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.exchangeInit = null;

        /**
         * Message exchangeResp.
         * @member {(spray.ISample|null|undefined)}exchangeResp
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.exchangeResp = null;

        /**
         * Message connectTo.
         * @member {number}connectTo
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.connectTo = 0;

        /**
         * Message connectedTo.
         * @member {(spray.IPeers|null|undefined)}connectedTo
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.connectedTo = null;

        /**
         * Message joinedPeerId.
         * @member {number}joinedPeerId
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.joinedPeerId = 0;

        /**
         * Message joinedPeerIdFinished.
         * @member {number}joinedPeerIdFinished
         * @memberof spray.Message
         * @instance
         */
        Message.prototype.joinedPeerIdFinished = 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message type.
         * @member {string|undefined} type
         * @memberof spray.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["shouldAdd", "exchangeInit", "exchangeResp", "connectTo", "connectedTo", "joinedPeerId", "joinedPeerIdFinished"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof spray.Message
         * @static
         * @param {spray.IMessage=} [properties] Properties to set
         * @returns {spray.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link spray.Message.verify|verify} messages.
         * @function encode
         * @memberof spray.Message
         * @static
         * @param {spray.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.shouldAdd != null && message.hasOwnProperty("shouldAdd")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.shouldAdd);
            if (message.exchangeInit != null && message.hasOwnProperty("exchangeInit")) $root.spray.Sample.encode(message.exchangeInit, writer.uint32( /* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.exchangeResp != null && message.hasOwnProperty("exchangeResp")) $root.spray.Sample.encode(message.exchangeResp, writer.uint32( /* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.connectTo != null && message.hasOwnProperty("connectTo")) writer.uint32( /* id 4, wireType 0 =*/32).uint32(message.connectTo);
            if (message.connectedTo != null && message.hasOwnProperty("connectedTo")) $root.spray.Peers.encode(message.connectedTo, writer.uint32( /* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.joinedPeerId != null && message.hasOwnProperty("joinedPeerId")) writer.uint32( /* id 6, wireType 0 =*/48).uint32(message.joinedPeerId);
            if (message.joinedPeerIdFinished != null && message.hasOwnProperty("joinedPeerIdFinished")) writer.uint32( /* id 7, wireType 0 =*/56).uint32(message.joinedPeerIdFinished);
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof spray.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {spray.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.spray.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.shouldAdd = reader.uint32();
                        break;
                    case 2:
                        message.exchangeInit = $root.spray.Sample.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.exchangeResp = $root.spray.Sample.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.connectTo = reader.uint32();
                        break;
                    case 5:
                        message.connectedTo = $root.spray.Peers.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.joinedPeerId = reader.uint32();
                        break;
                    case 7:
                        message.joinedPeerIdFinished = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Message;
    }();

    spray.Sample = function () {

        /**
         * Properties of a Sample.
         * @memberof spray
         * @interface ISample
         * @property {Array.<number>} [sample] Sample sample
         */

        /**
         * Constructs a new Sample.
         * @memberof spray
         * @classdesc Represents a Sample.
         * @constructor
         * @param {spray.ISample=} [properties] Properties to set
         */
        function Sample(properties) {
            this.sample = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Sample sample.
         * @member {Array.<number>}sample
         * @memberof spray.Sample
         * @instance
         */
        Sample.prototype.sample = $util.emptyArray;

        /**
         * Creates a new Sample instance using the specified properties.
         * @function create
         * @memberof spray.Sample
         * @static
         * @param {spray.ISample=} [properties] Properties to set
         * @returns {spray.Sample} Sample instance
         */
        Sample.create = function create(properties) {
            return new Sample(properties);
        };

        /**
         * Encodes the specified Sample message. Does not implicitly {@link spray.Sample.verify|verify} messages.
         * @function encode
         * @memberof spray.Sample
         * @static
         * @param {spray.ISample} message Sample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sample.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.sample != null && message.sample.length) {
                writer.uint32( /* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.sample.length; ++i) {
                    writer.uint32(message.sample[i]);
                }writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Sample message from the specified reader or buffer.
         * @function decode
         * @memberof spray.Sample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {spray.Sample} Sample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.spray.Sample();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.sample && message.sample.length)) message.sample = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.sample.push(reader.uint32());
                            }
                        } else message.sample.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Sample;
    }();

    spray.Peers = function () {

        /**
         * Properties of a Peers.
         * @memberof spray
         * @interface IPeers
         * @property {Array.<number>} [peers] Peers peers
         */

        /**
         * Constructs a new Peers.
         * @memberof spray
         * @classdesc Represents a Peers.
         * @constructor
         * @param {spray.IPeers=} [properties] Properties to set
         */
        function Peers(properties) {
            this.peers = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Peers peers.
         * @member {Array.<number>}peers
         * @memberof spray.Peers
         * @instance
         */
        Peers.prototype.peers = $util.emptyArray;

        /**
         * Creates a new Peers instance using the specified properties.
         * @function create
         * @memberof spray.Peers
         * @static
         * @param {spray.IPeers=} [properties] Properties to set
         * @returns {spray.Peers} Peers instance
         */
        Peers.create = function create(properties) {
            return new Peers(properties);
        };

        /**
         * Encodes the specified Peers message. Does not implicitly {@link spray.Peers.verify|verify} messages.
         * @function encode
         * @memberof spray.Peers
         * @static
         * @param {spray.IPeers} message Peers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Peers.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.peers != null && message.peers.length) {
                writer.uint32( /* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.peers.length; ++i) {
                    writer.uint32(message.peers[i]);
                }writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Peers message from the specified reader or buffer.
         * @function decode
         * @memberof spray.Peers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {spray.Peers} Peers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Peers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.spray.Peers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.peers && message.peers.length)) message.peers = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.peers.push(reader.uint32());
                            }
                        } else message.peers.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Peers;
    }();

    return spray;
}();

export var webRTCBuilder = $root.webRTCBuilder = function () {

    /**
     * Namespace webRTCBuilder.
     * @exports webRTCBuilder
     * @namespace
     */
    var webRTCBuilder = {};

    webRTCBuilder.Message = function () {

        /**
         * Properties of a Message.
         * @memberof webRTCBuilder
         * @interface IMessage
         * @property {boolean} [isInitiator] Message isInitiator
         * @property {string} [offer] Message offer
         * @property {string} [answer] Message answer
         * @property {webRTCBuilder.Message.IIceCandidate} [iceCandidate] Message iceCandidate
         */

        /**
         * Constructs a new Message.
         * @memberof webRTCBuilder
         * @classdesc Represents a Message.
         * @constructor
         * @param {webRTCBuilder.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message isInitiator.
         * @member {boolean}isInitiator
         * @memberof webRTCBuilder.Message
         * @instance
         */
        Message.prototype.isInitiator = false;

        /**
         * Message offer.
         * @member {string}offer
         * @memberof webRTCBuilder.Message
         * @instance
         */
        Message.prototype.offer = "";

        /**
         * Message answer.
         * @member {string}answer
         * @memberof webRTCBuilder.Message
         * @instance
         */
        Message.prototype.answer = "";

        /**
         * Message iceCandidate.
         * @member {(webRTCBuilder.Message.IIceCandidate|null|undefined)}iceCandidate
         * @memberof webRTCBuilder.Message
         * @instance
         */
        Message.prototype.iceCandidate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message type.
         * @member {string|undefined} type
         * @memberof webRTCBuilder.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["offer", "answer", "iceCandidate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof webRTCBuilder.Message
         * @static
         * @param {webRTCBuilder.IMessage=} [properties] Properties to set
         * @returns {webRTCBuilder.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link webRTCBuilder.Message.verify|verify} messages.
         * @function encode
         * @memberof webRTCBuilder.Message
         * @static
         * @param {webRTCBuilder.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.isInitiator != null && message.hasOwnProperty("isInitiator")) writer.uint32( /* id 1, wireType 0 =*/8).bool(message.isInitiator);
            if (message.offer != null && message.hasOwnProperty("offer")) writer.uint32( /* id 2, wireType 2 =*/18).string(message.offer);
            if (message.answer != null && message.hasOwnProperty("answer")) writer.uint32( /* id 3, wireType 2 =*/26).string(message.answer);
            if (message.iceCandidate != null && message.hasOwnProperty("iceCandidate")) $root.webRTCBuilder.Message.IceCandidate.encode(message.iceCandidate, writer.uint32( /* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof webRTCBuilder.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {webRTCBuilder.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.webRTCBuilder.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.isInitiator = reader.bool();
                        break;
                    case 2:
                        message.offer = reader.string();
                        break;
                    case 3:
                        message.answer = reader.string();
                        break;
                    case 4:
                        message.iceCandidate = $root.webRTCBuilder.Message.IceCandidate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        Message.IceCandidate = function () {

            /**
             * Properties of an IceCandidate.
             * @memberof webRTCBuilder.Message
             * @interface IIceCandidate
             * @property {string} [candidate] IceCandidate candidate
             * @property {string} [sdpMid] IceCandidate sdpMid
             * @property {number} [sdpMLineIndex] IceCandidate sdpMLineIndex
             */

            /**
             * Constructs a new IceCandidate.
             * @memberof webRTCBuilder.Message
             * @classdesc Represents an IceCandidate.
             * @constructor
             * @param {webRTCBuilder.Message.IIceCandidate=} [properties] Properties to set
             */
            function IceCandidate(properties) {
                if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
                }
            }

            /**
             * IceCandidate candidate.
             * @member {string}candidate
             * @memberof webRTCBuilder.Message.IceCandidate
             * @instance
             */
            IceCandidate.prototype.candidate = "";

            /**
             * IceCandidate sdpMid.
             * @member {string}sdpMid
             * @memberof webRTCBuilder.Message.IceCandidate
             * @instance
             */
            IceCandidate.prototype.sdpMid = "";

            /**
             * IceCandidate sdpMLineIndex.
             * @member {number}sdpMLineIndex
             * @memberof webRTCBuilder.Message.IceCandidate
             * @instance
             */
            IceCandidate.prototype.sdpMLineIndex = 0;

            /**
             * Creates a new IceCandidate instance using the specified properties.
             * @function create
             * @memberof webRTCBuilder.Message.IceCandidate
             * @static
             * @param {webRTCBuilder.Message.IIceCandidate=} [properties] Properties to set
             * @returns {webRTCBuilder.Message.IceCandidate} IceCandidate instance
             */
            IceCandidate.create = function create(properties) {
                return new IceCandidate(properties);
            };

            /**
             * Encodes the specified IceCandidate message. Does not implicitly {@link webRTCBuilder.Message.IceCandidate.verify|verify} messages.
             * @function encode
             * @memberof webRTCBuilder.Message.IceCandidate
             * @static
             * @param {webRTCBuilder.Message.IIceCandidate} message IceCandidate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IceCandidate.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.candidate != null && message.hasOwnProperty("candidate")) writer.uint32( /* id 1, wireType 2 =*/10).string(message.candidate);
                if (message.sdpMid != null && message.hasOwnProperty("sdpMid")) writer.uint32( /* id 2, wireType 2 =*/18).string(message.sdpMid);
                if (message.sdpMLineIndex != null && message.hasOwnProperty("sdpMLineIndex")) writer.uint32( /* id 3, wireType 0 =*/24).uint32(message.sdpMLineIndex);
                return writer;
            };

            /**
             * Decodes an IceCandidate message from the specified reader or buffer.
             * @function decode
             * @memberof webRTCBuilder.Message.IceCandidate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {webRTCBuilder.Message.IceCandidate} IceCandidate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IceCandidate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.webRTCBuilder.Message.IceCandidate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.candidate = reader.string();
                            break;
                        case 2:
                            message.sdpMid = reader.string();
                            break;
                        case 3:
                            message.sdpMLineIndex = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            return IceCandidate;
        }();

        return Message;
    }();

    return webRTCBuilder;
}();

export var signaling = $root.signaling = function () {

    /**
     * Namespace signaling.
     * @exports signaling
     * @namespace
     */
    var signaling = {};

    signaling.Message = function () {

        /**
         * Properties of a Message.
         * @memberof signaling
         * @interface IMessage
         * @property {signaling.IContent} [content] Message content
         * @property {boolean} [isFirst] Message isFirst
         * @property {boolean} [joined] Message joined
         * @property {boolean} [ping] Message ping
         * @property {boolean} [pong] Message pong
         */

        /**
         * Constructs a new Message.
         * @memberof signaling
         * @classdesc Represents a Message.
         * @constructor
         * @param {signaling.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message content.
         * @member {(signaling.IContent|null|undefined)}content
         * @memberof signaling.Message
         * @instance
         */
        Message.prototype.content = null;

        /**
         * Message isFirst.
         * @member {boolean}isFirst
         * @memberof signaling.Message
         * @instance
         */
        Message.prototype.isFirst = false;

        /**
         * Message joined.
         * @member {boolean}joined
         * @memberof signaling.Message
         * @instance
         */
        Message.prototype.joined = false;

        /**
         * Message ping.
         * @member {boolean}ping
         * @memberof signaling.Message
         * @instance
         */
        Message.prototype.ping = false;

        /**
         * Message pong.
         * @member {boolean}pong
         * @memberof signaling.Message
         * @instance
         */
        Message.prototype.pong = false;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Message type.
         * @member {string|undefined} type
         * @memberof signaling.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["content", "isFirst", "joined", "ping", "pong"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof signaling.Message
         * @static
         * @param {signaling.IMessage=} [properties] Properties to set
         * @returns {signaling.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link signaling.Message.verify|verify} messages.
         * @function encode
         * @memberof signaling.Message
         * @static
         * @param {signaling.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content")) $root.signaling.Content.encode(message.content, writer.uint32( /* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isFirst != null && message.hasOwnProperty("isFirst")) writer.uint32( /* id 2, wireType 0 =*/16).bool(message.isFirst);
            if (message.joined != null && message.hasOwnProperty("joined")) writer.uint32( /* id 3, wireType 0 =*/24).bool(message.joined);
            if (message.ping != null && message.hasOwnProperty("ping")) writer.uint32( /* id 4, wireType 0 =*/32).bool(message.ping);
            if (message.pong != null && message.hasOwnProperty("pong")) writer.uint32( /* id 5, wireType 0 =*/40).bool(message.pong);
            return writer;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.signaling.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.content = $root.signaling.Content.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.isFirst = reader.bool();
                        break;
                    case 3:
                        message.joined = reader.bool();
                        break;
                    case 4:
                        message.ping = reader.bool();
                        break;
                    case 5:
                        message.pong = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Message;
    }();

    signaling.Content = function () {

        /**
         * Properties of a Content.
         * @memberof signaling
         * @interface IContent
         * @property {number} [id] Content id
         * @property {boolean} [isEnd] Content isEnd
         * @property {Uint8Array} [data] Content data
         * @property {boolean} [isError] Content isError
         */

        /**
         * Constructs a new Content.
         * @memberof signaling
         * @classdesc Represents a Content.
         * @constructor
         * @param {signaling.IContent=} [properties] Properties to set
         */
        function Content(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Content id.
         * @member {number}id
         * @memberof signaling.Content
         * @instance
         */
        Content.prototype.id = 0;

        /**
         * Content isEnd.
         * @member {boolean}isEnd
         * @memberof signaling.Content
         * @instance
         */
        Content.prototype.isEnd = false;

        /**
         * Content data.
         * @member {Uint8Array}data
         * @memberof signaling.Content
         * @instance
         */
        Content.prototype.data = $util.newBuffer([]);

        /**
         * Content isError.
         * @member {boolean}isError
         * @memberof signaling.Content
         * @instance
         */
        Content.prototype.isError = false;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields = void 0;

        /**
         * Content type.
         * @member {string|undefined} type
         * @memberof signaling.Content
         * @instance
         */
        Object.defineProperty(Content.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["data", "isError"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Content instance using the specified properties.
         * @function create
         * @memberof signaling.Content
         * @static
         * @param {signaling.IContent=} [properties] Properties to set
         * @returns {signaling.Content} Content instance
         */
        Content.create = function create(properties) {
            return new Content(properties);
        };

        /**
         * Encodes the specified Content message. Does not implicitly {@link signaling.Content.verify|verify} messages.
         * @function encode
         * @memberof signaling.Content
         * @static
         * @param {signaling.IContent} message Content message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Content.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id")) writer.uint32( /* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.isEnd != null && message.hasOwnProperty("isEnd")) writer.uint32( /* id 2, wireType 0 =*/16).bool(message.isEnd);
            if (message.data != null && message.hasOwnProperty("data")) writer.uint32( /* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.isError != null && message.hasOwnProperty("isError")) writer.uint32( /* id 4, wireType 0 =*/32).bool(message.isError);
            return writer;
        };

        /**
         * Decodes a Content message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.Content
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.Content} Content
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Content.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.signaling.Content();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.isEnd = reader.bool();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    case 4:
                        message.isError = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        return Content;
    }();

    return signaling;
}();

export { $root as default };
