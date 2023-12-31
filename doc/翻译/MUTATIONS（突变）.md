# 变异（Mutations）

## 系统信息（System info）

在《末日余生》中，变异是通过一系列的 EOC 和硬编码检查来实现的。不同的物品 - 通常是专用的变异剂或引物 - 给角色提供特定的维生素，而重复出现的 EOC 将使用这些维生素来使它们发生变异。除了来自辐射等源的不受控制的变异，这些变异完全是随机的，角色通过变异获得的特征完全由它们体内所含有的维生素决定。

在 DDA 的代码中，特征和变异是同一件事。为了避免重复，在本页中这两个术语可以互换使用。

### 诱变剂和引物（Mutagens and primers）

要进行变异，需要两种物质：诱变剂和引物。所有的诱变剂和引物都被视为维生素。

诱变剂是核心营养素，它是启动和维持变异所必需的。从主题上来说，这是刺激角色感染并使其发生变异的东西。它以可摄入的液体形式存在（这种液体有毒，通常不经过进一步提纯就饮用是不明智的），也有可注射的催化剂形式（这种形式更安全，也更强大）。

引物本身并不能引起变异，而是影响玩家获得的变异。可以把诱变剂看作一辆只能在道路上行驶的汽车，而每一种引物都是汽车可以行驶的一条道路。每一种变异类别都有一个相关联的引物维生素，当发生变异时，游戏会沿着存在最多相应引物的类别进行变异。汽车不能在没有道路的情况下行驶，但同时，道路也不能没有汽车。两种营养素都需要才能引起变异。

一个小但重要的注意事项：“液态诱变剂”物品存在于每一个类别中，但这些实际上只是普通诱变剂和该类别引物的混合物。如果你分别使用可注射的诱变剂催化剂和可注射的引物，会发生相同的行为，只不过效果要小得多。

#### Purifier(净化剂)

许多不同的动物都有一个相关的引物类型。人类也不例外；但是，人类引物被称为净化剂。在代码上，它的功能与其他引物相同，但是人类类别中实际定义的突变是特殊的。它们不是你获得和失去的传统特征，而是抽象的，只存在于抵消其他特征的目的。

例如，如果你拥有熊视力突变（具有`EYES`和`VISION`类别），游戏选择虚拟特征人类眼睛进行突变，那么你将失去熊视力特征，而其他什么也不会发生。你从未真正获得人类眼睛特征；它的唯一目的是被游戏*定位*以移除其他特征。引擎会尽一切努力模拟向该特征突变，但在实际赋予角色之前，它会回退。突变逻辑会特意寻找具有冲突条目的人类特征；这样，净化剂总是尝试做一些事情，而不是在你已经有正常身体的情况下向人类皮肤突变，这可能会让你的假设性突变眼睛保持不变。

与其他引物一样，净化剂需要体内正常的突变原才能发挥作用。它本身无法起作用。

### Thresholds(阈值)

每个突变类别都有一个关联的 "threshold" mutation（阈值突变）, 拥有那个阈值突变是获得一个类别中最强大和独特特征所必需的.获得这些阈值突变之一被称为 "crossing the threshold"（跨越阈值），一旦角色跨越了某个类别的阈值，这将是永久性的 - 他们永远无法跨越其他阈值。要做到这一点需要身体内大量的 primer（诱变剂），所以角色在无意中突破阈值的可能性非常小。

因为明显的原因，只有在跨越阈值之后才能获得的特征通常被称为 "post-threshold" mutations（跨阈值后突变）。

### How mutation works (突变原理)

突变系统分为几个步骤。所有时间参考都是游戏时间。

1. 每 30 到 45 分钟，游戏会检查玩家体内是否有 450 或更多的 `mutagen` 维生素。
   - 如果角色没有所需的变异原，什么都不会发生。
   - 否则，可能会发生两种结果：要么角色开始突变，要么什么都不会发生。开始突变的概率等于角色体内的变异原数量，而什么都不做的概率是一个恒定的 2500。然后基于权重选择这些选项之一。因此，对于体内含有 1250 变异原的玩家，相比较的权重将是 1250 开始突变与 2500 什么都不做，或者是 1/3 的机会开始突变。
