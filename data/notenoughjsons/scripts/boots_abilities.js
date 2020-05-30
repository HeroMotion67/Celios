eventManager.on('multiJump', function (e) {
    if (e.getAbility().getAdditionalNbtData().getBoolean('fire_particles')) {
        e.getWorld().executeCommand('/particle minecraft:flame ' + e.getEntity().getPosX() + ' ' + e.getEntity().getPosY() + ' ' + e.getEntity().getPosZ() + ' 0 0 0 0.04 50');
    }
});

eventManager.on("livingUpdate", function (e) {
    var entity = e.getEntity();

    if (entity.getItemInSlot('feet').getItem() === 'notenoughjsons:frost_boots') {
        var world = entity.getWorld();

        for (var x = -1; x < 2; x++) {
            for (var z = -1; z < 2; z++) {
                var block = world.getBlockState(entity.getPosX() - 1 - x, entity.getPosY() - 1, entity.getPosZ() - 1 - z);

                if (block.getBlock() === 'minecraft:water') {
                    world.setBlockState('minecraft:ice', entity.getPosX() - 1 - x, entity.getPosY() - 1, entity.getPosZ() - 1 - z);
                }
            }
        }
    }
});