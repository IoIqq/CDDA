# CDDA 中文文档与模组仓库

<div align="center">

![CDDA Logo](https://cataclysmdda.org/wp-content/uploads/2020/03/CDDA-Logo-768x432.png)

**Cataclysm: Dark Days Ahead 中文文档翻译与模组制作**

[![GitHub stars](https://img.shields.io/github/stars/IoIqq/CDDA?style=social)](https://github.com/IoIqq/CDDA/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/IoIqq/CDDA?style=social)](https://github.com/IoIqq/CDDA/network/members)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Translation Progress](https://img.shields.io/badge/翻译进度-1%2F103-yellow.svg)](doc/翻译进度.md)

[官方仓库](https://github.com/CleverRaven/Cataclysm-DDA) | [翻译指南](doc/CDDA文档翻译指南.md) | [贡献指南](CONTRIBUTING.md) | [更新日志](CHANGELOG.md)

</div>

---

## 📖 项目简介

这是一个专注于 **Cataclysm: Dark Days Ahead (CDDA)** 的中文社区仓库，致力于：

- 📚 **文档翻译**：将 CDDA 官方文档翻译成中文，帮助中文玩家更好地理解游戏机制和模组制作
- 🎮 **模组制作**：分享和维护自制模组，丰富游戏内容
- 🛠️ **工具资源**：提供翻译工具、脚本和其他实用资源
- 🤝 **社区协作**：欢迎所有对 CDDA 感兴趣的玩家参与贡献

### 关于 CDDA

Cataclysm: Dark Days Ahead 是一款开源的回合制末日生存游戏，具有极高的自由度和深度。游戏提供了丰富的模组系统，允许玩家自定义游戏内容。

---

## ✨ 特色功能

### 🌐 文档翻译
- ✅ 完整的翻译规范和指南
- ✅ 专业术语对照表
- ✅ AI 辅助翻译工具推荐
- 🔄 持续更新官方最新文档

### 🎯 模组资源
- 自制模组分享
- 模组制作教程
- JSON 配置示例

### 📦 工具集合
- 文档翻译脚本
- JSON 验证工具
- 批量处理工具

---

## 📂 目录结构

```
CDDA/
├── README.md                      # 项目说明（本文件）
├── LICENSE                        # 开源许可证
├── CONTRIBUTING.md                # 贡献指南
├── CHANGELOG.md                   # 更新日志
├── .gitignore                     # Git 忽略文件
│
├── doc/                           # 📚 文档目录
│   ├── CDDA文档翻译指南.md        # 翻译规范和标准
│   ├── 翻译进度.md                # 翻译进度追踪
│   ├── 更新说明_2026.6.1.md       # 版本更新说明
│   ├── 日志文件.md                # 工作日志
│   ├── 翻译/                      # ✅ 已翻译的中文文档
│   │   └── MODDING.md             # 模组制作指南（已完成）
│   ├── 原版/                      # 📄 CDDA 官方原版文档
│   │   └── 2026.6.1/              # 2026年6月1日版本
│   └── ken包及本体翻译/           # 其他翻译资源
│
├── mod/                           # 🎮 模组目录
│   └── Apam/                      # 自制模组
│
├── tiles/                         # 🎨 图形资源
│   └── cdda本体/                  # 瓦片图形
│
├── scripts/                       # 🔧 脚本工具
│   └── translate_docs.py          # 文档翻译脚本
│
└── tools/                         # 🛠️ 其他工具
    ├── schema.json                # JSON 模式验证
    └── validate.js                # 验证脚本
```

---

## 🚀 快速开始

### 查看已翻译文档

所有已翻译的文档位于 [`doc/翻译/`](doc/翻译/) 目录：

- ✅ [MODDING.md](doc/翻译/MODDING.md) - 模组制作指南

### 参与翻译

1. **阅读翻译指南**：[CDDA文档翻译指南.md](doc/CDDA文档翻译指南.md)
2. **选择文档**：查看 [翻译进度](doc/翻译进度.md) 选择未翻译的文档
3. **开始翻译**：按照翻译规范进行翻译
4. **提交贡献**：参考 [贡献指南](CONTRIBUTING.md)

### 使用模组

1. 下载 `mod/` 目录中的模组
2. 将模组文件夹复制到 CDDA 游戏目录的 `data/mods/` 下
3. 启动游戏，在模组选择界面启用相应模组

---

## 📊 翻译进度

### 总体进度

| 类别 | 总数 | 已完成 | 进度 |
|------|------|--------|------|
| 核心文档 | 4 | 1 | 25% |
| JSON 系统文档 | 54 | 0 | 0% |
| 设计文档 | 18 | 0 | 0% |
| 编译指南 | 13 | 0 | 0% |
| 其他文档 | 14 | 0 | 0% |
| **总计** | **103** | **1** | **1%** |

### 最近更新

- **2026-06-01**: 完成 MODDING.md 翻译
- **2026-06-01**: 创建翻译指南文档
- **2026-06-01**: 从官方仓库获取最新文档（133个文件）

详细进度请查看：[翻译进度.md](doc/翻译进度.md)

---

## 🛠️ 翻译工具推荐

### AI 翻译工具

#### 国际工具
- **ChatGPT/Claude** - [LMSYS Arena](https://arena.lmsys.org/) - 免费使用多个高级模型
- **OpenRouter** - [openrouter.ai](https://openrouter.ai/) - 多模型同时回答

#### 国内工具（无需 VPN）
- **Kimi** - [kimi.moonshot.cn](https://kimi.moonshot.cn/) - 长文本处理能力强
- **通义千问** - [tongyi.aliyun.com](https://tongyi.aliyun.com/qianwen/) - 阿里出品，稳定可靠
- **智谱清言** - [chatglm.cn](https://chatglm.cn/) - 支持文档上传

### 专用翻译智能体

- [智谱清言 CDDA 翻译助手](https://chatglm.cn/main/gdetail/661e95841382084e8da3f203)
- [通义千问 CDDA 翻译助手](https://m.tongyi.aliyun.com/app/tongyi/tongyi-hybrid/share-result?shareId=3886de78-0958-41b5-ab08-e78593dd0ab0)

### 编辑器推荐

- **VS Code** - 支持 Markdown 预览和 Git 集成
- **Typora** - 所见即所得的 Markdown 编辑器
- **Notepad++** - 轻量级文本编辑器

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. **Fork 本仓库**
2. **创建特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m '添加某个很棒的功能'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **开启 Pull Request**

### 贡献类型

- 📝 **文档翻译** - 翻译官方文档
- 🐛 **错误修正** - 修正翻译错误或格式问题
- 🎮 **模组分享** - 分享自制模组
- 💡 **建议反馈** - 提出改进建议
- 📖 **完善文档** - 改进项目文档

详细信息请查看：[CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📋 翻译规范

### 核心原则

1. **保持格式** - 保持原始 Markdown 格式不变
2. **标题格式** - 使用 `# English Title（中文标题）` 格式
3. **代码不译** - 代码块和行内代码保持英文，仅添加中文注释
4. **术语统一** - 使用统一的专业术语翻译

### 术语对照

| 英文 | 中文 | 英文 | 中文 |
|------|------|------|------|
| mod | 模组 | profession | 职业 |
| scenario | 场景 | trait | 特质 |
| mutation | 变异 | spawn | 生成 |
| overmap | 大地图 | NPC | NPC |

完整规范请查看：[CDDA文档翻译指南.md](doc/CDDA文档翻译指南.md)

---

## 📜 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

### 第三方内容

- CDDA 官方文档版权归 [CleverRaven](https://github.com/CleverRaven/Cataclysm-DDA) 所有
- 本仓库仅提供中文翻译和社区资源，不包含游戏本体

---

## 🔗 相关链接

### 官方资源
- [CDDA 官方网站](https://cataclysmdda.org/)
- [CDDA GitHub 仓库](https://github.com/CleverRaven/Cataclysm-DDA)
- [CDDA 官方 Wiki](https://github.com/CleverRaven/Cataclysm-DDA/wiki)

### 中文社区
- [CDDA 中文 Wiki](https://cdda.wiki.gg/zh/)
- [CDDA 贴吧](https://tieba.baidu.com/f?kw=cataclysm)

### 开发资源
- [JSON 格式说明](doc/翻译/MODDING.md)
- [模组制作教程](doc/原版/2026.6.1/MODDING.md)

---

## 📞 联系方式

- **GitHub Issues**: [提交问题](https://github.com/IoIqq/CDDA/issues)
- **Pull Requests**: [提交贡献](https://github.com/IoIqq/CDDA/pulls)
- **讨论区**: [GitHub Discussions](https://github.com/IoIqq/CDDA/discussions)

---

## 🙏 致谢

感谢所有为本项目做出贡献的朋友们！

特别感谢：
- [CleverRaven](https://github.com/CleverRaven) - CDDA 官方开发团队
- 所有参与翻译和模组制作的贡献者
- CDDA 中文社区的支持

---

## 📈 项目统计

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/IoIqq/CDDA)
![GitHub last commit](https://img.shields.io/github/last-commit/IoIqq/CDDA)
![GitHub repo size](https://img.shields.io/github/repo-size/IoIqq/CDDA)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个 Star！⭐**

Made with ❤️ by [IoIqq](https://github.com/IoIqq) and [Contributors](https://github.com/IoIqq/CDDA/graphs/contributors)

</div>
