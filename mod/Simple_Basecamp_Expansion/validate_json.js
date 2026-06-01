// JSON 验证脚本
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = [];

// 递归收集所有JSON文件
function collectFiles(d) {
  const items = fs.readdirSync(d);
  items.forEach(item => {
    const fullPath = path.join(d, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      collectFiles(fullPath);
    } else if (item.endsWith('.json')) {
      files.push(fullPath);
    }
  });
}

collectFiles(dir);

let errors = 0;
let success = 0;

console.log('=== JSON 语法验证 ===\n');

files.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8');
    JSON.parse(content);
    console.log('[OK]    ' + path.relative(dir, f));
    success++;
  } catch (e) {
    console.log('[ERROR] ' + path.relative(dir, f));
    console.log('        ' + e.message);
    errors++;
  }
});

console.log('\n=== 验证结果 ===');
console.log('总计: ' + files.length + ' 个文件');
console.log('成功: ' + success + ' 个');
console.log('错误: ' + errors + ' 个');

if (errors === 0) {
  console.log('\n✅ 所有JSON文件语法正确！');
} else {
  console.log('\n❌ 发现 ' + errors + ' 个错误，请修复。');
}
