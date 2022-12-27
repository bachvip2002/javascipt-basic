var editor;

function log(...args) {
  result.value = `${result.value}> ${args.join(' ')}\n`;
}

function init(interpreter, scope) {
  interpreter.setProperty(
  scope,
  'alert',
  interpreter.createNativeFunction(args => alert(args)));

  interpreter.setProperty(
  scope,
  'console',
  interpreter.nativeToPseudo({ log }));

}

form.onsubmit = function submit(e) {
  try {
    new JSInterpreter(editor.getValue(), init).run();
  } catch (e) {
    log(e);
  }
  e.preventDefault();
};

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.8.3/min/vs' } });
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));

require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(code, {
    value: "console.log('Hello world!');",
    language: 'javascript',
    theme: 'vs-dark' });

});