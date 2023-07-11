# Item spawn system(物品生成系统)

## Collection or Distribution(##集合或分配)

在集合中，每个条目都独立于其他条目选取。因此，与每个条目相关的概率是绝对的，范围在0到1之间。在json文件中，它以百分比的形式实现（取值范围为0到100）。

概率为0（或负数）意味着该条目永远不会被选取；概率为100%意味着它总是被选取。默认值是100，因为它是最有用的值。默认值为0将意味着该条目可以被移除。

分布是一个加权列表。从中选择一个条目。每个条目的概率相对于其他条目的概率而言。概率为0（或负数）意味着它永远不会被选取。

例如：假设物品A的概率为30，物品B的概率为20。那么A和B的4个组合的概率如下：


| 组合             | 收集       | 分配       |
| ---------------  | ---------- | --------- |
| 既不是 A 也不是 B | 56%        | 0%        |
| 仅 A             | 24%        | 60%       |
| 仅 B             | 14%        | 40%       |
| A 和 B 都有      | 6%         | 0%        |


## Format(##格式)

格式如下：

```json
  {
    "type": "item_group",
    "subtype": "<subtype>",
    "id": "<some name>",
    "ammo": <some number>,
    "magazine": <some number>,
    "container-item": "<container-item-id>",
    "on_overflow": "<discard|spill>",
    "entries": [ ... ]
  }
```

`subtype` 是可选的。它可以是 `collection` 或 `distribution`。如果未指定，则默认为 `old`，表示此物品组使用旧格式（基本上是一个分布）。

`container-item` 会导致组中的所有物品生成在一个容器中，而不是作为单独的顶级物品。如果物品可能无法全部放入容器中，您必须通过将 `on_overflow` 设置为 `discard`（随机丢弃物品直到适合容器）或 `spill`（多余物品与容器一起生成）来指定如何处理溢出物品。