2. 一旦突变开始，角色会立即发生一次突变，玩家会收到一个独特的消息。然后角色获得不可见的 `Changing`（变化中）特征，这表明他们正在经历周期性的突变。
3. 每隔 1 到 6 小时，游戏会尝试让角色突变。只要角色在效果触发时有足够的变异原，尝试就会继续并重新启动计时器。在尝试时，他们的身体会消耗掉 60 到 140 的变异原，无论尝试是否成功，变异原都会被扣除。
4. 引擎会根据角色体内的 primer（引发剂）尝试让角色突变。
   - 如果角色体内没有引发剂，玩家会收到一个明显的消息，什么都不会发生。发生这种情况时，`Changing` 特征会立即被移除，停止进程。
   - 否则，游戏会选择该类别的一个随机突变。这就是目标突变。
   - 如果角色拥有与目标突变冲突的现有特征，冲突特征将被移除或降级，其他什么都不会发生。否则，玩家将获得那个突变。
   - 每次突变尝试只能进行一步。例如，如果游戏在角色没有美丽相关特征时尝试突变为 Beautiful（美丽）特征，它只会给予他们 Pretty（漂亮）特征，因为 Pretty 是 Beautiful 的先决条件。然而，如果角色拥有 Ugly（丑陋）特征，那么该特征将被移除，其他什么都不会发生。
   - 在突变成功后，从角色体内移除该突变类别的引发剂。这默认为 100，但可以根据特征进行覆盖。
   - 最后，将等于引发剂成本的 Instability（不稳定性）添加到玩家。Instability 在下一节中解释。
5. 当玩家突变为某个特征时，如果他们至少有 2200 与该特征类别相关的引发剂，尝试跨越阈值。游戏会掷一个概率通过阈值，这个概率受到玩家在该类别中突变程度的很大影响。如果检查成功，玩家获得阈值突变并收到独特的消息 - 他们已经 "crossed the threshold"（跨越了阈值）。
6. 从步骤 3 重复，直到角色体内的变异原不足以继续突变。然后会移除 `Changing`（变化中）特征，游戏将再次从步骤 1 开始重复，直到角色摄入足够的变异原再次开始突变。

### Instability and the odds of a good mutation（不稳定性和好的突变的几率）

好的或坏的突变的几率直接由不稳定性决定，不稳定性是一个用维生素跟踪的状态。它代表了长期的基因损伤；一个角色会以 0 不稳定性开始游戏，并且只获得正面或中性的突变，但是如果有足够的不稳定性，他们将几乎只获得负面的突变。

这些几率是根据一个曲线确定的，从 0 不稳定性（默认）到 8000 不稳定性（最大值）：

- 中性突变（既不是负面也不是正面的）总是有资格的。
- 从大约 0 到 800 不稳定性，有 100%的几率获得正面或中性的突变，有 0%的几率获得负面的突变。
- 正面和负面的几率然后快速地倾斜，直到在大约 2800 不稳定性处相遇。在这一点上，正面和负面突变有相等的几率。
- 几率然后逐渐地继续它们当前的趋势，直到达到极限。在 8000 不稳定性的最大值处，有大约 70%的几率选择一个负面的突变，有 30%的几率选择一个正面的突变。和以前一样，无论是选择了正面还是负面的突变，一个中性突变也是可能的。

不稳定性会非常缓慢地自行减少，每天减少 1。特质可以影响这一点；例如，强壮基因特质通过每小时额外减少 1 不稳定性，每天总共减少 25，大大加快了这一速度。基因下降螺旋特质则相反，*增加*不稳定性，速度极快，每分钟 1。

在正常游戏中，不稳定性目前无法以数字形式查看，但玩家在角色表上会看到不稳定性的可见效果。这可以让玩家大致了解角色的不稳定程度，而无需知道确切的数值。

### tl;dr 简而言之

- 人物需要诱变剂和引导剂来变异。诱变剂导致实际的变异，而引导剂决定了变异的类别。二者缺一不可；它们需要同时使用。
- 一旦人物体内有足够的诱变剂，他们就会开始变异，每隔几个小时就会获得一种新的变异，直到他们体内没有足够的诱变剂来继续这样做为止。
- 如果一个人物在变异时体内有大量的某种类型的引导剂，他们可能会突破该引导剂类别的阈值，如果条件合适的话。
- 变异是好是坏的概率由不稳定性决定，不稳定性随着每一次新的变异而增加。变异开始时只有有益或中性的，但是在变得过于不稳定后，很快就会偏向于负面的。
- 人类引导剂叫做净化剂，用来通过向虚拟的“人类”变异靠近来“移除”人物获得的特征，从而抵消其他的变异。

### Further reading and relevant files(更多阅读和相关文件)

