'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeDefault', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Default.js~TestTypeDefault.html');

  it('has default value.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'optional default: 123');
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'optional default: []');
    });
  });
});