当使用`ammo`或`magazine`时，需要注意一些[注意事项](#ammo-and-magazines)。

### Entries array(##条目数组)

`entries` 列表包含多个条目，每个条目可以是以下四种格式之一：

1. Item(物品)
    ```json
    { "item": "<item-id>", ... }
    ```

2. Group(组)
    ``` json
    { "group": "<group-id>", ... }
    ```

3. Distribution(分配)
    ```json
    { "distribution": [
        "一个包含多个条目的数组，每个条目可以匹配以下 4 种格式之一"
    ] }
    ```

4. Collection(集合)
    ```json
    { "collection": [
        "一个包含多个条目的数组，每个条目可以匹配以下 4 种格式之一"
    ] }
    ```

游戏根据`item`或`group`值的存在来决定条目是表示物品还是对另一个物品组的引用。

每个条目可以有更多的值（如上所示的...）。它们允许进一步指定物品的属性：

```json
"damage": <number>|<array>,
"damage-min": <number>,
"damage-max": <number>,
"count": <number>|<array>,
"count-min": <number>,
"count-max": <number>,
"charges": <number>|<array>,
"charges-min": <number>,
"charges-max": <number>,
"contents-item": "<item-id>" (可以是字符串或字符串数组),
"contents-group": "<group-id>" (可以是字符串或字符串数组),
"ammo-item": "<ammo-item-id>",
"ammo-group": "<group-id>",
"container-group": "<group-id>",
"sealed": <boolean>
"variant": <string>
"artifact": <object>
"event": <string>
```
这段内容描述了一些属性和值的格式。以下是对每个属性的解释：

- "damage": 表示伤害值，可以是一个数字或者一个数字数组。
- "damage-min": 表示最小伤害值。
- "damage-max": 表示最大伤害值。
- "count": 表示数量，可以是一个数字或者一个数字数组。
- "count-min": 表示最小数量。
- "count-max": 表示最大数量。
- "charges": 表示充电量，可以是一个数字或者一个数字数组。
- "charges-min": 表示最小充电量。
- "charges-max": 表示最大充电量。
- "contents-item": 表示容器中的物品ID，可以是一个字符串或者一个字符串数组。
- "contents-group": 表示容器中的物品组ID，可以是一个字符串或者一个字符串数组。
- "ammo-item": 表示弹药的物品ID。
- "ammo-group": 表示弹药的物品组ID。
- "container-group": 表示容器的组ID。
- "sealed": 表示容器是否密封，可以是一个布尔值。
- "variant": 表示变体的字符串。
- "artifact": 表示神器的对象。
- "event": 表示事件的字符串。

`contents`作为创建物品的内容添加。不检查它们是否可以放入物品中。这允许水中包含书，书中包含钢框架，钢框架中包含尸体。

`count`使物品重复生成，每次都创建一个新的物品。

`charges`：仅设置最小值而不设置最大值将使游戏根据容器或弹药/弹夹容量计算最大充电量。将最大值设置得太高将减少到最大容量。如果没有设置最小值，当设置了最大值时，将其设置为0。

`sealed`：如果为`true`，则物品生成时容器将被密封。默认为`true`。

`variant`：此物品的有效`itype`变体ID。

`event`：对`holiday`枚举中的节日的引用。如果指定了，则条目只在指定的真实节日期间生成。这与季节性标题屏幕的工作方式相同，其中节日与当前系统时间进行比较。如果节日匹配，则物品的生成概率取自`prob`字段。否则，生成概率为0。

当前可能的值有：
- "none"（不基于事件。与省略 "event" 字段相同。）
- "new_year"（新年）
- "easter"（复活节）
- "independence_day"（独立日）
- "halloween"（万圣节）
- "thanksgiving"（感恩节）
- "christmas"（圣诞节）

`artifact`：这个对象确定了由该条目生成的物品或组将成为一件神器。以下是一个示例：
```json
"artifact": { "procgen_id": "cult", "rules": { "power_level": 1000, "max_attributes": 5, "max_negative_power": -2000 } }
```
`procgen_id` 直接关联到 `relic_procgen_data` 对象的 id。`rules` 对象有三个部分。第一个是 `power_level`，它是生成的神器的目标能力级别；神器的能力级别是所有部分的能力级别之和。第二个是 `max_negative_power`，它是仅考虑部分的负能力级别之和。第三个是 `max_attributes`，它是部分的数量。

```json
"damage-min": 0,
"damage-max": 3,
"count": 4
"charges": [ 10, 100 ]
```
这段内容描述了一个包含以下信息的数据结构：

- "damage-min": 0，表示最低伤害为0。
- "damage-max": 3，表示最大伤害为3。
- "count": 4，表示物品的数量为4。
- "charges": [ 10, 100 ]，表示该物品具有2个充电状态，分别为10和100。

这个数据结构可能用于描述一个游戏中的武器或技能的属性。最低伤害和最大伤害参数定义了该物品的伤害范围。物品的数量表示该物品存在的个数。而充电状态列表显示了该物品的可用充电状态，可能表示该物品可以使用的能量或力量级别。


这将创建4个物品；它们可以具有不同的伤害等级，因为伤害值是为每个物品单独随机生成的。每个物品的弹药（也称为ammo）的数量在10到100之间（包括10和100）；如果该物品需要弹夹才能装弹药，这将由系统为您处理。对于数量/计数/伤害来说，使用一个包含2个元素的数组等同于明确地写出最小值和最大值。换句话说，`"count": [a,b]`与`"count-min": a, "count-max": b`是相同的。

容器被检查，物品被放入容器中，并且物品的弹药数量被限制/增加到与容器的大小相匹配。


### Ammo and Magazines (###弹药和弹夹)

以下是使物品生成时带有/不带有弹药/弹夹的几种方法（注意，在条目数组中可以指定`ammo-item`以使用非默认的弹药类型）：

* 为整个物品组指定弹药/弹夹概率（在第2节中介绍）。
  `ammo`指定条目生成完全装载的百分比几率（如果需要弹夹，系统会自动添加）。
  `magazine`指定条目生成带有弹夹的百分比几率。
  如果未指定，默认值为0。

  请注意，`ammo`和`magazine`仅适用于工具、枪支和弹夹。此外，它们不适用于明确指定生成多少弹药（充电量）的工具，或者在其JSON物品定义中指定了随机数量或固定的非零初始充电量的工具。

  如果您的物品组中有任何其他物品组的引用，则会忽略它们的弹药/弹夹概率，而使用您指定的概率。

* 在条目数组中使用`charges`、`charges-min`或`charges-max`。如果需要，系统会为您添加一个默认的弹夹。

## 快捷方式

这个：

```json
"items": [ "<id-1>", [ "<id-2>", 10 ] ]
```

意味着与此相同：

```json
"entries": [ { "item": "<id-1>" }, { "item": "<id-2>", "prob": 10 } ]
```

换句话说：单个字符串表示物品id；一个数组（必须包含一个字符串和一个数字）表示物品id和概率。

这对于组也是如此：

```json
"groups": [ "<id-1>", [ "<id-2>", 10 ] ]
```

这种格式不支持创建的物品的其他属性 - 概率仅对集合条目是可选的！

如果这些成员存在，"entries", "items" 和 "groups" 的内容都会被添加。这将使物品 `<id-1>` 在物品组中出现两次：

```json
  {
    "items": [ "<id-1>" ],
    "entries": [ { "item": "<id-1>" } ]
  }
```

另一个例子：组 "milk" 生成一个容器（从 milk_containers 中获取），其中包含牛奶（容器能容纳的最大量，因为没有定义 charges 值）。

```json
  {
    "type" : "item_group",
    "id": "milk_containers",
    "subtype": "distribution",
    "items": [
      "bottle_plastic", "bottle_glass", "flask_glass",
      "jar_glass_sealed", "jar_3l_glass_sealed", "flask_hip", "55gal_drum"
    ]
  },
  {
    "type" : "item_group",
    "id": "milk",
    "subtype": "distribution",
    "entries": [
      { "item": "milk", "container-group": "milk_containers" }
    ]
  },
```

## 添加至物品组 (Adding to item groups)

Mods 可以通过指定具有相同 id 的组，从先前的组中复制 (`"copy-from": group_id`)，并将添加的物品包含在一个 `extend` 块中，如下所示：
```json
  {
    "type" : "item_group",
    "id": "milk_containers",
    "copy-from": "milk_containers",
    "subtype": "distribution",
    "extend": {
      "items": [
        "bottle_plastic", "bottle_glass", "flask_glass",
        "jar_glass_sealed", "jar_3l_glass_sealed", "flask_hip", "55gal_drum"
      ]
    }
  },
  {
    "type" : "item_group",
    "id": "milk",
    "copy-from": "milk",
    "subtype": "distribution",
    "extend": {
      "entries": [
        { "item": "milk", "container-group": "milk_containers" }
      ]
    }
  },
```

## Inlined item groups (内联物品组)

在某些地方，可以直接定义一个物品组，而不是给出组的 id。这个组在其他地方无法引用 - 它没有可见的 id（内部具有一个不具体/随机的 id）。当该组非常特定于使用的地方，并且不会在其他任何地方出现时，这最有用。

例如：怪物死亡掉落（`MONSTER` 对象中的 `death_drops` 项，参见 [JSON_INFO.md ↗](https://github.com/CleverRaven/Cataclysm-DDA/blob/master/doc/JSON_INFO.md)）可以这样做。如果怪物非常特殊（例如一个特殊的机器人，一个独特的末日怪物），那么死亡时生成的物品（以该形式）不会出现在任何其他组中。

因此，这段代码：
```json
  {
    "type": "item_group",
    "id": "specific_group_id",
    "subtype": "distribution",
    "items": [ "a", "b" ]
  },
  {
    "death_drops": "specific_group_id"
  }
```

等同于：
```json
  {
    "death_drops": {
      "subtype": "distribution",
      "items": [ "a", "b" ]
    }
  }
```

内联组的读取方式与其他组一样，可以使用上述所有属性。它的 `type` 和 `id` 成员总是被忽略。

除了完整的 JSON 对象外，还可以编写 JSON 数组。将使用默认子类型，并像 "entries" 数组（参见上文）一样读取数组。该数组的每个条目必须是一个 JSON 对象。示例：

```json
  {
    "death_drops": [
      { "item": "rag", "damage": 2 }, { "item": "bowling_ball" }
    ]
  }
```

----

### 注释 (Notes)

#### 测试 (Testing)

您可以在游戏中测试您的物品组：

1. 加载游戏并调用调试菜单
    > *提示*：如果一个键没有绑定到调试菜单，或者您忘记了它，使用 <kbd>ESC</kbd> > <kbd>1</kbd>。

2. 选择 "Test Item Group"（测试物品组）。

3. 选择您想要调试的物品组。

    游戏将在该组中生成物品 100 次并计算生成的物品。然后它们将按照出现的频率显示。

    > *提示*：您可以使用 <kbd>/</kbd> 在调试菜单中过滤任何内容。

您不应将物品添加到物品组 `EMPTY_GROUP`。当游戏需要一个组 id，但您不想在那里生成任何物品时，可以使用这个组；它永远不会生成物品。

#### SUS

在向物品组添加物品时，请尝试查找或创建**SUS 物品组**。SUS 物品组是包含合理真实分布的物品的集合，这些物品可能出现在指定的存储家具中。SUS 代表 "specific use storage"（特定用途的存储）。将物品组组织成 SUS 组的目的之一是为了促进可维护和扩展的可重用表格。

您可以在 [/data/json/itemgroups/SUS ↗](https://github.com/CleverRaven/Cataclysm-DDA/blob/master/data/json/itemgroups/SUS/) 找到现有的 SUS 物品组。