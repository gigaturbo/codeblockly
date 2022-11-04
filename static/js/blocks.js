
var place_cube = {
  "type": "place",
  "message0": "place %1",
  "args0": [
    { "type": "input_value", "name": "CUBE", "check": "Cube"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230
}


var cubes_json = {
  "type": "cube",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "CUBE",
      "options": [
        [{ "src": "static/textures/cubes/default_stone.png", "width": 32, "height": 32, "alt": "stone" }, "stone"],
        [{ "src": "static/textures/cubes/default_cobble.png", "width": 32, "height": 32, "alt": "cobble" }, "cobble"],
        [{ "src": "static/textures/cubes/default_stone_brick.png", "width": 32, "height": 32, "alt": "stone_brick" }, "stone_brick"],
        [{ "src": "static/textures/cubes/default_stone_block.png", "width": 32, "height": 32, "alt": "stone_block" }, "stone_block"],
        [{ "src": "static/textures/cubes/default_mossycobble.png", "width": 32, "height": 32, "alt": "mossycobble" }, "mossycobble"],
        [{ "src": "static/textures/cubes/default_desert_stone.png", "width": 32, "height": 32, "alt": "desert_stone" }, "desert_stone"],
        [{ "src": "static/textures/cubes/default_desert_cobble.png", "width": 32, "height": 32, "alt": "desert_cobble" }, "desert_cobble"],
        [{ "src": "static/textures/cubes/default_desert_stone_brick.png", "width": 32, "height": 32, "alt": "desert_stone_brick" }, "desert_stone_brick"],
        [{ "src": "static/textures/cubes/default_desert_stone_block.png", "width": 32, "height": 32, "alt": "desert_stone_block" }, "desert_stone_block"],
        [{ "src": "static/textures/cubes/default_sandstone.png", "width": 32, "height": 32, "alt": "sandstone" }, "sandstone"],
        [{ "src": "static/textures/cubes/default_sandstone_brick.png", "width": 32, "height": 32, "alt": "sandstone_brick" }, "sandstone_brick"],
        [{ "src": "static/textures/cubes/default_sandstone_block.png", "width": 32, "height": 32, "alt": "sandstone_block" }, "sandstone_block"],
        [{ "src": "static/textures/cubes/default_desert_sandstone.png", "width": 32, "height": 32, "alt": "desert_sandstone" }, "desert_sandstone"],
        [{ "src": "static/textures/cubes/default_desert_sandstone_brick.png", "width": 32, "height": 32, "alt": "desert_sandstone_brick" }, "desert_sandstone_brick"],
        [{ "src": "static/textures/cubes/default_desert_sandstone_block.png", "width": 32, "height": 32, "alt": "desert_sandstone_block" }, "desert_sandstone_block"],
        [{ "src": "static/textures/cubes/default_silver_sandstone.png", "width": 32, "height": 32, "alt": "silver_sandstone" }, "silver_sandstone"],
        [{ "src": "static/textures/cubes/default_silver_sandstone_brick.png", "width": 32, "height": 32, "alt": "silver_sandstone_brick" }, "silver_sandstone_brick"],
        [{ "src": "static/textures/cubes/default_silver_sandstone_block.png", "width": 32, "height": 32, "alt": "silver_sandstone_block" }, "silver_sandstone_block"],
        [{ "src": "static/textures/cubes/default_obsidian.png", "width": 32, "height": 32, "alt": "obsidian" }, "obsidian"],
        [{ "src": "static/textures/cubes/default_obsidian_brick.png", "width": 32, "height": 32, "alt": "obsidianbrick" }, "obsidianbrick"],
        [{ "src": "static/textures/cubes/default_obsidian_block.png", "width": 32, "height": 32, "alt": "obsidian_block" }, "obsidian_block"],
        [{ "src": "static/textures/cubes/default_dirt.png", "width": 32, "height": 32, "alt": "dirt" }, "dirt"],
        // [{"src": "static/textures/cubes/default_dirt_with_grass.png", "width":32, "height":32, "alt":"dirt_with_grass"}, "dirt_with_grass"] ,
        // [{"src": "static/textures/cubes/default_dirt_with_grass_footsteps.png", "width":32, "height":32, "alt":"dirt_with_grass_footsteps"}, "dirt_with_grass_footsteps"] ,
        // [{"src": "static/textures/cubes/default_dirt_with_dry_grass.png", "width":32, "height":32, "alt":"dirt_with_dry_grass"}, "dirt_with_dry_grass"] ,
        // [{"src": "static/textures/cubes/default_dirt_with_snow.png", "width":32, "height":32, "alt":"dirt_with_snow"}, "dirt_with_snow"] ,
        // [{"src": "static/textures/cubes/default_dirt_with_rainforest_litter.png", "width":32, "height":32, "alt":"dirt_with_rainforest_litter"}, "dirt_with_rainforest_litter"] ,
        // [{"src": "static/textures/cubes/default_dirt_with_coniferous_litter.png", "width":32, "height":32, "alt":"dirt_with_coniferous_litter"}, "dirt_with_coniferous_litter"] ,
        [{ "src": "static/textures/cubes/default_dry_dirt.png", "width": 32, "height": 32, "alt": "dry_dirt" }, "dry_dirt"],
        // [{"src": "static/textures/cubes/default_dry_dirt_with_dry_grass.png", "width":32, "height":32, "alt":"dry_dirt_with_dry_grass"}, "dry_dirt_with_dry_grass"] ,
        [{ "src": "static/textures/cubes/default_permafrost.png", "width": 32, "height": 32, "alt": "permafrost" }, "permafrost"],
        // [{"src": "static/textures/cubes/default_permafrost_with_stones.png", "width":32, "height":32, "alt":"permafrost_with_stones"}, "permafrost_with_stones"] ,
        // [{"src": "static/textures/cubes/default_permafrost_with_moss.png", "width":32, "height":32, "alt":"permafrost_with_moss"}, "permafrost_with_moss"] ,
        [{ "src": "static/textures/cubes/default_clay.png", "width": 32, "height": 32, "alt": "clay" }, "clay"],
        // [{"src": "static/textures/cubes/default_snowblock.png", "width":32, "height":32, "alt":"snowblock"}, "snowblock"] ,
        [{ "src": "static/textures/cubes/default_ice.png", "width": 32, "height": 32, "alt": "ice" }, "ice"],
        // [{"src": "static/textures/cubes/default_cave_ice.png", "width":32, "height":32, "alt":"cave_ice"}, "cave_ice"] ,
        [{ "src": "static/textures/cubes/default_tree.png", "width": 32, "height": 32, "alt": "tree" }, "tree"],
        [{ "src": "static/textures/cubes/default_wood.png", "width": 32, "height": 32, "alt": "wood" }, "wood"],
        [{ "src": "static/textures/cubes/default_leaves.png", "width": 32, "height": 32, "alt": "leaves" }, "leaves"],
        [{ "src": "static/textures/cubes/default_jungletree.png", "width": 32, "height": 32, "alt": "jungletree" }, "jungletree"],
        [{ "src": "static/textures/cubes/default_junglewood.png", "width": 32, "height": 32, "alt": "junglewood" }, "junglewood"],
        [{ "src": "static/textures/cubes/default_jungleleaves.png", "width": 32, "height": 32, "alt": "jungleleaves" }, "jungleleaves"],
        [{ "src": "static/textures/cubes/default_pine_tree.png", "width": 32, "height": 32, "alt": "pine_tree" }, "pine_tree"],
        [{ "src": "static/textures/cubes/default_pine_wood.png", "width": 32, "height": 32, "alt": "pine_wood" }, "pine_wood"],
        [{ "src": "static/textures/cubes/default_pine_needles.png", "width": 32, "height": 32, "alt": "pine_needles" }, "pine_needles"],
        [{ "src": "static/textures/cubes/default_acacia_tree.png", "width": 32, "height": 32, "alt": "acacia_tree" }, "acacia_tree"],
        [{ "src": "static/textures/cubes/default_acacia_wood.png", "width": 32, "height": 32, "alt": "acacia_wood" }, "acacia_wood"],
        [{ "src": "static/textures/cubes/default_acacia_leaves.png", "width": 32, "height": 32, "alt": "acacia_leaves" }, "acacia_leaves"],
        [{ "src": "static/textures/cubes/default_aspen_tree.png", "width": 32, "height": 32, "alt": "aspen_tree" }, "aspen_tree"],
        [{ "src": "static/textures/cubes/default_aspen_wood.png", "width": 32, "height": 32, "alt": "aspen_wood" }, "aspen_wood"],
        [{ "src": "static/textures/cubes/default_aspen_leaves.png", "width": 32, "height": 32, "alt": "aspen_leaves" }, "aspen_leaves"],
        // [{"src": "static/textures/cubes/default_stone_with_coal.png", "width":32, "height":32, "alt":"stone_with_coal"}, "stone_with_coal"] ,
        [{ "src": "static/textures/cubes/default_coal_block.png", "width": 32, "height": 32, "alt": "coalblock" }, "coalblock"],
        // [{"src": "static/textures/cubes/default_stone_with_iron.png", "width":32, "height":32, "alt":"stone_with_iron"}, "stone_with_iron"] ,
        [{ "src": "static/textures/cubes/default_steel_block.png", "width": 32, "height": 32, "alt": "steelblock" }, "steelblock"],
        // [{"src": "static/textures/cubes/default_stone_with_copper.png", "width":32, "height":32, "alt":"stone_with_copper"}, "stone_with_copper"] ,
        [{ "src": "static/textures/cubes/default_copper_block.png", "width": 32, "height": 32, "alt": "copperblock" }, "copperblock"],
        // [{"src": "static/textures/cubes/default_stone_with_tin.png", "width":32, "height":32, "alt":"stone_with_tin"}, "stone_with_tin"] ,
        [{ "src": "static/textures/cubes/default_tin_block.png", "width": 32, "height": 32, "alt": "tinblock" }, "tinblock"],
        [{ "src": "static/textures/cubes/default_bronze_block.png", "width": 32, "height": 32, "alt": "bronzeblock" }, "bronzeblock"],
        // [{"src": "static/textures/cubes/default_stone_with_gold.png", "width":32, "height":32, "alt":"stone_with_gold"}, "stone_with_gold"] ,
        [{ "src": "static/textures/cubes/default_gold_block.png", "width": 32, "height": 32, "alt": "goldblock" }, "goldblock"],
        // [{"src": "static/textures/cubes/default_stone_with_mese.png", "width":32, "height":32, "alt":"stone_with_mese"}, "stone_with_mese"] ,
        // [{"src": "static/textures/cubes/default_mese.png", "width":32, "height":32, "alt":"mese"}, "mese"] ,
        // [{"src": "static/textures/cubes/default_stone_with_diamond.png", "width":32, "height":32, "alt":"stone_with_diamond"}, "stone_with_diamond"] ,
        [{ "src": "static/textures/cubes/default_diamond_block.png", "width": 32, "height": 32, "alt": "diamondblock" }, "diamondblock"],
        // [{"src": "static/textures/cubes/default_cactus.png", "width":32, "height":32, "alt":"cactus"}, "cactus"] ,
        // [{"src": "static/textures/cubes/default_bush_leaves.png", "width":32, "height":32, "alt":"bush_leaves"}, "bush_leaves"] ,
        // [{"src": "static/textures/cubes/default_acacia_bush_leaves.png", "width":32, "height":32, "alt":"acacia_bush_leaves"}, "acacia_bush_leaves"] ,
        // [{"src": "static/textures/cubes/default_pine_bush_needles.png", "width":32, "height":32, "alt":"pine_bush_needles"}, "pine_bush_needles"] ,
        [{ "src": "static/textures/cubes/default_bookshelf.png", "width": 32, "height": 32, "alt": "bookshelf" }, "bookshelf"],
        [{ "src": "static/textures/cubes/default_glass.png", "width": 32, "height": 32, "alt": "glass" }, "glass"],
        [{ "src": "static/textures/cubes/default_obsidian_glass.png", "width": 32, "height": 32, "alt": "obsidian_glass" }, "obsidian_glass"],
        [{ "src": "static/textures/cubes/default_brick.png", "width": 32, "height": 32, "alt": "brick" }, "brick"],
        [{ "src": "static/textures/cubes/default_meselamp.png", "width": 32, "height": 32, "alt": "meselamp" }, "meselamp"]
      ]
    }],
  "output": "Cube",
  "colour": 230
};

// -------------------------------------------------------------------------------------------------

Blockly.Blocks['cby_cubes'] = {
  init: function () {
    this.jsonInit(cubes_json);
  }
};


Blockly.Blocks['cby_place'] = {
  init: function () {
    this.jsonInit(place_cube);
  }
};
