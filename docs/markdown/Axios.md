### Axios

```
axios请求返回一个promise函数。
成功执行then
失败执行catch
不管成功还是失败都执行finally
```

#### get请求

##### axios.get(url)

```
可在请求地址后面拼接参数。
```

##### axios.get(url,{params: {}})

```
params对象中是要传递的参数。
```

#### post请求

##### axios.post(url,obj)

```
obj中存放的是请求参数。
```

#### 通过配置的方式来创建请求

##### axios(obj)

| 属性   | 类型   | 说明              |
| ------ | ------ | ----------------- |
| method | string | 请求方式。默认get |
| url    | string | 请求地址。        |
| data   | obj    | 请求参数。        |

#### 创建axios实例对象

```
可设置公共的请求路径和请求超时时间。
```

##### axios.create(obj)

###### obj配置信息

| 属性            | 类型    | 说明                                                       |
| --------------- | ------- | ---------------------------------------------------------- |
| url             | string  | 请求地址。                                                 |
| method          | string  | 请求类型。默认get                                          |
| baseUrl         | string  | 公共基本请求地址。                                         |
| timeout         | number  | 超时时间。ms                                               |
| params          | obj     | 携带参数。                                                 |
| data            | obj     | 请求参数。只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'。 |
| withCredentials | Boolean | 表示跨域请求时是否需要使用凭证。                           |
| proxy           | obj     | 定义代理服务器的主机名称和端口。                           |

#### 请求拦截器

```
在请求或响应被 then 或 catch 处理前拦截它们。
tips：
	拦截成功后必须把回调参数return出去
```

##### 请求拦截

###### axios.interceptors.request.use(success(config),error)

##### 响应拦截

###### axios.interceptors.response.ust(success(res),error)