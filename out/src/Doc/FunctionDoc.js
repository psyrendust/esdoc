'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractDoc = require('./AbstractDoc.js');

var _AbstractDoc2 = _interopRequireDefault(_AbstractDoc);

var _ParamParser = require('../Parser/ParamParser.js');

var _ParamParser2 = _interopRequireDefault(_ParamParser);

var _NamingUtil = require('../Util/NamingUtil.js');

var _NamingUtil2 = _interopRequireDefault(_NamingUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Doc Class from Function declaration AST node.
 */
class FunctionDoc extends _AbstractDoc2.default {
  /** specify ``function`` to kind. */
  _$kind() {
    super._$kind();
    this._value.kind = 'function';
  }

  /** take out self name from self node */
  _$name() {
    super._$name();

    if (this._node.id) {
      if (this._node.id.type === 'MemberExpression') {
        // todo: can not reproduce this condition.
        // this._value.name = ASTUtil.flattenMemberExpression(this._node.id);
      } else {
        this._value.name = this._node.id.name;
      }
    } else {
      this._value.name = _NamingUtil2.default.filePathToName(this._pathResolver.filePath);
    }
  }

  /** take out self name from file path */
  _$memberof() {
    super._$memberof();
    this._value.memberof = this._pathResolver.filePath;
  }

  /** check generator property in self node */
  _$generator() {
    super._$generator();
    this._value.generator = this._node.generator;
  }

  /**
   * use async property of self node.
   */
  _$async() {
    super._$async();
    this._value.async = this._node.async;
  }

  /** if @param is not exists, guess type of param by using self node. */
  _$param() {
    super._$param();
    if (this._value.params) return;

    this._value.params = _ParamParser2.default.guessParams(this._node.params);
  }

  /** if @return is not exists, guess type of return by using self node. */
  _$return() {
    super._$return();
    if (this._value.return) return;

    const result = _ParamParser2.default.guessReturnParam(this._node.body);
    if (result) {
      this._value.return = result;
    }
  }
}
exports.default = FunctionDoc;