# CDDA 文档翻译指南

## 翻译规则总览

本指南用于确保 CDDA 文档翻译的一致性和质量。所有翻译工作必须严格遵循以下规则。

---

## 核心原则

### 1. 保持原始结构
- **格式不变**：保持原始的 Markdown 格式、标点符号和布局完全不变
- **缩进不变**：代码块、列表的缩进必须与原文一致
- **空行不变**：保留原文中的所有空行
- **注释保留**：HTML 注释（`<!-- -->`）保持原样

### 2. 特殊符号处理
- **反引号** `` ` ``：不修改，保持原样
- **JSON 字符串**：不翻译 JSON 代码中的字符串值
- **代码标识符**：变量名、函数名、ID 等保持英文
- **文件路径**：如 `data/mods`、`USER_DIR/mods` 保持不变
- **URL 链接**：保持原样

---

## 具体翻译规则

### 规则 1：标题翻译格式

**格式**：`# English Title（中文标题）`

**示例**：
```markdown
原文：# Modding guide
译文：# Modding guide（模组制作指南）

原文：## The basics
译文：## The basics（基础知识）

原文：### Creating a barebones mod
译文：### Creating a barebones mod（创建基础模组）
```

**注意**：
- 保留 `#` 的数量
- 英文和中文之间无空格
- 使用中文括号 `（）`

### 规则 2：正文段落翻译

**原则**：直接翻译成中文，不保留英文原文

**示例**：
```markdown
原文：Certain features of the game can be modified without rebuilding the game from source code.
译文：游戏的某些功能可以在不重新编译源代码的情况下进行修改。
```

### 规则 3：代码块处理

**规则**：
- 代码本身保持不变
- 为代码添加中文注释
- 注释使用 `//` 格式

**示例**：
```jsonc
原文：
```jsonc
{
  "type": "MOD_INFO",                             // Mandatory, you're making one of these!
  "id": "Mod_ID",                                 // Mandatory, unique id for your mod.
}
```

译文：
```jsonc
{
  "type": "MOD_INFO",                             // 必填，您正在创建其中之一！
  "id": "Mod_ID",                                 // 必填，模组的唯一 ID。
}
```
```

### 规则 4：行内代码

**格式**：保持反引号，代码内容不翻译

**示例**：
```markdown
原文：Every mod must have a `modinfo.json` file.
译文：每个模组都必须有一个 `modinfo.json` 文件。

原文：The `category` attribute denotes where the mod will appear.
译文：`category` 属性表示模组将在模组选择菜单中出现的位置。
```

### 规则 5：列表翻译

**格式**：保持列表符号和缩进，翻译内容

**示例**：
```markdown
原文：
 - `content` - A mod that adds a lot of stuff.
 - `items` - A mod that adds new items and recipes.

译文：
 - `content` - 添加大量内容的模组。
 - `items` - 向游戏添加新物品和配方的模组。
```

### 规则 6：链接处理

**格式**：链接文本翻译，URL 保持不变

**示例**：
```markdown
原文：[Guide to adding new content](https://github.com/...)
译文：[添加新内容到 CDDA 的指南](https://github.com/...)

原文：See [JSON/JSON_INFO.md](JSON/JSON_INFO.md) for details.
译文：详情请参见 [JSON/JSON_INFO.md](JSON/JSON_INFO.md)。
```

### 规则 7：表格翻译

**格式**：保持表格结构，翻译单元格内容

**示例**：
```markdown
原文：
| Field | Type | Description |
|-------|------|-------------|
| id    | string | Unique identifier |

译文：
| 字段 | 类型 | 描述 |
|------|------|------|
| id   | string | 唯一标识符 |
```

### 规则 8：引号内容

**格式**：描述性文本使用"英文（中文）"格式

**示例**：
```markdown
原文："Large Building" scenario
译文："Large Building（大型建筑）"场景

原文：The "CITY_START" flag
译文："CITY_START（城市开始）"标志
```

---

## 专业术语对照表

### 游戏相关
| 英文 | 中文 | 说明 |
|------|------|------|
| mod | 模组 | 不翻译为"模块" |
| profession | 职业 | 角色职业 |
| scenario | 场景 | 游戏场景 |
| trait | 特质 | 角色特质 |
| mutation | 变异 | 基因变异 |
| NPC | NPC | 保持英文缩写 |
| spawn | 生成 | 怪物/物品生成 |
| overmap | 大地图 | 世界地图 |
| blacklist | 黑名单 | |
| whitelist | 白名单 | |

### 技术相关
| 英文 | 中文 | 说明 |
|------|------|------|
| JSON | JSON | 保持英文 |
| field | 字段 | JSON 字段 |
| attribute | 属性 | |
| array | 数组 | |
| string | 字符串 | 或保持 string |
| boolean | 布尔值 | 或保持 boolean |
| mandatory | 必填 | |
| optional | 可选 | |

### 文件和路径
| 英文 | 中文 | 说明 |
|------|------|------|
| modinfo.json | modinfo.json | 保持英文 |
| data/mods | data/mods | 路径保持英文 |
| source code | 源代码 | |

---

## 翻译流程

### 步骤 1：准备工作
1. 阅读原文档，理解整体结构
2. 识别代码块、链接、特殊格式
3. 准备术语对照表

