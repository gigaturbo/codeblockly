'use strict';

Blockly.Lua['cby_cubes'] = function(block) {
  var cube = block.getFieldValue('CUBE');
  var code = 'cubes.' + cube;
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['cby_place'] = function(block) {
    var cube = Blockly.Lua.valueToCode(block, 'CUBE', Blockly.Lua.ORDER_ATOMIC) || 'cubes.stone';
    var code = 'place(' + cube + ')';
    return code;
  };