`data/json/mutations/changing_eocs.json` - 包含支持突变系统的 EOCs
`data/json/mutations/mutations.json` - 游戏中每种突变的类型定义

# Syntax documentation(语法文档)

## Mutations(突变)

特定突变非常多样化。突变只需要填写几个必填字段，但还有大量可选字段，除此之外还支持 EOCs。

请注意，**所有通过突变获得的新特质必须可净化** - 否则，单元测试将失败。要使突变可净化，只需将其添加到现有适当虚拟突变的`cancels`字段中，或者定义其`types`，如果您希望它与某些其他突变互斥。

### Example(例子)

```json
{
  "id": "LIGHTEATER",                         // 唯一ID。
  "name": "Optimist (乐观主义者)",             // 游戏中显示的名称。
  "points": 2,                                // 特质的点数成本。正值消耗点数，负值给予点数。
  "vitamin_cost"                              // 获得此特质的类别维生素成本（默认值：100）
  "visibility": 0,                            // 特质在NPC互动中的可见性（默认值：0）。
  "ugliness": 0,                              // 特质在NPC互动中的丑陋程度（默认值：0）。
  "cut_dmg_bonus": 3,                         // 无武器切割伤害加成（默认值：0）。
  "pierce_dmg_bonus": 3,                      // 无武器穿刺伤害加成（默认值：0.0）。
  "bash_dmg_bonus": 3,                        // 无武器破坏伤害加成（默认值：0）。
  "butchering_quality": 4,                    // 这种变异的屠宰质量（默认值：0）。
  "rand_cut_bonus": { "min": 2, "max": 3 },   // 无武器切割伤害的随机加成，介于最小值和最大值之间。
  "rand_bash_bonus": { "min": 2, "max": 3 },  // 无武器破坏伤害的随机加成，介于最小值和最大值之间。
  "bodytemp_modifiers": [ 100, 150 ],         // 附加体温单位的范围（这些单位在'weather.h'中有描述。如果已经过热，使用第一个值；如果没有，使用第二个值。
  "bodytemp_sleep": 50,                       // 睡眠时应用的额外体温单位。
  "initial_ma_styles": [ "style_crane" ],     // （可选）游戏开始时玩家可以选择的武术风格ID列表。
  "mixed_effect": false,                      // 特质是否具有正负效果。这纯粹是声明性的，仅用于用户界面（默认值：false）。
  "description": "Nothing gets you down! (没有什么能让你沮丧！)",    // 游戏内描述。
  "starting_trait": true,                     // 可在角色创建时选择（默认值：false）。
  "valid": false,                             // 可在游戏内突变（默认值：true）。
  "purifiable": false,                        // 设置是否可以纯化（默认值：true）。
  "profession": true,                         // 特质是起始职业的特殊特质（默认值：false）。
  "debug": false,                             // 特质用于调试目的（默认值：false）。
  "player_display": true,                     // 特质在`@`玩家显示菜单和突变屏幕中显示。
  "vanity": false,                            // 特质可以随时免费更改，如头发、眼睛颜色和肤色。
  "variants": [                               // 这种突变的美容变种。
    {
      "id": "red",                                        // 字符串（必填）：变种的ID。
      "name": { "str": "Glass-Half-Full Optimist (半杯水乐观主义者)" },      // 变种名称替代突变名称显示。
      "description": "You think the glass is half-full. (你认为杯子里的水是半满的。)", // 变种描述替代突变描述显示，除非append_desc为true。
      "apped_desc": false,                                // 如果为true，附加描述，而不是替换。
      "weight": 1                                         // 用于在突变时随机选择变种。选择的几率是weight/所有权重之和。如果没有指定权重或权重为0，将不会选择此变种。
    }
  ],
{
  "category": [ "MUTCAT_BIRD", "MUTCAT_INSECT" ],         // 包含此变异的类别。
      // prereqs 和 prereqs2 指定当前变异的先决条件。
      // 两者都是可选的，但如果指定了 prereqs2，则必须也指定 prereqs。
      // 下面的示例意味着：( "SLOWREADER" 或 "ILLITERATE") 且 ("CEPH_EYES" 或 "LIZ_EYE")。
  "prereqs": [ "SLOWREADER", "ILLITERATE" ],
  "prereqs2": [ "CEPH_EYES", "LIZ_EYE" ],
  "threshreq": [ "THRESH_SPIDER" ],           // 变异可能需要的临界值。
  "cancels": [ "ROT1", "ROT2", "ROT3" ],      // 变异时取消这些变异。
  "changes_to": [ "FASTHEALER2" ],            // 变异进一步时可改变为这些变异。
  "leads_to": [ ],                            // 添加到此变异的变异。
  "passive_mods": {                           // 以列出的值增加统计数据。负数表示统计减少。
    "per_mod": 1,                             // 可能的值：per_mod、str_mod、dex_mod、int_mod
    "str_mod": 2
  },
  "wet_protection": [ { "part": "head", "good": 1 } ],    // 特定部位的防水保护。可能的值："neutral/good/ignored"。好提高 pos 并取消 neg，neut 取消 neg，ignored 取消两者。
  "vitamin_rates": [ [ "vitC", -1200 ] ],     // 你消耗多少额外的维生素，每隔这么多秒一个点。负值表示生成。
  "vitamins_absorb_multi": [                  // 基于材料的维生素吸收倍数。"all" 包括每种材料。支持多种材料。
    [ "flesh", [ [ "vitA", 0 ], [ "vitB", 0 ], [ "vitC", 0 ], [ "calcium", 0 ], [ "iron", 0 ] ] ],
    [ "all", [ [ "vitA", 2 ], [ "vitB", 2 ], [ "vitC", 2 ], [ "calcium", 2 ], [ "iron", 2 ] ] ]
  ],
  "craft_skill_bonus": [ [ "electronics", -2 ], [ "tailor", -2 ], [ "mechanics", -2 ] ], // 变异影响的技能及其加成。加成可以是负数，加成为 4 相当于 1 个完整技能等级。
  "restricts_gear": [ "torso" ],              // 此变异限制的身体部位列表。
  "remove_rigid": [ "torso" ],                // 变异时从身体部位列表中删除任何刚性装甲。任何集成装甲物品都被视为直接
  "allow_soft_gear": true,                    // 如果有一个 'restricts_gear' 列表，此设置表示位置是否仍允许由软材料制成的物品（只需其中一种类型为软即可被视为软）（默认：false）。
  "destroys_gear": true,                      // 如果为 true，则在变异为 'restricts_gear' 位置时销毁装备（默认：false）。
  "encumbrance_always": [                     // 向选定的身体部位添加这么多负重。
    [ "arm_l", 20 ],
    [ "arm_r", 20 ]
  ],
  "encumbrance_covered": [                    // 向选定的身体部位添加这么多负重，但只有在部位被非-OVERSIZE 穿戴设备覆盖时才有效。
    [ "hand_l", 50 ],
    [ "hand_r", 50 ]
  ],
  "encumbrance_multiplier_always": {          // 如果身体部位由于变异而导致负重，将该负重惩罚乘以此倍数。
    "arm_l": 0.75,                            // 注意：不影响衣物负重。
    "arm_r": 0.75
  },
  "armor": [                                  // 保护选定身体部位这么多。抗性使用下面的 `PART RESISTANCE` 语法。
    {
      "part_types": [ "arm", "leg" ],         // 为上面选定的身体部位类型提供的抗性。
      "bash": 2,
      "electric": 5
    },
    {
      "parts": [ "arm_l", "arm_r" ],          // 用以下值覆盖这些特定身体部位的上述设置。
      "bash": 1,
      "cut": 2
    }
  ],
  "stealth_modifier": 0,                      // 从玩家的可见范围中减去的百分比，最高为60。负值有效，但由于视觉范围的限制，效果不佳。
  "active": true,                             // 当设置为true时，突变是一种需要玩家激活的主动突变（默认值：false）。
  "starts_active": true,                      // 当值为true时，这个'active'突变开始处于活跃状态（默认值：false，需要'active'）。
  "cost": 8,                                  // 激活此突变的成本。需要将饥饿、口渴或疲劳值之一设置为true（默认值：0）。
  "time": 100,                                // 设置在成本再次支付之前需要经过的时间单位（回合 * 当前玩家速度）。必须大于1才能产生任何效果（默认值：0）。
  "kcal": true,                               // 如果为true，激活的突变消耗`cost`千卡（默认值：false）。
  "thirst": true,                             // 如果为true，激活的突变使口渴值增加成本值（默认值：false）。
  "fatigue": true,                            // 如果为true，激活的突变使疲劳值增加成本值（默认值：false）。
  "scent_modifier": 0.0,                      // 影响你气味强度的浮点数（默认值：1.0）。
  "scent_intensity": 800,                     // 影响你当前气味趋向的目标气味的整数（默认值：500）。
  "scent_mask": -200,                         // 添加到你的目标气味值的整数（默认值：0）。
  "scent_type": "sc_flower",                  // 你散发的气味类型，如在scent_types.json中定义（默认值：空）。
  "consume_time_modifier": 1.0,               // 吃或喝的时间乘以此数值。
  "fat_to_max_hp": 1.0,                       // 每单位BMI高于character_weight_category::normal，hp_max增加的值（默认值：0.0）。
  "healthy_rate": 0.0,                        // 你的健康程度可以改变的速度。如果设为0，永远不会改变（默认值：1.0）。
  "weakness_to_water": 5,                     // 水对你造成的伤害，负值表示治愈（默认值：0）。
  "ignored_by": [ "ZOMBIE" ],                 // 忽略你的物种列表（默认值：空）。
  "anger_relations": [ [ "MARSHMALLOW", 20 ], [ "GUMMY", 5 ], [ "CHEWGUM", 20 ] ], // 你激怒的物种列表以及激怒程度，负值表示平静（默认值：空）。
  "can_only_eat": [ "junk" ],                 // 可食用材料列表（默认值：空）。
  "can_only_heal_with": [ "bandage" ],        // 你被限制使用的`MED`列表，包括突变剂、血清、阿司匹林、绷带等（默认值：空）。
  "can_heal_with": [ "caramel_ointement" ],   // 只对你有效的`MED`列表，对其他人无效。请参见物品的`CANT_HEAL_EVERYONE`标志（默认值：空）。
  "allowed_category": [ "ALPHA" ],            // 你可以突变成的类别列表（默认值：空）。
  "no_cbm_on_bp": [ "torso", "head", "eyes", "mouth", "arm_l" ],  // 无法接收CBM的身体部位列表（默认值：空）。
  "lumination": [ [ "head",20 ], [ "arm_l", 10 ] ],              // 发光身体部位及发光强度的列表（默认值：空）。
  "metabolism_modifier": 0.333,               // 额外新陈代谢速率乘数 (1.0 翻倍, -0.5 减半)。
  "fatigue_modifier": 0.5,                    // 额外疲劳速率乘数 (1.0 翻倍使用, -0.5 减半)。
  "fatigue_regen_modifier": 0.333,            // 休息时疲劳和睡眠剥夺减少速率的修正因子。
  "stamina_regen_modifier": 0.1,              // 以这个比例增加耐力恢复 (1.0 是正常恢复的 100% )。
  "cardio_multiplier": 1.5,                   // 以这个数额乘以总心肺健康。
  "healing_multiplier": 0.5,                  // PLAYER/NPC_HEALING_RATE 的乘数。
  "healing_awake": 1.0,                       // 清醒时使用的治疗速率百分比。
  "mending_modifier": 1.2,                    // 肢体痊愈速度的乘数 (1.2 是 20% 更快)。
  "attackcost_modifier": 0.9,                 // 攻击消耗修正因子 (0.9 是 10% 更快, 1.1 是 10% 更慢)。
  "movecost_modifier": 0.9,                   // 整体移动速度消耗修正因子 (0.9 是 10% 更快, 1.1 是 10% 更慢)。
  "movecost_flatground_modifier": 0.9,        // 平坦地形上无障碍物时的移动速度消耗修正因子 (0.9 是 10% 更快, 1.1 是 10% 更慢)。
  "movecost_obstacle_modifier": 0.9,          // 崎岖不平地形上的移动速度消耗修正因子 (0.9 是 10% 更快, 1.1 是 10% 更慢)。
  "movecost_swim_modifier": 0.9,              // 游泳速度消耗修正因子 (0.9 是 10% 更快, 1.1 是 10% 更慢)。
  "weight_capacity_modifier": 0.9,            // 携带能力修正因子 (0.9 是 10% 减少, 1.1 是 10% 增加)。
  "social_modifiers": { "persuade": -10 },    // 社交修正因子。可以是：威吓、撒谎、劝说。
  "spells_learned": [ [ "spell_slime_spray", 1 ] ], // 学到的法术以及在获得特征/突变后的等级。
  "transform": {
    "target": "BIOLUM1",                      // 这个突变将转变成的 trait_id 。
    "msg_transform": "You turn your photophore OFF.(你关闭了你的发光器)", // 变形时显示的信息
    "active": false,                          // 如果为真，突变在激活时将开始供电(打开)。
    "moves": 100,                              // 每次激活的移动消耗 (默认: 0)。
    "safe": false                              // 如果为真，变形将使用正常突变过程规则 - 删除冲突特征，需要阈值（但不使用任何维生素或导致不稳定）
  },
  "triggers": [                               // 触发器子列表的列表，所有子列表必须为真才能激活突变。
    [                                         // 触发器子列表：子列表中至少有一个触发器必须为真才能使子列表为真。
    {
    "condition": { "compare_num": [ { "u_val": "morale" }, "<", { "const": -50 } ] },               // 对话条件 (参见 NPCs.md)。
    "msg_on": { "text": "Everything is terrible and this makes you so ANGRY! (一切都糟糕透了，这让你如此愤怒！)", "rating": "mixed" }  // 触发激活时显示的消息。
  }
    ],
    [
  {
    "condition": {                        // 对话条件 (参见 NPCs.md)。
      "or": [
        { "compare_num": [ "hour", "<", { "const": 2 } ] },
        { "compare_num": [ "hour", ">", { "const": 20 } ] }
      ]
    },
    "msg_on": { "text": "Everything is terrible and this makes you so ANGRY! (一切都糟糕透了，这让你如此愤怒！)", "rating": "mixed" },// 触发激活时显示的消息。
    "msg_off": { "text": "Your glow fades. (你的光芒逐渐消失。)" }                                                      // 触发停用特征时显示的消息。
  }    ]
  ],
  "activated_is_setup": true,                 // 如果为真，则以下激活的 EOC 运行，然后突变在每个回合上进行处理。如果为假，则下面的 "activated_eocs" 将运行，然后模组将关闭。
  "activated_eocs": [ "eoc_id_1" ],           // 当此突变成功激活时，尝试激活的 effect_on_conditions 列表。
  "processed_eocs": [ "eoc_id_1" ],           // 每次（上面定义的）时间单位尝试激活的 effect_on_conditions 列表。时间为 0 表示每回合处理。对于可激活突变，在突变处于激活状态时处理；对于不可激活突变，始终处理。
  "deactivated_eocs": [ "eoc_id_1" ],         // 当此突变成功停用时，尝试激活的 effect_on_conditions 列表。
  "enchantments": [ "ench_id_1" ],            // 由此突变授予的附魔列表。可以是 ID 或附魔的内联定义（见 MAGIC.md）。
  "temperature_speed_modifier": 0.5,          // 如果非零，则在寒冷时变慢，在炎热时变快（1.0 使每摄氏度高于或低于 65 F 时速度 +/-1%）。
  "pain_modifier": 5,                         // 疼痛接收量的固定增加（对于正数）\ 减少（对于负数）。减少可以一直降到 0。在疼痛附魔之后应用。（因此，如果你有痛苦抗性特质以及 5 点固定疼痛减少，并且收到 20 点疼痛，你会获得 20*(1-0.25)-5=10 疼痛）
  "mana_modifier": 100,                       // 法力池总量的正负变化。
  "flags": [ "UNARMED_BONUS" ],               // 由突变授予的 flag_IDs 和 json_flag_IDs 列表。注意：可以设置 trait_IDs 并且不会产生错误，但它们实际上不是 "活动" 的。
  "moncams": [ [ "mon_player_blob", 16 ] ]    // 怪物摄像头，能够使用列表中的友好怪物作为额外视野来源。最大视距等于怪物的白天视野。该数字指定它可以将视野“传输”给角色的范围。}

```

