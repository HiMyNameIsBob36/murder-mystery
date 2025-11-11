title @a title Your role is...
tellraw @a {"rawtext":[{"text":"Role Description:"}]}
tag @r[tag=queue] add imposter
tag @a[tag=imposter] remove queue
title @a[tag=imposter] subtitle §c§lIMPOSTER
tellraw @a[tag=imposter] {"rawtext":[{"text":"§cYou need to kill all remaining inocents, your helper is "},{"selector":"@a"}]}
