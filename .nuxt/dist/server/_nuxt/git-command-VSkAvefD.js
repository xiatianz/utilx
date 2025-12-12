import { ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { Terminal, Info } from "lucide-vue-next";
import { f as useSeoMeta } from "../server.mjs";
import "/Users/apple/Documents/code/util/node_modules/hookable/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/apple/Documents/code/util/node_modules/unctx/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/apple/Documents/code/util/node_modules/radix3/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/defu/dist/defu.mjs";
import "/Users/apple/Documents/code/util/node_modules/ufo/dist/index.mjs";
import "/Users/apple/Documents/code/util/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "git-command",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategory = ref("");
    const copied = ref(false);
    const config = ref({
      // 初始化
      repoName: "",
      bare: false,
      // 克隆
      repoUrl: "",
      targetDir: "",
      depth: false,
      // 提交
      commitMessage: "",
      addOption: "all",
      specificFiles: "",
      amend: false,
      // 分支
      branchAction: "create",
      branchName: "",
      forceDelete: false,
      // 推送
      remote: "origin",
      branch: "main",
      setUpstream: false,
      force: false,
      // 拉取
      rebase: false,
      // 合并
      sourceBranch: "",
      noCommit: false,
      squash: false
    });
    const commandCategories = [
      { value: "init", name: "初始化", description: "创建新的 Git 仓库" },
      { value: "clone", name: "克隆", description: "克隆远程仓库" },
      { value: "commit", name: "提交", description: "提交更改到仓库" },
      { value: "branch", name: "分支", description: "管理 Git 分支" },
      { value: "push", name: "推送", description: "推送到远程仓库" },
      { value: "pull", name: "拉取", description: "从远程仓库拉取" },
      { value: "merge", name: "合并", description: "合并分支" }
    ];
    const generatedCommand = computed(() => {
      if (!selectedCategory.value) return "";
      let commands = [];
      switch (selectedCategory.value) {
        case "init":
          if (config.value.repoName) {
            commands.push(`mkdir ${config.value.repoName}`);
            commands.push(`cd ${config.value.repoName}`);
          }
          const initCmd = ["git init"];
          if (config.value.bare) initCmd.push("--bare");
          commands.push(initCmd.join(" "));
          break;
        case "clone":
          const cloneCmd = ["git clone"];
          if (config.value.depth) cloneCmd.push("--depth 1");
          cloneCmd.push(config.value.repoUrl || "<repository-url>");
          if (config.value.targetDir) cloneCmd.push(config.value.targetDir);
          commands.push(cloneCmd.join(" "));
          break;
        case "commit":
          if (config.value.addOption === "all") {
            commands.push("git add .");
          } else if (config.value.addOption === "specific" && config.value.specificFiles) {
            commands.push(`git add ${config.value.specificFiles}`);
          }
          const commitCmd = ["git commit"];
          if (config.value.amend) commitCmd.push("--amend");
          if (config.value.commitMessage) {
            commitCmd.push(`-m "${config.value.commitMessage}"`);
          }
          commands.push(commitCmd.join(" "));
          break;
        case "branch":
          switch (config.value.branchAction) {
            case "create":
              commands.push(`git branch ${config.value.branchName || "<branch-name>"}`);
              break;
            case "switch":
              commands.push(`git switch ${config.value.branchName || "<branch-name>"}`);
              break;
            case "create-switch":
              commands.push(`git switch -c ${config.value.branchName || "<branch-name>"}`);
              break;
            case "delete":
              const deleteCmd = ["git branch"];
              if (config.value.forceDelete) deleteCmd.push("-D");
              else deleteCmd.push("-d");
              deleteCmd.push(config.value.branchName || "<branch-name>");
              commands.push(deleteCmd.join(" "));
              break;
            case "list":
              commands.push("git branch -a");
              break;
          }
          break;
        case "push":
          const pushCmd = ["git push"];
          if (config.value.setUpstream) pushCmd.push("-u");
          if (config.value.force) pushCmd.push("--force");
          pushCmd.push(config.value.remote || "origin");
          pushCmd.push(config.value.branch || "main");
          commands.push(pushCmd.join(" "));
          break;
        case "pull":
          const pullCmd = ["git pull"];
          if (config.value.rebase) pullCmd.push("--rebase");
          pullCmd.push(config.value.remote || "origin");
          pullCmd.push(config.value.branch || "main");
          commands.push(pullCmd.join(" "));
          break;
        case "merge":
          const mergeCmd = ["git merge"];
          if (config.value.noCommit) mergeCmd.push("--no-commit");
          if (config.value.squash) mergeCmd.push("--squash");
          mergeCmd.push(config.value.sourceBranch || "<source-branch>");
          commands.push(mergeCmd.join(" "));
          break;
      }
      return commands.join("\n");
    });
    const commandDescription = computed(() => {
      if (!selectedCategory.value) return [];
      const descriptions = {
        init: [
          "git init 用于在当前目录创建一个新的 Git 仓库",
          "使用 --bare 参数可以创建裸仓库，通常用于作为远程仓库",
          "裸仓库不包含工作目录，只包含 Git 版本控制数据"
        ],
        clone: [
          "git clone 用于从远程仓库复制到本地",
          "--depth 1 参数只克隆最新的一次提交，减少下载时间",
          "可以指定目标目录名，不指定则使用仓库名"
        ],
        commit: [
          "git add 将文件添加到暂存区，准备提交",
          "git commit 将暂存区的更改提交到本地仓库",
          "--amend 可以修改最后一次提交（谨慎使用）"
        ],
        branch: [
          "git branch 用于创建、列出、删除分支",
          "git switch 用于切换分支",
          "-D 强制删除未合并的分支（谨慎使用）"
        ],
        push: [
          "git push 将本地提交推送到远程仓库",
          "-u 参数设置上游分支，后续可以直接使用 git push",
          "--force 强制推送（可能覆盖远程更改，谨慎使用）"
        ],
        pull: [
          "git pull 从远程仓库获取最新更改并合并",
          "--rebase 使用 rebase 而不是 merge，保持线性历史",
          "相当于 git fetch + git merge"
        ],
        merge: [
          "git merge 将其他分支的更改合并到当前分支",
          "--no-commit 合并但不自动提交",
          "--squash 将多个提交压缩为一个"
        ]
      };
      return descriptions[selectedCategory.value] || [];
    });
    const commandExamples = [
      {
        title: "初始化新项目",
        command: 'git init && git add . && git commit -m "Initial commit"'
      },
      {
        title: "创建功能分支",
        command: "git checkout -b feature/new-feature"
      },
      {
        title: "暂存当前工作",
        command: 'git stash push -m "Work in progress"'
      },
      {
        title: "查看提交历史",
        command: "git log --oneline --graph --all"
      },
      {
        title: "撤销未提交的更改",
        command: "git checkout -- file.js"
      },
      {
        title: "撤销最后一次提交",
        command: "git reset --soft HEAD~1"
      }
    ];
    watch(selectedCategory, () => {
      config.value = {
        // 初始化
        repoName: "",
        bare: false,
        // 克隆
        repoUrl: "",
        targetDir: "",
        depth: false,
        // 提交
        commitMessage: "",
        addOption: "all",
        specificFiles: "",
        amend: false,
        // 分支
        branchAction: "create",
        branchName: "",
        forceDelete: false,
        // 推送
        remote: "origin",
        branch: "main",
        setUpstream: false,
        force: false,
        // 拉取
        rebase: false,
        // 合并
        sourceBranch: "",
        noCommit: false,
        squash: false
      };
    });
    useSeoMeta({
      title: "Git 命令生成器 - 可视化 Git 命令生成工具",
      description: "免费的在线 Git 命令生成器，可视化配置生成 Git 命令，支持初始化、克隆、提交、分支、推送、拉取、合并等常用 Git 操作。",
      keywords: ["git", "命令生成", "版本控制", "git命令", "可视化", "github", "gitlab"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Git 命令生成器</h1><p class="text-muted-foreground">可视化生成 Git 命令，支持常用 Git 操作和命令组合</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">操作类型</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commandCategories, (category2) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedCategory.value === category2.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(category2.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(category2.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedCategory.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">配置选项</h2>`);
        if (selectedCategory.value === "init") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">仓库名称</label><input${ssrRenderAttr("value", config.value.repoName)} type="text" placeholder="my-project" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.bare) ? ssrLooseContain(config.value.bare, null) : config.value.bare) ? " checked" : ""} type="checkbox" id="bare" class="rounded text-primary focus:ring-primary"><label for="bare" class="text-sm">创建裸仓库</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "clone") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">仓库 URL</label><input${ssrRenderAttr("value", config.value.repoUrl)} type="text" placeholder="https://github.com/user/repo.git" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">目标目录（可选）</label><input${ssrRenderAttr("value", config.value.targetDir)} type="text" placeholder="my-project" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.depth) ? ssrLooseContain(config.value.depth, null) : config.value.depth) ? " checked" : ""} type="checkbox" id="depth" class="rounded text-primary focus:ring-primary"><label for="depth" class="text-sm">浅克隆（仅最新提交）</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "commit") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">提交消息</label><textarea placeholder="Fix bug in user authentication" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-24 resize-none">${ssrInterpolate(config.value.commitMessage)}</textarea></div><div><label class="text-sm font-medium">添加的文件</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(config.value.addOption) ? ssrLooseContain(config.value.addOption, "all") : ssrLooseEqual(config.value.addOption, "all")) ? " selected" : ""}>添加所有更改 (git add .)</option><option value="staged"${ssrIncludeBooleanAttr(Array.isArray(config.value.addOption) ? ssrLooseContain(config.value.addOption, "staged") : ssrLooseEqual(config.value.addOption, "staged")) ? " selected" : ""}>仅暂存的文件</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.addOption) ? ssrLooseContain(config.value.addOption, "specific") : ssrLooseEqual(config.value.addOption, "specific")) ? " selected" : ""}>指定文件</option></select></div>`);
          if (config.value.addOption === "specific") {
            _push(`<div><input${ssrRenderAttr("value", config.value.specificFiles)} type="text" placeholder="file1.js file2.css" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.amend) ? ssrLooseContain(config.value.amend, null) : config.value.amend) ? " checked" : ""} type="checkbox" id="amend" class="rounded text-primary focus:ring-primary"><label for="amend" class="text-sm">修改最后一次提交</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "branch") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">操作</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="create"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "create") : ssrLooseEqual(config.value.branchAction, "create")) ? " selected" : ""}>创建新分支</option><option value="switch"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "switch") : ssrLooseEqual(config.value.branchAction, "switch")) ? " selected" : ""}>切换分支</option><option value="create-switch"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "create-switch") : ssrLooseEqual(config.value.branchAction, "create-switch")) ? " selected" : ""}>创建并切换</option><option value="delete"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "delete") : ssrLooseEqual(config.value.branchAction, "delete")) ? " selected" : ""}>删除分支</option><option value="list"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "list") : ssrLooseEqual(config.value.branchAction, "list")) ? " selected" : ""}>列出所有分支</option></select></div>`);
          if (config.value.branchAction !== "list") {
            _push(`<div><label class="text-sm font-medium">分支名称</label><input${ssrRenderAttr("value", config.value.branchName)} type="text" placeholder="feature/new-feature" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.branchAction === "delete") {
            _push(`<div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.forceDelete) ? ssrLooseContain(config.value.forceDelete, null) : config.value.forceDelete) ? " checked" : ""} type="checkbox" id="forceDelete" class="rounded text-primary focus:ring-primary"><label for="forceDelete" class="text-sm">强制删除</label></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "push") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">远程仓库</label><input${ssrRenderAttr("value", config.value.remote)} type="text" placeholder="origin" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">分支</label><input${ssrRenderAttr("value", config.value.branch)} type="text" placeholder="main" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.setUpstream) ? ssrLooseContain(config.value.setUpstream, null) : config.value.setUpstream) ? " checked" : ""} type="checkbox" id="setUpstream" class="rounded text-primary focus:ring-primary"><label for="setUpstream" class="text-sm">设置上游分支</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.force) ? ssrLooseContain(config.value.force, null) : config.value.force) ? " checked" : ""} type="checkbox" id="force" class="rounded text-primary focus:ring-primary"><label for="force" class="text-sm">强制推送</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "pull") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">远程仓库</label><input${ssrRenderAttr("value", config.value.remote)} type="text" placeholder="origin" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">分支</label><input${ssrRenderAttr("value", config.value.branch)} type="text" placeholder="main" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.rebase) ? ssrLooseContain(config.value.rebase, null) : config.value.rebase) ? " checked" : ""} type="checkbox" id="rebase" class="rounded text-primary focus:ring-primary"><label for="rebase" class="text-sm">使用 rebase</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "merge") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">源分支</label><input${ssrRenderAttr("value", config.value.sourceBranch)} type="text" placeholder="feature-branch" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.noCommit) ? ssrLooseContain(config.value.noCommit, null) : config.value.noCommit) ? " checked" : ""} type="checkbox" id="noCommit" class="rounded text-primary focus:ring-primary"><label for="noCommit" class="text-sm">不自动提交</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.squash) ? ssrLooseContain(config.value.squash, null) : config.value.squash) ? " checked" : ""} type="checkbox" id="squash" class="rounded text-primary focus:ring-primary"><label for="squash" class="text-sm">压缩合并</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">生成的命令</h2><button${ssrIncludeBooleanAttr(!generatedCommand.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "已复制" : "复制")}</button></div><div class="bg-muted/30 rounded-lg p-4">`);
      if (generatedCommand.value) {
        _push(`<code class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(generatedCommand.value)}</code>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8">`);
        _push(ssrRenderComponent(unref(Terminal), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>请选择操作类型并配置选项</p></div>`);
      }
      _push(`</div></div>`);
      if (generatedCommand.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">命令说明</h2><div class="space-y-3 text-sm text-muted-foreground"><!--[-->`);
        ssrRenderList(commandDescription.value, (desc) => {
          _push(`<div class="flex gap-2"><span class="text-primary">•</span><span>${ssrInterpolate(desc)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">常用命令示例</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(commandExamples, (example) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><h4 class="font-medium text-sm mb-1">${ssrInterpolate(example.title)}</h4><code class="text-xs text-muted-foreground">${ssrInterpolate(example.command)}</code></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Git 工作流程指南 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">基础工作流程</h4><ol class="space-y-2 text-sm text-muted-foreground"><li>1. <code>git init</code> - 初始化仓库</li><li>2. <code>git add .</code> - 添加文件到暂存区</li><li>3. <code>git commit -m &quot;message&quot;</code> - 提交更改</li><li>4. <code>git remote add origin url</code> - 添加远程仓库</li><li>5. <code>git push -u origin main</code> - 推送到远程</li></ol></div><div><h4 class="font-medium text-foreground mb-2">分支工作流程</h4><ol class="space-y-2 text-sm text-muted-foreground"><li>1. <code>git checkout -b feature</code> - 创建功能分支</li><li>2. 开发和提交更改</li><li>3. <code>git checkout main</code> - 切回主分支</li><li>4. <code>git merge feature</code> - 合并分支</li><li>5. <code>git push origin main</code> - 推送主分支</li></ol></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/git-command.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=git-command-VSkAvefD.js.map
