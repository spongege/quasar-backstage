### 代码书写以及提交规范

1、编码编写遵循`eslint`规范，自定义了一些配置，详情可查看`.eslintrc.js`文件

2、提交代码遵循`Angular规范`，系统化管理提交记录，可查看`commitlint.config.js`文件，如下：

```js
{
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'revert', // 回滚
        'config', // 构建过程或辅助工具的变动
        'chore' // 其他改动
      ]
    ],
    'type-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
```

3、使用`prettier`作为代码格式化工具，开发工具设置保存格式化，具体可在网上查看不同开发工具的配置，比如`vscode`可以在`setting.json`中加入如下配置：

```js
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
```
