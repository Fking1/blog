# mock.js

## [官网](http://mockjs.com/)

## 生成随机数据，拦截 Ajax 请求

## 特色/优势

- 前后端分离
- 开发无侵害
- 数据类型丰富
- 增加单元测试的真实性
- 用法简单
- 方便扩展

### Start
*npm install mockjs*

#### Address
        Random.region() // 生成一个中国大区  "华北"
    Random.province() // 生成一个省或直辖市、自治区、特别行政区 "江西省"
    Random.city(prefix?) // 生成一个市  参数prefix可选 代表所属的省份
    Random.county(prefix?) // 生成一个县 参数prefix可选 代表所属的省份或市区
    Random.zip() // 生成一个邮政编码  "333400"
    
#### Basic
        Random.boolean(min?,max?,current?) //生成一个boolean值// min max默认值均为1  min/(min+max) 为生成boolean值current的概率
    Random.natural(min?,max?) // 生成一个自然数   在min~max之间
    Random.integer(min?,max?) // 生成一个整数 在min~max之间
    Random.float(min?,max?,dmin?,dmax?) // 生成一个浮点数 整数部分在min~max 小数部分位数在dmin~dmax 之间
    Random.character(pool?) // 生成一个字符  pool为字符生成的范围
    Random.string(pool?,min?,max?) // 生成一个字符串 长度在min~max
    Random.range(start,stop？,step?) // 生成一个整形数组 从start~stop 步长为step
    
#### Color
        Random.color() // 生成一个有吸引力的颜色
    Random.hex() // 生成一个有吸引力的颜色 格式为'#RRGGBB'。
    Random.rgb() // 生成一个有吸引力的颜色,格式为'rgb(r, g, b)'  
    Random.rgba() // 生成一个有吸引力的颜色,格式为'rgba(r, g, b, a)'
    Random.hsl() // 生成一个有吸引力的颜色，格式为 'hsl(h, s, l)'
    
#### Date
        Random.date(format?) // 生成一个日期字符串 format日期格式 默认值为yyyy-MM-dd 
    Random.time(format?) // 生成一个时间字符串 format默认值为HH:mm:ss
    Random.datetime(format?) // 生成一个日期时间字符串 format默认值为yyyy-MM-dd HH:mm:ss
    Random.now(unit?,format?) //生成当前日期和时间的字符串 unit表时间单位
    
#### Helper
        Random.capitalize( word ) // 把字符串的第一个字母转换为大写
    Random.upper( str ) // 把字符串转换为大写
    Random.lower(str) // 把字符串转换为小写
    Random.pick( arr ) // 返回数组中随机一个元素
    Random.shuffle( arr ) // 返回打乱后的数组

#### Image
        Random.image(size?, background?, foreground?, format?, text?) // 生成一个图片地址  高度自定义
    Random.dataImage(size?,text?) // 生成一段随机的Base64 图片编码
    
#### Miscellaneous
        Random.guid() // 生成一个GUID 
    Random.id() // 生成一个18位的身份证
    Random.increment(step?) // 生成全局的自增整数 step步长
    
#### Mock.mock()
        Mock.mock(rurl?, rtype?, template|function( options ) ) // 根据数据模板生成模拟数据
        
#### Mock.Random
        Mock.Random // 是一个工具类，用于生成各种随机数据
        
#### Mock.setup()
        Mock.setup( settings ) // 配置拦截 Ajax 请求时的行为。支持的配置项有：timeout
        
#### Mock.toJSONSchema()
        Mock.toJSONSchema(template) //把 Mock.js 风格的数据模板 template 转换成 JSON Schema
        
#### Mock.valid()
        Mock.valid(template, data) // 校验真实数据 data 是否与数据模板 template 匹配