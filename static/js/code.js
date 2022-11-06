'use strict';

Blockly.Lua['cby_cubes'] = function (block) {
  var cube = block.getFieldValue('CUBE');
  var code = 'cubes.' + cube;
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['cby_wools'] = function (block) {
  var cube = block.getFieldValue('CUBE');
  var code = 'wools.' + cube;
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['cby_plants'] = function (block) {
  var cube = block.getFieldValue('CUBE');
  var code = 'plants.' + cube;
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['cby_place'] = function (block) {
  var cube = Blockly.Lua.valueToCode(block, 'CUBE', Blockly.Lua.ORDER_ATOMIC) || 'cubes.stone';
  var code = 'place(' + cube + ')\n';
  return code;
};

Blockly.Lua['cby_up'] = function (block) {
  var n = Blockly.Lua.valueToCode(block, 'N', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = 'up(' + n + ')\n'
  return code;
};

Blockly.Lua['cby_down'] = function (block) {
  var n = Blockly.Lua.valueToCode(block, 'N', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = 'down(' + n + ')\n'
  return code;
};

Blockly.Lua['cby_left'] = function (block) {
  var n = Blockly.Lua.valueToCode(block, 'N', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = 'left(' + n + ')\n'
  return code;
};

Blockly.Lua['cby_right'] = function (block) {
  var n = Blockly.Lua.valueToCode(block, 'N', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = 'right(' + n + ')\n'
  return code;
};

Blockly.Lua['cby_back'] = function (block) {
  var n = Blockly.Lua.valueToCode(block, 'N', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = 'back(' + n + ')\n'
  return code;
};

Blockly.Lua['cby_forward'] = function (block) {
  var n = Blockly.Lua.valueToCode(block, 'N', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = 'forward(' + n + ')\n'
  return code;
};

Blockly.Lua['cby_move'] = function (block) {
  var x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC) || 0;
  var y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC) || 0;
  var z = Blockly.Lua.valueToCode(block, 'Z', Blockly.Lua.ORDER_ATOMIC) || 0;
  var code = 'move(' + x + ',' + y + ',' + z + ')\n'
  return code;
};