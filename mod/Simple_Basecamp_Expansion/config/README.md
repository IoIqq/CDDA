# 配置系统说明

## 📋 概述

Simple Basecamp Expansion 配置系统允许您自定义模组的各个方面，包括建造时间、材料成本、任务难度和奖励等。通过配置文件，您可以轻松调整游戏平衡性，无需直接修改JSON文件。

---

## 📁 配置文件结构

```
config/
├── README.md                    # 本文件
├── mod_config.json             # 主配置文件
├── building_config.json        # 建筑系统配置
├── mission_config.json         # 任务系统配置
└── presets/                    # 难度预设
    ├── easy.json               # 简单模式
    ├── normal.json             # 标准模式
    └── hard.json               # 困难模式
```

---

## ⚙️ 配置文件说明

### 1. mod_config.json - 主配置

控制模组的全局设置和功能开关。

**主要配置项：**
- `active_preset`: 当前使用的难度预设（"easy"/"normal"/"hard"）
- `features`: 功能开关
  - `auto_loot_collection`: 战利品自动收集
  - `combat_missions`: 战斗任务系统
  - `bulk_recipes`: 批量生产配方
  - `storage_upgrades`: 仓库升级系统
  - `all_buildings`: 所有扩展建筑

**示例：**
```json
{
  "active_preset": "normal",
  "features": {
    "auto_loot_collection": true,
    "combat_missions": true
  }
}
```

### 2. building_config.json - 建筑配置

控制所有建筑的建造参数。

**全局倍率：**
- `build_time`: 建造时间倍率（1.0 = 100%）
- `material_cost`: 材料成本倍率
- `skill_requirement`: 技能要求调整（±级数）

**建筑分类：**
- `production`: 生产类（铁匠铺、木工坊等）
- `storage`: 存储类（仓库、战利品处理中心）
- `utility`: 功能类（医疗站、水处理站等）
- `agriculture`: 农业类（温室、畜栏）
- `special`: 特殊类（图书馆、训练场等）

**示例：**
```json
{
  "global_multipliers": {
    "build_time": 0.8,
    "material_cost": 0.9
  },
  "building_categories": {
    "production": {
      "time_multiplier": 1.0,
      "cost_multiplier": 1.0
    }
  }
}
```

### 3. mission_config.json - 任务配置

控制战斗任务的难度和奖励。

**任务类型：**
- `small`: 小规模清理（10-20只僵尸）
- `medium`: 中等规模清理（30-50只僵尸）
- `large`: 大规模清理（50-100只僵尸）
- `horde`: 尸潮挑战（100+只僵尸）

**可调参数：**
- `difficulty`: 任务难度等级
- `base_time`: 基础完成时间（分钟）
- `reward_multiplier`: 奖励倍率
- `enemy_count`: 敌人数量范围

**示例：**
```json
{
  "combat_missions": {
    "difficulty_scaling": 1.0,
    "reward_multiplier": 1.2,
    "missions": {
      "small": {
        "difficulty": 2,
        "reward_multiplier": 1.0
      }
    }
  }
}
```

---

## 🎮 难度预设

### 简单模式 (easy.json)

**特点：**
- 建造时间 -30%
- 材料成本 -20%
- 技能要求 -1级
- 任务难度 -20%
- 任务奖励 +30%

**适合：** 新手玩家，想要快速发展营地

### 标准模式 (normal.json)

**特点：**
- 所有参数保持默认值
- 平衡的游戏体验

**适合：** 大多数玩家

### 困难模式 (hard.json)

**特点：**
- 建造时间 +30%
- 材料成本 +20%
- 技能要求 +1级
- 任务难度 +30%
- 任务奖励 -20%

**适合：** 资深玩家，寻求挑战

---

## 🔧 使用方法

### 方法1：使用预设（推荐）

1. 打开 `config/mod_config.json`
2. 修改 `active_preset` 的值：
   ```json
   "active_preset": "easy"  // 或 "normal" 或 "hard"
   ```
3. 保存文件
4. 重新加载游戏

### 方法2：自定义配置

1. 打开相应的配置文件（如 `building_config.json`）
2. 修改您想要调整的参数
3. 保存文件
4. 在 `mod_config.json` 中启用自定义设置：
   ```json
   "custom_settings": {
     "enabled": true
   }
   ```
5. 重新加载游戏

### 方法3：创建自定义预设

1. 复制 `presets/normal.json` 到 `presets/custom.json`
2. 修改参数以符合您的需求
3. 在 `mod_config.json` 中设置：
   ```json
   "active_preset": "custom"
   ```

---

## 📊 参数说明

### 倍率参数

所有倍率参数都是乘法因子：
- `1.0` = 100%（默认值）
- `0.5` = 50%（减半）
- `1.5` = 150%（增加50%）
- `2.0` = 200%（翻倍）

### 技能要求调整

技能要求使用加减法：
- `0` = 不变（默认）
- `-1` = 降低1级
- `+1` = 提高1级
- `-2` = 降低2级

### 难度等级

任务难度等级范围：
- `1-2`: 简单
- `3-4`: 中等
- `5-6`: 困难
- `7+`: 极难

---

## ⚠️ 注意事项

### 配置生效

- **当前版本**：配置文件仅作为参考，需要手动修改JSON文件
- **未来版本**：将提供自动应用配置的工具脚本

### 备份建议

在修改配置前，建议：
1. 备份整个 `config/` 目录
2. 备份原始的JSON文件
3. 记录您的修改

### 兼容性

- 配置系统与现有存档兼容
- 修改配置不会影响已建造的建筑
- 新建筑将使用新的配置参数

### 合理范围

建议的参数范围：
- 时间倍率：0.5 - 2.0
- 成本倍率：0.5 - 2.0
- 技能调整：-2 到 +2
- 奖励倍率：0.5 - 2.0

超出这些范围可能导致游戏失衡。

---

## 🔄 配置示例

### 示例1：快速建造模式

```json
{
  "global_multipliers": {
    "build_time": 0.5,
    "material_cost": 0.7,
    "skill_requirement": -1
  }
}
```

### 示例2：高奖励模式

```json
{
  "combat_missions": {
    "reward_multiplier": 1.5
  }
}
```

### 示例3：硬核生存模式

```json
{
  "global_multipliers": {
    "build_time": 1.5,
    "material_cost": 1.5,
    "skill_requirement": 2
  },
  "combat_missions": {
    "difficulty_scaling": 1.5,
    "reward_multiplier": 0.7
  }
}
```

---

## 🛠️ 故障排除

### 配置不生效

1. 检查JSON语法是否正确
2. 确认文件编码为UTF-8
3. 验证参数名称拼写
4. 重新加载游戏

### JSON语法错误

使用在线JSON验证器检查：
- https://jsonlint.com/
- 或使用 `python -m json.tool config_file.json`

### 恢复默认设置

1. 删除修改过的配置文件
2. 从备份恢复
3. 或重新下载模组

---

## 📝 版本历史

### v1.0.0 (2026-06-01)
- ✨ 初始配置系统
- ✨ 三种难度预设
- ✨ 建筑和任务配置
- 📝 完整文档

---

## 🔮 未来计划

### v1.1.0
- [ ] 配置应用工具脚本
- [ ] 配置验证器
- [ ] GUI配置编辑器

### v1.2.0
- [ ] 更多预设选项
- [ ] 配方系统配置
- [ ] 高级自定义选项

---

## 💬 反馈与支持

如果您有任何问题或建议：
- 查看主README文档
- 提交GitHub Issue
- 参考DETAILED_GUIDE.md

---

**祝您游戏愉快！** 🏕️
