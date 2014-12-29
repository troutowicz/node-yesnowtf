node-yesnowtf
=============

A yesno.wtf API library for Node.js.

## Installation

    npm install -g yesnowtf

## Module Usage

This module supports promises as well as the usual callbacks.

```javascript
var yesnowtf = require('yesnowtf');
// undefined, yes, no, maybe
var decision;

// make a decision
yesnowtf.decide(decision)
  .then(function (data) {
    console.log(JSON.stringify(data));
  })
  .catch(function (err) {
    console.error(err.message);
  });
  
yesnowtf.decide(decision, function (err, data) {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log(JSON.stringify(data));
});
```

    {"answer":"maybe","forced":false,"image":"http://yesno.wtf/assets/maybe/2-adc5f184452e691c3484d4266776ed3d.gif"}
