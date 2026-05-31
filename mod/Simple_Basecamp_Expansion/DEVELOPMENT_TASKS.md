# 营地扩展模组开发任务清单

**项目**：Simple Basecamp Expansion  
**版本**：v0.1.0  
**开始日期**：2026-06-01  
**目标**：为 CDDA 实验版添加营地扩展，只使用游戏已有物品

---

## 📋 总体进度

- [ ] 阶段 0：准备和验证（0/2）
- [ ] 阶段 1：模组基础结构（0/3）
- [ ] 阶段 2：铁匠铺扩展（0/3）
- [ ] 阶段 3：木工坊扩展（0/3）
- [ ] 阶段 4：仓库扩展（0/3）
- [ ] 阶段 5：厨房扩展（0/3）
- [ ] 阶段 6：配方组和集成（0/2）
- [ ] 阶段 7：测试和验证（0/3）
- [ ] 阶段 8：文档和发布（0/2）

**总进度**：0/24 任务完成（0%）

---

## 🎯 阶段 0：准备和验证

### 任务 0.1：创建物品白名单 ✅
**状态**：已完成  
**文件**：`ALLOWED_ITEMS.md`  
**完成日期**：2026-06-01

**检查点**：
- [x] 列出建筑材料
- [x] 列出工具
- [x] 列出地形和家具
- [x] 列出 Blueprint Provides
- [x] 添加使用示例

### 任务 0.2：创建验证机制
**状态**：待开始  
**文件**：`validate_items.py`（可选）

**目标**：
- 创建简单的验证脚本
- 检查 JSON 文件中的物品 ID
- 确保所有物品在白名单中

**检查点**：
- [ ] 编写验证脚本
- [ ] 测试验证功能
- [ ] 文档化使用方法

---

## 🏗️ 阶段 1：模组基础结构

### 任务 1.1：创建文件夹结构
**状态**：待开始  
**预计时间**：5分钟

**目标**：
```
mod/Simple_Basecamp_Expansion/
├── ALLOWED_ITEMS.md          ✅
├── DEVELOPMENT_TASKS.md      ✅
├── README.md                 ⏳
├── modinfo.json              ⏳
├── recipes.json              ⏳
├── mapgen.json               ⏳
└── recipe_groups.json        ⏳
```

**检查点**：
- [ ] 确认文件夹已创建
- [ ] 准备所有必要文件

### 任务 1.2：编写 modinfo.json
**状态**：待开始  
**预计时间**：10分钟

**内容要求**：
```jsonc
{
  "type": "MOD_INFO",
  "id": "simple_basecamp_expansion",
  "name": "Simple Basecamp Expansion",
  "authors": ["IoIqq"],
  "description": "添加营地扩展房间：铁匠铺、木工坊、仓库、厨房。只使用游戏已有物品。",
  "category": "buildings",
  "dependencies": ["dda"],
  "version": "0.1.0"
}
```

**检查点**：
- [ ] ID 唯一且符合规范
- [ ] 描述清晰准确
- [ ] 依赖项正确
- [ ] JSON 语法正确

### 任务 1.3：编写 README.md
**状态**：待开始  
**预计时间**：15分钟

**内容要求**：
- 模组介绍
- 功能列表
- 安装方法
- 兼容性说明
- 已知问题

**检查点**：
- [ ] 内容完整
- [ ] 格式清晰
- [ ] 信息准确

---

## 🔨 阶段 2：铁匠铺扩展

### 任务 2.1：设计铁匠铺布局
**状态**：待开始  
**预计时间**：20分钟

**布局要求**：
- 6x6 区域
- 包含：铁砧、熔炉、工作台
- 包含：储物柜、工具架
- 合理的工作空间

**布局草图**：
```
WWWWWW
W....W
W.AF.W
W.W..W
W.R..W
WWDWWW

W = 墙壁 (t_wall_wood)
. = 地板 (t_floor)
A = 铁砧 (f_anvil)
F = 熔炉 (f_forge)
W = 工作台 (f_workbench)
R = 货架 (f_rack)
D = 门 (t_door_c)
```

**检查点**：
- [ ] 布局设计完成
- [ ] 所有元素在白名单中
- [ ] 空间利用合理
- [ ] 符合游戏风格

### 任务 2.2：编写升级配方
**状态**：待开始  
**预计时间**：30分钟  
**文件**：`recipes.json`

**配方要求**：
```jsonc
{
  "type": "recipe",
  "result": "faction_base_smithy_simple_1",
  "description": "建造一个简单的铁匠铺，提供基础的金属加工能力。",
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
    { "id": "blacksmith", "amount": 1 },
    { "id": "bed", "amount": 0 }
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
```

**物品验证**：
- [ ] 所有 components 在白名单中
- [ ] 数量合理（约8小时工作量）
- [ ] 材料可获取
- [ ] 技能要求合理

### 任务 2.3：编写地图更新
**状态**：待开始  
**预计时间**：40分钟  
**文件**：`mapgen.json`

**地图要求**：
```jsonc
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
      "W.R..W",
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
      "R": "f_rack"
    }
  }
}
```

**检查点**：
- [ ] 所有地形 ID 在白名单中
- [ ] 所有家具 ID 在白名单中
- [ ] 布局与设计一致
- [ ] JSON 语法正确

---

## 🪵 阶段 3：木工坊扩展

### 任务 3.1：设计木工坊布局
**状态**：待开始  
**预计时间**：15分钟

