# 营地扩展模组详细开发指南

本文档提供营地扩展模组开发的详细说明，包含完整的代码示例和最佳实践。

---

## 📚 目录

1. [营地系统概述](#营地系统概述)
2. [Recipe JSON 详解](#recipe-json-详解)
3. [Mapgen JSON 详解](#mapgen-json-详解)
4. [Recipe Groups 详解](#recipe-groups-详解)
5. [完整示例](#完整示例)
6. [常见问题](#常见问题)
7. [调试技巧](#调试技巧)

---

## 营地系统概述

### 营地升级路径

营地扩展通过一系列升级任务实现：

```
主营地
  ↓ (需要 faction_base_camp_4)
扩展选择
  ├─→ 铁匠铺 Lv1 (提供 blacksmith)
  ├─→ 木工坊 Lv1 (提供 woodworking)
  ├─→ 仓库 Lv1 (提供 tool_storage)
  └─→ 厨房 Lv1 (提供 kitchen + pantry)
```

### Blueprint 系统

**Blueprint Provides**（提供的功能）：
- 解锁特定的营地任务
- 解锁特定的配方组
- 允许建造更多扩展

**Blueprint Requires**（前置条件）：
- 必须先完成的升级
- 必须拥有的功能

**Blueprint Excludes**（排除条件）：
- 防止重复建造
- 通常包含自己的 result ID

---

## Recipe JSON 详解

### 基础结构

```jsonc
{
  "type": "recipe",                    // 必须是 "recipe"
  "result": "unique_id",               // 唯一标识符
  "description": "描述文本",            // 玩家看到的描述
  "category": "CC_BUILDING",           // 必须是这个类别
  "subcategory": "CSC_BUILDING_BASES", // 必须是这个子类别
  "skill_used": "fabrication",         // 使用的技能
  "difficulty": 4,                     // 技能难度 (1-10)
  "time": "480 m",                     // 建造时间（分钟）
  "autolearn": false,                  // 必须是 false
  "never_learn": true,                 // 必须是 true
  
  // 营地特有字段
  "construction_blueprint": "mapgen_id",  // 对应的 mapgen ID
  "blueprint_name": "显示名称",           // 在营地菜单中显示
  
  // 功能定义
  "blueprint_provides": [
    { "id": "blacksmith", "amount": 1 }
  ],
  "blueprint_requires": [
    { "id": "faction_base_camp_4", "amount": 1 }
  ],
  "blueprint_excludes": [
    { "id": "unique_id", "amount": 1 }  // 防止重复建造
  ],
  
  // 工具要求
  "qualities": [
    [ { "id": "HAMMER", "level": 2 } ],
    [ { "id": "SAW_M", "level": 1 } ]
  ],
  
  // 材料要求
  "components": [
    [ [ "2x4", 30 ] ],      // 30 个 2x4 木板
    [ [ "nail", 60 ] ]      // 60 个钉子
  ]
}
```

### 字段详解

#### 1. 时间计算

```jsonc
"time": "480 m"  // 480 分钟 = 8 小时
```

**建议时间**：
- 简单建筑：240-480m (4-8小时)
- 中等建筑：480-720m (8-12小时)
- 复杂建筑：720-1440m (12-24小时)

#### 2. 技能和难度

```jsonc
"skill_used": "fabrication",  // 制造技能
"difficulty": 4               // 难度 4
```

**技能类型**：
- `fabrication` - 制造（建筑）
- `construction` - 建造
- `mechanics` - 机械

**难度等级**：
- 1-2：简单
- 3-4：中等
- 5-6：困难
- 7+：专家级

#### 3. 工具质量要求

```jsonc
"qualities": [
  [ { "id": "HAMMER", "level": 2 } ],  // 需要 2 级锤子
  [ { "id": "SAW_M", "level": 1 } ],   // 需要 1 级锯子
  [ { "id": "DIG", "level": 1 } ]      // 需要 1 级挖掘工具
]
```

**常用工具质量**：
- `HAMMER` - 锤子（1-3级）
- `SAW_M` - 锯子（1-2级）
- `DIG` - 挖掘工具（1-3级）
- `WRENCH` - 扳手（1-2级）
- `SCREW` - 螺丝刀（1级）

#### 4. 材料组件

```jsonc
"components": [
  [ [ "2x4", 30 ] ],                    // 单一选择
  [ [ "log", 10 ], [ "stick", 40 ] ],   // 多选一（10个原木 或 40个木棍）
  [ [ "nail", 60 ] ]
]
```

**材料数量建议**：
- 6x6 建筑：20-40 个 2x4，10-20 个 log
- 金属结构：5-15 个 sheet_metal，2-6 个 pipe
- 固定材料：40-80 个 nail

#### 5. Blueprint Provides 详解

```jsonc
"blueprint_provides": [
  { "id": "blacksmith", "amount": 1 },  // 解锁铁匠配方
  { "id": "bed", "amount": 2 }          // 提供 2 个床位
]
```

**重要的 Provides**：

| ID | 功能 | 说明 |
|----|------|------|
| `bed` | 床位 | 每 2 个允许 1 个扩展（最多 8 个扩展）|
| `blacksmith` | 铁匠铺 | 解锁金属加工配方组 |
| `kitchen` | 厨房 | 解锁烹饪配方组 |
| `pantry` | 食品储藏 | 提高食物分配效率 |
| `tool_storage` | 工具存储 | 解锁存储工具任务 |
| `gathering` | 采集 | 解锁采集材料任务 |
| `firewood` | 柴火 | 解锁收集柴火任务 |
| `logging` | 伐木 | 解锁伐木任务 |
| `farming` | 农业 | 解锁农业任务 |
| `water_well` | 水井 | 提供永久水源 |

---

## Mapgen JSON 详解

### 基础结构

```jsonc
{
  "type": "mapgen",
  "update_mapgen_id": "unique_mapgen_id",  // 与 recipe 的 construction_blueprint 对应
  "object": {
    "place_nested": [
      {
        "chunks": [ "nested_chunk_id" ],   // 嵌套地图块的 ID
        "x": 3,                             // X 坐标（0-23）
        "y": 3                              // Y 坐标（0-23）
      }
    ]
  }
}
```

### 嵌套地图块

```jsonc
{
  "type": "mapgen",
  "nested_mapgen_id": "nested_chunk_id",   // 嵌套块的 ID
  "object": {
    "mapgensize": [ 6, 6 ],                // 地图大小（宽, 高）
    "rows": [                              // ASCII 地图
      "WWWWWW",
      "W....W",
      "W.AF.W",
      "W.W..W",
      "W.R..W",
      "WWDWWW"
    ],
    "terrain": {                           // 地形定义
      "W": "t_wall_wood",
      ".": "t_floor",
      "D": "t_door_c"
    },
    "furniture": {                         // 家具定义
      "A": "f_anvil",
      "F": "f_forge",
      "W": "f_workbench",
      "R": "f_rack"
    }
  }
}
```

### 地形和家具符号

**ASCII 地图规则**：
- 每个字符代表一个地图格子
- 大小必须与 `mapgensize` 匹配
- 使用单个字符（A-Z, a-z, 0-9, 符号）

**常用符号约定**：
```
W = 墙壁 (Wall)
. = 地板 (Floor)
D = 门 (Door)
+ = 门（另一种表示）
# = 窗户
空格 = 空地/草地
```

### 地形 ID 列表

**墙壁**：
```jsonc
"t_wall_wood"         // 木墙
"t_wall_log"          // 原木墙
"t_wall_half"         // 半墙
"t_wall_wood_chipped" // 破损木墙
```

**地板**：
```jsonc
"t_floor"             // 木地板
"t_dirtfloor"         // 泥地
"t_floor_waxed"       // 打蜡地板
"t_concrete"          // 混凝土地板
```

**门**：
```jsonc
"t_door_c"            // 关闭的门
"t_door_o"            // 打开的门
"t_door_locked"       // 锁门
"t_door_locked_interior" // 室内锁门
```

**窗户**：
```jsonc
"t_window_domestic"   // 普通窗户
"t_window_no_curtains" // 无帘窗户
"t_window_open"       // 开窗
```

**屋顶**：
```jsonc
"t_shingle_flat_roof" // 木瓦平顶
"t_flat_roof"         // 平顶
"t_metal_flat_roof"   // 金属平顶
```

### 家具 ID 列表

**工作台**：
```jsonc
"f_workbench"         // 通用工作台
"f_anvil"             // 铁砧
"f_forge"             // 熔炉
"f_oven"              // 烤炉
"f_woodstove"         // 木炉
```

**存储**：
```jsonc
"f_rack"              // 货架
"f_locker"            // 储物柜
"f_crate_c"           // 木箱（关闭）
"f_crate_o"           // 木箱（打开）
"f_cupboard"          // 橱柜
"f_bookcase"          // 书架
```

**家具**：
```jsonc
"f_bed"               // 床
"f_chair"             // 椅子
"f_table"             // 桌子
"f_bench"             // 长凳
"f_stool"             // 凳子
```

**其他**：
```jsonc
"f_bulletin"          // 公告板
"f_fireplace"         // 壁炉
"f_counter"           // 柜台
"f_sink"              // 水槽
```

### 完整 Mapgen 示例

```jsonc
[
  {
    "type": "mapgen",
    "update_mapgen_id": "faction_base_smithy_simple_1_mapgen",
    "object": {
      "place_nested": [
        {
          "chunks": [ "smithy_simple_room" ],
          "x": 3,
          "y": 3
        }
      ]
    }
  },
  {
    "type": "mapgen",
    "nested_mapgen_id": "smithy_simple_room",
    "object": {
      "mapgensize": [ 6, 6 ],
      "rows": [
        "WWWWWW",
        "W....W",
        "W.AF.W",
        "W.W..W",
        "W.R.LW",
        "WWDWWW"
      ],
      "terrain": {
        "W": "t_wall_wood",
        ".": "t_floor",
        "D": "t_door_c"
      },
      "furniture": {
        "A": "f_anvil",
        "F": "f_forge",
        "W": "f_workbench",
        "R": "f_rack",
        "L": "f_locker"
      }
    }
  }
]
```

**布局说明**：
```
WWWWWW   第 1 行：墙壁
W....W   第 2 行：墙壁 + 4 格地板 + 墙壁
W.AF.W   第 3 行：铁砧(A) 和 熔炉(F)
W.W..W   第 4 行：工作台(W)
W.R.LW   第 5 行：货架(R) 和 储物柜(L)
WWDWWW   第 6 行：墙壁 + 门(D) + 墙壁
```

---

## Recipe Groups 详解

### 扩展注册

```jsonc
{
  "type": "recipe_group",
  "name": "all_faction_base_expansions",
  "building_type": "NONE",
  "recipes": [
    {
      "id": "faction_base_smithy_simple_0",
      "description": "简单铁匠铺",
      "om_terrains": [ "field" ]
    }
  ]
}
```

### 字段说明

**id**：
- 必须以 `faction_base_` 开头
- 必须以 `_0` 结尾（表示起始配方）
- 格式：`faction_base_<名称>_0`

**description**：
- 在营地菜单中显示的名称
- 应该简短清晰

**om_terrains**：
- 可以建造的地形类型
- `["field"]` - 可以在田野上建造
- `["ANY"]` - 可以在任何地方建造

### 起始配方（_0）

每个扩展需要一个起始配方，防止直接建造：

```jsonc
{
  "type": "recipe",
  "result": "faction_base_smithy_simple_0",
  "description": "铁匠铺扩展的起始点",
  "category": "CC_BUILDING",
  "subcategory": "CSC_BUILDING_BASES",
  "autolearn": false,
  "never_learn": true,
  "blueprint_requires": [
    { "id": "not_an_upgrade", "amount": 1 }  // 不可能满足的条件
  ]
}
```

---

## 完整示例

### 示例 1：简单铁匠铺

#### recipes.json
```jsonc
[
  {
    "type": "recipe",
    "result": "faction_base_smithy_simple_0",
    "description": "铁匠铺扩展的起始点",
    "category": "CC_BUILDING",
    "subcategory": "CSC_BUILDING_BASES",
    "autolearn": false,
    "never_learn": true,
    "blueprint_requires": [
      { "id": "not_an_upgrade", "amount": 1 }
    ]
  },
  {
    "type": "recipe",
    "result": "faction_base_smithy_simple_1",
    "description": "建造一个简单的铁匠铺，提供基础的金属加工能力。包含铁砧、熔炉和工作台。",
    "category": "CC_BUILDING",
    "subcategory": "CSC_BUILDING_BASES",
    "skill_used": "fabrication",
    "difficulty": 4,
    "time": "480 m",
    "autolearn": false,
    "never_learn": true,
    "construction_blueprint": "faction_base_smithy_simple_1_mapgen",
    "blueprint_name": "简单铁匠铺",
    "blueprint_provides": [
      { "id": "blacksmith", "amount": 1 }
    ],
    "blueprint_requires": [
      { "id": "faction_base_camp_4", "amount": 1 }
    ],
    "blueprint_excludes": [
      { "id": "faction_base_smithy_simple_1", "amount": 1 }
    ],
    "qualities": [
      [ { "id": "HAMMER", "level": 2 } ],
      [ { "id": "SAW_M", "level": 1 } ]
    ],
    "components": [
      [ [ "2x4", 30 ] ],
      [ [ "log", 15 ] ],
      [ [ "nail", 60 ] ],
      [ [ "pipe", 4 ] ],
      [ [ "sheet_metal", 10 ] ],
      [ [ "rock", 20 ] ]
    ]
  }
]
```

#### mapgen.json
```jsonc
[
  {
    "type": "mapgen",
    "update_mapgen_id": "faction_base_smithy_simple_1_mapgen",
    "object": {
      "place_nested": [
        {
          "chunks": [ "smithy_simple_room" ],
          "x": 3,
          "y": 3
        }
      ]
    }
  },
  {
    "type": "mapgen",
    "nested_mapgen_id": "smithy_simple_room",
    "object": {
      "mapgensize": [ 6, 6 ],
      "rows": [
        "WWWWWW",
        "W....W",
        "W.AF.W",
        "W.W..W",
        "W.R.LW",
        "WWDWWW"
      ],
      "terrain": {
        "W": "t_wall_wood",
        ".": "t_floor",
        "D": "t_door_c"
      },
      "furniture": {
        "A": "f_anvil",
        "F": "f_forge",
        "W": "f_workbench",
        "R": "f_rack",
        "L": "f_locker"
      }
    }
  }
]
```

#### recipe_groups.json
```jsonc
[
  {
    "type": "recipe_group",
    "name": "all_faction_base_expansions",
    "building_type": "NONE",
    "recipes": [
      {
        "id": "faction_base_smithy_simple_0",
        "description": "简单铁匠铺",
        "om_terrains": [ "field" ]
      }
    ]
  }
]
```

---

## 常见问题

### Q1：为什么需要 _0 起始配方？

A：起始配方用于在 `all_faction_base_expansions` 中注册扩展，但设置了不可能满足的 `blueprint_requires`，防止玩家直接建造。实际建造使用 _1 配方。

### Q2：mapgensize 可以超过 6x6 吗？

A：可以，但建议使用 6x6 以符合模块化营地的标准布局。更大的建筑可以使用多个 6x6 区域。

### Q3：如何测试模组？

A：
1. 将模组放入 `mods/` 目录
2. 启动游戏，在模组选择界面启用
3. 创建新世界
4. 建立营地并尝试建造扩展

### Q4：材料数量如何平衡？

A：参考游戏原版的类似建筑，一般：
- 6x6 木质建筑：20-40 个 2x4，10-20 个 log，40-80 个 nail
- 建造时间：4-12 小时

### Q5：如何添加多个等级？

A：创建多个配方，例如：
- `faction_base_smithy_simple_1` - 第一级
- `faction_base_smithy_simple_2` - 第二级（requires 第一级）

---

## 调试技巧

### 1. JSON 语法检查

使用 JSON 验证工具：
```bash
# 使用 Python
python -m json.tool recipes.json

# 使用 Node.js
node -e "JSON.parse(require('fs').readFileSync('recipes.json'))"
```

### 2. 游戏日志

查看游戏日志文件：
- Windows: `%USERPROFILE%\Documents\My Games\Cataclysm-DDA\`
- Linux: `~/.cataclysm-dda/`

### 3. 常见错误

**错误 1**：物品 ID 不存在
```
ERROR: item "unknown_item" not found
```
解决：检查 ALLOWED_ITEMS.md，确保物品在白名单中

**错误 2**：地形 ID 不存在
```
ERROR: terrain "t_unknown" not found
```
解决：使用游戏已有的地形 ID

**错误 3**：JSON 语法错误
```
ERROR: JSON parse error at line X
```
解决：检查逗号、括号、引号是否正确

### 4. 测试清单

- [ ] 模组能正常加载
- [ ] 扩展出现在营地菜单
- [ ] 材料需求正确显示
- [ ] 能够成功建造
- [ ] 建筑正确生成
- [ ] 功能正常解锁

---

## 参考资源

- [BASECAMP.md](../../doc/原版/2026.6.1/JSON/BASECAMP.md) - 营地系统完整文档
- [MAPGEN.md](../../doc/原版/2026.6.1/JSON/MAPGEN.md) - 地图生成完整文档
- [MODDING.md](../../doc/翻译/MODDING.md) - 模组制作指南
- [ALLOWED_ITEMS.md](./ALLOWED_ITEMS.md) - 允许使用的物品白名单

---

**最后更新**：2026-06-01  
**版本**：v1.0  
**作者**：IoIqq
