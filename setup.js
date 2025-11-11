title @s title §cMurder §4Mystery
title @s subtitle §l§asetup successfully
tellraw @s {"rawtext":[{"text":"Thank you for downloading my script!\nYou can use "/function mm/start" to start a new round!\nHave fun and enjoy!\n\n§cNOTE: §l§4This may affeect blocks placed at the coordinates: 0, 0, 0!"}]}
scoreboard objectives add mmDB dummy
structure load setup 0 0 0
tickingarea add circle 2 2 2 3 mm.spawn
