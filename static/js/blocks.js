var allowed_cubes = ["stone", "cobble", "stonebrick", "stone_block", "mossycobble", "desert_stone", "desert_cobble", "desert_stonebrick", "desert_stone_block", "sandstone", "sandstonebrick", "sandstone_block", "desert_sandstone", "desert_sandstone_brick", "desert_sandstone_block", "silver_sandstone", "silver_sandstone_brick", "silver_sandstone_block", "obsidian", "obsidianbrick", "obsidian_block", "dirt", "dirt_with_grass", "dirt_with_dry_grass", "dirt_with_snow", "dirt_with_rainforest_litter", "dirt_with_coniferous_litter", "dry_dirt", "dry_dirt_with_dry_grass", "permafrost", "permafrost_with_stones", "permafrost_with_moss", "clay", "snowblock", "ice", "tree", "wood", "leaves", "jungletree", "junglewood", "jungleleaves", "pine_tree", "pine_wood", "pine_needles", "acacia_tree", "acacia_wood", "acacia_leaves", "aspen_tree", "aspen_wood", "aspen_leaves", "stone_with_coal", "coalblock", "stone_with_iron", "steelblock", "stone_with_copper", "copperblock", "stone_with_tin", "tinblock", "bronzeblock", "stone_with_gold", "goldblock", "stone_with_mese", "mese", "stone_with_diamond", "diamondblock", "cactus", "bush_leaves", "acacia_bush_leaves", "pine_bush_needles", "bookshelf", "glass", "obsidian_glass", "brick", "meselamp"]
var cubes_dropdown = []
cubes_dropdown.push([{ "src": "static/textures/cubes/air.png", "width": 44, "height": 44, "alt": "air" }, "air"])
for (let c of allowed_cubes) {
  cubes_dropdown.push([{ "src": "static/textures/cubes/default_" + c + ".png", "width": 44, "height": 44, "alt": c }, c])
}


var allowed_wools = ["white", "grey", "dark_grey", "black", "violet", "blue", "cyan", "dark_green", "green", "yellow", "brown", "orange", "red", "magenta", "pink"]
var wools_dropdown = []
for (let c of allowed_wools) {
  wools_dropdown.push([{ "src": "static/textures/cubes/wool_" + c + ".png", "width": 44, "height": 44, "alt": c }, c])
}


var allowed_plants = ["sapling", "apple", "junglesapling", "emergent_jungle_sapling", "pine_sapling", "acacia_sapling", "aspen_sapling", "large_cactus_seedling", "dry_shrub", "junglegrass", "grass_1", "grass_2", "grass_3", "grass_4", "grass_5", "dry_grass_1", "dry_grass_2", "dry_grass_3", "dry_grass_4", "dry_grass_5", "fern_1", "fern_2", "fern_3", "marram_grass_1", "marram_grass_2", "marram_grass_3", "bush_stem", "bush_sapling", "acacia_bush_stem", "acacia_bush_sapling", "pine_bush_stem", "pine_bush_sapling"]
var plants_dropdown = []
for (let c of allowed_plants) {
  plants_dropdown.push([{ "src": "static/textures/cubes/default_" + c + ".png", "width": 44, "height": 44, "alt": c }, c])
}

// ------------ MOVE -------------------------------------------------------------------------------

Blockly.Blocks['cby_up'] = {
  init: function () {
    this.jsonInit({
      "type": "up",
      "message0": "up by %1",
      "args0": [
        { "type": "input_value", "name": "N", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

Blockly.Blocks['cby_down'] = {
  init: function () {
    this.jsonInit({
      "type": "down",
      "message0": "down by %1",
      "args0": [
        { "type": "input_value", "name": "N", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

Blockly.Blocks['cby_left'] = {
  init: function () {
    this.jsonInit({
      "type": "left",
      "message0": "left by %1",
      "args0": [
        { "type": "input_value", "name": "N", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

Blockly.Blocks['cby_right'] = {
  init: function () {
    this.jsonInit({
      "type": "right",
      "message0": "right by %1",
      "args0": [
        { "type": "input_value", "name": "N", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

Blockly.Blocks['cby_forward'] = {
  init: function () {
    this.jsonInit({
      "type": "forward",
      "message0": "forward by %1",
      "args0": [
        { "type": "input_value", "name": "N", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

Blockly.Blocks['cby_back'] = {
  init: function () {
    this.jsonInit({
      "type": "back",
      "message0": "back by %1",
      "args0": [
        { "type": "input_value", "name": "N", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

Blockly.Blocks['cby_move'] = {
  init: function () {
    this.jsonInit({
      "type": "move",
      "message0": "move by x:%1 y:%2 z:%3",
      "args0": [
        { "type": "input_value", "name": "X", "check": "Number" },
        { "type": "input_value", "name": "Y", "check": "Number" },
        { "type": "input_value", "name": "Z", "check": "Number" }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 10
    });
  }
}

// ------------ BUILD ------------------------------------------------------------------------------

Blockly.Blocks['cby_cubes'] = {
  init: function () {
    this.jsonInit({
      "type": "cube",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE",
          "options": cubes_dropdown
        }],
      "output": "Cube",
      "colour": 30
    });
  }
};

Blockly.Blocks['cby_wools'] = {
  init: function () {
    this.jsonInit({
      "type": "cube",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE",
          "options": wools_dropdown
        }],
      "output": "Cube",
      "colour": 30
    });
  }
};

Blockly.Blocks['cby_plants'] = {
  init: function () {
    this.jsonInit({
      "type": "cube",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE",
          "options": plants_dropdown
        }],
      "output": "Cube",
      "colour": 30
    });
  }
};

Blockly.Blocks['cby_place'] = {
  init: function () {
    this.jsonInit({
      "type": "place",
      "message0": "place %1",
      "args0": [
        { "type": "input_value", "name": "CUBE", "check": "Cube" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 30
    });
  }
};