'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('./../../util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {CoverageBuilder} */
describe('test coverage', () => {
  const doc = (0, _util.readDoc)('source.html');
  const badge = _fs2.default.readFileSync('./test/fixture/dest/esdoc/badge.svg', { encoding: 'utf8' }).toString();

  it('has coverage summary', () => {
    (0, _util.assert)(badge.includes('79%'));
    _util.assert.includes(doc, '[data-ice="coverageBadge"]', './badge.svg', 'src');
    _util.assert.includes(doc, '[data-ice="totalCoverageCount"]', '266/333');
    _util.assert.equal(doc.find('[data-ice="file"] [data-ice="coverage"]').length, 117);
  });

  /* eslint-disable max-statements */
  it('has coverage details', () => {
    let count = 0;
    function test(filePath, expect) {
      (0, _util.findParent)(doc, `a[href="${ filePath }"]`, '[data-ice="file"]', doc => {
        _util.assert.includes(doc, '.coverage', expect);
        count++;
      });
    }

    test('file/src/Abstract/Definition.js.html', '100 %3/3');
    test('file/src/Abstract/Override.js.html', '100 %3/3');
    test('file/src/Access/Class.js.html', '100 %4/4');
    test('file/src/Access/Function.js.html', '100 %4/4');
    test('file/src/Access/Method.js.html', '100 %5/5');
    test('file/src/Access/Property.js.html#errorLines=5', '83 %5/6');
    test('file/src/Access/Variable.js.html', '100 %4/4');
    test('file/src/Async/Function.js.html', '100 %1/1');
    test('file/src/Async/Method.js.html', '100 %2/2');
    test('file/src/Class/Definition.js.html', '100 %8/8');
    test('file/src/ClassProperty/Definition.js.html', '100 %3/3');
    test('file/src/Computed/Method.js.html', '100 %11/11');
    test('file/src/Computed/Property.js.html', '100 %12/12');
    test('file/src/Deprecated/Class.js.html#errorLines=6', '75 %3/4');
    test('file/src/Deprecated/Function.js.html', '100 %1/1');
    test('file/src/Deprecated/Variable.js.html', '100 %1/1');
    test('file/src/Desc/Class.js.html', '100 %4/4');
    test('file/src/Desc/Function.js.html', '100 %1/1');
    test('file/src/Desc/Markdown.js.html', '100 %1/1');
    test('file/src/Desc/MultiLine.js.html', '100 %4/4');
    test('file/src/Desc/Variable.js.html', '100 %1/1');
    test('file/src/Destructuring/Array.js.html', '100 %2/2');
    test('file/src/Destructuring/Object.js.html', '100 %2/2');
    test('file/src/Duplication/Definition.js.html', '100 %5/5');
    test('file/src/Emits/Function.js.html#errorLines=7', '50 %1/2');
    test('file/src/Emits/Method.js.html#errorLines=13,15', '50 %2/4');
    test('file/src/Example/Caption.js.html', '100 %1/1');
    test('file/src/Example/Class.js.html', '100 %4/4');
    test('file/src/Example/Function.js.html', '100 %1/1');
    test('file/src/Example/Variable.js.html', '100 %1/1');
    test('file/src/Experimental/Class.js.html', '100 %4/4');
    test('file/src/Experimental/Function.js.html', '100 %1/1');
    test('file/src/Experimental/Variable.js.html', '100 %1/1');
    test('file/src/ExponentiationOperator/Definition.js.html', '100 %2/2');
    test('file/src/Export/AnonymousClass.js.html', '100 %1/1');
    test('file/src/Export/AnonymousFunction.js.html', '100 %1/1');
    test('file/src/Export/Class.js.html#errorLines=24', '80 %4/5');
    test('file/src/Export/ClassIndirectDefault.js.html', '100 %1/1');
    test('file/src/Export/Default.js.html', '100 %1/1');
    test('file/src/Export/Extends.js.html', '100 %2/2');
    test('file/src/Export/Function.js.html#errorLines=32', '83 %5/6');
    test('file/src/Export/FunctionIndirectDefault.js.html', '100 %1/1');
    test('file/src/Export/Multiple.js.html', '100 %2/2');
    test('file/src/Export/Named.js.html', '100 %1/1');
    test('file/src/Export/NewExpression.js.html', '100 %4/4');
    test('file/src/Export/NewExpressionIndirect.js.html', '100 %2/2');
    test('file/src/Export/NewExpressionProperty.js.html', '100 %2/2');
    test('file/src/Export/Variable.js.html#errorLines=22,23', '66 %4/6');
    test('file/src/Export/VariableIndirectDefault.js.html', '100 %1/1');
    test('file/src/Extends/Builtin.js.html#errorLines=5', '50 %1/2');
    test('file/src/Extends/Deep.js.html#errorLines=1,10,12,14,15,19,2,20,22,24,25,28,30,32,33,37,38,4,40,42,43,46,48,50,51,6,7', '0 %0/27');
    test('file/src/Extends/Expression.js.html#errorLines=10', '66 %2/3');
    test('file/src/Extends/Inner.js.html#errorLines=1', '83 %5/6');
    test('file/src/Extends/Mixin.js.html#errorLines=15,8', '66 %4/6');
    test('file/src/Extends/Outer.js.html', '100 %2/2');
    test('file/src/Extends/Property.js.html', '100 %1/1');
    test('file/src/External/Definition.js.html', '-');
    test('file/src/Generator/Function.js.html', '100 %1/1');
    test('file/src/Generator/Method.js.html', '100 %2/2');
    test('file/src/Guess/Param.js.html#errorLines=11,13,15,17,19,5,7,9', '11 %1/9');
    test('file/src/Guess/Property.js.html#errorLines=10,12,5,6,8', '16 %1/6');
    test('file/src/Guess/Return.js.html#errorLines=13,17,5,9', '20 %1/5');
    test('file/src/Guess/Variable.js.html#errorLines=1,3,5,7', '0 %0/4');
    test('file/src/Ignore/Class.js.html', '100 %2/2');
    test('file/src/Ignore/Function.js.html', '-');
    test('file/src/Ignore/Variable.js.html', '-');
    test('file/src/Interface/Definition.js.html', '100 %2/2');
    test('file/src/Interface/Implements.js.html', '100 %5/5');
    test('file/src/Invalid/DocSyntax.js.html', '-');
    test('file/src/JSX/Definition.js.html', '100 %2/2');
    test('file/src/Link/Class.js.html', '100 %4/4');
    test('file/src/Link/Function.js.html', '100 %1/1');
    test('file/src/Link/Variable.js.html', '100 %1/1');
    test('file/src/Lint/Invalid.js.html', '100 %5/5');
    test('file/src/Listens/Function.js.html', '100 %2/2');
    test('file/src/Listens/Method.js.html', '100 %4/4');
    test('file/src/Param/Function.js.html', '100 %1/1');
    test('file/src/Param/Method.js.html', '100 %2/2');
    test('file/src/Property/Return.js.html', '100 %2/2');
    test('file/src/Return/Function.js.html', '100 %2/2');
    test('file/src/Return/Method.js.html', '100 %3/3');
    test('file/src/See/Class.js.html', '100 %4/4');
    test('file/src/See/Function.js.html', '100 %1/1');
    test('file/src/See/Variable.js.html', '100 %1/1');
    test('file/src/Since/Class.js.html', '100 %4/4');
    test('file/src/Since/Function.js.html', '100 %1/1');
    test('file/src/Since/Variable.js.html', '100 %1/1');
    test('file/src/Throws/Function.js.html', '100 %2/2');
    test('file/src/Throws/Method.js.html', '100 %4/4');
    test('file/src/Todo/Class.js.html', '100 %4/4');
    test('file/src/Todo/Function.js.html', '100 %1/1');
    test('file/src/Todo/Variable.js.html', '100 %1/1');
    test('file/src/TrailingComma/Definition.js.html', '100 %3/3');
    test('file/src/Type/Array.js.html', '100 %2/2');
    test('file/src/Type/Class.js.html#errorLines=1,9', '33 %1/3');
    test('file/src/Type/Complex.js.html#errorLines=1', '80 %4/5');
    test('file/src/Type/Default.js.html', '100 %2/2');
    test('file/src/Type/External.js.html', '100 %2/2');
    test('file/src/Type/Function.js.html', '100 %2/2');
    test('file/src/Type/Generics.js.html', '100 %2/2');
    test('file/src/Type/Literal.js.html', '100 %2/2');
    test('file/src/Type/Nullable.js.html#errorLines=1', '50 %1/2');
    test('file/src/Type/Object.js.html', '100 %2/2');
    test('file/src/Type/Optional.js.html', '100 %2/2');
    test('file/src/Type/Record.js.html', '100 %2/2');
    test('file/src/Type/Spread.js.html', '100 %2/2');
    test('file/src/Type/Typedef.js.html', '100 %2/2');
    test('file/src/Type/Union.js.html', '100 %2/2');
    test('file/src/Typedef/Definition.js.html', '-');
    test('file/src/Undocument/Definition.js.html#errorLines=2', '0 %0/1');
    test('file/src/Unknown/Definition.js.html', '100 %1/1');
    test('file/src/Variable/ArrayPattern.js.html', '100 %1/1');
    test('file/src/Variable/Definition.js.html', '100 %1/1');
    test('file/src/Variable/ObjectPattern.js.html', '100 %1/1');
    test('file/src/Version/Class.js.html', '100 %4/4');
    test('file/src/Version/Function.js.html', '100 %1/1');
    test('file/src/Version/Variable.js.html', '100 %1/1');

    _util.assert.equal(count, 117);
  });
});