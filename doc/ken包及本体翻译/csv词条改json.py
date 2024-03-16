import csv
import json

# 读取 CSV 文件
file_path = r'D:\用户资料\Desktop\github\cataclysm-dda_2013-10-28_chinese-china-zh_cn2024.3.16.csv'
with open(file_path, mode='r', encoding='utf-8') as file:
    csv_data = list(csv.DictReader(file))

# 将 CSV 数据转换为 JSON
def csv_to_json(csv_data):
    json_list = []

    for row in csv_data:
        term = row.get('term', '')
        translation_zh_cn = row.get('translation_zh_cn', '').strip()  # 移除前后空格
        notes_zh_cn = row.get('notes_zh_cn', '').strip()  # 获取 notes_zh_cn 列，如果不存在则为空字符串
        notes = row.get('notes', '').strip()  # 获取 notes 列，如果不存在则为空字符串

        # 如果 translation_zh_cn 为空，则跳过这一行
        if not translation_zh_cn:
            continue

        translation = translation_zh_cn
        pos = row.get('pos', '')

        # 合并 notes_zh_cn 和 notes
        note_combined = f"{notes_zh_cn} {notes}".strip() if notes_zh_cn or notes else ''

        variants = []

        is_case_sensitive = row.get('is_case_sensitive', '').lower()
        is_special_case = term[0] in ('"', "'", "(", "[", "{") or term[0].isdigit() or term.isupper() or term.istitle()

        if is_case_sensitive == "false" and not is_special_case:
            variants.append(term[0].upper() + term[1:])  # 首字母大写作为变体

        # 构建 JSON 对象
        json_obj = {
            "term": term,
            "translation": translation,
            "pos": pos,
            "note": note_combined,  # 合并 notes_zh_cn 和 notes
            "variants": variants  # 设置变体列表
        }

        json_list.append(json_obj)

    return json_list

# 转换 CSV 数据为 JSON
json_data = csv_to_json(csv_data)

# 设置输出文件路径
output_file_path = r'D:\用户资料\Desktop\github\output.json'

# 将 JSON 数据写入文件
with open(output_file_path, mode='w', encoding='utf-8') as file:
    json.dump(json_data, file, ensure_ascii=False, indent=4)

if json_data:
    print("输出文件已保存到指定位置。")