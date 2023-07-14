// 引入ajv模块
const Ajv = require("ajv");
// 创建一个ajv实例，并传递选项对象
const ajv = new Ajv({ allErrors: true });
// 不知道是什么
const fs = require("fs");
const path = require("path");
const folderPath = "D:\\用户资料\\Desktop\\实验版\\data\\mods\\CDDA\\mod\\Apam\\item";
// 获取文件夹中的所有文件
const files = fs.readdirSync(folderPath);
// 遍历每个文件并进行赋值
files.forEach((file) => {
  const filePath = path.join(folderPath, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
});
// 定义一个json-schema
const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string",
                "enum": ["COMESTIBLE"]
            },
            "id": {
                "type": "string",
                "pattern": "^Pam_.*"
            },
            "name": {
                "type": "object",
                "properties": {
                    "str": {
                        "type": "string",
                        "pattern": "^[\\u4e00-\\u9fa5a-zA-Z]*$"
                    }
                },
                "required": ["str"]
            },
            "vitamins": {
                "type": "array",
                "items": {
                    "type": "array",
                    "items": [
                        {
                            "type": "string"
                        },
                        {
                            "type": "number"
                        }
                    ],
                    "minItems": 2,
                    "maxItems": 2
                }
            },
            "weight": {
                "type": "number"
            },
            "color": {
                "type": "string"
            },
            "spoils_in": {
                "type": "integer"
            },
            "container": {
                "type": "string"
            },
            "comestible_type": {
                "type": "string"
            },
            "symbol": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "price": {
                "type": "number"
            },
            "price_postapoc": {
                "type": "number"
            },
            "material": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": [
                        "alcohol",
                        "chitin",
                        "acidchitin",
                        "bone",
                        "cotton",
                        "egg",
                        "flesh",
                        "fruit",
                        "fur",
                        "honey",
                        "milk",
                        "veggy",
                        "wood",
                        "wool",
                        "clay",
                        "diamond",
                        "glass",
                        "stone",
                        "aluminum",
                        "brass",
                        "budget_steel",
                        "copper",
                        "gold",
                        "hardsteel",
                        "iron",
                        "lead",
                        "silver",
                        "steel",
                        "superalloy",
                        "faux_fur",
                        "kevlar",
                        "leather",
                        "neoprene",
                        "nomex",
                        "plastic",
                        "hydrocarbons",
                        "oil",
                        "powder",
                        "powder_nonflam",
                        "null",
                        "paper",
                        "feces",
                        "seeds",
                        "bacon",
                        "bean",
                        "coco_beans",
                        "garlic",
                        "mushroom",
                        "nut",
                        "rice",
                        "salt",
                        "sugar",
                        "tomato",
                        "water",
                        "wheat"
                    ]
                }
            },
            "volume": {
                "type": "number"
            },
            "calories": {
                "type": "number"
            },
            "charges": {
                "type": "number"
            },
            "flags": {
                "anyOf": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    {
                        "type": "object",
                        "additionalProperties": {
                            "type": "string"
                        }
                    }
                ]
            },
            "fun": {
                "type": "number"
            },
            "phase": {
                "type": "string"
            },
            "quench": {
                "type": "integer"
            },
            "healthy": {
                "type": "integer"
            }
        },
        "required": [
            "type",
            "id",
            "name",
            "vitamins",
            "weight",
            "color",
            "spoils_in",
            "container",
            "comestible_type",
            "symbol",
            "description",
            "price",
            "price_postapoc",
            "material",
            "volume",
            "calories",
            "charges",
            "flags",
            "fun",
            "phase",
            "quench",
            "healthy"
        ]
    }
};// 定义data变量
const data = JSON.parse(fileContent);
// 编译一个校验函数
const validate = ajv.compile(schema);
// 传递函数到ajv
const validOtherFile = validate(JSON.parse(fileContent));
// 创建一个空的debug对象
const debug = {};
// 对数据进行校验
const valid = validate(data);
// 遍历每个文件并进行校验
files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const valid = validate(JSON.parse(fileContent));

    if (!valid) {
        validate.errors.forEach((err) => {
            const { instancePath, keyword } = error;
            const lineNumber = instancePath.split("/")[1];
            const charNumber = instancePath.split("/")[2];
            console.log(`文件${file}中的错误发生在第${lineNumber}行，第${charNumber}个字符`);
            console.log(`错误对象：${JSON.stringify(error.instance)}`);
            debug[`${file}:${instancePath}`] = keyword;
        });
    }
});

// 将debug对象写入debug.json文件
fs.writeFileSync("debug.json", JSON.stringify(debug, null, 2))