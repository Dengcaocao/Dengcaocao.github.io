# 一、MongoDB数据



## 1. 原生命令udb

### 1. 启动MGDB数据库服务

​	+ mongod --dbpath=C:\mgdb\data  --logpath=C:\mgdb\log\db.log [--fork=true]

### 2. 进入MGDB数据库

+ mongo

### 3. 创建数据库

	+ use 库名

### 4.  查看当前库

	+ db

### 5. 查看所有库

+ show databases
+ show dbs

### 查看所有集合

- show collections
- show tables

### 6. 删除当前数据库

+ db.dropDatabase()



### 7.  正确退出mongo

+ 如果随意退出，会导致以后启动不了mgdb服务

+ use admin
+ db.shutdownServer()

### 8. 创建集合

+ 插入数据自动创建
  + use dream
  + db.user.insert({name:'mg'})

+ 手动创建
  + **db.createCollection('dream')**
    + db.createCollection("mydb", { capped : true, autoIndexId : true, size : 6142800, max : 10000 } )
    + 创建固定集合  mydb，整个集合空间大小 6142800 KB, 文档最大个数为 10000 个

| 字段        | 类型 | 描述                                                         |
| :---------- | :--- | :----------------------------------------------------------- |
| capped      | 布尔 | （可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。 **当该值为 true 时，必须指定 size 参数。** |
| autoIndexId | 布尔 | （可选）如为 true，自动在 _id 字段创建索引。默认为 false。   |
| size        | 数值 | （可选）为固定集合指定一个最大值，以千字节计（KB）。 **如果 capped 为 true，也需要指定该字段。** |
| max         | 数值 | （可选）指定固定集合中包含文档的最大数量。                   |

### 9. 删除集合

+ 数据无价

+ **db.collection.drop()**
  + 如果成功删除选定集合，则 drop() 方法返回 true，否则返回 false

### 10. **插入文档**

+ **db.集合名(表名).insert(document)**

  + 若插入的数据主键已经存在，报异常，提示主键重复，不保存当前数据

+ **db.集合名(表名).save(document)** 

  + 如果 _id 主键存在则更新数据，如果不存在就插入数据
  + 该方法新版本中已**废弃**，使用**db.collection.insertOne()** 或 **db.collection.replaceOne()** 来代替

+ 插入多条数据

  + **db.collection.insertOne() 和 db.collection.insertMany()**

  ```
  db.info.insert({title: 'MgDB', 
      description: 'MongoDB 是一个 Nosql 数据库',
      by: 'TZ',
      url: 'http://baidu.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
  })
  ```

  

### 11. 删除文档

​	+ 数据无价

+ db
+ db.info.drop()

### 12. 更新文档

+ update() 方法用于更新已存在的文档

```css
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)

db.user.update({title:'MgDB'},{$set:{title:'mongodb数据库操作'}})
db.col.find().pretty()

query : update的查询条件，类似sql update查询内where后面的。
update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
【multi】 : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录【全部更新】。
writeConcern :可选，抛出异常的级别。


只更新第一条记录：
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } ); 

全部更新：
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true ); 

只添加第一条：
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false ); 

全部添加进去:
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true ); 

全部更新：
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );

只更新第一条记录：
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );
```



+ save() 方法
  + 方法通过传入的文档来替换已有文档，_id 主键存在就更新，不存在就插入

```css
db.col.save({
    "_id" : ObjectId("4456f4afafa6f4dad56f4d"),
    "title" : "MongoDB",
    "description" : "MongoDB 是一个 Nosql 数据库",
})
db.col.find().pretty()
```



### 13. 删除文档数据

+  **remove()**函数是用来移除集合中的数据
+ 在执行remove()函数前**先执行find()**命令来判断执行的条件是否正确，这是一个比较好的习惯

+ **db.collection.remove**(   <query>,   {     justOne: <boolean>,     writeConcern: <document>   } )

```css
query :（可选）删除的文档的条件。
justOne : （可选）如果设为 true 或 1，则只删除一个文档，如果不设置该参数，或使用默认值 false，则删除所有匹配条件的文档。
writeConcern :（可选）抛出异常的级别。

db.col.remove({'title':'MGDB'})
一条数据
db.col.remove({'title':'MGDB'},{justOne:1})

如果你想删除所有数据
db.col.remove({})
```



### 14. **查询文档**

​	+ find() 方法以非结构化的方式来显示所有文档

+ **db.collection.find(query, projection)**

```css
query ：可选，使用查询操作符指定查询条件
projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）
```

+ 以易读的方式来读取数据，可以使用 pretty() 方法
  + **db.col.find().pretty()**
    + 方法以格式化的方式来显示所有文档

+  **findOne() 方法**,它只**返回一个文档**

### 15. 条件语句查询



| 操作       | 格式         | 范例                                        | RDBMS中的类似语句   |
| :--------- | :----------- | :------------------------------------------ | :------------------ |
| 等于       | `{:`}        | `db.col.find({"by":"mgdb"}).pretty()`       | `where by = 'mgdb'` |
| 小于       | `{:{$lt:}}`  | `db.col.find({"likes":{$lt:50}}).pretty()`  | `where likes < 50`  |
| 小于或等于 | `{:{$lte:}}` | `db.col.find({"likes":{$lte:50}}).pretty()` | `where likes <= 50` |
| 大于       | `{:{$gt:}}`  | `db.col.find({"likes":{$gt:50}}).pretty()`  | `where likes > 50`  |
| 大于或等于 | `{:{$gte:}}` | `db.col.find({"likes":{$gte:50}}).pretty()` | `where likes >= 50` |
| 不等于     | `{:{$ne:}}`  | `db.col.find({"likes":{$ne:50}}).pretty()`  | `where likes != 50` |

+  **AND 条件**

+  find() 方法可以传入**多个键**(key)，每个键(key)以**逗号隔开**，即常规 SQL  的 AND 条件
+ db.col.find({key1:value1, key2:value2}).pretty()

+ **OR 条件**
+ db.col.find(   {      $or: [       {key1: value1}, {key2:value2}      ]   } ).pretty()