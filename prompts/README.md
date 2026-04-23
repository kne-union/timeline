# Prompts 文档索引

本目录包含多个 AI 提示词文档，用于指导 AI 完成前端组件库开发中的常见任务，涵盖国际化、类型声明、文档生成、示例编写等场景。

## 文档集合

### 1. prompts-frontend-libs

**功能**: 前端组件库开发辅助提示词集合，覆盖国际化、类型声明、包描述、文档生成、示例编写等完整开发流程

**适用场景**:
- React 组件库需要添加国际化支持
- JavaScript 组件库需要添加 TypeScript 类型定义
- 需要完善 package.json 描述和关键词
- 需要生成包的 API 描述文件
- 需要生成项目概述和 API 文档
- 需要编写组件演示示例代码

**核心内容**:
- 组件国际化（useIntl Hook + withLocale HOC）
- TypeScript 类型声明文件生成
- package.json 描述和关键词完善
- package-manifest.json 功能描述文件生成
- 标准化 API 文档和概述文档生成
- React 组件示例编写规范

**已安装版本**: @kne/prompts-frontend-libs 1.0.1

---

### 2. 生成语言包

**功能**: 从代码中抽取中文文案，生成中英文语言包文件

**适用场景**:
- 组件代码中存在硬编码中文文案
- 需要将文案提取到统一的 locale 文件中
- 需要同步生成英文翻译

**核心内容**:
- 中文文案抽取到 `src/locale/zh-CN.js`
- 英文翻译输出到 `src/locale/en-US.js`
- 不修改原始文件内容

---

### 3. 生成文档

**功能**: 根据代码生成项目概述文档和 API 文档

**适用场景**:
- 需要生成项目概述（doc/summary.md）
- 需要生成 API 文档（doc/api.md）
- 规范化项目文档结构

**核心内容**:
- 项目概述输出到 doc/summary.md（h3 及以下标题）
- API 文档输出到 doc/api.md（h3 及以下，表格格式优先）
- 不含示例代码，基于实际代码分析

---

### 4. 命名示例编写示例描述

**功能**: 根据示例代码实现内容完善 example.json 中的标题和描述字段

**适用场景**:
- doc/example.json 中的 title 和 description 字段缺失或不准确
- 需要根据实际代码内容补充示例描述

**核心内容**:
- 分析 example.json 中 code 引用的代码实现
- 自动填充 title 和 description 字段

---

## 快速选择指南

| 需求 | 推荐文档 | 所属集合 |
|------|----------|----------|
| 组件需要支持多语言 | [国际化](prompts-frontend-libs/国际化.md) | prompts-frontend-libs |
| 为 JS 组件库添加 TS 类型支持 | [添加ts类型声明](prompts-frontend-libs/添加ts类型声明.md) | prompts-frontend-libs |
| 完善 package.json 描述和关键词 | [完善package.json描述和关键词](prompts-frontend-libs/完善package.json描述和关键词.md) | prompts-frontend-libs |
| 生成包的 API 描述文件 | [生成包功能描述文件](prompts-frontend-libs/生成包功能描述文件.md) | prompts-frontend-libs |
| 生成项目概述和 API 文档 | [生成文档](prompts-frontend-libs/生成文档.md) | prompts-frontend-libs |
| 编写组件演示示例代码 | [组件示例编写](prompts-frontend-libs/组件示例编写.md) | prompts-frontend-libs |
| 抽取代码中的中文文案生成语言包 | [生成语言包](生成语言包.md) | 根目录 |
| 根据代码生成概述和 API 文档 | [生成文档](生成文档.md) | 根目录 |
| 根据代码内容完善示例描述 | [命名示例编写示例描述](命名示例编写示例描述.md) | 根目录 |
