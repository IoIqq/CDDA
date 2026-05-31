<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
*Contents（目录）*

- [Modding guide（模组制作指南）](#modding-guide)
  - [Other guides（其他指南）](#other-guides)
  - [The basics（基础知识）](#the-basics)
    - [Creating a barebones mod（创建基础模组）](#creating-a-barebones-mod)
    - [Modinfo.json](#modinfojson)
    - [All MOD_INFO fields（所有 MOD_INFO 字段）](#all-mod_info-fields)
  - [Actually adding things to your mod（实际向模组添加内容）](#actually-adding-things-to-your-mod)
    - [File structure（文件结构）](#file-structure)
    - [JSON_INFO.md](#json_infomd)
    - [Adding a scenario（添加场景）](#adding-a-scenario)
    - [Adding a profession（添加职业）](#adding-a-profession)
    - [Adding an item（添加物品）](#adding-an-item)
    - [Preventing monsters from spawning（阻止怪物生成）](#preventing-monsters-from-spawning)
    - [Preventing locations from spawning（阻止地点生成）](#preventing-locations-from-spawning)
    - [Disabling certain scenarios（禁用特定场景）](#disabling-certain-scenarios)
    - [Disabling certain professions or hobbies（禁用特定职业或爱好）](#disabling-certain-professions-or-hobbies)
    - [Adding dialogue to existing NPCs（为现有 NPC 添加对话）](#adding-dialogue-to-existing-npcs)
  - [Adjusting monster stats（调整怪物属性）](#adjusting-monster-stats)
  - [External options（外部选项）](#external-options)
  - [Important note on json files（关于 JSON 文件的重要说明）](#important-note-on-json-files)
    - [That which cannot be modded（无法模组化的内容）](#that-which-cannot-be-modded)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Modding guide（模组制作指南）

游戏的某些功能可以在不重新编译源代码的情况下进行修改。这包括职业、怪物、NPC 等。只需修改相关文件并运行游戏即可看到您的更改。

大多数模组制作是通过编辑 JSON 文件完成的。所有 JSON 文件及其相应字段的深入介绍可在 [JSON/JSON_INFO.md](JSON/JSON_INFO.md) 中找到。

## Other guides（其他指南）

您可能想阅读 CDDA wiki 上的[首次贡献者添加新内容到 CDDA 的指南](https://github.com/CleverRaven/Cataclysm-DDA/wiki/Guide-to-adding-new-content-to-CDDA-for-first-time-contributors)。

## The basics（基础知识）

### Creating a barebones mod（创建基础模组）
模组根据是否属于 CDDA 的一部分或第三方/私有模组而放置在不同的位置。内置模组位于 `data/mods`，而第三方/私有模组的放置位置取决于安装环境：它们要么放在 `./mods`（即游戏安装目录内），要么放在 `USER_DIR/mods`。
模组是通过在 Cataclysm 的相应模组目录中创建一个文件夹来创建的。模组的属性由该文件夹中的 `modinfo.json` 文件设置。为了让 Cataclysm 将文件夹识别为模组，它**必须**在其中包含一个 `modinfo.json` 文件。<!--我知道这并不完全正确。只要有一个包含 MOD_INFO 结构的 JSON 文件，模组就能正常工作。该文件不需要命名为"modinfo.json"-->

### Modinfo.json
modinfo.json 文件是一个包含模组元数据的文件。每个模组都必须有一个 `modinfo.json` 文件，以便 Cataclysm 能够找到它。
一个基础的 `modinfo.json` 文件如下所示：
```jsonc
[
  {
    "type": "MOD_INFO",
    "id": "Mod_ID",
    "name": "Mod's Display Name"
  }
]
```

这是绝对的最低要求，但您可能想添加 `authors`（您！）、`description` 和 `category`。更多可能性请参见下文。

### All MOD_INFO fields（所有 MOD_INFO 字段）
以下是 MOD_INFO 支持的所有值的完整列表：
```jsonc
[
  {
    "type": "MOD_INFO",                             // 必填，您正在创建其中之一！
    "id": "Mod_ID",                                 // 必填，模组的唯一 ID。您不应使用与任何其他模组相同的 ID。不能包含 '#' 字符。模组 ID 还必须是有效的文件夹路径，以支持与其他模组的兼容性。
    "name": "Mod's Display Name",                   // 必填。
    "authors": [ "Me", "A really cool friend" ],    // 可选，但您可能想在这里写上您的名字。可以添加多个条目，如图所示。
    "description": "The best mod ever!",            // 可选
    "category": "graphical",                        // 可选，请参见下文以获取支持值的完整列表。类别仅用于信息目的，所以如果您的模组可能适合多个类别，不用担心。
    "dependencies": [ "dda" ],                      // 可选。此模组需要哪些其他模组才能正常工作？如果您的模组依赖于另一个模组才能正常工作，将该模组的 `id` 属性添加到数组中会导致 Cataclysm 强制在您的模组之前加载该模组。
    "loading_images": [ "cool.png", "cool2.png" ],  // 可选。模组可能拥有的任何加载屏幕图像的文件名。加载屏幕仅在图形/"瓦片"版本中存在。仅支持 .png 文件。实际的加载屏幕图像将从所有模组加载屏幕（包括其他已加载的具有加载屏幕的模组）中随机选择。
    "version": "1.3.bacon",                         // 可选。仅用于信息目的。不提供版本控制系统，所以您在这里写什么都取决于您。随意用冰淇淋命名您的版本。
    "core": false,                                  // 可选，默认为 false。核心模组将在其他所有内容之前加载。用于 DDA，不支持第三方使用。
    "obsolete": false,                              // 可选，默认为 false。过时的模组会为旧存档加载，但不能在开始新世界时使用
    "path": "my_mod_files/"                         // 可选，相对于 modinfo.json 位置的此目录将被视为模组的实际目录。例如，如果 modinfo.json 位于 C:\CDDA\my_mod\modinfo.json，那么模组文件将被视为位于 C:\CDDA\my_mod\my_mod_files\。像 C:\CDDA\my_mod\some_other_file.json 这样的文件将被忽略，因为它不在指定的目录内。
  }
]
```

`category` 属性表示模组将在模组选择菜单中出现的位置。以下是可供选择的可用类别，其中一些示例选自编写本文档时存在的模组。在编写 modinfo 文件时，选择最适合您的模组的类别。
 - `content` - 添加大量内容的模组。通常保留给大型模组（例如：核心游戏文件、Aftershock）
 - `total_conversion` - 从根本上改变游戏的模组。特别是，假设玩家不应同时使用两个全面转换模组，因此它们不会一起测试。但是，如果玩家愿意，没有什么能阻止他们使用多个。（例如：Dark Skies Above）
 - `items` - 向游戏添加新物品和配方的模组（例如：More survival tools）
 - `creatures` - 向游戏添加新生物或 NPC 的模组（例如：Modular turrets）
 - `misc_additions` - 向游戏添加杂项内容的模组（例如：Alternative map key、Crazy cataclysm）
 - `buildings` - 新的大地图位置和结构（例如：National Guard Camp）。如果您要将建筑物列入黑名单以阻止生成，这也是一个可用的类别（例如：No rail stations）。
 - `vehicles` - 新的汽车或车辆部件（例如：Tanks and other vehicles）
 - `rebalance` - 旨在以某种方式重新平衡游戏的模组（例如：Safe autodocs）。
 - `magical` - 向游戏添加与魔法相关内容的模组（例如：Necromancy）
 - `item_exclude` - 阻止物品在世界中生成的模组（例如：No survivor armor、No drugs）
 - `monster_exclude` - 阻止某些怪物种类在世界中生成的模组（例如：No fungal monsters、No monsters）
 - `graphical` - 以某种方式调整游戏图形的模组（例如：Graphical overmap）

## Actually adding things to your mod（实际向模组添加内容）
现在您有了一个基本的模组，可以开始实际向其中添加内容了！

### File structure（文件结构）
将不同类别的添加内容放入不同的 JSON 文件中是个好主意。模组文件夹或其子文件夹中存在的任何 JSON 文件都将被 Cataclysm 检测和读取，但除此之外，对您可以将内容放在哪里没有限制。

### JSON_INFO.md
值得阅读 [JSON/JSON_INFO.md](JSON/JSON_INFO.md) 以获取您可以使用这些模组执行的所有操作的全面列表。本文档的其余部分将提供一些可复制粘贴的示例，但绝不全面。基础游戏的数据也以与您编写的任何模组相同的方式定义，因此查看游戏的 JSON 文件（在 `data/json` 中）也可以教您很多东西。如果游戏在您尝试加载游戏世界时发现 JSON 语法中的任何问题，它会输出错误消息，并且在问题解决之前您将无法加载该游戏。

### Adding a scenario（添加场景）
场景是游戏用来确定您创建角色时的一般情况的内容。它们决定您的角色可能在世界中的何时何地生成，以及可以使用哪些职业。它们还用于确定这些职业是否可以从一开始就拥有变异。下面您将找到游戏内置的 `Large Building` 场景的 JSON 定义。
```jsonc
[
  {
    "type": "scenario",
    "id": "largebuilding",
    "name": "Large Building",
    "points": -2,
    "description": "Whether due to stubbornness, ignorance, or just plain bad luck, you missed the evacuation, and are stuck in a large building full of the risen dead.",
    "allowed_locs": [
      "mall_a_12",
      "mall_a_30",
      "apartments_con_tower_114",
      "apartments_con_tower_014",
      "apartments_con_tower_104",
      "apartments_con_tower_004",
      "hospital_1",
      "hospital_2",
      "hospital_3",
      "hospital_4",
      "hospital_5",
      "hospital_6",
      "hospital_7",
      "hospital_8",
      "hospital_9"
    ],
    "start_name": "In Large Building",
    "surround_groups": [ [ "GROUP_BLACK_ROAD", 70.0 ] ],
    "flags": [ "CITY_START", "LONE_START" ]
  }
]
```

### Adding a profession（添加职业）
职业是游戏对您在游戏开始时可以选择的角色职业的称呼。职业可以从特质、技能、物品甚至宠物开始！下面是警察职业的定义：
```jsonc
[
  {
    "type": "profession",
    "id": "cop",
    "name": "Police Officer",
    "description": "Just a small-town deputy when you got the call, you were still ready to come to the rescue.  Except that soon it was you who needed rescuing - you were lucky to escape with your life.  Who's going to respect your authority when the government this badge represents might not even exist anymore?",
    "points": 2,
    "skills": [ { "level": 3, "name": "gun" }, { "level": 3, "name": "pistol" } ],
    "traits": [ "PROF_POLICE" ],
    "items": {
      "both": {
        "items": [ "pants_army", "socks", "badge_deputy", "police_belt", "boots", "whistle", "wristwatch" ],
        "entries": [
          { "group": "charged_cell_phone" },
          { "group": "charged_two_way_radio" },
          { "item": "postman_shirt", "variant": "sheriff" },
          { "item": "ear_plugs", "custom-flags": [ "no_auto_equip" ] },
          { "item": "usp_45", "ammo-item": "45_acp", "charges": 12, "container-item": "holster" },
          { "item": "legpouch_large", "contents-group": "army_mags_usp45" }
        ]
      },
      "male": [ "boxer_shorts" ],
      "female": [ "bra", "boy_shorts" ]
    }
  }
]
```

### Adding an item（添加物品）
物品是您真正想要阅读 [JSON/JSON_INFO.md](JSON/JSON_INFO.md) 文件的地方，因为您可以用它们做很多事情，而且每个物品类别都有一点不同。
<!--我选择这个是因为它是我能找到的最基本的物品。其他所有东西都有某种功能。-->
```jsonc
[
  {
    "id": "family_photo",
    "type": "GENERIC",
    "//": "Unique mission item for the CITY_COP.",  // CITY_COP 的独特任务物品。
    "category": "other",
    "name": "family photo",
    "description": "A photo of a smiling family on a camping trip.  One of the parents looks like a cleaner, happier version of the person you know.",
    "weight": "1 g",
    "volume": 0,
    "price": "8 USD",
    "material": [ "paper" ],
    "symbol": "*",
    "color": "light_gray"
  }
]
```

### Preventing monsters from spawning（阻止怪物生成）
这种类型的模组相对简单，但非常有用。如果您不想在世界中处理某些类型的怪物，这就是您的做法。您可以创建黑名单和白名单来单独定义允许的怪物，按物种或按类别。为了创建这些，您需要相关的标识符；在怪物的 JSON 定义中查找怪物的 `id`、`species` 和任何 `categories`，核心游戏的定义可以在 `data/json/monsters/` 中找到。

下面是 `Mythos` 模组的摘录，展示了如何单独和按物种将怪物列入黑名单。这将阻止所有僵尸、半机械人和机器人在游戏中生成，真菌僵尸通过 `id` 指定。
```jsonc
[
  {
    "type": "MONSTER_BLACKLIST",
    "monsters": [
      "mon_zombie_fungus",
      "mon_boomer_fungus",
      "mon_zombie_child_fungus",
      "mon_zombie_gasbag_fungus",
      "mon_zombie_smoker_fungus",
      "mon_skeleton_fungus",
      "mon_skeleton_brute_fungus",
      "mon_skeleton_hulk_fungus",
      "mon_chud"
    ]
  },
  {
    "type": "MONSTER_BLACKLIST",
    "species": [ "ZOMBIE", "ROBOT", "CYBORG" ]
  }
]
```
以下是如何按类别将怪物列入黑名单的示例。在这种情况下，它将从游戏中删除所有经典僵尸类型。
```jsonc
[
  {
    "type": "MONSTER_BLACKLIST",
    "categories": [ "CLASSIC" ]
  }
]
```
您还可以通过将黑名单与白名单结合来定义黑名单的例外。扩展前面的示例，这将删除除僵尸马之外的所有经典僵尸类型。
```jsonc
[
  {
    "type": "MONSTER_BLACKLIST",
    "categories": [ "CLASSIC" ]
  },
  {
    "type": "MONSTER_WHITELIST",
    "monsters": [
      "mon_zombie_horse"
    ]
  }
]
```
或者，如果您只想让特定的怪物或物种出现，您可以定义一个独占白名单。请注意，这将覆盖任何已定义的黑名单。下面的示例来自 `No Monsters` 模组，它阻止除野生动物之外的所有怪物生成。
```jsonc
[
  {
    "type": "MONSTER_WHITELIST",
    "mode": "EXCLUSIVE",
    "categories": [ "WILDLIFE" ]
  }
]
```
您可以单独定义非独占白名单，但除非它们与黑名单或独占白名单结合使用（如上所示），否则它们没有显著效果。这仍然很有用，因为这些列表在所有活动模组中组合，所以您可能包含一个以确保某些怪物类型存在于您的模组中。例如，`Crazy Cataclysm` 使用下面的列表来启用一些核心游戏默认列入黑名单的怪物，允许它们生成，无论任何其他可能试图禁用它们的模组如何。
```jsonc
[
  {
    "type": "MONSTER_WHITELIST",
    "monsters": [
      "mon_zombie_dancer",
      "mon_zombie_jackson",
      "mon_shia",
      "mon_bear_smoky",
      "mon_zombie_skeltal",
      "mon_zombie_skeltal_minion"
    ]
  }
]
```

### Preventing locations from spawning（阻止地点生成）
<!--我对这一部分不是特别满意。地图上的黑名单工作方式因您要黑名单的内容而异。大地图特殊建筑与大地图额外内容、城市建筑和建筑组不同。-->
阻止某些类型的地点在游戏中生成有点棘手，具体取决于您要针对的内容类型。大地图建筑可以是标准建筑，也可以是大地图特殊建筑。如果您想阻止具有特定标志的内容生成，您可以以与怪物非常相似的方式将它们列入黑名单。下面的示例也来自 `No Fungal Monsters` 模组，并阻止所有真菌区域生成。
```jsonc
[
  {
    "type": "region_overlay",
    "regions": [ "all" ],
    "overmap_feature_flag_settings": { "blacklist": [ "FUNGAL" ] }
  }
]
```

如果您想要列入黑名单的地点是大地图特殊建筑，您可能必须从其定义中复制它，并手动将其 `occurrences` 属性设置为 `[ 0, 0 ]`。

最后，如果您试图将在城市内生成的内容列入黑名单，您可以使用区域覆盖来实现。下面的示例用于 `No rail stations` 模组，并阻止铁路车站在城市内生成。但是，它不会阻止铁路车站大地图特殊建筑生成。
```jsonc
[
  {
    "type": "region_overlay",
    "regions": [ "all" ],
    "city": { "houses": { "railroad_city": 0 } }
  }
]
```

### Disabling certain scenarios（禁用特定场景）
`SCENARIO_BLACKLIST` 可以是黑名单或白名单。
当它是白名单时，它会将除指定场景之外的所有场景列入黑名单。
一次只能指定一个黑名单 - 这是在为特定游戏加载的所有 JSON 中（所有模组 + 基础游戏），而不仅仅是您的特定模组。
格式如下：
```jsonc
[
  {
    "type": "SCENARIO_BLACKLIST",
    "subtype": "whitelist",
    "scenarios": [ "largebuilding" ]
  }
]
```
`subtype` 的有效值为 `whitelist` 和 `blacklist`。
`scenarios` 是您要列入黑名单或白名单的场景 ID 数组。

### Disabling certain professions or hobbies（禁用特定职业或爱好）
`profession_blacklist` 可以是黑名单或白名单。
当它是白名单时，只能选择指定的职业/爱好。
一次只能指定一个黑名单 - 这是在为特定游戏加载的所有 JSON 中（所有模组 + 基础游戏），而不仅仅是您的特定模组。
格式如下：
```jsonc
[
  {
    "type": "profession_blacklist",
    "subtype": "blacklist",
    "professions": [ "caffiend", "unemployed" ]
  }
]
```
`subtype` 的有效值为 `whitelist` 和 `blacklist`。
`professions` 是您要列入黑名单或白名单的职业/爱好 ID 数组。

### Adding dialogue to existing NPCs（为现有 NPC 添加对话）

您无法编辑现有对话，但可以通过添加可以启动新对话和任务的新响应来添加新对话。以下是来自 DinoMod 的一个工作示例：

```jsonc
  {
    "type": "talk_topic",
    "id": "TALK_REFUGEE_BEGGAR_2_WEARING",
    "responses": [
      {
        "text": "Yes.  I ask because I noticed there are dinosaurs around.  Do you know anything about that?",
        "topic": "TALK_REFUGEE_BEGGAR_2_DINO2"
      }
    ]
  }
```
## Adjusting monster stats（调整怪物属性）
可以使用 `monster_adjustment` JSON 元素调整怪物属性。
```jsonc
  {
    "type": "monster_adjustment",
    "species": "ZOMBIE",
    "flag": { "name": "REVIVES", "value": false },
	  "stat": { "name": "speed", "modifier": 0.9 }
  }
```
使用此语法可以修改以下内容：
**stat**：支持 `speed` 和 `hp`。修改器是基础速度或 HP 属性的乘数。
**flag**：添加或删除怪物标志。
**special**：目前仅支持 `nightvision`，它使指定的怪物物种获得等于其日间视力的夜视能力。

目前，调整多个属性或标志需要单独的 `monster_adjustment` 条目。

## External options（外部选项）

外部选项控制各种不适合区域设置的全局设置，从让玩家选择变异时获得的变异的 `SHOW_MUTATION_SELECTOR`，到让您选择始终处于活动状态的天气类型的 `ETERNAL_WEATHER`。
所有可用的外部选项都位于 `/core/external_options.json` 中，并附有解释其用途及其 DDA 值的注释。
要在模组中更改值，您只需定义一个与 DDA 相同但值已更改的对象。

您还可以以相同的方式使用同名的外部选项覆盖任何源定义的选项（例如，如果玩家将 `AUTO_FEATURES` 设置为 false，但您创建了一个设置为 true 的外部选项 `AUTO_FEATURES`，当玩家加载模组时，他们的值将更改为 true）。
**但是，目前在保存时这会覆盖用户的配置，因此除非模组工作所必需，否则不应使用。**

## Important note on json files（关于 JSON 文件的重要说明）

以下字符：`[ { , } ] : "` 在添加或修改 JSON 文件时*非常*重要。这意味着单个缺失的 `,` 或 `[` 或 `}` 可能是工作文件和启动时挂起游戏之间的区别。
如果您想在所做的任何事情中包含这些字符（例如，如果您想在物品描述中放置引号），您可以通过在相关字符前放置反斜杠来实现。这被称为"转义"该字符。例如，如果我想让物品的描述包含引号，我可以这样做：
```jsonc
...
"description": "This is a shirt that says \"I wanna kill ALL the zombies\" on the front.",
...
```

在游戏中，它显示如下：
`This is a shirt that says "I wanna kill ALL the zombies" on the front.`

许多编辑器都有功能，可以让您跟踪 `{ [` 和 `] }` 以查看它们是否平衡（即，有匹配的对应项）；这些编辑器也会正确处理转义字符。[Notepad++](https://notepad-plus-plus.org/) 是 Windows 上一个流行的免费编辑器，包含此功能。在 Linux 上，有很多选择，您可能已经有了首选的编辑器 🙂
