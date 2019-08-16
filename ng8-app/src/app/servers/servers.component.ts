import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // the most preferrable style for using selector prperty in components
  // selector: '[app-servers]', 
  // selector: '.app-servers',
  //template: `<app-server></app-server>
  //<hr>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus: string = 'No Server was Created!';
  serverName = '';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created!';
  }

  onUpdateServerName(event: Event){
      console.log(event);
      this.serverName=(<HTMLInputElement>event.target).value;
  }

}

/* @CONSOLE OUTPUT:

Angular is running in the development mode. Call enableProdMode() to enable the production mode.
client:52 [WDS] Live Reloading enabled.
servers.component.ts:33 
InputEvent {isTrusted: true, data: "A", isComposing: false, inputType: "insertText", dataTransfer: null, …}
servers.component.ts:33 
InputEvent {isTrusted: true, data: "R", isComposing: false, inputType: "insertText", dataTransfer: null, …}
servers.component.ts:33 
InputEvent {isTrusted: true, data: "P", isComposing: false, inputType: "insertText", dataTransfer: null, …}
servers.component.ts:33 
InputEvent {isTrusted: true, data: "A", isComposing: false, inputType: "insertText", dataTransfer: null, …}
servers.component.ts:33 
InputEvent {isTrusted: true, data: "N", isComposing: false, inputType: "insertText", dataTransfer: null, …}
servers.component.ts:33 
InputEvent {isTrusted: true, data: "E", isComposing: false, inputType: "insertText", dataTransfer: null, …}
servers.component.ts:33 
InputEvent {isTrusted: true, data: "T", isComposing: false, inputType: "insertText", dataTransfer: null, …}
bubbles: true
cancelBubble: false
cancelable: false
composed: true
currentTarget: null
data: "T"
dataTransfer: null
defaultPrevented: false
detail: 0
eventPhase: 0
inputType: "insertText"
isComposing: false
isTrusted: true
path: (10) [input.form-control, app-servers, div.col-xs-12, div.row, div.container, app-root, body, html, document, Window]
returnValue: true
sourceCapabilities: null
srcElement: input.form-control
target: input.form-control
accept: ""
accessKey: ""
align: ""
alt: ""
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: _ngcontent-kbg-c1, 1: class, 2: type, _ngcontent-kbg-c1: _ngcontent-kbg-c1, class: class, type: type, length: 3}
autocapitalize: ""
autocomplete: ""
autofocus: false
baseURI: "http://localhost:4200/"
checked: false
childElementCount: 0
childNodes: NodeList []
children: HTMLCollection []
classList: DOMTokenList ["form-control", value: "form-control"]
className: "form-control"
clientHeight: 32
clientLeft: 1
clientTop: 1
clientWidth: 718
contentEditable: "inherit"
dataset: DOMStringMap {}
defaultChecked: false
defaultValue: ""
dir: ""
dirName: ""
disabled: false
draggable: false
files: null
firstChild: null
firstElementChild: null
form: null
formAction: "http://localhost:4200/"
formEnctype: ""
formMethod: ""
formNoValidate: false
formTarget: ""
height: 0
hidden: false
id: ""
incremental: false
indeterminate: false
innerHTML: ""
innerText: ""
inputMode: ""
isConnected: true
isContentEditable: false
labels: NodeList []
lang: ""
lastChild: null
lastElementChild: null
list: null
localName: "input"
max: ""
maxLength: -1
min: ""
minLength: -1
multiple: false
name: ""
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: p
nextSibling: p
nodeName: "INPUT"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 34
offsetLeft: 15
offsetParent: div.col-xs-12
offsetTop: 112
offsetWidth: 720
onabort: (...)
onauxclick: (...)
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onblur: (...)
oncancel: (...)
oncanplay: (...)
oncanplaythrough: (...)
onchange: (...)
onclick: (...)
onclose: (...)
oncontextmenu: (...)
oncopy: (...)
oncuechange: (...)
oncut: (...)
ondblclick: (...)
ondrag: (...)
ondragend: (...)
ondragenter: (...)
ondragleave: (...)
ondragover: (...)
ondragstart: (...)
ondrop: (...)
ondurationchange: (...)
onemptied: (...)
onended: (...)
onerror: (...)
onfocus: (...)
onfullscreenchange: (...)
onfullscreenerror: (...)
ongotpointercapture: (...)
oninput: (...)
oninvalid: (...)
onkeydown: (...)
onkeypress: (...)
onkeyup: (...)
onload: (...)
onloadeddata: (...)
onloadedmetadata: (...)
onloadstart: (...)
onlostpointercapture: (...)
onmousedown: (...)
onmouseenter: (...)
onmouseleave: (...)
onmousemove: (...)
onmouseout: (...)
onmouseover: (...)
onmouseup: (...)
onmousewheel: (...)
onpaste: (...)
onpause: (...)
onplay: (...)
onplaying: (...)
onpointercancel: (...)
onpointerdown: (...)
onpointerenter: (...)
onpointerleave: (...)
onpointermove: (...)
onpointerout: (...)
onpointerover: (...)
onpointerup: (...)
onprogress: (...)
onratechange: (...)
onreset: (...)
onresize: (...)
onscroll: (...)
onsearch: (...)
onseeked: (...)
onseeking: (...)
onselect: (...)
onselectionchange: (...)
onselectstart: (...)
onstalled: (...)
onsubmit: (...)
onsuspend: (...)
ontimeupdate: (...)
ontoggle: (...)
onvolumechange: (...)
onwaiting: (...)
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
onwheel: (...)
outerHTML: "<input _ngcontent-kbg-c1="" class="form-control" type="text">"
outerText: ""
ownerDocument: document
parentElement: app-servers
parentNode: app-servers
part: DOMTokenList [value: ""]
pattern: ""
placeholder: ""
prefix: null
previousElementSibling: label
previousSibling: label
readOnly: false
required: false
scrollHeight: 32
scrollLeft: 0
scrollTop: 0
scrollWidth: 718
selectionDirection: "forward"
selectionEnd: 7
selectionStart: 7
shadowRoot: null
size: 20
slot: ""
spellcheck: true
src: ""
step: ""
style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
tabIndex: 0
tagName: "INPUT"
textContent: ""
title: ""
translate: true
type: "text"
useMap: ""
validationMessage: ""
validity: ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
value: "ARPANET"
valueAsDate: null
valueAsNumber: NaN
webkitEntries: []
webkitdirectory: false
width: 0
willValidate: true
__zone_symbol__inputfalse: [ZoneTask]
__proto__: HTMLInputElement
timeStamp: 20551.904999999806
type: "input"
view: null
which: 0
__proto__: InputEvent

*/