### 步骤 2：逐段翻译
1. 按段落顺序翻译
2. 标题使用"英文（中文）"格式
3. 正文直接翻译成中文
4. 代码块添加中文注释

### 步骤 3：质量检查
- [ ] 格式是否保持一致
- [ ] 代码块是否正确
- [ ] 链接是否有效
- [ ] 术语是否统一
- [ ] 标点符号是否正确

### 步骤 4：保存文件
- 保存到 `doc/翻译/` 目录
- 保持与原文件相同的目录结构
- 文件名保持英文不变

---

## 常见错误示例

### ❌ 错误示例 1：标题格式错误
```markdown
错误：# 模组制作指南 Modding guide
错误：# Modding guide - 模组制作指南
正确：# Modding guide（模组制作指南）
```

### ❌ 错误示例 2：代码被翻译
```markdown
错误："type": "模组信息",
正确："type": "MOD_INFO",
```

### ❌ 错误示例 3：反引号被删除
```markdown
错误：modinfo.json 文件
正确：`modinfo.json` 文件
```

### ❌ 错误示例 4：路径被翻译
```markdown
错误：数据/模组 目录
正确：`data/mods` 目录
```

---

## 翻译优先级

### 第一批（核心文档）- 最高优先级
1. ✅ MODDING.md - 已完成
2. JSON/JSON_INFO.md
3. JSON/JSON_FLAGS.md
4. TRANSLATING.md

### 第二批（JSON 系统文档）
1. JSON/MONSTERS.md
2. JSON/ITEM.md
3. JSON/MAPGEN.md
4. JSON/NPCs.md
5. JSON/MAGIC.md

### 第三批（其他文档）
- 设计平衡文档
- 编译指南
- 用户指南
- 其余 JSON 文档

---

## AI 翻译提示词

如果使用 AI 工具（如 Kimi、通义千问、智谱清言）进行翻译，可以使用以下提示词：

```
你是一个 Cataclysm: Dark Days Ahead（CDDA）游戏文档的专业翻译者。请将以下 Markdown 文档从英文翻译成中文，严格遵循以下规则：

1. 标题格式：保持 # 数量，使用"English Title（中文标题）"格式
2. 保持原始格式：Markdown 格式、代码块、缩进、空行完全不变
3. 代码处理：代码本身不翻译，仅为代码添加中文注释
4. 特殊符号：反引号 `、JSON 字符串、文件路径、URL 保持不变
5. 行内代码：保持反引号，代码内容不翻译
6. 正文段落：直接翻译成中文，不保留英文原文
7. 术语统一：mod=模组，profession=职业，scenario=场景，NPC=NPC

请翻译以下内容：

[粘贴原文]
```

---

## 质量标准

### 优秀翻译的标准
✅ 格式完全一致
✅ 代码块正确且有中文注释
✅ 术语翻译统一
✅ 语句通顺易懂
✅ 保留所有技术细节
✅ 链接和路径正确

### 需要改进的标准
❌ 格式有变化
❌ 代码被翻译
❌ 术语不统一
❌ 语句生硬
❌ 遗漏技术细节
❌ 链接失效

---

## 工具推荐

### 编辑器
- **VS Code**：支持 Markdown 预览
- **Typora**：所见即所得的 Markdown 编辑器
- **Notepad++**：轻量级文本编辑器

### AI 翻译工具
- **Kimi**：https://kimi.moonshot.cn/
- **通义千问**：https://tongyi.aliyun.com/qianwen/
- **智谱清言**：https://chatglm.cn/
- **Claude**：https://arena.lmsys.org/

### 对比工具
- **Beyond Compare**：文件对比
- **WinMerge**：免费对比工具
- **Git diff**：命令行对比

---

## 版本控制

### 提交规范
```bash
# 单个文件翻译
git add doc/翻译/文件名.md
git commit -m "翻译 文件名.md - 简短描述"

# 批量提交
git add doc/翻译/
git commit -m "翻译第X批文档 - 包含X个文件"

# 推送
git push origin main
```

### 提交信息模板
```
翻译 [文件名] - [简短描述]

- 完成 [文件名] 的中文翻译
- 遵循翻译规则：标题使用英文（中文）格式
- 保持原始格式和代码块不变
- 添加中文注释
```

---

## 常见问题 FAQ

### Q1：遇到不确定的术语怎么办？
A：查看已翻译的文档（如 MODDING.md）中的术语使用，保持一致。

### Q2：代码注释太长怎么办？
A：可以适当简化，但要保留关键信息。

### Q3：原文有错误怎么办？
A：翻译时保持原文，可以在注释中标注"原文如此"。

### Q4：遇到新的游戏术语怎么办？
A：优先查看游戏内的中文翻译，如果没有则音译或意译。

### Q5：如何确保翻译质量？
A：翻译完成后，使用 Markdown 预览工具检查格式，并通读一遍确保通顺。

---

## 联系和反馈

如有翻译问题或建议，请：
1. 在 GitHub 仓库提 Issue
2. 查看已有翻译文档作为参考
3. 参考本指南的规则和示例

---

**最后更新**：2026年6月1日
**版本**：v1.0
**维护者**：IoIqq
