在`typescript-action`中读取`action.yml`的`inputs`、输出到终端以及执行命令，可以按照以下步骤操作：

1. **创建并设置`action.yml`**：在你的GitHub Action 仓库中定义动作的元数据，包括你的动作将会接收的`inputs`。

    例如：

    ```yaml
    name: 'My Action'
    description: 'This is my custom GitHub Action'
    inputs:
      myInput:
        description: 'An input to use within the action'
        required: true
        default: 'default value'
    runs:
      using: 'node12'
      main: 'dist/index.js'
    ```

2. **编写TypeScript代码**：在你的动作代码中使用`@actions/core`库来读取`action.yml`文件中定义的`inputs`，并使用`console.log`来输出到终端和`@actions/exec`库来执行命令。

    ```typescript
    import * as core from '@actions/core';
    import * as exec from '@actions/exec';

    async function run(): Promise<void> {
      try {
        // 读取input
        const myInput = core.getInput('myInput', { required: true });

        // 输出到终端
        console.log(`接收到的输入：${myInput}`);

        // 执行命令
        await exec.exec(`echo`, [myInput]);
      } catch (error) {
        if (error instanceof Error) {
          // 如果有错误，将动作置为失败状态
          core.setFailed(error.message);
        }
      }
    }

    run();
    ```

3. **编译TypeScript代码**：使用TypeScript编译器`tsc`来编译你的代码，因为GitHub Actions环境中运行的是JavaScript代码。

4. **测试你的动作**：在提交之前，先在本地测试编译后的JavaScript代码是否正常工作。

5. **提交并推送代码**：将你的`action.yml`以及编译后的代码提交到GitHub仓库。

6. **在工作流中使用你的动作**：在一个工作流`.yml`文件中引用你的动作，以便在GitHub Actions工作流中使用它。

这些步骤将帮助你创建一个GitHub动作，该动作能够读取输入参数、在终端输出内容并执行命令。记得根据你的需求调整代码细节，并确保遵循GitHub Actions的最佳实践。...
