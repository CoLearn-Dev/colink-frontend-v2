// source: proto/colink_policy_module.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.colink_policy_module.Action', null, global);
goog.exportSymbol('proto.colink_policy_module.Rule', null, global);
goog.exportSymbol('proto.colink_policy_module.Settings', null, global);
goog.exportSymbol('proto.colink_policy_module.TaskFilter', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.colink_policy_module.Rule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.colink_policy_module.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.colink_policy_module.Rule.displayName = 'proto.colink_policy_module.Rule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.colink_policy_module.TaskFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.colink_policy_module.TaskFilter.repeatedFields_, null);
};
goog.inherits(proto.colink_policy_module.TaskFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.colink_policy_module.TaskFilter.displayName = 'proto.colink_policy_module.TaskFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.colink_policy_module.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.colink_policy_module.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.colink_policy_module.Action.displayName = 'proto.colink_policy_module.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.colink_policy_module.Settings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.colink_policy_module.Settings.repeatedFields_, null);
};
goog.inherits(proto.colink_policy_module.Settings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.colink_policy_module.Settings.displayName = 'proto.colink_policy_module.Settings';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.colink_policy_module.Rule.prototype.toObject = function(opt_includeInstance) {
  return proto.colink_policy_module.Rule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.colink_policy_module.Rule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.Rule.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taskFilter: (f = msg.getTaskFilter()) && proto.colink_policy_module.TaskFilter.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.colink_policy_module.Action.toObject(includeInstance, f),
    priority: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.colink_policy_module.Rule}
 */
proto.colink_policy_module.Rule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.colink_policy_module.Rule;
  return proto.colink_policy_module.Rule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.colink_policy_module.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.colink_policy_module.Rule}
 */
proto.colink_policy_module.Rule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleId(value);
      break;
    case 2:
      var value = new proto.colink_policy_module.TaskFilter;
      reader.readMessage(value,proto.colink_policy_module.TaskFilter.deserializeBinaryFromReader);
      msg.setTaskFilter(value);
      break;
    case 3:
      var value = new proto.colink_policy_module.Action;
      reader.readMessage(value,proto.colink_policy_module.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.colink_policy_module.Rule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.colink_policy_module.Rule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.colink_policy_module.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.Rule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.colink_policy_module.TaskFilter.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.colink_policy_module.Action.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string rule_id = 1;
 * @return {string}
 */
proto.colink_policy_module.Rule.prototype.getRuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.colink_policy_module.Rule} returns this
 */
proto.colink_policy_module.Rule.prototype.setRuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TaskFilter task_filter = 2;
 * @return {?proto.colink_policy_module.TaskFilter}
 */
proto.colink_policy_module.Rule.prototype.getTaskFilter = function() {
  return /** @type{?proto.colink_policy_module.TaskFilter} */ (
    jspb.Message.getWrapperField(this, proto.colink_policy_module.TaskFilter, 2));
};


/**
 * @param {?proto.colink_policy_module.TaskFilter|undefined} value
 * @return {!proto.colink_policy_module.Rule} returns this
*/
proto.colink_policy_module.Rule.prototype.setTaskFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.colink_policy_module.Rule} returns this
 */
proto.colink_policy_module.Rule.prototype.clearTaskFilter = function() {
  return this.setTaskFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.colink_policy_module.Rule.prototype.hasTaskFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Action action = 3;
 * @return {?proto.colink_policy_module.Action}
 */
proto.colink_policy_module.Rule.prototype.getAction = function() {
  return /** @type{?proto.colink_policy_module.Action} */ (
    jspb.Message.getWrapperField(this, proto.colink_policy_module.Action, 3));
};


/**
 * @param {?proto.colink_policy_module.Action|undefined} value
 * @return {!proto.colink_policy_module.Rule} returns this
*/
proto.colink_policy_module.Rule.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.colink_policy_module.Rule} returns this
 */
proto.colink_policy_module.Rule.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.colink_policy_module.Rule.prototype.hasAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 priority = 4;
 * @return {number}
 */
proto.colink_policy_module.Rule.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.colink_policy_module.Rule} returns this
 */
proto.colink_policy_module.Rule.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.colink_policy_module.TaskFilter.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.colink_policy_module.TaskFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.colink_policy_module.TaskFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.colink_policy_module.TaskFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.TaskFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocolName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    role: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentTaskFilter: (f = msg.getParentTaskFilter()) && proto.colink_policy_module.TaskFilter.toObject(includeInstance, f),
    requireAgreement: (f = msg.getRequireAgreement()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.colink_policy_module.TaskFilter}
 */
proto.colink_policy_module.TaskFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.colink_policy_module.TaskFilter;
  return proto.colink_policy_module.TaskFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.colink_policy_module.TaskFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.colink_policy_module.TaskFilter}
 */
