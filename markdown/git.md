# GIT 教程

#### git初始化配置

1. 配置用户信息(修改一样)：
   - **git config --global([--system | 不写]) user.name "用户名"**
     - --system ：系统对所有用户都适用这个配置
     - --global：适用于该用户的配置
     - 不写 ：适用当前项目
   - **git config --global user.email 邮箱地址**
2. 查看配置信息：
   - **git config --list**
3. 初始化仓库，将项目交给git管理
   - **git init** 

#### git底层概念(底层命令)

##### .git目录

1. hooks -- 包含客户端或服务端的钩子脚本
2. info -- 全局性排除文件
3. logs -- 日志信息
4. objects -- 存储所有的数据内容（数据库）
5. refs -- 存储指向数据（分支）的提交对象的指针
6. description -- 用来显示对仓库的描述信息
7. HEAD -- 当前指向的分支
8. index -- 保存暂存区信息

##### linux 基础命令

1. **clear** --清除屏幕
2. **ll** -- 查看当前目录下的所有文件和目录
3. **find 目录名** -- 查看当前目录下所有的子孙文件和子孙目录
4. **find 目录名 -type f** -- 查看当前目录下的所有文件
5. **rm 文件名** -- 删除文件
6. **mv 源文件 重命名文件** -- 重命名
7. **cat 文件的url** -- 查看文件内容
8. **vim 文件的url**  -- 进入编辑模型（不能修改）
   - 按 i  进入插入模式,可进行文件修改
   - 按 esc  退出编辑  =》按 ：(写命令) =》wq -- 保存退出  q! -- 强制退出
9. **echo '内容'>文件名** -- 创建文件



##### git 知识

###### 	git对象

- ```
  1、git对象存的**不是增量**，而是存的快照
  2、git对象**只能存储内容**，**不能代表**项目的一个**版本**，只能代表文件的一个版本。
  3、未涉及到暂存区(导致一个git对象是一个文件版本)
  	解决办法：数对象
  4、git对象作用：存数据内容
  
  ```

######    树对象

- ```
  1、代表项目的每一次版本（项目快照）
  ```

  

##### 区域

1. 工作区(沙箱环境)
2. 暂存区
3. 版本库

##### 对象

1. **git对象**
   
   - **key : val**  组成的键值对(key是hash，val是内容)
   
   - 向数据库中写入内容，并返回键值
     - **echo '内容' | git hash-object -w --stdin**（| 执行另一个命令）
       - hash-object ：向数据库中写入内容
       - -w：若不指定，仅返回对应的键值，不会存在数据库
       - --stdin : 从标准输入读取内容；若不指定则必须在尾部指定待存储的文件路径
     
   - **git cat-file -p【-t 查看类型】 hash值**  -- 查看原内容
   
   - **对文件进行版本控制**
   
     - 例：
   
     - ```
       1、创建文件的第一个版本(未交给git管理)
       	echo 'dw jia you v1'
       2、将文件存到数据库(交给git管理)
       	git hash-object -w 文件路径
       3、修改文件内容(未存到数据库)
       	vim 文件路径
       4、将修改的文件保存到数据库
       	git hash-object -w 文件路径
       ```
   
       
   
2. **树对象**
   
   **构建树对象**——通过**update-index**；**write-tree**；**read-tree**；来构建数对象并**塞到暂存区**
   
   1. git update-index —— 为文件首个版本**创建一个暂存区**
   2. git write-tree —— **生成**一个**数对象**并放到**版本库中**去
   
   **查看暂存区—— git ls-files -s**
   
   - 例：
   
     - ```
       1、git update-index --add --cacheinfo 文件模式 hash值 文件名 ———— 
       	--add:首次将文件放入暂存区需要
     	--cacheinfo:文件在数据库中需要
       	
       2、生成树对象
       	git write-tree
       ```
       
       
   
   - 利用 **update-index** -- 为文件首个版本创建一个暂存区，通过**write-tree**生成树对象
     - 命令：
       - git update-index --add --cacheinfo 文件模式 \ hash值 **文件名** 
         - **--add**:当前文件不在暂存区，首次需要add
         - **--cacheinfo**:操作的文件在git数据库中，所以需要cacheinfo
       - git write-tree -- 创建书树对象
   
3. ##### 提交对象

   - ```
     1、创建提交对象
     	echo 'first commit' | git commit-tree 树对象hash值
     2、查看提交对象
     	git cat-file -p 创建提交返回的hash值
     	
     	
     每次提交指定父提交对象
     	echo '注释' | git commit-tree 树对象hash值 -p 父提交对象
     		-p:指定父提交对象
     ```



#### git本地操作(高层命令-需要记)

- 工作目录下的状态
  - **未跟踪**
  - **已跟踪**
    - 已修改
    - 已提交
    - 已暂存
- 修改已暂存文件
  - 运行过git add之后**又作修改**的文件，需要**重新运行git add**把最新的版本暂存起来。不然会出现一个**已修改**，一个**已暂存**的文件。

