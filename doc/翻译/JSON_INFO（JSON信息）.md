# JSON INFO（JSON 信息）

使用`Home`键返回顶部。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents（目录）**

- [JSON INFO（JSON 信息）](#json-infojson-信息)
- [Introduction（介绍）](#introduction介绍)
  - [Overall structure（总体结构）](#overall-structure总体结构)
  - [Common properties (通用属性)](#common-properties-通用属性)
    - [`"copy-from"` and `"abstract"`（“copy-from”和“abstract”）](#copy-from-and-abstractcopy-from和abstract)
- [Navigating the JSON (在 JSON 中导航)](#navigating-the-json-在-json-中导航)
- [Common field types (常见字段类型)](#common-field-types-常见字段类型)
  - [Units (单位)](#units-单位)
    - [Time duration (时间持续)](#time-duration-时间持续)
  - [Translatable strings (可翻译字符串)](#translatable-strings-可翻译字符串)
  - [Comments (注释)](#comments-注释)
- [File descriptions (文件描述)](#file-descriptions-文件描述)
  - [`data/json/`](#datajson)
  - [`data/json/items/`](#datajsonitems)
    - [`data/json/items/comestibles/`](#datajsonitemscomestibles)
  - [`data/json/requirements/`](#datajsonrequirements)
  - [`data/json/vehicles/`](#datajsonvehicles)
- [Description and content of each JSON file (每个 JSON 文件的描述和内容)](#description-and-content-of-each-json-file-每个-json-文件的描述和内容)
  - [`data/json/` JSONs](#datajson-jsons)
    - [Ascii\_arts](#ascii_arts)
    - [### Addiction types(成瘾类型)](#-addiction-types成瘾类型)
    - [Body Graphs (身体图谱)](#body-graphs-身体图谱)
      - [Graph Parts(图表部分)](#graph-parts图表部分)
    - [Body\_parts (身体部位)](#body_parts-身体部位)
- [On-hit Effects (受击效果)](#on-hit-effects-受击效果)
    - [Limb scores (肢体评分)](#limb-scores-肢体评分)
    - [Character Modifiers (角色修饰符)](#character-modifiers-角色修饰符)
      - [Character Modifiers - Value (角色修饰符 - 值)](#character-modifiers---value-角色修饰符---值)
    - [Damage Types (伤害类型)](#damage-types-伤害类型)
    - [Dreams (梦境)](#dreams-梦境)
    - [Disease (疾病)](#disease-疾病)
    - [Emitters （发射器）](#emitters-发射器)
    - [Item Groups （物品组）](#item-groups-物品组)
    - [Item Category (物品类别)](#item-category-物品类别)
    - [Item Properties（物品属性）](#item-properties物品属性)
    - [Item Variables（物品变量）](#item-variables物品变量)
    - [Item faults（物品故障）](#item-faults物品故障)
    - [Item fault fixes（物品故障修复）](#item-fault-fixes物品故障修复)
    - [材料（Materials）](#材料materials)
      - [Fuel data (燃料数据)](#fuel-data-燃料数据)
      - [Burn data（燃烧数据）](#burn-data燃烧数据)
    - [Monster Groups（怪物组）](#monster-groups怪物组)
      - [Group definition（群组定义）](#group-definition群组定义)
      - [Monster/Subgroup definition（怪物/子分组定义）](#monstersubgroup-definition怪物子分组定义)
    - [Monster Factions（怪物派系）](#monster-factions怪物派系)
    - [Monsters（怪物）](#monsters怪物)
    - [Mutation Categories（变异类别）](#mutation-categories变异类别)
    - [Names（名字）](#names名字)
    - [Profession item substitution（职业物品替换）](#profession-item-substitution职业物品替换)
    - [Professions（职业）](#professions职业)
      - [`description`（描述）](#description描述)
      - [`name`（名称）](#name名称)
      - [`points`（点数）](#points点数)
      - [`addictions`（成瘾）](#addictions成瘾)
      - [`技能` (Skills)](#技能-skills)
      - [`missions`（任务）](#missions任务)
      - [`proficiencies`（熟练度）](#proficiencies熟练度)
      - [`items`（物品）](#items物品)
      - [`pets`（宠物）](#pets宠物)
      - [`vehicle`（交通工具）](#vehicle交通工具)
      - [`flags`（标志）](#flags标志)
      - [`cbms`（生物芯片）](#cbms生物芯片)
      - [`traits`（特征）](#traits特征)
      - [`requirement`（需求）](#requirement需求)
    - [配方](#配方)
      - [练习食谱](#练习食谱)
      - [嵌套食谱](#嵌套食谱)
      - [配方要求](#配方要求)
      - [Defining common requirements(定义通用要求)](#defining-common-requirements定义通用要求)
      - [Overlapping recipe component requirements (重复的配方组件需求)](#overlapping-recipe-component-requirements-重复的配方组件需求)
    - [Constructions(构造)](#constructions构造)
    - [气味类型(Scent\_types)](#气味类型scent_types)
    - [Scores, Achievements, and Conducts(得分，成就和行为准则)](#scores-achievements-and-conducts得分成就和行为准则)
      - [`event_transformation`（事件转换）](#event_transformation事件转换)
      - [`事件统计` (Event Statistic)](#事件统计-event-statistic)
      - [`score` (得分)](#score-得分)
      - [`achievement` (成就)](#achievement-成就)
      - [`conduct` (行为准则)](#conduct-行为准则)
    - [技能 (Skills)](#技能-skills-1)
    - [速度描述 (Speed Description)](#速度描述-speed-description)
    - [心情表情 (Mood Face)](#心情表情-mood-face)
    - [工具品质 (Tool Qualities)](#工具品质-tool-qualities)
    - [特质/突变 (Traits/Mutations)](#特质突变-traitsmutations)
    - [特质迁移 (Trait Migrations)](#特质迁移-trait-migrations)
    - [陷阱 (Traps)](#陷阱-traps)
    - [车辆群组 (Vehicle Groups)](#车辆群组-vehicle-groups)
    - [车辆部件 (Vehicle Parts)](#车辆部件-vehicle-parts)
      - [符号和变种](#符号和变种)
      - [以下可选字段仅适用于CARGO部件。](#以下可选字段仅适用于cargo部件)
      - [The following optional fields are specific to ENGINEs.(以下可选字段是特定于引擎（ENGINE）的。)](#the-following-optional-fields-are-specific-to-engines以下可选字段是特定于引擎engine的)
      - [The following optional fields are specific to WHEELs.(以下可选字段仅适用于WHEELs引擎。)](#the-following-optional-fields-are-specific-to-wheels以下可选字段仅适用于wheels引擎)
      - [The following optional fields are specific to ROTORs.](#the-following-optional-fields-are-specific-to-rotors)
      - [The following optional fields are specific to WORKBENCHes.](#the-following-optional-fields-are-specific-to-workbenches)
      - [The following optional fields are specific to SEATs.](#the-following-optional-fields-are-specific-to-seats)
      - [The following optional field describes pseudo tools for any part.](#the-following-optional-field-describes-pseudo-tools-for-any-part)
    - [Part Resistance](#part-resistance)
    - [Vehicle Placement](#vehicle-placement)
    - [Vehicle Spawn](#vehicle-spawn)
    - [Vehicles](#vehicles)
    - [Weakpoint Sets](#weakpoint-sets)
- [`data/json/items/` JSONs](#datajsonitems-jsons)
    - [Generic Items](#generic-items)
      - [To hit object](#to-hit-object)
    - [Ammo](#ammo)
    - [Ammo Effects](#ammo-effects)
    - [Magazine](#magazine)
    - [Armor](#armor)
      - [Armor Portion Data](#armor-portion-data)
        - [Encumbrance](#encumbrance)
        - [Encumbrance\_modifiers](#encumbrance_modifiers)
        - [Coverage](#coverage)
        - [Covers](#covers)
        - [Specifically Covers](#specifically-covers)
        - [Part Materials](#part-materials)
        - [Armor Data](#armor-data)
      - [Guidelines for thickness:](#guidelines-for-thickness)
    - [Pet Armor](#pet-armor)
    - [Books](#books)
      - [Conditional Naming](#conditional-naming)
      - [Color Key](#color-key)
      - [CBMs](#cbms)
    - [Comestibles](#comestibles)
    - [Containers](#containers)
    - [Melee](#melee)
    - [Memory Cards](#memory-cards)
    - [Gun](#gun)
    - [Gunmod](#gunmod)
    - [Batteries](#batteries)
    - [Tools](#tools)
    - [Seed Data](#seed-data)
    - [Brewing Data](#brewing-data)
      - [`Effects_carried`](#effects_carried)
      - [`effects_worn`](#effects_worn)
      - [`effects_wielded`](#effects_wielded)
      - [`effects_activated`](#effects_activated)
    - [Software Data](#software-data)
    - [Use Actions](#use-actions)
      - [Delayed Item Actions](#delayed-item-actions)
    - [Random Descriptions](#random-descriptions)
- [`json/` JSONs](#json-jsons)
    - [Harvest](#harvest)
      - [`id`](#id)
      - [`type`](#type)
      - [`message`](#message)
      - [`entries`](#entries)
      - [`leftovers`](#leftovers)
    - [Harvest Drop Type](#harvest-drop-type)
    - [Weapon Category](#weapon-category)
    - [Connect group definitions](#connect-group-definitions)
    - [Furniture](#furniture)
      - [`type`](#type-1)
      - [`move_cost_mod`](#move_cost_mod)
      - [`lockpick_result`](#lockpick_result)
      - [`lockpick_message`](#lockpick_message)
      - [`light_emitted`](#light_emitted)
      - [`boltcut`](#boltcut)
      - [`hacksaw`](#hacksaw)
      - [`oxytorch`](#oxytorch)
      - [`prying`](#prying)
      - [`required_str`](#required_str)
      - [`crafting_pseudo_item`](#crafting_pseudo_item)
      - [`workbench`](#workbench)
      - [`plant_data`](#plant_data)
      - [`surgery_skill_multiplier`](#surgery_skill_multiplier)
    - [Terrain](#terrain)
      - [`type`](#type-2)
      - [`move_cost`](#move_cost)
      - [`heat_radiation`](#heat_radiation)
      - [`light_emitted`](#light_emitted-1)
      - [`lockpick_result`](#lockpick_result-1)
      - [`lockpick_message`](#lockpick_message-1)
      - [`trap`](#trap)
      - [`boltcut`](#boltcut-1)
      - [`hacksaw`](#hacksaw-1)
      - [`oxytorch`](#oxytorch-1)
      - [`prying`](#prying-1)
      - [`transforms_into`](#transforms_into)
      - [`harvest_by_season`](#harvest_by_season)
      - [`roof`](#roof)
    - [Common To Furniture And Terrain](#common-to-furniture-and-terrain)
      - [`id`](#id-1)
      - [`name`](#name)
      - [`flags`](#flags)
      - [`connect_groups`](#connect_groups)
        - [Connection groups](#connection-groups)
      - [`connects_to`](#connects_to)
      - [`rotates_to`](#rotates_to)
      - [`symbol`](#symbol)
      - [`comfort`](#comfort)
      - [`floor_bedding_warmth`](#floor_bedding_warmth)
      - [`bonus_fire_warmth_feet`](#bonus_fire_warmth_feet)
      - [`looks_like`](#looks_like)
      - [`color` or `bgcolor`](#color-or-bgcolor)
      - [`max_volume`](#max_volume)
      - [`examine_action`](#examine_action)
      - [`close` and `open`](#close-and-open)
      - [`bash`](#bash)
      - [`deconstruct`](#deconstruct)
      - [`map_bash_info`](#map_bash_info)
        - [`str_min`, `str_max`](#str_min-str_max)
        - [`str_min_blocked`, `str_max_blocked`](#str_min_blocked-str_max_blocked)
        - [`str_min_supported`, `str_max_supported`](#str_min_supported-str_max_supported)
        - [`sound`, `sound_fail`, `sound_vol`, `sound_fail_vol`](#sound-sound_fail-sound_vol-sound_fail_vol)
        - [`furn_set`, `ter_set`](#furn_set-ter_set)
        - [`explosive`](#explosive)
        - [`destroy_only`](#destroy_only)
        - [`bash_below`](#bash_below)
        - [`tent_centers`, `collapse_radius`](#tent_centers-collapse_radius)
        - [`items`](#items)
      - [`map_deconstruct_info`](#map_deconstruct_info)
        - [`furn_set`, `ter_set`](#furn_set-ter_set-1)
        - [`items`](#items-1)
      - [`plant_data`](#plant_data-1)
        - [`transform`](#transform)
        - [`emissions`](#emissions)
        - [`base`](#base)
        - [`growth_multiplier`](#growth_multiplier)
        - [`harvest_multiplier`](#harvest_multiplier)
    - [clothing\_mod](#clothing_mod)
- [Scenarios](#scenarios)
  - [`description`](#description)
  - [`name`](#name-1)
  - [`points`](#points)
  - [`items`](#items-2)
  - [`flags`](#flags-1)
  - [`cbms`](#cbms-1)
  - [`traits`, `forced_traits`, `forbidden_traits`](#traits-forced_traits-forbidden_traits)
  - [`allowed_locs`](#allowed_locs)
  - [`start_name`](#start_name)
  - [`professions`](#professions)
  - [`map_special`](#map_special)
  - [`requirement`](#requirement)
  - [`eocs`](#eocs)
  - [`missions`](#missions)
  - [`custom_initial_date`](#custom_initial_date)
- [Starting locations](#starting-locations)
  - [`name`](#name-2)
  - [`terrain`](#terrain-1)
  - [`city_sizes`](#city_sizes)
  - [`city_distance`](#city_distance)
  - [`allowed_z_levels`](#allowed_z_levels)
  - [`flags`](#flags-2)
- [Mutation overlay ordering](#mutation-overlay-ordering)
  - [`id`](#id-2)
  - [`order`](#order)
- [MOD tileset](#mod-tileset)
  - [`compatibility`](#compatibility)
  - [`tiles-new`](#tiles-new)
- [Obsoletion and migration](#obsoletion-and-migration)
  - [Charge and temperature removal](#charge-and-temperature-removal)
- [Field types](#field-types)
- [Option sliders](#option-sliders)
  - [Option sliders - Fields](#option-sliders---fields)
  - [Option sliders - Levels](#option-sliders---levels)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Introduction（介绍）

这份文档描述了 Cataclysm: Dark Days Ahead 中使用的 json 文件的内容。如果你想添加或修改 Cataclysm: Dark Days Ahead 的内容，并且需要了解更多关于在哪里找到什么，以及每个文件和属性的作用，那么你可能正在阅读这份文档。

## Overall structure（总体结构）

游戏数据分布在`data`中的许多 JSON 文件中。大部分核心游戏数据在`data/json`中，模组数据在`data/mods`中。还有一些在`data`的其他子目录中，但你不太可能对那些感兴趣。

每个 JSON 文件都是一个 JSON 对象列表

```json
[
  {
    "…": "…"
  },
  {
    "…": "…"
  }
]
```

每个对象必须具有一个`"type"`成员，用于告诉游戏如何解释该对象。例如，制作配方具有`"type": "recipe"`，车辆部件具有`"type": "vehicle_part"`，依此类推。请注意，物品有点不寻常；可以使用多种类型来定义物品。有关更多详细信息，请参阅[物品文档](#datajsonitems-jsons)。

每种类型都有单独的文档，可以在下面或从下面链接的其他文档中找到（无疑有一些遗漏的；请随时报告缺失的文档）。

文档按文件组织，因为相同类型的对象往往在一个文件或一组相邻文件中共同定义。然而，游戏并不强制实行这种约定，实际上您可以在任何文件中定义任何类型的 JSON 对象。如果您编写一个小型 mod，将所有 JSON 放在一个文件中也是可以的。

有一些情况，其中某些对象必须在其他对象之前加载，定义这些对象的文件名会影响[加载顺序](JSON_LOADING_ORDER.md)；遵循既定的约定应该可以避免这个问题。

大多数类型的 JSON 对象都有一些共同的特性。这些通用特性将在下一节中详细介绍。

## Common properties (通用属性)

对于大多数类型，每个该类型的对象都必须具有唯一的 id。这个 id 通常由`"id"`字段定义。例如：

```json
{
  "type": "skill",
  "id": "barter",
  "name": { "str": "bartering" },
  "description": "…",
  "display_category": "display_social"
}
```

这定义了一个 id 为`barter`的技能。

### `"copy-from"` and `"abstract"`（“copy-from”和“abstract”）

有时您想定义一个与另一个对象类似的对象，或一组类似的对象。在大多数情况下，您可以通过`"copy-from"`实现这一点，指定要复制的对象的 id。例如，收获松树的定义会复制`t_tree_pine`（未收获的松树），然后只指定几个属性。其他属性（例如它是不可通行的、易燃的等）都是从`t_tree_pine`继承的。

```json
  {
    "type": "terrain",
    "id": "t_tree_pine_harvested",
    "copy-from": "t_tree_pine",
    "name": "pine tree",
    "description": "一棵属于'Pinus'属的高大针叶树，新英格兰地区的品种从'P. strobus'，'P. resinosa'和'P. rigida'中变化。树枝上已经有些被剥离，许多松果还没有完全发育，但经过一个季节，它可能又可以收获了。",
    "symbol": "4",
    "color": "brown",
    "looks_like": "t_tree_deadpine",
    "transforms_into": "t_tree_pine",
    "examine_action": "harvested_plant"
  },ss
```

有时，您可能希望定义一组相似的对象，但没有明显的单个对象应该被其他对象复制。在这种情况下，您可以创建一个特殊的*抽象*对象，并让所有其他对象复制它。

抽象对象通过`"abstract"`字段而不是`"id"`字段指定其 id。例如，这是抽象的汽车发电机：

```json
  {
    "abstract": "vehicle_alternator",
    "type": "vehicle_part",
    "fuel_type": "battery",
    "symbol": "*",
    "color": "yellow",
    "broken_color": "red",
    "flags": [ "ALTERNATOR" ]
  },
```

所有车辆发电机定义都使用`"copy-from": "vehicle_alternator"`来
继承这些通用属性，但是因为`vehicle_alternator`是一个
抽象对象，所以它不会以一个真实的车辆部件的形式出现在游戏中供你
安装。

当使用`"copy-from"`时，您可以定义在复制的
对象中也定义过的字段，新值将覆盖旧值。然而，
有时您希望更改复制对象中的值，而不是完全覆盖
它；这是有支持的。详见 [JSON
继承](JSON_INHERITANCE.md) 文档。

`"copy-from"`还暗示了`"looks_like"`连接，所以您不必
多次指定 id。

# Navigating the JSON (在 JSON 中导航)

很多 JSON 都涉及到与其他 JSON 实体的交叉引用。为了使导航更容易，我们提供了一个脚本 `tools/json_tools/cddatags.py`，可以为您生成一个 `tags` 文件。这使您可以跳转到给定 id 的对象定义。

要运行脚本，您需要 Python 3。在 Windows 上，您可能需要安装 Python，并将 `.py` 文件与 Python 关联。然后打开命令提示符，导航到您的 CDDA 文件夹，运行 `tools\json_tools\cddatags.py`。

要使用此功能，您的编辑器需要[ctags 支持 ↗](http://ctags.sourceforge.net/)。当这个功能正常工作时，您应该能够轻松地跳转到任何实体的定义。例如，将光标放在 id 上并按下相应的组合键。

- 在 Vim 中，此功能默认存在，您可以使用 [`^]`]([http://vimdoc.sourceforge.net/htmldoc/tagsrch.html#tagsrch.txt) ↗](http://vimdoc.sourceforge.net/htmldoc/tagsrch.html#tagsrch.txt)) 跳转到定义。
- 在 Notepad++ 中，转到 "Plugins" -> "Plugins Admin" 并启用 "TagLEET" 插件。然后选择任何 id 并按 Alt+Space 打开引用窗口。

# Common field types (常见字段类型)

本节描述了在 CDDA JSON 文件中格式化值的一些常见特性。

## Units (单位)

大多数表示物理量（长度、体积、时间等）的值都是用数值和单位的缩写组成的字符串表示，中间用空格隔开。通常我们使用国际单位制（SI）并尽量遵循传统的 SI 缩写。例如，一个体积为 3 升的值应定义为 `"3 L"`。

### Time duration (时间持续)

一个包含一个或多个数字与时间持续单位配对的字符串。数字和单位以及每对之间可以用任意数量的空格分隔。
可用单位：

- "hours", "hour", "h" - 一小时
- "days", "day", "d" - 一天
- "minutes", "minute", "m" - 一分钟
- "turns", "turn", "t" - 一回合，

示例：

- " +1 day -23 hours 50m " `(1*24*60 - 23*60 + 50 == 110 分钟)`
- "1 turn 1 minutes 9 turns" (1 分钟 10 秒，因为 1 回合是 1 秒)

## Translatable strings (可翻译字符串)

某些 json 字符串会被提取出来进行翻译，例如物品名称、描述等。具体的提取操作在 `lang/extract_json_strings.py` 中进行。除了明显的没有翻译上下文的字符串写法外，字符串还可以有可选的翻译上下文（有时还有复数形式），写法如下：

```JSON
"name": { "ctxt": "foo", "str": "bar", "str_pl": "baz" }
```

或者，如果复数形式与单数形式相同：

```JSON
"name": { "ctxt": "foo", "str_sp": "foo" }
```

您还可以通过添加 "//~" 条目来为翻译者添加注释，如下所示。条目的顺序无关紧要。

```JSON
"name": {
    "//~": "as in 'foobar'",
    "str": "bar"
}
```

目前，只有部分 JSON 值支持此语法（参见[这里](/doc/TRANSLATING.md#translation)以获取支持值的列表和更详细的解释）。

## Comments (注释)

JSON 本身不支持注释。然而，在 CDDA JSON 中，按照惯例，任何以`//`开头的字段都是注释。

```json
{
  "//": "comment (注释)"
}
```

如果你想在一个对象中放置多个注释，那么在`//`后面附加一个数字。例如：

```json
{
  "//": "comment (注释)",
  "//1": "another comment (另一个注释)",
  "//2": "yet another comment (还有一个注释)"
}
```

# File descriptions (文件描述)

这里是对每个 JSON 文件包含的内容的快速概述，按文件夹划分。此列表并非详尽无遗，但涵盖了大部分内容。

## `data/json/`

| Filename                     | Description                           |
| ---------------------------- | ------------------------------------- |
| `achievements.json`          | 成就                                  |
| `anatomy.json`               | 玩家身体部位列表 - 请勿修改           |
| `ascii_arts.json`            | 物品描述的 ASCII 艺术                 |
| `bionics.json`               | 仿生学, 不包括仿生效果                |
| `body_parts.json`            | anatomy.json 的扩展 - 请勿修改        |
| `clothing_mods.json`         | 服装改造的定义                        |
| `conducts.json`              | 行为准则                              |
| `connect_groups.json`        | 地形和家具连接组的定义                |
| `construction.json`          | 建筑菜单任务的定义                    |
| `default_blacklist.json`     | 恶作剧怪物的标准黑名单                |
| `doll_speech.json`           | 说话玩偶的语言信息                    |
| `dreams.json`                | 梦境文本与关联突变类别                |
| `disease.json`               | 疾病定义                              |
| `effects.json`               | 常见效果及其影响                      |
| `emit.json`                  | 烟雾和气体排放                        |
| `flags.json`                 | 常见标志及其描述                      |
| `furniture.json`             | 家具及被视为家具的特征                |
| `game_balance.json`          | 调整游戏平衡的各种选项                |
| `gates.json`                 | 门的地形定义                          |
| `harvest.json`               | 屠宰尸体时的物品掉落                  |
| `health_msgs.json`           | 玩家醒来时显示的消息                  |
| `item_actions.json`          | 标准物品操作的描述                    |
| `item_category.json`         | 物品类别及其默认排序                  |
| `item_groups.json`           | 物品生成组                            |
| `lab_notes.json`             | 实验室电脑信息                        |
| `martialarts.json`           | 武术风格和增益                        |
| `materials.json`             | 材料类型                              |
| `monster_attacks.json`       | 怪物攻击                              |
| `monster_drops.json`         | 怪物死亡时的物品掉落                  |
| `monster_factions.json`      | 怪物派系                              |
| `monstergroups.json`         | 怪物生成组                            |
| `monstergroups_egg.json`     | 蛋孵化的怪物生成组                    |
| `monsters.json`              | 怪物描述，主要是僵尸                  |
| `morale_types.json`          | 情绪修正信息                          |
| `mutation_category.json`     | 变异类别信息                          |
| `mutation_ordering.json`     | 瓷砖模式下变异和 CBM 覆盖层的绘制顺序 |
| `mutations.json`             | 特征/变异                             |
| `names.json`                 | 用于 NPC/玩家名字生成的名称           |
| `overmap_connections.json`   | 大地图中的道路和隧道连接              |
| `overmap_terrain.json`       | 大地图地形                            |
| `player_activities.json`     | 玩家活动                              |
| `professions.json`           | 职业定义                              |
| `recipes.json`               | 制作/拆解配方                         |
| `regional_map_settings.json` | 整个地图生成的设置                    |
| `road_vehicles.json`         | 道路上的车辆生成信息                  |
| `rotatable_symbols.json`     | 可旋转符号 - 请勿编辑                 |
| `scent_types.json`           | 可用气味类型                          |
| `scores.json`                | 分数                                  |
| `skills.json`                | 技能描述和 ID                         |
| `snippets.json`              | 传单/海报描述                         |
| `species.json`               | 怪物种类                              |
| `speed_descripton.json`      | 怪物速度描述                          |
| `speech.json`                | 怪物发声                              |
| `statistics.json`            | 用于定义分数和成就的统计数据和转换    |
| `start_locations.json`       | 情景的起始位置                        |
| `techniques.json`            | 物品和武术通用技巧                    |
| `terrain.json`               | 地形类型和定义                        |
| `test_regions.json`          | 测试区域                              |
| `tips.json`                  | 每日提示                              |
| `tool_qualities.json`        | 标准工具质量及其操作                  |
| `traps.json`                 | 标准陷阱                              |
| `tutorial.json`              | 教程信息（已过时）                    |
| `vehicle_groups.json`        | 车辆生成组                            |
| `vehicle_parts.json`         | 车辆零件，不影响旗帜效果              |
| `vitamin.json`               | 维生素及其缺乏症                      |

选定的子文件夹

## `data/json/items/`

有关各种物品的详细信息，请参阅下文：

| Filename                       | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `ammo.json`                    | 常见的基础组件，如电池和弹珠                    |
| `ammo_types.json`              | 标准枪支类型对应的弹药类型                      |
| `archery.json`                 | 弓和箭                                          |
| `armor.json`                   | 护甲和服装                                      |
| `bionics.json`                 | 紧凑型仿生模块（CBMs）                          |
| `biosignatures.json`           | 动物废物                                        |
| `books.json`                   | 书籍                                            |
| `chemicals_and_resources.json` | 化学前体                                        |
| `comestibles.json`             | 食物/饮料                                       |
| `containers.json`              | 容器                                            |
| `crossbows.json`               | 十字弩和弩箭                                    |
| `fake.json`                    | 用于仿生器或突变的虚拟物品                      |
| `fuel.json`                    | 液体燃料                                        |
| `grenades.json`                | 手榴弹和可投掷的爆炸物                          |
| `handloaded_bullets.json`      | 随机弹药                                        |
| `melee.json`                   | 近战武器                                        |
| `newspaper.json`               | 传单、报纸和幸存者便条。`snippets.json`用于消息 |
| `ranged.json`                  | 枪械                                            |
| `software.json`                | 用于 SD 卡和 USB 闪存盘的软件                   |
| `tool_armor.json`              | 可以(激活)a 的衣物和护甲                        |
| `toolmod.json`                 | 工具的修改部件                                  |
| `tools.json`                   | 可以(激活)a 的工具和物品                        |
| `vehicle_parts.json`           | 脱离车辆后的车辆组件                            |

### `data/json/items/comestibles/`

## `data/json/requirements/`

标准组件和工具用于制作（请参阅[配方要求](#recipe-requirements-配方要求)）

| 文件名                      | 描述                   |
| --------------------------- | ---------------------- |
| `ammo.json`                 | 弹药组件               |
| `cooking_components.json`   | 常见原料集合           |
| `cooking_requirements.json` | 烹饪工具和热源         |
| `materials.json`            | 线、布料和其他基本材料 |
| `toolsets.json`             | 常用工具组合           |
| `uncraft.json`              | 拆解物品的常见结果     |
| `vehicle.json`              | 用于维修车辆的工具     |

## `data/json/vehicles/`

具有自解释文件名的车辆定义组：

| Filename
|---
| `bikes.json`
| `boats.json`
| `cars.json`
| `carts.json`
| `custom_vehicles.json`
| `emergency.json`
| `farm.json`
| `helicopters.json`
| `military.json`
| `trains.json`
| `trucks.json`
| `utility.json`
| `vans_busses.json`
| `vehicles.json`

# Description and content of each JSON file (每个 JSON 文件的描述和内容)

本节描述了每个 json 文件及其内容。每个 json 都有自己独特的属性，这些属性与其他 Json 文件不共享（例如，用于书籍的'chapters'属性不适用于护甲）。这将确保属性仅在适当的 JSON 文件上下文中被描述和使用。

## `data/json/` JSONs

### Ascii_arts

| 标识符    | 描述                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| `id`      | 唯一 ID。必须是一个连续的单词，如有必要，请使用下划线。                                    |
| `picture` | 字符串数组，每个条目都是一个 ascii 图片的行，每行最多 41 列长。\ 必须替换为 \\\ 才能显示。 |

```C++
  {
    "type": "ascii_art",
    "id": "cashcard",
    "picture": [
      "",
      "",
      "",
      "       <color_white>╔═══════════════════╗",
      "       <color_white>║                   ║",
      "       <color_white>║</color> <color_yellow>╔═   ╔═╔═╗╔═║ ║</color>   <color_white>║",
      "       <color_white>║</color> <color_yellow>║═ ┼ ║ ║═║╚╗║═║</color>   <color_white>║",
      "       <color_white>║</color> <color_yellow>╚═   ╚═║ ║═╝║ ║</color>   <color_white>║",
      "       <color_white>║                   ║",
      "       <color_white>║   RIVTECH TRUST   ║",
      "       <color_white>║                   ║",
      "       <color_white>║                   ║",
      "       <color_white>║ 555 993 55221 066 ║",
      "       <color_white>╚═══════════════════╝"
    ]
  }
```

关于可以导出 ASCII 艺术格式并粘贴到 `ascii_arts.json` 的工具的信息，请参阅[ASCII_ARTS.md](ASCII_ARTS.md)。

### ### Addiction types(成瘾类型)

成瘾是用 JSON 定义的，使用 `"addiction_type"`：

```JSON
{
  "type": "addiction_type",
  "id": "caffeine",
  "name": "Caffeine Withdrawal",
  "type_name": "caffeine",
  "description": "Strength - 1;   Slight sluggishness;   Occasional cravings",
  "craving_morale": "morale_craving_caffeine",
  "effect_on_condition": "EOC_CAFFEINE_ADDICTION"
}
```

| 字段                    | 描述                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| `"name"`                | 玩家状态中上瘾效果的名称                                                                        |
| `"type_name"`           | 上瘾来源的名称                                                                                  |
| `"description"`         | 玩家状态中上瘾效果的描述                                                                        |
| `"craving_morale"`      | `morale_type` 惩罚的 ID                                                                         |
| `"effect_on_condition"` | 每个 `update_body` (即每回合)激活的 `effect_on_condition` 的 ID（也可以是内联 EOC）             |
| `"builtin"`             | (用于传统上瘾代码) 用于处理上瘾效果的硬编码函数名称。对于新上瘾，改用 `"effect_on_condition"`。 |

每回合，玩家的上瘾会使用给定的 `effect_on_condition` 或 `builtin` 进行处理。这些效果通常具有 rng 条件，以便效果不会在每个回合都持续应用。例如：

```JSON
{
  "type": "effect_on_condition",
  "id": "EOC_MARLOSS_R_ADDICTION",
  "condition": { "compare_num": [ { "rand": 800 }, "<", { "u_val": "addiction_intensity", "addiction": "marloss_r", "mod": 20 } ] },
  "effect": [
    { "u_add_morale": "morale_craving_marloss", "bonus": -5, "max_bonus": -30 },
    { "u_message": "You daydream about luscious pink berries as big as your fist.", "type": "info" },
    {
      "run_eocs": [
        {
          "id": "EOC_MARLOSS_R_ADDICTION_MODFOCUS",
          "condition": { "compare_num": [ { "u_val": "focus" }, ">", { "const": 40 } ] },
          "effect": { "arithmetic": [ { "u_val": "focus" }, "-=", { "const": 1 } ] }
        }
      ]
    }
  ]
}
```

当前硬编码的 builtins:

- `nicotine_effect` 尼古丁效果：尼古丁通常是从烟草产品（如香烟和雪茄）中摄取的。它可能导致提神、放松和降低食欲等作用。
- `alcohol_effect` 酒精效果：酒精通常是从酒精饮料（如啤酒、葡萄酒和烈酒）中摄取的。它可能导致感觉迟钝、眩晕、失去平衡和说话含糊不清等作用。
- `diazepam_effect` 地西泮效果：地西泮是一种抗焦虑药物，通常用于治疗焦虑、紧张和抑郁等症状。它可能导致镇静、放松和嗜睡等作用。
- `opiate_effect` 鸦片类效果：鸦片类药物包括吗啡、海洛因和处方止痛药。它们通常用于治疗剧烈疼痛。这种效果可能导致欣快感、缓解疼痛和嗜睡等作用。
- `amphetamine_effect` 安非他命效果：安非他命是一种刺激剂，通常用于治疗注意力缺陷多动障碍（ADHD）和类似症状。它可能导致提神、警觉和心跳加速等作用。
- `cocaine_effect` 可卡因效果：可卡因是一种强烈的刺激剂，通常会导致精神亢奋、自信和警觉等作用。
- `crack_effect` 烟碱效果：烟碱是一种可卡因的研磨和加工形式，通常吸入后产生强烈的兴奋作用。它可能导致剧烈的欣快感和精神亢奋等作用。

### Body Graphs (身体图谱)

身体图谱会显示在身体状态菜单中，通过在玩家的 @-屏幕上按 `s` 键即可访问。
这些是可交互的图表，可以突显不同的身体部位或子身体部位。

```JSON
{
  "type": "body_graph",
  "id": "head",
  "parent_bodypart": "head",
  "fill_sym": "#",
  "fill_color": "white",
  "rows": [
    "             7777777777777              ",
    "          7777777777777777777           ",
    "         777777777777777777777          ",
    "        ######66666666666######         ",
    "        ####666666666666666####         ",
    "        ####666666666666666####         ",
    "      9 #####6666666666666##### 0       ",
    "      99#####111###4###222#####00       ",
    "      99####11111#444#22222####00       ",
    "      99##5555555544455555555##00       ",
    "       9##5555555544455555555##0        ",
    "        ##5555555444445555555##         ",
    "         ###555533333335555###          ",
    "          #####333333333#####           ",
    "           #######333#######            ",
    "            ###############             ",
    "            8 ########### 8             ",
    "         8888888 ##### 8888888          ",
    "       88888888888   88888888888        ",
    "           88888888888888888            "
  ],
  "parts": {
    "1": { "sub_body_parts": [ "eyes_left" ], "select_color": "red", "nested_graph": "eyes" },
    "2": { "sub_body_parts": [ "eyes_right" ], "select_color": "red", "nested_graph": "eyes" },
    "3": { "sub_body_parts": [ "mouth_lips" ], "select_color": "red", "nested_graph": "mouth" },
    "4": { "sub_body_parts": [ "mouth_nose" ], "select_color": "red", "nested_graph": "mouth" },
    "5": { "sub_body_parts": [ "mouth_cheeks" ], "select_color": "red", "nested_graph": "mouth" },
    "6": { "sub_body_parts": [ "head_forehead" ], "select_color": "red" },
    "7": { "sub_body_parts": [ "head_crown" ], "select_color": "red" },
    "8": { "sub_body_parts": [ "head_throat", "head_nape" ], "select_color": "red" },
    "9": { "sub_body_parts": [ "head_ear_r" ], "select_color": "red" },
    "0": { "sub_body_parts": [ "head_ear_l" ], "select_color": "red" }
  }
}
```

| 字段              | 描述                                                                                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`            | 始终为 `body_graph`。                                                                                                                                          |
| `id`              | 唯一标识此图表的字符串。                                                                                                                                       |
| `parent_bodypart` | （_可选_）此图表的父身体部位的 ID（如果有）。仅用于将当前身体部位显示为窗口的子标题。                                                                          |
| `fill_sym`        | （_可选_）指定在游戏中查看时填充图表所有部分的字符。                                                                                                           |
| `fill_color`      | （_可选_）指定在游戏中查看时用于未选定图表部分的颜色。                                                                                                         |
| `rows`            | 组成图表的字符串数组。用于每个片段的符号可能对应于 `parts` 中的条目，它们构成图表的各个部分。为空格 (` `) 的空位在填充时将被忽略。                             |
| `mirror`          | （_可选_）可以指定为 `rows` 的替代。这将采用一个字符串 ID，引用不同的 body_graph，该 body_graph 将水平翻转并用作此图表中的行（例如：`hand_l` 镜像 `hand_r`）。 |
| `parts`           | 图表中存在的与特定身体部位或子身体部位相对应的符号列表。                                                                                                       |

`rows` 字段的分辨率限制为 40x20，以保持与 80x24 终端的兼容性。

#### Graph Parts(图表部分)

`parts` 字段可用于定义与图表不同部分的交互。每个部分至少应引用一个身体部位或子身体部位。

| 字段             | 描述                                                              |
| ---------------- | ----------------------------------------------------------------- |
| `body_parts`     | 表示此图表部分的一组 `body_part` ID。                             |
| `sub_body_parts` | 表示此图表部分的一组 `sub_body_part` ID。                         |
| `sym`            | （_可选_）用于覆盖属于此部分的片段的符号。                        |
| `select_color`   | （_可选_）选择此部分时使用的颜色。                                |
| `nested_graph`   | （_可选_）另一个 body_graph 的 ID。当玩家选择并确认此部分时，界面 |

### Body_parts (身体部位)

| `Identifier` (标识符)   | Description (描述)                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | （_必填_）唯一 ID。必须是一个连续的单词，如果需要使用下划线。                                                                                                                                                                                     |
| `name`                  | （_必填_）游戏中显示的名称。                                                                                                                                                                                                                      |
| `limb_type`             | （_必填_）由 `bodypart.h` 定义的肢体类型。某些功能仅检查特定的 bodypart 类型以达到它们的目的。目前实现的类型有：`head, torso, sensor, mouth, arm, hand, leg, foot, wing, tail, other`。                                                           |
| `limb_types`            | （_可选_）（可用于替代 `limb_type`）此身体部位可模拟的肢体类型的加权列表。权重是决定此身体部位在扮演给定肢体类型时有多好的修饰符。（例如：`[ [ "foot", 1.0 ], [ "hand", 0.15 ] ]`）                                                               |
| `secondary_types`       | （_可选_）身体部位的次要肢体类型列表，用于在相关计算中包含它。                                                                                                                                                                                    |
| `accusative`            | （_必填_）这个 bodypart 的宾格形式。                                                                                                                                                                                                              |
| `heading`               | （_必填_）在标题中的显示方式。                                                                                                                                                                                                                    |
| `heading_multiple`      | （_必填_）标题的复数形式。如果相对的身体部位具有相同的负重数据、健康状况和温度，那么会使用它。                                                                                                                                                    |
| `encumbrance_text`      | （_必填_）当肢体负重达到 40 时打印的信息。                                                                                                                                                                                                        |
| `encumbrance_threshold` | （_可选_）肢体的分数开始基于负重进行缩放的负重值。默认为 0，表示从第一点负重开始缩放。                                                                                                                                                            |
| `encumbrance_limit`     | （_可选_）当负重达到或超过此值时，肢体停止贡献其分数。默认为 100。                                                                                                                                                                                |
| `grabbing_effect`       | （_可选_）要应用于抓取此肢体的怪物的 `GRAB_FILTER` 效果的效果 ID，对于适当的抓取移除是必要的（请参见 `MONSTER_SPECIAL_ATTACKS.md` 中的抓取逻辑）。                                                                                                |
| `hp_bar_ui_text`        | （_必填_）在面板中与 hp 条相邻的显示方式。                                                                                                                                                                                                        |
| `main_part`             | （_必填_） 这个部位连接到哪个主要部位（如果这个部位是主要部位，那么它连接到自己）。                                                                                                                                                               |
| `connected_to`          | (必填 若 main_part 是自身) 这个部位连接到朝向“根”身体部位的下一个部位（根身体部位应该连接到自己）。每个解剖学都应该有一个独特的根身体部位，通常是头部。                                                                                           |
| `base_hp`               | （_必填_） 此部位在任何修改之前拥有的生命值。                                                                                                                                                                                                     |
| `opposite_part`         | （_必填_） 在一对中，这个部位的相对部位是什么。                                                                                                                                                                                                   |
| `hit_size`              | （_必填_） 身体部位在(近战)攻击定向时的大小。怪物特殊攻击能够针对设定的身体部位命中大小（详见 `MONSTERS.md` 的 `hitsize_min/max`）。角色的整个 `命中大小总和 / 基本命中大小总和` 作为躲避滚动的分母，意味着额外的肢体会被动地使躲避变得更加困难。 |
| `hit_difficulty`        | （_必填_） 假设“所有者”被击中，击中特定身体部位有多困难。较高的数字意味着好的命中会偏向这个部位，较低的数字意味着不准确的攻击不太可能击中这个部位。公式是 `chance *= pow(hit_roll, hit_difficulty)` 。                                            |
| `drench_capacity`       | （_必填_） 此部位在完全被浸湿前能变得多湿。 0 会使肢体变成防水，士气检查绝对湿度，而其他效果则检查湿度百分比 - 使得高 `drench_capacity` 能更长时间地防止惩罚。                                                                                    |
| `drench_increment`      | （_可选_） 每次肢体被浸湿时应用的“湿度”单位。默认为 2，潜水时忽略。                                                                                                                                                                               |
| `drying_chance`         | （_可选_） 身体部位在干燥滚动中成功的基本概率（`x/80` 的概率，受环境温度等因素影响）。                                                                                                                                                            |
| `drying_increment`      | （_可选_） 如果身体部位在干燥滚动中成功（基本概率为 `drench_capacity / 80`，受环境温度影响），每轮干燥的湿度单位。                                                                                                                                |
| `wet_morale`            | （_可选_） 肢体变湿时的士气加成/减成，表示在肢体饱和度 100% 时的士气影响。受穿着的衣物和环境温度的影响。                                                                                                                                          |
| `stylish_bonus`         | （_可选_） 在该部位穿戴时髦衣物所获得的士气加成。 (默认：`0`)                                                                                                                                                                                     |
| `hot_morale_mod`        | （_可选_） 该部位过热时的士气影响。 (默认：`0`)                                                                                                                                                                                                   |
| `cold_morale_mod`       | （_可选_） 该部位过冷时的士气影响。 (默认：`0`)                                                                                                                                                                                                   |
| `squeamish_penalty`     | （_可选_） 在该部位穿着肮脏衣物时的士气影响。 (默认：`0`)                                                                                                                                                                                         |
| `fire_warmth_bonus`     | （_可选_） 用这个部位在火堆旁取暖的效果如何。 (默认：`0`)                                                                                                                                                                                         |
| `temp_mod`              | (可选 数组) 身体部位的固有温度调节器。第一个值（与突变的`bodytemp_modifier`相同的“温度单位”）总是被应用，第二个值在身体部位没有过热时被附加在上面。                                                                                               |
| `env_protection`        | （_可选_） 该部位固有的环境防护。 (默认：`0`)                                                                                                                                                                                                     |
| `stat_hp_mods`          | (_必填_) 修改此部位的 hp_max 的值，遵循以下公式：`hp_max += int_mod*int_max + dex_mod*dex_max + str_mod*str_max + per_mod*per_max + health_mod*get_healthy()`，其中 X_max 是 X 统计数据的未修改值，get_healthy() 是角色的隐藏健康统计数据。       |
| `heal_bonus`            | (_必填_) 每次成功治疗滚动时，该部位固有的 HP 恢复量。请参见 `ALWAYS_HEAL` 和 `HEAL_OVERRIDE` 标志。                                                                                                                                               |
| `mend_rate`             | (_必填_) 如果该肢体断裂，其固有的愈合速率。默认值为 `1.0`，在计算其他因素后作为愈合因子的乘数使用。                                                                                                                                               |
| `health_limit`          | (_必填_) 肢体必须具备多少 HP，才能提供其近战 `techniques` 和 `conditional_flags`。默认值为 1，意味着断裂的肢体无法提供贡献。                                                                                                                      |
| `ugliness`              | (_必填_) 可以通过掩盖来改变的部位的丑陋程度，负数值表示美观加成。                                                                                                                                                                                 |
| `ugliness_mandatory`    | (_必填_) 无法通过护甲掩盖的固有丑陋程度。                                                                                                                                                                                                         |
| `bionic_slots`          | (_必填_) 该部位具有多少个仿生插槽。                                                                                                                                                                                                               |
| `is_limb`               | (_必填_) 此部位是否为肢体，是否可能断裂。（默认：`false`）                                                                                                                                                                                        |
| `smash_message`         | (_必填_) 使用该部位砸东西时显示的消息。                                                                                                                                                                                                           |

```json
{
  "id": "arm_l",
  "type": "body_part",
  "//": "查看bodypart.cpp中的`body_part_struct::load`中的注释，了解为什么xxx和xxx_multiple不在一个翻译对象内。",
  "name": "left arm (左臂)",
  "name_multiple": "arms (胳膊)",
  "accusative": { "ctxt": "bodypart_accusative", "str": "left arm (左臂)" },
  "accusative_multiple": { "ctxt": "bodypart_accusative", "str": "arms (胳膊)" },
  "heading": "L. Arm (左臂)",
  "heading_multiple": "Arms (胳膊)",
  "encumbrance_text": "Melee and ranged combat is hampered (近战和远程战斗受阻)。",
  "hp_bar_ui_text": "L ARM (左臂)",
  "main_part": "arm_l",
  "connected_to": "torso",
  "opposite_part": "arm_r",
  "hit_size": 9,
  "hit_difficulty": 0.95,
  "limb_type": "arm",
  "limb_scores": [
    ["manip", 0.1, 0.2],
    ["lift", 0.5],
    ["block", 1.0],
    ["swim", 0.1]
  ],
  "armor": { "electric": 2, "stab": 1 },
  "side": "left",
  "legacy_id": "ARM_L",
  "hot_morale_mod": 0.5,
  "cold_morale_mod": 0.5,
  "fire_warmth_bonus": 600,
  "squeamish_penalty": 5,
  "is_limb": true,
  "base_hp": 60,
  "drench_capacity": 10,
  "smash_message": "You elbow-smash the %s (你用胳膊肘猛击%s)。",
  "bionic_slots": 20,
  "sub_parts": ["arm_shoulder_l", "arm_upper_l", "arm_elbow_l", "arm_lower_l"]
}

该对象包含了关于身体部位名称、与其他身体部位的连接、命中大小和难度、肢体得分、护甲值等信息。

```

# On-hit Effects (受击效果)

An array of effects to add whenever the limb in question takes damage. Variables for each entry:
每当相关部位受到伤害时添加的效果数组。每个条目的变量：

| `标识符`                | 描述                                                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | （必需）要应用的效果的 ID。                                                                                                              |
| `global`                | （可选）布尔值，如果为 true，则效果不会应用于身体部位，而是应用于整个角色。默认为 false。                                                |
| `dmg_type`              | （可选）符合条件应用效果的伤害类型的字符串 ID。默认为所有伤害。                                                                          |
| `dmg_threshold`         | （可选）整数，触发效果的伤害量。对于主要部位，用作肢体最大健康值的百分比；对于次要部位，用作绝对伤害量。默认为 1。                       |
| `dmg_scale_increment`   | （可选）浮点数，基于高于 `dmg_threshold` 的伤害的缩放步骤。默认为 1。                                                                    |
| `chance`                | （可选）整数，触发效果的百分比几率。默认为 100。                                                                                         |
| `chance_dmg_scaling`    | （可选）浮点数，每高于 `dmg_threshold` 的 `dmg_scale_increment` 增加这个值的几率。默认为 0。                                             |
| `intensity`             | （可选）整数，要应用的效果强度。默认为 1。                                                                                               |
| `intensity_dmg_scaling` | （可选）浮点数，每高于 `dmg_threshold` 的 `dmg_scale_increment` 增加这个值的强度。默认为 0。                                             |
| `max_intensity`         | （可选）整数，作为 onhit 效果一部分时肢体能获得的最大强度 - 像法术或显式特殊攻击效果等其他效果来源仍然可以应用更高强度。默认为 INT_MAX。 |
| `duration`              | （可选）整数，以秒为单位应用效果的持续时间。默认为 1。                                                                                   |
| `duration_dmg_scaling`  | （可选）浮点数，每高于 `dmg_threshold` 的 `dmg_scale_increment` 增加这个值的持续时间。默认为 0。                                         |
| `max_duration`          | （可选）整数，作为 onhit 效果一部分时肢体能获得的最大持续时间（以秒为单位） - 见 `max_intensity`。默认为 INT_MAX。                       |

```json
{
  "effects_on_hit": [
    {
      "id": "staggered",
      "dmg_type": "bash",
      "dmg_threshold": 5,
      "dmg_scale_increment": 5,
      "chance": 10,
      "chance_dmg_scaling": 10,
      "duration": 5,
      "duration_dmg_scaling": 2,
      "max_duration": 15
    },
    {
      "id": "downed",
      "global": true,
      "dmg_threshold": 20,
      "dmg_scale_increment": 10,
      "chance": 5,
      "chance_dmg_scaling": 20,
      "duration": 2,
      "duration_dmg_scaling": 0.5
    }
  ]
}
```

### Limb scores (肢体评分)

TODO：肢体评分，后续继续修改
肢体评分作为计算肢体负担和损伤对角色能力影响的基础。它们使用`"limb_score"`类型来定义：

```json
{
  "type": "limb_score",
  "id": "lift",
  "name": "Lifting",
  "affected_by_wounds": true,
  "affected_by_encumb": false
}
```

- `"type"`: 类型始终为 "limb_score (肢体评分)"。
- `"id"`: 用于识别该肢体评分的标识符
- `"name"`: 必填项。为此肢体评分定义一个可翻译的名称，该名称将显示在用户界面中。
- `"affected_by_wounds"`: 可选项，默认为 true。确定该肢体评分是否受角色肢体健康状况影响。肢体健康状况较低 => 评分较低。
- `"affected_by_encumb"`: 可选项，默认为 true。确定该肢体评分是否受角色肢体负担影响。负担较重 => 评分较低。

以下是当前定义的肢体评分：

| 肢体评分 id            | 描述                                                                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `manipulator_score`    | 修改瞄准速度、装弹速度、投掷攻击速度、远程散布和制作速度。每种肢体类型的操纵器评分都会汇总，然后为检查选择最佳肢体组。                               |
| `manipulator_max`      | 肢体可以为操纵器评分贡献的上限。                                                                                                                     |
| `lifting_score`        | 修改近战攻击耐力和移动成本，以及一些力量检查。总和大于 0.5 的肢体可以进行双手武器和类似检查。对于近战战斗的目的，提升评分低于 0.1 的手臂不算作有效。 |
| `blocking_score`       | 通过有资格肢体的阻挡评分加权滚动选择阻挡肢体，阻挡效率乘以目标肢体的评分。                                                                           |
| `breathing_score`      | 修改耐力恢复速度和喊叫音量。                                                                                                                         |
| `vision_score`         | 修改远程散布、远程和近战弱点命中几率。                                                                                                               |
| `nightvision_score`    | 修改夜视范围（计算范围的乘数）。                                                                                                                     |
| `reaction_score`       | 修改闪避几率、格挡几率、近战弱点命中几率。                                                                                                           |
| `balance_score`        | 修改投掷攻击速度、移动成本和近战攻击滚动。                                                                                                           |
| `footing_score`        | 修改移动成本。                                                                                                                                       |
| `movement_speed_score` | 修改移动成本。                                                                                                                                       |
| `swim_score`           | 修改游泳速度。                                                                                                                                       |

这些肢体分数在 `"body_part"` 中的 `"limb_scores"` 数组中有所引用。（参见 [body parts](<#body_parts(肢体部位)>)）

### Character Modifiers (角色修饰符)

角色修饰符定义了角色采取的不同行为对操作的有效性。这些通常来自肢体得分。

```json
{
  "type": "character_mod",
  "id": "ranged_dispersion_manip_mod",
  "description": "Hand dispersion when using ranged attacks (使用远程攻击时的手部散布)",
  "mod_type": "+",
  "value": { "limb_score": "manip", "max": 1000.0, "nominator": 22.8, "subtract": 22.8 }
},
{
  "type": "character_mod",
  "id": "slip_prevent_mod",
  "description": "Slip prevention modifier (防滑修饰符)",
  "mod_type": "x",
  "value": {
    "limb_score": [ [ "grip", 3.0 ], [ "lift", 2.0 ], "footing" ],
    "override_encumb": true,
    "limb_score_op": "+",
    "denominator": 6.0
  }
},
{
  "type": "character_mod",
  "id": "stamina_move_cost_mod",
  "description": "Stamina move cost modifier (耐力移动成本修饰符)",
  "mod_type": "x",
  "value": { "builtin": "stamina_move_cost_modifier" }
}
```

| 字段          | 描述                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| `type`        | 总是 "character_mod"。                                                       |
| `id`          | 此角色修饰符的唯一标识符。                                                   |
| `description` | 可翻译的文本，描述此修饰符的功能，将显示在 UI 中。                           |
| `mod_type`    | 描述如何应用此修饰符。可以是 `"+"`（相加），`"x"`（相乘）或 `""`（未指定）。 |
| `value`       | 描述如何计算此修饰符的对象。                                                 |

#### Character Modifiers - Value (角色修饰符 - 值)

| 字段              | 描述                                                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limb_score`      | 指代一个 `limb_score` id，或者一个 `limb_score` id 的数组（可以是加权列表）。这些是导出此修饰符的肢体得分。对于加法计算（`limb_score_op: "+"`），得分乘以权重，对于乘法计算（`limb_score_op: "x"`），将其提高到权重的幂。 |
| `limb_score_op`   | （_可选_） 当定义多个肢体得分时，应用的操作（加 `+` 或乘 `x`）。例如：`x` => `score1 x score2 x score3 ...`。（默认为 `x`）                                                                                               |
| `limb_type`       | （_可选_） 指代在 [`body_part`](<#body_parts(肢体部位)>) 中定义的 `limb_type`。 如果存在，则仅使用具有该 `limb_type` 的身体部位的肢体得分。                                                                               |
| `override_encumb` | （_可选_） 布尔值（true/false）。如果指定，则强制肢体得分受到/不受肢体负重影响（为 true/false）。（覆盖 `limb_score` 中的 `affected_by_encumb`）                                                                          |
| `override_wounds` | （_可选_） 布尔值（true/false）。如果指定，则强制肢体得分受到/不受肢体健康影响（为 true/false）。（覆盖 `limb_score` 中的 `affected_by_wounds`）                                                                          |
| `min`             | （_可选_） 为此修饰符定义最小值。通常仅用于提供好处的“奖励”乘数。不应与 `max` 一起使用。                                                                                                                                  |
| `max`             | （_可选_） 为此修饰符定义最大值。通常用于提供弊端的“成本”乘数。不应与 `min` 一起使用。此值可以定义为小数或特殊值 `"max_move_cost"`。                                                                                      |
| `nominator`       | （_可选_） 使肢体得分除以指定值，从而使 `nominator / ( limb_score * denominator )`。                                                                                                                                      |
| `denominator`     | （_可选_） 将肢体得分（或指定的 nominator，如果指定的话）除以指定值，这样就可以得到 `limb_score / denominator`。                                                                                                          |
| `subtract`        | （_可选_） 定义从结果修饰符中减去的值，从而得到 `mod - subtract`。                                                                                                                                                        |
| `builtin`         | 与肢体得分不同，`value` 对象可以定义一个内置函数来处理修饰符的计算。                                                                                                                                                      |

修饰符通常来自肢体得分，该得分在一系列操作中进行修改。这里有一些`value`中指定字段不同组合的可能结果：

```C++
// 只指定一个"limb_score"（肢体得分）：
mod = limb_score（肢体得分）;
// "limb_score" 数组中有3个得分id（带有"x"操作）：
mod = limb_score1（肢体得分1） * limb_score2（肢体得分2） * limb_score3（肢体得分3）;
// 指定了"max"（最大值）：
mod = min( max（最大值）, limb_score（肢体得分） );
// 指定了"min"（最小值）：
mod = max( min（最小值）, limb_score（肢体得分） );
// 同时指定"max"（最大值）和"nominator"（分子）：
mod = min( max（最大值）, nominator（分子） / limb_score（肢体得分） );
// 指定了"max"（最大值）、"nominator"（分子）和"subtract"（减去）：
mod = min( max（最大值）, ( nominator（分子） / limb_score（肢体得分） ) - subtract（减去） );
// 指定了"max"（最大值）、"denominator"（分母）和"subtract"（减去）：
mod = min( max（最大值）, ( limb_score（肢体得分） / denominator（分母） ) - subtract（减去） );
```

````

### 仿生学（Bionics）

| 标识符（Identifier）         | 说明                                                                                                                                                                                                                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                         | 唯一ID。必须是一个连续的单词，如果需要，可以使用下划线。                                                                                                                                                                                                                            |
| `name`                       | 游戏中显示的名称。                                                                                                                                                                                                                                                                  |
| `description`                | 游戏中的描述。                                                                                                                                                                                                                                                                      |
| `act_cost`                   | (_可选_) 激活仿生器所需的能量（kJ）。可以使用字符串："1 kJ"/"1000 J"/"1000000 mJ"（默认值：`0`）                                                                                                                                                                                    |
| `deact_cost`                 | (_可选_) 关闭仿生器所需的能量（kJ）。可以使用字符串："1 kJ"/"1000 J"/"1000000 mJ"（默认值：`0`）                                                                                                                                                                                    |
| `react_cost`                 | (_可选_) 保持此仿生器激活状态所需的能量（kJ），在非零"时间"下无效。可以使用字符串："1 kJ"/"1000 J"/"1000000 mJ"（默认值：`0`）                                                                                                                                                      |
| `trigger_cost`               | (_可选_) 触发此仿生器的特殊效果所需的能量（kJ）。这可以是对特定条件的反应或在仿生器激活时采取的操作。可以使用字符串："1 kJ"/"1000 J"/"1000000 mJ"（默认值：`0`）                                                                                                                    |
| `time`                       | (_可选_) 激活后，需要多长时间来消耗能量。如果为0，则只消耗一次能量。（默认值：`0`）                                                                                                                                                                                                 |
| `upgraded_bionic`            | (_可选_) 通过安装此仿生器可以升级的仿生器。                                                                                                                                                                                                                                         |
| `available_upgrades`         | (_可选_) 此仿生器的可用升级，即：具有由`upgraded_bionic`引用的此仿生器的仿生器列表。                                                                                                                                                                                                |
| `encumbrance`                | (_可选_) 仿生器给身体各部位带来的负担的列表。                                                                                                                                                                                                                                       |
| `known_ma_styles`            | (_可选_) 激活仿生器时佩戴者已知的武术风格列表                                                                                                                                                                                                                                       |
| `weight_capacity_bonus`      | (_可选_) 重量携带能力的奖励，以克为单位，可以为负数。可以使用字符串 - "5000 g" 或 "5 kg"（默认值：`0`）                                                                                                                                                                             |
| `weight_capacity_modifier`   | (_可选_) 修改基本重量携带能力的因素。（默认值：`1`）                                                                                                                                                                                                                                |
| `canceled_mutations`         | (_可选_) 安装此仿生器时删除的突变/特征列表（例如，因为它替换了有缺陷的生物部件）。                                                                                                                                                                                                  |
| `mutation_conflicts`         | (_可选_) 阻止安装此仿生器的突变列表。                                                                                                                                                                                                                                               |
| `included_bionics`           | (_可选_) 在安装此仿生器时自动安装的其他仿生器。这可以用于从一个CBM项目安装多个仿生器，因为它们可以独立激活。                                                                                                                                                                        |
| `included`                   | (_可选_) 该仿生器是否包含在另一个仿生器中。如果为真，则该仿生器不需要定义CBM项目。（默认值：`false`）                                                                                                                                                                               |
| `env_protec`                 | (_可选_) 此仿生器在指定身体部位提供的环境保护程度。                                                                                                                                                                                                                                 |
| `protec`                     | (_可选_) 一个阻力值数组，用于确定此仿生器在指定身体部位提供的保护类型。                                                                                                                                                                                                             |
| `occupied_bodyparts`         | (_可选_) 一个描述仿生器占用身体部位的列表。这将阻止其他仿生器使用这些部位。例如，如果一个仿生器占用了左手，那么另一个需要左手的仿生器将无法安装。                                                                                                                                   |
| `flags`                      | (_可选_) 与此仿生器相关联的标志列表，用于控制行为或提供特殊属性。                                                                                                                                                                                                                   |
| `installation_requirement`   | (_可选_) 一个描述安装此仿生器所需工具和/或物品的对象。                                                                                                                                                                                                                              |
| `fuel_efficiency`            | (_可选_) 转换为动力的燃料能量的比例。 (默认值: `0`)                                                                                                                                                                                                                                 |
| `passive_fuel_efficiency`    | (_可选_) 被动转换为动力的燃料能量的比例。适用于使用永久燃料的CBM，如 `muscle`（肌肉）, `wind`（风）或 `sun_light`（阳光）。 (默认值: `0`)                                                                                                                                           |
| `exothermic_power_gen`       | (_可选_) 如果为真，该生物体内植入器在产生能量时会释放热量。 (默认值: `false`)                                                                                                                                                                                                       |
| `coverage_power_gen_penalty` | (_可选_) 覆盖范围减少燃料效率的比例。浮点数在0.0和1.0之间。 (默认值: `nullopt`)                                                                                                                                                                                                     |
| `power_gen_emission`         | (_可选_) 当该生物体内植入器产生能量时，释放的 `emit_id` 字段。Emit_ids 在 `emit.json` 中定义。                                                                                                                                                                                      |
| `stat_bonus`                 | (_可选_) 被动属性加成列表。属性如下: "DEX"（敏捷）, "INT"（智力）, "STR"（力量）, "PER"（感知）。                                                                                                                                                                                   |
| `activated_eocs`             | (_可选_) 当成功激活此CBM时，试图激活的 effect_on_conditions 列表。                                                                                                                                                                                                                  |
| `processed_eocs`             | (_可选_) 当此CBM处于活动状态时，每回合尝试激活的 effect_on_conditions 列表。                                                                                                                                                                                                        |
| `deactivated_eocs`           | (_可选_) 当成功停用此CBM时，试图激活的 effect_on_conditions 列表。                                                                                                                                                                                                                  |
| `enchantments`               | (_可选_) 由该CBM应用的附魔列表（有关附魔的说明，请参阅MAGIC.md。注意：附魔不一定是魔法。）值可以是附魔的id或附魔的内联定义。                                                                                                                                                        |
| `learned_spells`             | (_可选_) 安装此CBM时获得的 {spell:level} 映射，卸载时失去。安装时自动获得法术类。                                                                                                                                                                                                   |
| `learned_proficiencies`      | (_可选_) 安装此CBM时获得的熟练度id数组，卸载时失去。                                                                                                                                                                                                                                |
| `installation_requirement`   | (_可选_) 指向要求的id，该要求定义安装此CBM所需的工具和组件。                                                                                                                                                                                                                        |
| `vitamin_absorb_mod`         | (_可选_) 维生素吸收修正，影响所有维生素。 (默认值: `1.0`)                                                                                                                                                                                                                           |
| `dupes_allowed`              | (_可选_) 布尔值，确定是否允许安装多个此类生物体内植入器。默认为false。                                                                                                                                                                                                              |
| `cant_remove_reason`         | (_可选_) 显示为无法卸载的原因的字符串消息。除了`""`之外的任何值都将阻止卸载生物体内植入器。格式包括两个`%s`，例如：`The Telescopic Lenses are part of %1$s eyes now. Removing them would leave %2$s blind.` (现在望远镜镜片是%1$s眼睛的一部分。取下它们会让%2$s失明) (默认值: `""`) |
| `social_modifiers`           | (_可选_) Json对象，带有可选成员：persuade（说服），lie（撒谎）和intimidate（恐吓），向这些类型的社交检查添加或减去该数额。                                                                                                                                                          |
| `dispersion_mod`             | (_可选_) 修改火器散布的修正。                                                                                                                                                                                                                                                       |
| `activated_on_install`       | (_可选_) 安装时自动激活此生物体内植入器。                                                                                                                                                                                                                                           |

```JSON
{
    "id"           : "bio_batteries",
    "name"         : "Battery System (电池系统)",
    "active"       : false,
    "act_cost"     : 0,
    "time"         : 1,
    "fuel_efficiency": 1,
    "stat_bonus": [ [ "INT", 2 ], [ "STR", 2 ] ],
    "fuel_options": [ "battery" ],
    "fuel_capacity": 500,
    "encumbrance"  : [ [ "torso", 10 ], [ "arm_l", 10 ], [ "arm_r", 10 ], [ "leg_l", 10 ], [ "leg_r", 10 ], [ "foot_l", 10 ], [ "foot_r", 10 ] ],
    "description"  : "You have a battery draining attachment, and thus can make use of the energy contained in normal, everyday batteries. Use 'E' to consume batteries. (你有一个电池排放附件，因此可以利用普通日常电池中的能量。使用'E'消耗电池。)",
    "canceled_mutations": ["HYPEROPIC"],
    "mutation_conflicts": [ "HUGE" ],
    "installation_requirement": "sewing_standard",
    "included_bionics": ["bio_blindfold"]
},
{
    "id": "bio_purifier",
    "type": "bionic",
    "name": "Air Filtration System (空气过滤系统)",
    "description": "Surgically implanted in your trachea is an advanced filtration system.  If toxins, or airborne diseases find their way into your windpipe, the filter will attempt to remove them. (在你的气管中植入了一个先进的过滤系统。如果毒素或空气传播的疾病进入你的气管，过滤器会试图将它们去除。)",
    "occupied_bodyparts": [ [ "torso", 4 ], [ "mouth", 2 ] ],
    "env_protec": [ [ "mouth", 7 ] ],
    "protec": [
      [ "arm_l", { "bash": 3, "cut": 3, "bullet": 3 } ],
      [ "arm_r", { "bash": 3, "cut": 3, "bullet": 3 } ],
      [ "hand_l", { "bash": 3, "cut": 3, "bullet": 3 } ],
      [ "hand_r", { "bash": 3, "cut": 3, "bullet": 3 } ]
    ],
    "flags": [ "BIONIC_NPC_USABLE" ]
}
````

仿生效果是在代码中定义的，仅通过 JSON 无法创建新效果。
当添加一个新的仿生器时，如果它没有包含在另一个仿生器里，你还必须在`data/json/items/bionics.json`中添加相应的 CBM 物品。即使是对于一个有缺陷的仿生器。

### Damage Types (伤害类型)

| 字段                | 描述                                                                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | 伤害类型在物品信息屏幕中的保护值中显示的名称。                                                                                                |
| `skill`             | _(可选)_ 确定处理此伤害类型时使用的技能。(默认为无)                                                                                           |
| `physical`          | _(可选)_ 将此伤害类型标识为来自物理来源。(默认为 false)                                                                                       |
| `melee_only`        | _(可选)_ 将此伤害类型标识为来自近战武器和攻击。(默认为 false)                                                                                 |
| `edged`             | _(可选)_ 将此伤害类型标识为来自尖锐或尖的武器或工具。(默认为 false)                                                                           |
| `environmental`     | _(可选)_ 此伤害类型对应于环境来源。目前影响物品或护甲是否包括针对此伤害类型的环境防护。(默认为 false)                                         |
| `material_required` | _(可选)_ 确定材料是否必须为此伤害类型定义阻力。(默认为 false)                                                                                 |
| `mon_difficulty`    | _(可选)_ 确定此伤害类型是否应影响怪物的难度等级。(默认为 false)                                                                               |
| `no_resist`         | _(可选)_ 将此伤害类型标识为无法抵抗(即"纯"伤害)。(默认为 false)                                                                               |
| `immune_flags`      | _(可选)_ 一个带有两个可选字段的对象：`"character"` 和 `"monster"`。两个内部字段分别列出一组使角色或怪物对此伤害类型免疫的角色标志和怪物标志。 |
| `magic_color`       | _(可选)_ 确定在法术中使用时哪种颜色标识此伤害类型。(默认为"black")                                                                            |
| `derived_from`      | _(可选)_ 一个数组，确定应如何计算此伤害类型在护甲防护和怪物抗性值方面的计算。第一个值是源伤害类型，第二个值是应用于源伤害类型计算的修饰符。   |
| `onhit_eocs`        | _(可选)_ 当怪物或角色用此伤害类型击中另一个怪物或角色时激活的一组效果条件。在这种情况下，`u` 指的是伤害来源，`npc` 指的是伤害目标。           |

```JSON
{
    "//": "stabbing/piercing damage（刺穿/穿刺伤害）", // 描述：这是一种伤害类型的描述
    "id": "stab", // 唯一标识符：这是伤害类型的唯一标识符
    "type": "damage_type", // 条目类型：这是条目的类型
    "melee_only": true, // 是否只适用于近战：这种伤害类型是否只适用于近战
    "physical": true, // 是否是物理伤害：这种伤害是否是物理伤害
    "edged": true, // 是否是边缘伤害：这种伤害是否是边缘伤害
    "magic_color": "light_red", // 魔法颜色：这种伤害在魔法颜色系统中的颜色
    "name": "pierce", // 显示名字：这种伤害的显示名字
    "skill": "stabbing", // 相关技能：这种伤害相关的技能
    "//2": "derived from cut only for monster defs（仅从怪物定义中派生的剪切）", // 派生信息：这是另一种注释，主要是关于派生的信息
    "derived_from": [ "cut", 0.8 ], // 派生来源和比例：这种伤害是从哪种伤害派生的，以及派生的比例
    "immune_flags": { "character": [ "STAB_IMMUNE" ] } // 免疫标志：这是角色对这种伤害的免疫标志
},
{
    "//": "例如：电击", // 这是一种伤害类型的描述
    "id": "electric", // 这是伤害类型的唯一标识符
    "type": "damage_type", // 这是条目的类型
    "physical": false, // 这种伤害是否是物理伤害
    "magic_color": "light_blue", // 这种伤害的颜色
    "name": "electric", // 这种伤害的显示名字
    "immune_flags": { 
        "character": [ "ELECTRIC_IMMUNE" ], 
        "monster": [ "ELECTRIC", "ELECTRIC_FIELD" ] 
    }, // 这是角色和怪物对这种伤害的免疫标志
    "onhit_eocs": [ "EOC_ELECTRIC_ONHIT" ] // 这是此伤害类型的特殊效果，当命中时触发
}

### Damage Info Ordering (伤害信息排序)

伤害类型在物品信息界面的各个部分显示，表示护甲阻力、近战伤害等。
使用 `damage_info_order`，我们可以重新排列这些显示的顺序，甚至确定它们是否可以显示。

| 字段           | 描述                                                                                                                                                                                                                                                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | 唯一标识符，必须对应于现有的 `damage_type`                                                                                                                                                                                                                                                                                                          |
| `info_display` | _(可选)_ 确定在保护值中显示此伤害类型的详细程度。有效值为 "detailed"（详细）, "basic"（基本）和 "none"（无）。(默认为 "none")                                                                                                                                                                                                                       |
| `verb`         | _(可选)_ 描述如何应用此伤害类型的动词（例如："bashing"）。用于物品信息的近战部分。                                                                                                                                                                                                                                                                  |
| `*_info`       | _(可选)_ 一个对象，确定此伤害类型在物品信息指定部分的顺序和可见性。`"order"` 确定在此部分的伤害类型列表中将在哪里显示，`"show_type"` 确定是否在此部分显示此伤害类型。可能的部分包括：`bionic_info`（仿生信息）, `protection_info`（保护信息）, `pet_prot_info`（宠物保护信息）, `melee_combat_info`（近战战斗信息）和 `ablative_info`（消耗信息）。 |

```JSON
{
  "id": "acid(酸)",
  "type": "damage_info_order(伤害信息顺序)",
  "info_display": "basic(基本)",
  "verb": "corroding(腐蚀)",
  "bionic_info": { "order": 500, "show_type": true(显示类型) },
  "protection_info": { "order": 800, "show_type": true(显示类型) },
  "pet_prot_info": { "order": 500, "show_type": true(显示类型) },
  "melee_combat_info": { "order": 500, "show_type": false(不显示类型) },
  "ablative_info": { "order": 500, "show_type": false(不显示类型) }
}
```

### Dreams (梦境)

| Identifier (标识符) | Description (描述)                                                                     |
| ------------------- | -------------------------------------------------------------------------------------- |
| `messages`          | List of potential dreams(潜在梦境列表).                                                |
| `category`          | Mutation category needed to dream(需要的突变类别).                                     |
| `strength`          | Mutation category strength required (1 = 20-34, 2 = 35-49, 3 = 50+)(突变类别强度要求). |

```C++
{
    "messages" : [
        "You have a strange dream about birds(你做了一个关于鸟的奇怪梦).",
        "Your dreams give you a strange feathered feeling(你的梦境给你一种奇怪的羽毛感觉)."
    ],
    "category" : "MUTCAT_BIRD(鸟类突变类别)",
    "strength" : 1(强度1)
}
```

### Disease (疾病)

| Identifier (标识符)  | Description (描述)                                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                 | Unique ID(唯一标识符). 必须是一个连续的单词，如有必要请使用下划线.                                                   |
| `min_duration`       | The minimum duration the disease can last(疾病持续的最短时间). 使用字符串 "x m", "x s","x d".                        |
| `max_duration`       | The maximum duration the disease can last(疾病持续的最长时间).                                                       |
| `min_intensity`      | The minimum intensity of the effect applied by the disease(疾病产生的效果的最小强度).                                |
| `max_intensity`      | The maximum intensity of the effect(效果的最大强度).                                                                 |
| `health_threshold`   | The amount of health above which one is immune to the disease(免疫疾病所需的健康值). 必须在 -200 和 200 之间. (可选) |
| `symptoms`           | The effect applied by the disease(疾病产生的效果).                                                                   |
| `affected_bodyparts` | The list of bodyparts on which the effect is applied(效果作用的身体部位列表). (可选，默认为 bp_null)                 |

```json
{
  "type": "disease_type(疾病类型)",
  "id": "bad_food(不良食物)",
  "min_duration": "6 m(6 分钟)",
  "max_duration": "1 h(1 小时)",
  "min_intensity": 1(最小强度1),
  "max_intensity": 1(最大强度1),
  "affected_bodyparts": ["TORSO(躯干)"],
  "health_threshold": 100(健康阈值100),
  "symptoms": "foodpoison(食物中毒)"
}
```

### Emitters （发射器）

发射器会在其位置周围随机放置 [fields](#field-types-场) - 对于怪物的发射，每回合发射一次；对于家具/地形，每十秒发射一次。

| 标识符      | 描述                                                                                                                                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | 唯一 ID                                                                                                                                                                                                                                        |
| `field`     | 发射的场类型                                                                                                                                                                                                                                   |
| `intensity` | 生成的场的初始强度（生成多个场仍会导致其强度增加）。默认值 1。                                                                                                                                                                                 |
| `chance`    | 发射器发射的**百分比**概率，值大于 100 时，将通过 `roll_remainder` 增加放置场的数量（例如：`chance: 150` 有 50% 的时间放置一个场，另外 50% 的时间放置两个场）。未通过概率滚动将在滚动时禁用整个发射，而不是对每个 `qty` 进行滚动！默认值 100。 |
| `qty`       | 放置的场的数量。场使用场传播规则放置，允许场扩散。默认值 1。                                                                                                                                                                                   |

```JSON
{
  "id": "emit_shock_burst", //  "id"表示这个特定对象的唯一标识符。在这个例子中，它被命名为"emit_shock_burst"。
  "type": "emit", //  "type"描述了对象的类型。在这个例子中，它是"emit"。这表示这个对象是一个发射器。
  "field": "fd_electricity", //  "field"指的是发射器生成的场。在这个例子中，它是"fd_electricity"，这表示这个发射器生成的是电场。
  "intensity": 3, //  "intensity"表示场的强度。在这个例子中，它的值为3，这表示电场的强度为3。
  "chance": 1, //  "chance"表示生成场的概率。在这个例子中，它的值为1，这表示每次都会生成电场。
  "qty": 10 //  "qty"表示生成场的数量。在这个例子中，它的值为10，这表示每次都会生成10个电场。
}
```

### Item Groups （物品组）

物品组已经扩展，请查看 [详细文档](ITEM_SPAWN.md) 以了解它们的新描述。
这里列出的语法仍然有效。

| 标识符   | 描述                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------- |
| `id`     | 唯一 ID。必须是一个连续的单词，如果需要，请使用下划线                                             |
| `items`  | 潜在物品 ID 的列表。物品的生成几率为 x/T，其中 X 是与特定物品相关的值，T 是组中所有物品值的总和。 |
| `groups` | ??                                                                                                |

```C++
{
    "id":"forest", // 唯一标识符：这是物品分布的唯一标识符
    "items":[ // 物品列表：这是在此物品分布中可找到的物品及其概率
        ["rock", 40], // 物品和概率：这是"rock"（石头）的出现概率
        ["stick", 95], // 物品和概率：这是"stick"（棍子）的出现概率
        ["mushroom", 4], // 物品和概率：这是"mushroom"（蘑菇）的出现概率
        ["mushroom_poison", 3], // 物品和概率：这是"mushroom_poison"（毒蘑菇）的出现概率
        ["mushroom_magic", 1], // 物品和概率：这是"mushroom_magic"（魔法蘑菇）的出现概率
        ["blueberries", 3] // 物品和概率：这是"blueberries"（蓝莓）的出现概率
    ],
    "groups":[] // 物品组：这是包含在此物品分布中的物品组，此处为空，表示没有包含任何物品组
}
```

### Item Category (物品类别)

当您按类别整理库存时，这些类别将显示出来。

| 标识符           | 描述                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | 唯一 ID。必须是一个连续的单词，如有必要，请使用下划线进行连接                                                                                                                                                                                                                                                                                                                                                              |
| `name`           | 类别名称。这是在游戏中打开库存时显示的内容。                                                                                                                                                                                                                                                                                                                                                                               |
| `zone`           | 相应的 loot_zone（见 loot_zones.json）                                                                                                                                                                                                                                                                                                                                                                                     |
| `sort_rank`      | 用于在显示时对类别排序。较低的值优先显示                                                                                                                                                                                                                                                                                                                                                                                   |
| `priority_zones` | 当设置时，此类别中的物品将根据满足的条件进行优先排序。如果用户在区域管理器中没有优先区域，则物品将按照在“zone”属性中设置的区域进行排序。这是一个对象列表。每个对象有 3 个属性：ID：LOOT_ZONE 的 ID（见 LOOT_ZONES.json），filthy：布尔值。设置此项意味着此类别的肮脏物品将被排序到优先区域，flags：标记数组                                                                                                                |
| `spawn_rate`     | 设置可能生成的该类别物品数量。检查 item 类别的`spawn_rate`值。如果`spawn_chance`为 0.0，物品将不会生成。如果`spawn_chance`大于 0.0 且小于 1.0，系统将进行随机滚动（0.0-1.0），以检查物品是否有生成机会。如果`spawn_chance`大于或等于 1.0，将增加从相同类别生成额外物品的机会。物品将从原始物品所在的物品组中获取。因此，此参数不会影响在地图生成中设置为独立生成的物品的额外生成机会（例如通过使用`item`或`place_item`）。 |

```C++
{
  "id": "armor", //  "id"表示这个特定对象的唯一标识符。在这个例子中，它被命名为"armor"。
  "name": "ARMOR", //  "name"是这个对象的名称。在这个例子中，它是"ARMOR"。
  "zone": "LOOT_ARMOR", //  "zone"是这个对象所在的区域。在这个例子中，它是"LOOT_ARMOR"，表示这个对象位于名为"LOOT_ARMOR"的区域中。
  "sort_rank": -21, //  "sort_rank"是这个对象在其所在区域中的排序等级。在这个例子中，它的值为-21。
  "priority_zones": [ { "id": "LOOT_FARMOR", "filthy": true, "flags": [ "RAINPROOF" ] } ],  //  "priority_zones"是一个包含优先区域信息的数组。在这个例子中，有一个优先区域，其"id"为"LOOT_FARMOR"，"filthy"属性为true，表示这个区域是脏的，"flags"属性包含一个"RAINPROOF"标志，表示这个区域是防雨的。
  "spawn_rate": 0.5 //  "spawn_rate"表示这个对象的生成率。在这个例子中，它的值为0.5，表示这个对象的生成率为50%。
}
```

### Item Properties（物品属性）

属性绑定到物品的类型定义，代码会检查它们以进行特殊行为，例如下面的属性使得容器在被填充超过 75%并被扔出时破裂。

```json
{
  "properties": [["burst_when_filled", "75"]]
}
```

### Item Variables（物品变量）

物品变量绑定到物品本身，并用于序列化特殊行为。例如，折叠车辆会将折叠后的车辆名称和零件清单（零件类型 ID、零件损坏、降级等）序列化为 JSON 字符串，以便在展开时使用。

它们可以源自代码 - 就像上面折叠车辆的示例一样。

或者，物品变量也可以源自物品的原型。可以在物品定义中指定它们，添加`variables`键，然后编写键值映射。

示例：

```json
    "variables": {
      "special_key": "spiffy value"
    }
```

这将使从该原型实例化的任何物品都被分配此变量。一旦物品生成，原型上设置的变量将不再影响物品的变量。如果设置了`reset_item_vars`标志，迁移可以清除物品的变量并重新分配原型变量。

### Item faults（物品故障）

故障可以用于定义物品的更专门化的损坏。

```C++
{
  "type": "fault",
  "id": "fault_gun_chamber_spent", // 故障的唯一ID
  "name": { "str": "Spent casing in chamber（膛内弹壳未排出）" }, // 用于显示的故障名称
  "description": "This gun currently...（这把枪目前...）", // 故障描述
  "item_prefix": "jammed（卡壳）", // 可选字符串，具有此故障的物品将以此为前缀
  "flags": [ "JAMMED_GUN" ] // 可选标志，详见下方
}
```

`flags` 触发硬编码的 C++ 代码块以提供效果，请参阅 [JSON_FLAGS.md](JSON_FLAGS.md#faults) 以查看可能的标志列表。

### Item fault fixes（物品故障修复）

故障修复是修复故障的方法，修复可以选择添加其他故障、修改损坏、降级和物品变量。

```C++
{
  "type": "fault_fix",
  "id": "mend_gun_fouling_clean", // 修复的唯一ID
  "name": "Clean fouling（清除火药残留）", // 用于显示的名称
  "success_msg": "You clean your %s.（你清洁了你的 %s。）", // 修复应用时打印的消息
  "time": "50 m", // 应用修复所需时间
  "faults_removed": [ "fault_gun_dirt", "fault_gun_blackpowder" ], // 修复应用时移除的故障
  "faults_added": [ "fault_gun_unlubricated" ], // 修复应用时添加的故障
  "skills": { "mechanics": 1 }, // 应用修复所需的技能
  "set_variables": { "dirt": "0" }, // 修复应用时在物品上设置的变量
  "requirements": [ [ "gun_cleaning", 1 ] ], // 要求数组，详见下方
  "mod_damage": 1000, // 修复应用时修改物品上的损坏程度，可以为负数以修复
  "mod_degradation": 50 // 修复应用时修改物品上的降级程度，可以为负数以减少降级
}
```

`requirements` 是一个要求数组，可以用两种方式指定：

- 一个数组，通过它的 id 和一个乘数指定已定义的要求：`[ "gun_lubrication", 2 ]` 将添加 `gun_lubrication` 要求，并将所需组件和工具弹药乘以 2。
- 内联对象，以与[配方定义它](#recipe-requirements)相同的方式指定要求。

### 材料（Materials）

| 标识符（Identifier）   | 说明                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                   | 唯一 ID。小写的蛇形命名法（snake_case）。必须是一个连续的单词，如有必要可使用下划线。                         |
| `name`                 | 游戏内显示的名称。                                                                                            |
| `resist`               | 决定该材料抵抗值的对象。                                                                                      |
| `chip_resist`          | 返回物品本身受到攻击时的抵抗损坏值。                                                                          |
| `bash_dmg_verb`        | 材料受到钝击伤害时使用的动词。                                                                                |
| `cut_dmg_verb`         | 材料受到切割伤害时使用的动词。                                                                                |
| `dmg_adj`              | 按照损坏程度递增的描述添加到损坏物品中。                                                                      |
| `dmg_adj`              | 用于描述材料损坏状态的形容词。                                                                                |
| `density`              | 影响车辆碰撞伤害，密度较大的部件相对于密度较小的部件具有优势。                                                |
| `wind_resist`          | 百分比 0-100。此材料阻挡风的效果如何。数值越高越好。如果一个物品所使用的所有材料都没有指定数值，则默认为 99。 |
| `vitamins`             | 材料中的维生素。通常会被物品特定数值覆盖。一个表示理想每日需求百分比的整数。                                  |
| `specific_heat_liquid` | 材料未冻结时的比热（J/(g K)）。默认为 4.186 - 水。                                                            |
| `specific_heat_solid`  | 材料冻结时的比热（J/(g K)）。默认为 2.108 - 水。                                                              |
| `latent_heat`          | 材料的熔化潜热（J/g）。默认为 334。                                                                           |
| `freezing_point`       | 该材料的冰点（摄氏度）。默认为 0 摄氏度（32 华氏度）。                                                        |
| `edible`               | 可选布尔值。默认为 false。                                                                                    |
| `rotting`              | 可选布尔值。默认为 false。                                                                                    |
| `soft`                 | 对于柔软的材料，其长度不会影响装入容器或通过容器开口。默认为 false。                                          |
| `conductive`           | 如果材料导电，则为 true，默认为 false                                                                         |
| `reinforces`           | 可选布尔值。默认为 false。                                                                                    |

共有七个 -resist 参数：acid（酸性），bash（钝击），chip（削片），cut（切割），elec（电击），fire（火焰）和 bullet（子弹）。这些都是整数值；默认值为 0，它们可以为负数以承受更多伤害。

```JSON
{
  "type": "material", //  "type"字段：这是一个“材料”类型的对象。
  "id": "hflesh", //  "id"字段：这个特定材料的唯一标识符。在这个例子中，它被命名为"hflesh"。
  "name": "Human Flesh", //  "name"字段：这个材料的名称。在这个例子中，它是"Human Flesh"。
  "density": 5, //  "density"字段：这个材料的密度。在这个例子中，它的值为5。
  "specific_heat_liquid": 3.7, //  "specific_heat_liquid"字段：这个材料在液态时的比热。在这个例子中，它的值为3.7。
  "specific_heat_solid": 2.15, //  "specific_heat_solid"字段：这个材料在固态时的比热。在这个例子中，它的值为2.15。
  "latent_heat": 260, //  "latent_heat"字段：这个材料的潜热。在这个例子中，它的值为260。
  "edible": true, //  "edible"字段：这个材料是否可以食用。在这个例子中，它的值为true，表示这个材料是可食用的。
  "rotting": true, //  "rotting"字段：这个材料是否会腐烂。在这个例子中，它的值为true，表示这个材料会腐烂。
  "resist": { "bash": 1, "cut": 1, "acid": 1, "heat": 1, "bullet": 1 }, //  "resist"字段：这个材料对各种类型的伤害的抗性。在这个例子中，它对所有类型的伤害的抗性都是1。
  "chip_resist": 2, //  "chip_resist"字段：这个材料对碎片的抗性。在这个例子中，它的值为2。
  "dmg_adj": [ "bruised", "mutilated", "badly mutilated", "thoroughly mutilated" ], //  "dmg_adj"字段：描述了这个材料受到伤害后的各种状态。在这个例子中，它的状态可以是"bruised"、"mutilated"、"badly mutilated"或"thoroughly mutilated"。
  "bash_dmg_verb": "bruised", //  "bash_dmg_verb"字段：表示这个材料受到撞击伤害后的状态。在这个例子中，它的状态是"bruised"。
  "cut_dmg_verb": "sliced", //  "cut_dmg_verb"字段：表示这个材料受到切割伤害后的状态。在这个例子中，它的状态是"sliced"。
  "vitamins": [ [ "calcium", 0.1 ], [ "vitB", 1 ], [ "iron", 1.3 ] ], //  "vitamins"字段：表示这个材料所含的维他命。在这个例子中，它包含钙（0.1）、维他命B（1）和铁（1.3）。
  "burn_data": [ //  "burn_data"字段：表示这个材料燃烧时的各种属性。
    { "fuel": 1, "smoke": 1, "burn": 1, "volume_per_turn": "2500_ml" }, //  在这个例子中，第一阶段的燃料值为1，烟雾值为1，燃烧值为1，每轮燃烧体积为2500毫升。
    { "fuel": 2, "smoke": 3, "burn": 2, "volume_per_turn": "10000_ml" }, //  在第二阶段，燃料值为2，烟雾值为3，燃烧值为2，每轮燃烧体积为10000毫升。
    { "fuel": 3, "smoke": 10, "burn": 3 } //  在第三阶段，燃料值为3，烟雾值为10，燃烧值为3。注意，这一阶段没有定义每轮燃烧体积。
  ]
}
```

请注意，上述示例中的维生素值是浮点数，而非整数。这可能是不正确的；它们应该被替换为整数。

#### Fuel data (燃料数据)

每种材料都可以具有燃料数据，用于确定每单位消耗产生的马力。目前，气体和等离子体实际上不能作为燃料。

如果燃料具有 PERPETUAL 标志，那么由它驱动的发动机永远不会使用任何燃料。这主要是为肌肉伪燃料设计的，但模组也可以利用它制作永动机。

```C++
"fuel_data" : {
    "energy": "34200_kJ",        // 每升燃料的能量。
                                 // https://en.wikipedia.org/wiki/Energy_density
   "perpetual": true,            // 这种材料是像`wind`、`sunlight`、`muscle`、`animal`和`metabolism`这样的永久燃料。
   "pump_terrain": "t_gas_pump", // 可选。燃料泵的地形ID（如果有的话）。
   "explosion_data": {           // 可选，对于可能导致爆炸的燃料
        "chance_hot": 2,         // 当受到热能武器攻击时，1/2的几率发生爆炸
        "chance_cold": 5,        // 当受到其他武器攻击时，1/5的几率发生爆炸
        "factor": 1.0,           // 爆炸系数 - 数值越大，爆炸越猛烈
        "fiery": true,           // 对于火焰爆炸为true
        "size_factor": 0.1       // 规模系数 - 数值越大，剩余燃料增加爆炸威力越多
    }
}
```

#### Burn data（燃烧数据）

每种材料都可以有燃烧数据，用于确定其与火焰的相互作用。从根本上讲，火焰的强度、烟雾产生和持续时间取决于消耗物品的体积。然而，这些值允许某些物品在给定的体积下燃烧更多，甚至扑灭或抑制火焰的生长。

请注意，`burn_data`是按材料定义的，但物品可能由多种材料制成。对于这种情况，将分别计算物品的每种材料，就像它是多个对应单一材料的物品一样。

```C++
"burn_data": [
    { "immune": true,                    // 默认为 false，可选布尔值。如果为 true，则使得结果的材料对火焰免疫。因此，它既不能提供燃料，也不能被燃烧或损坏。
	"fuel": 300,                     // 浮点值，确定该材料向火焰添加的时间和强度。负值将从火焰中减去燃料，使其熄灭。
	                                 // 与液体相对应的 phase ID 的物品应该由具有 >= 200 值的材料制成，如果它们是可燃的。
	"smoke": 0,                      // 浮点值，确定该材料在燃烧时产生的烟雾量。
	"volume_per_turn": "750 ml",     // 如果非零且低于物品的体积，则按 volume_per_turn / volume 缩放燃烧
	"burn": 1 }                      // 浮点值，确定火焰将此材料制成的物品转化为燃料的速度。不影响给定材料的给定体积所提供的总燃料。
    ],
```

### Monster Groups（怪物组）

#### Group definition（群组定义）

| 标识符                  | 描述                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                  | 唯一 ID。必须是一个连续的单词，如有必要，请使用下划线。                                                                                                |
| `default`               | (_可选_) 默认怪物，用于表示怪物群。 (默认：群组中 `weight` 最高的怪物)                                                                                 |
| `monsters`              | 为了选择用于生成的怪物，游戏创建等于所有 `weight` 总和的条目并选择一个。每个怪物将拥有等于其 `weight` 的条目数量。请参阅下表了解如何构建单个怪物定义。 |
| `is_safe`               | (_可选_) (布尔值)检查以防止触发安全模式警告，目前无关紧要。                                                                                            |
| `is_animal`             | (_可选_) (布尔值)检查该组是否只有普通动物，目前无关紧要。                                                                                              |
| `replace_monster_group` | (_可选_) (布尔值)检查随着游戏时间的推移，该组是否应完全被另一个怪物组替换 - 不影响已经生成的怪物，因此主要被怪物进化取代。                             |
| `new_monster_group_id`  | (_可选_) (字符串)应替换此组的怪物组的 ID。                                                                                                             |
| `replacement_time`      | (_可选_) (整数)在以天为单位的时间之前，该组应被新组替换。最后的替换日期由 `replacement_time * evolution factor` 计算。                                 |

#### Monster/Subgroup definition（怪物/子分组定义）

在怪物分组中，在`"monsters"`数组中，您可以定义`"group"`对象以及`"monster"`对象。分组使用与怪物相同的字段，但处理方式不同。当游戏查找可能从怪物组中生成的怪物时，如果存在子分组，它将递归地检查子分组。子分组的权重与怪物对象一样定义，因此生成几率仅对顶级对象有关。

| 标识符            | 描述                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `monster`         | 怪物的唯一 ID，例如`"mon_zombie"`。表示此条目是一个"monster"。                                                                                                                                                                                                                                                                                         |
| `group`           | 子分组的唯一 ID，例如`"GROUP_ZOMBIE"`。表示此条目是一个"monstergroup"。                                                                                                                                                                                                                                                                                |
| `weight`          | （_可选_）发生几率（`weight` / 分组中的总`weight`）（默认值：1）                                                                                                                                                                                                                                                                                       |
| `cost_multiplier` | （_可选_）在生成有限数量的怪物时，此定义中每个怪物应计数为多少个。（默认值：1）                                                                                                                                                                                                                                                                        |
| `pack_size`       | （_可选_）此组中应一起生成的怪物的最小和最大数量。（默认值：`[1,1]`）                                                                                                                                                                                                                                                                                  |
| `conditions`      | （_可选_）条件限制怪物何时生成。有效选项：`SUMMER`（夏季）, `WINTER`（冬季）, `AUTUMN`（秋季）, `SPRING`（春季）, `DAY`（白天）, `NIGHT`（夜晚）, `DUSK`（黄昏）, `DAWN`（黎明）。多个昼夜条件（`DAY`，`NIGHT`，`DUSK`，`DAWN`）将组合在一起，以便任何这些条件使生成有效。多个季节条件（`SUMMER`，`WINTER`，`AUTUMN`，`SPRING`）将组合在一起，这样任何 |

```C++
// 示例：只包含"monster"条目的monstergroup（怪物组）：
{
  "name" : "GROUP_ANT", // 名称：怪物组的唯一标识符
  "default" : "mon_ant", // 默认：如果没有选择任何怪物，将会默认生成这个怪物
  "monsters" : [ // 怪物：这是一个包含所有可能生成怪物的列表
    { "monster" : "mon_ant", "weight" : 870, "cost_multiplier" : 0 }, // 怪物：这是要生成的怪物的类型；权重：怪物出现的权重；成本倍增器：影响怪物的生成成本
    { "monster" : "mon_ant_larva", "weight" : 40, "cost_multiplier" : 0 },
    { "monster" : "mon_ant_soldier", "weight" : 90, "cost_multiplier" : 5 },
    { "monster" : "mon_ant_queen", "weight" : 0, "cost_multiplier" : 0 },
    { "monster" : "mon_thing", "weight" : 100, "cost_multiplier" : 0, "pack_size" : [3,5], "conditions" : ["DUSK","DAWN","SUMMER"] }, // 包大小：定义生成怪物的数量范围；条件：定义怪物出现的条件
    { "monster" : "mon_santa", "weight" : 500, "event" : "christmas" } // 事件：定义怪物在特定事件（如圣诞节）时出现
  ]
}
// 示例：包含子分组的monstergroup：
{
  "type": "monstergroup",
  "name": "GROUP_MIGO_RAID",
  "//": "mi-go的元组，用于在行动中的生成。",
  "monsters": [
    // 使用"GROUP_MI-GO_BASE_CAPTORS"组作为生成源，权重为150，生成成本乘数为6，每次生成1到2个怪物
    { "group": "GROUP_MI-GO_BASE_CAPTORS", "weight": 150, "cost_multiplier": 6, "pack_size": [ 1, 2 ] }, 
    // 使用"GROUP_MI-GO_SCOUT_TOWER"组作为生成源，权重为100，生成成本乘数为4，每次生成0到2个怪物
    { "group": "GROUP_MI-GO_SCOUT_TOWER", "weight": 100, "cost_multiplier": 4, "pack_size": [ 0, 2 ] }, 
    // 生成一个mi-go守卫怪物，权重为200，生成成本乘数为4
    { "monster": "mon_mi_go_guard", "weight": 200, "cost_multiplier": 4 }, 
    // 生成一个mi-go怪物，权重为500，生成成本乘数为2，每次生成3到4个怪物
    { "monster": "mon_mi_go", "weight": 500, "cost_multiplier": 2, "pack_size": [ 3, 4 ] } 
  ]
}
```

### Monster Factions（怪物派系）

| 标识符（Identifier） | 描述（Description）                                                        |
| -------------------- | -------------------------------------------------------------------------- |
| `name`               | 唯一 ID。必须是一个连续的单词，如果需要，请使用下划线。                    |
| `base_faction`       | 可选的基本派系。从中继承与其他派系的关系，以及其他派系与此派系的关系检查。 |
| `by_mood`            | 当生气时对这个派系表示敌意，其他情况保持中立。默认对所有其他派系的态度。   |
| `neutral`            | 始终对这个派系保持中立。                                                   |
| `friendly`           | 始终对这个派系保持友好。默认情况下，一个派系对自己是友好的。               |
| `hate`               | 始终对这个派系表示敌意。如果有这个派系的怪物可供选择，将改变目标。         |

```C++
{
    "name"         : "cult（邪教）",
    "base_faction" : "zombie（僵尸）",
    "by_mood"      : ["slime（史莱姆）"],
    "neutral"      : ["nether（下界）"],
    "friendly"     : ["slime（史莱姆）"],
    "hate"         : ["fungus（真菌）"]
}
```

### Monsters（怪物）

参见 [MONSTERS.md（怪物.md）](MONSTERS.md)

### Mutation Categories（变异类别）

参见 [MUTATIONS.md（变异.md）](MUTATIONS.md)

### Names（名字）

```C++
{ "name" : "Aaliyah", "gender" : "female", "usage" : "given" }, // 名字，性别，"given"/"family"/"city"（名/姓/城市名称）。
```

### Profession item substitution（职业物品替换）

定义基于起始特征的起始物品替换。例如，这允许在角色开始时具有羊毛过敏特征时，用非羊毛物品替换羊毛物品。

如果 JSON 对象包含一个"item"成员，它定义了给定物品的替换，如下所示：

```C++
{
  "type": "profession_item_substitutions（职业物品替换）",
  "item": "sunglasses（太阳镜）",
  "sub": [
    { "present": [ "HYPEROPIC（远视）" ], "new": [ "fitover_sunglasses（适合佩戴的太阳镜）" ] },
    { "present": [ "MYOPIC（近视）" ], "new": [ { "fitover_sunglasses（适合佩戴的太阳镜）", "ratio": 2 } ] }
  ]
}
```

这定义了每个类型为 "sunglasses（太阳镜）" 的物品将被替换为：

- 如果角色具有 "HYPEROPIC（远视）" 特质，则替换为一个 "fitover_sunglasses（适合佩戴的太阳镜）" 物品，
- 如果角色具有 "MYOPIC（近视）" 特质，则替换为两个 "fitover_sunglasses（适合佩戴的太阳镜）" 物品。

如果JSON对象包含一个 "trait" 成员，它定义了当角色具有给定特质时适用于多个物品的替换：
```C++
{
  "type": "profession_item_substitutions（职业物品替换）",
  "trait": "WOOLALLERGY（羊毛过敏）",
  "sub": [
    { "item": "blazer（西装外套）", "new": [ "jacket_leather_red（红色皮夹克）" ] },
    { "item": "hat_hunting（猎人帽）", "new": [ { "item": "hat_cotton（棉帽）", "ratio": 2 } ] }
  ]
}
```

这个定义了具有WOOLALLERGY特征的角色会有一些物品替换：

- "blazer"（外套）会被转换成 "jacket_leather_red"（红色皮夹克），
- 每个 "hat*hunting"（狩猎帽）会被转换成 \_two* "hat_cotton"（棉帽）物品。

如果JSON对象包含一个 "bonus"（奖励）成员，它将定义将获得哪些物品，如下所示：

```C++
{
  "type": "profession_item_substitutions",
  "group": {
    "items": [ "winter_pants_army"（冬季军裤）, "undershirt"（内衣）, "socks"（袜子）, "sweatshirt"（运动衫）, "boots_hiking"（登山鞋）, "knife_folding"（折叠刀）, "wristwatch"（手表） ],
    "entries": [
      { "group": "charged_two_way_radio"（充电对讲机） },
      { "group": "charged_matches"（充电火柴） },
      { "item": "ear_plugs"（耳塞） },
      { "item": "water_clean"（清水）, "container-item": "canteen"（水壶） },
      { "item": "m1911"（M1911手枪）, "ammo-item": "45_acp"（.45 ACP子弹）, "charges": 7, "container-item": "holster"（枪套） },
      { "item": "45_acp"（.45 ACP子弹）, "charges": 23 },
      { "item": "garand"（加兰德步枪）, "ammo-item": "3006"（.30-06子弹）, "charges": 8, "contents-item": "shoulder_strap"（肩带） },
      { "item": "3006"（.30-06子弹）, "charges": 8, "container-item": "garandclip"（加兰德弹夹） },
      { "item": "3006"（.30-06子弹）, "charges": 4 }
    ]
  },
  "bonus": {
    "present": [ "ALBINO"（白化病） ],
    "absent": [ "HYPEROPIC"（远视） ]
  }
}
```

### Professions（职业）

职业是指定为JSON对象，其"type"成员设置为"profession"：

```C++
{
    "type": "profession",
    "id": "hunter",
    ...
}
```

id成员应该是职业的唯一id。

支持以下属性（除非另有说明，否则为必填）：

#### `description`（描述）

（字符串）

游戏内描述。

#### `name`（名称）

（字符串或带有 "male"（男性）和 "female"（女性）成员的对象）

游戏内名称，可以是一个中性的字符串，或具有特定性别名称的对象。示例：

```C++
"name": {
    "male": "Groom"（新郎）,
    "female": "Bride"（新娘）
}
```

#### `points`（点数）

(integer)

职业的点数消耗。正值表示消耗点数，负值表示获得点数。

#### `addictions`（成瘾）

（可选，成瘾数组）

初始成瘾列表。列表中的每个条目都应是一个具有以下成员的对象：

- "type": 成瘾的字符串ID（参见 [JSON_FLAGS.md](JSON_FLAGS.md)），
- "intensity": 成瘾的强度（整数）。

示例：

```C++
"addictions": [
    { "type": "nicotine", "intensity": 10 }
]
```

 #### `技能` (Skills)

(可选,技能等级数组)

起始技能列表。列表中的每个条目应该是一个对象,包含以下成员:

- "name":技能的字符串ID(见skills.json),  

- "level":技能的等级(整数)。这会加到角色创建时可以选择的技能等级上。

例如:

```C++
"skills": [
    { "name": "archery", "level": 2 }
]
```

#### `missions`（任务）

（可选，任务ID数组）

此职业/爱好的起始任务列表。

示例：

```JSON
"missions": [ "MISSION_LAST_DELIVERY" ]
```

#### `proficiencies`（熟练度）

（可选，熟练度ID数组）

起始熟练度ID列表。

Example:

```json
"proficiencies": [ "prof_knapping" ]
```

#### `items`（物品）

（可选，包含可选成员 "both"、"male" 和 "female" 的对象）

选择此职业时，玩家开始拥有的物品。可以根据角色的性别指定不同的物品。每个物品列表应为物品ID数组，或物品ID和片段ID对。物品ID可以出现多次，这样物品会被创建多次。这三个列表的语法是相同的。

示例：

```C++
"items": {
    "both": [
        "pants"（裤子）,
        "rock"（石头）,
        "rock"（石头）,
        ["tshirt_text"（T恤）, "allyourbase"（片段ID）],
        "socks"（袜子）
    ],
    "male": [
        "briefs"（男式内裤）
    ],
    "female": [
        "panties"（女式内裤）
    ]
}
```

这给玩家提供了裤子，两块石头，一件带有片段id "allyourbase" 的T恤（给它一个特殊描述），袜子以及（根据性别）内裤或女式内裤。

#### `pets`（宠物）

（可选，字符串mtype_ids数组）

一个由字符串组成的列表，每个字符串都与一个怪物ID相同。
玩家将从这些中开始作为驯服的宠物。

#### `vehicle`（交通工具）

（可选，字符串vproto_id）

一个字符串，与交通工具（vproto_id）相同。
玩家将以这个作为附近的交通工具开始。
（它会找到最近的道路并将其放置在那里，然后在地图上标记为“记住的”）

#### `flags`（标志）

（可选，字符串数组）

标志列表。待办事项：在此处记录这些标志。

- `NO_BONUS_ITEMS` 阻止为这个职业提供奖励物品（例如带有哮喘特征的吸入器）

#### `cbms`（生物芯片）

（可选，字符串数组）

植入角色的CBM ID列表。

#### `traits`（特征）

（可选，字符串数组）

应用于角色的特征/突变ID列表。

#### `requirement`（需求）

（可选，成就ID）

要解锁此职业需要达成的成就

### 配方

制作配方定义为具有以下字段的JSON对象：

```C++
"result": "javelin",         // 生成物品的ID
"byproducts": [ [ "" ] ],    // 可选项（默认：空）。制作此配方时产生的额外物品。
"byproduct_group": [         // 可选项（默认：空）。与上面相同，但使用物品组定义。
  { "item": "item_id_1", "count": [ 1, 4 ] },
  { "item": "item_id_2", "charges": [ 8, 15 ] },
],
"category": "CC_WEAPON",     // 制作配方的类别。解构配方使用CC_NONCRAFT。
"subcategory": "CSC_WEAPON_PIERCING",
"id_suffix": "",             // 可选项（默认：空字符串）。一些后缀，使配方的标识唯一。配方的标识是 "<result-id><id_suffix>"。
"override": false,           // 可选项（默认：false）。如果为false且配方的标识已被另一个配方使用，加载配方将失败。如果为true且已定义具有标识的配方，则新配方将替换现有配方。
"delete_flags": [ "CANNIBALISM" ], // 可选项（默认：空列表）。在此处指定的标志将在制作过程中从生成物品中移除。这将覆盖标志继承，但 *不会* 删除物品类型本身的标志。
"skill_used": "fabrication", // 用于训练和成功检查的技能
"skills_required": [["survival", 1], ["throw", 2]], // 解锁配方所需的技能
"book_learn": {	             // （可选）可以从中学习此配方的书籍。
    "textbook_anarch" : {    // 可以从中学习配方的书籍ID
        "skill_level" : 7,   // 可学习的技能等级
        "recipe_name" : "something", // （可选）书籍描述中配方的名称（默认为配方生成物品的名称）
        "hidden" : true },   // （可选）如果设置为true，配方将不会显示在书籍描述中
    "textbook_gaswarfare" : { // 可以从中学习此配方的其他书籍。
        "skill_level" : 8
    }
},
"difficulty": 3,             // 成功检查的难度
"time": "5 m",               // 执行配方的首选时间，可以指定为分钟、小时等。
"time": 5000,                // 旧版执行配方的时间（其中1000≈10回合≈10秒游戏时间）。
"reversible": true,          // 可以拆卸。所需时间与制作该物品的时间相同。
"reversible": { "time": "30 s" }, // 可以拆卸。拆解所需时间如指定。
"autolearn": true,           // 获得所需技能后自动学习
"autolearn" : [              // 获得以下技能后自动学习
    [ "survival", 2 ],
    [ "fabrication", 3 ]
],
"decomp_learn" : 4,          // 可通过拆解同类型物品来学习该技能等级的配方
"decomp_learn" : [           // 可通过拆解同类型物品来学习指定技能等级的配方
    [ "survival", 1 ],
    [ "fabrication", 2 ]
],
"activity_level": "LIGHT_EXERCISE", // 选项为NO_EXERCISE（无锻炼）、LIGHT_EXERCISE（轻度锻炼）、MODERATE_EXERCISE（中度锻炼）、BRISK_EXERCISE（快速锻炼）、ACTIVE_EXERCISE（高强度锻炼）和EXTRA_EXERCISE（额外锻炼）。此制作活动的能量强度。例如，制作铁砧比烹饪鱼需要更多运动量。
"proficiencies" : [ // 与此配方相关的熟练度
    {
      "proficiency": "prof_knapping", // 熟练度的ID
      "required": false, // 是否必须具备该熟练度才能制作。与`time_multiplier`不兼容
      "time_multiplier": 2.0 // 如果您没有此熟练度，制作此配方所需时间的倍数
      "skill_penalty": 1.5 // 在没有此熟练度的情况下制作时的有效技能惩罚。默认为1.0。多个熟练度将增加此值。
      "learning_time_multiplier": 1.2 // 此熟练度的学习速度乘数。默认情况下，它是配方的时间除以时间乘数，再除以可以从中学习的熟练度数量。
      "max_experience": "15 m" // 该配方不能使您的该熟练度经验超过15分钟。
    }
]
"contained": true, // 布尔值，定义所得到的物品是否在其指定容器中。如果配方中定义了任何容器，则自动设置为true。
"container": "jar_glass_sealed", // 所得到的物品将由此处设置的物品包含，覆盖默认容器。
"batch_time_factors": [25, 15], // 批量制作时间缩短的可选因素。第一个数字指定最大的制作时间缩短百分比，第二个数字指定达到该百分比所需的最小批量大小。在本例中，给定批量大小为20，最后6个制作将只需要3750个时间单位。
"result_mult": 2,            // 所得到的物品数量乘数。也会乘以容器中的物品。
"flags": [                   // 描述配方布尔特征的一组字符串
  "BLIND_EASY",
  "ANOTHERFLAG"
],
"result_eocs": [ {"id": "TEST", "effect": { "u_message": "You feel Test" } } // 试图在成功完成此配方时激活的内联effect_on_conditions或effect_on_condition id列表。如果提供了一个值，结果将变成可选的，尽管如果缺少名称和id，则需要它。如果没有提供结果且存在描述，则将在制作界面显示该描述。
],
"construction_blueprint": "camp", // 一个可选的字符串，包含一个update_mapgen_id。用于帮派营地升级其建筑物
"on_display": false,         // 这是一个隐藏的建筑物，用于帮派营地计算建造时间，但玩家无法使用它
"qualities": [               // 制作所需的通用工具质量
  { "id": "CUT", "level": 1, "amount": 1 }
],
"tools": [                   // 制作所需的特定工具
[
  [ "fire", -1 ]             // 使用该工具时消耗的电量，-1表示不消耗电量。
]],
"using": [                   // 使用的工具和材料的要求ID和乘数
  [ "req_a", 3 ],            // 第二个数字将要求材料乘以该数量。
  [ "req_b", 5 ],            // 需要3倍的req_a中的所有物品，5倍的req_b中的所有物品。
],
"components": [              // 制作此配方所需的物品（或物品替代品）
  [
    [ "item_a", 5 ]          // 第一个原料：需要5个item_a
  ],
  [
    [ "item_b", 2 ],         // 还需要2个item_b...
    [ "item_c", 4 ]          // 或者4个item_c（但不需要同时拥有两者）
  ],
  [
    // ... 其他任意数量的组件原料（见下文）
  ]
]
```

#### 练习食谱

食谱也可以定义为“练习”类型，让它们出现在制作菜单的“练习”选项卡中。这些食谱没有“结果”，但它们可以定义“副产品”/“副产品组”。
请参阅 [PRACTICE_RECIPES.md](PRACTICE_RECIPES.md) 了解如何定义它们。

#### 嵌套食谱

类似的食谱也可以嵌套，让您节省界面空间。这样做如下：
```json
{
  "id": "nested_steel_legs",      // 物品ID
  "type": "nested_category",     // 物品类型
  "activity_level": "BRISK_EXERCISE",   // 制作活动强度
  "category": "CC_ARMOR",        // 物品所属类别
  "subcategory": "CSC_ARMOR_LEGS",     // 物品所属子类别
  "name": "steel leg guards",     // 物品名称
  "description": "与各种厚度和钢种相关的制作钢制护腿的配方。",   // 物品描述
  "skill_used": "fabrication",   // 制作所需技能
  "nested_category_data": [
    "xl_armor_qt_heavy_leg_guard", // 极大型钢制重型护腿
    "armor_qt_heavy_leg_guard", // 大型钢制重型护腿
    "xl_armor_ch_heavy_leg_guard", // 极大型链甲重型护腿
    "armor_ch_heavy_leg_guard", // 大型链甲重型护腿
    "xl_armor_hc_heavy_leg_guard", // 极大型硬皮重型护腿
    "armor_hc_heavy_leg_guard", // 大型硬皮重型护腿
    "xl_armor_mc_heavy_leg_guard", // 极大型金属装甲重型护腿
    "armor_mc_heavy_leg_guard", // 大型金属装甲重型护腿
    "xl_armor_lc_heavy_leg_guard", // 极大型皮革重型护腿
    "armor_lc_heavy_leg_guard", // 大型皮革重型护腿
    "xl_armor_qt_leg_guard", // 极大型钢制护腿
    "armor_qt_leg_guard", // 大型钢制护腿
    "xl_armor_ch_leg_guard", // 极大型链甲护腿
    "armor_ch_leg_guard", // 大型链甲护腿
    "xl_armor_hc_leg_guard", // 极大型硬皮护腿
    "armor_hc_leg_guard", // 大型硬皮护腿
    "xl_armor_mc_leg_guard", // 极大型金属装甲护腿
    "armor_mc_leg_guard", // 大型金属装甲护腿
    "xl_armor_lc_leg_guard", // 极大型皮革护腿
    "armor_lc_leg_guard", // 大型皮革护腿
    "xl_armor_qt_light_leg_guard", // 极大型轻型钢制护腿
    "armor_qt_light_leg_guard", // 大型轻型钢制护腿
    "xl_armor_ch_light_leg_guard", // 极大型轻型链甲护腿
    "armor_ch_light_leg_guard", // 大型轻型链甲护腿
    "xl_armor_hc_light_leg_guard", // 极大型轻型硬皮护腿
    "armor_hc_light_leg_guard", // 大型轻型硬皮护腿
    "xl_armor_mc_light_leg_guard", // 极大型轻型金属装甲护腿
    "armor_mc_light_leg_guard", // 大型轻型金属装甲护腿
    "xl_armor_lc_light_leg_guard", // 极大型轻型皮革护腿
    "armor_lc_light_leg_guard" // 大型轻型皮革护腿
  ],
  "difficulty": 5, // 制造难度为5
  "autolearn": [["fabrication", 5]] // 自动学习等级为5的制造技能
}
```

这个配方和普通的配方一样，只是增加了“nested_category_data”字段，其中列出了该类别中所有配方的ID。

如果您希望隐藏嵌套的配方，可以将它们的类别和子类别设置为：

```json
"category": "CC_*",
"subcategory": "CSC_*_NESTED",
```

#### 配方要求

一个配方的工具品质和组件要求可以通过以下 JSON 字段的组合来表达：

- “qualities” 定义物品品质，如 CUT 或 HAMMER，以及制作所需的品质等级
- “tools” 列出制作配方所需的工具（或几种可替代的工具）的物品 ID
- “components” 列出物品或需求 ID，主要用于材料成分
- “using” 给出需求 ID；需求可能有嵌套的工具、品质或组件

这些字段在解体、建筑、车辆部件和车辆故障中的使用方式类似。前三个字段同样适用于“需求”定义，并且可以嵌套；请参见[requirements section(需求部分)](#datajsonrequirements)。

一个配方的“components”列出了制作完成物品所需的所有必要物品或成分。每个组件都以特定物品 ID 或需求 ID 的整数数量或几个可替代的物品/需求数量列表给出。

组件的语法在其最简单的形式中是一个物品 ID 和数量。接下来以“javelin”配方为例，让我们要求一个“spear_wood”物品的单个数量：

```json
"components": [
  [ [ "spear_wood", 1 ] ]
]
```

一个组件也可以有替代品；例如，允许从一个“spear_wood”或一个“pointy_stick”制作：

```json
"components": [
  [ [ "spear_wood", 1 ], [ "pointy_stick", 1 ] ]
]
```

请注意，第一个例子中仅有“spear_wood”的情况只是退化的情况——只有一个替代品的替代品列表——这就是为什么它在`[[...]]`中嵌套两次的原因。

长矛加上一些皮革或布料的握柄会更好。如果除了木制长矛或尖木棍之外，还需要 2 块布条、1 块皮革或 1 块毛皮：

```json
"components": [
  [ [ "spear_wood", 1 ], [ "pointy_stick", 1 ] ],
  [ [ "rag", 2 ], [ "leather", 1 ], [ "fur", 1 ] ]
]
```

为了将握柄固定在长矛上，需要一些筋膜或线，它们可以具有“NO_RECOVER”关键字，表示如果物品被拆解，它们将无法恢复：

```json
"components": [
  [ [ "spear_wood", 1 ], [ "pointy_stick", 1 ] ],
  [ [ "rag", 2 ], [ "leather", 1 ], [ "fur", 1 ] ],
  [ [ "sinew", 20, "NO_RECOVER" ], [ "thread", 20, "NO_RECOVER" ] ]
]
```

注意：与“NO_RECOVER”相关的一些物品，如“superglue”和“duct_tape”，在物品本身上具有“UNRECOVERABLE”标志，表示它们在拆卸时永远无法被回收。请参见 [JSON_FLAGS.md](JSON_FLAGS.md) 以了解如何使用此项和其他物品标志。

#### Defining common requirements(定义通用要求)

为了避免重复使用常用的组件集合，可以提供“requirement”类型的ID，以及数量和“LIST”关键字，而不是单个物品ID。通常这些是在 [`data/json/requirements`](#datajsonrequirements) 中定义的。

例如，如果定义了这些“grip_patch”和“grip_wrap”要求：

```json
[
  {
    "id": "grip_patch", // 握柄要求的ID
    "type": "requirement", // 类型为“requirement”
    "components": [
      [
        ["rag", 2], // 需要 2 块布条
        ["leather", 1], // 或者 1 块皮革
        ["fur", 1] // 或者 1 块毛皮
      ]
    ]
  },
  {
    "id": "grip_wrap", // 绕包要求的ID
    "type": "requirement", // 类型为“requirement”
    "components": [
      [
        ["sinew", 20, "NO_RECOVER"], // 需要 20 个筋膜，“NO_RECOVER”表示无法回收
        ["thread", 20, "NO_RECOVER"] // 或者 20 根线，“NO_RECOVER”表示无法回收
      ]
    ]
  }
]
```

然后，长矛配方组件可以使用 1 个握柄和 1 个绕包，例如：

```json
"result": "javelin", // 制作结果为“javelin”
"components": [
  [ [ "spear_wood", 1 ], [ "pointy_stick", 1 ] ], // 使用 1 个“spear_wood”或 1 个“pointy_stick”
  [ [ "grip_patch", 1, "LIST" ] ], // 使用 1 个“grip_patch”，“LIST”表示使用组件清单
  [ [ "grip_wrap", 1, "LIST" ] ] // 使用 1 个“grip_wrap”，“LIST”表示使用组件清单
]
```

需要两个这样的握把的其他配方可以简单地要求每个配备两个：

```json
"result": "big_staff",
"components": [
  [ [ "stick_long", 1 ] ],
  [ [ "grip_patch", 2, "LIST" ] ],
  [ [ "grip_wrap", 2, "LIST" ] ]
]
```

在配方中，`"using"`字段的使用方法类似，但是`"using"`只能引用要求ID，而不能引用特定的物品或工具。在`"using"`中包含的要求还必须给出一个乘数，以告诉需要多少个该要求的单位。与`"components"`一样，即使只有一个替代方案，`"using"`列表也被格式化为一组替代方案。

例如，这个电动摩托车交流发电机的`"uncraft"`配方使用了20个`"soldering_standard"`的要求或5个`"welding_standard"`的要求：

```json
{
  "type": "uncraft",
  "result": "alternator_motorbike",
  "qualities": [{ "id": "SCREW", "level": 1 }],
  "using": [
    ["soldering_standard", 20],
    ["welding_standard", 5]
  ],
  "components": [
    [["power_supply", 1]],
    [["cable", 20]],
    [["bearing", 5]],
    [["scrap", 2]]
  ]
}
```

要求除了`"components"`之外还可以包括`"tools"`或`"qualities"`。在这里，我们有一个标准的焊接要求，需要一个`"soldering_iron"`或`"toolset"`，再加上1个`"solder_wire"`的组件单位：

```json
{
  "id": "soldering_standard", //要求ID
  "type": "requirement", //"requirement"类型
  "//": "Tools and materials needed for soldering metal items or electronics", //注释：用于焊接金属物品或电子设备的工具和材料
  "tools": [ //需要的工具
    [
      ["soldering_iron", 1], //需要1个"soldering_iron"
      ["toolset", 1] //需要1个"toolset"
    ]
  ],
  "components": [[["solder_wire", 1]]] //需要的组件，这里是1个"solder_wire"的组件单位
}
```

通过`"using"`字段，简化需要焊接的配方。例如，一个简单的`"tazer"`配方可能需要10个焊接要求单位，以及其他一些组件：

```json
{
  "type": "recipe",
  "result": "tazer",
  "using": [["soldering_standard", 10]],
  "components": [[["amplifier", 1]], [["power_supply", 1]], [["scrap", 2]]],
  "//": "..."
}
```

要求不仅可以用于常规的制作和反制作配方，还可以用于建筑和车辆零件的安装和修理。

**注意：** 在模组中包含的需求列表将使用匹配的ID覆盖先前加载的需求列表。这意味着修改相同要求ID的两个模组将相互覆盖。可以通过使用`"extend"`来扩展先前加载的列表来避免这种情况。例如：

```json
{
  "id": "bone_sturdy",
  "type": "requirement",
  "extend": {
    "components": [
      [
        ["frost_bone_human", 1],
        ["alien_bone", 1]
      ]
    ]
  }
}
```

 #### Overlapping recipe component requirements (重复的配方组件需求)

如果配方有重叠的需求,这将使游戏更难计算出是否可以制作该配方。

例如,幸存者望远镜配方有以下需求(以及其他需求):

```
1个高品质透镜
和
1个高品质透镜或者1个小型高品质透镜
```

这两者有重复,因为都列出了高品质透镜。

少量重复(如上例)可以处理,但是如果你有太多互相重叠的组件列表,则在配方最终确定时可能会看到错误,说你的配方太复杂了。在这种情况下,游戏可能无法正确预测是否可以制作该配方。

为了解决这个问题,如果你不想简化配方需求,可以将配方分成多个步骤。例如,如果我们想简化上述的望远镜配方,可以引入一个中间物品“望远镜眼镜”,它需要任意一种透镜,然后望远镜再需要一个高品质透镜和一副眼镜。总体来说,需求是相同的,但两个配方都没有任何重叠。

欲了解更多细节,请参见[此拉取请求 ↗](https://github.com/CleverRaven/Cataclysm-DDA/pull/36657)和[相关问题 ↗](https://github.com/CleverRaven/Cataclysm-DDA/issues/32311)。

### Constructions(构造)

```C++
 group: "spike_pit",                                    // 构造组,用于在UI中对相关构造进行分组
category: "DIG",                                               // 构造类别 
required_skills: [ [ "survival", 1 ] ],                        // 进行构造所需的技能等级
time: "30 m",                                                  // 完成构造所需的时间。整数将被视为分钟,或可以使用时间字符串。  
components: [ [ [ "spear_wood", 4 ], [ "pointy_stick", 4 ] ] ], // 构造中使用的物品
pre_special: "check_empty",                                    // 所需的非地形先决条件
pre_terrain: "t_pit",                                          // pre_special的替代项;所需的地形以进行建造
pre_flags: [ "WALL", { "flag": "DIGGABLE", "force_terrain": true } ], // 开始的家具/地形必须具有的标志。force_ter强制标志应用于底层地形
post_terrain: "t_pit_spiked"                                   // 构造完成后地形的类型
strict: false                                                  // 如果为true,则此构造的建造活动将仅在同一组中查找先决条件
```

 | pre_special | 描述 |
 | ----------- | ---- ||
 | `check_channel`        | 必须为空且至少在一个正交的tile中有水流                                                                                     |
 | `check_empty`          | 该tile为空(无家具、陷阱、物品或车辆)且为平坦地形                                                                           |
 | `check_empty_lite`     | 该tile为空(无家具、陷阱、物品或车辆)                                                                                       |
 | `check_support`        | 必须在正交方向(仅非对角线方向)附近至少有两个坚固的墙壁/障碍以支撑该tile                                                    |
 | `check_support_below`  | 在正下方的Z层必须至少有两个坚固的墙壁/障碍在正交方向(仅非对角线方向)以支撑该tile,且须为空且可以接受檐口陷阱,以及开放的空气 |
 | `check_stable`         | 下一层的tile具有`SUPPORTS_ROOF`标志                                                                                        |
 | `check_empty_stable`   | 该tile为空且稳定                                                                                                           |
 | `check_nofloor_above`  | 上层的tile具有`NO_FLOOR`标志                                                                                               |
 | `check_deconstruction` | 目标tile中的家具(或无家具的tile)必须有一个“拆除”条目                                                                       |
 | `check_empty_up_OK`    | 该tile为空且在最大可能高度以下(可以在此向上建造)                                                                           |
 | `check_up_OK`          | 该tile在最大可能高度以下(可以在此向上建造)                                                                                 |
 | `check_down_OK`        | 该tile在最低可能高度以上(可以在此向下挖掘)                                                                                 |
 | `check_no_trap`        | 该tile中没有陷阱对象                                                                                                       |
 | `check_ramp_low`       | 本层和上一层都可以再提高一个Z层                                                                                            |
 | `check_ramp_high`      | 在下一更高层有一个完成的下坡道,本层和上一层都可以再提高一个Z层                                                             |
 | `check_no_wiring`      | 该tile必须为空或至少是一个没有WIRING标志的车辆                                                                             |

 这是关于CDDA模组中气味类型(scent_types)的翻译:

### 气味类型(Scent_types)

| 标识符 | 描述 |
| ------ | ---- ||
| `id`                | 唯一ID。必须是一个连续的单词,必要时使用下划线。              |
| `receptive_species` | 能够跟踪此气味的物种。必须使用`species.json`中定义的有效ID。 |

```json
{
  "type": "scent_type", // 气味类型
  "id": "sc_flower", // 唯一ID
  "receptive_species": ["MAMMAL", "INSECT", "MOLLUSK", "BIRD"] // 可以感知的物种  
}
```

### Scores, Achievements, and Conducts(得分，成就和行为准则)

得分是基于“事件”定义的两到三个步骤。要查看存在哪些事件以及它们包含哪些数据，请阅读[`event.h`](../src/event.h)。

每个事件都包含一定的字段。每个字段都有一个字符串键和一个`cata_variant`值。这些字段应该提供有关事件的所有相关信息。

例如，考虑`gains_skill_level`事件。您可以在`event.h`中看到它的规定：

<!-- {% raw %} -->

```C++
template<>
struct event_spec<event_type::gains_skill_level> {
    // 定义事件的字段，包括名称和类型
    static constexpr std::array<std::pair<const char *, cata_variant_type>, 3> fields = {{
            { "character", cata_variant_type::character_id }, // 角色 ID
            { "skill", cata_variant_type::skill_id }, // 技能 ID
            { "new_level", cata_variant_type::int_ }, // 新等级
        }
    };
};
```

<!-- {% endraw %} -->

由此可见，该事件类型有三个字段：

- `character`，表示获得等级的角色 ID。
- `skill`，表示获得的技能 ID。
- `new_level`，表示在该技能中新获得的整数等级。

游戏根据游戏情况生成事件。这些事件可以以各种方式进行转换和总结。涉及三个概念：事件流、事件统计和得分。

- 游戏定义的每个`event_type`都会生成一个事件流。
- 可以通过将“事件转换”应用于现有事件流来定义进一步的事件流。
- `event_statistic`将事件流总结为单个值（通常是数字，但也可能是其他类型的值）。
- `score`使用这样的统计数据来定义玩家可以看到的游戏得分。

#### `event_transformation`（事件转换）

`event_transformation`可以修改事件流，生成另一个事件流。

要转换的输入流可以指定为`"event_type"`，以使用内置的事件类型流，或者`"event_transformation"`，以使用另一个json定义的转换事件流。

可以对事件流进行以下任何或所有的修改：

- 根据事件字段转换向每个事件添加新字段。事件字段转换可以在[`event_field_transformations.cpp`](/src/event_field_transformations.cpp)中找到。
- 根据它们包含的值过滤事件，以产生输入流的某个子集。
- 删除在输出流中不感兴趣的一些字段。

以下是每种修改的示例：

```json
"id": "avatar_kills_with_species",
"type": "event_transformation",
"event_type": "character_kills_monster", // 这个转换工具会对此类型的事件产生影响
"new_fields": { // 这是一个字典，我们会添加新的字段到事件中
    // 字典中的键是新字段的名称；值是一个单独的字典
    "species": {
        // 这个键告诉我们要进行什么样的字段转换；值指定了
        // 需要被转换的字段应该用在哪个地方。
        // 所以，在这里，我们正在添加一个新字段名为'species'，
        // 它会包含这个杀戮事件的受害者的种类。
        "species_of_monster": "victim_type"
    }
}
```
在这个例子中，我们使用了 "event_transformation"（事件转换）工具，它可以修改或添加新的信息到事件中。对于这个特定的转换工具，它会对 "character_kills_monster" （角色击杀怪物）类型的事件生效，并向事件中添加一个新的字段，名为 "species"（种类）。新字段 "species" 的值将会根据 "victim_type"（受害者类型）字段通过 "species_of_monster"（怪物种类）的转换方法得出。

**简单说，这个转换工具会在角色击杀怪物的事件中添加一个字段，显示被杀怪物的种类。**

```json
"id": "moves_on_horse",
"type": "event_transformation",
"event_type" : "avatar_moves", // 这是我们要处理的事件类型
"value_constraints" : { // 这是我们要求的条件
    // "mount" 必须是 "mon_horse"，也就是说，角色必须在骑马
    "mount" : { "equals": [ "mtype_id", "mon_horse" ] }
}
// 既然我们只关心角色在骑马的情况，那么 "mount" 字段就没有用了，我们可以把它去掉
"drop_fields" : [ "mount" ]
```
在这个例子中，我们用 "event_transformation"（事件转换）工具来处理 "avatar_moves"（角色移动）事件。我们设置了一些条件，只有满足这些条件的事件才会被处理。在这个例子中，我们的条件是角色必须在骑马。如果一个事件满足这个条件，那么我们就会处理这个事件，并且把 "mount"（骑乘）字段去掉，因为在我们关心的事件中，这个字段总是 "mon_horse"（马），所以它没有什么信息量。


`"equals"`（以及其他单值比较符）的参数通常是一个长度为两个元素的数组，指定一个`cata_variant_type`和一个值。作为快捷方式，对于具有那些类型的字段，你可以简单地指定一个`int`或`bool`（例如：`"equals": 7`或`"equals": true`）。

`"equals_any"`的参数将会是一对元素，其中第一个元素是一个字符串`cata_variant_type`，第二个是一组值的数组。例如：

```
"value_constraints": {
  "oter_type_id": { "equals_any": [ "oter_type_str_id", [ "central_lab_finale", "lab_finale" ] ] }
}
```

值约束会进行类型检查，所以如果你指定的变体类型与你要匹配的字段类型不符，你应该会在游戏数据验证时看到一个错误消息。

#### `事件统计` (Event Statistic)

与`事件转换`一样，`事件统计`需要一个输入事件流。可以通过以下两种方式之一来指定输入流：

```C++
"event_type" : "avatar_moves" // 这个内置类型的事件
"event_transformation" : "moves_on_horse" // 由此JSON定义的转换生成的事件
```

然后，它指定了特定的`统计类型`，并可能包含其他详细信息，如下所示：

事件数量：

```C++
"stat_type" : "count"
```
 
将指定字段中所有事件的数值求和：

```C++
"stat_type" : "total"
"field" : "damage"
```

将指定字段中所有事件的数值取最大值：

```C++
"stat_type" : "maximum"
"field" : "damage"
```

将指定字段中所有事件的数值取最小值：

```C++
"stat_type" : "minimum"
"field" : "damage"
```

假设只有一个事件需要考虑，并采用该唯一事件中给定字段的值：

```C++
"stat_type": "unique_value",
"field": "avatar_id"
```

取输入流中第一个事件中给定字段的值：

```C++
"stat_type": "first_value",
"field": "avatar_id"
```

The value of the given field for the last event in the input stream:

```C++
"stat_type": "last_value",
"field": "avatar_id"
```

无论`统计类型`如何，每个`事件统计`还可以具有以下内容：

```C++
// 用于描述得分和成就要求的内容。
"description": "某物的数量"
```

#### `score` (得分)

得分仅将描述与事件关联，用于在得分表格中进行格式化显示。`description`指定一个字符串，其中应包含一个`%s`格式说明符，用于插入统计量的值。

请注意，即使大多数统计量产生整数值，也应该使用`%s`。

如果基础统计量有描述，则得分描述是可选的。默认值为 "<统计量描述>: <值>"。

```C++
"id": "score_headshots",
"type": "score",
"description": "爆头击杀数： %s",
"statistic": "avatar_num_headshots"
```

#### `achievement` (成就)

成就是玩家可以追求的目标，与其他游戏中普遍使用的意义相同。

通过要求条件来指定成就，其中每个条件都是对`事件统计`的约束。例如：

```C++
{
  "id": "achievement_kill_zombie",
  "type": "achievement",
  // 成就的名称和描述用于UI显示。
  // 描述是可选的，并且可以提供额外的细节。
  "name": "一只已被消灭，还有数十亿只\u2026",
  "description": "杀死一只僵尸",
  // 如果成就是由EOC（事件外来条件）给予的，而无需指定要求条件，
  // 则应将manually_given设置为true。这将避免错误。
  // 此值默认为false。
  "manually_given": false,
  "requirements": [
    // 每个要求条件必须指定要受约束的统计量，并将其与某个目标值进行比较。
    { "event_statistic": "num_avatar_zombie_kills", "is": ">=", "target": 1 }
  ]
},
```

`"is"`字段必须是`">="`，`"<="`或`"anything"`之一。当它不是`"anything"`时，`"target"`字段必须存在，并且必须是一个整数。

`requirements`中每个条目的其他可选字段如下：

- `"visible"`可以取值`"always"`，`"when_requirement_completed"`，`"when_achievement_completed"`或`"never"`，以指定要求条件何时可见。非可见的要求条件将在UI中隐藏。
- `"description"`将覆盖要求条件的默认描述，适用于默认不适合的情况。默认描述的形式为`x/y foo`，其中`x`是当前统计量值，`y`是目标值，而`foo`是统计量描述（如果有）。

`achievement`还有更多可选字段：

```C++
"hidden_by": [ "other_achievement_id" ]
```

给出其他成就的id列表。在列出的所有成就完成之前，此成就将被隐藏（即不会出现在成就界面中）。

使用此功能可以防止剧透或减少成就列表中的杂乱。

如果要隐藏某个成就直到完成，可以将其标记为`hidden_by`自己的id。

```C++
"time_constraint": { "since": "game_start", "is": "<=", "target": "1 minute" }
```

这允许对可以获得成就的时间设置时间限制（下界或上界）。`"since"`字段可以是`"game_start"`或`"cataclysm"`。`"target"`描述了自那一参考点开始的时间量。

请注意，只有在在其要求条件中列出的统计量变化时，才会捕获成就。因此，如果你想要一个通常会在到达某个时间阈值时触发的成就（例如"存活一段时间"），那么你必须在此之后添加一些要求条件来触发它。选择一些可能经常改变的统计量，并对其添加一个`"anything"`约束。例如：

```C++
{
  "id": "achievement_survive_one_day",
  "type": "achievement",
  "description": "其余未来的第一天",
  "time_constraint": { "since": "game_start", "is": ">=", "target": "1 day" },
  "requirements": [ { "event_statistic": "num_avatar_wake_ups", "is": "anything" } ]
},
```
这是一个简单的“存活一天”的成就，但是它是通过醒来触发的，因此在游戏进行24小时后的第一次醒来时，成就将被完成。

#### `conduct` (行为准则)

行为准则是玩家自愿遵守的约束条件。在某种程度上，行为准则与成就相反：它指定了一组在游戏开始时可以为真的条件，但可能在某个时刻变为假。

行为准则的实现与成就共享许多特性，并且在JSON中的规范使用了相同的字段。只需将`"type"`从`"achievement"`更改为`"conduct"`。

游戏强制要求您为行为准则指定的任何要求条件必须在某种意义上“变为假”，即一旦它们变为假，它们永远不能再变为真。因此，例如，对某些单调递增统计量的上限是可以接受的，但您不能使用对可能随意上下波动的统计量的约束。

通过一个好的例子来激励，这个约束条件可能会弱化，但目前它存在是为了帮助捕捉错误。

### 技能 (Skills)

```C++
"id" : "smg",  // 唯一ID。必须是一个连续的单词，如果需要可以使用下划线
"name" : "冲锋枪",  // 游戏内显示的名称
"description" : "你对冲锋枪和机枪手枪的熟练程度。介于手枪和突击步枪之间，这些武器射击和装填速度快，可以连发射击，但精度不高。", // 游戏内描述
"tags" : ["gun_type"]  // 特殊标签 (默认: 无)
```

### 速度描述 (Speed Description)

```C++
{
    "type": "speed_description",
    "id": "mon_speed_centipede",
    "values": [ // (可选)
        {
            // value为必填项
            "value": 1.40,
            // description可选
            "descriptions": "比你快得离谱", // 单个描述
        },
        {
            "value": 1.00,
            "descriptions": [ // 描述的数组，调用时随机选择一个
                "大致与你的速度相当",
                "与你的速度相似"
            ]
        },
        {
            "value": 0.01,
            "descriptions": [ // 描述的数组，调用时随机选择一个
                "几乎不动",
                "它还活着吗？"
            ]
        },
        {
            "value": 0.00, // 无法移动的怪物将其设置为零
            "descriptions": [ "它无法移动" ] // 描述的数组，但只有一个描述
        }
    ]
}
```

如果两个`values`具有相同的`value`，将不会产生错误，但尽量避免这种情况，因为其中一个将不会被调用。

当前的比值为`player_tiles_per_turn / monster_speed_rating`。怪物的速度评级是其`effective_speed / 100`，其有效速度等于怪物的速度，但跳跃能力将其增加了`50`。

值从最高值开始检查，它们的定义顺序无关紧要，因为它们会被排序，但还是保持组织有序。

具有`0.00`值是重要的，但不是必需的，因为它用于在比率由于任何原因变为零时使用（比如怪物具有`MF_IMMOBILE`标志）。如果比率为零且不存在该值，则返回的字符串将为空。

### 心情表情 (Mood Face)

```C++
{
    "type": "mood_face",
    "id": "DEFAULT_HORIZONTAL",
    "values": [ // 必填项
        {
            "value": 200, // 必填项
            "face": "<color_green>@w@</color>" // 必填项
        },
        {
            "value": -200,
            "face": "<color_red>XvX</color>" // 必须添加颜色
        },
        {
            "value": -201, // 在常规游戏中，士气被夹持在[200, -200]范围内，除非进行调试，否则不必要
            "face": "<color_yellow>@^@</color>"
        }
    ]
}
```

颜色是必需的，否则它不会在侧边栏上显示。

`DEFAULT`和`DEFAULT_HORIZONTAL`用于默认值，不得删除（可以进行修改）。

`THRESH_TRAIT`和`THRESH_TRAIT_HORIZONTAL`用于特征。例如:
对于`THRESH_BIRD`：`THRESH_BIRD`和`THRESH_BIRD_HORIZONTAL`
对于`THRESH_SPIDER`：`THRESH_SPIDER`和`THRESH_SPIDER_HORIZONTAL`

`id`必须精确匹配，因为它是硬编码以查找该值。

`HORIZONTAL`表示3个字符的宽度。

### 工具品质 (Tool Qualities)

在tool_qualities.json中定义。

格式和语法：

```C++
{
  "type": "tool_quality",
  "id": "SAW_W",                      // 唯一ID
  "name": { "str": "wood sawing" },   // 在游戏中查看具有该ID的条目时，在选项卡中使用的描述
  "usages": [ [ 2, [ "LUMBER" ] ] ]   // 不是必需的。可以使用该物品执行的特殊操作。
},
```

各种用法示例的语法：

```C++
{
 "usages": [ [ 1, [ "PICK_LOCK" ] ] ]  // 使用品质级别为1的工具进行 "解锁" 操作。
 "usages": [ [ 2, [ "LUMBER" ] ] ]  // 使用品质级别为2的工具进行 "伐木" 操作。
 "usages": [ [ 1, [ "salvage", "inscribe"] ] ]  // 使用品质级别为1的工具进行 "拆解" 和 "铭刻" 操作。
 "usages": [ [ 2, [ "HACKSAW", "saw_barrel" ] ] ]  // 使用品质级别为2的工具进行 "使用锯子" 和 "锯开桶体" 操作。
 "usages": [ [ 1, [ "CHOP_TREE", "CHOP_LOGS" ] ], [ 2, [ "LUMBER" ] ] ]  // 使用品质级别为1的工具进行 "砍树" 和 "砍伐木材" 操作；使用品质级别为2的工具进行 "伐木" 操作。
}
```

使用行仅对具有允许在激活时进行特殊操作的品质的物品是必需的。有关特定操作和文档，请参见[使用操作](#use-actions)。

操作的ID和玩家的纯文本操作描述在item_actions.json中定义。

每个用法必须首先由工具品质的最低级别来定义，该级别是进行该操作所需的，并且必须定义具有该工具品质级别或更高级别可能的动作的ID或动作数组。

如示例所示，可以为多个工具级别定义一个或多个动作，并且如果定义了多个级别，则必须在更高级别数组中定义。

允许使用常规的`"//"`（或`"//1"`，或更高数字）格式进行注释（请参见[注释](#comments)）。

品质（非独占地）与各种item定义中的物品相关联，可以通过添加`"qualities":`行来定义。
例如: `"qualities": [ [ "ANVIL", 2 ] ],`将`ANVIL`品质与等级`2`关联到该物品。

### 特质/突变 (Traits/Mutations)

请参阅 [MUTATIONS.md](MUTATIONS.md)

### 特质迁移 (Trait Migrations)

请参阅 [MUTATIONS.md](MUTATIONS.md)

### 陷阱 (Traps)

```C++
    "type": "trap",
    "id": "tr_beartrap", // 唯一ID
    "name": "捕熊夹", // 游戏内显示的名称
    "color": "blue", // 颜色
    "symbol": "^", // 符号
    "visibility": 2, // 0到无穷大，0表示明显可见的陷阱，数值越高越难以发现
    "avoidance": 7, // 0到无穷大，影响触发陷阱时的闪避难度，0表示非常容易躲避，数值越高越困难
    "difficulty": 3, // 0到99，0表示拆除始终成功（例如漏斗或其他无害陷阱），99表示拆除不可能
    "trap_radius": 1, // 0到无穷大，部署陷阱时所需的空间半径
    "action": "blade", // 当陷阱被触发时运行的C++函数，通常在trapfunc.cpp中
    "map_regen": "microlab_shifting_hall",  // 用于map_regen动作陷阱的有效地图重新生成（overmap id）
    "benign": true, // 用于类似床垫、漏斗等的物品，它们不会被触发
    "always_invisible": true, // 非常隐秘的陷阱，玩家永远无法检测到
    "funnel_radius": 200, // 毫米。值越高，积水越多
    "comfort": 0, // 影响家具和地形的舒适度。请参阅地形示例文件以了解更多施加该属性的地块
    "floor_bedding_warmth": -500, // 影响家具和地形的地板垫的保暖程度
    "spell_data": { "id": "bear_trap" }, // 用于trapfunc::spell()的所需数据
    "trigger_weight": "200 g", // 如果扔在陷阱上的物品重量达到或超过该数值，则触发陷阱。默认值为500克
    "drops": [ "beartrap" ], // 解除拆除时生成的物品的ID
    "flags": [ "UNDODGEABLE", "AVATAR_ONLY" ], // UNDODGEABLE表示无法闪避，无需进行判定。AVATAR_ONLY表示只有玩家可以触发该陷阱。
    "vehicle_data": {
      "damage": 300,
      "sound_volume": 8,
      "sound": "SNAP!",
      "sound_type": "trap",
      "sound_variant": "bear_trap",
      "remove_trap": true,
      "spawn_items": [ "beartrap" ]
    },
    "trigger_message_u": "你的脚被捕熊夹夹住了！", // 当玩家触碰到陷阱时显示的消息
    "trigger_message_npc": "<npcname>的脚被捕熊夹夹住了！" // 当NPC或怪物触碰到陷阱时显示的消息
```

### 车辆群组 (Vehicle Groups)

```C++
"id":"city_parked",            // 唯一ID。必须是一个连续的单词，如果需要可以使用下划线
"vehicles":[                 // 可能车辆的ID列表。车辆生成的机会是X/T，其中
  ["suv", 600],           //    X是与特定车辆相关联的值，T是群组中所有车辆值的总和
  ["pickup", 400],          //    
  ["car", 4700],
  ["road_roller", 300]
]
```

### 车辆部件 (Vehicle Parts)

车辆上安装的组件。

```C++
"id": "wheel",                // 唯一标识符，不得包含 # 符号
"name": "轮子",              // 显示名称
"looks_like": "small_wheel",  // （可选）如果该部件没有图块，使用与其外观相似的图块
"bonus": 100,                 // 功能取决于部件类型：
                              // 安全带部件中的 "str"（非功能性 #30239）
                              // 消音器部件为噪音减少百分比
                              // 喇叭部件音量
                              // 车灯部件亮度
                              // 充电器部件充电速度（瓦特）
                              // 漏斗部件积水面积（平方毫米）
"color": "dark_gray",         // 部件工作时的颜色
"broken_color": "light_gray", // 部件损坏时的颜色
"location": "fuel_source",    // （可选）确定是否可以将部件安装在特定块上的检查之一。如果任何现有部件占据相同位置，则无法安装该部件。
"damage_modifier": 50,        // （可选，默认值 = 100）此部件对其他物体造成的伤害倍增器，以百分比表示。较高的值表示对被撞击的生物造成更多伤害。
"durability": 200,            // 部件在损坏前可以承受的伤害量
"description": "A wheel.",    // 安装该车辆部件时的描述
"fuel_type": "diesel",        // （可选，默认值 = "NULL"）部件消耗的燃料/弹药类型，作为物品ID
"epower": -10                 // 部件的电力使用量，以瓦特为单位。
                              // 负值表示消耗电力，正值表示生成电力。电力消耗通常还需要启用 ENABLED_DRAINS_EPOWER 标志并将物品打开。
                              // 太阳能电池板的电力生成量受到阳光角度的影响。
                              // 当阳光直射时，太阳能电池板产生满功率的电力。
"item": "wheel",              // 安装该部件所使用的物品，以及移除该部件时获得的物品。
"difficulty": 4,              // 安装该部件所需的机械技能等级必须至少达到此级别
"breaks_into" : [             // 当车辆部件被破坏时，从此物品组中生成的物品将分散在部件周围的地面上。
  {"item": "scrap", "count": [0,5]} // 这里可以使用内联物品组，而不需要使用数组。
],
"breaks_into" : "some_item_group", // 或者只使用物品组的ID。
"flags": [                    // 与该部件相关的标识
     "EXTERNAL", "MOUNT_OVER", "WHEEL", "MOUNT_POINT", "VARIABLE_SIZE"
],
"requirements": {             // （可选）安装、拆除或修复该部件的特殊要求。每个字段都由一个对象组成，具有“skills”、“time”和“using”字段。
  "install": {
    "skills": [["mechanics", 1]], // "skills"是一个嵌套列表，每个列表包含一个技能名称和技能等级。
    "time": "200 s",          // "time"是指执行动作所需时间的字符串。
    "using": [["vehicle_screw", 1]] // "using"是一个嵌套列表，每个列表包含一个工艺要求。
  },
  "removal": {
    "skills": [["mechanics", 1]], "time": "200 s", "using": [["vehicle_screw", 1]]
  },
  "repair": {
    "skills": [["mechanics", 1]], "time": "20 s", "using": [["adhesive", 1]]
  }
},
"pseudo_tools" : [            // 该部件提供的工艺工具
  { "id": "hotplate", "hotkey": "h" },
  { "id": "pot" }
],
"folded_volume": "750 ml", // 该部件折叠时的体积，undefined或null禁用折叠
"folding_tools": [ "needle_curved" ], // 折叠所需的工艺工具
"folding_time": "100 seconds", // 折叠时间
"unfolding_tools": [ "hand_pump" ], // 展开所需的工艺工具
"unfolding_time": "150 seconds", // 展开时间
"damage_reduction" : {        // 对损坏的减少量；参见“Part Resistance”。如果未指定，设为零
    "all" : 10,
    "physical" : 5
},
"qualities": [ [ "SELF_JACK", 17 ] ], // （可选）一个嵌套列表，每个列表包含一个工具品质和其等级。只能使用 "LIFT"、"JACK" 和 "SELF_JACK" 品质。
"transform_terrain": {        // （可选）该部件可转换地形，如犁。
                              // 必须提供 "post_terrain"、"post_furniture" 或 "post_field" 之一。
  "pre_flags": [ "PLOWABLE" ], // 可以转换的地形的标志列表。
  "post_terrain": "t_dirtmound", // （可选，默认为 "t_null"）转换后的地形（如果有）。
  "post_furniture": "f_boulder", // （可选，默认为 "f_null"）转换后的家具（如果有）。
  "post_field": "fd_fire",    // （可选，默认为 "fd_null"）转换后的野外（如果有）。
  "post_field_intensity": 10, // （可选，默认为0）野外的强度（如果有）。
  "post_field_age": "20 s"    // （可选，默认为0转，即永久存在）野外的存活时间（如果有）。
},
"variants_bases": [ // 要生成的变种基础部件（详见下文）
  { "id": "scooter", "label": "电动踏板车" },
  { "id": "bike", "label": "自行车" }
],
"variants": [
    {
        "id": "front",         // 变种的唯一标识符
        "label": "前轮",      // 在用户界面中显示的标签
        "symbols": "oooooooo", // 当部件未损坏时的符号
        "symbols_broken": "x"  // 当部件损坏时的符号
    },
    { "id": "rear", "label": "后轮", "symbols": "o", "symbols_broken": "x" }
]
```

#### 符号和变种

车辆部件可以拥有外观变种，这些变种使用不同的符号和图块。它们通过"variants"对象声明。变种在车辆原型中作为后缀跟在部件id后面（例如`id#variant`），例如"frame#nw"或"halfboard#cover"。

`symbols`和`symbols_broken`可以是一个长度为1的字符字符串（一个长度为1的字符串实际上是该字符的8个复制），或者是长度为8的字符。长度是以控制台字符计量的。一个长度为8的字符串表示部件旋转时使用的8个符号；例如，`abcdefgh`将在部件旋转到北方时显示`a`，在旋转到西北方时显示`b`，在旋转到西方时显示`c`，在旋转到西南方时显示`d`，依此类推。

一些Unicode框线字符被支持作为符号：`│ ─ ┼ ┌ ┐ ┘ └`，粗垂直和粗水平线 `┃ ━` 部分受支持，它们会被显示为 `H` 和 `=`，因为在 curses ACS 编码中没有对应的字符。

变种基础部件用于从指定的基础部件和变种生成额外的变种。在上面的例子中，装载机将在每个基础部件和每个变种之间执行笛卡尔积，生成的最终变种列表如下：`[ "front", "rear", "scooter_front", "scooter_rear", "bike_front", "bike_rear" ]`，基础部件的`label`字段附加到变种的标签中。

有关图块集与变种和id之间的交互的详细信息，请参阅 [VEHICLES_JSON.md](VEHICLES_JSON.md#part-variants) 中的 "Part Variants" 部分。

除非另有指定，否则以下字段对于具有相应标识的部件是强制性的，否则将被忽略。

#### 以下可选字段仅适用于CARGO部件。

```C++
"size": "400 L",              // 对于具有"CARGO"标识的部件，表示容量的升数
"cargo_weight_modifier": 33,  // (可选，默认值为100) 该百分比将货物重量乘以此百分比。
```

#### The following optional fields are specific to ENGINEs.(以下可选字段是特定于引擎（ENGINE）的。)

```C++
"power": "15000 W"            // 引擎的动力功率（单位：瓦特）。
"energy_consumption": "55 W"  // 引擎在最大功率下的耗能（单位：瓦特）。默认为电力，并且E_COMBUSTION标志将其转换为燃料类型的热能。应始终大于"power"字段的值。
"m2c": 50,                    // 安全功率和最大功率之比。
"backfire_threshold": 0.5,    // (可选，默认值为0) 如果损坏的HP与最大HP的比值低于此值，则引擎会出现反火（产生噪音和烟雾）。
"backfire_freq": 20,          // (可选，默认值为0) 如果损坏的HP与最大HP的比值低于反火阈值，则每次该比值低于阈值时，有1/X的机会出现反火。
"noise_factor": 15,           // (可选，默认值为0) 将引擎动力乘以此数以确定噪音。
"damaged_power_factor": 0.5,  // (可选，默认值为0) 如果大于0，则损坏时的动力将按比例缩放为
                              // power * ( damaged_power_factor + ( 1 - damaged_power_factor ) * ( damaged HP / max HP )。
"muscle_power_factor": 0,     // (可选，默认值为0) 通过增加（角色的体格 - 8）* muscle_power_factor来增加引擎动力。
"exclusions": [ "souls" ]     // (可选， 默认为空)。一个词的列表。如果车辆上的任何引擎与exclusions中的任何词相同，新的引擎就无法安装在该车辆上。
"fuel_options": [ "soul", "black_soul" ] // (可选字段，默认为fuel_type)。一个字符串列表。引擎可以使用fuel_options中的任何燃料类型作为燃料。如果提供了该字段，它将覆盖fuel_type字段，并且应该包含fuel_type中的燃料。
                              // 要成为燃料，一个物品必须只由一个材料制成，该材料必须产生能量，即具有“data_fuel”条目，并且它需要具有可消耗的耗电量。
```

#### The following optional fields are specific to WHEELs.(以下可选字段仅适用于WHEELs引擎。)

```c++
"wheel_offroad_rating": 0.5,  // multiplier of wheel performance offroad
"wheel_terrain_modifiers": { "FLAT": [ 0, 5 ], "ROAD": [ 0, 2 ] }, // see below
"contact_area": 153,          // The surface area of the wheel in contact with the ground under
                              // normal conditions in cm^2.  Wheels with higher contact area
                              // perform better off-road.
"rolling_resistance": 1.0,    // The "squishiness" of the wheel, per SAE standards.  Wheel rolling
                              // resistance increases vehicle drag linearly as vehicle weight
                              // and speed increase.
```

`wheel_terrain_modifiers` field provides a way to modify wheel traction according to the flags set on terrain tile under each wheel.

The key is one of the terrain flags, the list of flags can be found in [JSON_FLAGS.md](JSON_FLAGS.md#furniture-and-terrain).

The value expects an array of length 2. The first element is a modifier override applied when wheel is on the flagged terrain, the second element is an additive modifier penalty applied when wheel is NOT on flagged terrain, values of 0 are ignored. The modifier is applied over a base value provided by `map::move_cost_ter_furn`.

Examples:

- Standard `wheel` has the field set to `{ "FLAT": [ 0, 4 ], "ROAD": [ 0, 2 ] }`. If wheel is not on terrain flagged `FLAT` then the traction is 1/4 of base value. If not on terrain flagged `ROAD` then it's 1/2 of base value. If neither flag is present then traction will be 1/6 of base value. If terrain is flagged with both `ROAD` and `FLAT` then the base value from `map::move_cost_ter_furn` is used.
- `rail_wheel` has the field set to `{ "RAIL": [ 2, 8 ] }`. If wheel is on terrain flagged `RAIL` the traction is overriden to be 1/2 of value calculated by `map::move_cost_ter_furn`, this value is the first element and considered an override, so if there had been modifiers applied prior to this they are ignored. If on terrain not flagged with `RAIL` then traction will be 1/8 of base value.
-

#### The following optional fields are specific to ROTORs.

```c++
"rotor_diameter": 15,         // Rotor diameter in meters.  Larger rotors provide more lift.
```

#### The following optional fields are specific to WORKBENCHes.

These values apply to crafting tasks performed at the WORKBENCH.

```c++
"multiplier": 1.1,            // Crafting speed multiplier.
"mass": 1000000,              // Maximum mass in grams of a completed craft that can be crafted.
"volume": "20L",              // Maximum volume (as a string) of a completed craft that can be craft.
```

#### The following optional fields are specific to SEATs.

```c++
"comfort": 3,                 // (Optional, default=0). Sleeping comfort as for terrain/furniture.
"floor_bedding_warmth": 300,  // (Optional, default=0). Bonus warmth as for terrain/furniture.
"bonus_fire_warmth_feet": 200,// (Optional, default=0). Bonus fire warmth as for terrain/furniture.
```

#### The following optional field describes pseudo tools for any part.

Crafting stations (e.g. kitchen, welding rigs etc) have tools that they provide as part
of forming the inventory for crafting as well as providing menu items when `e`xamining
the vehicle tile.
Following example array gives the vpart a pot as passive tool for crafting because it has no hotkey defined.
It also has a hotplate that can be activated by examining it with `e` then `h` on the part's vehicle tile.

```c++
"pseudo_tools" : [
  { "id": "hotplate", "hotkey": "h" },
  { "id": "pot" }
],
```

### Part Resistance

Damage resistance values, used by:

- `armor` of [`"type": "body_part"`](#body_parts)
- `damage_reduction` of [`"type": "vehicle_part"`](#vehicle-parts)

```C++
"all" : 0.0f,        // Initial value of all resistances, overridden by more specific types
"physical" : 10,     // Initial value for bash, cut and stab
"non_physical" : 10, // Initial value for acid, heat, cold, electricity and biological
"biological" : 0.2f, // Resistances to specific types. Those override the general ones.
"bash" : 3,
"cut" : 3,
"acid" : 3,
"stab" : 3,
"heat" : 3,
"cold" : 3,
"electric" : 3
```

### Vehicle Placement

```C++
"id":"road_straight_wrecks",  // Unique ID. Must be one continuous word, use underscores if necessary
"locations":[ {               // List of potential vehicle locations. When this placement is used, one of those locations will be chosen at random.
  "x" : [0,19],               // The x placement. Can be a single value or a range of possibilities.
  "y" : 8,                    // The y placement. Can be a single value or a range of possibilities.
  "facing" : [90,270]         // The facing of the vehicle. Can be a single value or an array of possible values.
} ]
```

### Vehicle Spawn

```C++
"id":"default_city",            // Unique ID. Must be one continuous word, use underscores if necessary
"spawn_types":[ {       // List of spawntypes. When this vehicle_spawn is applied, it will choose from one of the spawntypes randomly, based on the weight.
  "description" : "Clear section of road",           //    A description of this spawntype
  "weight" : 33,          //    The chance of this spawn type being used.
  "vehicle_function" : "jack-knifed_semi", // This is only needed if the spawntype uses a built-in json function.
  "vehicle_json" : {      // This is only needed for a json-specified spawntype.
  "vehicle" : "car",      // The vehicle or vehicle_group to spawn.
  "placement" : "%t_parked",  // The vehicle_placement to use when spawning the vehicle. This is not needed if the x, y, and facing are specified.
  "x" : [0,19],     // The x placement. Can be a single value or a range of possibilities. Not needed if placement is specified.
  "y" : 8,   // The y placement. Can be a single value or a range of possibilities. Not needed if placement is specified.
  "facing" : [90,270], // The facing of the vehicle. Can be a single value or an array of possible values. Not needed if placement is specified.
  "number" : 1, // The number of vehicles to spawn.
  "fuel" : -1, // The fuel of the new vehicles. Defined in percentage. 0 is empty, 100 is full tank, -1 is random from 7% to 35% (default).
  "status" : 1  // The status of the new vehicles. -1 = light damage (default), 0 = undamaged, 1 = disabled: destroyed seats, controls, tanks, tires, OR engine.
} } ]
```

### Vehicles

See also [VEHICLES_JSON.md](VEHICLES_JSON.md)

```C++
"id": "shopping_cart",                     // Internally-used name.
"name": "Shopping Cart",                   // Display name, subject to i18n.
"blueprint": "#",                          // Preview of vehicle - ignored by the code, so use only as documentation
"parts": [                                 // Parts list
    {"x": 0, "y": 0, "part": "box"},       // Part definition, positive x direction is to the left, positive y is to the right
    {"x": 0, "y": 0, "part": "casters"}    // See vehicle_parts.json for part ids
]
                                           /* Important! Vehicle parts must be defined in the
                                            * same order you would install
                                            * them in the game (ie, frames and mount points first).
                                            * You also cannot break the normal rules of installation
                                            * (you can't stack non-stackable part flags). */
```

### Weakpoint Sets

A thin container for weakpoint definitions. The only unique fields for this object are `"id"` and `"type"`. The `"weakpoints"` array contains weakpoints that are defined the same way as in monster definitions. See [Weakpoints](MONSTERS.md#weakpoints) for details.

```json
{
  "type": "weakpoint_set",
  "id": "wps_zombie_headshot",
  "weakpoints": [
    {
      "id": "wp_head_stun",
      "name": "the head",
      "coverage": 5,
      "crit_mult": { "all": 1.1 },
      "armor_mult": { "physical": 0.75 },
      "difficulty": { "melee": 1, "ranged": 3 },
      "effects": [
        {
          "effect": "stunned",
          "duration": [1, 2],
          "chance": 5,
          "message": "The %s is stunned!",
          "damage_required": [1, 10]
        },
        {
          "effect": "stunned",
          "duration": [1, 2],
          "chance": 25,
          "message": "The %s is stunned!",
          "damage_required": [11, 100]
        }
      ]
    }
  ]
}
```

Weakpoint sets are applied to a monster using the monster's `"weakpoint_sets"` field. Each subsequent weakpoint set overwrites weakpoints with the same id from the previous set. This allows hierarchical sets that can be applied from general -> specific, so that general weakpoint sets can be reused for many different monsters, and more specific sets can override some general weakpoints for specific monsters. For example:

```json
"//": "(in MONSTER type)",
"weakpoint_sets": [ "humanoid", "zombie_headshot", "riot_gear" ]
```

In the example above, the `"humanoid"` weakpoint set is applied as a base, then the `"zombie_headshot"` set overwrites any previously defined weakpoints with the same id (ex: "wp_head_stun"). Then the `"riot_gear"` set overwrites any matching weakpoints from the previous sets with armour-specific weakpoints. Finally, if the monster type has an inline `"weakpoints"` definition, those weakpoints overwrite any matching weakpoints from all sets.

Weakpoints only match if they share the same id, so it's important to define the weakpoint's id field if you plan to overwrite previous weakpoints.

# `data/json/items/` JSONs

### Generic Items

```C++
"type": "GENERIC",                // Defines this as some generic item
"id": "socks",                    // Unique ID. Must be one continuous word, use underscores if necessary
"name": {
    "ctxt": "clothing",           // Optional translation context. Useful when a string has multiple meanings that need to be translated differently in other languages.
    "str": "pair of socks",       // The name appearing in the examine box.  Can be more than one word separated by spaces
    "str_pl": "pairs of socks"    // Optional. If a name has an irregular plural form (i.e. cannot be formed by simply appending "s" to the singular form), then this should be specified. "str_pl" may also be needed if the unit test cannot determine if the correct plural form can be formed by simply appending "s". "str_sp" should be used instead of "str" or "str_pl" if the singular and plural forms are the same.
},
"conditional_names": [ {          // Optional list of names that will be applied in specified conditions (see Conditional Naming section for more details).
    "type": "COMPONENT_ID",       // The condition type.
    "condition": "leather",       // The condition to check for.
    "name": { "str": "pair of leather socks", "str_pl": "pairs of leather socks" } // Name field, same rules as above.
} ],
"container": "null",             // What container (if any) this item should spawn within
"repairs_like": "scarf",          // If this item does not have recipe, what item to look for a recipe for when repairing it.
"color": "blue",                 // Color of the item symbol.
"symbol": "[",                   // The item symbol as it appears on the map. Must be a Unicode string exactly 1 console cell width.
"looks_like": "rag",              // hint to tilesets if this item has no tile, use the looks_like tile
"description": "Socks. Put 'em on your feet.", // Description of the item
"ascii_picture": "ascii_socks", // Id of the asci_art used for this item
"phase": "solid",                            // (Optional, default = "solid") What phase it is
"weight": "350 g",                           // Weight, weight in grams, mg and kg can be used - "50 mg", "5 g" or "5 kg". For stackable items (ammo, comestibles) this is the weight per charge.
"volume": "250 ml",                          // Volume, volume in ml and L can be used - "50 ml" or "2 L". For stackable items (ammo, comestibles) this is the volume of stack_size charges.
"integral_volume": "50 ml",                        // Volume added to base item when item is integrated into another (eg. a gunmod integrated to a gun). Volume in ml and L can be used - "50 ml" or "2 L". Default is the same as volume.
"integral_weight": "50 g",                        // Weight added to base item when item is integrated into another (eg. a gunmod integrated to a gun). Default is the same as weight.
"longest_side": "15 cm",                     // Length of longest item dimension. Default is cube root of volume.
"rigid": false,                              // For non-rigid items volume (and for worn items encumbrance) increases proportional to contents
"insulation": 1,                             // (Optional, default = 1) If container or vehicle part, how much insulation should it provide to the contents
"price": 100,                                // Used when bartering with NPCs. For stackable items (ammo, comestibles) this is the price for stack_size charges. Can use string "cent" "USD" or "kUSD".
"price_postapoc": "1 USD",                       // Same as price but represent value post cataclysm. Can use string "cent" "USD" or "kUSD".
"degradation_multiplier": 0.8,               // Controls how quickly an item degrades when taking damage. 0 = no degradation. Defaults to 1.0.
"material": [                                // Material types, can be as many as you want.  See materials.json for possible options
  { "type": "cotton", "portion": 9 },        // type indicates the material's ID, portion indicates proportionally how much of the item is composed of that material
  { "type": "plastic" }                      // portion can be omitted and will default to 1. In this case, the item is 90% cotton and 10% plastic.
],
"repairs_with": [ "plastic" ],               // Material types that this item can be repaired with. Defaults to all the item materials.
"weapon_category": [ "WEAPON_CAT1" ],        // (Optional) Weapon categories this item is in for martial arts.
"melee_damage": {                            // (Optional) Damage caused by using it as a melee weapon.  These values cannot be negative.
  "bash": 0,
  "cut": 0
},
"to_hit": 0,                                 // (Optional, deprecated, default = 0) To-hit bonus if using it as a melee weapon (whatever for?).  The object version is preferred
"to_hit" {                                   // (Optional, Preferred) To hit bonus values, see below
  "grip": "solid",                           // the item's grip value
  "length": "long",                          // the item's length value
  "surface": "point",                        // the item's striking surface value
  "balance": "neutral"                       // the item's balance value
},
"variant_type": "gun"      // Possible options: "gun", "generic" - controls which options enable/disable seeing the variants of this item.
"variants": [              // Cosmetic variants this item can have
  {
    "id": "varianta",                           // id used in spawning to spawn this variant specifically
    "name": { "str": "Variant A" },             // The name used instead of the default name when this variant is selected
    "description": "A fancy variant A",         // The description used instead of the default when this variant is selected
    "ascii_picture": "valid_ascii_art_id",      // An ASCII art picture used when this variant is selected. If there is none, the default (if it exists) is used.
    "symbol": "/",                              // Valid unicode character to replace the item symbol. If not specified, no change will be made.
    "color": "red",                             // Replacement color of item symbol. If not specified, no change will be made.
    "weight": 2,                                // The relative chance of this variant being selected over other variants when this item is spawned with no explicit variant. Defaults to 0. If it is 0, this variant will not be selected
    "append": true                              // If this description should just be appended to the base item description instead of completely overwriting it.
  }
],
"flags": ["VARSIZE"],                        // Indicates special effects, see JSON_FLAGS.md
"environmental_protection_with_filter": 6,   // the resistance to environmental effects if an item (for example a gas mask) requires a filter to operate and this filter is installed. Used in combination with use_action 'GASMASK' and 'DIVE_TANK'
"magazine_well": 0,                          // Volume above which the magazine starts to protrude from the item and add extra volume
"magazines": [                               // Magazines types for each ammo type (if any) which can be used to reload this item
    [ "9mm", [ "glockmag" ] ]                // The first magazine specified for each ammo type is the default
    [ "45", [ "m1911mag", "m1911bigmag" ] ],
],
"milling": {                                 // Optional. If given, the item can be milled in a water/wind mill.
  "into": "flour",                           // The item id of the result of the milling.
  "conversion_rate": 1.0                     // Conversion of number of items that are milled (e.g. with a rate of 2, 10 input items will yield 20 milled items).
},
"explode_in_fire": true,                     // Should the item explode if set on fire
"explosion": {                               // Physical explosion data
    "power": 10,                             // Measure of explosion power in grams of TNT equivalent explosive, affects damage and range.
    "distance_factor": 0.9,                  // How much power is retained per traveled tile of explosion. Must be lower than 1 and higher than 0.
    "max_noise": 25,                         // Maximum amount of (auditory) noise the explosion might produce.
    "fire": true,                            // Should the explosion leave fire
    "shrapnel": 200,                         // Total mass of casing, rest of fragmentation variables set to reasonable defaults.
    "shrapnel": {
        "casing_mass": 200,                  // Total mass of casing, casing/power ratio determines fragment velocity.
        "fragment_mass": 0.05,               // Mass of each fragment in grams. Large fragments hit harder, small fragments hit more often.
        "recovery": 10,                      // Percentage chance to drop an item at landing point.
        "drop": "nail"                       // Which item to drop at landing point.
    }
},
```

#### To hit object

For additional clarity, an item's `to_hit` bonus can be encoded as string of 4 fields. All the fields are mandatory:

```C++
"to_hit": {
    "grip": "weapon",      // one of "bad", "none", "solid", or "weapon"
    "length": "hand",      // one of "hand", "short", or "long"
    "surface": "any",      // one of "point", "line", "any", or "every"
    "balance": "neutral"   // one of "clumsy", "uneven", "neutral", or "good"
}
```

See [GAME_BALANCE.md](GAME_BALANCE.md)'s `MELEE_WEAPONS` section for the criteria for selecting each value.

### Ammo

```C++
"type" : "AMMO",      // Defines this as ammo
...                   // same entries as above for the generic item.
                      // additional some ammo specific entries:
"ammo_type" : "shot", // Determines what it can be loaded in
"damage" : 18,        // Ranged damage when fired
"prop_damage": 2,     // Multiplies the damage of weapon by amount (overrides damage field)
"pierce" : 0,         // Armor piercing ability when fired
"range" : 5,          // Range when fired
"range_multiplier": 2,// Optional field multiplying base gun range
"dispersion" : 0,     // Inaccuracy of ammo, measured in 100ths of Minutes Of Angle (MOA)
"shot_count": 5,      // Optional field specifying that this ammo fires multiple projectiles per round, e.g. shot. If present shot_damage must also be specified.
"shot_damage": { "damage_type": "bullet", "amount": 15 } // Optional field specifying the damage caused by a single projectile fired from this round. If present shot_count must also be specified.
"shot_spread":        // Optional field specifying the additional dispersion of single projectiles. Only meaningful if shot_count is present.
"recoil" : 18,        // Recoil caused when firing
"count" : 25,         // Number of rounds that spawn together
"stack_size" : 50,    // (Optional) How many rounds are in the above-defined volume. If omitted, is the same as 'count'
"show_stats" : true,  // (Optional) Force stat display for combat ammo. (for projectiles lacking both damage and prop_damage)
"loudness": 10,       // (Optional) Modifier that can increase or decrease base gun's noise when firing. If loudness value is not specified, then game calculates it automatically from ammo's range, damage, and armor penetration.

"effects" : ["COOKOFF", "SHOT"]
```

### Ammo Effects

```C++
    "id": "TACTICAL_LASER_EXPLOSION",   // Defines this as some generic item
    "type": "ammo_effect",              // Defines this as an ammo_effect
    "trigger_chance": 5,                // Option one in X chances for the rest of json defined ammo_effect properties to trigger at the hit location. Defaults to 1
    "explosion": {  }                   // (Optional) Creates an explosion at the hit location. See "explosion" for details.
    "aoe": {  },                        // (Optional) Spawn a square of specified fields on the hit location.
    "trail": {  }                       // (Optional) Spawn a line of fields on the projectiles path.  Not affected by trigger_chance.
    "foamcrete_build": true             // (Optional) Creates foamcrete fields and walls on the hit location.
    "do_flashbang": true                // (Optional) Creates a hardcoded Flashbang explosion.
    "do_emp_blast": true                // (Optional) Creates a one tile radious EMP explosion at the hit location.
```

### Magazine

```C++
"type": "MAGAZINE",              // Defines this as a MAGAZINE
...                              // same entries as above for the generic item.
// Only MAGAZINE type items may define the following fields:
"ammo_type": [ "40", "357sig" ], // What types of ammo this magazine can be loaded with
"capacity" : 15,                 // Capacity of magazine (in equivalent units to ammo charges)
"count" : 0,                     // Default amount of ammo contained by a magazine (set this for ammo belts)
"default_ammo": "556",           // If specified override the default ammo (optionally set this for ammo belts)
"reload_time" : 100,             // How long it takes to load each unit of ammo into the magazine
"linkage" : "ammolink"           // If set one linkage (of given type) is dropped for each unit of ammo consumed (set for disintegrating ammo belts)
```

### Armor

Armor can be defined like this:

```C++
"type" : "ARMOR",                   // Defines this as armor
...                                 // same entries as above for the generic item.
                                    // additional some armor specific entries:
"covers" : [ "foot_l", "foot_r" ],  // Where it covers.  Use bodypart_id defined in body_parts.json  Also note that LEG_EITHER ARM_EITHER HAND_EITHER and FOOT_EITHER are allowed.
"warmth" : 10,                      //  (Optional, default = 0) How much warmth clothing provides
"environmental_protection" : 0,     //  (Optional, default = 0) How much environmental protection it affords
"encumbrance" : 0,                  // Base encumbrance (unfitted value)
"max_encumbrance" : 0,              // When a character is completely full of volume, the encumbrance of a non-rigid storage container will be set to this. Otherwise it'll be between the encumbrance and max_encumbrance following the equation: encumbrance + (max_encumbrance - encumbrance) * non-rigid volume / non-rigid capacity.  By default, max_encumbrance is encumbrance + (non-rigid volume / 250ml).
"weight_capacity_bonus": "20 kg",   // (Optional, default = 0) Bonus to weight carrying capacity, can be negative. Strings must be used - "5000 g" or "5 kg"
"weight_capacity_modifier": 1.5,    // (Optional, default = 1) Factor modifying base weight carrying capacity.
"coverage": 80,                     // What percentage of body part is covered (in general)
"cover_melee": 60,                  // What percentage of body part is covered (against melee)
"cover_ranged": 45,                 // What percentage of body part is covered (against ranged)
"cover_vitals": 10,                 // What percentage of critical hit damage is mitigated
"material_thickness" : 1,           // Thickness of material, in millimeter units (approximately).  Ordinary clothes range from 0.1 to 0.5. Particularly rugged cloth may reach as high as 1-2mm, and armor or protective equipment can range as high as 10 or rarely more.
"power_armor" : false,              // If this is a power armor item (those are special).
"non_functional" : "destroyed",     //this is the itype_id of an item that this turns into when destroyed. Currently only works for ablative armor.
"damage_verb": "makes a crunch, something has shifted", // if an item uses non-functional this will be the description when it turns into its non functional variant.
"valid_mods" : ["steel_padded"],    // List of valid clothing mods. Note that if the clothing mod doesn't have "restricted" listed, this isn't needed.
"armor": [ ... ]
```

#### Armor Portion Data

Encumbrance and coverage can be defined on a piece of armor as such:

```json
"armor": [
  {
    "encumbrance": [ 2, 8 ],
    "coverage": 95,
    "cover_melee": 95,
    "cover_ranged": 50,
    "cover_vitals": 5,
    "covers": [ "torso" ],
    "specifically_covers": [ "torso_upper", "torso_neck", "torso_lower" ],
    "material": [
      { "type": "cotton", "covered_by_mat": 100, "thickness": 0.2 },
      { "type": "plastic", "covered_by_mat": 15, "thickness": 0.8 }
    ]
  },
  {
    "encumbrance": 2,
    "coverage": 80,
    "cover_melee": 80,
    "cover_ranged": 70,
    "cover_vitals": 5,
    "covers": [ "arm_r", "arm_l" ],
    "specifically_covers": [ "arm_shoulder_r", "arm_shoulder_l" ],
    "material": [
      { "type": "cotton", "covered_by_mat": 100, "thickness": 0.2 }
    ]
  }
]
```

##### Encumbrance

(integer, or array of 2 integers)
The value of this field (or, if it is an array, the first value in the array) is the base encumbrance (unfitted) of this item.
When specified as an array, the second value is the max encumbrance - when the pockets of this armor are completely full of items, the encumbrance of a non-rigid item will be set to this. Otherwise it'll be between the first value and the second value following this the equation: first value + (second value - first value) \* non-rigid volume / non-rigid capacity. By default, the max encumbrance is the encumbrance + (non-rigid volume / 250ml).

##### Encumbrance_modifiers

Experimental feature for having an items encumbrance be generated by weight instead of a fixed number. Takes an array of "DESCRIPTORS" described in the code. If you don't need any descriptors put "NONE". This overrides encumbrance putting it as well will make it be ignored. Currently only works for head armor.

##### Coverage

(integer)
What percentage of time this piece of armor will be hit (and thus used as armor) when an attack hits the body parts in `covers`.

`cover_melee` and `cover_ranged` represent the percentage of time this piece of armor will be hit by melee and ranged attacks respectively. Usually these would be the same as `coverage`.

`cover_vitals` represents the percentage of critical hit damage is absorbed. Only the excess damage on top of normal damage is mitigated, so a vital coverage value of 100 means that critical hits would do the same amount as normal hits.

##### Covers

(array of strings)
What body parts this section of the armor covers. See the bodypart_ids defined in body_parts.json for valid values.

##### Specifically Covers

(array of strings)
What sub body parts this section of the armor covers. See the sub_bodypart_ids defined in body_parts.json for valid values.
These are used for wearing multiple armor pieces on a single layer without gaining encumbrance penalties. They are not mandatory
if you don't specify them it is assumed that the section covers all the body parts it covers entirely.
strapped layer items, and outer layer armor should always have these specified otherwise it will conflict with other pieces.

##### Part Materials

(array of objects)
The type, coverage and thickness of the materials that make up this portion of the armor.

- `type` indicates the material ID.
- `covered_by_mat` (_optional_) indicates how much (%) of this armor portion is covered by said material. Defaults to 100.
- `thickness` (_optional_) indicates the thickness of said material for this armor portion. Defaults to 0.0.
  The portion coverage and thickness determine how much the material contributes towards the armor's resistances.
  **NOTE:** These material definitions do not replace the standard `"material"` tag. Instead they provide more granularity for controlling different armor resistances.

`covered_by_mat` should not be confused with `coverage`. When specifying `covered_by_mat`, treat it like the `portion` field using percentage instead of a ratio value. For example:

```json
"armor": [
  {
    "covers" : [ "arm_r", "arm_l" ],
    "material": [
      {
        "type": "cotton",
        "covered_by_mat": 100,
        "thickness": 0.2
      },
      {
        "type": "plastic",
        "covered_by_mat": 15,
        "thickness": 0.6
      }
    ],
    ...
  }
]
```

The case above describes a portion of armor that covers the arms. This portion is 100% covered by cotton, so a hit to the arm part of the armor will definitely impact the cotton. That portion is also 15% covered by plastic. This means that during damage absorption, the cotton material contributes 100% of its damage absorption, while the plastic material only contributes 15% of its damage absorption. Damage absorption is also affected by `thickness`, so thickness and material cover both provide positive effects for protection.

##### Armor Data

Alternately, every item (book, tool, gun, even food) can be used as armor if it has armor_data:

```C++
"type" : "TOOL",      // Or any other item type
...                   // same entries as for the type (e.g. same entries as for any tool),
"armor_data" : {      // additionally the same armor data like above
    "warmth" : 10,
    "environmental_protection" : 0,
    "armor": [
      {
        "material": [
          { "type": "cotton", "covered_by_mat": 100, "thickness": 0.2 },
          { "type": "plastic", "covered_by_mat": 15, "thickness": 0.6 }
        ],
        "covers" : [ "foot_l", "foot_r" ],
        "encumbrance" : 0,
        "coverage" : 80,
        "cover_melee": 80,
        "cover_ranged": 70,
        "cover_vitals": 5
      }
    ],
    "power_armor" : false
}
```

#### Guidelines for thickness:

According to <https://propercloth.com/reference/fabric-thickness-weight/>, dress shirts and similar fine clothing range from 0.15mm to 0.35mm.
According to <https://leathersupreme.com/leather-hide-thickness-in-leather-jackets/>:

- Fashion leather clothes such as thin leather jackets, skirts, and thin vests are 1.0mm or less.
- Heavy leather clothes such as motorcycle suits average 1.5mm.

From [this site](https://cci.one/site/marine/design-tips-fabrication-overview/tables-of-weights-and-measures/), an equivalency guideline for fabric weight to mm:

| Cloth                         | oz/yd2 | g/m2 | Inches | mm   |
| ----------------------------- | ------ | ---- | ------ | ---- |
| Fiberglass (plain weave)      | 2.3    | 78   | 0.004  | 0.10 |
| Fiberglass (plain weave)      | 6.0    | 203  | 0.007  | 0.17 |
| Kevlar (TM) (plain weave)     | 5.0    | 170  | 0.010  | 0.25 |
| Carbon Fiber (plain weave)    | 5.8    | 197  | 0.009  | 0.23 |
| Carbon Fiber (unidirectional) | 9.0    | 305  | 0.011  | 0.28 |

Chart cobbled together from several sources for more general materials:

| Fabric     | oz/yd2 | Max g/m2 | Inches      | mm to use |
| ---------- | ------ | -------- | ----------- | --------- |
| Very light | 0-4    | 136      | 0.006-0.007 | 0.15      |
| Light      | 4-7    | 237      | 0.008       | 0.2       |
| Medium     | 7-11   | 373      | 0.009-0.011 | 0.25      |
| Heavy      | 11-14  | 475      | 0.012-0.014 | 0.3       |

Shoe thicknesses are outlined at <https://secretcobbler.com/choosing-leather/>; TL;DR: upper 1.2 - 2.0mm, lining 0.8 - 1.2mm, for a total of 2.0 - 3.2mm.

For turnout gear, see <https://web.archive.org/web/20220331215535/http://bolivar.mo.us/media/uploads/2014/09/2014-06-bid-fire-gear-packet.pdf>.

### Pet Armor

Pet armor can be defined like this:

```C++
"type" : "PET_ARMOR",     // Defines this as armor
...                   // same entries as above for the generic item.
                      // additional some armor specific entries:
"environmental_protection" : 0,  //  (Optional, default = 0) How much environmental protection it affords
"material_thickness" : 1,  // Thickness of material, in millimeter units (approximately).  Generally ranges between 1 - 5, more unusual armor types go up to 10 or more
"pet_bodytype":        // the body type of the pet that this monster will fit. See MONSTERS.md
"max_pet_vol":          // the maximum volume of the pet that will fit into this armor. Volume in ml or L can be used - "50 ml" or "2 L".
"min_pet_vol":          // the minimum volume of the pet that will fit into this armor. Volume in ml or L can be used - "50 ml" or "2 L".
"power_armor" : false, // If this is a power armor item (those are special).
```

Alternately, every item (book, tool, gun, even food) can be used as armor if it has armor_data:

```C++
"type" : "TOOL",      // Or any other item type
...                   // same entries as for the type (e.g. same entries as for any tool),
"pet_armor_data" : {      // additionally the same armor data like above
    "environmental_protection" : 0,
    "pet_bodytype": "dog",
    "max_pet_vol": "35000 ml",
    "min_pet_vol": "25000 ml",
    "material_thickness" : 1,
    "power_armor" : false
}
```

### Books

Books can be defined like this:

```C++
"type" : "BOOK",      // Defines this as a BOOK
...                   // same entries as above for the generic item.
                      // additional some book specific entries:
"max_level" : 5,      // Maximum skill level this book will train to
"intelligence" : 11,  // Intelligence required to read this book without penalty
"time" : "35 m",          // Time a single read session takes. An integer will be read in minutes or a time string can be used.
"fun" : -2,           // Morale bonus/penalty for reading
"skill" : "computer", // Skill raised
"chapters" : 4,       // Number of chapters (for fun only books), each reading "consumes" a chapter. Books with no chapters left are less fun (because the content is already known to the character).
"required_level" : 2  // Minimum skill level required to learn
```

It is possible to omit the `max_level` field if the book you're creating contains only recipes and it's not supposed to level up any skill. In this case the `skill` field will just refer to the skill required to learn the recipes.

Alternately, every item (tool, gun, even food) can be used as book if it has book_data:

```C++
"type" : "TOOL",      // Or any other item type
...                   // same entries as for the type (e.g. same entries as for any tool),
"book_data" : {       // additionally the same book data like above
    "max_level" : 5,
    "intelligence" : 11,
    "time" : 35,
    "fun" : -2,
    "skill" : "computer",
    "chapters" : 4,
    "use_action" : "MA_MANUAL", // The book_data can have use functions (see USE ACTIONS) that are triggered when the books has been read. These functions are not triggered by simply activating the item (like tools would).
    "required_level" : 2
}
```

Since many book names are proper names, it's often necessary to explicitly specify
the plural forms. The following is the game's convention on plural names of books:

1. For non-periodical books (textbooks, manuals, spellbooks, etc.),
   1. If the book's singular name is a proper name, then the plural name is `copies of (singular name)`. For example, the plural name of `Lessons for the Novice Bowhunter` is `copies of Lessons for the Novice Bowhunter`.
   2. Otherwise, the plural name is the usual plural of the singular name. For example, the plural name of `tactical baton defense manual` is `tactical baton defense manuals`
2. For periodicals (magazines and journals),
   1. If the periodical's singular name is a proper name, and doesn't end with "Magazine", "Weekly", "Monthly", etc., the plural name is `issues of (singular name)`. For example, the plural name of `Archery for Kids` is `issues of Archery for Kids`.
   2. Otherwise, the periodical's plural name is the usual plural of the singular name. For example, the plural name of `Crafty Crafter's Quarterly` is `Crafty Crafter's Quarterlies`.
3. For board games (represented internally as book items),
   1. If the board game's singular name is a proper name, the plural is `sets of (singular name)`. For example, the plural name of `Picturesque` is `sets of Picturesque`.
   2. Otherwise the plural name is the usual plural. For example, the plural of `deck of cards` is `decks of cards`.

#### Conditional Naming

The `conditional_names` field allows defining alternate names for items that will be displayed instead of (or in addition to) the default name, when specific conditions are met. Take the following (incomplete) definition for `sausage` as an example of the syntax:

```json
{
  "name": "sausage",
  "conditional_names": [
    {
      "type": "FLAG",
      "condition": "CANNIBALISM",
      "name": "Mannwurst"
    },
    {
      "type": "COMPONENT_ID",
      "condition": "mutant",
      "name": { "str_sp": "sinister %s" }
    },
    {
      "type": "VAR",
      "condition": "npctalk_var_DISPLAY_NAME_MORALE",
      "name": { "str_sp": "%s (morale)" },
      "value": "true"
    },
    {
      "type": "SNIPPET_ID",
      "condition": "test",
      "value": "one",
      "name": { "str_sp": "Report 1" }
    }
  ]
}
```

You can list as many conditional names for a given item as you want. Each conditional name must consist of 3 elements:

1. The condition type:
   - `COMPONENT_ID` searches all the components of the item (and all of _their_ components, and so on) for an item with the condition string in their ID. The ID only needs to _contain_ the condition, not match it perfectly (though it is case sensitive). For example, supplying a condition `mutant` would match `mutant_meat`.
   - `FLAG` which checks if an item has the specified flag (exact match).
   - `VAR` which checks if an item has a variable with the given name (exact match) and value = `value`. Variables set with effect*on_conditions will have `npctalk_var*`in front of their name.  So a variable created with:`"npc_add_var": "MORALE", "type": "DISPLAY","context":"NAME", "value": "Felt Great" }`would be named:`npctalk_var_DISPLAY_NAME_MORALE`.
   - `SNIPPET_ID`which checks if an item has a snippet id variable set by an effect_on_condition with the given name (exact match) and snippets id = `value`.
2. The condition you want to look for.
3. The name to use if a match is found. Follows all the rules of a standard `name` field, with valid keys being `str`, `str_pl`, and `ctxt`. You may use %s here, which will be replaced by the name of the item. Conditional names defined prior to this one are taken into account.

So, in the above example, if the sausage is made from mutant humanoid meat, and therefore both has the `CANNIBALISM` flag, _and_ has a component with `mutant` in its ID:

1. First, the item name is entirely replaced with "Mannwurst" if singular, or "Mannwursts" if plural.
2. Next, it is replaced by "sinister %s", but %s is replaced with the name as it was before this step, resulting in "sinister Mannwurst" or "sinister Mannwursts".

NB: If `"str": "sinister %s"` was specified instead of `"str_sp": "sinister %s"`, the plural form would be automatically created as "sinister %ss", which would become "sinister Mannwurstss" which is of course one S too far. Rule of thumb: If you are using %s in the name, always specify an identical plural form unless you know exactly what you're doing!

#### Color Key

When adding a new book, please use this color key:

- Magazines: `pink`
- “Paperbacks” Short enjoyment books (including novels): `light_cyan`
- “Hardbacks” Long enjoyment books (including novels): `light_blue`
- “Small textbook” Beginner level textbooks, guides and martial arts books: `green`
- “Large textbook” Advanced level textbooks and advanced guides: `blue`
- Religious books: `dark_gray`
- “Printouts” (including spiral-bound, binders, and similar) Technical documents, (technical?) protocols, (lab) journals, personal diaries: `light_green`
- Other reading material/non-books (use only if every other category does not apply): `light_gray`

A few exceptions to this color key may apply, for example for books that don’t are what they seem to be.
Never use `yellow` and `red`, those colors are reserved for sounds and infrared vision.

#### CBMs

CBMs can be defined like this:

```C++
"type" : "BIONIC_ITEM",         // Defines this as a CBM
...                             // same entries as above for the generic item.
                                // additional some CBM specific entries:
"bionic_id" : "bio_advreactor", // ID of the installed bionic if not equivalent to "id"
"difficulty" : 11,              // Difficulty of installing CBM
"is_upgrade" : true,            // Whether the CBM is an upgrade of another bionic.
"installation_data" : "AID_bio_advreactor" // ID of the item which allows for almost guaranteed installation of corresponding bionic.
```

### Comestibles

```C++
"type" : "COMESTIBLE",      // Defines this as a COMESTIBLE
...                         // same entries as above for the generic item.
// Only COMESTIBLE type items may define the following fields:
"spoils_in" : 0,            // A time duration: how long a comestible is good for. 0 = no spoilage.
"use_action" : [ "CRACK" ],     // What effects a comestible has when used, see special definitions below
"stim" : 40,                // Stimulant effect
"fatigue_mod": 3,           // How much fatigue this comestible removes. (Negative values add fatigue)
"comestible_type" : "MED",  // Comestible type, used for inventory sorting. One of 'FOOD', 'DRINK', 'MED', or 'INVALID' (consider using a different "type" than COMESTIBLE instead of using INVALID)
"consumption_effect_on_conditions" : [ "EOC_1" ],  // Effect on conditions to run after consuming.  Inline or string id supported
"quench" : 0,               // Thirst quenched
"healthy" : -2,             // Health effects (used for sickness chances)
"addiction_potential" : 80, // Default strength for this item to cause addictions
"addiction_type" : [ "crack", { "addiction": "cocaine", "potential": 5 } ], // Addiction types (if no potential is given, the "addiction_potential" field is used to determine the strength of that addiction)
"monotony_penalty" : 0,     // (Optional, default: 2) Fun is reduced by this number for each one you've consumed in the last 48 hours.
                            // Can't drop fun below 0, unless the comestible also has the "NEGATIVE_MONOTONY_OK" flag.
"calories" : 0,             // Hunger satisfied (in kcal)
"nutrition" : 0,            // Hunger satisfied (OBSOLETE)
"tool" : "apparatus",       // Tool required to be eaten/drank
"charges" : 4,              // Number of uses when spawned
"stack_size" : 8,           // (Optional) How many uses are in the above-defined volume. If omitted, is the same as 'charges'
"fun" : 50                  // Morale effects when used
"freezing_point": 32,       // (Optional) Temperature in C at which item freezes, default is water (32F/0C)
"cooks_like": "meat_cooked",         // (Optional) If the item is used in a recipe, replaces it with its cooks_like
"parasites": 10,            // (Optional) Probability of becoming parasitized when eating
"contamination": [ { "disease": "bad_food", "probability": 5 } ],         // (Optional) List of diseases carried by this comestible and their associated probability. Values must be in the [0, 100] range.
"vitamins": [ [ "calcium", 5 ], [ "iron", 12 ] ],         // Vitamins provided by consuming a charge (portion) of this.  An integer percentage of ideal daily value average.  Vitamins array keys include the following: calcium, iron, vitA, vitB, vitC, mutant_toxin, bad_food, blood, and redcells.  Note that vitB is B12.
"material": [                     // All materials (IDs) this food is made of
  { "type": "flesh", "portion": 3 }, // See Generic Item attributes for type and portion details
  { "type": "wheat", "portion": 5 }
],
"primary_material": "meat",       // What the primary material ID is. Materials determine specific heat.
"rot_spawn": "MONSTERGROUP_NAME", // Monster group that spawns when food becomes rotten (used for egg hatching)
"rot_spawn_chance": 10,           // Percent chance of monstergroup spawn when food rots. Max 100.
"smoking_result": "dry_meat",     // Food that results from drying this food in a smoker
"petfood": [ "FUNGALFRUIT", "MIGOFOOD" ] // (Optional) Pet food categories this item is in.
```

### Containers

Any Item can be a container. To add the ability to contain things to an item, you need to add pocket_data. The below example is a typical container (shown with optional default values, or mandatory if the value is mandatory)

```C++
"pocket_data": [
  {
    "pocket_type": "CONTAINER",       // Typical container pocket. Pockets can also be MAGAZINE.
    "max_contains_volume": mandatory, // Maximum volume this pocket can hold, totaled among all contained items.  For example "2 L" or "2000 ml" would hold two liters of items.
    "max_contains_weight": mandatory, // Maximum weight this pocket can hold, totaled among all container items.  For example "6 kg" is about enough to contain a bowling ball.
    "min_item_volume": "0 ml",        // Minimum volume of item that can be placed into this pocket.  Items smaller than this cannot be placed in the pocket.
    "max_item_volume": "0 ml",        // Maximum volume of item that can fit through the opening into this pocket.  For example, a 2-liter bottle has a "17 ml" opening.
    "max_item_length": "0 mm",        // Maximum length of items that can fit in this pocket, by their longest_side.  Default is the diagonal opening length assuming volume is a cube (cube_root(vol)*square_root(2))
    "spoil_multiplier": 1.0,          // How putting an item in this pocket affects spoilage.  Less than 1.0 and the item will be preserved longer; 0.0 will preserve indefinitely.
    "weight_multiplier": 1.0,         // The items in this pocket magically weigh less inside than outside.  Nothing in vanilla should have a weight_multiplier.
    "moves": 100,                     // Indicates the number of moves it takes to remove an item from this pocket, assuming best conditions.
    "rigid": false,                   // Default false. If true, this pocket's size is fixed, and does not expand when filled.  A glass jar would be rigid, while a plastic bag is not.
    "forbidden": true,                // Default false. If true, this pocket cannot be used by players.
    "magazine_well": "0 ml",          // Amount of space you can put items in the pocket before it starts expanding.  Only works if rigid = false.
    "watertight": false,              // Default false. If true, can contain liquid.
    "airtight": false,                // Default false. If true, can contain gas.
    "ablative": false,                 // Default false. If true, this item holds a single ablative plate. Make sure to include a flag_restriction on the type of plate that can be added.
    "holster": false,                 // Default false. If true, only one stack of items can be placed inside this pocket, or one item if that item is not count_by_charges.
    "open_container": false,          // Default false. If true, the contents of this pocket will spill if this item is placed into another item.
    "fire_protection": false,         // Default false. If true, the pocket protects the contained items from exploding if tossed into a fire.
    "ammo_restriction": { "ammotype": count }, // Restrict pocket to a given ammo type and count.  This overrides mandatory volume, weight, watertight and airtight to use the given ammo type instead.  A pocket can contain any number of unique ammo types each with different counts, and the container will only hold one type (as of now).  If this is left out, it will be empty.
    "flag_restriction": [ "FLAG1", "FLAG2" ],  // Items can only be placed into this pocket if they have a flag that matches one of these flags.
    "item_restriction": [ "item_id" ],         // Only these item IDs can be placed into this pocket. Overrides ammo and flag restrictions.
    "material_restriction": [ "material_id" ], // Only items that are mainly made of this material can enter.
	// If multiple of "flag_restriction", "material_restriction" and "item_restriction" are used simultaneously then any item that matches any of them will be accepted.

    "sealed_data": { "spoil_multiplier": 0.0 } // If a pocket has sealed_data, it will be sealed when the item spawns.  The sealed version of the pocket will override the unsealed version of the same datatype.

    "inherits_flags": true // if a pocket inherits flags it means any flags that the items inside have contribute to the item that has the pockets itself.
  }
]
```

### Melee

```C++
"id": "hatchet",       // Unique ID. Must be one continuous word, use underscores if necessary
"symbol": ";",         // ASCII character used in-game
"color": "light_gray", // ASCII character color
"name": "hatchet",     // In-game name displayed
"description": "A one-handed hatchet. Makes a great melee weapon, and is useful both for cutting wood, and for use as a hammer.", // In-game description
"price": 95,           // Used when bartering with NPCs.  Can use string "cent" "USD" or "kUSD".
"material": [          // Material types.  See materials.json for possible options
  { "type": "iron", "portion": 2 }, // See Generic Item attributes for type and portion details
  { "type": "wood", "portion": 3 }
],
"weight": 907,         // Weight, measured in grams
"volume": "1500 ml",   // Volume, volume in ml and L can be used - "50 ml" or "2 L"
"melee_damage": {      // Damage caused by using it as a melee weapon
  "bash": 12,
  "cut": 12
},
"flags" : ["CHOP"],    // Indicates special effects
"to_hit": 1            // To-hit bonus if using it as a melee weapon
```

### Memory Cards

Memory card information can be defined on any GENERIC item by adding an object named `memory_card`, this field does not support `extend`/`remove`, only override.

```C++
"id": "memory_card_unread",
"name": "memory card (unread)",
// ...
"memory_card": {
  "data_chance": 0.5,                  // 50% chance to contain data
  "on_read_convert_to": "memory_card", // converted to this itype_id on read
  "photos_chance": 0.33,               // 33% chance to contain new photos
  "photos_amount": 3,                  // contains between 1 and 3 new photos
  "songs_chance": 0.33,                // 33% chance to contain new songs
  "songs_amount": 4,                   // contains between 1 and 4 new songs
  "recipes_chance": 0.33,              // 33% chance to contain new recipes
  "recipes_amount": 5,                 // contains between 1 and 5 new recipes
  "recipes_level_min": 4,              // recipes will have at least level 4
  "recipes_level_max": 8,              // recipes will have at most level 8
  "recipes_categories": [ "CC_FOOD" ]  // recipes from CC_FOOD category
}
```

### Gun

Guns can be defined like this:

```C++
"type": "GUN",             // Defines this as a GUN
...                        // same entries as above for the generic item.
                           // additional some gun specific entries:
"skill": "pistol",         // Skill used for firing
"ammo": [ "357", "38" ],   // Ammo types accepted for reloading
"ranged_damage": 0,        // Ranged damage when fired
"range": 0,                // Range when fired
"dispersion": 32,          // Inaccuracy of gun, measured in 100ths of Minutes Of Angle (MOA)
// When sight_dispersion and aim_speed are present in a gun mod, the aiming system picks the "best"
// sight to use for each aim action, which is the fastest sight with a dispersion under the current
// aim threshold.
"sight_dispersion": 10,    // Inaccuracy of gun derived from the sight mechanism, measured in 100ths of Minutes Of Angle (MOA)
"recoil": 0,               // Recoil caused when firing, measured in 100ths of Minutes Of Angle (MOA)
"durability": 8,           // Resistance to damage/rusting, also determines misfire chance
"blackpowder_tolerance": 8,// One in X chance to get clogged up (per shot) when firing blackpowder ammunition (higher is better). Optional, default is 8.
"min_cycle_recoil": 0,     // Minimum ammo recoil for gun to be able to fire more than once per attack.
"clip_size": 100,          // Maximum amount of ammo that can be loaded
"energy_drain": "2 kJ",    // Additionally to the normal ammo (if any), a gun can require some electric energy. Drains from battery in gun. Use flags "USE_UPS" and "USES_BIONIC_POWER" to drain other sources. This also works on mods. Attaching a mod with energy_drain will add/increase drain on the weapon.
"ammo_to_fire" 1,          // Amount of ammo used
"modes": [ [ "DEFAULT", "semi-auto", 1 ], [ "AUTO", "auto", 4 ] ], // Firing modes on this gun, DEFAULT,AUTO, or MELEE followed by the name of the mode displayed in game, and finally the number of shots of the mod.
"reload": 450,             // Amount of time to reload, 100 = 1 second = 1 "turn"
"built_in_mods": ["m203"], //An array of mods that will be integrated in the weapon using the IRREMOVABLE tag.
"default_mods": ["m203"]   //An array of mods that will be added to a weapon on spawn.
"barrel_volume": "30 mL",  // Amount of volume lost when the barrel is sawn. Approximately 250 ml per inch is a decent approximation.
"valid_mod_locations": [ [ "brass catcher", 1 ], [ "grip", 1 ] ],  // The valid locations for gunmods and the mount of slots for that location.
"loudness": 10             // Amount of noise produced by this gun when firing. If no value is defined, then it's calculated based on loudness value from loaded ammo. Final loudness is calculated as gun loudness + gunmod loudness + ammo loudness. If final loudness is 0, then the gun is completely silent.
```

Alternately, every item (book, tool, armor, even food) can be used as gun if it has gun_data:

```json
"type": "TOOL",      // Or any other item type
...                   // same entries as for the type (e.g. same entries as for any tool),
"gun_data" : {        // additionally the same gun data like above
    "skill": ...,
    "recoil": ...,
    ...
}
```

### Gunmod

Gun mods can be defined like this:

```C++
"type": "GUNMOD",              // Defines this as a GUNMOD
...                            // Same entries as above for the generic item.
                               // Additionally some gunmod specific entries:
// Only GUNMOD type items may define the following fields:
"location": "stock",           // Mandatory. Where is this gunmod is installed?
"mod_targets": [ "crossbow" ], // Mandatory. What kind of weapons can this gunmod be used with?
"install_time": "30 s",        // Mandatory. How long does installation take? An integer will be read as moves or a time string can be used.
"acceptable_ammo": [ "9mm" ],  // Optional filter restricting mod to guns with those base (before modifiers) ammo types
"ammo_modifier": [ "57" ],     // Optional field which if specified modifies parent gun to use these ammo types
"magazine_adaptor": [ [ "223", [ "stanag30" ] ] ], // Optional field which changes the types of magazines the parent gun accepts
"damage_modifier": -1,         // Optional field increasing or decreasing base gun damage
"dispersion_modifier": 15,     // Optional field increasing or decreasing base gun dispersion
"loudness_modifier": 4,        // Optional field increasing or decreasing base guns loudness
"range_modifier": 2,           // Optional field increasing or decreasing base gun range
"range_multiplier": 1.2,       // Optional field multiplying base gun range
"energy_drain_modifier": "200 kJ",  // Optional field increasing or decreasing base gun energy consumption (per shot) by adding given value. This addition is not multiplied by energy_drains_multiplier.
"energy_drains_multiplier": 2.5, // Optional field increasing or decreasing base gun energy consumption (per shot) by multiplying by given value.
"reload_modifier": -10,        // Optional field increasing or decreasing base gun reload time in percent
"min_str_required_mod": 14,    // Optional field increasing or decreasing minimum strength required to use gun
"aim_speed": 3,                // A measure of how quickly the player can aim, in moves per point of dispersion.
"ammo_effects": [ "BEANBAG" ], // List of IDs of ammo_effect types
"consume_chance": 5000,        // Odds against CONSUMABLE mod being destroyed when gun is fired (default 1 in 10000)
"consume_divisor": 10,         // Divide damage against mod by this amount (default 1)
"handling_modifier": 4,        // Improve gun handling. For example a forward grip might have 6, a bipod 18
"mode_modifier": [ [ "AUTO", "auto", 4 ] ], // Modify firing modes of the gun, to give AUTO or REACH for example
"barrel_length": "45 mm"       // Specify a direct barrel length for this gun mod. If used only the first mod with a barrel length will be counted
```

Alternately, every item (book, tool, armor, even food) can be used as a gunmod if it has gunmod_data:

```json
"type": "TOOL",       // Or any other item type
...                   // same entries as for the type (e.g. same entries as for any tool),
"gunmod_data" : {
    "location": ...,
    "mod_targets": ...,
    ...
}
```

### Batteries

```C++
"type": "BATTERY",    // Defines this as a BATTERY
...                   // Same entries as above for the generic item
                      // Additionally some battery specific entries:
"max_energy": "30 kJ" // Mandatory. Maximum energy quantity the battery can hold
```

### Tools

```C++
"id": "torch_lit",    // Unique ID. Must be one continuous word, use underscores if necessary
"type": "TOOL",       // Defines this as a TOOL
"symbol": "/",        // ASCII character used in-game
"color": "brown",     // ASCII character color
"name": "torch (lit)", // In-game name displayed
"description": "A large stick, wrapped in gasoline soaked rags. This is burning, producing plenty of light", // In-game description
"price": 0,           // Used when bartering with NPCs.  Can use string "cent" "USD" or "kUSD".
"material": [ { "type": "wood", "portion": 1 } ], // Material types.  See materials.json for possible options. Also see Generic Item attributes for type and portion details
"techniques": [ "FLAMING" ], // Combat techniques used by this tool
"flags": [ "FIRE" ],      // Indicates special effects
"weight": 831,        // Weight, measured in grams
"volume": "1500 ml",  // Volume, volume in ml and L can be used - "50 ml" or "2 L"
"melee_damage": {     // Damage caused by using it as a melee weapon
  "bash": 12,
  "cut": 0
},
"to_hit": 3,          // To-hit bonus if using it as a melee weapon
"turns_per_charge": 20, // Charges consumed over time, deprecated in favor of power_draw
"fuel_efficiency": 0.2, // When combined with being a UPS this item will burn fuel for its given energy value to produce energy with the efficiency provided. Needs to be > 0 for this to work
"use_action": [ "firestarter" ], // Action performed when tool is used, see special definition below
"qualities": [ [ "SCREW", 1 ] ], // Inherent item qualities like hammering, sawing, screwing (see tool_qualities.json)
"charged_qualities": [ [ "DRILL", 3 ] ], // Qualities available if tool has at least charges_per_use charges left
// Only TOOL type items may define the following fields:
"ammo": [ "NULL" ],        // Ammo types used for reloading
"charge_factor": 5,        // this tool uses charge_factor charges for every charge required in a recipe; intended for tools that have a "sub" field but use a different ammo that the original tool
"charges_per_use": 1,      // Charges consumed per tool use
"initial_charges": 75,     // Charges when spawned
"max_charges": 75,         // Maximum charges tool can hold
"rand_charges": [10, 15, 25], // Randomize the charges when spawned. This example has a 50% chance of rng(10, 15) charges and a 50% chance of rng(15, 25). (The endpoints are included.)
"power_draw": "50 mW",          // Energy consumption per second
"revert_to": "torch_done", // Transforms into item when charges are expended
"sub": "hotplate",         // optional; this tool has the same functions as another tool
```

### Seed Data

Every item type can have optional seed data, if the item has seed data, it's considered a seed and can be planted:

```C++
"seed_data" : {
    "fruit": "weed", // The item id of the fruits that this seed will produce.
    "seeds": false, // (optional, default is true). If true, harvesting the plant will spawn seeds (the same type as the item used to plant). If false only the fruits are spawned, no seeds.
    "fruit_div": 2, // (optional, default is 1). Final amount of fruit charges produced is divided by this number. Works only if fruit item is counted by charges.
    "byproducts": ["withered", "straw_pile"], // A list of further items that should spawn upon harvest.
    "plant_name": "sunflower", // The name of the plant that grows from this seed. This is only used as information displayed to the user.
    "grow" : 91 // A time duration: how long it takes for a plant to fully mature. Based around a 91 day season length (roughly a real world season) to give better accuracy for longer season lengths
                // Note that growing time is later converted based upon the season_length option, basing it around 91 is just for accuracy purposes
                // A value 91 means 3 full seasons, a value of 30 would mean 1 season.
}
```

### Brewing Data

Every item type can have optional brewing data, if the item has brewing data, it can be placed in a vat and will ferment into a different item type.

Currently only vats can only accept and produce liquid items.

```C++
"brewable" : {
    "time": 3600, // A time duration: how long the fermentation will take.
    "result": "beer" // The id of the result of the fermentation.
}
```

#### `Effects_carried`

(optional, default: empty list)

Effects of the artifact when it's in the inventory (main inventory, wielded, or worn) of the player.

Possible values (see src/enums.h for an up-to-date list):

- `AEP_STR_UP` Strength + 4
- `AEP_DEX_UP` Dexterity + 4
- `AEP_PER_UP` Perception + 4
- `AEP_INT_UP` Intelligence + 4
- `AEP_ALL_UP` All stats + 2
- `AEP_SPEED_UP` +20 speed
- `AEP_IODINE` Reduces radiation
- `AEP_SNAKES` Summons friendly snakes when you're hit
- `AEP_INVISIBLE` Makes you invisible
- `AEP_CLAIRVOYANCE` See through walls
- `AEP_SUPER_CLAIRVOYANCE` See through walls to a great distance
- `AEP_STEALTH` Your steps are quieted
- `AEP_EXTINGUISH` May extinguish nearby flames
- `AEP_GLOW` Four-tile light source
- `AEP_PSYSHIELD` Protection from fear paralyze attack
- `AEP_RESIST_ELECTRICITY` Protection from electricity
- `AEP_CARRY_MORE` Increases carrying capacity by 200
- `AEP_SAP_LIFE` Killing non-zombie monsters may heal you
- `AEP_HUNGER` Increases hunger
- `AEP_THIRST` Increases thirst
- `AEP_SMOKE` Emits smoke occasionally
- `AEP_EVIL` Addiction to the power
- `AEP_SCHIZO` Mimicks schizophrenia
- `AEP_RADIOACTIVE` Increases your radiation
- `AEP_MUTAGENIC` Mutates you slowly
- `AEP_ATTENTION` Draws netherworld attention slowly
- `AEP_STR_DOWN` Strength - 3
- `AEP_DEX_DOWN` Dex - 3
- `AEP_PER_DOWN` Per - 3
- `AEP_INT_DOWN` Int - 3
- `AEP_ALL_DOWN` All stats - 2
- `AEP_SPEED_DOWN` -20 speed
- `AEP_FORCE_TELEPORT` Occasionally force a teleport
- `AEP_MOVEMENT_NOISE` Makes noise when you move
- `AEP_BAD_WEATHER` More likely to experience bad weather
- `AEP_SICK` Decreases health over time

#### `effects_worn`

(optional, default: empty list)

Effects of the artifact when it's worn (it must be an armor item to be worn).

Possible values are the same as for effects_carried.

#### `effects_wielded`

(optional, default: empty list)

Effects of the artifact when it's wielded.

Possible values are the same as for effects_carried.

#### `effects_activated`

(optional, default: empty list)

Effects of the artifact when it's activated (which require it to have a `"use_action": [ "ARTIFACT" ]` and it must have a non-zero max_charges value).

Possible values (see src/artifact.h for an up-to-date list):

- `AEA_STORM` Emits shock fields
- `AEA_FIREBALL` Targeted
- `AEA_ADRENALINE` Adrenaline rush
- `AEA_MAP` Maps the area around you
- `AEA_BLOOD` Shoots blood all over
- `AEA_FATIGUE` Creates interdimensional fatigue
- `AEA_ACIDBALL` Targeted acid
- `AEA_PULSE` Destroys adjacent terrain
- `AEA_HEAL` Heals minor damage
- `AEA_CONFUSED` Confuses all monsters in view
- `AEA_ENTRANCE` Chance to make nearby monsters friendly
- `AEA_BUGS` Chance to summon friendly insects
- `AEA_TELEPORT` Teleports you
- `AEA_LIGHT` Temporary light source
- `AEA_GROWTH` Grow plants, a la triffid queen
- `AEA_HURTALL` Hurts all monsters!
- `AEA_FUN` Temporary morale bonus
- `AEA_SPLIT` Split between good and bad
- `AEA_RADIATION` Spew radioactive gas
- `AEA_PAIN` Increases player pain
- `AEA_MUTATE` Chance of mutation
- `AEA_PARALYZE` You lose several turns
- `AEA_FIRESTORM` Spreads minor fire all around you
- `AEA_ATTENTION` Attention from sub-prime denizens
- `AEA_TELEGLOW` Teleglow disease
- `AEA_NOISE` Loud noise
- `AEA_SCREAM` Noise & morale penalty
- `AEA_DIM` Darkens the sky slowly
- `AEA_FLASH` Flashbang
- `AEA_VOMIT` User vomits
- `AEA_SHADOWS` Summon shadow creatures
- `AEA_STAMINA_EMPTY` Empties most of the player's stamina gauge

### Software Data

Every item type can have software data, it does not have any behavior:

```C++
"software_data" : {
    "type": "USELESS", // unused
    "power" : 91 // unused
}
```

### Use Actions

The contents of use_action fields can either be a string indicating a built-in function to call when the item is activated (defined in iuse.cpp), or one of several special definitions that invoke a more structured function.

```C++
"use_action": {
    "type": "transform",  // The type of method, in this case one that transforms the item.
    "target": "gasoline_lantern_on", // The item to transform to.
    "active": true,       // Whether the item is active once transformed.
    "ammo_scale": 0,    // For use when an item automatically transforms into another when its ammo drops to 0, or to allow guns to transform with 0 ammo.
    "msg": "You turn the lamp on.", // Message to display when activated.
    "need_fire": 1,                 // Whether fire is needed to activate.
    "need_fire_msg": "You need a lighter!", // Message to display if there is no fire.
    "need_charges": 1,                      // Number of charges the item needs to transform.
    "need_charges_msg": "The lamp is empty.", // Message to display if there aren't enough charges.
    "need_empty": true,                       // Whether the item must be empty to be transformed; false by default.
    "need_worn": true,                        // Whether the item must be worn to be transformed; false by default.
    "need_wielding": true,                    // Whether the item must be wielded to be transformed; false by default.
    "qualities_needed": { "WRENCH_FINE": 1 }, // Tool qualities needed, e.g. "fine bolt turning 1".
    "target_charges": 3, // Number of charges the transformed item has.
    "rand_target_charges": [10, 15, 25], // Randomize the charges the transformed item has. This example has a 50% chance of rng(10, 15) charges and a 50% chance of rng(15, 25). (The endpoints are included.)
    "ammo_qty": 3,              // If zero or positive set remaining ammo of transformed item to this.
    "random_ammo_qty": [1, 5],  // If this has values, set remaining ammo of transformed item to one of them chosen at random.
    "ammo_type": "tape",        // If both this and ammo_qty are specified then set transformed item to this specific ammo.
    "container": "jar",  // Container holding the target item.
    "sealed": true,      // Whether the transformed container is sealed; true by default.
    "menu_text": "Lower visor"      // (Optional) Text displayed in the activation screen, defaults to "Turn on".
    "moves" : 500         // Moves required to transform the item in excess of a normal action.
},
"use_action": {
    "type": "explosion", // An item that explodes when it runs out of charges.
    "sound_volume": 0, // Volume of a sound the item makes every turn.
    "sound_msg": "Tick.", // Message describing sound the item makes every turn.
    "no_deactivate_msg": "You've already pulled the %s's pin, try throwing it instead.", // Message to display if the player tries to activate the item, prevents activation from succeeding if defined.
    "explosion": { // Optional: physical explosion data
        // Specified like `"explosion"` field in generic items
    },
    "draw_explosion_radius" : 5, // How large to draw the radius of the explosion.
    "draw_explosion_color" : "ltblue", // The color to use when drawing the explosion.
    "do_flashbang" : true, // Whether to do the flashbang effect.
    "flashbang_player_immune" : true, // Whether the player is immune to the flashbang effect.
    "fields_radius": 3, // The radius of spread for fields produced.
    "fields_type": "fd_tear_gas", // The type of fields produced.
    "fields_min_intensity": 3, // Minimum intensity of field generated by the explosion.
    "fields_max_intensity": 3, // Maximum intensity of field generated by the explosion.
    "emp_blast_radius": 4, // The radius of EMP blast created by the explosion.
    "scrambler_blast_radius": 4 // The radius of scrambler blast created by the explosion.
},
"use_action": {
    "type": "change_scent", // Change the scent type of the user.
    "scent_typeid": "sc_fetid", // The scenttype_id of the new scent.
    "charges_to_use": 2, // Charges consumed when the item is used.  (Default: 1)
    "scent_mod": 150, // Modifier added to the scent intensity.  (Default: 0)
    "duration": "6 m", // How long does the effect last.
    "effects": [ { "id": "fetid_goop", "duration": 360, "bp": "torso", "permanent": true } ], // List of effects with their id, duration, bodyparts, and permanent bool
    "waterproof": true, // Is the effect waterproof.  (Default: false)
    "moves": 500 // Number of moves required in the process.
},
"use_action" : {
    "type" : "consume_drug", // A drug the player can consume.
    "activation_message" : "You smoke your crack rocks.  Mother would be proud.", // Message, ayup.
    "effects" : { "high": 15 }, // Effects and their duration.
    "damage_over_time": [
        {
          "damage_type": "pure", // Type of damage
          "duration": "1 m", // For how long this damage will be applied
          "amount": -10, // Amount of damage applied every turn, negative damage heals
          "bodyparts": [ "torso", "head", "arm_l", "leg_l", "arm_r", "leg_r" ] // Body parts hit by the damage
        }
    ]
    "stat_adjustments": {"hunger" : -10}, // Adjustment to make to player stats.
    "fields_produced" : {"cracksmoke" : 2}, // Fields to produce, mostly used for smoke.
    "charges_needed" : { "fire" : 1 }, // Charges to use in the process of consuming the drug.
    "tools_needed" : { "apparatus" : -1 }, // Tool needed to use the drug.
    "moves": 50 // Number of moves required in the process, default value is 100.
},
"use_action": {
    "type": "place_monster", // place a turret / manhack / whatever monster on the map
    "monster_id": "mon_manhack", // monster id, see monsters.json
    "difficulty": 4, // difficulty for programming it (manhacks have 4, turrets 6, ...)
    "hostile_msg": "It's hostile!", // (optional) message when programming the monster failed and it's hostile.
    "friendly_msg": "Good!", // (optional) message when the monster is programmed properly and it's friendly.
    "place_randomly": true, // if true: places the monster randomly around the player, if false: let the player decide where to put it (default: false)
    "skills": [ "unarmed", "throw" ], // (optional) array of skill IDs. Higher skill level means more likely to place a friendly monster.
    "moves": 60, // how many move points the action takes.
    "is_pet": false // specifies if the spawned monster is a pet. The monster will only spawn as a pet if it is spawned as friendly, hostile monsters will never be pets.
},
"use_action": {
    "type": "place_npc", // place npc of specific class on the map
    "npc_class_id": "true_foodperson", // npc id, see npcs/npc.json
    "summon_msg": "You summon a food hero!", // (optional) message when summoning the npc.
    "place_randomly": true, // if true: places npc randomly around the player, if false: let the player decide where to put it (default: false)
    "moves": 50, // how many move points the action takes.
    "radius": 1 // maximum radius for random npc placement.
},
"use_action": {
    "type": "link_up", // Connect item to a vehicle or appliance, such as plugging a chargeable device into a power source.
    "cable_type": "generic_device_cable" // The item type of the cable created with this action ( Optional, defaults to "generic_device_cable" ).
    "cable_length": 5 // Maximum length of the cable ( Optional, defaults to 2 ).
    "charge_rate": "60 W" // Charge rate in watts. A positive value will charge the device's chargeable batteries at the expense of the connected power grid.
                          // A negative value will charge the connected electrical grid's batteries at the expense of the device's.
                          // A value of 0 won't charge the device's batteries, but will still let the device operate off of the connected power grid ( Optional, defaults to "0 W" ).
    "efficiency": 7 // one_in(this) chance to fail adding 1 charge every charge interval ( Optional, defaults to 7, which is around 85% efficiency ).
    "menu_text": // Text displayed in the activation screen ( Optional, defaults to "Connect / Disconnect" ).
    "targets": [ // Array of link_states that are valid connection points of the cable ( Optional, defaults to only allowing disconnection ).
        "no_link",         // Must be included to allow letting the player manually disconnect the cable.
        "vehicle_port",    // Can connect to a vehicle's cable ports / electrical controls or an appliance.
        "vehicle_battery", // Can connect to a vehicle's battery or an appliance.
        "vehicle_tow",     // Can be used as a tow cable between two vehicles.
        "bio_cable",       // Can connect to a cable system bionic.
        "ups",             // Can link to a UPS.
        "solarpack",       // Can link to a worn solar pack.
},
"use_action" : {
    "type" : "delayed_transform", // Like transform, but it will only transform when the item has a certain age
    "transform_age" : 600, // The minimal age of the item. Items that are younger wont transform. In turns (60 turns = 1 minute)
    "not_ready_msg" : "The yeast has not been done The yeast isn't done culturing yet." // A message, shown when the item is not old enough
},
"use_action": {
    "type": "firestarter", // Start a fire, like with a lighter.
    "moves": 15 // Number of moves it takes to start the fire. This is reduced by survival skill.
    "moves_slow": 1500 // Number of moves it takes to start a fire on something that is difficult to ignite. This is reduced by survival skill.
    "need_sunlight": true // Whether the character needs to be in direct sunlight, e.g. to use magnifying glasses.
},
"use_action": {
    "type": "unpack", // unpack this item
    "group": "gobag_contents", // itemgroup this unpacks into
    "items_fit": true, // Do the armor items in this fit? Defaults to false.
    "filthy_volume_threshold": "10 L" // If the items unpacked from this item have volume, and this item is filthy, at what amount of held volume should they become filthy
},
"use_action": {
    "type": "salvage", // Try to salvage base materials from an item, e.g. cutting up cloth to get rags or leather.
    "moves_per_part": 25, // Number of moves it takes (optional).
    "material_whitelist": [ // List of material ids (not item ids!) that can be salvage from.
        "cotton",           // The list here is the default list, used when there is no explicit martial list given.
        "leather",          // If the item (that is to be cut up) has any material not in the list, it can not be cut up.
        "fur",
        "nomex",
        "kevlar",
        "plastic",
        "wood",
        "wool"
    ]
},
"use_action": {
    "type": "inscribe", // Inscribe a message on an item or on the ground.
    "on_items": true, // Whether the item can inscribe on an item.
    "on_terrain": false, // Whether the item can inscribe on the ground.
    "material_restricted": true, // Whether the item can only inscribe on certain item materials. Not used when inscribing on the ground.
    "material_whitelist": [ // List of material ids (not item ids!) that can be inscribed on.
        "wood",             // Only used when inscribing on an item, and only when material_restricted is true.
        "plastic",          // The list here is the default that is used when no explicit list is given.
        "glass",
        "chitin",
        "iron",
        "steel",
        "silver"
    ]
},
"use_action": {
    "type": "fireweapon_off", // Activate a fire based weapon.
    "target_id": "firemachete_on", // The item type to transform this item into.
    "success_message": "Your No. 9 glows!", // A message that is shows if the action succeeds.
    "failure_message": "", // A message that is shown if the action fails, for whatever reason. (Optional, if not given, no message will be printed.)
    "lacks_fuel_message": "Out of fuel", // Message that is shown if the item has no charges.
    "noise": 0, // The noise it makes to active the item, Optional, 0 means no sound at all.
    "moves": 0, // The number of moves it takes the character to even try this action (independent of the result).
    "success_chance": 0 // How likely it is to succeed the action. Default is to always succeed. Try numbers in the range of 0-10.
},
"use_action": {
    "type": "fireweapon_on", // Function for active (burning) fire based weapons.
    "noise_chance": 1, // The chance (one in X) that the item will make a noise, rolled on each turn.
    "noise": 0, // The sound volume it makes, if it makes a noise at all. If 0, no sound is made, but the noise message is still printed.
    "noise_message": "Your No. 9 hisses.", // The message / sound description (if noise is > 0), that appears when the item makes a sound.
    "voluntary_extinguish_message": "Your No. 9 goes dark.", // Message that appears when the item is turned of by player.
    "charges_extinguish_message": "Out of ammo!", // Message that appears when the item runs out of charges.
    "water_extinguish_message": "Your No. 9 hisses in the water and goes out.", // Message that appears if the character walks into water and the fire of the item is extinguished.
    "auto_extinguish_chance": 0, // If > 0, this is the (one in X) chance that the item goes out on its own.
    "auto_extinguish_message": "Your No. 9 cuts out!" // Message that appears if the item goes out on its own (only required if auto_extinguish_chance is > 0).
},
"use_action": {
    "type": "musical_instrument", // The character plays an instrument (this item) while walking around.
    "speed_penalty": 10, // This is subtracted from the characters speed.
    "volume": 12, // Volume of the sound of the instrument.
    "fun": -5, // Together with fun_bonus, this defines how much morale the character gets from playing the instrument. They get `fun + fun_bonus * <character-perception>` morale points out of it. Both values and the result may be negative.
    "fun_bonus": 2,
    "description_frequency": 20, // Once every Nth turn, a randomly chosen description (from the that array) is displayed.
    "player_descriptions": [
        "You play a little tune on your flute.",
        "You play a beautiful piece on your flute.",
        "You play a piece on your flute that sounds harmonious with nature."
    ]
},
"use_action": {
    "type": "holster", // Holster or draw a weapon
    "holster_prompt": "Holster item", // Prompt to use when selecting an item
    "holster_msg": "You holster your %s", // Message to show when holstering an item
    "max_volume": "1500 ml", // Maximum volume of each item that can be holstered. Volume in ml and L can be used - "50 ml" or "2 L".
    "min_volume": "750 ml",  // Minimum volume of each item that can be holstered or 1/3 max_volume if unspecified. volume in ml and L can be used - "50 ml" or "2 L".
    "max_weight": 2000, // Maximum weight of each item. If unspecified no weight limit is imposed
    "multi": 1, // Total number of items that holster can contain
    "draw_cost": 10, // Base move cost per unit volume when wielding the contained item
    "skills": ["pistol", "shotgun"], // Guns using any of these skills can be holstered
    "flags": ["SHEATH_KNIFE", "SHEATH_SWORD"] // Items with any of these flags set can be holstered
},
"use_action": {
    "type": "bandolier", // Store ammo and later reload using it
    "capacity": 10, // Total number of rounds that can be stored
    "ammo": [ "shot", "9mm" ], // What types of ammo can be stored?
},
"use_action": {
    "type": "reveal_map", // reveal specific terrains on the overmap
    "radius": 180, // radius around the player where things are revealed. A single overmap is 180x180 tiles.
    "terrain": ["hiway", "road"], // ids of overmap terrain types that should be revealed (as many as you want).
    "message": "You add roads and tourist attractions to your map." // Displayed after the revelation.
},
"use_action": {
    "type" : "heal",        // Heal damage, possibly some statuses
    "limb_power" : 10,      // How much hp to restore when healing limbs? Mandatory value
    "head_power" : 7,       // How much hp to restore when healing head? If unset, defaults to 0.8 * limb_power.
    "torso_power" : 15,     // How much hp to restore when healing torso? If unset, defaults to 1.5 * limb_power.
    "bleed" : 4,            // How many bleed effect intensity levels can be reduced by it. Base value.
    "bite" : 0.95,          // Chance to remove bite effect.
    "infect" : 0.1,         // Chance to remove infected effect.
    "move_cost" : 250,      // Cost in moves to use the item.
    "limb_scaling" : 1.2,   // How much extra limb hp should be healed per first aid level. Defaults to 0.25 * limb_power.
    "head_scaling" : 1.0,   // How much extra limb hp should be healed per first aid level. Defaults to (limb_scaling / limb_power) * head_power.
    "torso_scaling" : 2.0,  // How much extra limb hp should be healed per first aid level. Defaults to (limb_scaling / limb_power) * torso_power.
    "effects" : [           // Effects to apply to patient on finished healing. Same syntax as in consume_drug effects.
        { "id" : "pkill1", "duration" : 120 }
    ],
    "used_up_item" : "rag_bloody" // Item produced on successful healing. If the healing item is a tool, it is turned into the new type. Otherwise a new item is produced.
},
"use_action": {
    "type": "place_trap", // places a trap
    "allow_underwater": false, // (optional) allow placing this trap when the player character is underwater
    "allow_under_player": false, // (optional) allow placing the trap on the same square as the player character (e.g. for benign traps)
    "needs_solid_neighbor": false, // (optional) trap must be placed between two solid tiles (e.g. for tripwire).
    "needs_neighbor_terrain": "t_tree", // (optional, default is empty) if non-empty: a terrain id, the trap must be placed adjacent to that terrain.
    "outer_layer_trap": "tr_blade", // (optional, default is empty) if non-empty: a trap id, makes the game place a 3x3 field of traps. The center trap is the one defined by "trap", the 8 surrounding traps are defined by this (e.g. tr_blade for blade traps).
    "bury_question": "", // (optional) if non-empty: a question that will be asked if the player character has a shoveling tool and the target location is diggable. It allows to place a buried trap. If the player answers the question (e.g. "Bury the X-trap?") with yes, the data from the "bury" object will be used.
    "bury": { // If the bury_question was answered with yes, data from this entry will be used instead of outer data.
         // This json object should contain "trap", "done_message", "practice" and (optional) "moves", with the same meaning as below.
    },
    "trap": "tr_engine", // The trap to place.
    "done_message": "Place the beartrap on the %s.", // The message that appears after the trap has been placed. %s is replaced with the terrain name of the place where the trap has been put.
    "practice": 4, // How much practice to the "traps" skill placing the trap gives.
    "moves": 10 // (optional, default is 100): the move points that are used by placing the trap.
}
"use_action": {
    "type": "sew_advanced",  // Modify clothing
    "materials": [           // materials to deal with.
        "cotton",
        "leather"
    ],
    "skill": "tailor",       // Skill used.
    "clothing_mods": [       // Clothing mods to deal with.
        "leather_padded",
        "kevlar_padded"
    ]
}
"use_action": {
    "type" :"effect_on_conditions", // activate effect_on_conditions
    "description" :"This debugs the game", // usage description
    "effect_on_conditions" : ["test_cond"] // ids of the effect_on_conditions to activate
    }
"use_action": {
    "type": "message",      // Displays message text
    "message": "Read this.",// Message that is shown
    "name": "Light fuse"    // Optional name for the action. Default "Activate".
}
```

#### Delayed Item Actions

Item use actions can be used with a timer delay.

Item `"transform"` action can set and start the timer. This timer starts when the player activates the item.

```
"use_action": {
    "type": "transform"
    "target": "grenade_act",
    "target_timer": "5 seconds"  // Sets timer on item to this
}
```

Timer inherent to the item itself can be set by defining `"countdown_interval"` in item json. This timer is started at the birth of the item.

```
    "id": "migo_plate_undergrown",
    "name": { "str": "undergrown iridescent carapace plate" },
    "countdown_interval": "24 hours",
```

Once the duration of the timer has passed the `"countdown_action"` is executed. This action can be any use action but many actions do not behave well when they are not triggered by the player.

```
"countdown_action": {
    "type": "explosion",
    "explosion": { "power": 240, "shrapnel": { "casing_mass": 217, "fragment_mass": 0.08 } }
}
```

Additionally `"revert_to"` can be defined in item definitions (not in use action). The item is deactivated and turned to this type after the `"countdown_action"`. If no revert_to is specified the item is destroyed.

### Random Descriptions

Any item with a "snippet_category" entry will have random descriptions, based on that snippet category:

```
"snippet_category": "newspaper",
```

The item descriptions are taken from snippets, which can be specified like this (the value of category must match the snippet_category in the item definition):

```C++
{
    "type" : "snippet",
    "category" : "newspaper",
    "id" : "snippet-id",          // id is optional, it's used when the snippet is referenced in the item list of professions
    "text": "your flavor text"
}
```

or several snippets at once:

```C++
{
    "type" : "snippet",
    "category" : "newspaper",
    "text": [
        "your flavor text",
        "more flavor",
        // entries can also be of this form to have a id to reference that specific snippet.
        { "id" : "snippet-id", "text" : "another flavor text" }
    ],
    "text": [ "your flavor text", "another flavor text", "more flavor" ]
}
```

Multiple snippets for the same category are possible and actually recommended. The game will select a random one for each item of that type.

One can also put the snippets directly in the item definition:

```
"snippet_category": [ "text 1", "text 2", "text 3" ],
```

This will automatically create a snippet category specific to that item and populate that category with the given snippets.
The format also support snippet ids like above.

# `json/` JSONs

### Harvest

```json
{
    "id": "jabberwock",
    "type": "harvest",
    "leftovers": "ruined_candy",
    "message": "You messily hack apart the colossal mass of fused, rancid flesh, taking note of anything that stands out.",
    "entries": [
      { "drop": "meat_tainted", "type": "flesh", "mass_ratio": 0.33 },
      { "drop": "fat_tainted", "type": "flesh", "mass_ratio": 0.1 },
      { "drop": "jabberwock_heart", "base_num": [ 0, 1 ], "scale_num": [ 0.6, 0.9 ], "max": 3, "type": "flesh" }
    ],
},
{
  "id": "mammal_large_fur",
  "//": "drops large stomach",
  "type": "harvest",
  "entries": [
    { "drop": "meat", "type": "flesh", "mass_ratio": 0.32 },
    { "drop": "meat_scrap", "type": "flesh", "mass_ratio": 0.01 },
    { "drop": "lung", "type": "flesh", "mass_ratio": 0.0035 },
    { "drop": "liver", "type": "offal", "mass_ratio": 0.01 },
    { "drop": "brain", "type": "flesh", "mass_ratio": 0.005 },
    { "drop": "sweetbread", "type": "flesh", "mass_ratio": 0.002 },
    { "drop": "kidney", "type": "offal", "mass_ratio": 0.002 },
    { "drop": "stomach_large", "scale_num": [ 1, 1 ], "max": 1, "type": "offal" },
    { "drop": "bone", "type": "bone", "mass_ratio": 0.15 },
    { "drop": "sinew", "type": "bone", "mass_ratio": 0.00035 },
    { "drop": "fur", "type": "skin", "mass_ratio": 0.02 },
    { "drop": "fat", "type": "flesh", "mass_ratio": 0.07 }
  ]
},
{
  "id": "CBM_SCI",
  "type": "harvest",
  "entries": [
    {
      "drop": "bionics_sci",
      "type": "bionic_group",
      "flags": [ "FILTHY", "NO_STERILE", "NO_PACKED" ],
      "faults": [ "fault_bionic_salvaged" ]
    },
    { "drop": "meat_tainted", "type": "flesh", "mass_ratio": 0.25 },
    { "drop": "fat_tainted", "type": "flesh", "mass_ratio": 0.08 },
    { "drop": "bone_tainted", "type": "bone", "mass_ratio": 0.1 }
  ]
},
```

#### `id`

Unique id of the harvest definition.

#### `type`

Should always be `harvest` to mark the object as a harvest definition.

#### `message`

Optional message to be printed when a creature using the harvest definition is butchered. May be omitted from definition.

#### `entries`

Array of dictionaries defining possible items produced on butchering and their likelihood of being produced.
`drop` value should be the `id` string of the item to be produced.

`type` value should refer to an existing `harvest_drop_type` associated with body part the item comes from.
Acceptable values are as follows:
`flesh`: the "meat" of the creature.
`offal`: the "organs" of the creature. these are removed when field dressing.
`skin`: the "skin" of the creature. this is what is ruined while quartering.
`bone`: the "bones" of the creature. you will get some amount of these from field dressing, and the rest of them from butchering the carcass.
`mutagen`: an item from harvested mutagenic samples obtained from dissection.
`mutagen_group`: an item group that can produce an item from harvested mutagenic samples obtained from dissection.
`bionic`: an item gained by dissecting the creature. not restricted to CBMs.
`bionic_group`: an item group that will give an item by dissecting a creature. not restricted to groups containing CBMs.

`flags` value should be an array of strings. These flags will be added to the items of that entry upon harvesting.

`faults` value should be an array of `fault_id` strings. These faults will be added to the items of that entry upon harvesting.

For every `type` other then those with "dissect_only" (see below) the following entries scale the results:
`base_num` value should be an array with two elements in which the first defines the minimum number of the corresponding item produced and the second defines the maximum number.
`scale_num` value should be an array with two elements, increasing the minimum and maximum drop numbers respectively by element value \* survival skill.
`max` upper limit after `bas_num` and `scale_num` are calculated using
`mass_ratio` value is a multiplier of how much of the monster's weight comprises the associated item. to conserve mass, keep between 0 and 1 combined with all drops. This overrides `base_num`, `scale_num` and `max`

For `type`s with "dissect_only" (see below), the following entries can scale the results:
`max` this value (in contrary to `max` for other `type`s) corresponds to maximum butchery roll that will be passed to check_butcher_cbm() in activity_handlers.cpp; view check_butcher_cbm() to see corresponding distribution chances for roll values passed to that function

#### `leftovers`

itype_id of the item dropped as leftovers after butchery or when the monster is gibbed. Default as "ruined_chunks".

### Harvest Drop Type

```json
{
  "type": "harvest_drop_type",
  "id": "mutagen",
  "dissect_only": true,
  "group": false,
  "harvest_skills": ["firstaid", "chemistry"],
  "msg_fielddress_fail": "harvest_drop_mutagen_field_dress",
  "msg_fielddress_success": "",
  "msg_butcher_fail": "harvest_drop_mutagen_butcher",
  "msg_butcher_success": "",
  "msg_dissect_fail": "harvest_drop_mutagen_dissect_failed",
  "msg_dissect_success": ""
}
```

Harvest drop types are used in harvest drop entries to control how the drop is processed. `dissect_only` only allows the drop to be produced when dissecting. `group` indicates that an associated `drop` refers to an item group instead of a single item type.

`harvest_skills` refers to the id of skills that affect the yields of this harvest drop type. If omitted, this defaults to the survival skill. For example, dissecting a zomborg for CBMs will produce better results when the "electronics" and "firstaid" skills are high. `harvest_skills` can be either a single string (just one skill) or an array of strings.

`msg_<butcher_type>_<result>` refers to a snippet to be printed when the specified butcher type either succeeds or fails. Currently, the following message types are available:

- `"msg_fielddress_fail"`
- `"msg_fielddress_success"`
- `"msg_butcher_fail"`
- `"msg_butcher_success"`
- `"msg_dissect_fail"`
- `"msg_dissect_success"`

### Weapon Category

```c++
{
    "type": "weapon_category",
    "id": "WEAP_CAT"
    "name": "Weapon Category"
}
```

### Connect group definitions

Connect groups can be used by id in terrain and furniture `connect_groups`, `connects_to` and `rotates_to` properties.

Examples from the actual definitions:

**`group_flags`**: Flags that imply that terrain or furniture is added to this group.

**`connects_to_flags`**: Flags that imply that terrain or furniture connects to this group.

**`rotates_to_flags`**: Flags that imply that terrain or furniture rotates to this group.

```json
[
  {
    "type": "connect_group",
    "id": "WALL",
    "group_flags": ["WALL", "CONNECT_WITH_WALL"],
    "connects_to_flags": ["WALL", "CONNECT_WITH_WALL"]
  },
  {
    "type": "connect_group",
    "id": "CHAINFENCE"
  },
  {
    "type": "connect_group",
    "id": "INDOORFLOOR",
    "group_flags": ["INDOORS"],
    "rotates_to_flags": ["WINDOW", "DOOR"]
  }
]
```

### Furniture

```C++
{
    "type": "furniture",
    "id": "f_toilet",
    "name": "toilet",
    "symbol": "&",
    "looks_like": "chair",
    "color": "white",
    "move_cost_mod": 2,
    "light_emitted": 5,
    "required_str": 18,
    "flags": [ "TRANSPARENT", "BASHABLE", "FLAMMABLE_HARD" ],
    "connect_groups" : [ "WALL" ],
    "connects_to" : [ "WALL" ],
    "rotates_to" : [ "INDOORFLOOR" ],
    "crafting_pseudo_item": "anvil",
    "examine_action": "toilet",
    "close": "f_foo_closed",
    "open": "f_foo_open",
    "lockpick_result": "f_safe_open",
    "lockpick_message": "With a click, you unlock the safe.",
    "bash": "TODO",
    "deconstruct": "TODO",
    "max_volume": "1000 L",
    "examine_action": "workbench",
    "workbench": { "multiplier": 1.1, "mass": 10000, "volume": "50L" },
    "boltcut": {
      "result": "f_safe_open",
      "duration": "1 seconds",
      "message": "The safe opens.",
      "sound": "Gachunk!",
      "byproducts": [ { "item": "scrap", "count": 3 } ]
    },
    "hacksaw": {
      "result": "f_safe_open",
      "duration": "12 seconds",
      "message": "The safe is hacksawed open!",
      "sound": "Gachunk!",
      "byproducts": [ { "item": "scrap", "count": 13 } ]
    },
    "oxytorch": {
      "result": "f_safe_open",
      "duration": "30 seconds",
      "message": "The safe opens!",
      "byproducts": [ { "item": "scrap", "count": 13 } ]
    },
    "prying": {
      "result": "f_crate_o",
      "message": "You pop open the crate.",
      "prying_data": {
        "difficulty": 6,
        "prying_level": 1,
        "noisy": true,
        "failure": "You pry, but can't pop open the crate."
      }
    }
}
```

#### `type`

Fixed string, must be `furniture` to identify the JSON object as such.

`"id", "name", "symbol", "looks_like", "color", "bgcolor", "max_volume", "open", "close", "bash", "deconstruct", "examine_action", "flags"`

Same as for terrain, see below in the chapter "Common to furniture and terrain".

#### `move_cost_mod`

Movement cost modifier (`-10` = impassable, `0` = no change). This is added to the movecost of the underlying terrain.

#### `lockpick_result`

(Optional) When the furniture is successfully lockpicked, this is the furniture it will turn into.

#### `lockpick_message`

(Optional) When the furniture is successfully lockpicked, this is the message that will be printed to the player. When it is missing, a generic `"The lock opens…"` message will be printed instead.

#### `light_emitted`

How much light the furniture produces. 10 will light the tile it's on brightly, 15 will light that tile and the tiles around it brightly, as well as slightly lighting the tiles two tiles away from the source.
For examples: An overhead light is 120, a utility light, 240, and a console, 10.

#### `boltcut`

(Optional) Data for using with an bolt cutter.

```cpp
"boltcut": {
    "result": "furniture_id", // (optional) furniture it will become when done, defaults to f_null
    "duration": "1 seconds", // ( optional ) time required for bolt cutting, default is 1 second
    "message": "You finish cutting the metal.", // ( optional ) message that will be displayed when finished
    "sound": "Gachunk!", // ( optional ) description of the sound when finished
    "byproducts": [ // ( optional ) list of items that will be spawned when finished
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range ( inclusive )
        }
    ]
}
```

#### `hacksaw`

(Optional) Data for using with an hacksaw.

```cpp
"hacksaw": {
    "result": "furniture_id", // (optional) furniture it will become when done, defaults to f_null
    "duration": "1 seconds", // ( optional ) time required for hacksawing, default is 1 second
    "message": "You finish cutting the metal.", // ( optional ) message that will be displayed when finished
    "byproducts": [ // ( optional ) list of items that will be spawned when finished
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range ( inclusive )
        }
    ]
}
```

#### `oxytorch`

(Optional) Data for using with an oxytorch.

```cpp
oxytorch: {
    "result": "furniture_id", // (optional) furniture it will become when done, defaults to f_null
    "duration": "1 seconds", // ( optional ) time required for oxytorching, default is 1 second
    "message": "You quickly cut the metal", // ( optional ) message that will be displayed when finished
    "byproducts": [ // ( optional ) list of items that will be spawned when finished
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range ( inclusive )
        }
    ]
}
```

#### `prying`

(Optional) Data for using with pyring tools

```cpp
"prying": {
    "result": "furniture_id", // (optional) furniture it will become when done, defaults to f_null
    "duration": "1 seconds", // (optional) time required for prying nails, default is 1 second
    "message": "You finish prying the door.", // (optional) message that will be displayed when finished prying successfully
    "byproducts": [ // (optional) list of items that will be spawned when finished successfully
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range inclusive
        }
    ],
    "prying_data": {
        "prying_nails": false, // (optional, default false) if set to true, ALL fields below are ignored
        "difficulty": 0, // (optional, default 0) base difficulty of prying action
        "prying_level": 0, // (optional, default 0) minimum prying level tool needs to have
        "noisy": false, // (optional, default false) makes noise when successfully prying
        "alarm": false, // (optional) has an alarm, on success will trigger the police
        "breakable": false, // (optional) has a chance to trigger the break action on failure
        "failure": "You try to pry the window but fail." // (optional) failure message
    }
}
```

#### `required_str`

Strength required to move the furniture around. Negative values indicate an unmovable furniture.

#### `crafting_pseudo_item`

(Optional) Id of an item (tool) that will be available for crafting when this furniture is range (the furniture acts as an item of that type).

#### `workbench`

(Optional) Can craft here. Must specify a speed multiplier, allowed mass, and allowed volume. Mass/volume over these limits incur a speed penalty. Must be paired with a `"workbench"` `examine_action` to function.

#### `plant_data`

(Optional) This is a plant. Must specify a plant transform, and a base depending on context. You can also add a harvest or growth multiplier if it has the `GROWTH_HARVEST` flag.

#### `surgery_skill_multiplier`

(Optional) Surgery skill multiplier (float) applied by this furniture to survivor standing next to it for the purpose of surgery.

### Terrain

```C++
{
    "type": "terrain",
    "id": "t_spiked_pit",
    "name": "spiked pit",
    "symbol": "0",
    "looks_like": "pit",
    "color": "ltred",
    "move_cost": 10,
    "light_emitted": 10,
    "trap": "spike_pit",
    "max_volume": "1000 L",
    "flags": ["TRANSPARENT", "DIGGABLE"],
    "connect_groups" : [ "WALL" ],
    "connects_to" : [ "WALL" ],
    "rotates_to" : [ "INDOORFLOOR" ],
    "close": "t_foo_closed",
    "open": "t_foo_open",
    "lockpick_result": "t_door_unlocked",
    "lockpick_message": "With a click, you unlock the door.",
    "bash": "TODO",
    "deconstruct": "TODO",
    "harvestable": "blueberries",
    "transforms_into": "t_tree_harvested",
    "harvest_season": "WINTER",
    "roof": "t_roof",
    "examine_action": "pit",
    "boltcut": {
      "result": "t_door_unlocked",
      "duration": "1 seconds",
      "message": "The door opens.",
      "sound": "Gachunk!",
      "byproducts": [ { "item": "scrap", "2x4": 3 } ]
    },
    "hacksaw": {
      "result": "t_door_unlocked",
      "duration": "12 seconds",
      "message": "The door is hacksawed open!",
      "sound": "Gachunk!",
      "byproducts": [ { "item": "scrap", "2x4": 13 } ]
    },
    "oxytorch": {
      "result": "t_door_unlocked",
      "duration": "60 seconds",
      "message": "The door opens!",
      "byproducts": [ { "item": "scrap", "count": 10 } ]
    },
    "prying": {
      "result": "t_fence_post",
      "duration": "30 seconds",
      "message": "You pry out the fence post.",
      "byproducts": [ { "item": "nail", "count": 6 }, { "item": "2x4", "count": 3 } ],
      "prying_data": { "prying_nails": true }
    }
}
```

#### `type`

Fixed string, must be "terrain" to identify the JSON object as such.

`"id", "name", "symbol", "looks_like", "color", "bgcolor", "max_volume", "open", "close", "bash", "deconstruct", "examine_action", "flags"`

Same as for furniture, see below in the chapter "Common to furniture and terrain".

#### `move_cost`

Move cost to move through. A value of 0 means it's impassable (e.g. wall). You should not use negative values. The positive value is multiple of 50 move points, e.g. value 2 means the player uses 2\*50 = 100 move points when moving across the terrain.

#### `heat_radiation`

Heat emitted for a terrain. A value of 0 means no fire (i.e, same as not having it). A value of 1 equals a fire of intensity of 1.

#### `light_emitted`

How much light the terrain emits. 10 will light the tile it's on brightly, 15 will light that tile and the tiles around it brightly, as well as slightly lighting the tiles two tiles away from the source.
For examples: An overhead light is 120, a utility light, 240, and a console, 10.

#### `lockpick_result`

(Optional) When the terrain is successfully lockpicked, this is the terrain it will turn into.

#### `lockpick_message`

(Optional) When the terrain is successfully lockpicked, this is the message that will be printed to the player. When it is missing, a generic `"The lock opens…"` message will be printed instead.

#### `trap`

(Optional) Id of the built-in trap of that terrain.

For example the terrain `t_pit` has the built-in trap `tr_pit`. Every tile in the game that has the terrain `t_pit` also has, therefore, an implicit trap `tr_pit` on it. The two are inseparable (the player can not deactivate the built-in trap, and changing the terrain will also deactivate the built-in trap).

A built-in trap prevents adding any other trap explicitly (by the player and through mapgen).

#### `boltcut`

(Optional) Data for using with an bolt cutter.

```cpp
"boltcut": {
    "result": "ter_id", // terrain it will become when done
    "duration": "1 seconds", // ( optional ) time required for bolt cutting, default is 1 second
    "message": "You finish cutting the metal.", // ( optional ) message that will be displayed when finished
    "sound": "Gachunk!", // ( optional ) description of the sound when finished
    "byproducts": [ // ( optional ) list of items that will be spawned when finished
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range ( inclusive )
        }
    ]
}
```

#### `hacksaw`

(Optional) Data for using with an hacksaw.

```cpp
"hacksaw": {
    "result": "terrain_id", // terrain it will become when done
    "duration": "1 seconds", // ( optional ) time required for hacksawing, default is 1 second
    "message": "You finish cutting the metal.", // ( optional ) message that will be displayed when finished
    "byproducts": [ // ( optional ) list of items that will be spawned when finished
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range ( inclusive )
        }
    ]
}
```

#### `oxytorch`

(Optional) Data for using with an oxytorch.

```cpp
oxytorch: {
    "result": "terrain_id", // terrain it will become when done
    "duration": "1 seconds", // ( optional ) time required for oxytorching, default is 1 second
    "message": "You quickly cut the bars", // ( optional ) message that will be displayed when finished
    "byproducts": [ // ( optional ) list of items that will be spawned when finished
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range ( inclusive )
        }
    ]
}
```

#### `prying`

(Optional) Data for using with prying tools

```cpp
"prying": {
    "result": "terrain_id", // terrain it will become when done
    "duration": "1 seconds", // (optional) time required for prying nails, default is 1 second
    "message": "You finish prying the door.", // (optional) message that will be displayed when finished prying successfully
    "byproducts": [ // (optional) list of items that will be spawned when finished successfully
        {
            "item": "item_id",
            "count": 100 // exact amount
        },
        {
            "item": "item_id",
            "count": [ 10, 100 ] // random number in range inclusive
        }
    ],
    "prying_data": {
        "prying_nails": false, // (optional, default false) if set to true, ALL fields below are ignored
        "difficulty": 0, // (optional, default 0) base difficulty of prying action
        "prying_level": 0, // (optional, default 0) minimum prying level tool needs to have
        "noisy": false, // (optional, default false) makes noise when successfully prying
        "alarm": false, // (optional) has an alarm, on success will trigger the police
        "breakable": false, // (optional) has a chance to trigger the break action on failure
        "failure": "You try to pry the window but fail." // (optional) failure message
    }
}
```

#### `transforms_into`

(Optional) Used for various transformation of the terrain. If defined, it must be a valid terrain id. Used for example:

- When harvesting fruits (to change into the harvested form of the terrain).
- In combination with the `HARVESTED` flag and `harvest_season` to change the harvested terrain back into a terrain with fruits.

#### `harvest_by_season`

(Optional) Array of objects containing the seasons in which to harvest and the id of the harvest entry used.

Example:

```json
"harvest_by_season": [ { "seasons": [ "spring", "summer", "autumn", "winter" ], "id": "blackjack_harv" } ],
```

#### `roof`

(Optional) The terrain of the terrain on top of this (the roof).

### Common To Furniture And Terrain

Some values can/must be set for terrain and furniture. They have the same meaning in each case.

#### `id`

Id of the object, this should be unique among all object of that type (all terrain or all furniture types). By convention (but technically not needed), the id should have the "f*" prefix for furniture and the "t*" prefix for terrain. This is not translated. It must not be changed later as that would break save compatibility.

#### `name`

Displayed name of the object. This will be translated.

#### `flags`

(Optional) Various additional flags, see [JSON_FLAGS.md](JSON_FLAGS.md).

#### `connect_groups`

(Optional) Makes the type a member of one or more [Connection groups](#connection-groups).

Does not make the type connect or rotate itself, but serves as the passive side.
For the active, connecting or rotating side, see [`connects_to`](#connects_to) and [`rotates_to`](#rotates_to).

##### Connection groups

Connect groups are defined by JSON types [`connect_group`](#connect-group-definitions).  
Current connect groups are:

```
NONE                 SAND
WALL                 PIT_DEEP
CHAINFENCE           LINOLEUM
WOODFENCE            CARPET
RAILING              CONCRETE
POOLWATER            CLAY
WATER                DIRT
PAVEMENT             ROCKFLOOR
PAVEMENT_MARKING     MULCHFLOOR
RAIL                 METALFLOOR
COUNTER              WOODFLOOR
CANVAS_WALL          INDOORFLOOR
```

`WALL` is implied by the flags `WALL` and `CONNECT_WITH_WALL`.
`INDOORFLOOR` is implied by the flag `INDOORS`.
Implicit groups can be removed be using tilde `~` as prefix of the group name.

#### `connects_to`

(Optional) Makes the type connect to terrain types in the given groups (see [`connect_groups`](#connect_groups)). This affects tile rotation and connections, and the ASCII symbol drawn by terrain with the flag "AUTO_WALL_SYMBOL".

Example: `-` , `|` , `X` and `Y` are terrain which share a group in `connect_groups` and `connects_to`. `O` does not have it. `X` and `Y` also have the `AUTO_WALL_SYMBOL` flag. `X` will be drawn as a T-intersection (connected to west, south and east), `Y` will be drawn as a horizontal line (going from west to east, no connection to south).

```
-X-    -Y-
 |      O
```

Group `WALL` is implied by the flags `WALL` and `CONNECT_WITH_WALL`.
Implicit groups can be removed be using tilde `~` as prefix of the group name.

#### `rotates_to`

(Optional) Makes the type rotate towards terrain types in the given groups (see [`connect_groups`](#connect_groups)).

Terrain can only rotate depending on terrain, while funiture can rotate depending on terrain and on other funiture.

The parameters can e.g. be used to have window curtains on the indoor side only, or to orient traffic lights depending on the pavement.

Group `INDOORFLOOR` is implied by the flags `DOOR` and `WINDOW`.
Implicit groups can be removed be using tilde `~` as prefix of the group name.

#### `symbol`

ASCII symbol of the object as it appears in the game. The symbol string must be exactly one character long. This can also be an array of 4 strings, which define the symbol during the different seasons. The first entry defines the symbol during spring. If it's not an array, the same symbol is used all year round.

#### `comfort`

How comfortable this terrain/furniture is. Impact ability to fall asleep on it.
uncomfortable = -999,
neutral = 0,
slightly_comfortable = 3,
comfortable = 5,
very_comfortable = 10

#### `floor_bedding_warmth`

Bonus warmth offered by this terrain/furniture when used to sleep.

#### `bonus_fire_warmth_feet`

Increase warmth received on feet from nearby fire (default = 300)

#### `looks_like`

id of a similar item that this item looks like. The tileset loader will try to load the tile for that item if this item doesn't have a tile. looks_like entries are implicitly chained, so if 'throne' has looks_like 'big_chair' and 'big_chair' has looks_like 'chair', a throne will be displayed using the chair tile if tiles for throne and big_chair do not exist. If a tileset can't find a tile for any item in the looks_like chain, it will default to the ascii symbol.

#### `color` or `bgcolor`

Color of the object as it appears in the game. "color" defines the foreground color (no background color), "bgcolor" defines a solid background color. As with the "symbol" value, this can be an array with 4 entries, each entry being the color during the different seasons.

> **NOTE**: You must use ONLY ONE of "color" or "bgcolor"

#### `max_volume`

(Optional) Maximal volume that can be used to store items here. Volume in ml and L can be used - "50 ml" or "2 L"

#### `examine_action`

(Optional) The json function that is called when the object is examined. See [EXAMINE.md](EXAMINE.md).

#### `close` and `open`

(Optional) The value should be a terrain id (inside a terrain entry) or a furniture id (in a furniture entry). If either is defined, the player can open / close the object. Opening / closing will change the object at the affected tile to the given one. For example one could have object "safe_c", which "open"s to "safe_o" and "safe_o" in turn "close"s to "safe_c". Here "safe_c" and "safe_o" are two different terrain (or furniture) types that have different properties.

#### `bash`

(Optional) Defines whether the object can be bashed and if so, what happens. See "map_bash_info".

#### `deconstruct`

(Optional) Defines whether the object can be deconstructed and if so, what the results shall be. See "map_deconstruct_info".

#### `map_bash_info`

Defines the various things that happen when the player or something else bashes terrain or furniture.

```C++
{
    "str_min": 80,
    "str_max": 180,
    "str_min_blocked": 15,
    "str_max_blocked": 100,
    "str_min_supported": 15,
    "str_max_supported": 100,
    "sound": "crunch!",
    "sound_vol": 2,
    "sound_fail": "whack!",
    "sound_fail_vol": 2,
    "ter_set": "t_dirt",
    "furn_set": "f_rubble",
    "explosive": 1,
    "collapse_radius": 2,
    "destroy_only": true,
    "bash_below": true,
    "tent_centers": ["f_groundsheet", "f_fema_groundsheet", "f_skin_groundsheet"],
    "items": "bashed_item_result_group"
}
```

##### `str_min`, `str_max`

The bash succeeds if str >= random # between str_min & str_max

##### `str_min_blocked`, `str_max_blocked`

(Optional) Will be used instead of str_min & str_max if the furniture is blocked, for example a washing machine behind a door

##### `str_min_supported`, `str_max_supported`

(Optional) Will be used instead of str_min & str_max if beneath this is something that can support a roof.

##### `sound`, `sound_fail`, `sound_vol`, `sound_fail_vol`

(Optional) Sound and volume of the sound that appears upon destroying the bashed object or upon unsuccessfully bashing it (failing). The sound strings are translated (and displayed to the player).

##### `furn_set`, `ter_set`

The terrain / furniture that will be set when the original is destroyed. This is mandatory for bash entries in terrain, but optional for entries in furniture (it defaults to no furniture).

##### `explosive`

(Optional) If greater than 0, destroying the object causes an explosion with this strength (see `game::explosion`).

##### `destroy_only`

TODO

##### `bash_below`

TODO

##### `tent_centers`, `collapse_radius`

(Optional) For furniture that is part of tents, this defines the id of the center part, which will be destroyed as well when other parts of the tent get bashed. The center is searched for in the given "collapse_radius" radius, it should match the size of the tent.

##### `items`

(Optional) An item group (inline) or an id of an item group, see [ITEM_SPAWN.md](ITEM_SPAWN.md). The default subtype is "collection". Upon successful bashing, items from that group will be spawned.

#### `map_deconstruct_info`

```C++
{
    "furn_set": "f_safe",
    "ter_set": "t_dirt",
    "items": "deconstructed_item_result_group"
}
```

##### `furn_set`, `ter_set`

The terrain / furniture that will be set after the original has been deconstructed. "furn_set" is optional (it defaults to no furniture), "ter_set" is only used upon "deconstruct" entries in terrain and is mandatory there.

##### `items`

(Optional) An item group (inline) or an id of an item group, see [ITEM_SPAWN.md](ITEM_SPAWN.md). The default subtype is "collection". Upon deconstruction the object, items from that group will be spawned.

#### `plant_data`

```JSON
{
  "transform": "f_planter_harvest",
  "base": "f_planter",
  "growth_multiplier": 1.2,
  "harvest_multiplier": 0.8
}
```

##### `transform`

What the `PLANT` furniture turn into when it grows a stage, or what a `PLANTABLE` furniture turns into when it is planted on.

##### `emissions`

(Optional) An array listing the `emit_id` of the fields the terrain/furniture will produce every 10 seconds.

##### `base`

What the 'base' furniture of the `PLANT` furniture is - what it would be if there was not a plant growing there. Used when monsters 'eat' the plant to preserve what furniture it is.

##### `growth_multiplier`

A flat multiplier on the growth speed on the plant. For numbers greater than one, it will take longer to grow, and for numbers less than one it will take less time to grow.

##### `harvest_multiplier`

A flat multiplier on the harvest count of the plant. For numbers greater than one, the plant will give more produce from harvest, for numbers less than one it will give less produce from harvest.

### clothing_mod

```C++
"type": "clothing_mod",
"id": "leather_padded",   // Unique ID.
"flag": "leather_padded", // flag to add to clothing.
"item": "leather",        // item to consume.
"implement_prompt": "Pad with leather",      // prompt to show when implement mod.
"destroy_prompt": "Destroy leather padding", // prompt to show when destroy mod.
"restricted": true,       // (optional) If true, clothing must list this mod's flag in "valid_mods" list to use it. Defaults to false.
"mod_value": [            // List of mod effect.
    {
        "type": "bash",   // "bash", "cut", "bullet", "fire", "acid", "warmth", and "encumbrance" is available.
        "value": 1,       // value of effect.
        "round_up": false // (optional) round up value of effect. defaults to false.
        "proportion": [   // (optional) value of effect proportions to clothing's parameter.
            "thickness",  //            "thickness" and "coverage" is available.
            "coverage"
        ]
    }
]
```

# Scenarios

Scenarios are specified as JSON object with `type` member set to `scenario`.

```C++
{
    "type": "scenario",
    "id": "schools_out",
    ...
}
```

The id member should be the unique id of the scenario.

The following properties (mandatory, except if noted otherwise) are supported:

## `description`

(string)

The in-game description.

## `name`

(string or object with members "male" and "female")

The in-game name, either one gender-neutral string, or an object with gender specific names. Example:

```C++
"name": {
    "male": "Runaway groom",
    "female": "Runaway bride"
}
```

## `points`

(integer)

Point cost of scenario. Positive values cost points and negative values grant points.

## `items`

(optional, object with optional members "both", "male" and "female")

Items the player starts with when selecting this scenario. One can specify different items based on the gender of the character. Each lists of items should be an array of items ids. Ids may appear multiple times, in which case the item is created multiple times.

Example:

```C++
"items": {
    "both": [
        "pants",
        "rock",
        "rock"
    ],
    "male": [ "briefs" ],
    "female": [ "panties" ]
}
```

This gives the player pants, two rocks and (depending on the gender) briefs or panties.

## `flags`

(optional, array of strings)

A list of flags. TODO: document those flags here.

## `cbms`

(optional, array of strings)

A list of CBM ids that are implanted in the character.

## `traits`, `forced_traits`, `forbidden_traits`

(optional, array of strings)

Lists of trait/mutation ids. Traits in "forbidden_traits" are forbidden and can't be selected during the character creation. Traits in "forced_traits" are automatically added to character. Traits in "traits" enables them to be chosen, even if they are not starting traits.

`forced_traits` can also be specified with a variant, as `{ "trait": "trait_id", "variant": "variant_id" }` (replacing just `"trait_id"`).

## `allowed_locs`

(optional, array of strings)

A list of starting location ids (see start_locations.json) that can be chosen when using this scenario.

## `start_name`

(string)

The name that is shown for the starting location. This is useful if the scenario allows several starting locations, but the game can not list them all at once in the scenario description. Example: if the scenario allows to start somewhere in the wilderness, the starting locations would contain forest and fields, but its "start_name" may simply be "wilderness".

## `professions`

(optional, array of strings)

A list of allowed professions that can be chosen when using this scenario. The first entry is the default profession. If this is empty, all professions are allowed.

## `map_special`

(optional, string)

Add a map special to the starting location, see JSON_FLAGS for the possible specials.

## `requirement`

(optional, an achievement ID)

The achievement you need to do to access this scenario

## `eocs`

(optional, array of strings)

A list of eocs that are triggered once for each new character on scenario start.

## `missions`

(optional, array of strings)

A list of mission ids that will be started and assigned to the player at the start of the game. Only missions with the ORIGIN_GAME_START origin are allowed. The last mission in the list will be the active mission, if multiple missions are assigned.

## `custom_initial_date`

(optional, object with optional members "hour", "day", "season" and "year")

Allows customizing start date. If `custom_initial_date` is not set the corresponding values from world options are used instead.

If the start date of the scenario is before the date of cataclysm defined by map settings then the scenario date is moved forwards by one year.

```C++
"custom_initial_date": { "hour": 3, "day": 10, "season": "winter", "year": 1 }
```

| Identifier | Description                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `hour`     | (optional, integer) Hour of the day for initial date. Default 8. -1 randomizes 0-23.              |
| `day`      | (optional, integer) Day of the season for initial date. Default 0. -1 randomizes 0-season length. |
| `season`   | (optional, integer) Season for initial date. Default `SPRING`.                                    |
| `year`     | (optional, integer) Year for initial date. Default 1. -1 randomizes 1-11.                         |

# Starting locations

Starting locations are specified as JSON object with "type" member set to "start_location":

```C++
{
    "type": "start_location",
    "id": "field",
    "name": "An empty field",
    "terrain": [ "field", { "om_terrain": "hospital", "om_terrain_match_type": "PREFIX" } ],
    "city_sizes": [ 0, 16 ],
    "city_distance": [ 0, -1 ],
    "allowed_z_levels": [ 0, 0 ],
    ...
}
```

The id member should be the unique id of the location.

The following properties (mandatory, except if noted otherwise) are supported:

## `name`

(string)

The in-game name of the location.

## `terrain`

(array of strings and/or objects)

String here contains the id of an overmap terrain type (see overmap_terrain.json) of the starting location. The game will chose a random place with that terrain.

If it is an object - it has following attributes:

| Identifier              | Description                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| `om_terrain`            | ID of overmap terrain which will be selected as the target. Mandatory.       |
| `om_terrain_match_type` | Matching rule to use with `om_terrain`. Defaults to TYPE. Details are below. |

`om_terrain_match_type` defaults to TYPE if unspecified, and has the following possible values:

- `EXACT` - The provided string must completely match the overmap terrain id,
  including linear direction suffixes for linear terrain types or rotation
  suffixes for rotated terrain types.

- `TYPE` - The provided string must completely match the base type id of the
  overmap terrain id, which means that suffixes for rotation and linear terrain
  types are ignored.

- `PREFIX` - The provided string must be a complete prefix (with additional
  parts delimited by an underscore) of the overmap terrain id. For example,
  "forest" will match "forest" or "forest_thick" but not "forestcabin".

- `CONTAINS` - The provided string must be contained within the overmap terrain
  id, but may occur at the beginning, end, or middle and does not have any rules
  about underscore delimiting.

## `city_sizes`

(array of two integers)

Restricts possible start location based on nearest city size (similar to how overmap specials are restricted).

## `city_distance`

(array of two integers)

Restricts possible start location based on distance to nearest city (similar to how overmap specials are restricted).

## `allowed_z_levels`

(array of two integers)

Restricts possible start location based on z-level (e.g. there is no need to search forests on z-levels other than 0).

## `flags`

(optional, array of strings)

Arbitrary flags. Two flags are supported in the code: `ALLOW_OUTSIDE` and `BOARDED` (see [JSON_FLAGS.md](JSON_FLAGS.md)). Mods can modify this via "extend" / "delete".

```C++
{
    "type": "start_location",
    "id": "sloc_house_boarded",
    "copy-from": "sloc_house",
    "name": "House (boarded up)",
    "extend": { "flags": [ "BOARDED" ] }
},
```

# Mutation overlay ordering

The file `mutation_ordering.json` defines the order that visual mutation and bionic overlays are rendered on a character ingame. The layering value from 0 (bottom) - 9999 (top) sets the order.

Example:

```C++
[
    {
        "type" : "overlay_order",
        "overlay_ordering" :
        [
        {
            "id" : [ "BEAUTIFUL", "BEAUTIFUL2", "BEAUTIFUL3", "LARGE", "PRETTY", "RADIOACTIVE1", "RADIOACTIVE2", "RADIOACTIVE3", "REGEN" ],
            "order" : 1000
        },{
            "id" : [ "HOOVES", "ROOTS1", "ROOTS2", "ROOTS3", "TALONS" ],
            "order" : 4500
        },{
            "id" : "FLOWERS",
            "order" : 5000
        },{
            "id" : [ "PROF_CYBERCOP", "PROF_FED", "PROF_PD_DET", "PROF_POLICE", "PROF_SWAT", "PHEROMONE_INSECT" ],
            "order" : 8500
        },{
            "id" : [ "bio_armor_arms", "bio_armor_legs", "bio_armor_torso", "bio_armor_head", "bio_armor_eyes" ],
            "order" : 500
        }
        ]
    }
]
```

## `id`

(string)

The internal ID of the mutation. Can be provided as a single string, or an array of strings. The order value provided will be applied to all items in the array.

## `order`

(integer)

The ordering value of the mutation overlay. Values range from 0 - 9999, 9999 being the topmost drawn layer. Mutations that are not in any list will default to 9999.

# MOD tileset

MOD tileset defines additional sprite sheets. It is specified as JSON object with `type` member set to `mod_tileset`.

Example:

```C++
[
    {
    "type": "mod_tileset",
    "compatibility": [ "MshockXottoplus" ],
    "tiles-new": [
        {
        "file": "test_tile.png",
        "tiles": [
            {
            "id": "player_female",
            "fg": 1,
            "bg": 0
            },
            {
            "id": "player_male",
            "fg": 2,
            "bg": 0
            }
        ]
        }
    ]
    }
]
```

## `compatibility`

(string)

The internal ID of the compatible tilesets. MOD tileset is only applied when base tileset's ID exists in this field.

## `tiles-new`

Setting of sprite sheets. Same as `tiles-new` field in `tile_config`. Sprite files are loaded from the same folder json file exists.

# Obsoletion and migration

If you want to remove some item, never do it with straightforward "remove the item json and call it a day", you **never remove the id from the game**. Primarily because it will cause a harmless, but annoying error, and someone else should spend their time and energy, explaining it was an intended change. To not cause this, everything, that get saved in the game require obsoletion: items, monsters, maps, monster factions, but not, for example, loot groups. Basically there is two ways to remove some entity (except replacing old item with new, while left the old id - this one do not require any additional manipulations) from the game - obsoletion and migration.

Migration is used, when we want to remove one item by replacing it with another item, that do exist in the game, or to maintain a consistent list of item type ids, and happen in `data/json/obsoletion/migration_items.json`

```C++

{
  "id": "arrowhead",  // id of item, that you want to migrate, mandatory
  "type": "MIGRATION", // type, mandatory
  "replace": "steel_chunk", // item, that replace the removed item, mandatory
  "variant": "m1014", // variant of an item, that would be used to replace the item. only for items, that do use variants
  "flags": [ "DIAMOND" ], // additional flag, that item would have when replaced
  "charges": 1930, // amount of charges, that replaced item would have
  "contents": [ { "id": "dogfood", "count": 1 } ], // if `replace` is container, describes what would be inside of it
  "sealed": false // if `replace` is container, will it be sealed or not
}

```

// it seems MIGRATION accept any field actually, but i need someone to confirm it

Migrating vehicle parts is done using `vehicle_part_migration` type, in the example below - when loading the vehicle any part with id `from` will have it's id switched to `to`.
For `VEH_TOOLS` parts only - `add_veh_tools` is a list of itype_ids to add to the vehicle tools after migrating the part.

```json
{
  "type": "vehicle_part_migration",
  "//": "migration to VEH_TOOLS, remove after 0.H release",
  "from": "afs_metal_rig",
  "to": "veh_tools_workshop",
  "add_veh_tools": ["welder", "soldering_iron", "forge", "kiln"]
}
```

For bionics, you should use `bionic_migration` type. The migration happens when character is loaded; if `to` is `null` the bionic will be deleted, if `to` is not null the id will be changed to the provided value.

```json
{
  "type": "bionic_migration",
  "from": "bio_tools_extend",
  "to": null
}
```

Obsoletion is used, when we want to remove the item entirely from the game, without any migration. For this you, again, **do not remove item** from the game.

For items, monsters, furniture, terrain, factions, loot groups and lot of similar stuff, you remove all places, where the entity can spawn (maps, palettes, NPCs etc), mark the item with "OBSOLETE" flag (optional), and move into `data/json/obsoletion/` or inside - they will stay here till the next developement cycle, to make fluent transfer between one stable and another

For maps, you remove the item from all the places it can spawn, remove the mapgen entries, and add the overmap terrain id into `data/json/obsoletion/migration_oter_ids.json`, to migrate oter_id `hive` and `hive2` into `omt_obsolete` add an entry similar to this, note that if mapgen has already generated this area this will only alter the tile shown on the overmap:

```json
{
  "type": "oter_id_migration",
  "//": "obsoleted in 0.H",
  "oter_ids": {
    "hive": "omt_obsolete",
    "hive2": "omt_obsolete"
  }
}
```

For overmap specials add an entry to `data/json/obsoletion/migration_overmap_specials.json`:

```json
  {
    "type": "overmap_special_migration",
    "id": "Farm with silo",
    "//": "Removed in 0.G - no new id, this will remove it"
  },
  {
    "type": "overmap_special_migration",
    "id": "FakeSpecial_cs_open_sewer",
    "new_id": "cs_open_sewer",
    "//": "Removed <when> - this will migrate to 'new_id'"
  },
```

For EOC/dialogue variables you can use `var_migration`. This currently only migrates **Character**, and **Global** vars. If "to" isn't provided the variable will be migrated to a key of "NULL_VALUE".

```json
{
  "type": "var_migration",
  "from": "temp_var",
  "to": "new_temp_var"
}
```

For recipes, deleting the recipe is enough.

For mods, you need to add an `"obsolete": true,` boolean into MOD_INFO, which prevent the mod from showing into the mod list.

## Charge and temperature removal

If an item that used to have charges (e.g. `AMMO` or `COMESTIBLE` types) is changed to another type that does not use charges, migration is needed to ensure correct behavior when loading from existing save files, and prevent spurious error messages from being shown to the player. Migration lists for this are found in `data/json/obsoletion/charge_removal.json`.

Such items may be added to one of the following:

`data/json/obsoletion/blacklist_charge_migration.json` a `charge_migration_blacklist` list:
Items in existing save files with `n` charges will be converted to `n` items with no charges. This will preserve item count.

`data/json/obsoletion/blacklist_charge_removal.json` a `charge_removal_blacklist` list

- `charge_removal_blacklist`: items will simply have charges removed.

Additionally, `COMESTIBLE` items have temperature and rot processing, and are thus set as always activated. When an item is changed from `COMESTIBLE` to a different type, migration is needed to check and unset this if applicable:

`data/json/obsoletion/blacklist_temperature_removal.json` a `temperature_removal_blacklist` list:

- In most cases, the item has no other features that require it to remain activated, in which case it can be simply added to `temperature_removal_blacklist`. Items in this list will be deactivated and have temperature-related data cleared _without any further checks performed_.
- In case of an item that may be active for additional reasons other than temperature/rot tracking, an instance of the item loaded from existing save file cannot be blindly deactivated -- additional checks are required to see if it should remain active. Instead of adding to the above list, a separate special case should be added in `src/savegame_json.cpp` to implement the necessary item-specific deactivation logic.

# Field types

Fields can exist on top of terrain/furniture, and support different intensity levels. Each intensity level inherits its properties from the lower one, so any field not explicitly overwritten will carry over. They affect both characters and monsters, but a lot of fields have hardcoded effects that are potentially different for both (found in `map_field.cpp:creature_in_field`). Gaseous fields that have a chance to do so are spread depending on the local wind force when outside, preferring spreading down to on the same Z-level, which is preferred to spreading upwards. Indoors and by weak winds fields spread randomly.

```C++
  {
    "type": "field_type", // this is a field type
    "id": "fd_gum_web", // id of the field
    "immune_mtypes": [ "mon_spider_gum" ], // list of monster immune to this field
    "intensity_levels":  // The below fields are all tied to the specific intensity unless they got defined in the lower-level one
    [
      { "name": "shadow",  // name of this level of intensity
        "sym": "{", // symbol of this level of intensity
        "color":  "brown", // color of this level of intensity
        "transparent": false, // default true, on false this intensity blocks vision
        "dangerous": false, // is this level of intensity considered dangerous for monster avoidance and player warnings
        "move_cost": 120, // Extra movement cost for moving through this level of intensity (on top of base terrain/furniture movement costs)
        "extra_radiation_min": 1,
        "extra_radiation_max": 5, // This level of intensity will add a random amount of radiation between the min and the max value to its tile
        "radiation_hurt_damage_min": 5,
        "radiation_hurt_damage_max": 7, // When standing in this field hurt every limb for a random amount of damage between the min and max value. Requires extra_radiation_min > 0
        "radiation_hurt_message": "Ouch", // String to print when you get hurt by radiation_hurt_damage
        "intensity_upgrade_chance": 1,
        "intensity_upgrade_duration": "1 days", // Every "upgrade_duration" a "1-in-upgrade_chance" roll is made. On success, increase the field intensity by 1
        "monster_spawn_chance": 5,
        "monster_spawn_count": 2,
        "monster_spawn_radius": 15,
        "monster_spawn_group": "GROUP_NETHER", // 1-in-spawn_chance roll to spawn spawn_count entries from spawn_group monstergroup and place them in a spawn_radius radius around the field
        "light_emitted": 2.5, // light level emitted by this intensity
        "light_override": 3.7 }, //light level on the tile occupied by this field will be set at 3.7 no matter the ambient light.
        "translucency": 2.0, // How much light the field blocks (higher numbers mean less light can penetrate through)
        "convection_temperature_mod": 12, // Heat given off by this level of intensity
        "effects":  // List of effects applied to any creatures within the field as long as they aren't immune to the effect or the field itself
        [
          {
            "effect_id": "webbed", // Effect ID
            "min_duration": "1 minutes",
            "max_duration": "5 minutes", // Effect duration randomized between min and max duration
            "intensity": 1, // Intensity of the effect to apply
            "body_part": "head", // Bodypart the effect gets applied to, default BP_NULL ("whole body")
            "is_environmental": false, // If true the environmental effect roll is used to determine if the effect gets applied: <intensity>d3 > <target BP's armor/bionic env resist>d3
            "immune_inside_vehicle": false, // If true being inside a vehicle protects from the effect
            "immune_outside_vehicle": false, // If true being *outside* a vehicle protects from the effect,
            "chance_in_vehicle": 2,
            "chance_inside_vehicle": 2,
            "chance_outside_vehicle": 2, // 1-in-<chance> chance of the effect being applied when traversing a field in a vehicle, inside a vehicle (as in, under a roof), and outside a vehicle
            "message": "You're debilitated!", // Message to print when the effect is applied to the player
            "message_npc": "<npcname> is debilitated!", // Message to print when the effect is applied to an NPC
            "message_type": "bad", // Type of the above messages - good/bad/mixed/neutral
          }
        ]
        "scent_neutralization": 3, // Reduce scents at the field's position by this value
    ],
    "npc_complain": { "chance": 20, "issue": "weed_smoke", "duration": "10 minutes", "speech": "<weed_smoke>" }, // NPCs in this field will complain about being in it once per <duration> if a 1-in-<chance> roll succeeds, giving off a <speech> bark that supports snippets
    "immunity_data": {  // Array containing the necessary conditions for immunity to this field.  Any one fulfilled condition confers immunity:
      { "flags": [ "WEBWALK" ] },  // Immune if the character has any of the defined character flags (see Character flags)
      { "body_part_env_resistance": [ [ "mouth", 15 ], [ "sensor", 10 ] ] }, // Immune if ALL bodyparts of the defined types have the defined amount of env protection
      "immunity_flags_worn": [ [ "sensor", "FLASH_PROTECTION" ] ], // Immune if ALL parts of the defined types wear an item with the defined flag
      "immunity_flags_worn_any": [ [ "sensor": "BLIND" ], [ "hand": "PADDED" ] ], Immune if ANY part of the defined type wears an item with the corresponding flag -- in this example either a blindfold OR padded gloves confer immunity
      },
    "decay_amount_factor": 2, // The field's rain decay amount is divided by this when processing the field, the rain decay is a function of the weather type's precipitation class: very_light = 5s, light = 15s, heavy = 45 s
    "half_life": "3 minutes", // If above 0 the field will disappear after two half-lifes on average
    "underwater_age_speedup": "25 minutes", // Increase the field's age by this time every tick if it's on a terrain with the SWIMMABLE flag
    "outdoor_age_speedup": "20 minutes", // Increase the field's age by this duration if it's on an outdoor tile
    "accelerated_decay": true, // If the field should use a more simple decay calculation, used for cosmetic fields like gibs
    "percent_spread": 90, // The field must succeed on a `rng( 1, 100 - local windpower ) > percent_spread` roll to spread. The field must have a non-zero spread percent and the GAS phase to be eligible to spread in the first place
    "phase": "gas", // Phase of the field. Gases can spread after spawning and can be spawned out of emitters through impassable terrain with the PERMEABLE flag
    "apply_slime_factor": 10, // Intensity of slime to apply to creatures standing in this field (Why not use an effect? No idea.)
    "gas_absorption_factor": 15, // Amount of gasmask charges the field uses up per tick
    "is_splattering": true, // If splatters of this field should bloody vehicle parts
    "dirty_transparency_cache": true, // Should the transparency cache be recalculated when the field is modified (used for nontransparent, spreading fields)
    "has_fire": false, // Is this field a kind of fire (for immunity, monster avoidance and similar checks)
    "has_acid": false, // See has_fire
    "has_elec": false, // See has_fire
    "has_fume": false, // See has_fire, non-breathing monsters are immune to this field
    "display_items": true, // If the field should obscure items on this tile
    "display_fields": true, // If the field should obscure other fields
    "description_affix": "covered_in", // Description affix for items in this field, possible values are "in", "covered_in", "on", "under", and "illuminated_by"
    "wandering_field": "fd_toxic_gas", // Spawns the defined field in an `intensity-1` radius, or increases the intensity of such fields until their intensity is the same as the parent field
    "decrease_intensity_on_contact": true, // Decrease the field intensity by one each time a character walk on it.
    "mopsafe": false, // field is safe to use in a mopping zone
    "bash": {
      "str_min": 1, // lower bracket of bashing damage required to bash
      "str_max": 3, // higher bracket
      "sound_vol": 2, // noise made when successfully bashing the field
      "sound_fail_vol": 2, // noise made when failing to bash the field
      "sound": "shwip", // sound on success
      "sound_fail": "shwomp", // sound on failure
      "msg_success": "You brush the gum web aside.", // message on success
      "move_cost": 120, // how many moves it costs to successfully bash that field (default: 100)
      "items": [                                   // item dropped upon successful bashing
        { "item": "2x4", "count": [ 5, 8 ] },
        { "item": "nail", "charges": [ 6, 8 ] },
        { "item": "splinter", "count": [ 3, 6 ] },
        { "item": "rag", "count": [ 40, 55 ] },
        { "item": "scrap", "count": [ 10, 20 ] }
      ]
    }
  }
```

# Option sliders

```JSON
{
  "type": "option_slider",
  "id": "world_difficulty",
  "context": "WORLDGEN",
  "name": "Difficulty",
  "default": 3,
  "levels": [
    {
      "level": 0,
      "name": "Cakewalk?",
      "description": "Monsters are much easier to deal with, and plenty of items can be found.",
      "options": [
        { "option": "MONSTER_SPEED", "type": "int", "val": 90 },
        { "option": "MONSTER_RESILIENCE", "type": "int", "val": 75 },
        { "option": "SPAWN_DENSITY", "type": "float", "val": 0.8 },
        { "option": "MONSTER_UPGRADE_FACTOR", "type": "float", "val": 8 },
        { "option": "ITEM_SPAWNRATE", "type": "float", "val": 1.5 }
      ]
    },
    ...
  ]
}
```

## Option sliders - Fields

| Field       | Description                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `"type"`    | _(mandatory)_ Always `"option_slider"`                                                                                                   |
| `"id"`      | _(mandatory)_ Uniquely identifies this `option_slider`                                                                                   |
| `"context"` | The hardcoded context in which this `option_slider` is used (ex: the world creation menu shows option sliders in the `WORLDGEN` context) |
| `"name"`    | _(mandatory)_ The translated name of this `option_slider`                                                                                |
| `"default"` | The default level for this `option_slider` (defaults to 0)                                                                               |
| `"levels"`  | _(mandatory)_ A list of definitions for each level of this `option_slider`                                                               |

## Option sliders - Levels

Each object in the `"levels"` field uses these fields:

| Field           | Description                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| `"level"`       | _(mandatory)_ The numeric index of this level in the slider. Indexes start at 0 and increase sequentially. |
| `"name"`        | _(mandatory)_ The name of this slider level, acts as a short descriptor for the selected level.            |
| `"description"` | A longer description for the effects of this slider level.                                                 |
| `"options"`     | _(mandatory)_ A list of option values to apply when selecting this slider level.                           |

Each option defines an `"option"` tag that corresponds to an option ID as listed in the
`options_manager::add_options_*` functions in src/options.cpp. The `"type"` field determines
how the `"val"` field is interpreted:

| `type`     | `val`                                                |
| ---------- | ---------------------------------------------------- |
| `"int"`    | An integer. Ex: `"type": "int", "val": 5`            |
| `"float"`  | A decimal number. Ex: `"type": "float", "val": 0.8`  |
| `"bool"`   | A boolean. Ex: `"type": "bool", "val": false`        |
| `"string"` | A text value. Ex: `"type": "string", "val": "crops"` |