proto.colink_policy_module.TaskFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addParticipants(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 5:
      var value = new proto.colink_policy_module.TaskFilter;
      reader.readMessage(value,proto.colink_policy_module.TaskFilter.deserializeBinaryFromReader);
      msg.setParentTaskFilter(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setRequireAgreement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.colink_policy_module.TaskFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.colink_policy_module.TaskFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.colink_policy_module.TaskFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.TaskFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocolName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParentTaskFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.colink_policy_module.TaskFilter.serializeBinaryToWriter
    );
  }
  f = message.getRequireAgreement();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.colink_policy_module.TaskFilter.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string protocol_name = 2;
 * @return {string}
 */
proto.colink_policy_module.TaskFilter.prototype.getProtocolName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.setProtocolName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string participants = 3;
 * @return {!Array<string>}
 */
proto.colink_policy_module.TaskFilter.prototype.getParticipantsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.setParticipantsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.addParticipants = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};


/**
 * optional string role = 4;
 * @return {string}
 */
proto.colink_policy_module.TaskFilter.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TaskFilter parent_task_filter = 5;
 * @return {?proto.colink_policy_module.TaskFilter}
 */
proto.colink_policy_module.TaskFilter.prototype.getParentTaskFilter = function() {
  return /** @type{?proto.colink_policy_module.TaskFilter} */ (
    jspb.Message.getWrapperField(this, proto.colink_policy_module.TaskFilter, 5));
};


/**
 * @param {?proto.colink_policy_module.TaskFilter|undefined} value
 * @return {!proto.colink_policy_module.TaskFilter} returns this
*/
proto.colink_policy_module.TaskFilter.prototype.setParentTaskFilter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.clearParentTaskFilter = function() {
  return this.setParentTaskFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.colink_policy_module.TaskFilter.prototype.hasParentTaskFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue require_agreement = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.colink_policy_module.TaskFilter.prototype.getRequireAgreement = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.colink_policy_module.TaskFilter} returns this
*/
proto.colink_policy_module.TaskFilter.prototype.setRequireAgreement = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.colink_policy_module.TaskFilter} returns this
 */
proto.colink_policy_module.TaskFilter.prototype.clearRequireAgreement = function() {
  return this.setRequireAgreement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.colink_policy_module.TaskFilter.prototype.hasRequireAgreement = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.colink_policy_module.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.colink_policy_module.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.colink_policy_module.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    forwardTargetKeyname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.colink_policy_module.Action}
 */
proto.colink_policy_module.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.colink_policy_module.Action;
  return proto.colink_policy_module.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.colink_policy_module.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.colink_policy_module.Action}
 */
proto.colink_policy_module.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setForwardTargetKeyname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.colink_policy_module.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.colink_policy_module.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.colink_policy_module.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getForwardTargetKeyname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.colink_policy_module.Action.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.colink_policy_module.Action} returns this
 */
proto.colink_policy_module.Action.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string forward_target_keyname = 2;
 * @return {string}
 */
proto.colink_policy_module.Action.prototype.getForwardTargetKeyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.colink_policy_module.Action} returns this
 */
proto.colink_policy_module.Action.prototype.setForwardTargetKeyname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.colink_policy_module.Settings.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.colink_policy_module.Settings.prototype.toObject = function(opt_includeInstance) {
  return proto.colink_policy_module.Settings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.colink_policy_module.Settings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.Settings.toObject = function(includeInstance, msg) {
  var f, obj = {
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.colink_policy_module.Rule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.colink_policy_module.Settings}
 */
proto.colink_policy_module.Settings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.colink_policy_module.Settings;
  return proto.colink_policy_module.Settings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.colink_policy_module.Settings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.colink_policy_module.Settings}
 */
proto.colink_policy_module.Settings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 2:
      var value = new proto.colink_policy_module.Rule;
      reader.readMessage(value,proto.colink_policy_module.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.colink_policy_module.Settings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.colink_policy_module.Settings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.colink_policy_module.Settings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.colink_policy_module.Settings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.colink_policy_module.Rule.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enable = 1;
 * @return {boolean}
 */
proto.colink_policy_module.Settings.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.colink_policy_module.Settings} returns this
 */
proto.colink_policy_module.Settings.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated Rule rules = 2;
 * @return {!Array<!proto.colink_policy_module.Rule>}
 */
proto.colink_policy_module.Settings.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.colink_policy_module.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.colink_policy_module.Rule, 2));
};


/**
 * @param {!Array<!proto.colink_policy_module.Rule>} value
 * @return {!proto.colink_policy_module.Settings} returns this
*/
proto.colink_policy_module.Settings.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.colink_policy_module.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.colink_policy_module.Rule}
 */
proto.colink_policy_module.Settings.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.colink_policy_module.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.colink_policy_module.Settings} returns this
 */
proto.colink_policy_module.Settings.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


goog.object.extend(exports, proto.colink_policy_module);