```
1、git add 【./或文件】 —— 将修改放到暂存区(如果是目录递归跟踪目录下的所有文件)
	将工作目录中的修改做成git对象放到版本库，在从版本库中拿出来放到暂存区(先到版本库再到暂存区)
	一个完整的流程至少包含一个git对象，一个树对象，一个提交对象
2、git commit -m '注释'(适合注释比较少的)
	git commit —— 进入注释编辑页面，保存退出后提交
	git commit -a —— 跳过暂存区提交
	git commit -a -m ''
3、git status —— 查看当前文件状态
	红色：未跟踪或已修改
	绿色：已暂存
4、git diff —— 查看更新后还没暂存的文件
5、git diff --staged —— 查看更新后已暂存还没提交的文件
6、1)rm 文件名 —— 删除文件
	在工作目录是一个删除操作，而在git中是一个修改操作
6、2)git rm 文件名
    1、从工作目录删除
    2、添加的到暂存区
7、1)mv 文件名 修改之后的文件名 —— 重命名文件
	先删除一个文件再创建一个新的文件
7、2)git mv 原文件名 新文件名 —— 将工作目录中的文件重命名，再添加到暂存区
8、git log --oneline —— 查看提交的历史记录
9、git log —— 查看当前分支上的提交对象
10、git reflog —— 只有head有变化，reflog就会记录
```

#### git分支操作(杀手功能)

##### 命令

```
分支：指向最新提交对象的指针
1、git branch 分支名称 —— 创建新分支
2、git branch —— 查看分支列表(*代表当前分支)
3、git checkout 分支名称 —— 切换分支
4、git checkout -b 分支名 —— 创建一个分支并切换上去
	切换分支动到的3个地方：
		1、HEAD
		2、工作目录
		3、暂存区
5、git branch -d【-D】 分支名 —— 删除分支(不能自己删自己，必须切回主分支)
	-D：分支没有被合并，强制删除分支
	-d：删除空的分支或已经合并了的分支
6、git branch -v —— 查看分支的最后一次提交
7、git branch 分支名 提交的hash值 —— 时光机，回退版本
8、git log --oneline --decorate --graph --all —— 查看所有分支列表历史
9、git branch --merged —— 查看合并到当前分支的分支，一旦出现在列表中就应该删除
10、git branch --no-merged —— 查看没有合并到当前分支的分支，一旦出现在列表中应该观察是否要合并

注意：
	每次切换分支前，应确保当前分支是干净的（已提交状态）
 坑：在切换分支时，如果当前分支上有未暂存的修改或未提交的暂存(第一次)，分支是可以提交成功，但是会污染其他分支
 
 合并分支:
 	1、git merge 分支名 —— 快进合并分支，不会产生冲突，会导致之前创建的分支过期.
 	2、git merge 分支名 —— 典型合并,可能会产生冲突。
 		解决冲突:
 			修改文件然后git add
 			
 分支模式：
 	1、长期分支(master、自己的仓库)
 	2、特性分支(自己仓库下创建的分支)
```

##### 配别名

- git config --global alias.别名 “命令”

##### git存储

```
当一个功能还没完善时，需要切换分支去处理其他事情，但又不想提交就用git存储（提交了但不会显示在日志上）。

    1、git stash list —— 查看存储
    2、git stash —— 设置存储
    3、git stash apply —— 应用存储(存储库第一个，先进后出原理),不会在栈中删除这个元素
    4、git stash drop 存储名(stash@{0}) —— 删除存储
    5、git stash pop —— 应用存储，然后立即删除它
```

#### 后悔药

```
1、工作区
	git checkout -- 文件名 —— 撤销在工作目录中的修改。
2、暂存区
	git reset HEAD 文件名 —— 撤销暂存区的修改
3、版本库
	git commit --amend —— 撤销提交(只是修改注释，本质上是重新提交，日志中会覆盖掉之前)
	撤销提交的情况：
		1、注释写错导致日志不干净
```

##### reset三部曲

```
移动HEAD:
    1、git reset --soft HEAD~ —— 回到上一次head
        reset移动HEAD指向的分支(带着分支一起移动)。相当于（git commit --amend）
        查看HEAD对象：git cat-file -p HEAD
    2、git reset --mixed HEAD~ 。与git reset HEAD 文件名 像
    	动HEAD（带着分支一起移动）
    	动暂存区
    3、git reset --hard HEAD~ —— 强制覆盖（如果没提交则会导致文件销毁）
    	动HEAD（带着分支一起移动）。与git checkout --文件名 像
    	动暂存区
    	动工作目录
    	注意：--hard是一个危险环境
    	
git checkout 分支名 和 git reset --hard 提交对象的区别
	1、checkout只动HEAD,--hard动HEAD且带着分支一起动
	2、checkout对工作目录是安全的，--hard是强制覆盖工作目录
```

#### 数据恢复

```
1、git reset --hard 提交对象 —— 硬重置回去
2、git branch 分支名 提交对象
```

#### 打tag

