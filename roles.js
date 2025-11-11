# Universal
title @a title Your role is...
tellraw @a {"rawtext":[{"text":"Role Description:"}]}
# Imposters
tag @r[tag=queue] add imposter
tag @r[tag=queue] add vanish
tag @a[tag=imposter] remove queue
tag @a[tag=vanish] remove queue
title @a[tag=imposter] subtitle §l§cIMPOSTER
title @a[tag=imposter] subtitle §l§cIMPOSTER §r§o(Vanish)
tellraw @a[tag=imposter] {"rawtext":[{"text":"§cYou need to kill all remaining inocents, your helper(s) is §4"},{"selector":"@a[tag=vanish]"}]}
tellraw @a[tag=vanish] {"rawtext":[{"text":"§cYou need to kill all remaining inocents, your helper(s) is §4"},{"selector":"@a[tag=imposter]"},{"text":"§aYou can hold your custom item to vanish for 25 seconds!"}]}
# Netural (Lawyer)
tag @r[tag=queue] add lawyer
tag @a[tag=lawyer] remove queue
title @a[tag=lawer] subtitle §l§9LAWYER
tellraw @a[tag=vanish] {"rawtext":[{"text":"§cYou need to kill all remaining inocents, your helper(s) is §4"},{"selector":"@a[tag=imposter]"}]}
