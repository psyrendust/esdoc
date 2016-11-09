'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeComplex', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Complex.js~TestTypeComplex.html');

  it('has function complex type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: function(x1: number[], x2: Map<string, boolean>): Object)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'], 'href');
    });
  });

  it('has complex generics type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method2(p1: Map<number, string[]>)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'], 'href');
    });
  });

  it('has complex record type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method3(p1: {x1: number[], x2: Map<string, boolean>, x3: {y1: number, y2: string}})');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'], 'href');
    });
  });

  it('has complex union type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method4"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method4(p1: number | string, p2: number | string)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'], 'href');
    });
  });
});