**布局要求**：
- 6x6 区域
- 包含：工作台、锯木台
- 包含：木材存储区

**检查点**：
- [ ] 布局设计完成
- [ ] 所有元素验证

### 任务 3.2：编写升级配方
**状态**：待开始  
**预计时间**：20分钟

**配方要求**：
- result: `faction_base_woodshop_simple_1`
- 提供木工功能
- 材料主要是木材

**检查点**：
- [ ] 配方编写完成
- [ ] 物品验证通过

### 任务 3.3：编写地图更新
**状态**：待开始  
**预计时间**：30分钟

**检查点**：
- [ ] 地图更新完成
- [ ] 元素验证通过

---

## 📦 阶段 4：仓库扩展

### 任务 4.1：设计仓库布局
**状态**：待开始  
**预计时间**：15分钟

**布局要求**：
- 6x6 区域
- 大量储物柜和货架
- 提供 tool_storage

**检查点**：
- [ ] 布局设计完成

### 任务 4.2：编写升级配方
**状态**：待开始  
**预计时间**：20分钟

**配方要求**：
- result: `faction_base_storage_simple_1`
- 提供 tool_storage

**检查点**：
- [ ] 配方编写完成

### 任务 4.3：编写地图更新
**状态**：待开始  
**预计时间**：30分钟

**检查点**：
- [ ] 地图更新完成

---

## 🍳 阶段 5：厨房扩展

### 任务 5.1：设计厨房布局
**状态**：待开始  
**预计时间**：15分钟

**布局要求**：
- 6x6 区域
- 包含：烤炉、工作台
- 包含：食品储藏

**检查点**：
- [ ] 布局设计完成

### 任务 5.2：编写升级配方
**状态**：待开始  
**预计时间**：20分钟

**配方要求**：
- result: `faction_base_kitchen_simple_1`
- 提供 kitchen 和 pantry

**检查点**：
- [ ] 配方编写完成

### 任务 5.3：编写地图更新
**状态**：待开始  
**预计时间**：30分钟

**检查点**：
- [ ] 地图更新完成

---

## 🔗 阶段 6：配方组和集成

### 任务 6.1：创建配方组
**状态**：待开始  
**预计时间**：30分钟  
**文件**：`recipe_groups.json`

**内容要求**：
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
    },
    {
      "id": "faction_base_woodshop_simple_0",
      "description": "简单木工坊",
      "om_terrains": [ "field" ]
    },
    {
      "id": "faction_base_storage_simple_0",
      "description": "简单仓库",
      "om_terrains": [ "field" ]
    },
    {
      "id": "faction_base_kitchen_simple_0",
      "description": "简单厨房",
      "om_terrains": [ "field" ]
    }
  ]
}
```

**检查点**：
- [ ] 所有扩展已添加
- [ ] ID 正确
- [ ] 描述清晰

### 任务 6.2：创建起始配方
**状态**：待开始  
**预计时间**：20分钟

**目标**：
- 为每个扩展创建 _0 起始配方
- 设置 blueprint_requires 为不可能满足的条件

**检查点**：
- [ ] 起始配方创建完成
- [ ] 防止直接建造

---

## 🧪 阶段 7：测试和验证

### 任务 7.1：语法验证
**状态**：待开始  
**预计时间**：15分钟

**检查项**：
- [ ] 所有 JSON 文件语法正确
- [ ] 没有缺失逗号或括号
- [ ] 字符串正确转义
- [ ] 使用 JSON 验证工具检查

### 任务 7.2：物品验证
**状态**：待开始  
**预计时间**：20分钟

**检查项**：
- [ ] 所有物品 ID 在白名单中
- [ ] 没有自创物品
- [ ] 数量合理
- [ ] 交叉检查所有文件

### 任务 7.3：游戏内测试
**状态**：待开始  
**预计时间**：60分钟

**测试项**：
- [ ] 模组能正常加载
- [ ] 扩展出现在营地菜单
- [ ] 能正常建造
- [ ] 功能正常工作
- [ ] 没有报错或崩溃

---

## 📚 阶段 8：文档和发布

### 任务 8.1：完善 README
**状态**：待开始  
**预计时间**：30分钟

**内容**：
- 详细的功能说明
- 每个扩展的介绍
- 建造材料清单
- 使用建议

**检查点**：
- [ ] 内容完整详细
- [ ] 格式美观
- [ ] 信息准确

### 任务 8.2：创建更新日志
**状态**：待开始  
**预计时间**：15分钟  
**文件**：`CHANGELOG.md`

**内容**：
- v0.1.0 版本信息
- 包含的扩展列表
- 已知问题
- 未来计划

**检查点**：
- [ ] 更新日志完成
- [ ] 版本信息准确

---

## 📊 进度追踪

### 当前状态
- **当前阶段**：阶段 0
- **当前任务**：任务 0.2
- **完成任务**：1/24
- **总进度**：4%

### 时间估算
- **已用时间**：30分钟
- **预计剩余**：约 6-8 小时
- **目标完成**：2026-06-02

---

## ⚠️ 注意事项

1. **物品验证**：每次添加物品前必须检查白名单
2. **JSON 语法**：使用编辑器的 JSON 验证功能
3. **测试优先**：每完成一个扩展就测试一次
4. **备份文件**：定期提交到 Git

---

## 🔄 更新记录

- **2026-06-01 02:28**：创建任务清单，完成物品白名单

---

**下一步**：开始任务 1.1 - 创建 modinfo.json
