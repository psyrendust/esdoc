'use strict';

var _util = require('./../../util.js');

/** @test {ManualDocBuilder} */
describe('test manual', () => {
  describe('test navigation', () => {
    it('has manual link in header', () => {
      const doc = (0, _util.readDoc)('index.html');
      _util.assert.includes(doc, '[data-ice="manualHeaderLink"]', 'Manual');
      _util.assert.includes(doc, '[data-ice="manualHeaderLink"]', './manual/index.html', 'href');
    });

    /** @test {ManualDocBuilder#_buildManualNav} */
    it('has manual navigation', () => {
      const doc = (0, _util.readDoc)('manual/index.html');
      (0, _util.find)(doc, '[data-ice="nav"]', doc => {
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(1)', 'Overview');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(2)', 'Installation');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(3)', 'Tutorial');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(4)', 'Usage');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(5)', 'Configuration');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(6)', 'Example');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(7)', 'Reference');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(8)', 'FAQ');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(9)', 'Changelog');

        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(1) .manual-toc-title a', 'manual/overview.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(2) .manual-toc-title a', 'manual/installation.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(3) .manual-toc-title a', 'manual/tutorial.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(4) .manual-toc-title a', 'manual/usage.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(5) .manual-toc-title a', 'manual/configuration.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(6) .manual-toc-title a', 'manual/example.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(7) .manual-toc-title a', 'identifiers.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(8) .manual-toc-title a', 'manual/faq.html', 'href');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(9) .manual-toc-title a', 'manual/changelog.html', 'href');
      });
    });
  });

  /** @test {ManualDocBuilder#_buildManualIndex} */
  describe('test each heading tags', () => {
    const doc = (0, _util.readDoc)('manual/index.html');
    it('has overview heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(1)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Overview');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Overview');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2)', 'Feature');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(3)', 'Demo');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(4)', 'License');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(5)', 'Author');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/overview.html#overview', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2) a', 'manual/overview.html#feature', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(3) a', 'manual/overview.html#demo', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(4) a', 'manual/overview.html#license', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(5) a', 'manual/overview.html#author', 'href');
      });
    });

    it('has installation heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(2)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Installation');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Installation');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2)', 'indent 2');
        _util.assert.includes(doc, '.indent-h3[data-ice="manualNav"]:nth-of-type(3)', 'indent 3');
        _util.assert.includes(doc, '.indent-h4[data-ice="manualNav"]:nth-of-type(4)', 'indent 4');
        _util.assert.includes(doc, '.indent-h5[data-ice="manualNav"]:nth-of-type(5)', 'indent 5');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/installation.html#installation', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2) a', 'manual/installation.html#indent-2', 'href');
        _util.assert.includes(doc, '.indent-h3[data-ice="manualNav"]:nth-of-type(3) a', 'manual/installation.html#indent-3', 'href');
        _util.assert.includes(doc, '.indent-h4[data-ice="manualNav"]:nth-of-type(4) a', 'manual/installation.html#indent-4', 'href');
        _util.assert.includes(doc, '.indent-h5[data-ice="manualNav"]:nth-of-type(5) a', 'manual/installation.html#indent-5', 'href');
      });
    });

    it('has tutorial heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(3)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Tutorial');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Tutorial');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/tutorial.html#tutorial', 'href');
      });
    });

    it('has usage heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(4)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Usage');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Usage');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(2)', 'Usage2');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(3)', 'h2 in usage2');
        _util.assert.includes(doc, '.indent-h3[data-ice="manualNav"]:nth-of-type(4)', 'h3 in usage2');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/usage.html#usage', 'href');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(2) a', 'manual/usage.html#usage2', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(3) a', 'manual/usage.html#h2-in-usage2', 'href');
        _util.assert.includes(doc, '.indent-h3[data-ice="manualNav"]:nth-of-type(4) a', 'manual/usage.html#h3-in-usage2', 'href');
      });
    });

    it('has configuration heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(5)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Configuration');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Configuration');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/configuration.html#configuration', 'href');
      });
    });

    it('has example heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(6)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Example');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Example');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2)', 'Minimum Config');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(3)', 'Integration Test Code Into Documentation');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/example.html#example', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2) a', 'manual/example.html#minimum-config', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(3) a', 'manual/example.html#integration-test-code-into-documentation', 'href');
      });
    });

    it('has reference heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(7)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Reference');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Class');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(2)', 'Interface');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(3)', 'Function');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(4)', 'Variable');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(5)', 'Typedef');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(6)', 'External');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'identifiers.html#class', 'href');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(2) a', 'identifiers.html#interface', 'href');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(3) a', 'identifiers.html#function', 'href');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(4) a', 'identifiers.html#variable', 'href');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(5) a', 'identifiers.html#typedef', 'href');
        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(6) a', 'identifiers.html#external', 'href');
      });
    });

    it('has faq heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(8)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'FAQ');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'FAQ');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2)', 'Goal');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/faq.html#faq', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2) a', 'manual/faq.html#goal', 'href');
      });
    });

    it('has changelog heading tags', () => {
      (0, _util.find)(doc, '.content [data-ice="manual"]:nth-of-type(9)', doc => {
        _util.assert.includes(doc, '.manual-toc-title', 'Changelog');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1)', 'Changelog');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2)', '0.0.1');

        _util.assert.includes(doc, '.indent-h1[data-ice="manualNav"]:nth-of-type(1) a', 'manual/changelog.html#changelog', 'href');
        _util.assert.includes(doc, '.indent-h2[data-ice="manualNav"]:nth-of-type(2) a', 'manual/changelog.html#0-0-1', 'href');
      });
    });
  });

  /** @test {ManualDocBuilder#_buildManual} */
  describe('test each manual', () => {
    it('has overview', () => {
      const doc = (0, _util.readDoc)('manual/overview.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Overview');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'ESDoc is a documentation generator for JavaScript(ES6).');
    });

    it('has installation', () => {
      const doc = (0, _util.readDoc)('manual/installation.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Installation');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'npm install -g esdoc');
    });

    it('has usage', () => {
      const doc = (0, _util.readDoc)('manual/usage.html');
      _util.assert.includes(doc, '.github-markdown h1:nth-of-type(1)', 'Usage');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'esdoc -c esdoc.json');
    });

    it('has tutorial', () => {
      const doc = (0, _util.readDoc)('manual/tutorial.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Tutorial');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'this is tutorial');
    });

    it('has configuration', () => {
      const doc = (0, _util.readDoc)('manual/configuration.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Configuration');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'this is configuration');
    });

    it('has example', () => {
      const doc = (0, _util.readDoc)('manual/example.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Example');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"] h2:nth-of-type(1)', 'Minimum Config');
    });

    it('has faq', () => {
      const doc = (0, _util.readDoc)('manual/faq.html');
      _util.assert.includes(doc, '.github-markdown h1', 'FAQ');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'ESDoc has two goals.');
    });

    it('has changelog', () => {
      const doc = (0, _util.readDoc)('manual/changelog.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Changelog');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"] h2:nth-of-type(1)', '0.0.1');
    });
  });
});