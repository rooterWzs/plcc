### 作者联系方式
**微信**：ZhisWang （请备注plcc）

**邮箱**：1406110602@qq.com

**<font style="background-color:#FBDE28;">大家在使用过程中遇到问题是请及时联系我</font>**

### 简介：
这是一个使用Java语言实现了与PLC通信的中间件，我给他取了一个名字叫PLCC（即PLC-Communication的缩写），您只需要使用HTTP协议，调用PLCC接口即可读取PLC的点位，帮助您更专注您的应用而非通信本身，并且PLCC保证了的大批量点位的读取效率（300ms内读完所有点位）。 

现已兼容亚控KingIOServer；



目前已接入**欧姆龙PLC，OMRON Fins** 协议， 未来将会扩展更多的品牌，下一阶段会优先支持西门子S7协议和Modbus协议。

### 使用方式：
安装JDK1.8（[点击下载](https://www.oracle.com/java/technologies/downloads/#java8)）

打开CMD，通过** java -jar plc-communication.jar** 启动，在浏览器打开**127.0.0.1:8080** 访问



#### 1、配置你要读取的点位
![](https://cdn.nlark.com/yuque/0/2024/png/12485503/1731480684581-444d2791-35ba-4b02-988c-01dc0dcc40ee.png)

![](https://cdn.nlark.com/yuque/0/2024/png/12485503/1731483500450-c0afb753-0d32-40c7-8b34-6eed957a5a70.png)



#### 2、通过HTTP获取点位状态 
POST <font style="color:rgb(33, 33, 33);">http://127.0.0.1:8080/api/IOServer/getAllVars</font>

![](https://cdn.nlark.com/yuque/0/2024/png/12485503/1731484906412-db592585-8c2e-4efe-947e-a7f7bd03f0b1.png)

### 开发计划
| 增加PLC写入功能 |
| --- |
| 接入西门子S7协议 |
| 接入Modbus协议 |