### 必填字段 (Mandatory Fields)

这些字段对于每个变异对象都是必填的，如果某个特征缺少任何一个字段，游戏将无法加载。

| 标识符        | 描述                                                               |
| ------------- | ------------------------------------------------------------------ |
| `type`        | 必须为 `"mutation"`。                                              |
| `id`          | ID 字符串。变异不能具有相同的 ID：每个变异都必须是唯一的。         |
| `name`        | 变异在角色表中显示的名称。                                         |
| `description` | 对变异的人类可读描述。                                             |
| `points`      | 该特征的点数成本。正值消耗点数，而负值增加点数。0 是一个有效选项。 |

### 补充字段 (Supplementary Fields)

这些字段是可选的，但在变异及其代码中经常使用，因此首先在此处突出显示。

| 标识符 (Identifier) | 默认值 (Default) | 描述 (Description)                                                                                                                                                                                      |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `category`          | 无 (None)        | 表示变异类别的字符串 ID 数组。这定义了特征被认为是哪些类别的一部分（如 `ALPHA`，`BEAST`，`CEPHALOPOD` 等），因此决定了玩家需要使用哪些引物来突变它们。                                                  |
| `types`             | 无 (None)        | 该变异可以归类的类型列表。具有某种类型的每个变异与具有该类型的其他变异互斥；如果特征定义了 `EXAMPLE` 类型，那么角色上不能存在具有该类型的其他特征，而且如果能够这样做，突变成这样的特征将删除现有特征。 |
| `prereqs`           | 无 (None)        | 可能是获取此特征所需的变异 ID 数组。此列表中只需要存在一个选项。                                                                                                                                        |
| `prereqs2`          | 无 (None)        | 与 `prereqs` 相同，并且如果未定义 `prereqs` 将抛出错误。这用于需要多个特征来获取另一个特征；为了能够获得特征，角色必须同时拥有 `prereqs` 和 `prereqs2` 中的一个选项。                                   |
| `threshreq`         | 无 (None)        | 这是门槛变异专用的先决条件槽，功能与 `prereq` 和 `prereq2` 相同。                                                                                                                                       |
| `cancels`           | 无 (None)        | 在此数组中定义的特征 ID 将在特征突变时从角色上强制移除。                                                                                                                                                |
| `changes_to`        | 无 (None)        | 用于定义具有明确定义步骤的变异线。此特征可以进一步突变为此列表中定义的任何其他特征。                                                                                                                    |
| `leads_to`          | 无 (None)        | 在此特征之上添加的突变，而不会删除它。实际上是 `prereqs` 标签的逆向。                                                                                                                                   |
| `starting_trait`    | false            | 如果为 true，此特征可以在角色创建过程中选择。                                                                                                                                                           |
| `valid`             | true             | 该特征是否可以通过突变获得。无效特征在创建角色时仍然可以获得。                                                                                                                                          |
| `purifiable`        | true             | 该特征是否可以移除。如果为 false，该特征无法通过任何手段移除。                                                                                                                                          |
| `player_display`    | true             | 如果为 false，此特征为不可见，并且不会出现在消息或角色表中。                                                                                                                                            |
| `mixed_effect`      | false            | 该特征是否具有正负效果。仅用于 UI；混合突变将以紫色文字显示，而不是绿色、黄色或红色（通常由点数成本自动确定）。                                                                                         |
| `vanity`            | false            | 该特征纯粹是为了美观，可以随时更改。这是用于诸如皮肤颜色、眼睛颜色、头发颜色等的东西。                                                                                                                  |
| `debug`             | false            | 将此特征标识为在正常游戏中永远不应获得的调试特征。调试特征在角色表上将具有鲜明的青色。                                                                                                                  |
| `visibility`        | 0                | 在检查 NPC 时，此变异在 NPC 上的可见度，范围在 0 到 10 之间。较高的数字更容易被注意到。一些特征可能会自然地显眼，而其他特征可能仅在特定情况下才显眼。例如，具有发光眼睛的特征在黑暗中可能会更加明显。   |

