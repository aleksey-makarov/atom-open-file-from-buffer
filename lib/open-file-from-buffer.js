'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'open-file-from-buffer:open': () => this.open()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
  },

  open() {

    const editor = atom.workspace.getActiveTextEditor();
    if (!editor)
        return;

    const position = editor.getCursorBufferPosition();
    if (!position)
        return;

    const re = /^([^:]+):(\d+):/g;

    const match = re.exec(editor.lineTextForBufferRow(position.row));
    if (!match)
        return;

    atom.workspace.open(match[1], {
        initialLine: Number(match[2]) - 1,
        initialColumn: 0,
        pending: true
    });

  }

};
