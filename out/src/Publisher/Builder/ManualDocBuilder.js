'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iceCap = require('ice-cap');

var _iceCap2 = _interopRequireDefault(_iceCap);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _DocBuilder = require('./DocBuilder.js');

var _DocBuilder2 = _interopRequireDefault(_DocBuilder);

var _util = require('./util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manual Output Builder class.
 */
class ManualDocBuilder extends _DocBuilder2.default {
  /**
   * execute building output.
   * @param {function(html: string, filePath: string)} callback - is called each manual.
   * @param {function(src: string, dest: string)} callbackForCopy - is called asset.
   */
  exec(callback, callbackForCopy) {
    if (!this._config.manual) return;

    const manualConfig = this._getManualConfig();
    const ice = this._buildLayoutDoc();
    ice.autoDrop = false;
    ice.attr('rootContainer', 'class', ' manual-root');

    {
      const fileName = 'manual/index.html';
      const baseUrl = this._getBaseUrl(fileName);
      this._buildManualIndex(manualConfig);
      ice.load('content', this._buildManualIndex(manualConfig), _iceCap2.default.MODE_WRITE);
      ice.load('nav', this._buildManualNav(manualConfig), _iceCap2.default.MODE_WRITE);
      ice.text('title', 'Manual', _iceCap2.default.MODE_WRITE);
      ice.attr('baseUrl', 'href', baseUrl, _iceCap2.default.MODE_WRITE);
      callback(ice.html, fileName);
    }

    for (const item of manualConfig) {
      if (!item.paths) continue;
      const fileName = this._getManualOutputFileName(item);
      const baseUrl = this._getBaseUrl(fileName);
      ice.load('content', this._buildManual(item), _iceCap2.default.MODE_WRITE);
      ice.load('nav', this._buildManualNav(manualConfig), _iceCap2.default.MODE_WRITE);
      ice.text('title', item.label, _iceCap2.default.MODE_WRITE);
      ice.attr('baseUrl', 'href', baseUrl, _iceCap2.default.MODE_WRITE);
      callback(ice.html, fileName);
    }

    if (this._config.manual.asset) {
      callbackForCopy(this._config.manual.asset, 'manual/asset');
    }
  }

  /**
   * get manual config based on ``config.manual``.
   * @returns {ManualConfigItem[]} built manual config.
   * @private
   */
  _getManualConfig() {
    const m = this._config.manual;
    const manualConfig = [];
    if (m.overview) manualConfig.push({ label: 'Overview', paths: m.overview });
    if (m.installation) manualConfig.push({ label: 'Installation', paths: m.installation });
    if (m.tutorial) manualConfig.push({ label: 'Tutorial', paths: m.tutorial });
    if (m.usage) manualConfig.push({ label: 'Usage', paths: m.usage });
    if (m.configuration) manualConfig.push({ label: 'Configuration', paths: m.configuration });
    if (m.example) manualConfig.push({ label: 'Example', paths: m.example });
    manualConfig.push({ label: 'Reference', fileName: 'identifiers.html', references: true });
    if (m.faq) manualConfig.push({ label: 'FAQ', paths: m.faq });
    if (m.changelog) manualConfig.push({ label: 'Changelog', paths: m.changelog });
    return manualConfig;
  }

  /**
   * build manual navigation.
   * @param {ManualConfigItem[]} manualConfig - target manual config.
   * @return {IceCap} built navigation
   * @private
   */
  _buildManualNav(manualConfig) {
    const ice = this._buildManualIndex(manualConfig);
    const $root = _cheerio2.default.load(ice.html).root();
    $root.find('.github-markdown').removeClass('github-markdown');
    return $root.html();
  }

  /**
   * build manual.
   * @param {ManualConfigItem} item - target manual config item.
   * @return {IceCap} built manual.
   * @private
   */
  _buildManual(item) {
    const html = this._convertMDToHTML(item);
    const ice = new _iceCap2.default(this._readTemplate('manual.html'));
    ice.text('title', item.label);
    ice.load('content', html);

    // convert relative src to base url relative src.
    const $root = _cheerio2.default.load(ice.html).root();
    $root.find('img').each((i, el) => {
      const $el = (0, _cheerio2.default)(el);
      const src = $el.attr('src');
      if (!src) return;
      if (src.match(/^http[s]?:/)) return;
      if (src.charAt(0) === '/') return;
      $el.attr('src', `./manual/${ src }`);
    });
    $root.find('a').each((i, el) => {
      const $el = (0, _cheerio2.default)(el);
      const href = $el.attr('href');
      if (!href) return;
      if (href.match(/^http[s]?:/)) return;
      if (href.charAt(0) === '/') return;
      if (href.charAt(0) === '#') return;
      $el.attr('href', `./manual/${ href }`);
    });

    return $root.html();
  }

  /**
   * built manual index.
   * @param {ManualConfigItem[]} manualConfig - target manual config.
   * @return {IceCap} built index.
   * @private
   */
  _buildManualIndex(manualConfig) {
    const ice = new _iceCap2.default(this._readTemplate('manualIndex.html'));

    ice.loop('manual', manualConfig, (i, item, ice) => {
      const toc = [];
      if (item.references) {
        const identifiers = this._findAllIdentifiersKindGrouping();
        if (identifiers.class.length) toc.push({ label: 'Class', link: 'identifiers.html#class', indent: 'indent-h1' });
        if (identifiers.interface.length) toc.push({ label: 'Interface', link: 'identifiers.html#interface', indent: 'indent-h1' });
        if (identifiers.function.length) toc.push({ label: 'Function', link: 'identifiers.html#function', indent: 'indent-h1' });
        if (identifiers.variable.length) toc.push({ label: 'Variable', link: 'identifiers.html#variable', indent: 'indent-h1' });
        if (identifiers.typedef.length) toc.push({ label: 'Typedef', link: 'identifiers.html#typedef', indent: 'indent-h1' });
        if (identifiers.external.length) toc.push({ label: 'External', link: 'identifiers.html#external', indent: 'indent-h1' });
      } else {
        const fileName = this._getManualOutputFileName(item);
        const html = this._convertMDToHTML(item);
        const $root = _cheerio2.default.load(html).root();
        const isHRise = $root.find('h1').length === 0;
        $root.find('h1,h2,h3,h4,h5').each((i, el) => {
          const $el = (0, _cheerio2.default)(el);
          const label = $el.text();
          const link = `${ fileName }#${ $el.attr('id') }`;
          let indent;
          if (isHRise) {
            const tagName = `h${ parseInt(el.tagName.charAt(1), 10) - 1 }`;
            indent = `indent-${ tagName }`;
          } else {
            indent = `indent-${ el.tagName.toLowerCase() }`;
          }
          toc.push({ label, link, indent });
        });
      }

      ice.attr('manual', 'data-toc-name', item.label.toLowerCase());
      ice.text('title', item.label);
      ice.attr('title', 'href', this._getManualOutputFileName(item));
      ice.loop('manualNav', toc, (i, item, ice) => {
        ice.attr('manualNav', 'class', item.indent);
        ice.text('link', item.label);
        ice.attr('link', 'href', item.link);
      });
    });

    return ice;
  }

  /**
   * get manual file name.
   * @param {ManualConfigItem} item - target manual config item.
   * @returns {string} file name.
   * @private
   */
  _getManualOutputFileName(item) {
    if (item.fileName) return item.fileName;
    return `manual/${ item.label.toLowerCase() }.html`;
  }

  /**
   * convert markdown to html.
   * if markdown has only one ``h1`` and it's text is ``item.label``, remove the ``h1``.
   * because duplication ``h1`` in output html.
   * @param {ManualConfigItem} item - target.
   * @returns {string} converted html.
   * @private
   */
  _convertMDToHTML(item) {
    const contents = [];
    for (const path of item.paths) {
      contents.push(_fsExtra2.default.readFileSync(path).toString());
    }
    const content = contents.join('\n\n');
    const html = (0, _util.markdown)(content);
    const $root = _cheerio2.default.load(html).root();
    return $root.html();
  }
}
exports.default = ManualDocBuilder;