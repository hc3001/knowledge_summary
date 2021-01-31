// 1、Git 提交代码到主分支要经历哪些操作
// git add all /  git commit -m 'test' / git push origin master

// 2、Git 切换分支 git checkout dev 查看当前分支 git branch 切换分支 git checkout dev

// 3、Git 检出远程分支 git checkout -b develop origin/develop

// 4、Git 刷新远程分支 git remote update origin --prune

// 5、Git 连接远程分支 git remote add origin xxxxxx

// 6、Git 显示工作目录和暂存区的状态 git status

// 7、Git 清除工作区的所有修改 git checkout -- .

// 8、Git 合并分支（当前所在分支为master） git merge dev

// 9、Git 删除分支 git branch -d dev

// 10、Git 储存当前修改 git stash save "save message" 
 
// 11、Git 应用储存 git stash apply stash@{0}

// 12、Git 打标签，默认打在最新提交上  git tag v1.0
