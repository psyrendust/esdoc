'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@_generator} */
describe('TestGeneratorMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Generator/Method.js~TestGeneratorMethod.html');

  describe('in summary', () => {
    it('has generator mark.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public * method1()');
      });
    });
  });

  describe('in details', () => {
    it('has generator mark.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public * method1()');
      });
    });
  });
});