### 可选字段 (Optional Fields)

有许多可选字段用于变异，让它们可以实现各种各样的功能。您可以在上面查看它们的文档。

### EOC 详细信息 (EOC details)

变异支持在激活、停用和处理过程中使用 EOC。同样，对于这些操作，EOC 可以访问上下文变量 `this`，它是变异本身的 ID。

### 示例特征：Example Sleep（示例睡眠）

```json
{
  "type": "mutation",
  "id": "EXAMPLE_SLEEP",
  "name": { "str": "Example Sleep" },
  "points": 1,
  "description": "This is an example trait that makes it easier for the character to fall asleep at all times.  It can't be obtained through mutations; it only appears in character creation.",
  "changes_to": ["EASYSLEEPER2"],
  "valid": false,
  "starting_trait": true,
  "enchantments": [
    { "condition": "ALWAYS", "values": [{ "value": "SLEEPY", "add": 24 }] }
  ]
}
```

这是一个 JSON 格式的示例特征，名为 "Example Sleep（示例睡眠）"。这个特征的作用是让角色在任何时候都更容易入睡。请注意，这个特征不能通过游戏中的变异获得，而只能在角色创建时选择。

这个特征的属性如下：

- `"points": 1` 表示它在角色创建时需要消耗 1 个点数。
- `"changes_to": [ "EASYSLEEPER2" ]` 意味着，当该特征发生变化时，它会变为 "EASYSLEEPER2"。
- `"valid": false` 表示这个特征本身无法通过变异获得。
- `"starting_trait": true` 说明这是一个可在角色创建时选择的起始特征。
- `"enchantments": [ { "condition": "ALWAYS", "values": [ { "value": "SLEEPY", "add": 24 } ] } ]` 描述了该特征所带来的附加效果。在这里，它表示特征具有一个始终生效的附魔效果，使角色的 "SLEEPY" 值增加 24，因此角色更容易入睡。

