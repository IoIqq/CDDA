#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CDDA 文档批量翻译脚本
根据 prompt.md 中的翻译规则进行翻译
"""

import os
import re
from pathlib import Path

# 翻译规则：
# 1. 保持原始格式、标点符号和布局不变
# 2. 特殊符号如 ` 和 JSON 字符串不修改
# 3. # 字符保留数量，内容改为"英文（中文）"格式
# 4. 引号内容改为"英文（中文）"格式
# 5. 字段、表格等直接翻译不输出原文
# 6. 代码块添加中文注释，保留原文

def translate_markdown_file(source_path, target_path):
    """
    翻译单个 Markdown 文件
    注意：这是一个框架，实际翻译需要调用 AI API
    """
    print(f"处理文件: {source_path}")
    
    # 读取源文件
    with open(source_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 这里应该调用 AI 进行翻译
    # 由于我们在 Kiro 环境中，我会直接处理每个文件
    # 暂时先复制文件结构
    
    # 确保目标目录存在
    target_path.parent.mkdir(parents=True, exist_ok=True)
    
    return content

def get_all_md_files(directory):
    """获取目录下所有 .md 文件"""
    md_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, directory)
                md_files.append(rel_path)
    return sorted(md_files)

def main():
    source_dir = Path('doc/原版/2026.6.1')
    target_dir = Path('doc/翻译')
    
    # 获取所有 Markdown 文件
    md_files = get_all_md_files(source_dir)
    
    print(f"找到 {len(md_files)} 个 Markdown 文件需要翻译")
    print("文件列表:")
    for f in md_files:
        print(f"  - {f}")
    
    return md_files

if __name__ == '__main__':
    files = main()
