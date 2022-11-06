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

Blockly.Lua['cby_place'] = function (block) {
  var cube = Blockly.Lua.valueToCode(block, 'CUBE', Blockly.Lua.ORDER_ATOMIC) || 'cubes.stone';
  var code = 'place(' + cube + ')\n';
  return code;
};

Blockly.Lua['cby_move'] = function (block) {
  var x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC) || 0;
  var y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC) || 0;
  var z = Blockly.Lua.valueToCode(block, 'Z', Blockly.Lua.ORDER_ATOMIC) || 0;
  var code = 'move(' + x + ',' + y + ',' + z + ')\n'
  return code;
};