## 变异类别 (Mutation Categories)

变异类别是一组相互关联的变异，作为一个整体为突变角色建立全新的身份。类别可以并且通常具有它们自己的 "特色" 变异剂，其属性在类别定义本身中定义。一种称为 "变异血清" 或 "IV 变异剂" 的第二种变异剂需要触发 "临界变异"，这会导致角色发生不可逆的改变。

| 标识符                  | 描述                                                                                                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | 唯一 ID。必须是一个连续的单词，必要时使用下划线。                                                                                                                                        |
| `name`                  | 变异类别的易读名称。                                                                                                                                                                     |
| `threshold_mut`         | 一个特殊的变异，标志着角色的身份因他们所经历的变异程度而发生变化的点。                                                                                                                   |
| `threshold_min`         | 角色体内需要有多少引发剂才能尝试突破临界点。默认值 2200。                                                                                                                                |
| `mutagen_message`       | 当玩家在此类别中发生变异时显示的信息。                                                                                                                                                   |
| `memorial_message`      | 当角色越过相关变异阈值时显示的纪念信息。                                                                                                                                                 |
| `vitamin`               | 该类别引发剂的维生素 id。角色的维生素水平将作为选择尝试向哪个类别变异的权重，并在成功变异后根据特征的变异剂成本减少。                                                                    |
| `base_removal_chance`   | 整数，本类别变异移除与之冲突的基本（起始）特征的百分比几率，根据 `Character::mutate_towards` 尝试次数滚动。默认值 100%。移除的基本特征将**不再**被视为基本特征，即使你后来重新获得它们。 |
| `base_removal_cost_mul` | 浮点数，移除取消起始特征的特征引发剂成本的乘数，降低到 0.0，只要放弃了一个起始特征，变异就是免费的。默认值 3.0，用于类似人类的类别，随着类别变得更加非人类而降低。                       |
| `wip`                   | 一个标志，表示变异类别尚未完成，不应对其进行一致性测试。请参阅 tests/mutation_test.cpp。                                                                                                 |
| `skip_test`             | 如果为真，此变异类别将在一致性测试中被跳过；只有在你知道自己在做什么的情况下才应使用此功能。请参阅 tests/mutation_test.cpp。                                                             |

