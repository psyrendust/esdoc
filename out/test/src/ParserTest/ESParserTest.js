'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ESParser = require('../../../src/Parser/ESParser.js');

var _ESParser2 = _interopRequireDefault(_ESParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {ESParser} */
describe('ESParser', () => {
  it('can parse "Class"', () => {
    const ast = _ESParser2.default.parse({}, './test/fixture/package/src/Class/Definition.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });

  // todo: enhance test patterns.
});