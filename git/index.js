// 1、Git 提交代码到主分支要经历哪些操作
// git add all /  git commit -m 'test' / git push origin master

// 2、Git 切换分支 git checkout dev 查看当前分支 git branch 切换分支 git checkout dev

// 3、Git 检出远程分支 git checkout -b develop origin/develop

// 4、Git 刷新远程分支 git remote update origin --prune

// 5、Git 关联远程仓库 git remote add origin xxxxxx

// 6、Git 显示工作目录和暂存区的状态 git status

// 7、Git 清除工作区的所有修改 git checkout -- .

// 8、Git 合并分支（当前所在分支为master） git merge dev

// 9、Git 删除分支 git branch -d dev

// 10、Git 储存当前修改 git stash save "save message" 
 
// 11、Git 应用储存 git stash apply stash@{0}

// 12、Git 打标签，默认打在最新提交上  git tag v1.0

// 13、Git 查看远程地址 git remote -v 

// 14、Git 查看远程分支 git branch -a

// 15、Git 钩子pre-commit

// 16、git 拉取远程代码到本地
    // 1、新建文件夹
    // 2、初始化： git init
    // 3、关联远程仓库：git remote add origin git@github.com:XXXX/nothing2.git
    // 4、拉取远程仓库分支：git fetch --all
    // 5、检出远程分支到本地：git checkout -b develop origin/develop
    // 6、git add .   /   git commit -m 'test'   / git push origin

// 17、 git reset --soft HEAD^