## 特性转换 (Trait Migrations)

变异转换可用于将原来的变异平稳地转移到一项技能、另一个变异（可能是特定的变种）或者干脆删除它。

```json
1. 第一个对象：
   {
     "type": "TRAIT_MIGRATION",
     "id": "dead_trait1",
     "trait": "new_trait",
     "variant": "correct_variant"
   }
   这个对象表示将一个旧的特征（`dead_trait1`）替换为一个新的特征（`new_trait`），同时指定了一个变体（`correct_variant`）以应用这个新特征。
2. 第二个对象：
   {
     "type": "TRAIT_MIGRATION",
     "id": "trait_now_prof",
     "proficiency": "prof_old_trait"
   }
   这个对象表示将一个旧的特征（`trait_now_prof`）转换为一个熟练度（`prof_old_trait`）。这通常用于游戏中的特征升级或调整。
3. 第三个对象：
   {
     "type": "TRAIT_MIGRATION",
     "id": "deleted_trait",
     "remove": true
   }
   这个对象表示完全删除一个特征（`deleted_trait`）。这可能是因为这个特征已经被移除或者被认为是不需要的。


| 标识符        | 描述                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| `type`        | 必需。字符串。必须是 `"TRAIT_MIGRATION"`                                                 |
| `id`          | 必需。字符串。已删除特性的 Id。                                                          |
| `trait`       | 可选\*。字符串。此特性正在转换为的特性的 Id。                                            |
| `variant`     | 可选。字符串。只有在指定 `trait` 时才能指定。`trait` 的变种的 Id，此变异将设置为此变种。 |
| `proficiency` | 可选\*。字符串。将替换此特性的技能的 Id。                                                |
| `remove`      | 可选\*。布尔值。如果未指定 `trait` 或 `variant`，则必须为 true。                         |

\*必须指定这三者之一。
```
