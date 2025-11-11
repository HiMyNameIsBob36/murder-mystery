title @a title What's §bDifferent
title @a subtitle §l§asetup mod succesfully.
title @a actionbar Thank you for downloading my project!
tellraw @a {"rawtext":[{"text":" §l§4This may remove blocks placed at the coordinates: 0, 0, 0!"}]}
scoreboard objectives add wdDB dummy
structure load setup 0 0 0
tickingarea add circle 2 2 2 3 wd.spawn