**标签类型：**

1. 轻量标签 —— 像一个不会改变的分支，一个特定提交的引用。
2. 附注标签

**命令：**

1. 列出标签

   ```
   1、git tag
   2、git tag -l 'v1.8.5*' —— 列出1.8.5之前的所有的版本
   ```

2. 创建标签

   ```
   1、git tag v1.0 —— 不指定提交对象，默认是最新的提交的对象
   2、git tag v1.0 提交对象 —— 指定提交对象
   ```

3. 查看标签

   ```
   git show 标签名
   ```

4. 删除标签

   ```
   git tag -d 标签名
   ```

5.检出标签

```
如果想查看某个标签所指定的版本，可以使用git checkout
	git checkout 标签名 —— 会出现头部分离的状态
	解决头部分离：
		git checkout -b 分支名
```



#### git流程

```
1、初始化仓库（创建工作目录git init）
2、将修改后的目录放到暂存区（git add ./）
	底层：git hash-object -w 文件名(修改多少个文件就执行多少次，每一次生成一个git对象)
		 git update-index ...
3、提交(git commit -m '')
	底层：git write-tree
		 git commit-tree
```



### 远程协作基本流程

```
1、项目经理创建远程仓库
2、项目经理创建本地仓库
	git init
	放入源码
	git add ./
	git commit 
3、项目经理为远程仓库配置别名&用户信息(看初始化配置)
	git remote add 别名 url —— 配置别名
	git remote -v —— 查看配置的别名
	git branch -vv —— 查看 本地分支 跟踪 的 远程跟踪分支
4、项目经理将本地项目推送到远程仓库（推送之后会生成一个远程跟踪分支）
	git push 路径别名 分支名称
5、成员克隆远程仓库到本地
	git clone 远程仓库地址(在本地生成.git文件 默认为远程仓库配了别名 origin，主分支有对应的远程跟踪分支)
	只有在克隆的时候，本地分支master 和 远程跟踪分支（别名/master）是同步关系
6、项目经理邀请成员
	将链接发给被邀请人
7、成员修改后推送到远程仓库
	git add ./
	git commit 
	git push 别名 分支名称
8、项目经理更新文件（分支操作）
	git fetch 别名(将修改同步远程跟踪分支上)
	合并远程跟踪分支 git merge 远程跟踪分支上
	
创建了新分支：
	1、成员创建分支并推送到远程仓库
		git branch -b 分支名
		git add ./
		git commit
		git push url别名 分支名
	2、项目经理拉取分支
		git fetch url别名 —— 将修改拉取到远程跟踪分支
		git branch 分支名 —— 创建相同的分支并切换上去
		git merge 远程跟踪分支 —— 合并远程跟踪分支
		
			简化2：
				git branch -u 别名/分支名
				git pull
		
简化 拉取 和 上传 操作：
1.确保本地分支 跟踪 远程跟踪分支(git branch -u 别名/分支名称)
2.拉取：git pull
3.上传：git push


本地分支 跟踪 远程跟踪分支的 方式：
	1.在新建分支时，可以指定要跟踪的远程跟踪分支
		先全量的 fetch下
		1.git checkout -b 本地分支名 远程跟踪分支名
		或
		2.git checkout --track 远程跟踪分支名（直接在本地创建同名的本地分支）
	2.将一个已经存在的本地分支 去 跟踪 一个远程跟踪分支
		git branch -u 远程跟踪分支名
	
	
		
```

#### 三个分支

1. 远程分支

   ```
   删除远程分支：
   	1.git push origin --delete 远程分支名 —— 删除分支
   	2.git remote prune origin --dry-run —— 列出仍在远程跟踪但是远程已被删除的无用分支
   	3.git remote prune origin —— 清除上面命令列出来的远程跟踪
   ```

   

2. 远程跟踪分支

   **远程跟踪分支**是**远程分支**的**引用**。做任何通信操作时，会自动移动。

3. 本地分支

#### 解决冲突

```
冲突：两个人改了同一个文件的同一行代码，导致一个人不能push成功
解决：
	1.先更新文件 git pull
	2.修改冲突
	3.git add ./ git commit 
	4.git push
冲突2：一个人改了一个文件，另一个人修改了同一个文件同一代码后再去更新文件(git pull)。
解决：
	1.git add ./ git commit 
	2.git pull
	3.修改冲突
	4.git push
```



### pull request(大佬)

```
参与某个项目，但没有推送权限。
点击pull request 给项目留言。
修改完成后点击 merge pull request

当项目有出现bug时：
	1.重新配置url别名 git remote add 别名 url，
	2.git fetch url别名(将修改同步远程跟踪分支上)
    3.再重新跟踪远程跟踪分支 git branch -u url别名/分支名
    4.git pull 拉取新的文件下来，继续修改bug
```



### 总结

​	**HEAD的本质是指向一个分支，分支的本质是一个提交对象，提交对象指向一个树对象，数对象指向一个或多个git对象，**

**一个git对象代表一个文件！！！**



28

