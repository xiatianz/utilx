import { ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'vue/server-renderer';
import { Terminal, Info } from 'lucide-vue-next';
import { f as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

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
      { value: "init", name: "\u521D\u59CB\u5316", description: "\u521B\u5EFA\u65B0\u7684 Git \u4ED3\u5E93" },
      { value: "clone", name: "\u514B\u9686", description: "\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93" },
      { value: "commit", name: "\u63D0\u4EA4", description: "\u63D0\u4EA4\u66F4\u6539\u5230\u4ED3\u5E93" },
      { value: "branch", name: "\u5206\u652F", description: "\u7BA1\u7406 Git \u5206\u652F" },
      { value: "push", name: "\u63A8\u9001", description: "\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93" },
      { value: "pull", name: "\u62C9\u53D6", description: "\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6" },
      { value: "merge", name: "\u5408\u5E76", description: "\u5408\u5E76\u5206\u652F" }
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
          "git init \u7528\u4E8E\u5728\u5F53\u524D\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Git \u4ED3\u5E93",
          "\u4F7F\u7528 --bare \u53C2\u6570\u53EF\u4EE5\u521B\u5EFA\u88F8\u4ED3\u5E93\uFF0C\u901A\u5E38\u7528\u4E8E\u4F5C\u4E3A\u8FDC\u7A0B\u4ED3\u5E93",
          "\u88F8\u4ED3\u5E93\u4E0D\u5305\u542B\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u53EA\u5305\u542B Git \u7248\u672C\u63A7\u5236\u6570\u636E"
        ],
        clone: [
          "git clone \u7528\u4E8E\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u590D\u5236\u5230\u672C\u5730",
          "--depth 1 \u53C2\u6570\u53EA\u514B\u9686\u6700\u65B0\u7684\u4E00\u6B21\u63D0\u4EA4\uFF0C\u51CF\u5C11\u4E0B\u8F7D\u65F6\u95F4",
          "\u53EF\u4EE5\u6307\u5B9A\u76EE\u6807\u76EE\u5F55\u540D\uFF0C\u4E0D\u6307\u5B9A\u5219\u4F7F\u7528\u4ED3\u5E93\u540D"
        ],
        commit: [
          "git add \u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u6682\u5B58\u533A\uFF0C\u51C6\u5907\u63D0\u4EA4",
          "git commit \u5C06\u6682\u5B58\u533A\u7684\u66F4\u6539\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93",
          "--amend \u53EF\u4EE5\u4FEE\u6539\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\uFF08\u8C28\u614E\u4F7F\u7528\uFF09"
        ],
        branch: [
          "git branch \u7528\u4E8E\u521B\u5EFA\u3001\u5217\u51FA\u3001\u5220\u9664\u5206\u652F",
          "git switch \u7528\u4E8E\u5207\u6362\u5206\u652F",
          "-D \u5F3A\u5236\u5220\u9664\u672A\u5408\u5E76\u7684\u5206\u652F\uFF08\u8C28\u614E\u4F7F\u7528\uFF09"
        ],
        push: [
          "git push \u5C06\u672C\u5730\u63D0\u4EA4\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",
          "-u \u53C2\u6570\u8BBE\u7F6E\u4E0A\u6E38\u5206\u652F\uFF0C\u540E\u7EED\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 git push",
          "--force \u5F3A\u5236\u63A8\u9001\uFF08\u53EF\u80FD\u8986\u76D6\u8FDC\u7A0B\u66F4\u6539\uFF0C\u8C28\u614E\u4F7F\u7528\uFF09"
        ],
        pull: [
          "git pull \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u83B7\u53D6\u6700\u65B0\u66F4\u6539\u5E76\u5408\u5E76",
          "--rebase \u4F7F\u7528 rebase \u800C\u4E0D\u662F merge\uFF0C\u4FDD\u6301\u7EBF\u6027\u5386\u53F2",
          "\u76F8\u5F53\u4E8E git fetch + git merge"
        ],
        merge: [
          "git merge \u5C06\u5176\u4ED6\u5206\u652F\u7684\u66F4\u6539\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F",
          "--no-commit \u5408\u5E76\u4F46\u4E0D\u81EA\u52A8\u63D0\u4EA4",
          "--squash \u5C06\u591A\u4E2A\u63D0\u4EA4\u538B\u7F29\u4E3A\u4E00\u4E2A"
        ]
      };
      return descriptions[selectedCategory.value] || [];
    });
    const commandExamples = [
      {
        title: "\u521D\u59CB\u5316\u65B0\u9879\u76EE",
        command: 'git init && git add . && git commit -m "Initial commit"'
      },
      {
        title: "\u521B\u5EFA\u529F\u80FD\u5206\u652F",
        command: "git checkout -b feature/new-feature"
      },
      {
        title: "\u6682\u5B58\u5F53\u524D\u5DE5\u4F5C",
        command: 'git stash push -m "Work in progress"'
      },
      {
        title: "\u67E5\u770B\u63D0\u4EA4\u5386\u53F2",
        command: "git log --oneline --graph --all"
      },
      {
        title: "\u64A4\u9500\u672A\u63D0\u4EA4\u7684\u66F4\u6539",
        command: "git checkout -- file.js"
      },
      {
        title: "\u64A4\u9500\u6700\u540E\u4E00\u6B21\u63D0\u4EA4",
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
      title: "Git \u547D\u4EE4\u751F\u6210\u5668 - \u53EF\u89C6\u5316 Git \u547D\u4EE4\u751F\u6210\u5DE5\u5177",
      description: "\u514D\u8D39\u7684\u5728\u7EBF Git \u547D\u4EE4\u751F\u6210\u5668\uFF0C\u53EF\u89C6\u5316\u914D\u7F6E\u751F\u6210 Git \u547D\u4EE4\uFF0C\u652F\u6301\u521D\u59CB\u5316\u3001\u514B\u9686\u3001\u63D0\u4EA4\u3001\u5206\u652F\u3001\u63A8\u9001\u3001\u62C9\u53D6\u3001\u5408\u5E76\u7B49\u5E38\u7528 Git \u64CD\u4F5C\u3002",
      keywords: ["git", "\u547D\u4EE4\u751F\u6210", "\u7248\u672C\u63A7\u5236", "git\u547D\u4EE4", "\u53EF\u89C6\u5316", "github", "gitlab"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-8xl mx-auto" }, _attrs))}><div class="mt-4 mb-8"><h1 class="text-3xl font-bold mb-3">Git \u547D\u4EE4\u751F\u6210\u5668</h1><p class="text-muted-foreground">\u53EF\u89C6\u5316\u751F\u6210 Git \u547D\u4EE4\uFF0C\u652F\u6301\u5E38\u7528 Git \u64CD\u4F5C\u548C\u547D\u4EE4\u7EC4\u5408</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u64CD\u4F5C\u7C7B\u578B</h2><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(commandCategories, (category2) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-3 rounded-md transition-colors text-left",
          selectedCategory.value === category2.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
        ])}"><div class="font-medium">${ssrInterpolate(category2.name)}</div><div class="text-xs opacity-80">${ssrInterpolate(category2.description)}</div></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedCategory.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u914D\u7F6E\u9009\u9879</h2>`);
        if (selectedCategory.value === "init") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u4ED3\u5E93\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.repoName)} type="text" placeholder="my-project" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.bare) ? ssrLooseContain(config.value.bare, null) : config.value.bare) ? " checked" : ""} type="checkbox" id="bare" class="rounded text-primary focus:ring-primary"><label for="bare" class="text-sm">\u521B\u5EFA\u88F8\u4ED3\u5E93</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "clone") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u4ED3\u5E93 URL</label><input${ssrRenderAttr("value", config.value.repoUrl)} type="text" placeholder="https://github.com/user/repo.git" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u76EE\u6807\u76EE\u5F55\uFF08\u53EF\u9009\uFF09</label><input${ssrRenderAttr("value", config.value.targetDir)} type="text" placeholder="my-project" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.depth) ? ssrLooseContain(config.value.depth, null) : config.value.depth) ? " checked" : ""} type="checkbox" id="depth" class="rounded text-primary focus:ring-primary"><label for="depth" class="text-sm">\u6D45\u514B\u9686\uFF08\u4EC5\u6700\u65B0\u63D0\u4EA4\uFF09</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "commit") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u63D0\u4EA4\u6D88\u606F</label><textarea placeholder="Fix bug in user authentication" class="mt-2 w-full px-3 py-2 border rounded-md text-sm h-24 resize-none">${ssrInterpolate(config.value.commitMessage)}</textarea></div><div><label class="text-sm font-medium">\u6DFB\u52A0\u7684\u6587\u4EF6</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(config.value.addOption) ? ssrLooseContain(config.value.addOption, "all") : ssrLooseEqual(config.value.addOption, "all")) ? " selected" : ""}>\u6DFB\u52A0\u6240\u6709\u66F4\u6539 (git add .)</option><option value="staged"${ssrIncludeBooleanAttr(Array.isArray(config.value.addOption) ? ssrLooseContain(config.value.addOption, "staged") : ssrLooseEqual(config.value.addOption, "staged")) ? " selected" : ""}>\u4EC5\u6682\u5B58\u7684\u6587\u4EF6</option><option value="specific"${ssrIncludeBooleanAttr(Array.isArray(config.value.addOption) ? ssrLooseContain(config.value.addOption, "specific") : ssrLooseEqual(config.value.addOption, "specific")) ? " selected" : ""}>\u6307\u5B9A\u6587\u4EF6</option></select></div>`);
          if (config.value.addOption === "specific") {
            _push(`<div><input${ssrRenderAttr("value", config.value.specificFiles)} type="text" placeholder="file1.js file2.css" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.amend) ? ssrLooseContain(config.value.amend, null) : config.value.amend) ? " checked" : ""} type="checkbox" id="amend" class="rounded text-primary focus:ring-primary"><label for="amend" class="text-sm">\u4FEE\u6539\u6700\u540E\u4E00\u6B21\u63D0\u4EA4</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "branch") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u64CD\u4F5C</label><select class="mt-2 w-full px-3 py-2 border rounded-md text-sm"><option value="create"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "create") : ssrLooseEqual(config.value.branchAction, "create")) ? " selected" : ""}>\u521B\u5EFA\u65B0\u5206\u652F</option><option value="switch"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "switch") : ssrLooseEqual(config.value.branchAction, "switch")) ? " selected" : ""}>\u5207\u6362\u5206\u652F</option><option value="create-switch"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "create-switch") : ssrLooseEqual(config.value.branchAction, "create-switch")) ? " selected" : ""}>\u521B\u5EFA\u5E76\u5207\u6362</option><option value="delete"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "delete") : ssrLooseEqual(config.value.branchAction, "delete")) ? " selected" : ""}>\u5220\u9664\u5206\u652F</option><option value="list"${ssrIncludeBooleanAttr(Array.isArray(config.value.branchAction) ? ssrLooseContain(config.value.branchAction, "list") : ssrLooseEqual(config.value.branchAction, "list")) ? " selected" : ""}>\u5217\u51FA\u6240\u6709\u5206\u652F</option></select></div>`);
          if (config.value.branchAction !== "list") {
            _push(`<div><label class="text-sm font-medium">\u5206\u652F\u540D\u79F0</label><input${ssrRenderAttr("value", config.value.branchName)} type="text" placeholder="feature/new-feature" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div>`);
          } else {
            _push(`<!---->`);
          }
          if (config.value.branchAction === "delete") {
            _push(`<div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.forceDelete) ? ssrLooseContain(config.value.forceDelete, null) : config.value.forceDelete) ? " checked" : ""} type="checkbox" id="forceDelete" class="rounded text-primary focus:ring-primary"><label for="forceDelete" class="text-sm">\u5F3A\u5236\u5220\u9664</label></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "push") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u8FDC\u7A0B\u4ED3\u5E93</label><input${ssrRenderAttr("value", config.value.remote)} type="text" placeholder="origin" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u5206\u652F</label><input${ssrRenderAttr("value", config.value.branch)} type="text" placeholder="main" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.setUpstream) ? ssrLooseContain(config.value.setUpstream, null) : config.value.setUpstream) ? " checked" : ""} type="checkbox" id="setUpstream" class="rounded text-primary focus:ring-primary"><label for="setUpstream" class="text-sm">\u8BBE\u7F6E\u4E0A\u6E38\u5206\u652F</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.force) ? ssrLooseContain(config.value.force, null) : config.value.force) ? " checked" : ""} type="checkbox" id="force" class="rounded text-primary focus:ring-primary"><label for="force" class="text-sm">\u5F3A\u5236\u63A8\u9001</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "pull") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u8FDC\u7A0B\u4ED3\u5E93</label><input${ssrRenderAttr("value", config.value.remote)} type="text" placeholder="origin" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div><label class="text-sm font-medium">\u5206\u652F</label><input${ssrRenderAttr("value", config.value.branch)} type="text" placeholder="main" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.rebase) ? ssrLooseContain(config.value.rebase, null) : config.value.rebase) ? " checked" : ""} type="checkbox" id="rebase" class="rounded text-primary focus:ring-primary"><label for="rebase" class="text-sm">\u4F7F\u7528 rebase</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedCategory.value === "merge") {
          _push(`<div class="space-y-4"><div><label class="text-sm font-medium">\u6E90\u5206\u652F</label><input${ssrRenderAttr("value", config.value.sourceBranch)} type="text" placeholder="feature-branch" class="mt-2 w-full px-3 py-2 border rounded-md text-sm"></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.noCommit) ? ssrLooseContain(config.value.noCommit, null) : config.value.noCommit) ? " checked" : ""} type="checkbox" id="noCommit" class="rounded text-primary focus:ring-primary"><label for="noCommit" class="text-sm">\u4E0D\u81EA\u52A8\u63D0\u4EA4</label></div><div class="flex items-center gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(config.value.squash) ? ssrLooseContain(config.value.squash, null) : config.value.squash) ? " checked" : ""} type="checkbox" id="squash" class="rounded text-primary focus:ring-primary"><label for="squash" class="text-sm">\u538B\u7F29\u5408\u5E76</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-4"><div class="bg-card rounded-lg p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-semibold">\u751F\u6210\u7684\u547D\u4EE4</h2><button${ssrIncludeBooleanAttr(!generatedCommand.value) ? " disabled" : ""} class="px-3 py-1 text-sm border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div><div class="bg-muted/30 rounded-lg p-4">`);
      if (generatedCommand.value) {
        _push(`<code class="text-sm whitespace-pre-wrap break-all">${ssrInterpolate(generatedCommand.value)}</code>`);
      } else {
        _push(`<div class="text-center text-muted-foreground py-8">`);
        _push(ssrRenderComponent(unref(Terminal), { class: "w-12 h-12 mx-auto mb-4 opacity-50" }, null, _parent));
        _push(`<p>\u8BF7\u9009\u62E9\u64CD\u4F5C\u7C7B\u578B\u5E76\u914D\u7F6E\u9009\u9879</p></div>`);
      }
      _push(`</div></div>`);
      if (generatedCommand.value) {
        _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u547D\u4EE4\u8BF4\u660E</h2><div class="space-y-3 text-sm text-muted-foreground"><!--[-->`);
        ssrRenderList(commandDescription.value, (desc) => {
          _push(`<div class="flex gap-2"><span class="text-primary">\u2022</span><span>${ssrInterpolate(desc)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card rounded-lg p-6"><h2 class="text-lg font-semibold mb-4">\u5E38\u7528\u547D\u4EE4\u793A\u4F8B</h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(commandExamples, (example) => {
        _push(`<div class="p-3 bg-muted rounded-lg"><h4 class="font-medium text-sm mb-1">${ssrInterpolate(example.title)}</h4><code class="text-xs text-muted-foreground">${ssrInterpolate(example.command)}</code></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-12 space-y-6"><div class="bg-card rounded-lg p-6"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-primary" }, null, _parent));
      _push(` Git \u5DE5\u4F5C\u6D41\u7A0B\u6307\u5357 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-medium text-foreground mb-2">\u57FA\u7840\u5DE5\u4F5C\u6D41\u7A0B</h4><ol class="space-y-2 text-sm text-muted-foreground"><li>1. <code>git init</code> - \u521D\u59CB\u5316\u4ED3\u5E93</li><li>2. <code>git add .</code> - \u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A</li><li>3. <code>git commit -m &quot;message&quot;</code> - \u63D0\u4EA4\u66F4\u6539</li><li>4. <code>git remote add origin url</code> - \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93</li><li>5. <code>git push -u origin main</code> - \u63A8\u9001\u5230\u8FDC\u7A0B</li></ol></div><div><h4 class="font-medium text-foreground mb-2">\u5206\u652F\u5DE5\u4F5C\u6D41\u7A0B</h4><ol class="space-y-2 text-sm text-muted-foreground"><li>1. <code>git checkout -b feature</code> - \u521B\u5EFA\u529F\u80FD\u5206\u652F</li><li>2. \u5F00\u53D1\u548C\u63D0\u4EA4\u66F4\u6539</li><li>3. <code>git checkout main</code> - \u5207\u56DE\u4E3B\u5206\u652F</li><li>4. <code>git merge feature</code> - \u5408\u5E76\u5206\u652F</li><li>5. <code>git push origin main</code> - \u63A8\u9001\u4E3B\u5206\u652F</li></ol></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/git-command.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=git-command-VSkAvefD.mjs.map
