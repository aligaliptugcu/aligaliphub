const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => {
  console.log("JS ERROR:", err.message);
});

const dom = new JSDOM(html, { runScripts: "dangerously", virtualConsole });
