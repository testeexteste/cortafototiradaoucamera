window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Fotocordo = window.blockly.js.blockly.Fotocordo || {};

/**
 * fotocordo
 */
window.blockly.js.blockly.Fotocordo.Executar = function() {
 var item;
  this.cronapi.cordova.camera.getPicture(function(sender_item) {
      item = sender_item;
    this.cronapi.screen.changeValueOfField("vars.input3944", item);
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this), '0', '1', '0', 'true');
}
