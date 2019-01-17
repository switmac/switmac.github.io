# switmac.github.io
This project contains random stuff I want to do and my portfolio.

# Visual Studio Custom Settings 
settings.json
```
{
    "gitlens.advanced.messages": {
        "suppressShowKeyBindingsNotice": true
    },
    "workbench.colorTheme": "One Monokai",
    "materialTheme.fixIconsRunning": false,
    "workbench.iconTheme": "material-icon-theme",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "eslint.enable": true,
    "eslint.run": "onSave",
    "eslint.autoFixOnSave": true,
    "editor.tabSize": 2,
    "files.eol": "\n",
    "window.zoomLevel": -1,
    "editor.fontSize": 15
}
```

keybings.json
```
// Place your key bindings in this file to overwrite the defaults
[
   {
       "key": "ctrl+e",
       "command": "eslint.applyAutoFix",
       "when": "editorTextFocus"
   },
   {
       "key": "ctrl+d",
       "command": "editor.action.copyLinesDownAction",
       "when": "editorTextFocus&&!editorReadonly"
   },
   {
       "key": "alt+d",
       "command": "editor.action.addSelectionToNextFindMatch",
       "when": "editorFocus"
   },
   {
       "key": "ctrl+d",
       "command": "-editor.action.addSelectionToNextFindMatch",
       "when": "editorFocus"
   },
   {
       "key": "cmd+b",
       "command": "HookyQR.beautify",
       "when": "editorFocus"
   },
]
```
