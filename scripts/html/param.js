const MarkdownIt = require('markdown-it')
const MarkdownItLozad = require('markdown-it-lozad')
const Lozad = require('lozad')

const md = new MarkdownIt().use(MarkdownItLozad, 'some-custom-class')

const observer = Lozad('.some-custom-class', {
  rootMargin: '10px 0px',
  threshold: 0.1,
});
observer.observe();
