# JSON Flags

- [JSON Flags](#json-flags)
  - [Notes](#notes)
  - [Inheritance (继承)](#inheritance-继承)
  - [TODO](#todo)
  - [Ammo (弹药)](#ammo-弹药)
    - [Ammo type (弹药类型)](#ammo-type-弹药类型)
    - [Flags(标志)](#flags标志)
  - [Traps(陷阱)](#traps陷阱)
  - [Armor(护甲)](#armor护甲)
    - [Covers(覆盖物)](#covers覆盖物)
    - [Specifically Covers (具体包括)](#specifically-covers-具体包括)
    - [Flags](#flags)
  - [Bionics (CBM)](#bionics-cbm)
  - [Bodyparts (身体部位)](#bodyparts-身体部位)
  - [Books (书籍)](#books-书籍)
  - [Character (角色)](#character-角色)
  - [Comestibles (食品)](#comestibles-食品)
    - [Comestible type (食品类型)](#comestible-type-食品类型)
    - [Addiction type (成瘾类型)](#addiction-type-成瘾类型)
    - [Use action (使用动作)](#use-action-使用动作)
    - [Flags](#flags-1)
  - [Effects (效果)](#effects-效果)
    - [Flags (标志)](#flags-标志)
  - [Furniture and Terrain (家具和地形)](#furniture-and-terrain-家具和地形)
    - [Flags (标志)](#flags-标志-1)
    - [Fungal Conversions Only (真菌转化专用)](#fungal-conversions-only-真菌转化专用)
    - [Furniture Only (仅家具)](#furniture-only-仅家具)
  - [Generic(通用)](#generic通用)
    - [Flags(标志)](#flags标志-1)
  - [Guns (枪械)](#guns-枪械)
    - [Firing modes (射击模式)](#firing-modes-射击模式)
  - [Magazines (弹匣)](#magazines-弹匣)
  - [Mapgen (地图生成)](#mapgen-地图生成)
  - [Map Specials (地图特殊)](#map-specials-地图特殊)
  - [Material Phases（物质形态）](#material-phases物质形态)
  - [Melee (近战)](#melee-近战)
    - [Flags (标志)](#flags-标志-2)
  - [Monster Groups (怪物组)](#monster-groups-怪物组)
    - [Seasons (季节)](#seasons-季节)
    - [Time of day (一天中的时间)](#time-of-day-一天中的时间)
  - [Monsters (怪物)](#monsters-怪物)
    - [Anger, Fear and Placation Triggers (愤怒、恐惧和抚慰触发器“大概是仇恨机制”)](#anger-fear-and-placation-triggers-愤怒恐惧和抚慰触发器大概是仇恨机制)
    - [Categories (类别)](#categories-类别)
    - [Death Functions (死亡功能)](#death-functions-死亡功能)
    - [Flags](#flags-2)
    - [Sizes (尺寸)](#sizes-尺寸)
    - [Special attacks (特殊攻击)](#special-attacks-特殊攻击)
  - [Mutations (变异)](#mutations-变异)
      - [Flags (标志)](#flags-标志-3)
    - [Categories (类别)](#categories-类别-1)
  - [Overmap (地图)](#overmap-地图)
    - [Overmap connections (地图连接)](#overmap-connections-地图连接)
    - [Overmap specials (地图特殊点)](#overmap-specials-地图特殊点)
      - [Flags (标志)](#flags-标志-4)
    - [Overmap terrains (地图地形)](#overmap-terrains-地图地形)
      - [Flags (标志)](#flags-标志-5)
  - [Recipes (配方)](#recipes-配方)
    - [Crafting recipes (制作配方)](#crafting-recipes-制作配方)
      - [标志 (Flags)](#标志-flags)
    - [阵营建筑配方 (Camp building recipes)](#阵营建筑配方-camp-building-recipes)
      - [标志 (Flags)](#标志-flags-1)
      - [蓝图重定向标志](#蓝图重定向标志)
  - [Scenarios (情景)](#scenarios-情景)
    - [Flags (标志)](#flags-标志-6)
      - [Profession Flags (职业标志)](#profession-flags-职业标志)
      - [Starting Location Flags (起始位置标志)](#starting-location-flags-起始位置标志)
  - [Skills (技能)](#skills-技能)
    - [Tags (标签)](#tags-标签)
  - [Techniques (技巧)](#techniques-技巧)
  - [Tools (工具)](#tools-工具)
    - [Flags (标志)](#flags-标志-7)
    - [Flags that apply to items (适用于物品的标志)](#flags-that-apply-to-items-适用于物品的标志)
    - [Use actions (使用操作)](#use-actions-使用操作)
  - [Vehicle Parts (载具部分)](#vehicle-parts-载具部分)
    - [Flags](#flags-3)
    - [Vehicle parts requiring other vehicle parts(需要其他车辆部件的车辆部件)](#vehicle-parts-requiring-other-vehicle-parts需要其他车辆部件的车辆部件)
    - [Fuel types (燃料类型)](#fuel-types-燃料类型)
    - [Faults (故障)](#faults-故障)
      - [Flags (标志)](#flags-标志-8)
## Notes

- 有些标志（物品、效果、车辆部件）需要在 `flags.json` 或 `vp_flags.json`（类型为：`json_flag`）中定义，以正常工作。
- 许多为某一类别或物品类型准备的标志，可以在其他类别或物品类型中使用。尝试实验，看看标志还可以在哪里使用。
- 进攻和防御标志可以用于任何可以挥舞的物品类型。

## Inheritance (继承)

当制作一个物品时，它可以从用于制作它的组件中继承标志。这需要继承标志具有 `"craft_inherit": true` 项。如果您不希望某个物品在制作时继承标志，请指定成员 delete_flags，这是一个字符串数组。在那里指定的标志将在制作后从结果物品中删除。这将覆盖标志继承，但不会删除属于物品类型本身的标志。

## TODO

- `Ammo type` 表格已经非常陈旧，没有包括许多新的弹药类型。考虑更新它或者完全删除它，因为弹药类型根本不是 json 标志。


## Ammo (弹药)

### Ammo type (弹药类型)

这些是通过`ammo_types.json`处理的。您可以在此处为武器添加这些标签，以使其装填现有弹药，或者在此处制作自己的弹药。此列表中的第一列是标签的"id"，DDA用于跟踪标签的内部标识符，第二列是被标记弹药的简要描述。使用id搜索弹药列表，因为在整个DDA代码中，id是不变的。祝您装填愉快！ :-)

- ```120mm``` 120mm HEAT (120毫米破甲弹)
- ```12mm``` 12mm (12毫米)
- ```20x66mm``` 20x66mm Shot (and relatives) (20x66毫米霰弹（及相关弹药）)
- ```223``` .223 Remington (and 5.56 NATO) (.223雷明顿（及5.56北约）)
- ```22``` .22LR (and relatives) (.22LR（及相关弹药）)
- ```3006``` 30.06 (30.06)
- ```300``` .300 WinMag (.300温彻斯特麦格农)
- ```308``` .308 Winchester (and relatives) (.308温彻斯特（及相关弹药）)
- ```32``` .32 ACP (.32自动手枪弹)
- ```36paper``` .36 cap & ball (.36火帽和弹丸)
- ```38``` .38 Special (.38特种)
- ```40``` 10mm (10毫米)
- ```40mm``` 40mm Grenade (40毫米榴弹)
- ```44``` .44 Magnum (.44马格南)
- ```44paper``` .44 cap & ball (.44火帽和弹丸)
- ```454``` .454 Casull (.454卡苏尔)
- ```45``` .45 ACP (and relatives) (.45自动手枪弹（及相关弹药）)
- ```46``` 46mm (46毫米)
- ```500``` .500 Magnum (.500马格南)
- ```50``` .50 BMG (.50巴雷特)
- ```57``` 57mm (57毫米)
- ```5x50``` 5x50 Dart (5x50飞镖)
- ```66mm``` 66mm HEAT (66毫米破甲弹)
- ```700nx``` .700 Nitro Express (.700硝基快车)
- ```762R``` 7.62x54mm (7.62x54毫米)
- ```762``` 7.62x39mm (7.62x39毫米)
- ```762x25``` 7.62x25mm (7.62x25毫米)
- ```84x246mm``` 84x246mm HE (84x246毫米高爆弹)
- ```8x40mm``` 8mm Caseless (8毫米无壳)
- ```9mm``` 9x19mm Luger (and relatives) (9x19毫米鲁格（及相关弹药）)
- ```9x18``` 9x18mm (9x18毫米)
- ```BB``` BB (BB弹)
- ```RPG-7``` RPG-7 (RPG-7)
- ```UPS``` UPS charges (UPS充电)
- ```ammo_flintlock``` Flintlock ammo (火石枪弹药)
- ```ampoule``` Ampoule (安瓿)
- ```arrow``` Arrow (箭)
- ```battery``` Battery (电池)
- ```blunderbuss``` Blunderbuss (大嘴火枪)
- ```bolt``` Bolt (弩箭)
- ```charcoal``` Charcoal (木炭)
- ```components``` Components (组件)
- ```dart``` Dart (飞镖)
- ```diesel``` Diesel (柴油)
- ```fish_bait``` Fish bait (鱼饵)
- ```fishspear``` Speargun spear (鱼枪鱼叉)
- ```fusion``` Laser Pack (镭射包)
- ```gasoline``` Gasoline (汽油)
- ```homebrew_rocket``` homebrew rocket (自制火箭)
- ```lamp_oil``` Lamp oil (灯油)
- ```laser_capacitor``` Charge (充电)
- ```m235``` M235 TPA (66mm Incendiary Rocket) (M235 TPA（66毫米燃烧火箭）)
- ```metal_rail``` Rebar Rail (钢筋轨)
- ```money``` Cents (分)
- ```muscle``` Muscle (肌肉)
- ```nail``` Nail (钉子)
- ```pebble``` Pebble (卵石)
- ```plasma``` Plasma (等离子)
- ```plutonium``` Plutonium Cell (钚电池)
- ```rebreather_filter``` Rebreather filter (再呼吸器过滤器)
- ```shot``` Shotshell (霰弹壳)
- ```signal_flare``` Signal Flare (信号弹)
- ```tape``` Duct tape (胶带)
- ```thread``` Thread (线)
- ```thrown``` Thrown (投掷)
- ```unfinished_char``` Semi-charred fuel (半烧焦燃料)
- ```water``` Water (水)
- ```paper``` Paper (纸)### Ammo effects
- ```ACIDBOMB``` 爆炸时留下一滩酸液。
- ```ACT_ON_RANGED_HIT``` 物品在被投掷或发射时激活，然后立即处理，如果它出现在地面上。
- ```APPLY_SAP``` 击中时应用覆盖树液的效果。
- ```BEANBAG``` 使目标晕眩。
- ```BLACKPOWDER``` 可能会因黑火药污垢堵塞枪支，同时还会导致生锈。
- ```BLINDS_EYES``` 如果击中头部，会使目标失明（远程投射物目前实际上不能击中眼睛）。
- ```BOUNCE``` 给目标附加`bounced`效果，并反弹到附近没有此效果的目标。
- ```BURST``` 击中时泄漏内容。
- ```COOKOFF``` 着火时爆炸。
- ```CUSTOM_EXPLOSION``` 根据使用的弹药中```"explosion"```字段中指定的爆炸。参见`JSON_INFO.md`。
- ```DRAW_AS_LINE``` 不经过常规子弹动画；而是在一帧内绘制一条线和线尾的子弹。
- ```DRAW_LASER_BEAM``` 创建一道激光（场类型）轨迹。
- ```EMP``` 损坏"电子"地形类型（如控制台或读卡器）在罕见情况下，可能使读卡器打开门。损坏并摧毁机器人敌人。从玩家拥有的任何电子设备中耗电和生物电力。
- ```EXPLOSIVE```                           -
- ```EXPLOSIVE_120mmHEAT```                 -
- ```EXPLOSIVE_20x66```                     -
- ```EXPLOSIVE_66mmHEAT```                  -
- ```EXPLOSIVE_84x246HE```                  -
- ```EXPLOSIVE_84x246HEDP```                -
- ```EXPLOSIVE_ATGMHEAT```                  -
- ```EXPLOSIVE_BIG```                       -
- ```EXPLOSIVE_GRENADE```                   -
- ```EXPLOSIVE_HESHOT```                    -
- ```EXPLOSIVE_HOMEMADE```                  - 各种威力的爆炸，有或没有碎片，具体数值请参阅`ammo_effects.json`。
- ```EXPLOSIVE_HOMEMADE_GRENADE_1```        -
- ```EXPLOSIVE_HOMEMADE_GRENADE_2```        -
- ```EXPLOSIVE_HUGE```                      -
- ```EXPLOSIVE_m430a1```                    -
- ```EXPLOSIVE_m433```                      -
- ```EXPLOSIVE_OG7V```                      -
- ```EXPLOSIVE_PG7VL```                     -
- ```EXPLOSIVE_PG7VR```                     -
- ```EXPLOSIVE_RAUFOSS```                   -
- ```EXPLOSIVE_SMALL```                     -
- ```EXPLOSIVE_SMALL_HOMEMADE_GRENADE_1```  -
- ```EXPLOSIVE_SMALL_HOMEMADE_GRENADE_2```  -
- ```EXPLOSIVE_TBG7V```                     -
- ```FLAME``` 点燃火焰的极小爆炸。
- ```FLARE``` 将目标瓷砖点燃。
- ```FLASHBANG``` 使附近目标失明和失聪。
- ```FOAMCRETE``` 击中时施加泡沫混凝土效果。
- ```FRAG``` 产生散布碎片的小型爆炸（"power": 185, "shrapnel": { "casing_mass": 212, "fragment_mass": 0.025}）。
- ```FRAG_20x66``` 产生散布碎片的小型爆炸（"power": 40, "shrapnel": { "casing_mass": 15, "fragment_mass": 0.08 }）。
- ```GAS_FUNGICIDAL``` 击中时产生一团杀菌气体。
- ```GAS_INSECTICIDAL``` 击中时产生一团杀虫气体。
- ```HEAVY_HIT``` 击中时产生巨大声响。
- ```INCENDIARY``` 点燃目标。
- ```IGNITE``` 使目标燃烧得更激烈且持续时间更长。
- ```JET``` 将`*`符号绘制为飞行投射物（与通常的`#`符号不同）。
- ```LARGE_BEANBAG``` 严重使目标晕眩。
- ```LASER``` 创建一道激光（场类型）轨迹。
- ```LIGHTNING``` 创建一道闪电轨迹。
- ```magic``` 总是最好的命中，不做任何特殊处理，无伤害倍数，什么都没有。
- ```MININUKE_MOD``` 留下放射性尘埃的小型热核爆炸。
- ```MUZZLE_SMOKE``` 在源头产生一小团烟雾。
- ```NAPALM``` 产生散布火焰的爆炸。
- ```NAPALM_BIG``` 产生散布火焰的大型爆炸。
- ```NAPALM_TBG7V``` 击中时产生大火。
- ```NEVER_MISFIRES``` 使用没有此标志的弹药可能会导致误火，这与武器标志无关。
- ```NO_DAMAGE_SCALING``` 命中弱点时始终造成100%的伤害。
- ```NO_EMBED``` 当物品会从弹丸中生成时，它总是生成在地面上，而不是怪物的库存中。对于活动投掷物品，这是隐含的。对于不掉落物品的弹丸没有任何效果。
- ```NOGIB``` 防止对目标造成过量伤害（目标不会爆炸成碎片，参见怪物标志`NOGIB`）。
- ```NO_ITEM_DAMAGE``` 即使在其他情况下会尝试造成伤害，也不会对地图上的物品造成伤害。
- ```NON_FOULING``` 此弹药在发射时不会造成枪支的污垢或火药尘积累。
- ```NO_OVERSHOOT``` 带有此效果的弹丸不会飞越玩家设置的目标格。
- ```NO_PENETRATE_OBSTACLES``` 阻止弹丸穿过带有障碍的瓷砖，如铁丝网围栏或梳妆台。
- ```NPC_AVOID``` NPC不会使用装有带有此效果弹药的枪支或枪支改装件。
- ```NULL_SOURCE``` 带有此效果的弹丸没有发射它们的生物；仅适用于爆炸物的弹片。
- ```PARALYZEPOISON``` 造成伤害时，施加瘫痪毒素效果。
- ```PLASMA``` 产生一道超热等离子体痕迹。
- ```PLASMA_BUBBLE``` 产生一团超热等离子体云。
- ```PYROPHORIC``` 大规模爆炸，传播高强度火焰。
- ```ROBOT_DAZZLE``` 对机器人施加传感器眩晕效果。
- ```RECOVER_[X]``` 在撞击点有(X-1/X)的几率生成已使用弹药的一次充电。
- ```RECYCLED```（对于手工弹药）可能导致枪支误火；这与武器标志无关。
- ```SHATTER_SELF``` 在击中时摧毁自己并产生碎片。
- ```SHOT``` 多个较小的弹丸；对护甲的效果较差，但增加命中几率且没有近距离惩罚。
- ```SMOKE``` 在目标处生成一团烟雾。
- ```SMOKE_BIG``` 在目标处生成一大片烟雾。
- ```STREAM``` 留下火焰场的痕迹。
- ```STREAM_BIG``` 留下强烈火焰场的痕迹。
- ```STREAM_GAS_FUNGICIDAL``` 留下一道杀真菌气体的痕迹。
- ```STREAM_GAS_INSCENTICIDAL``` 留下一道杀虫气体的痕迹。
- ```TANGLE``` 当这种弹丸击中目标时，有机会纠缠住它们并使它们无法移动。
- ```TOXICGAS``` 在击中时产生一团有毒气体。
- ```TRAIL``` 产生一道烟雾痕迹。
- ```WIDE``` 阻止`HARDTOSHOOT`怪物标志产生任何效果。已经被```SHOT```或液体弹药隐含。
- 
### Flags(标志)

- ```CASELESS_ROUNDS``` 无壳弹药，无法拆卸或重新装填。

## Traps(陷阱)

- ```AVATAR_ONLY``` 只有玩家角色会触发此陷阱。
- ```CONVECTS_TEMPERATURE``` 此陷阱传导温度，如熔岩。
- ```PIT``` 此陷阱是坑洞地形的一个版本。
- ```SONAR_DETECTABLE``` 此陷阱可通过地面穿透声纳进行识别。
- ```UNCONSUMED``` 如果此陷阱是法术类型，在激活后不会被移除。
- ```UNDODGEABLE``` 此陷阱无法躲避。

## Armor(护甲)

### Covers(覆盖物)

- ```ARMS``` ... 与 ```ARM_L``` 和 ```ARM_R``` 相同 (与 ```左臂``` 和 ```右臂``` 相同)
- ```ARM_L``` (左臂)
- ```ARM_R``` (右臂)
- ```EYES``` (眼睛)
- ```FEET``` ... 与 ```FOOT_L``` 和 ```FOOT_R``` 相同 (与 ```左脚``` 和 ```右脚``` 相同)
- ```FOOT_L``` (左脚)
- ```FOOT_R``` (右脚)
- ```HANDS``` ... 与 ```HAND_L``` 和 ```HAND_R``` 相同 (与 ```左手``` 和 ```右手``` 相同)
- ```HAND_L``` (左手)
- ```HAND_R``` (右手)
- ```HEAD``` (头部)
- ```LEGS``` ... 与 ```LEG_L``` 和 ```LEG_R``` 相同 (与 ```左腿``` 和 ```右腿``` 相同)
- ```LEG_L``` (左腿)
- ```LEG_R``` (右腿)
- ```MOUTH``` (嘴巴)
- ```TORSO``` (躯干)

### Specifically Covers (具体包括)

- ```torso_upper``` (上躯干)
- ```torso_neck``` (躯干颈部)
- ```torso_lower``` (下躯干)
- ```torso_hanging_front``` (躯干前悬挂部分)
- ```torso_hanging_back``` (躯干后悬挂部分)
- ```arm_shoulder_r``` (右肩)
- ```arm_upper_r``` (右上臂)
- ```arm_elbow_r``` (右肘)
- ```arm_lower_r``` (右前臂)
- ```arm_shoulder_l``` (左肩)
- ```arm_upper_l``` (左上臂)
- ```arm_elbow_l``` (左肘)
- ```arm_lower_l``` (左前臂)
- ```leg_hip_r``` (右髋)
- ```leg_upper_r``` (右大腿)
- ```leg_knee_r``` (右膝)
- ```leg_lower_r``` (右小腿)
- ```leg_hip_l``` (左髋)
- ```leg_upper_l``` (左大腿)
- ```leg_knee_l``` (左膝)
- ```leg_lower_l``` (左小腿)

### Flags

一些防具标志，如 `WATCH` 和 `ALARMCLOCK`，可以与其他物品类型兼容。尝试找到哪些标志可以在其他地方使用。

- ```ABLATIVE_LARGE``` 该物品适用于大型减免口袋。(此物品适合放入大型减免口袋)
- ```ABLATIVE_MEDIUM``` 该物品适用于中型减免口袋。(此物品适合放入中型减免口袋)
- ```ACTIVE_CLOAKING``` 在激活状态下，消耗 UPS 以提供隐身功能。(激活时，消耗UPS提供隐身功能)
- ```ALARMCLOCK``` 具有闹钟功能。(具有闹钟功能)
- ```ALLOWS_NATURAL_ATTACKS``` 与覆盖相关身体部位的大多数物品不同，不会阻止任何自然攻击或突变、指尖剃刀等类似好处。(不阻止任何天然攻击或突变、指尖剃刀等类似好处)
- ```AURA``` 该物品位于外部光环层，用于形而上学效果。(此物品位于外部光环层，用于超自然效果)
- ```BAROMETER``` 该装备配备了精确的气压计（用于测量大气压力）。（此装备配备了精确的气压计（用于测量大气压力））
- ```BELTED``` 用于背包和外穿物品的层。（用于背包和外穿物品的层）
- ```BLIND``` 佩戴时使佩戴者失明，并提供对闪光弹闪光的名义保护。(佩戴时使佩戴者失明，并提供对闪光弹闪光的名义保护)
- ```BLOCK_WHILE_WORN``` 允许穿戴的防具或盾牌用于阻挡攻击。(允许穿戴的防具或盾牌用于阻挡攻击)
- ```BULLET_IMMUNE``` 穿戴具有此标志的物品使您免受子弹伤害。(穿戴带有此标志的物品使您免受子弹伤害)
- ```CANT_WEAR``` 无法直接穿戴此物品。(无法直接穿戴此物品)
- ```COLLAR``` 该服装有一个宽领子，当嘴巴大部分不受拘束时，可以保持口腔温暖。(这件衣服有一个宽领子，当嘴巴大部分不受拘束时，可以保持口腔温暖)
- ```COMBAT_TOGGLEABLE``` 该物品可在战斗中切换。NPC 用于确定他们是否在战斗中打开它。只支持简单的 "transform" 操作。(此物品可在战斗中切换。NPC用于确定他们是否在战斗中切换它。只支持简单的"转换"操作)
- ```DECAY_EXPOSED_ATMOSPHERE``` 一旦暴露于大气中，消耗品会变质（如 MRE）。（一旦暴露于大气中，消耗品会变质（如 MRE））
- ```DEAF``` 使玩家失聪。(使玩家失聪)
- ```MUTE``` 使玩家哑。(使玩家哑)
- ```ELECTRIC_IMMUNE``` 该装备完全保护您免受电击。(此装备完全保护您免受电击)
- ```FANCY``` 如果玩家拥有 `Stylish` 特质，穿戴这件衣服会给予士气加成。(如果玩家具有 `Stylish` 特质，穿这件衣服会给予士气加成)
- ```FIX_FARSIGHT``` 该装备可以矫正远视。(此装备可矫正远视)
- ```FIX_NEARSIGHT``` 该装备可以矫正近视。(此装备可矫正近视)
- ```FLOTATION``` 防止玩家在深水中溺水。同时也阻止潜水。(防止玩家在深水中溺水。同时也阻止潜水)
- ```FRAGILE``` 与正常情况下的耐久性相比，这种装备的耐久性较低。(与正常情况下的耐久性相比，这种装备的耐久性较低)
- ```HOOD``` 允许这件衣服在条件允许的情况下覆盖头部，以提供额外的保暖或防水效果，如果玩家的头部没有受到束缚。(允许这件衣服在条件允许的情况下覆盖头部，以提供额外的保暖或防水效果，如果玩家的头部没有受到束缚)
- ```HYGROMETER``` 该装备配备了精确的湿度计（用于测量湿度）。(此装备配备了精确的湿度计（用于测量湿度）)
- ```INTEGRATED``` 该物品代表了由突变或仿生学赋予你的一部分。它总是合适的，不能被卸下（除非失去来源），并且在死亡时不会掉落，但在功能、负重、层冲突等方面与正常的防具相同。(此物品代表了由突变或仿生学赋予你的一部分。它总是合适的，不能被卸下（除非失去来源），并且在死亡时不会掉落，但在功能、负重、层冲突等方面与正常的防具相同)
- ```NORMAL``` 像普通衣物一样穿着。默认情况下被认为是这样。(像普通衣物一样穿着。默认情况下被认为是这样)
- ```NO_TAKEOFF``` 带有该标志的物品无法摘下。(带有该标志的物品无法摘下)
- ```NO_WEAR_EFFECT``` 佩戴时，这种装备不提供任何效果（大多数珠宝）。(佩戴时，这种装备不提供任何效果（大多数珠宝）)
- ```ONLY_ONE``` 你只能穿一件。(你只能穿一件)
- ```OUTER``` 外层服装层。(外层服装层)
- ```OVERSIZE``` 无论负重/突变/仿生学等情况如何，都可以一直穿着，但不能穿其他衣服在这件衣服上。(无论负重/突变/仿生学等情况如何，都可以一直穿着，但不能穿其他衣服在这件衣服上)
- ```PADDED``` 即使没有特定的软材料，这种护甲也算舒适。
- ```PARTIAL_DEAF``` 将声音降低到安全的音量。
- ```PERSONAL``` 该物品位于个人光环层，用于超自然效果。
- ```POCKETS``` 如果玩家的手很冷并且没有手持物品，增加手部的保暖程度。
- ```POWERARMOR_COMPATIBLE``` 尽管其他参数导致失败，但使物品与动力装甲兼容。
- ```PSYSHIELD_PARTIAL``` 穿着时有25%的几率防护`fear_paralyze`怪物攻击。
- ```RAD_PROOF``` 这件衣服完全保护您免受辐射侵害。
- ```RAD_RESIST``` 这件衣服部分地（75%）保护您免受辐射侵害。
- ```RAINPROOF``` 防止被雨淋湿的身体部位。
- ```REQUIRES_BALANCE``` 需要一定平衡感的装备。如果玩家在穿着时被击中，有机会倒下。
- ```RESTRICT_HANDS``` 阻止玩家双手持武器，如果武器允许，强制使用单手。
- ```ROLLER_ONE``` 速度较慢且稳定性较差的`ROLLER_QUAD`版本，仍然允许玩家移动得比步行速度快。
- ```ROLLER_QUAD``` 是`ROLLER_INLINE`和`ROLLER_ONE`之间的中等选择，虽然更稳定且速度更快，但在非平坦地形上的惩罚比`ROLLER_ONE`更严重。
- ```ROLLER_INLINE``` 更快，但整体稳定性较差，非平坦地形的惩罚更严重。
- ```SEMITANGIBLE``` 穿着时，防止物品参与负重系统。
- ```SKINTIGHT``` 贴身衣物层。
- ```SLOWS_MOVEMENT``` 这件衣服使移动成本乘以1.1。
- ```SLOWS_THIRST``` 这件衣服使玩家口渴速度乘以0.70。
- ```STURDY``` 这件衣服比普通衣物更能抵抗损坏。
- ```SUN_GLASSES``` 防止阳光刺眼。
- ```SUPER_FANCY``` 如果玩家具有`Stylish`特质，比`FANCY`提供额外的士气加成。
- ```SWIM_GOGGLES``` 允许你在水下看得更远。
- ```THERMOMETER``` 此设备配备了准确的温度计（用于测量温度）。
- ```VARSIZE``` 可通过裁剪调整尺寸。
- ```WAIST``` 用于腰带和其他腰部佩戴物品的层。
- ```WATCH``` 充当手表，允许玩家查看实际时间。
- ```WATERPROOF``` 在任何情况下都可以防止覆盖的身体部位变湿。
- ```WATER_FRIENDLY``` 防止物品使身体部位对水产生不友好反应，从而减少因浸湿而导致的士气降低。


## Bionics (CBM)

- ```BIONIC_ARMOR_INTERFACE``` 该CBM可以为动力装甲提供能量。
- ```BIONIC_FAULTY``` 该CBM是一个"有故障"的CBM。
- ```BIONIC_GUN``` 该CBM是一个枪械CBM，激活它将进行射击。阻止CBM产生任何其他激活效果，包括电力消耗。
- ```BIONIC_NPC_USABLE``` NPC AI知道如何使用此CBM，可以将其安装在NPC上。
- ```BIONIC_POWER_SOURCE``` 该CBM是一个电源CBM。
- ```BIONIC_SLEEP_FRIENDLY``` 如果玩家尝试在此CBM处于活动状态时入睡，它不会提示玩家将其关闭。
- ```BIONIC_TOGGLED``` 该CBM仅在激活时有功能，否则每回合都会产生效果。
- ```BIONIC_WEAPON``` 该CBM是一个武器CBM，激活它会在玩家手中创建（或销毁）CBM的伪造物品。阻止所有其他激活效果。
- ```BIONIC_SHOCKPROOF``` 该CBM不会因电击攻击而瘫痪。
- ```USES_BIONIC_POWER``` 如果存在，附加到此CBM的物品将自动继承`USES_BIONIC_POWER`标志。


## Bodyparts (身体部位)

- ```ALWAYS_BLOCK``` 即使你的武术不允许这样的格挡，这个非标准身体部位在徒手格斗中始终有资格进行格挡。
- ```ALWAYS_HEAL``` 无论该部位是否会正常愈合，此身体部位在每个再生周期（目前为5分钟）都会恢复。
- ```HEAL_OVERRIDE``` 该身体部位总是会恢复其`heal_bonus`HP，而不是修改基本治疗步骤。如果没有`ALWAYS_HEAL`，这仍然只有在部位会恢复非零伤害时才会发生。
- ```IGNORE_TEMP``` 温度计算时将忽略此身体部位。
- ```LIMB_LOWER``` 该身体部位靠近地面，因此更容易受到小型怪物的攻击——对于不能攻击上肢的生物，命中率增加三倍。
- ```LIMB_UPPER``` 该身体部位离地面较高，因此无法受到小型怪物的攻击——除非它们具有`FLIES`或`ATTACK_UPPER`标志。
- ```MEND_LIMB``` 该身体部位可以在不需要夹板的情况下自行恢复。
- ```NONSTANDARD_BLOCK``` 该肢体与武术的手臂/腿格挡不同——通过达到MA的`nonstandard_block`等级解锁该肢体的格挡，除非肢体还具有`ALWAYS_BLOCK`。对于非手臂/非腿肢体，任一格挡标志都是**必需的**，以便有资格进行格挡。


## Books (书籍)

- ```INSPIRATIONAL``` 阅读这本书会给具有 SPIRITUAL 特质的角色带来额外的士气。
- ```BINDER_ADD_RECIPE``` 将配方添加到书籍装订器。

## Character (角色)

- ```BLEED_IMMUNE``` 对出血免疫。
- ```COLDBLOOD``` 适用于热依赖突变。
- ```COLDBLOOD2``` 适用于非常热依赖的突变。
- ```COLDBLOOD3``` 适用于冷血突变。
- ```DOWNED_RECOVERY``` 无论肢体评分/统计数据如何，都有50%的机会从倒下状态恢复。
- ```ECTOTHERM``` 适用于外温型突变，如 COLDBLOOD4 和 DRAGONBLOOD3（来自 Magiclysm 的黑龙）。
- ```HEAT_IMMUNE``` 对非常高的温度免疫。
- ```NO_DISEASE``` 这种突变赋予抗病能力。
- ```NO_THIRST``` 饮食不影响你的口渴程度。
- ```NO_RADIATION``` 这种突变赋予对辐射的免疫力。
- ```INFECTION_IMMUNE``` 这种突变赋予对感染的免疫力，包括被咬和破伤风感染。
- ```SUPER_HEARING``` 你的听力比普通人要好得多。
- ```IMMUNE_HEARING_DAMAGE``` 对大声音造成的听力损伤免疫。
- ```CANNIBAL``` 屠宰人类，食用带有 CANNIBALISM 和 STRICT_HUMANITARIANISM 标志的食物，不会影响士气。
- ```CLIMB_NO_LADDER``` 能够在没有支撑的情况下攀爬单层墙壁。
- ```DEAF``` 使你失聪。
- ```BLIND``` 使你失明。
- ```EYE_MEMBRANE``` 让你在水下看得见。
- ```NO_SCENT``` 你没有气味。
- ```STOP_SLEEP_DEPRIVATION``` 在清醒时阻止睡眠剥夺，在睡眠时增强它。
- ```GLARE_RESIST``` 保护眼睛免受眩光的影响，如同太阳镜。
- ```HYPEROPIC``` 你患有远视 - 近战受到阻碍，没有眼镜就无法阅读。
- ```MYOPIC``` 你患有近视 - 没有眼镜，视线范围会大大缩小。
- ```MYOPIC_IN_LIGHT``` 在光线中你患有近视，但在昏暗环境中可以正常看到。
- ```MEND_ALL``` 你不需要夹板就能治愈骨折。
- ```NIGHT_VISION``` 你能在黑暗中看得见。
- ```INFRARED``` 你能看到红外线，也就是热视觉。
- ```SEESLEEP``` 你在睡眠中仍然可以看到，试图入睡时也不会受到光线的干扰。
- ```ELECTRIC_IMMUNE``` 你对电伤害免疫。
- ```COLD_IMMUNE``` 你对寒冷伤害免疫。
- ```BIO_IMMUNE``` 你对生物伤害免疫。
- ```BASH_IMMUNE``` 你对钝击伤害免疫。
- ```CUT_IMMUNE``` 你对割伤免疫。
- ```STAB_IMMUNE``` 你对刺伤免疫。
- ```ACID_IMMUNE``` 你对酸伤害免疫。
- ```BULLET_IMMUNE``` 你对子弹伤害免疫。
- ```WATCH``` 你总是知道现在的时间。
- ```ALARMCLOCK``` 你总是可以设置闹钟。
- ```PARAIMMUNE``` 你对寄生虫免疫。
- ```IMMUNE_SPOIL``` 你对腐烂食物的负面影响免疫。
- ```FEATHER_FALL``` 你对跌落伤害免疫。
- ```INVISIBLE``` 你无法被看见。
- ```DIMENSIONAL_ANCHOR``` 你无法被传送。
- ```PORTAL_PROOF``` 你对个人传送门风暴效果免疫。
- ```CLIMATE_CONTROL``` 你对极端温度具有抗性。
- ```HEATSINK``` 你对极端高温具有抗性。
- ```THERMOMETER``` 你总是知道当前的温度。
- ```CBQ_LEARN_BONUS``` 你可以更快地从生物学习CQB。
- ```GILLS``` 你可以在水下呼吸。
- ```HARDTOHIT``` 每当有东西攻击你时，RNG会掷两次骰子，你会得到更好的结果。
- ```HUGE``` 将你的尺寸更改为 `creature_size::huge`。在尺寸类别标志中检查最后一个，如果没有找到尺寸标志，则尺寸默认为 `creature_size::medium`。
- ```LARGE``` 将你的尺寸更改为 `creature_size::large`。在尺寸类别标志中检查第三个。
- ```PSYCHOPATH``` 屠宰人类不会导致士气惩罚。
- ```PRED1``` 从带有 `PREDATOR_FUN` 标志的食物中获得小额士气加成。减少罪行死亡效应的士气惩罚。
- ```PRED2``` 以双倍追赶修饰符学习战斗技能。抵抗战斗技能的技能锈蚀。从带有 `PREDATOR_FUN` 标志的食物中获得小额士气加成。减少罪行死亡效应的士气惩罚。
- ```PRED3``` 以双倍追赶修饰符学习战斗技能。抵抗战斗技能的技能锈蚀。从带有 `PREDATOR_FUN` 标志的食物中获得中等士气加成。对罪行死亡效应免疫。
- ```PRED4``` 以三倍追赶修饰符学习战斗技能。在不消耗专注力的情况下学习战斗技能。抵抗战斗技能的技能锈蚀。从带有 `PREDATOR_FUN` 标志的食物中获得大量士气加成。对罪行死亡效应免疫。
- ```SAPIOVORE``` 屠宰人类不会导致士气惩罚。
- ```SMALL``` 将你的尺寸更改为 `creature_size::small`。在尺寸类别标志中检查第二个。
- ```STEADY``` 你的速度永远不会低于基本速度，效果等带来的加成仍然适用。
- ```STRICT_HUMANITARIAN``` 你可以在不受到士气惩罚的情况下食用带有 `STRICT_HUMANITARIANISM` 标签的食品。
- ```TINY``` 将你的尺寸更改为 `creature_size::tiny`。在尺寸类别标志中检查第一个。
- ```WEBBED_FEET``` 你的脚上有蹼，如果不穿鞋子，可以提高你的游泳速度。
- ```WEBBED_HANDS``` 你的手上有蹼，可以提高你的游泳速度。
- ```WEB_RAPPEL``` 你可以沿着楼梯和任何高度的陡峭下降快速下滑。
- ```WALL_CLING``` 只要上方的瓷砖至少与一面墙相邻，你就可以爬上/下陡峭的悬崖。每一步都有可能滑倒摔落。
- ```WINGS_1``` 你有50%的几率无视跌落陷阱（包括悬崖）。
- ```WINGS_2``` 你有100%的几率无视跌落陷阱（包括悬崖）。需要两个标志实例。


## Comestibles (食品)

### Comestible type (食品类型)

- ```DRINK``` (饮料)
- ```FOOD``` (食物)
- ```MED``` (药物)

### Addiction type (成瘾类型)

- ```alcohol``` (酒精)
- ```amphetamine``` (安非他命)
- ```caffeine``` (咖啡因)
- ```cocaine``` (可卡因)
- ```crack``` (霹雳可卡因)
- ```nicotine``` (尼古丁)
- ```opiate``` (鸦片类)
- ```sleeping pill``` (安眠药)

### Use action (使用动作)

- ```ALCOHOL_STRONG``` 大幅度增加醉意。添加疾病 `drunk`（醉酒）。
- ```ALCOHOL_WEAK``` 轻微增加醉意。添加疾病 `drunk`（醉酒）。
- ```ALCOHOL``` 增加醉意。添加疾病 `drunk`（醉酒）。
- ```ANTIBIOTIC``` 帮助对抗感染。移除疾病 `infected`（感染）并添加疾病 `recover`（康复）。
- ```BANDAGE``` 停止出血。
- ```BIRDFOOD``` 使一只小鸟变得友好。
- ```BLECH``` 导致呕吐，添加疾病 `poison`（中毒），增加疼痛并损伤躯干。
- ```BLECH_BECAUSE_UNCLEAN``` 导致警告。
- ```CATFOOD``` 使猫变得友好。
- ```CATTLEFODDER``` 使大型草食动物变得友好。
- ```CHEW``` 显示消息 "You chew your %s."（你咀嚼着你的 %s。），但其他方面没有任何作用。
- ```CIG``` 缓解尼古丁渴望。添加疾病 `cig`（香烟）。
- ```COKE``` 减少饥饿。添加疾病 `high`（兴奋）。
- ```CRACK``` 减少饥饿。添加疾病 `high`（兴奋）。
- ```DISINFECTANT``` 预防感染。
- ```DOGFOOD``` 使狗变得友好。
- ```FIRSTAID``` 治疗。
- ```FLUMED``` 添加疾病 `took_flumed`（服用了感冒药）。
- ```FLUSLEEP``` 添加疾病 `took_flumed`（服用了感冒药）并增加疲劳。
- ```FUNGICIDE``` 杀死真菌和孢子。移除疾病 `fungus`（真菌）和 `spores`（孢子）。
- ```HALLU``` 添加疾病 `hallu`（幻觉）。
- ```HONEYCOMB``` 产生蜡。
- ```INHALER``` 移除疾病 `asthma`（哮喘）。
- ```IODINE``` 添加疾病 `iodine`（碘）。
- ```MARLOSS``` "As you eat the berry, you have a near-religious experience, feeling at one with your surroundings..."（当你吃掉这颗浆果时，你有一种近乎宗教的体验，感觉与周围环境融为一体......）
- ```METH``` 添加疾病 `meth`（冰毒）。
- ```NONE``` "You can't do anything of interest with your [x]."（你无法用你的 [x] 做任何有趣的事情。）
- ```PKILL``` 减轻疼痛。添加疾病 `pkill[n]`（止痛药[n]），其中 `[n]` 是此消耗品上使用的标志 `PKILL_[n]` 的等级。
- ```PLANTBLECH``` 如果玩家没有植物突变，则激活 `BLECH`（恶心） iuse 动作。
- ```POISON``` 添加疾病 `poison`（中毒）和 `foodpoison`（食物中毒）。
- ```PROZAC``` 如果当前没有出现，则添加疾病 `took_prozac`（服用了百忧解），否则作为一种轻微的兴奋剂。罕见地具有 `took_prozac_bad`（服用百忧解不良反应）的副作用。
- ```PURIFIER``` 移除随机数量的负面突变。
- ```SEWAGE``` 导致呕吐。
- ```SLEEP``` 大幅度增加疲劳。
- ```THORAZINE``` 移除疾病 `hallu`（幻觉）、`visuals`（视觉）和 `high`（兴奋）。另外，如果疾病 `dermatik`（皮肤病）不存在，则移除疾病 `formication`（皮肤发痒）。有可能出现增加疲劳的负面反应。
- ```VITAMINS``` 增加健康度（不要与HP混淆）。
- ```WEED``` 让你与 Cheech 和 Chong 一起摇滚。添加疾病 `weed_high`（大麻高潮）。
- ```XANAX``` 缓解焦虑。添加疾病 `took_xanax`（服用了 Xanax）。

### Flags

- ```ACID``` 当使用 `BLECH` 功能消耗时，如果角色具有 `ACIDPROOF` 或 `ACIDBLOOD` 特征，惩罚减少。
- ```CARNIVORE_OK``` 肉食突变角色可以食用。
- ```CANT_HEAL_EVERYONE``` 这种药物不能被所有人使用，需要特殊突变。请参阅突变中的 `can_heal_with`。
- ```CORROSIVE``` 当使用 `BLECH` 功能消耗时，会导致与 `ACID` 相同的惩罚，但不受 `ACIDPROOF` 或 `ACIDBLOOD` 特征的影响。
- ```EATEN_COLD``` 冷食物士气加成。
- ```EATEN_HOT``` 热食物士气加成。
- ```EDIBLE_FROZEN``` 冷冻状态下仍可食用，无士气加成。
- ```INEDIBLE``` 默认不可食用，在与（突变阈值）标志 `BIRD`、`CATTLE` 结合时启用食用。
- ```FERTILIZER``` 作为农业肥料使用，如果使用 `PLANTBLECH` 功能消耗，对植物的惩罚将逆转。
- ```FREEZERBURN``` 第一次解冻是 `MUSHY`，第二次是腐烂。
- ```FUNGAL_VECTOR``` 食用后会导致真菌感染。
- ```HIDDEN_HALLU``` 食物会导致幻觉，只有在某个生存技能等级下才可见。
- ```HIDDEN_POISON``` 在某个生存技能等级下，食物显示为有毒。注意这本身并不会使物品变得有毒，可以考虑添加 `"use_action": [ "POISON" ]`，或者使用 `FORAGE_POISON` 代替。
- ```MELTS``` 除非冷冻，否则只提供一半的乐趣。冷冻时可食用。
- ```MILLABLE``` 可放入磨坊，磨成面粉。
- ```MUTAGEN_CATALYST``` 注射后将促使突变。
- ```MUTAGEN_PRIMER``` 注射后将使身体为突变做好准备。
- ```MYCUS_OK``` 阈值后的Mycus角色可以食用。默认仅适用于Mycus果实。
- ```NEGATIVE_MONOTONY_OK``` 允许 `negative_monotony` 属性将食品的乐趣降低到负值。
- ```NO_AUTO_CONSUME``` 具有此标志的消耗品不会在自动进食/自动饮水区域被消耗。
- ```NO_INGEST``` 通过非口服途径给药。
- ```NUTRIENT_OVERRIDE``` 当您制作物品时，游戏会检查它是否是食物，如果是，它会存储创建该物品的组件。 "NUTRIENT_OVERRIDE" 标志将跳过此步骤。
- ```PKILL_1``` 轻度止痛药。
- ```PKILL_2``` 中度止痛药。
- ```PKILL_3``` 强力止痛药。
- ```PKILL_L``` 缓释止痛药。
- ```RAD_STERILIZED``` 经过辐射处理的食物，安全食用，但不是永久可食用的（如 MRE）。
- ```RAD_STERILIZED_EDIBLE_FOREVER``` 经过辐射处理的食物，安全食用且永久可食用。
- ```RAW``` 在煮熟之前（即，在需要热源的配方中使用）减少 25% 的千卡。应添加到 *所有*未煮熟的食物中，除非该食物中超过 50% 的热量来自糖（即许多水果、某些蔬菜）或脂肪（即屠宰的脂肪、椰子）。TODO: 在添加脂肪/蛋白质/碳水化合物后，根据这些标准进行单元测试。
- ```SMOKABLE``` 可放入烟熏架。
- ```SMOKED``` 不可放入烟熏架（烟熏产品）。
- ```USE_EAT_VERB``` "你喝了你的 %s。" 或 "你吃了你的 %s。"
- ```USE_ON_NPC``` 可以在 NPC 身上使用（不一定是他们使用）。
- ```ZOOM``` 放大物品可以增加您的地图视野范围。

## Effects (效果)
效果标志。这些对于怪物来说是由硬编码检查的（引入新标志需要进行C++更改），但对于角色来说，它们被认为是“角色标志”，意味着新标志可以单独在JSON中实现 - 参见角色标志（Character Flags）。

### Flags (标志)

- ```DISABLE_FLIGHT``` 受到带有此标志效果影响的怪物永远不会被视为飞行（即使它们具有`FLIES`标志）。
- ```EFFECT_IMPEDING``` 受到带有此标志效果影响的角色无法移动，直到他们从效果中挣脱出来。挣脱需要进行力量检查：`x_in_y( STR * limb lifting score * limb grip score, 6 * get_effect_int( eff_id )`
- ```EFFECT_LIMB_SCORE_MOD``` 具有肢体评分组件的效果，用于Character::get_limb_score。请参阅[EFFECTS_JSON.md](EFFECTS_JSON.md)了解肢体评分修饰符的确切功能，以及[JSON_INFO.md](JSON_INFO.md#limb-scores)了解评分的影响。
- ```GRAB``` 此效果是抓取，生物会试图打破它（请参阅`character_escape.cpp`）
- ````GRAB_FILTER``` 此效果是抓取过滤器效果，将抓取分配给抓取怪物。处理抓取中断时的定向抓取移除，以及可能作为怪物攻击逻辑的过滤器。Bodypart `grabbing_effects`应该有定义。

## Furniture and Terrain (家具和地形)

已知标志列表，用于`terrain.json`和`furniture.json`。

### Flags (标志)

- ```ALARMED``` 如果被砸碎，会触发警报。
- ```ALIGN_WORKBENCH``` (仅用于家具) 提示图块显示，这个家具的雪碧图应该朝向具有工作台质量的任何相邻图块。
- ```ALLOW_FIELD_EFFECT``` 将领域效果应用于`SEALED`地形/家具内的物品。
- ```ALLOW_ON_OPEN_AIR``` 当此家具放置在`t_open_air`或类似的没有地板的“开放空气”地形时，不要发出警告。
- ```AMMOTYPE_RELOAD``` 家具按弹药类型重载，因此玩家可以从多种燃料类型中进行选择。
- ```AUTO_WALL_SYMBOL``` (仅用于地形) 该地形的符号将是一个线条图形（角、T型交叉口、直线等），具体取决于相邻地形。

例如：`-` 和 `|` 都是具有 `CONNECT_WITH_WALL` 标志的地形。 `O` 没有这个标志，而 `X` 和 `Y` 具有 `AUTO_WALL_SYMBOL` 标志。

`X` 地形将被绘制成T型交叉口（连接西、南、东），`Y` 将被绘制成水平线（从西向东，不连接南部）。
    ```
    -X-    -Y-
     |      O
    ```

- ```BARRICADABLE_DOOR_DAMAGED```
- ```BARRICADABLE_DOOR_REINFORCED_DAMAGED```
- ```BARRICADABLE_DOOR_REINFORCED```
- ```BARRICADABLE_DOOR``` 可以设置路障的门。
- ```BARRICADABLE_WINDOW_CURTAINS```
- ```BARRICADABLE_WINDOW``` 可以设置路障的窗户。
- ```BLOCK_WIND``` 该地形将阻挡风的效果。
- ```BURROWABLE``` 挖掘类怪物可以在这个地形下面穿行，而大多数其他怪物不能（例如，graboid可以穿过铁丝网栅栏，而普通僵尸则会被阻挡）。
- ```BUTCHER_EQ``` 屠夫的设备 - 用于对尸体进行完整屠宰。
- ```CAN_SIT``` 玩家可以坐在上面的家具。玩家坐在带有`FLAT_SURF`标签的家具附近时，吃东西时心情会得到提高。
- ```CHIP``` 用于在建筑菜单中判断墙壁是否可以剥落油漆。
- ```COLLAPSES``` 有一个可能崩塌的屋顶。
- ```CONNECT_WITH_WALL```（仅适用于地形）此标志已被JSON条目`connect_group`和`connects_to`取代，但为了向后兼容而保留。
- ```CONSOLE``` 用作计算机。
- ```CONTAINER``` 这个方格上的物品在被玩家搜刮之前是隐藏的。
- ```CURRENT``` 这水是流动的。
- ```DEEP_WATER``` 这是可以淹没玩家的水域。
- ```DESTROY_ITEM``` 落在这里的物品会被摧毁。另请参阅`NOITEM`。
- ```DIFFICULT_Z``` 大多数僵尸无法跟随你穿过这个地形（例如一个梯子）。
- ```DIGGABLE_CAN_DEEPEN``` 可挖掘的位置可以再次挖掘以加深（例如，从浅坑挖到深坑）。
- ```DIGGABLE``` 挖掘怪物，播种怪物，用铲子挖掘等。
- ```DOOR``` 可以打开（用于NPC寻路）。
- ```EASY_DECONSTRUCT``` 玩家可以在无需工具的情况下拆除此物。
- ```ELEVATOR``` 具有此标志的地形将在玩家激活附近的`电梯控制`时将玩家、NPC、怪物和物品上下移动。
- ```FIRE_CONTAINER``` 阻止火势蔓延（如火盆、木炉等）。
- ```FISHABLE``` 你可以在这里尝试捕鱼。
- ```FLAMMABLE_ASH``` 燃烧成灰烬而不是瓦砾。
- ```FLAMMABLE_HARD``` 更难点燃，但仍然可能。
- ```FLAMMABLE``` 可以点燃。
- ```FLAT_SURF``` 带有平坦硬表面的家具或地形（例如桌子，但不包括椅子；树桩等）。
- ```FLAT``` 玩家可以在上面建造和移动家具。
- ```FORAGE_HALLU``` 在通过觅食找到时，可以带有`HIDDEN_HALLU`标志找到这个物品。
- ```FORAGE_POISION``` 在通过觅食找到时，可以带有`HIDDEN_POISON`标志找到这个物品。
- ```FRESH_WATER``` 淡水来源。在带有`SPAWN_WITH_LIQUID`标志的地形上生成（一次）淡水。
- ```GOES_DOWN``` 可以使用 <kbd>></kbd> 下降一层。
- ```GOES_UP``` 可以使用 <kbd><</kbd> 上升一层。
- ```GROWTH_SEEDLING``` 这种植物正处于生长的幼苗阶段。
- ```GROWTH_MATURE``` 这种植物正处于生长的成熟阶段。
- ```GROWTH_HARVEST``` 这种植物已经可以收获了。
- ```HARVESTED``` 标记地形类型的收获版本（例如，收获苹果树会将其变成收获过的树，后来该树再次变成苹果树）。
- ```HIDE_PLACE``` 在这个格子上的生物不能被不在相邻格子上的生物看到。
- ```INDOORS``` 上面有屋顶；挡住雨水、阳光等。
- ```LADDER``` 这个家具能让爬升变得容易。
- ```LIQUIDCONT``` 包含液体的家具，即使有 `SEALED` 标志，也可以在某些检查中访问内容。
- ```LIQUID``` 阻止移动，但不是墙（熔岩、水等）。
- ```MINEABLE``` 可以用镐子/电动破碎锤挖掘。
- ```MOUNTABLE``` 适合带有 `MOUNTED_GUN` 标志的枪支。
- ```MURKY``` 从带有此标志的格子中取出的液体严重受污染（几乎与污水相当）。
- ```NOCOLLIDE``` 此特性根本不会与车辆发生碰撞。
- ```NOITEM``` 不能在此处添加物品，但可以溢出到相邻的格子。另请参阅 `DESTROY_ITEM`。
- ```NO_FLOOR``` 放在这个格子上的东西应该掉落。
- ```NO_PICKUP_ON_EXAMINE``` 即使这里有物品，检查这个格子（默认为 <kbd>e</kbd> 键）也不会打开拾取菜单。
- ```NO_SIGHT``` 在这个格子上的生物视力降低到一个格子。
- ```NO_SCENT``` 这个格子不能有气味值，从而阻止气味通过这个格子扩散。
- ```NO_SHOOT``` 带有此标志的地形不会受到远程攻击的损坏，远程攻击也不会穿过它。
- ```NO_SPOIL``` 放在这个格子里的物品不会变质。
- ```OPENCLOSE_INSIDE``` 如果它是一扇门（带有 'open' 或 'close' 字段），只有在室内时才能打开或关闭。
- ```PAINFUL``` 可能会引起轻微的疼痛。
- ```PERMEABLE``` 对气体具有渗透性。
- ```PICKABLE``` 这个地形/家具可以用撬锁器撬锁。
- ```PIT_FILLABLE``` 这个地形可以像浅坑一样用泥土填满。
- ```PLACE_ITEM``` 适用于 `place_item()` 函数将物品放置的有效地形。
- ```PLANT``` 一种会生长并结果的 "家具"。
- ```PLANTABLE``` 这个地形或家具可以种植种子。
- ```PLOWABLE``` 地形可以被犁过。
- ```RAMP_END``` 用于斜坡机制正常工作的技术性标志。
- ```RAMP``` 可以用来上升一个 z-层。
- ```REDUCE_SCENT``` 减少气味扩散（不是区域内的总气味量）；仅在可破坏时有效。
- ```ROAD``` 平坦且坚硬，足以供车辆或溜冰鞋（如轮滑鞋）行驶。
- ```ROUGH``` 可能会刮伤玩家的脚。
- ```RUG``` 启用 `Remove Carpet`（移除地毯）建筑条目。
- ```SALT_WATER``` 盐水来源（适用于带有检查动作 "water_source" 的地形）。
- ```SEALED``` 无法使用 <kbd>e</kbd> 取回物品；必须先砸开它们。
- ```SEEN_FROM_ABOVE``` 从较高层次看到（前提是上面的格子没有地板）
- ```SHALLOW_WATER``` 深度不足以让玩家浸没的水。
- ```SHARP``` 可能对穿过它的玩家/怪物造成轻微伤害。
- ```SHORT``` 功能太短，无法与车辆突出物碰撞（镜子、刀片）。
- ```SIGN``` 在检查时显示书面信息。
- ```SMALL_PASSAGE``` 这个地形或家具对于大型或巨型生物来说太小，无法通过。
- ```SPAWN_WITH_LIQUID``` 这个地形会在自己的生成位置放置液体（一次性）。液体类型由其他标志定义。例如，通过 `FRESH_WATER` 标志生成淡水。
- ```SUN_ROOF_ABOVE``` 这个家具（目前不支持地形）上方有一个 "假屋顶"，可以挡住阳光。这是针对 #44421 的特殊解决方案，稍后将被移除。
- ```SUPPORTS_ROOF``` 用作屋顶建筑的边界。(用作屋顶建筑的边界。)
- ```SUPPRESS_SMOKE``` 防止火灾产生的烟雾；用于通风的木炉等。(防止火灾产生的烟雾；用于通风的木炉等。)
- ```SWIMMABLE``` 玩家和怪物可以在其中游泳。(玩家和怪物可以在其中游泳。)
- ```THIN_OBSTACLE``` ```SPEAR``` 攻击可以穿过这个障碍物，击中另一侧的东西。(SPEAR攻击可以穿过这个障碍物，击中另一侧的东西。)
- ```TINY``` 特征太短，无法与车辆底盘发生碰撞。车辆在无损伤的情况下可以越过这些障碍物，除非车轮碰到它们。(特征太短，无法与车辆底盘发生碰撞。车辆在无损伤的情况下可以越过这些障碍物，除非车轮碰到它们。)
- ```TOILET_WATER``` 从带有此标志的瓷砖中取出的液体相当脏，可能会使您中毒。(从带有此标志的瓷砖中取出的液体相当脏，可能会使您中毒。)
- ```TRANSPARENT``` 玩家和怪物可以看穿/看过它。还设置了ter_t.transparent。(玩家和怪物可以看穿/看过它。还设置了ter_t.transparent。)
- ```TRANSPARENT_FLOOR``` 此地形允许光线照射到下面的z层。(此地形允许光线照射到下面的z层。)
- ```UNSTABLE``` 在这里行走会对角色产生攀岩效果。(在这里行走会对角色产生攀岩效果。)
- ```USABLE_FIRE``` 此地形或家具可作为制作时附近的火源。(此地形或家具可作为制作时附近的火源。)
- ```WALL``` 此地形是直立的障碍物。用于真菌转化，并隐含`CONNECT_WITH_WALL`。(此地形是直立的障碍物。用于真菌转化，并隐含`CONNECT_WITH_WALL`。)
- ```WINDOW``` 此地形是窗户，但可能是关闭的、破碎的或被遮盖的。由tiles代码用来使家具精灵远离窗户。(此地形是窗户，但可能是关闭的、破碎的或被遮盖的。由tiles代码用来使家具精灵远离窗户。)
- ```WIRED_WALL``` 此地形是内部有电线的墙。允许`Reveal wall wirings`建筑。(此地形是内部有电线的墙。允许`Reveal wall wirings`建筑。)
- ```WORKOUT_LEGS``` 此家具用于锻炼您的双腿。对于`is_limb_broken()`之类的检查非常有用。(此家具用于锻炼您的双腿。对于`is_limb_broken()`之类的检查非常有用。)
- ```WORKOUT_ARMS``` 此家具用于锻炼您的双臂。对于`is_limb_broken()`之类的检查非常有用。(此家具用于锻炼您的双臂。对于`is_limb_broken()`之类的检查非常有用。)

### Fungal Conversions Only (真菌转化专用)

- ```FLOWER``` This furniture is a flower. (这个家具是一朵花。)
- ```FUNGUS``` Fungal covered. (覆盖着真菌。)
- ```ORGANIC``` This furniture is partly organic. (这个家具部分是有机的。)
- ```SHRUB``` This terrain is a shrub. (这个地形是一片灌木丛。)
- ```TREE``` This terrain is a tree. (这个地形是一棵树。)
- ```YOUNG``` This terrain is a young tree. (这个地形是一棵幼树。)

### Furniture Only (仅家具)

- ```ACTIVE_GENERATOR``` This furniture is considered to be an active power source for the purpose of certain monster special attacks (e.g. milspec searchlight's SEARCHLIGHT) (这个家具被认为是某些怪物特殊攻击（如：军用搜索灯的SEARCHLIGHT）的活动电源。)
- ```AUTODOC``` This furniture can be an Autodoc console, it also needs the `autodoc` examine action. (这个家具可以是一个Autodoc控制台，它还需要`autodoc`检查操作。)
- ```AUTODOC_COUCH``` This furniture can be a couch for a furniture with the `autodoc` examine action. (这个家具可以是一个有`autodoc`检查操作的家具的沙发。)
- ```BLOCKSDOOR``` This will boost map terrain's resistance to bashing if `str_*_blocked` is set (see `map_bash_info`). (如果设置了`str_*_blocked`（请参阅`map_bash_info`），这将增加地图地形对破门的抵抗。)
- ```BRIDGE``` If this furniture is placed over water tiles, it prevents player from becoming wet. (如果这个家具放置在水上方块上，可以防止玩家变湿。)


## Generic(通用)

这些标志可以通过JSON物品定义应用于大多数物品。不要与工具>标志下列出的标志集混淆，这些标志不能通过JSON分配。

### Flags(标志)

- ```BANK_NOTE_SHAPED``` ... 此物品可放入钱包的折叠袖口，如钞票。
- ```BANK_NOTE_STRAP_SHAPED``` ... 此物品可放入专为钱带设计的口袋（如现金收银机）。
- ```BIONIC_NPC_USABLE``` ... NPC可以使用的安全CBMs，无需大量修改NPC就可以使用切换CBMs。
- ```BIONIC_TOGGLED``` ... 这种生物机械在激活时才有功能，而不是每次轮到它时都产生效果。
- ```BIONIC_POWER_SOURCE``` ... 此生物机械是生物机械能源。
- ```BIONIC_SHOCKPROOF``` ... 这种生物机械不会被电击击倒。
- ```BIONIC_FAULTY``` ... 此生物机械是一个有缺陷的生物机械。
- ```BIONIC_WEAPON``` ... 这种生物机械是一种武器生物机械，激活它将在用户手中创建（或销毁）其假物品。阻止所有其他激活效果。
- ```BIONIC_ARMOR_INTERFACE``` ... 这种生物机械可以为动力装甲提供能源。
- ```BIONIC_SLEEP_FRIENDLY``` ... 如果玩家在此生物机械激活时尝试睡觉，它不会发出警告。
- ```COIN_SHAPED``` ... 此物品呈硬币形状，可放入钱包的硬币袋。
- ```CREDIT_CARD_SHAPED``` ... 这个物品的形状像信用卡，可以放入钱包和类似的卡槽中。
- ```CONDUCTIVE``` ... 即使物品所制成的材料不导电，物品也被视为导电。与`NONCONDUCTIVE`相反。
- ```CORPSE``` ... 用于在地图生成期间生成各种人类尸体的标志。
- ```CRUTCHES``` ... 如果角色的腿受伤，这个物品可以帮助角色不摔倒。
- ```DANGEROUS``` ... NPC不会接受这个物品。爆炸iuse actor暗示此标志。暗示`NPC_THROW_NOW`。
- ```DETERGENT``` ... 这个物品可以作为洗衣机中的洗涤剂。
- ```DURABLE_MELEE``` ... 物品用来击打东西，效果很好，所以与同材料制成的其他武器相比，它被认为更坚固。
- ```ELECTRONIC``` ... 该物品包含敏感的电子器件，可能会被附近的EMP炸弹破坏。
- ```FAKE_MILL``` ... 物品是假物品，用于表示由@ref Item::process_fake_mill处理的部分磨制产品，其移除条件在此处设置。
- ```FAKE_SMOKE``` ... 该物品是生成烟雾的假物品，可由 @ref item::process_fake_smoke 识别，其移除条件在此处设置。
- ```FIREWOOD``` ... 这个物品可以作为柴火。具有此标志的物品被分类到 "战利品：木材" 区域。
- ```FRAGILE_MELEE``` ... 由于制作质量差，易碎物品在用作武器时容易破碎，并在破损时分解为零件。
- ```GAS_DISCOUNT``` ... 自动加油站的折扣卡。
- ```ITEM_BROKEN``` ... 物品已损坏，无法再次激活。
- ```IS_PET_ARMOR``` ... 是宠物怪物的盔甲，而不是人的盔甲。
- ```LEAK_ALWAYS``` ... 漏水（可以与`RADIOACTIVE`结合使用）。
- ```LEAK_DAM``` ... 受损时漏水（可以与`RADIOACTIVE`结合使用）。
- ```MISSION_ITEM``` ... 该物品的生成几率不受世界物品生成缩放因子的影响。
- ```MC_MOBILE```, ```MC_HAS_DATA``` 存储卡相关标志，请参阅einktabletpc和相机相关功能
- ```MOP``` ... 该物品可用于清理像血液或水等溢出的液体。
- ```NEEDS_UNFOLD``` ... 持有时有额外的时间惩罚。对于近战武器和枪支，这会被相关技能抵消。与`SLOW_WIELD`堆叠。
- ```NO_PACKED``` ... 该物品未受保护，无法防止污染，不保持无菌。仅适用于CBMs。
- ```NO_REPAIR``` ... 即使有适当的工具，也无法修复此物品。
- ```NO_SALVAGE``` ... 无法通过回收过程拆解物品。当某些物品不应被拆解时（如皮革补丁等基本组件），最好使用这个标志。
- ```NO_STERILE``` ... 该物品不是无菌的。仅适用于CBMs。
- ```NPC_ACTIVATE``` ... NPC可以激活此物品作为一种替代攻击。目前是在激活后立即扔出。`BOMB`暗示。
- ```NPC_ALT_ATTACK``` ... 不应直接设置。由`NPC_ACTIVATE`和`NPC_THROWN`暗示。
- ```NPC_THROWN``` ... NPC将会扔出这个物品（不先激活）作为替代攻击。
- ```NPC_THROW_NOW``` ... NPC将尝试把这个物品扔掉，最好扔向敌人。暗示`TRADER_AVOID`和`NPC_THROWN`。
- ```OLD_CURRENCY``` ... 末日之前的纸币和硬币，曾经是合法货币，在某些自动系统中仍可能被接受。
- ```PERFECT_LOCKPICK``` ... 该物品是完美的撬锁器。撬锁仅需5秒钟，从不失败，但使用它只能获得少量的撬锁经验。物品应具有至少1级的`LOCKPICK`品质。
- ```PRESERVE_SPAWN_OMT``` ... 此物品将存储其生成的OMT，存储在`spawn_location_omt`物品变量中。
- ```PSEUDO``` ... 用于在内部标记在制作库存中引用但实际上不是物品的物品。它们可以用作工具，但不能用作组件。暗示`TRADER_AVOID`。
- ```RADIOACTIVE``` ... 是放射性的（可以与`LEAK_*`一起使用）。
- ```RAIN_PROTECT``` ... 握持时可以防止阳光和雨水。
- ```REDUCED_BASHING``` ... 枪支改装标志；将物品的破坏伤害减少50%。
- ```REDUCED_WEIGHT``` ... 枪支改装标志；将物品的基本重量减少25%。
- ```REQUIRES_TINDER``` ... 此物品在尝试点燃的瓦片上需要火种。
- ```SINGLE_USE``` ... 使用后此物品将被删除。按次数计数的物品在耗尽次数后不需要此标志，因为它们会被删除。
- ```SLEEP_AID``` ... 此物品有助于睡眠。
- ```SLEEP_AID_CONTAINER``` ... 此物品允许内部的助眠物品在睡眠时起作用（例如，这是一个枕套）。
- ```SLEEP_IGNORE``` ... 此物品在睡前警告中不显示。
- ```SLOW_WIELD``` ... 拿起时有额外的时间惩罚。对于近战武器和枪械，这会被相关技能抵消。与`NEEDS_UNFOLD`堆叠。
- ```TACK``` ... 物品可用作坐骑的马具。
- ```TARDIS``` ... 带有此标志的容器物品将绕过口袋数据的内部检查，因此内部可能比外部大，并且可以容纳其他无法适应其尺寸的物品。
- ```TIE_UP``` ... 物品可用于捆绑生物。
- ```TINDER``` ... 此物品可用作点燃带有`REQUIRES_TINDER`标志的火源的火种。
- ```TRADER_AVOID``` ... NPC不会以此物品开始。用于活动物品（例如手电筒（开启）），危险物品（例如活动炸弹），假物品或不寻常物品（例如独特的任务物品）。
- ```TRADER_KEEP``` ... NPC在任何情况下都不会交易此物品。
- ```TRADER_KEEP_EQUIPPED``` ... NPC只有在当前没有穿戴或装备此物品时才会交易它。
- ```UNBREAKABLE``` ... 无论是直接损坏、作为护甲穿戴时损坏，还是用作近战武器时损坏，此物品都无法损坏。
- ```UNBREAKABLE_MELEE``` ... 作为近战武器使用时永远不会损坏。
- ```UNRECOVERABLE``` ... 无法从拆卸中恢复。
- ```WATER_BREAK``` ... 物品在水中破损。
- ```WATER_BREAK_ACTIVE``` ... 物品可以被水打湿，并且在水中活动时会破损。
- ```WATER_DISSOLVE``` ... 物品在水中溶解。
- ```ZERO_WEIGHT``` 通常，零重量的物品会产生错误。使用此标志表示零重量是故意的，并抑制错误。


## Guns (枪械)

- ```BACKBLAST``` 在开火的人后面造成小型爆炸。目前尚未实施？
- ```BIPOD``` 操作奖励仅适用于`MOUNTABLE`地图/车辆瓦片。不包括装备时间惩罚（见`SLOW_WIELD`）。
- ```CHARGE``` 必须充能才能射击。更高的充能会造成更多伤害。
- ```COLLAPSIBLE_STOCK``` 按照基础枪械大小（不包括任何改装部件）成比例减少武器体积。不包括装备时间惩罚（见`NEEDS_UNFOLD`）。
- ```CONSUMABLE``` 使枪支部件在使用特定类型弹药时有一定几率损坏，并由可定义的字段'consume_chance'和'consume_divisor'设置。
- ```DISABLE_SIGHTS``` 阻止使用基础武器瞄准装置。
- ```FIRE_TWOHAND``` 只有当玩家双手空闲时，枪支才能开火。
- ```IRREMOVABLE``` 使得枪支改装无法移除。
- ```MECH_BAT``` 这是一种用于为军用机甲提供动力的特殊电池。
- ```MOUNTED_GUN``` 枪支只能在带有`MOUNTABLE`标志的地形/家具上使用。
- ```NEVER_JAMS``` 从不故障。
- ```NO_TURRET``` 阻止为此枪支生成车辆炮塔原型。
- ```NO_UNLOAD``` 无法卸载。
- ```PRIMITIVE_RANGED_WEAPON``` 允许使用非枪械工具进行修理（但不能加固）。
- ```PUMP_ACTION``` 枪支的泵动作上有导轨，允许在下挂凹槽上安装带有`PUMP_RAIL_COMPATIBLE flag`的改装件。
- ```PUMP_RAIL_COMPATIBLE``` 改装件可以安装在带有泵动作导轨的枪支的下挂凹槽上。
- ```RELOAD_AND_SHOOT``` 开火会自动重新装载并射击。
- ```RELOAD_EJECT``` 在重新装载时而非开火时从枪支中弹出弹壳。
- ```RELOAD_ONE``` 一次只能装载一发子弹。
- ```STR_DRAW``` 除非角色的力量至少是所需最小力量的两倍，否则此武器的射程会减少。
- ```STR_RELOAD``` 重新装载速度受力量影响。
- ```UNDERWATER_GUN``` 枪支适用于水下使用，在水下表现优异，在水外表现不佳。
- ```WATERPROOF_GUN``` 枪支不生锈，可在水下使用。
- ```NON_FOULING``` 枪支不会变脏或积黑火药。

### Firing modes (射击模式)

- ```MELEE``` 使用枪支或辅助枪支模组的属性进行近战攻击。
- ```NPC_AVOID``` NPC 不会尝试使用此模式。
- ```SIMULTANEOUS``` 所有弹丸一起发射（而不是顺序发射），并且只在最后一次（结束时）添加后坐力。

## Magazines (弹匣)

- ```MAG_BULKY``` 可以放在合适的超大型弹药袋中（适用于体积大或形状笨拙的弹匣）。
- ```MAG_COMPACT``` 可以放在合适的弹药袋中（适用于紧凑型弹匣）。
- ```MAG_DESTROY``` 当最后一发子弹被消耗时，弹匣被销毁（适用于弹药带）。优先级高于 `MAG_EJECT`。
- ```MAG_EJECT``` 当最后一发子弹被消耗时，弹匣从枪支/工具中弹出。
- ```SPEEDLOADER``` 像弹匣一样使用，但是它将子弹转移到被清空的目标枪支或弹匣中，而不是插入其中。
- ```SPEEDLOADER_CLIP``` 像一个 ```SPEEDLOADER``` 一样使用，但是目标枪支或弹匣不必清空就可以进行转移。

## Mapgen (地图生成)

请参阅 [Mapgen flags (地图生成标志)](MAPGEN.md#mapgen-flags)。

## Map Specials (地图特殊)

- ```mx_bandits_block``` ... 由树干、扎手、钉板制成的强盗路障。
- ```mx_burned_ground``` ... 火灾肆虐过的地方。
- ```mx_point_burned_ground``` ... 火灾肆虐过的地方。（部分应用）
- ```mx_casings``` ... 几种类型的弹壳（孤立的，成群的，整个过图瓦片）。
- ```mx_city_trap``` ... 带有扬声器吸引僵尸的旋转刀片陷阱。
- ```mx_clay_deposit``` ... 一个小的地表粘土沉积。
- ```mx_clearcut``` ... 所有树变成树桩。
- ```mx_collegekids``` ... 尸体和物品。
- ```mx_corpses``` ... 最多 5 个尸体和日常战利品。
- ```mx_crater``` ... 使用炸弹形成的陨石坑。
- ```mx_drugdeal``` ... 尸体和一些毒品。
- ```mx_dead_vegetation``` ... 杀死所有植物。（酸雨等灾后）
- ```mx_exocrash_1``` ... 由坠毁的太空旅行者舱室形成的玻璃化沙子区域。由僵尸机器人居住。
- ```mx_exocrash_2``` ... 由坠毁的太空旅行者舱室形成的玻璃化沙子区域。由僵尸机器人居住。
- ```mx_point_dead_vegetation``` ... 杀死所有植物。（酸雨等灾后）（部分应用）
- ```mx_fallen_shed``` ... 一个倒塌的棚子。
- ```mx_grove``` ... 所有树木和灌木成为一种树木。
- ```mx_grass``` ... 一个长草的草地。
- ```mx_grass_2``` ... 一个长草的草地。
- ```mx_grave``` ... 开阔田野上的一个坟墓，有尸体和一些日常战利品。
- ```mx_helicopter``` ... 金属残骸和一些物品。
- ```mx_house_spider``` ... 一个有黄蜂、皮肤虫和墙壁变成纸的房子。
- ```mx_house_wasp``` ... 一个有蜘蛛、网、蛋和一些稀有战利品的房子。
- ```mx_jabberwock``` ... 有*机会*出现一个jabberwock。
- ```mx_looters``` ... 最多 5 个强盗在建筑物内生成。
- ```mx_marloss_pilgrimage``` 敬拜真菌的教派。
- ```mx_mass_grave``` ... 大量墓地、僵尸和日常战利品。
- ```mx_mayhem``` ... 几种类型的道路混乱（交火、撞车等）。
- ```mx_military``` ... 尸体和一些军事物品。
- ```mx_minefield``` ... 在桥梁入口处设有军事路障，地雷散布在其前方。
- ```mx_nest_dermatik``` ... 皮肤虫巢穴。
- ```mx_nest_wasp``` ... 黄蜂巢穴。
- ```mx_null``` ... 完全没有特殊。
- ```mx_pond``` ... 一个小池塘。
- ```mx_pond_forest``` ... 一个小盆地.
- ```mx_pond_forest_2``` ... 一个小盆地.
- ```mx_pond_swamp``` ... 一个小沼泽地.
- ```mx_pond_swamp_2``` ... 一个小沼泽地.
- ```mx_portal_in``` ... 另一个通往非空间的传送门.
- ```mx_portal``` ... 通往非空间的传送门，周围环境有几种类型.
- ```mx_prison_bus``` ... 载有僵尸警察和僵尸囚犯的监狱巴士.
- ```mx_prison_van``` ... 监狱运送车附近暴力逃脱的痕迹.
- ```mx_reed``` ... 额外的水生植物.
- ```mx_roadblock``` ... 带有炮塔和一些汽车的路障家具.
- ```mx_roadworks``` ... 部分关闭的损坏道路，可能有工作设备和实用车辆.
- ```mx_science``` ... 尸体和一些科学家物品.
- ```mx_shia``` ... 如果启用疯狂的大灾变，有*机会*遇到夏侯.（？？？）
- ```mx_shrubbery``` ... 所有树木和灌木变成一种灌木物种.
- ```mx_spider``` ... 一张大蜘蛛网，附带蜘蛛和蛋.
- ```mx_supplydrop``` ... 装有一些军事物品的板条箱.
- ```mx_Trapdoor_spider_den``` ... 一个无处不在的蜘蛛产卵地.
- ```mx_trees``` ... 一个带有新鲜水洼的小森林片段.
- ```mx_trees_2``` ... 一个带有新鲜水洼的小森林片段.



## Material Phases（物质形态）

- ```GAS``` 气体
- ```LIQUID``` 液体
- ```NULL``` 空
- ```PLASMA``` 等离子体
- ```SOLID``` 固体


## Melee (近战)

### Flags (标志)

- ```ALLOWS_BODY_BLOCK``` 允许在挥舞带有此标志的物品时触发身体阻挡（手臂和腿部阻挡）。用于如小刀、手枪等不影响用身体阻挡的小物品。只有当前的武术允许身体阻挡时才起作用。
- ```ALWAYS_TWOHAND``` 物品总是用两手持有。如果没有这个标志，物品的体积和重量将用于计算这个属性。
- ```BIONIC_WEAPON``` 不能正常持有此物品。必须将其附加到生物电子设备上，并通过激活生物电子设备进行装备。
- ```DIAMOND``` 钻石涂层使切割和穿刺伤害增加30%。
- ```MESSY``` 在击溃时产生更多混乱。
- ```NO_CVD``` 物品永远不能与CVD机器一起使用。
- ```NO_RELOAD``` 物品永远不能重新装填（即使有有效的弹药类型）。
- ```NO_UNWIELD``` 不能停止使用此物品。从生物电子设备挥舞的假武器和工具会自动添加此标志。
- ```NONCONDUCTIVE``` 由于某种特性（手柄或整个物品的非导电材料），物品不导电，因此可以安全地用于对抗电力主题的怪物，而不会有电击反弹的风险。与`CONDUCTIVE`相反。
- ```POLEARM``` 物品在近距离内笨拙，对相邻目标造成的伤害为正常伤害的70%。应与`REACH_ATTACK`配对。像长矛这样的简单远程穿刺武器不应有此标志。
- ```REACH_ATTACK``` 允许在2格距离内执行近战攻击。
- ```REACH3``` 允许在3格距离内执行近战攻击。
- ```SHEATH_AXE``` 物品可以放在斧头鞘中。
- ```SHEATH_GOLF``` 物品可以放在高尔夫球袋中。
- ```SHEATH_KNIFE``` 物品可以放在刀鞘中，适用于体积不大于2的小/中型刀具。
- ```SHEATH_SWORD``` 物品可以放在剑鞘中。
- ```SPEAR``` 当进行远程攻击时，插入的`THIN_OBSTACLE`地形不是障碍。应与`REACH_ATTACK`配对。
- ```UNARMED_WEAPON``` 当挥舞此物品时，战斗仍然算作徒手格斗。
- ```WHIP``` 有机会解除对手的武器。


## Monster Groups (怪物组)

条件标志限制了怪物的生成时间。

### Seasons (季节)

多个季节条件将组合在一起，使得任何这些条件成为有效的一年中的生成时间。

- ```AUTUMN```（秋天）
- ```SPRING```（春天）
- ```SUMMER```（夏天）
- ```WINTER```（冬天）

### Time of day (一天中的时间)

多个一天中的时间条件将组合在一起，使得任何这些条件成为有效的一天中的生成时间。

- ```DAWN```（黎明）
- ```DAY```（白天）
- ```DUSK```（黄昏）
- ```NIGHT```（夜晚）


## Monsters (怪物)

用于描述怪物并定义其属性和能力的标记。

### Anger, Fear and Placation Triggers (愤怒、恐惧和抚慰触发器“大概是仇恨机制”)

- ```FIRE``` 触发条件是3格内有火源，效果强度等于 5 * 火源的场强度。(火源范围内触发，效果与火源强度成正比)
- ```FRIEND_ATTACKED``` 触发条件是该怪物看到友好阵营的另一个怪物被攻击；效果强度 = 15。 **需要** 被攻击的怪物上也有一个触发器实例（触发器类型不必匹配，只需要触发器本身）！总是触发角色敌意，详见 [MONSTERS.md](MONSTERS.md#aggrocharacter)。(当友方受到攻击时触发，增加敌意)
- ```FRIEND_DIED``` 触发条件是该怪物看到友好阵营的另一个怪物死亡；效果强度 = 15。 **需要** 被攻击的怪物上也有一个触发器实例（触发器类型不必匹配，只需要触发器本身）！总是触发角色敌意。(当友方死亡时触发，增加敌意)
- ```HURT``` 当怪物受伤时触发，效果强度等于 1 + (伤害 / 3 )。 总是触发角色敌意。(怪物受伤时触发，增加敌意)
- ```NULL``` 仅供开发者使用？(开发者专用，然而好像没什么用)
- ```PLAYER_CLOSE``` 当潜在敌人在5格范围内时触发 - 仅限愤怒/恐惧触发器！ 触发角色敌意的概率为 `<anger>%`。(敌人靠近时触发，根据愤怒度触发敌意)
- ```PLAYER_WEAK``` Strength = `10 - (percent of hp remaining / 10)` 如果一个非友好生物的剩余血量低于70%。触发角色仇恨`<anger>%`的时间。（当敌对生物血量降低时，角色力量减弱，怪物对角色的仇恨增加。）
- ```PLAYER_NEAR_BABY``` 如果**玩家**靠近离它的幼崽（由其繁殖数据中的 baby_monster 字段定义）3个方格以内，怪物的侵略性增加8，士气增加4 - 仅限愤怒触发器！始终触发角色仇恨。（玩家靠近怪物的幼崽时，怪物变得更具攻击性和士气。）
- ```SOUND``` 并非实际触发器，侵略性超过10且士气大于0的怪物会向声音来源漫游，士气低于0的怪物会离声音来源漫游1回合（如果具有`GOODHEARING`标志，则为6）。（怪物会根据声音来源和自身状态选择是靠近还是远离声音。）
- ```STALK``` 如果侵略性> 5，每回合有20%（怪物在侵略性较高时，可能会概率性地跟踪玩家。）
- ```HOSTILE_SEEN``` 对于每个可见的潜在敌人，侵略性/士气随机增加或减少0-2，最多可达20侵略性 - 仅限愤怒/恐惧触发器！触发角色仇恨`<anger/2>%`的时间。（怪物根据周围可见敌人的数量调整其侵略性和士气。）
- ```MATING_SEASON``` 如果潜在敌人在5个方格范围内，且季节与怪物的繁殖季节（由其繁殖数据中的 baby_flags 字段定义）相同，侵略性增加3 - 仅限愤怒触发器！触发角色仇恨`<anger>%`的时间。（怪物在繁殖季节时，对附近的敌人会表现出更高的侵略性。）

### Categories (类别)

- ```CLASSIC``` 只有我们在经典僵尸电影中期望出现的怪物（大概是只有僵尸）。
- ```NULL``` 无类别（没有特定类别）。
- ```WILDLIFE``` 自然动物（动物）。

### Death Functions (死亡功能)

可以使用多个死亡功能。并非所有组合都有意义（可以组合多种死亡效果，但并非所有组合都合适）。

- ```ACID``` 酸液取代身体（怪物死亡后留下酸液而非尸体）。与 `ACID_BLOOD flag` 不同。在大多数情况下，你需要两者都具备。
- ```AMIGARA``` 如果是最后一个，则删除催眠（当最后一个带有此功能的怪物死亡时，玩家身上的催眠效果将消失）。
- ```BLOBSPLIT``` 产生更多的斑点（怪物死亡后分裂为多个小怪物）。
- ```BOOMER``` 呕吐物中爆炸（怪物死亡时释放大量呕吐物）。
- ```BROKEN``` 生成一个损坏的机器人物品；其 ID 的计算方式如下：从怪物 ID 中删除前缀 "mon_"，然后添加前缀 "broken_"。示例：mon_eyebot -> broken_eyebot（机器人怪物死亡后留下损坏的机器人部件）。
- ```DISAPPEAR``` 幻觉消失（幻觉类怪物死亡后直接消失，不留下任何痕迹）。
- ```DISINTEGRATE``` 瓦解（怪物死亡后直接瓦解，不留下任何痕迹）。
- ```EXPLODE``` 造成伤害的爆炸（怪物死亡时产生有害的爆炸）。
- ```FIREBALL``` 10%的几率以火球爆炸（怪物死亡时有10%的几率产生火球爆炸）。
- ```FLAME_EXPLOSION``` 保证会爆炸并引发火灾（怪物死亡时一定会爆炸并引发火灾）。
- ```FUNGUS``` 孢子中爆炸（怪物死亡时释放大量孢子）。
- ```GAMEOVER``` 游戏结束，伙计！游戏结束！防御模式（特殊怪物死亡时导致游戏立即结束）。
- ```GUILT``` 士气惩罚（怪物死亡时给玩家带来士气上的惩罚。还有一个具有类似效果的标志）。
- ```KILL_BREATHERS``` 所有呼吸器死亡（怪物死亡时，其他带有呼吸器功能的怪物也会死亡）。
- ```KILL_VINES``` 杀死附近的所有藤蔓（怪物死亡时，附近的所有藤蔓也会被摧毁）。
- ```MELT``` 正常死亡，但融化（怪物死亡后融化，留下一堆熔化的物质）。
- ```NORMAL``` 掉落一个尸体，留下碎肉（怪物死亡后留下尸体和散落的肢体碎片）。
- ```RATKING``` 治愈所有附近的老鼠（怪物死亡时，附近的所有老鼠会被治愈）。
- ```SHATTER``` 粉碎（怪物死亡后碎成无数小碎片）。
- ```SMOKEBURST``` 爆炸产生浓烟（怪物死亡时产生大量烟雾）。
- ```SPLATTER``` 产生大量液滴（怪物死亡后留下许多散落的液滴）。

### Flags

其他怪物标志。

- ```ACIDPROOF``` 对酸免疫。(免疫酸性)
- ```ACIDTRAIL``` 留下一道酸迹。(留下酸迹)
- ```ACID_BLOOD``` 怪物流出酸性血液。死后并不会自动溶解成一滩酸液。(酸性血液)
- ```ALL_SEEING``` 能在同一Z层内看到其视野内的所有生物（白天/夜间视野最高值）。(全视)
- ```ALWAYS_SEES_YOU``` 这个怪物总是知道角色的位置。(始终看见角色)
- ```ALWAYS_VISIBLE``` 无论视线或光线如何，这个怪物总是能被看到。(始终可见)
- ```ANIMAL``` 对于 `Animal Empathy` 特性而言，属于_动物_。(动物)
- ```AQUATIC``` 只能在水中活动。(水生)
- ```ARTHROPOD_BLOOD``` 使怪物流出血淋淋的体液。(节肢动物血液)
- ```ATTACKMON``` 在穿过其他怪物空间时，不论阵营关系，都会攻击其他怪物。(攻击怪物)
- ```ATTACK_UPPER``` 即使这个怪物体型小，也可以攻击上肢。(攻击上肢)
- ```ATTACK_LOWER``` 即使这个怪物体型大，也无法攻击上肢。(攻击下肢)
- ```BADVENOM``` 攻击可能导致玩家**严重**中毒。(剧毒)
- ```BASHES``` 砸门。(砸门)
- ```BILE_BLOOD``` 使怪物流出胆汁。(胆汁血液)
- ```BORES``` 穿越几乎所有东西（15倍破拆倍率：黑暗巨龙的破拆技能12->180)。(钻孔)
- ```CAN_DIG``` 在任何可挖掘地形上挖掘，与 ```DIGS``` 相同，但在非挖掘地形上正常行走。(可挖掘)
- ```CAN_OPEN_DOORS``` 能打开其路径上的门。(可开门)
- ```CAMOUFLAGE``` 即使在光天化日之下，也能在（当前感知，+基础感知（如果角色具有发现熟练度））格子以外保持隐形。怪物在 `vision_day` 和 `vision_night` 范围内的较小值处看到它。(伪装)
- ```CANPLAY``` 如果这个生物是宠物，它可以和你一起玩耍。
- ```CLIMBS``` 能快速攀爬栅栏或类似障碍物。(攀爬)
- ```COLDPROOF``` 对冷伤害免疫。(抗寒)
- ```CONVERSATION``` 该怪物可以进行对话。还需要设置 chat_topics。(会话)
- ```DEADLY_VIRUS``` 该怪物可以传播僵尸病毒效果。(致命病毒)
- ```DESTROYS``` 砸墙等更多（2.5倍破拆倍率，基数是动物的最大近战破拆）(摧毁)
- ```DIGS``` 在地面上挖掘。不会穿越非挖掘地形如道路。(挖掘)
- ```DOGFOOD``` 可以驯服狗狗，并且用狗哨命令攻击。(狗粮)
- ```DRIPS_GASOLINE``` 移动时偶尔滴落汽油。(滴汽油)
- ```DRIPS_NAPALM``` 移动时偶尔滴落凝固汽油。(滴凝固汽油)
- ```DROPS_AMMO``` 该怪物掉落弹药。对使用伪装弹药的怪物不应设置此项。(掉落弹药)
- ```ELECTRIC``` 对未武装攻击者造成电击。(电击)
- ```ELECTRIC_FIELD``` 这个怪物被一个电场包围，电场会点燃附近的易燃液体。它还会对其他带有这个标志的怪物造成伤害，伴随着 "The %s's disabled electrical field reverses polarity!（%s的失效电场极性反转！）" 的信息。（当怪物带有此标志时，会显示这条信息并对其他怪物造成伤害）。
- ```ELECTRONIC``` 例如机器人；受到EMP爆炸等影响。(电子)
- ```FILTHY``` 它掉落的任何衣物都会很脏。有洁癖特征的人不能穿戴带有此标志的衣物，不能从脏组件中制作任何东西，穿脏衣服可能会在近战中感染。(肮脏)
- ```FIREPROOF``` 对火免疫。(防火)
- ```FIREY``` 燃烧物品且对火免疫。(火焰)
- ```FLAMMABLE``` 怪物易燃，燃烧，并将火传播到附近物体。(易燃)
- ```FLIES``` 能飞行（飞过水等）(飞行)
- ```GOODHEARING``` 比大多数怪物对声音更敏感。(超群听力)
- ```GRABS``` 它的攻击可能会抓住你！(抓取)
- ```GROUP_BASH``` 在破拆时得到周围怪物的帮助，将它们的力量加在一起。(集体破拆)
- ```GROUP_MORALE``` 在友方附近更勇敢。(集体士气)
- ```HARDTOSHOOT``` 对于远程攻击，它的体型比实际小一号，但不小于 `TINY` (微小)标志。(难以射击)
- ```HEARS``` 它可以听到你，反之则对你的声音没有反应。
- ```HIT_AND_RUN``` 在进行一次近战攻击后逃跑几个回合。[你给路哒哟！！！]
- ```INSECTICIDEPROOF``` 即使材质是由虫肉("iflesh")，也对杀虫剂免疫。
- ```HUMAN``` 只要还活着，它就是一个人。[有的人活着，他就还活着]
- ```CONSOLE_DESPAWN``` 当附近的控制台被正确地黑入时消失。
- ```IMMOBILE``` 不会移动（例如：炮塔）。
- ```ID_CARD_DESPAWN``` 当科学身份卡被用于附近的控制台时消失。
- ```INTERIOR_AMMO``` 怪物体内装有弹药，启动时无需装载。防止弹药在禁用时掉落。
- ```KEENNOSE``` 嗅觉敏锐。
- ```LOUDMOVES``` 移动时发出的声音仿佛比实际大约2个尺寸，即使是飞行时也是如此。
- ```MECH_RECON_VISION``` 驾驶这个机甲时，它为你提供了夜视功能和增强的地图视野范围。
- ```MECH_DEFENSIVE``` 当驾驶这个机甲时，它可以全面保护你。
- ```MILITARY_MECH``` 是一种军用级的机甲。
- ```MILKABLE``` 可以挤出牛奶。
- ```NEMESIS``` 为具有NEMESIS突变的敌人添加标签。
- ```NEVER_WANDER``` 这个怪物永远不会加入游荡的队伍。
- ```NIGHT_INVISIBILITY``` 如果怪物距离超过一个方块且其所在方块的光线为LL_LOW或更低，怪物将变得隐形。夜视功能对可见性没有影响。
- ```NOT_HALLUCINATION``` 当玩家产生幻觉时，这个怪物不会出现。
- ```NOGIB``` 当受到巨大伤害被杀死时，不会留下血肉碎片/肉块。
- ```NOHEAD``` 不允许爆头！[我是无敌的]
- ```NO_BREATHE``` 生物不会溺水，也不受气体、烟雾或毒药的影响。
- ```NO_BREED``` 即使具有繁殖数据，生物也不会繁殖——在使用copy-from创建成年生物的幼崽版本时非常有用。
- ```NO_FUNG_DMG``` 这个怪物不会受到真菌孢子的伤害，也不能被真菌化。
- ```NO_NECRO``` 这个怪物不能被亡灵法师复活。但它仍然会自己复活。
- ```PATH_AVOID_DANGER_1``` 这个怪物会绕过一些危险，而不是直接穿越它们。
- ```PATH_AVOID_DANGER_2``` 这个怪物会绕过大多数危险，而不是直接穿越它们。
- ```PATH_AVOID_FIRE``` 这个怪物会绕过与热量相关的危险，而不是直接穿越它们。
- ```PATH_AVOID_FALL``` 这个怪物会绕过悬崖，而不是从它们上面掉下来。
- ```PAY_BOT``` 用货币交换，短暂地变成你的宠物。(租赁)
- ```PET_MOUNTABLE``` 生物可以被骑乘或连接到挽具上。
- ```PET_HARNESSABLE``` 生物可以被连接到挽具上。
- ```PET_WONT_FOLLOW``` 这个怪物在被驯化后不会自动跟随玩家。
- ```PRIORITIZE_TARGETS``` 这个怪物会根据目标的危险程度优先攻击。
- ```NULL``` 仅供源代码使用。(没用)
- ```PACIFIST``` 怪物永远不会进行近战攻击。对于让它们抓住但不攻击玩家很有用。（不攻击但抓取）
- ```KEEP_DISTANCE``` 怪物会尝试保持 `tracking_distance` 数量的格子距离与其当前目标。
- ```PARALYZE``` 攻击可能会用毒液导致玩家瘫痪。
- ```PLASTIC``` 在很大程度上吸收物理伤害。
- ```POISON``` 吃了会中毒。
- ```PUSH_MON``` 可以将生物推开。
- ```PUSH_VEH``` 可以将车辆推开。
- ```QUEEN``` 它是一只母体，当它死后，当地的种群也会开始死亡。
- ```RANGED_ATTACKER``` 怪物具有所有类型的远程攻击。
- ```REVIVES``` 怪物尸体在短时间内将复活。
- ```REVIVES_HEALTHY``` 当这个怪物复活时，它会有满的生命值和速度。
- ```RIDEABLE_MECH``` 这个怪物是可以驾驶的机甲。
- ```SHEARABLE``` 可以从这个怪物身上收集羊毛。
- ```SHORTACIDTRAIL``` 移动时有几率在原地留下酸液。请参阅 `ACIDTRAIL`。
- ```SLUDGEPROOF``` 不受泥浆影响，可以正常移动。
- ```SLUDGETRAIL``` 使怪物在移动时留下泥坑（，减缓其它生物的移动速度。
- ```SMALLSLUDGETRAIL``` 使怪物在移动时偶尔留下一个1格的泥浆痕迹（移动时有时在地面留下一个小泥浆陷阱）。
- ```SMELLS``` 它可以闻到你的气味（靠嗅觉发现玩家）。
- ```STUMBLES``` 在移动时跌跌撞撞，更容易失去平衡。
- ```STUN_IMMUNE``` 这个怪物对晕眩免疫（不会被击晕，可以快速恢复）。
- ```SUNDEATH``` 见光死。
- ```SWARMS``` 聚集在一起，形成群体（这类怪物倾向于成群结队，一起行动）。
- ```SWIMS``` 将水视为50移动点的地形（在水中可以自由游动，不受阻碍）。
- ```VAMP_VIRUS``` 这个怪物可以传播吸血鬼病毒效果。
- ```VENOM``` 攻击可能会使玩家中毒。
- ```VERMIN``` 用于无关紧要的怪物的过时标志，现在会阻止加载（此标志已弃用，不再使用）。
- ```WARM``` 温血动物（具有恒温机制，可以在寒冷环境中保持稳定的体温）。
- ```WATER_CAMOUFLAGE``` 如果在水中，即使在光天化日之下，也能保持隐形，直到距离玩家（当前感知力，如果角色具有侦查熟练度则加上基础感知力）格以外（在水中可以隐形，使玩家难以发现）。
- ```WEBWALK``` 不会破坏蜘蛛网，也不会被它们缠住。

### Sizes (尺寸)

Monster physical sizes (怪物的物理尺寸).

- ```HUGE```很大 Tank (坦克)
- ```LARGE```大 Cow (奶牛)
- ```MEDIUM```中 Human (人类)
- ```SMALL```小 Dog (狗)
- ```TINY```迷你 Squirrel (松鼠)

### Special attacks (特殊攻击)
特殊攻击已经转移到 [MONSTER_SPECIAL_ATTACKS.md](MONSTER_SPECIAL_ATTACKS.md)，因为它们已经从标志中迁移出去。

## Mutations (变异)

#### Flags (标志)

- ```UNARMED_BONUS``` 你可以获得相当于 unarmed_skill/2 的空手格斗和切割伤害加成，最高为 4。

### Categories (类别)

这里的翻译可能跟游戏有实际出入，因为这是翻译者自己翻译的。

这些分支同样是 `dreams.json` 中 `dreams` 类别的有效条目

这些分支也是 `dreams.json` 中梦境类别的有效条目

- ```MUTCAT_ALPHA``` "你感觉...变好了。不知何故。"
- ```MUTCAT_BEAST``` "你的心跳加速，瞬间你看到了血。"
- ```MUTCAT_BIRD``` "你的身体变得轻盈，你渴望天空。"
- ```MUTCAT_CATTLE``` "你的心灵和身体变得缓慢。你感到平静。"
- ```MUTCAT_CEPHALOPOD``` "你的意识被邪恶恐怖的形象淹没...然后它们消失了。"
- ```MUTCAT_CHIMERA``` "你需要立刻咆哮，晒太阳，咬东西，拍打翅膀。"
- ```MUTCAT_ELFA``` "自然正在与你融为一体..."
- ```MUTCAT_FISH``` "你被对海洋的强烈渴望所淹没。"
- ```MUTCAT_INSECT``` "你听到嗡嗡声，感觉到身体变硬。"
- ```MUTCAT_LIZARD``` "在一瞬间，你的身体变凉。"
- ```MUTCAT_MEDICAL``` "你能感觉到血液在你的血管里奔腾，一种奇怪的药物感觉在你的感官中洗涤。"
- ```MUTCAT_PLANT``` "你感觉跟自然更亲近了。"
- ```MUTCAT_RAPTOR``` "嗯...甜美的血腥味道...尝起来像胜利。"
- ```MUTCAT_RAT``` "你感到短暂的恶心。"
- ```MUTCAT_SLIME``` "你的身体在一瞬间失去了所有的僵硬。"
- ```MUTCAT_SPIDER``` "你感觉阴险。"
- ```MUTCAT_TROGLOBITE``` "你渴望一个凉爽、黑暗的地方躲起来。"


## Overmap (地图)

### Overmap connections (地图连接)

- ```ORTHOGONAL``` 该连接通常优先选择直线，尽可能避免转弯。

### Overmap specials (地图特殊点)

#### Flags (标志)

- ```BEE``` 位置与蜜蜂有关。用于对位置进行分类。
- ```BLOB``` 位置应当从定义的位置向外"扩散"，有几率被放置在相邻的位置。
- ```CLASSIC``` 当经典僵尸启用时，允许此位置。
- ```FARM``` 农场
- ```FUNGAL``` 位置与真菌有关。用于对位置进行分类。
- ```LAKE``` 位置被放置在湖泊上，如果地图不包含任何湖泊地形，则会被忽略放置。
- ```MI-GO``` 位置与Mi-go有关。
- ```SAFE_AT_WORLDGEN``` 在世界生成期间，该位置不会生成地图怪物组（不影响由地图生成生成的怪物）。
- ```TRIFFID``` 位置与蕈类有关。用于对位置进行分类。
- ```UNIQUE``` 位置是唯一的，每个地图上只会出现一次。`occurrences` 被覆盖以定义百分比几率（例如：`"occurrences" : [75, 100]` 是75%）
- ```GLOBALLY_UNIQUE``` 位置在每个世界上只会出现一次。`occurrences` 被覆盖以定义百分比几率（例如：`"occurrences" : [75, 100]` 是75%）
- ```URBAN``` 城市
- ```WILDERNESS``` - 没有道路连接的位置。
- ```MAN_MADE``` - 由人类创建的位置。用于Innawood mod的目的。

### Overmap terrains (地图地形)

#### Flags (标志)

- ```KNOWN_DOWN``` 已知的向下通道。
- ```KNOWN_UP``` 已知的向上通道。
- ```LINEAR``` 用于道路等，使用 ID_straight, ID_curved, ID_tee, ID_four_way。
- ```NO_ROTATE``` 地形不能旋转（将不会生成 ID_north, ID_east, ID_south 和 ID_west 实例，只生成 ID）。
- ```SHOULD_NOT_SPAWN``` 不应期望地形生成。这可能是因为它仅用于测试目的，或者它是尚未完成的功能的一部分，在可以开始生成之前需要更多工作。
- ```RIVER``` 是河流图块。
- ```SIDEWALK``` 在与道路相邻的侧面上有人行道。
- ```IGNORE_ROTATION_FOR_ADJACENCY``` 当为此 OMT 进行地图生成邻居检查时，方向将被视为绝对的，而不是旋转以适应地图生成本身。可能仅对硬编码的地图生成有用。
- ```REQUIRES_PREDECESSOR``` 此地图生成不会从头开始；它将更新替换的地形的地图生成。这允许相应的 json 地图生成使用 `expects_predecessor` 功能。
- ```LAKE``` 将此位置视为地图生成目的的有效湖泊地形。
- ```LAKE_SHORE``` 将此位置视为地图生成目的的有效湖岸地形。
- 
- For NPC AI
- ```SOURCE_FUEL``` 可抢夺的燃料。
- ```SOURCE_FOOD``` 可抢夺的食物。
- ```SOURCE_FARMING``` 可抢夺的农业用品。
- ```SOURCE_FABRICATION``` 可抢夺的制造工具和组件。
- ```SOURCE_GUN``` 可抢夺的枪支。
- ```SOURCE_AMMO``` 可抢夺的弹药。
- ```SOURCE_BOOKS``` 可抢夺的书籍。
- ```SOURCE_WEAPON``` 可抢夺的武器。
- ```SOURCE_FORAGE``` 可以觅食的植物。
- ```SOURCE_COOKING``` 可抢夺的烹饪工具和食材。
- ```SOURCE_TAILORING``` 可抢夺的裁缝工具。
- ```SOURCE_DRINK``` 可抢夺的饮料。
- ```SOURCE_VEHICLES``` 可抢夺的车辆、零件、车辆工具。
- ```SOURCE_ELECTRONICS``` 可抢夺的电子产品。
- ```SOURCE_CONSTRUCTION``` 可抢夺的建筑工具和组件。
- ```SOURCE_CHEMISTRY``` 可抢夺的化学工具和组件。
- ```SOURCE_CLOTHING``` 可抢夺的衣物。
- ```SOURCE_SAFETY``` 安全的藏身之地，适合建立基地。
- ```SOURCE_ANIMALS``` 可抢夺的有用农场动物或骑乘动物。
- ```SOURCE_MEDICINE``` 可抢夺的药品。
- ```SOURCE_LUXURY``` 可抢夺的贵重物品或让人感觉良好的物品，可以出售或保留。
- ```SOURCE_PEOPLE``` 可能有其他幸存者的地点。
- ```RISK_HIGH``` 高风险地区，如实验室、超市等。
- ```RISK_LOW``` 偏远且安全的隐蔽地点。

- ```GENERIC_LOOT``` 这个地点可能包含上述任何物品，但频率较低，通常是住宅。

## Recipes (配方)

### Crafting recipes (制作配方)
这些标志适用于制作配方，即属于以下类别的配方：

- ```CC_AMMO``` 弹药类
- ```CC_ARMOR``` 护甲类
- ```CC_CHEM``` 化学品类
- ```CC_DRINK``` 饮料类
- ```CC_ELECTRONIC``` 电子产品类
- ```CC_FOOD``` 食物类
- ```CC_MISC``` 杂项类
- ```CC_WEAPON``` 武器类

#### 标志 (Flags)

- ```ALLOW_ROTTEN``` 在制作不易腐烂的物品时，明确允许使用腐烂的组件。
- ```BLIND_EASY``` 在几乎没有光线的情况下也容易制作。
- ```BLIND_HARD``` 在几乎没有光线的情况下也可能制作，但困难。
- ```SECRET``` 不会在角色创建时根据高技能水平自动学习。
- ```NEED_FULL_MAGAZINE``` 如果这个配方需要弹匣，它需要一个装满的弹匣。
- ```FULL_MAGAZINE``` 从这个配方制作或拆解的物品将有装满的弹匣。

### 阵营建筑配方 (Camp building recipes)
这些标志仅适用于阵营建筑配方（中心与扩展），即具有类别 `CC_BUILDING`的配方。(???)

#### 标志 (Flags)

- ```NO_FOOD_REQ``` 对于这个阵营建筑配方，不需要食物需求。(???)

#### 蓝图重定向标志

这些标志的目的是为了允许重复使用蓝图来创建不同方向的“相同”设施。镜像是在旋转之前进行的，如果尝试对同一方向应用多次镜像，或者尝试应用多次旋转，都是错误的。如果它们适用于不同的方向，那么允许应用不同版本的标志（这也是主要的预期用法）。

- ```MAP_MIRROR_HORIZONTAL``` 使建筑配方镜像蓝图（或蓝图组）的位置和内容。  
// 这个标志会使建筑在水平方向上翻转，例如，原本在左边的部分会出现在右边，反之亦然。

- ```MAP_MIRROR_VERTICAL``` 使建筑配方镜像蓝图（或蓝图组）的位置和内容。  
// 这个标志会使建筑在垂直方向上翻转，例如，原本在上面的部分会出现在下面，反之亦然。

- ```MAP_ROTATE_[X]``` X必须是90、180或270之一，并要求在应用蓝图之前将其旋转给定的角度。  
// 这个标志会使建筑按照顺时针方向旋转X度，例如，如果X是90，那么原本在上面的部分会出现在右边，原本在右边的部分会出现在下面，依此类推。

- ```MAP_MIRROR_HORIZONTAL_IF_[Y]``` 类似于`MAP_MIRROR_HORIZONTAL`，但只有当扩展所在的瓦片是Y时才应用。Y的合法值为“NW”、“N”、“NE”、“E”、“SE”、“S”、“SW”和“W”。  
// 这个标志会根据扩展所在的瓦片的方位来决定是否应用水平镜像，例如，如果Y是“N”，那么只有当扩展位于地图北边时才会应用水平镜像。

- ```MAP_MIRROR_VERTICAL_IF_[Y]``` 前一个标志的垂直版本。  
// 这个标志会根据扩展所在的瓦片的方位来决定是否应用垂直镜像，例如，如果Y是“E”，那么只有当扩展位于地图东边时才会应用垂直镜像。

- ```MAP_ROTATE_[X]_IF_[Y]``` “MAP_ROTATE_X”的扩展位置依赖版本，Y具有与上面两组标志相同的合法值。  
// 这个标志会根据扩展所在的瓦片的方位来决定是否应用旋转，例如，如果X是90，Y是“SW”，那么只有当扩展位于地图西南角时才会应用顺时针旋转90度。

## Scenarios (情景)

### Flags (标志)

- ```BORDERED``` 初始起始位置被一堵巨大的岩石墙包围。
- ```CHALLENGE``` 游戏不会在随机游戏类型中选择此情景。
- ```CITY_START``` 仅当世界选项中的城市大小值大于0时，此情景才可用。
- ```FIRE_START``` 玩家游戏开始时附近有火源。
- ```HELI_CRASH``` 玩家游戏开始时，各个肢体有伤口。
- ```LONE_START``` 此情景在游戏开始时不会生成伙伴 NPC。

#### Profession Flags (职业标志)

- ```SCEN_ONLY``` 只能作为适当情景的一部分选择职业。

#### Starting Location Flags (起始位置标志)

- ```ALLOW_OUTSIDE``` 允许将玩家放置在建筑物外部，适用于户外开始。
- ```BOARDED``` 从被封闭的建筑物开始（窗户和门被封板，可移动家具被移到窗户和门附近）。

## Skills (技能)

### Tags (标签)

- ```combat_skill``` 该技能被视为战斗技能。受 `PACIFIST`，`PRED1`，`PRED2`，`PRED3` 和 `PRED4` 特性影响。
- ```contextual_skill``` 该技能是抽象的，取决于上下文（它所应用的间接项目）。无论玩家还是 NPC 都不能拥有它。

## Techniques (技巧)

技巧可以被工具、盔甲、武器以及任何其他可装备的物品使用。

- 查看 `data/json/techniques.json` 的内容。
- 技巧也用于武术风格，详见 `data/json/martialarts.json`。

## Tools (工具)

### Flags (标志)

Melee flags 与 tool flags 是完全兼容的，反之亦然。

- ```ACT_ON_RANGED_HIT``` 当物品被扔出或发射时直接激活，然后如果它出现在地面上立即进行处理，[例如某种瞬爆手雷，丢出时直接激活,到地上时直接爆炸]
- ```ALLOWS_REMOTE_USE``` 该物品可以在相邻的格子中激活或重新加载，无需捡起。
- ```AUTO_DELETE_CABLE``` 这种电缆是由其设备或设备自动创建和删除的，玩家不应该能够直接与之互动。
- ```BELT_CLIP``` 该物品可以被夹在适当尺寸的腰带环上（腰带环受其最大容量和最大重量属性限制）。
- ```BOMB``` 它可以是一个遥控炸弹。
- ```CABLE_SPOOL``` 该物品是一个电缆卷，必须作为电缆卷进行处理。它通常应该有一个 "link_up" iuse_action，描述它可以连接到什么以及如何连接。
- ```CANNIBALISM``` 该物品是一种含有人肉的食物，在食用时产生所有相应的效果。
- ```CHARGEDIM``` 如果被点亮，从剩余电量的 20% 开始光强随电量减弱。
- ```DIG_TOOL``` 如果挥舞，可以挖透如岩石和墙壁等地形。如果物品还有 ```POWERED``` 标志，那么它挖得更快，但会消耗物品的弹药，就像激活它一样。
- ```FIRESTARTER``` 物品不太容易起火。
- ```FIRE``` 物品会被立刻点燃。
- ```HAS_RECIPE``` 用于E-Ink平板电子书，表示当前正在显示食谱的状态。
- ```IS_UPS``` 物品是统一电源系统。用于处理活动物品。
- ```LIGHT_[X]``` 用光强度 `[X]` 照亮区域，`[X]` 是光强度值。 (例如 `LIGHT_4` 或 `LIGHT_100`)。注意：此标志设置 `itype::light_emission` 字段，然后被删除 (无法使用 `has_flag` 找到)；
- ```NO_DROP``` 物品不应存在于地图方块上作为独立物品 (必须被其他物品包含)。
- ```NO_UNLOAD``` 无法卸载。
- ```POWERED``` 如果打开，物品使用自身的能量来源，而不是依赖用户的能量。
- ```RADIOCARITEM``` 物品可以放入遥控车中。
- ```RADIOSIGNAL_1``` 根据无线电信号1激活。
- ```RADIOSIGNAL_2``` 根据无线电信号2激活。
- ```RADIOSIGNAL_3``` 根据无线电信号3激活。
- ```RADIO_ACTIVATION``` 通过遥控器激活（还需要 `RADIOSIGNAL_*`）。
- ```RADIO_CONTAINER``` 它是一个放有可通过无线电遥控的物品的容器。
- ```RADIO_MODABLE``` 表示物品可以变成无线电激活的物品。
- ```RADIO_MOD``` 该物品已变成无线电激活的物品。
- ```RECHARGE``` 当放置在带有充电站的货物区域时，获得电量。
- ```SAFECRACK``` 该物品可用于解锁保险箱。
- ```USES_BIONIC_POWER``` 允许物品使用来自玩家仿生能量的能量来满足其`energy_drain` 。工具也可以消耗仿生能量而不是电池弹药。
- ```USE_PLAYER_ENERGY``` 具有 `use_action` 的物品可以`cast_spell` 消耗指定的 `base_energy_cost`。
- ```USE_UPS``` 允许物品使用来自UPS的能量来满足其`energy_drain`。工具也可以消耗UPS而不是电池弹药。
- ```WATER_EXTINGUISH``` 可以在水中或降水下熄灭。转换物品（需要设置 "reverts_to" 或 use_action "transform"）。
- ```WET``` 物品湿透了，会慢慢晾干（例如毛巾）。
- ```WIND_EXTINGUISH``` 该物品会被风吹灭。
- ```WRITE_MESSAGE``` 该物品可用于在标志上写信息。

### Flags that apply to items (适用于物品的标志)

这些标志**不适用于item types(物品类型)**。

这些标志是由游戏代码添加到特定物品上的（它们只能用在某些特定的物品上，不是所有同类的物品都有。）。这些标志**不是**由内容贡献者在 JSON 中分配的，而是通过编程设置的。

- ```COLD``` 物品是冷的（和`EATEN_COLD`有关）。
- ```DIRTY``` 物品（液体）掉在地上，变得很脏，不能再洗干净了。
- ```FIELD_DRESS_FAILED``` 尸体被不熟练的处理弄坏了。会影响解剖的结果。
- ```FIELD_DRESS``` 尸体被处理过了。会影响解剖的结果。
- ```FIT``` 减少一点紧绷感。
- ```FROZEN``` 物品被冻住了（冰箱里的东西）。
- ```HIDDEN_ITEM``` 这个物品在AIM里看不到。
- ```HOT``` 物品是热的（和`EATEN_HOT`有关）。
- ```LITCIG``` 表示一个点燃的吸烟物品（香烟，大麻等）。
- ```MUSHY``` `FREEZERBURN`物品被冻过了，现在变得软烂无味，再冻一次就会变坏。
- ```NO_PARASITES``` 无效化食物->类型->可食用->寄生虫里设置的寄生虫数量
- ```QUARTERED``` 尸体被切成了几块。会影响解剖的结果，重量，体积。
- ```REVIVE_SPECIAL``` 尸体在玩家靠近时复活。
- ```WARM``` 一个隐藏的标记，用来追踪一个物品从热到冷的过程，是HOT和冷之间的缓冲状态。
- ```WET``` 物品是湿的，会慢慢干掉（比如毛巾）。

### Use actions (使用操作)

这些标志应用于`use_action`字段，而不是`flags`字段。

- ```ACIDBOMB_ACT``` 赶快扔掉它，不然你会变成《机器战警》里那个家伙的下场。
// 这句话是指《机器战警》（Robocop）这部1987年的电影中的一个场景，其中一个恶棍在追赶机器战警时不小心撞到了一辆装有剧毒废液的卡车，导致他全身被腐蚀，最后被另一个恶棍撞死¹²³。这是一种幽默的夸张，用来表达酸性炸弹的危险性。
- ```ACIDBOMB``` 拔掉酸弹的引线。
- ```AUTOCLAVE``` 通过高压灭菌处理一个CBM。
- ```BELL``` 摇响铃铛。
- ```BOLTCUTTERS``` 使用城市钥匙随处进入。
- ```BREAK_STICK``` 把长树枝折成两段。
- ```C4``` 激活C4炸药。
- ```CAN_GOO``` 释放一个小粘滞性怪物伙伴。
- ```CAPTURE_MONSTER_ACT``` 捕捉并封装一个怪物。相关操作也用于释放它。
- ```CARVER_OFF``` 打开雕刻机。
- ```CARVER_ON``` 关闭雕刻机。
- ```CHAINSAW_OFF``` 打开链锯。
- ```CHAINSAW_ON``` 关闭链锯。
- ```COMBATSAW_OFF``` 打开战斗链锯。
- ```COMBATSAW_ON``` 关闭战斗链锯。
- ```CROWBAR``` 用撬棍撬开门、窗户、井盖以及许多其他需要撬动的东西。
- ```DIG``` 清理瓦砾。
- ```DIRECTIONAL_ANTENNA``` 使用无线电找到信号源。
- ```DIVE_TANK``` 使用压缩空气罐呼吸。
- ```DOG_WHISTLE``` 狗子讨厌这个东西；不过你的狗似乎对它没什么反应。
  // 应该是说狗哨
- ```DOLLCHAT``` 那个令人毛骨悚然的玩偶一直在说话。
- ```ELEC_CHAINSAW_OFF``` 打开电动链锯。
- ```ELEC_CHAINSAW_ON``` 关闭电动链锯。
- ```EXTINGUISHER``` 灭火。
- ```FIRECRACKER_ACT``` 最令人伤心的7月4日。
 // 在Cataclysm: Dark Days Ahead (CDDA) 大灾变的游戏环境中，这句话是在描述引爆一颗鞭炮的情景。7月4日是美国的国庆日，通常会有烟花和鞭炮的庆祝活动。然而，在游戏中的末世背景下，这种庆祝变得令人伤感，因为这个世界已经不再是之前的样子。所以，在这里，"最令人伤心的7月4日"是用来形容这个末世背景下的情感反差。
- ```FIRECRACKER_PACK_ACT``` 留着零钱吧，你这个肮脏的畜生。
 // （这是一句来自《小鬼当家》电影中的虚构电影《天使与恶魔》的台词，是一种讽刺的说法，表示不在乎对方的生死）¹²³
- ```FIRECRACKER_PACK``` 点燃一整包鞭炮。
- ```FIRECRACKER``` 点燃一根鞭炮。
- ```FLASHBANG``` 拉出闪光弹的引线。
- ```GEIGER``` 检测附近的辐射水平。
- ```GRANADE_ACT``` 用源代码修复攻击敌人？
 // 这是一个游戏里的物品，叫做GRANADE，是一个会爆炸的手榴弹。它的名字是一个双关语，既是grenade（手榴弹）的错拼，也是granade（大型石榴）的变体。它的效果是用一些游戏代码的修改来影响敌人，比如让他们变成其他生物，或者让他们消失。这些修改就是source code fixes（源代码修复）。所以这个标记应该就是表示这个物品有这样的效果。
- ```GRANADE``` 拉出Granade的引线。
  // （Granade是一个故意拼错的手榴弹，有可能爆炸或者发生其他奇怪的事情）
- ```GRENADE``` 拉出手榴弹的引线。
- ```HACKSAW``` 将金属切成碎片。
- ```HAMMER``` 从窗户、门和篱笆上撬下木板。
- ```HEATPACK``` 使用暖宝宝取暖。
- ```HEAT_FOOD``` 在火源附近加热食物。
- ```HOTPLATE``` 使用电热器为食物加热
- ```JACKHAMMER``` 破坏墙壁和其他建筑物。
- ```JET_INJECTOR``` 将喷射药物直接注入静脉。
- ```LAW``` 为发射准备 LAW。
- ```LIGHTSTRIP``` 激活荧光条。
- ```LUMBER``` 将原木切割成木板。
- ```MAKEMOUND``` 制作一堆土。
- ```MANHACK``` 激活一个人形机器。
- ```MATCHBOMB``` 点燃火柴炸弹。
- ```MILITARYMAP``` 了解当地的军事设施，并显示道路。
- ```MININUKE``` 设定定时器并逃跑。或者用锤子敲击（开玩笑的）。
- ```MOLOTOV_LIT``` 投掷它，但不要掉落它。
- ```MOLOTOV``` 点燃燃烧瓶。
- ```MOP``` 擦拭杂乱。
- ```MP3_ON``` 关闭 MP3 播放器。
- ```MP3``` 打开 MP3 播放器。
- ```NOISE_EMITTER_OFF``` 打开噪音发生器。
- ```NOISE_EMITTER_ON``` 关闭噪音发生器。
- ```NONE``` 什么也不做。
- ```PACK_CBM``` 将CBM放入特殊的高压灭菌袋中，以便在灭菌后保持无菌。
- ```PHEROMONE``` 使僵尸忽略你。
- ```PICK_LOCK``` 在门上撬锁。速度和成功几率由技能、`LOCKPICK`物品质量和`PERFECT_LOCKPICK`物品标志决定。
- ```PICKAXE``` 除了责备你拥有它（我是认真的）外，什么也不做。
- ```PLACE_RANDOMLY``` 这与 `manhack` iuse中的标志非常相似，它阻止物品询问玩家希望将怪物卸载到哪里，而是随机选择。
- ```PORTABLE_GAME``` 玩游戏。
- ```PORTAL``` 创建传送门陷阱。（？？？）
- ```RADIO_OFF``` 打开收音机。
- ```RADIO_ON``` 关闭收音机。
- ```RAG``` 止血。
- ```RESTAURANTMAP``` 了解当地餐厅，显示道路。
- ```ROADMAP``` 了解当地常见的兴趣点，并显示道路。
- ```SCISSORS``` 剪短衣物。
- ```SEED``` 询问你是否确定要吃这颗种子。因为种植种子更好。
- ```SEW``` 缝制衣物。
- ```SHELTER``` 搭建一个完整的庇护所。
- ```SHOCKTONFA_OFF``` 打开电击警棍。
- ```SHOCKTONFA_ON``` 关闭电击警棍。
- ```SIPHON``` 从车辆中抽出液体。
- ```SMOKEBOMB_ACT``` 这可能是作为烟雾者隐藏的好方法。（？？？）
- ```SMOKEBOMB``` 拔掉烟雾弹的引脚。
- ```SOLARPACK_OFF``` 折叠太阳能背包阵列。
- ```SOLARPACK``` 展开太阳能背包阵列。
- ```SOLDER_WELD``` 焊接或焊接物品。
- ```SPRAY_CAN``` 在城镇上涂鸦。
- ```SURVIVORMAP``` 了解当地有助于生存的兴趣点，并显示道路。
- ```TAZER``` 电击某人或某物。
- ```TELEPORT``` 传送。
- ```TORCH``` 点燃火把。
- ```TOURISTMAP``` 了解当地游客喜欢参观的兴趣点，并显示道路。
- ```TOWEL``` 使用物品作为毛巾来擦干你的角色。
- ```TURRET``` 激活炮塔。
- ```WASH_ALL_ITEMS``` 清洗带有```FILTHY```标志的物品。
- ```WASH_HARD_ITEMS``` 清洗带有```FILTHY```标志的硬质物品。
- ```WASH_SOFT_ITEMS``` 清洗带有```FILTHY```标志的软质物品。
- ```WATER_PURIFIER``` 净化水。

## Vehicle Parts (载具部分)

### Flags

- ```ADVANCED_PLANTER``` 这个播种器不会撒出种子，也不会在无法挖掘的表面上损坏自身。
- ```AIRCRAFT_REPAIRABLE_NOPROF``` 允许玩家在没有任何熟练度的情况下安全地从飞机上拆卸部件。
- ```AUTOPILOT``` 这个部件可以为车辆提供简单的自动驾驶功能。
- ```AISLE_LIGHT``` 这个部件可以照亮周围环境。
- ```AISLE``` 玩家可以在这个部件上以比正常速度更快的速度移动。
- ```ALTERNATOR``` 为安装在车辆上的电池充电。只能安装在带有```E_ALTERNATOR```标志的部件上。
- ```ANCHOR_POINT``` 允许安全地安装安全带。
- ```ANIMAL_CTRL``` 可以驾驭动物，需要 HARNESS_bodytype 标志来指定动物的体型。
- ```ARMOR``` 在碰撞过程中保护安装在其上的其他车辆部件。
- ```ATOMIC_LIGHT``` 这个部件可以照亮周围环境。
- ```BATTERY_MOUNT``` 这个部件允许安装电池以便快速更换。
- ```HANDHELD_BATTERY_MOUNT``` 与`BATTERY_MOUNT`相同，但用于手持电池安装。
- ```BED``` 玩家可以在这里睡觉的床。
- ```BEEPER``` 当车辆向后移动时产生噪音。
- ```BELTABLE``` 安全带可以安装在这个部件上。
- ```BIKE_RACK_VEH``` 可以用来合并一个相邻的单砖宽的车辆，或将单砖宽的车辆分离成独立的车辆。
- ```BOARDABLE``` 玩家可以在车辆行驶时安全地在这个部件上移动或站立。
- ```CAMERA_CONTROL```这个部件允许使用安装在车辆上的摄像头系统。
- ```CAMERA``` 车辆部件，允许查看安装的摄像头系统。
- ```CAPTURE_MOSNTER_VEH``` 可以用来在安装在车辆上时捕捉怪物。
- ```CARGO_LOCKING``` 这个货物区域对非玩家角色不可访问。只能安装在带有```LOCKABLE_CARGO```标志的部件上。
- ```CARGO``` 货物存放区。
- ```CHIMES``` 使用时会产生持续的噪音。
- ```CIRCLE_LIGHT``` 打开时投射出一个圆形的光圈。
- ```CONE_LIGHT``` 打开时投射出一个锥形的光圈。
- ```CONTROLS``` 可以用来控制车辆。
- ```CONTROL_ANIMAL``` 这些控制器只能用于控制由动物拉动的车辆（例如，缰绳和其他马具）。
- ```COOLER``` 有一个单独的命令来切换这个部件。
- ```COVERED``` 阻止货物部件中的物品发出任何光线。
- ```CTRL_ELECTRONIC``` 控制车辆的电气和电子系统。
- ```CURTAIN``` 可以安装在带有```WINDOW```标志的部件上，并且功能与建筑物窗户上的百叶窗相同。
- ```DOME_LIGHT``` 这个部件可以照亮周围环境。
- ```DOOR_MOTOR``` 只能安装在带有```OPENABLE```标志的部件上。
- ```ENGINE``` 是一个发动机，为车辆提供机械动力。
- ```EVENTURN``` 仅在偶数回合期间开启。
- ```EXTRA_DRAG``` 告诉车辆该部件会降低发动机功率。
- ```E_ALTERNATOR``` 是一种可以为发电机提供动力的发动机。
- ```E_COLD_START``` 是一种在寒冷天气下启动速度较慢的发动机。
- ```E_COMBUSTION``` 是一种燃烧燃料的发动机，在受损时可能会逆火或爆炸。
- ```E_HEATER``` 是一个引擎，当打开时，可以加热车内物品的加热器功能。
- ```E_HIGHER_SKILL``` 是一个难度较高的引擎，安装的引擎越多，安装难度越大。
- ```E_STARTS_INSTANTLY``` 是一个可以立即启动的引擎，类似于食物踏板。
- ```FLAT_SURF``` 具有平坦硬表面的部件（例如，桌子）。
- ```FREEZER``` 可以在零度以下的温度下冷冻物品。
- ```FRIDGE``` 可以冷藏物品。
- ```FUNNEL``` 如果安装在车辆油箱上方，可以在下雨时收集雨水。
- ```HALF_CIRCLE_LIGHT``` 打开时投射定向半圆形光线。
- ```HARNESS_bodytype``` 将 bodytype 替换为 `any` 以接受任何类型，或替换为目标类型。
- ```HORN``` 使用时产生噪音。
- ```INITIAL_PART``` 通过施工菜单开始新车辆时，此车辆部件将作为车辆的初始部件（如果使用的物品与此部件所需的物品匹配）。具有此标志的部件的项目将自动添加为组件以启动车辆构造。
- ```INTERNAL``` 只能安装在带有 ```CARGO``` 标志的部件上。
- ```LOCKABLE_CARGO``` 能够安装锁的货物容器。
- ```MUFFLER``` 在车辆运行时消音车辆产生的噪音。
- ```MULTISQUARE``` 使此部件及任何相邻的具有相同 ID 的部件充当一个部件。
- ```MUSCLE_ARMS``` 带有此标志的引擎的功率取决于玩家的力量（比 ```MUSCLE_LEGS``` 效果差）。
- ```MUSCLE_LEGS``` 带有此标志的引擎的功率取决于玩家的力量。
- ```NAILABLE``` 用钉子固定。
- ```NEEDS_BATTERY_MOUNT``` 带有此标志的部件需要安装在带有 `BATTERY_MOUNT` 标志的部件上。
- ```NEEDS_HANDHELD_BATTERY_MOUNT``` 与 `NEEDS_BATTERY_MOUNT` 相同，但适用于手持电池架。
- ```NO_INSTALL_PLAYER``` 部件不能被玩家安装，但在安装菜单中可见（例如，直升机转子）。
- ```NO_INSTALL_HIDDEN``` 部件不能被玩家安装，在安装菜单中隐藏（例如，电源线，充气船部件，召唤车辆部件）。
- ```NO_MODIFY_VEHICLE``` 在车辆上安装带有此标志的部件意味着车辆将无法再进行修改。带有此标志的部件不应由玩家安装。
- ```NO_UNINSTALL``` 无法卸载。
- ```NO_REPAIR``` 无法修复。
- ```OBSTACLE``` 无法穿过部件，除非部件也是 ```OPENABLE```。
- ```ODDTURN``` 只在奇数轮次上打开。
- ```ON_CONTROLS``` 只能安装在带有 ```CONTROLS``` 标志的部件上。
- ```ON_ROOF``` 带有此标志的部件只能安装在屋顶上（带有 ```ROOF``` 标志的部件）。
- ```OPAQUE``` 无法看穿。
- ```OPENABLE``` 可以打开或关闭。
- ```OPENCLOSE_INSIDE``` 可以打开或关闭，但只能从车内操作。
- ```OVER``` 可以安装在其他部件上。
- ```PERPETUAL``` 如果与 REACTOR（反应堆）配对，部件在不消耗燃料的情况下产生电力。
- ```PLANTER``` 将种子种植到犁过的土地上，当下方地形不适合时撒出。在非 ```DIGGABLE```（可挖掘）表面上行驶时会受到损伤。
- ```PLOW``` 在激活时耕作部件下方的土壤。在不适合的地形上受到与车辆速度成比例的损伤。
- ```POWER_TRANSFER``` 向连接的东西（可能是车辆）传输电力。
- ```PROTRUSION``` 部件突出，因此其他部件无法安装在其上。
- ```REACTOR``` 当启用时，部件消耗燃料以产生电力。
- ```REAPER``` 割倒成熟的作物，将它们放在方格上。
- ```RECHARGE``` 为具有相同标志的物品充电。 (目前仅限可充电电池模组。)
- ```REMOTE_CONTROLS``` 一旦安装，允许通过遥控器使用车辆。
- ```REVERSIBLE``` 拆除与安装的要求相同，但速度是后者的两倍。
- ```ROOF``` 覆盖车辆的一个部分。车辆上有屋顶的区域以及周围区域上的屋顶被认为是内部。否则它们是外部。
- ```SCOOP``` 将车辆下方的物品拉到部件的货物空间。也可以擦拭液体。
- ```SEATBELT``` 帮助防止玩家在事故中从车辆上弹出。只能安装在具有 ```BELTABLE```（可系安全带）标志的部件上。
- ```SEAT``` 玩家可以坐或睡觉的座位。
- ```SECURITY``` 如果安装，当车辆受到破坏时会发出巨大的噪音。
- ```SHARP``` 用这个部件击中怪物会造成切割伤害而不是钝击伤害，并防止怪物晕眩。
- ```SHOCK_ABSORBER``` 该部件保护同一瓷砖上的非框架部件免受碰撞冲击损伤。它不能提供防护直接冲击或其他攻击。
- ```SIMPLE_PART``` 该部件可以安装或从其他部件上拆除，否则会阻止修改。
- ```SMASH_REMOVE``` 当你移除这个部件时，你会得到破坏结果，而不是得到物品本身。
- ```SOLAR_PANEL``` 在阳光下为车辆电池充电。生成汽车时有 1/4 的几率损坏。
- ```SPACE_HEATER``` 有单独的命令来切换此部件。
- ```STABLE``` 类似于 `WHEEL`（轮子），但如果车辆只有 1x1 的部分，这个单独的轮子算作足够的轮子。
- ```UNSTABLE_WHEEL``` 与 `STABLE`（稳定）相反 - 如果单独安装，无法满足车辆的轮子需求。
- ```STEERABLE``` 这个轮子是可操控的。
- ```STEREO``` 允许播放音乐以提高士气。
- ```TRANSFORM_TERRAIN``` 变换地形（使用 ```transform_terrain``` 中定义的规则）。
- ```TRACKED``` 有助于提高转向效果，但不算作安装难度的转向轴，并且仍然增加了对转向中心计算的阻力。
- ```TRACK``` 允许安装在其上的车辆在地图上标记和跟踪。
- ```TURRET_CONTROLS``` 如果带有此标志的部件安装在炮塔上方，可将炮塔的目标模式设置为全自动。只能安装在带有 ```TURRET```（炮塔）标志的部件上。
- ```TURRET_MOUNT``` 带有此标志的部件适合安装炮塔。
- ```TURRET``` 是武器炮塔。只能安装在带有 ```TURRET_MOUNT```（炮塔安装）标志的部件上。
- ```UNMOUNT_ON_DAMAGE``` 部件在受到破坏时从车辆上断裂。物品是新的且通常是无损的。
- ```UNMOUNT_ON_MOVE``` 在车辆移动时拆卸此部件。除非你给它特殊处理，否则不会掉落该部件。
- ```VARIABLE_SIZE``` 具有动力、轮子半径等的 'bigness'。
- ```VISION``` 提供视线无法看到的方向，例如镜子。
- ```WASHING_MACHINE``` 可用于大量洗涤肮脏的衣物。
- ```DISHWASHER``` 可用于大量清洗肮脏的非软质物品。
- ```WATER_WHEEL``` 在浸没在流动水中时为车辆电池充电。
- ```WHEEL``` 在轮子计算中算作一个轮子。
- ```WIDE_CONE_LIGHT``` 打开时投射出宽角锥形的光线。
- ```WINDOW``` 可以透过这个部件看到，并可以在其上安装窗帘。
- ```WIND_POWERED``` 这个引擎是由风力驱动的（帆等）。
- ```WIND_TURBINE``` 在暴露于风中时为车辆电池充电。
- ```WORKBENCH``` 可以在这个部件上制作物品，必须与 workbench（工作台）json 条目配对。
- ```NEEDS_WINDOW``` 只能安装在具有 ```WINDOW``` 标志的部件上。
- ```NEEDS_WHEEL_MOUNT_LIGHT``` 只能安装在具有 ```WHEEL_MOUNT_LIGHT``` 标志的部件上。
- ```NEEDS_WHEEL_MOUNT_MEDIUM``` 只能安装在具有 ```WHEEL_MOUNT_MEDIUM``` 标志的部件上。
- ```NEEDS_WHEEL_MOUNT_HEAVY``` 只能安装在具有 ```WHEEL_MOUNT_HEAVY``` 标志的部件上。

### Vehicle parts requiring other vehicle parts(需要其他车辆部件的车辆部件)

其他车辆部件的需求是通过在 JSON 标志中设置 ```requires_flag``` 来定义的。```requires_flag``` 是具有此标志的部件所需的另一个标志。


### Fuel types (燃料类型)

- ```animal``` Beast of burden. (牲畜)
- ```avgas``` I believe I can fly! (航空汽油)
- ```battery``` Electrifying. (电池)
- ```biodiesel``` Homemade power. (生物柴油)
- ```coal_lump``` Good ol' steampunk. (煤块)
- ```charcoal``` Good ol' steampunk. (木炭)
- ```diesel``` Refined dino. (柴油)
- ```gasoline``` Refined dino. (汽油)
- ```jp8``` Refined dino for military use. (军用燃油)
- ```lamp_oil``` Let there be light! (灯油)
- ```motor_oil``` Synthetic analogue of refined dino. (机油)
- ```muscle``` I got the power! (肌肉力量)
- ```plut_cell``` 1.21 Gigawatts! (钚电池)
- ```wind``` Wind powered. (风力)

### Faults (故障)

#### Flags (标志)

Vehicle fault flags (车辆故障标志):
- ```NO_ALTERNATOR_CHARGE``` 与该发动机相连的发电机不工作。
- ```BAD_COLD_START``` 发动机启动时，好像温度比实际低20华氏度。不与自身的多个故障叠加。
- ```IMMOBILIZER``` 阻止发动机启动并使其发出嘟嘟声。
- ```BAD_FUEL_PUMP``` 阻止发动机启动并使其发出咕噜声。
- ```BAD_STARTER``` 阻止发动机启动并使其发出咔嗒声。
- ```DOUBLE_FUEL_CONSUMPTION``` 使发动机的燃料消耗翻倍。不与自身的多个故障叠加。
- ```EXTRA_EXHAUST``` 使发动机排放更多的尾气。不与自身的多个故障叠加。
- ```REDUCE_ENG_POWER``` 使发动机的功率乘以0.6。不与自身的多个故障叠加。
- ```ENG_BACKFIRE``` 使发动机回火，就像它没有马力一样。

Gun fault flags (枪械故障标志):
- ```BLACKPOWDER_FOULING_DAMAGE``` 使枪械随机地受到酸性损伤。
- ```NO_DIRTYING``` 阻止枪械获得`fault_gun_dirt`故障。
- ```JAMMED_GUN``` 停止连射。在下一次射击时增加延迟。
- ```UNLUBRICATED``` 在射击时随机地产生刺耳的噪音，并在发生时造成损伤。
- ```BAD_CYCLING``` 在射击时有16分之一的几率导致枪械无法循环，从而产生`fault_gun_chamber_spent`故障。

