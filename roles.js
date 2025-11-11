# Universal
title @a title Your role is...
tellraw @a {"rawtext":[{"text":"Role Description:"}]}
# Imposters
tag @r[tag=queue] add imposter
tag @a[tag=imposter] remove queue
tag @r[tag=queue] add vanish
tag @a[tag=vanish] remove queue
title @a[tag=imposter] subtitle §l§cIMPOSTER
title @a[tag=vanish] subtitle §l§cIMPOSTER §r§o(Vanish)
tellraw @a[tag=imposter] {"rawtext":[{"text":"§cYou need to kill all remaining inocents, your helper(s) is §4"},{"selector":"@a[tag=vanish]"}]}
tellraw @a[tag=vanish] {"rawtext":[{"text":"§cYou need to kill all remaining inocents, your helper(s) is §4"},{"selector":"@a[tag=imposter]"},{"text":"\n§8---\n§aYou can hold your custom item to vanish for 25 seconds!"}]}
# Netural (Lawyer)
tag @r[tag=queue] add lawyer
tag @a[tag=lawyer] remove queue
title @a[tag=lawer] subtitle §l§bLAWYER
tellraw @a[tag=lawer] {"rawtext":[{"text":"§bYou need to protect the mole, there username is §9"},{"selector":"@a[tag=imposter]"}]}
# Netural (Vulture)
tag @r[tag=queue] add vulture
tag @a[tag=vulture] remove queue
title @a[tag=vulture] subtitle §l§uVULTURE
tellraw @a[tag=lawer] {"rawtext":[{"text":"§UYou need to eat 3 dead bodys to win."}]}
