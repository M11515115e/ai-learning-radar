---
title: "Threads｜Claude Code 的 ECC 配置全集與可重現安裝方式"
date: "2026-08-07"
original-url: "https://www.threads.com/share/BAWgRnAJsA/"
canonical-url: "https://www.threads.com/@prompt_case/post/DT4GbiBFOcx"
author: "prompt_case"
source-type: "Threads 公開貼文"
source: "Threads 公開貼文"
visibility: public
tags: ["Claude Code", "ECC", "agents", "skills", "hooks", "MCP", "開源專案"]
status: reviewed
summary: "這則 Threads 貼文介紹 affaan-m 的 ECC（Everything Claude Code）公開 repository，集中管理 Claude Code 的 agents、skills、commands、hooks、rules 與 MCP 相關配置；repository 與官方安裝方式已確認，但 Anthropic 黑客松冠軍身分與十個月打磨說法仍屬自述。"
key-points: ["ECC 是 affaan-m 維護的公開 repository，包含多種 Claude Code 與其他 harness 的配置元件。", "README 提供 npx guided installer、Claude Code plugin 與手動 profile，不應無條件把整個資料夾複製到 ~/.claude/。", "Anthropic 黑客松冠軍、十個月打磨與 battle-tested 屬未獲獨立證實的宣傳性主張。"]
actionable-insights: ["安裝前先閱讀 README 並選擇單一安裝方法。", "先檢查既有 ~/.claude/，使用 guided、dry-run 或 doctor 類流程避免配置重複。", "只啟用實際需要的 skills、hooks、MCP 與 permissions，先在隔離專案測試。"]
cover-image: "../assets/public/source-images/2026-08-07-threads-ecc-cover.jpg"
verified-at: "2026-08-07"
related-links: [{"label": "原始 Threads 貼文", "url": "https://www.threads.com/@prompt_case/post/DT4GbiBFOcx"}, {"label": "ECC GitHub repository", "url": "https://github.com/affaan-m/ECC"}, {"label": "Claude Code 官方文件", "url": "https://code.claude.com/docs/en/overview"}, {"label": "ECC README", "url": "https://raw.githubusercontent.com/affaan-m/ECC/main/README.md"}]
topics:
  - Claude Code
  - coding-agents
  - agent-configuration
  - open-source
  - MCP
importance: high
low-information: false
verification-status: partially-verified
evidence:
  - type: post
    source: "https://www.threads.com/@prompt_case/post/DT4GbiBFOcx"
    captured-at: "2026-08-07"
    note: "瀏覽器可讀取作者、日期、貼文文字與互動資訊；頁面也顯示 Threads 登入提示。"
  - type: repository
    source: "https://github.com/affaan-m/ECC"
    captured-at: "2026-08-07"
    note: "公開 repository 與 README 可讀取，列出 agents、skills、commands、hooks、rules、MCP 及安裝方式。"
  - type: screenshot
    path: "/assets/public/source-images/2026-08-07-threads-ecc-cover.jpg"
    source: "https://www.threads.com/@prompt_case/post/DT4GbiBFOcx"
    captured-at: "2026-08-07"
    purpose: "證明貼文 OG 圖所展示的公開 ECC repository 名稱與配置描述。"
    privacy: "由原始 OG 圖裁切，移除 contributor 帳號、頭像及下方個人活動資訊。"
claims:
  - claim: "affaan 是 Anthropic 官方黑客松冠軍。"
    status: "repository-self-claim"
    evidence: "ECC README 自述曾在 Anthropic x Forum Ventures hackathon 獲勝；尚未取得 Anthropic 官方獨立公告。"
  - claim: "ECC 是 affaan-m 維護的公開 Claude Code 配置集合。"
    status: "verified"
    evidence: "GitHub 公開 repository affaan-m/ECC 存在，README 與目錄包含 .claude、agents、skills、hooks、rules、MCP 等內容。"
  - claim: "ECC 包含 Agents、Skills、Hooks、Commands、Rules 與 MCPs。"
    status: "verified"
    evidence: "repository README 的功能表與目錄說明列出上述元件；具體數量會隨 repository 更新而變動。"
  - claim: "把檔案複製到 ~/.claude/ 就能完成安裝。"
    status: "partially-verified"
    evidence: "README 提供多種安裝方法，包括 npx ecc-universal install --guided、Claude Code plugin ecc@ecc，以及手動安裝路徑；直接複製整個集合不是所有情況下的推薦流程。"
  - claim: "這些配置經過十個月打磨並且 battle-tested。"
    status: "unverified"
    evidence: "這是 Threads 文案與 repository 宣傳文字中的品質描述，未見可重現的獨立評測或時間線證據。"
verification-status: partially-verified
references:
  - label: "原始 Threads 貼文"
    url: "https://www.threads.com/@prompt_case/post/DT4GbiBFOcx"
  - label: "ECC GitHub repository"
    url: "https://github.com/affaan-m/ECC"
  - label: "Claude Code 官方文件"
    url: "https://code.claude.com/docs/en/overview"
  - label: "ECC README 原始檔"
    url: "https://raw.githubusercontent.com/affaan-m/ECC/main/README.md"
limitations:
  - "貼文顯示 01/23/26，日期格式未標示時區。"
  - "Threads 分享頁可解析但同時出現登入提示，不能宣稱所有訪客均可無登入查看完整留言。"
  - "GitHub repository 的 stars、forks、agents、skills、commands 數量會持續變動，文章不把截圖數字當作永久事實。"
  - "未直接執行 ECC 安裝，不能保證每個 Claude Code 版本、作業系統或既有 ~/.claude/ 狀態都能無衝突安裝。"
  - "原始 OG 圖保留於 source-archive；公開文章只使用已去除 contributor 個資的裁切版。"
updated-at: "2026-08-07"
---

# 內容摘要

這則 Threads 貼文介紹 affaan-m 的 ECC（Everything Claude Code）公開 repository，將 Claude Code 的代理、技能、命令、hooks、規則、記憶與 MCP 相關配置集中管理。貼文把它定位為一套可直接下載的 Claude Code 配置全集，並建議讀者放入 `~/.claude/`。

實際查看 GitHub repository 後，ECC 不只是單一 `~/.claude/` 資料夾複製包，而是一個持續更新的 agent harness／配置系統。README 目前提供 plugin、npm guided installer、手動 profile 與多種 harness adapter，安裝前需要依自己的 Claude Code scope、既有配置及是否使用 hooks 做選擇。

## 可見資訊

1. 先閱讀 ECC README 的官方來源與安裝章節。
2. 優先使用 `npx ecc-universal install --guided` 或 Claude Code plugin `ecc@ecc`。
3. 不要同時疊加 plugin、完整手動安裝與多次同步，避免 skills、commands、hooks 或設定重複。
4. 安裝前先檢查既有 `~/.claude/`，並使用 dry-run、doctor 或 setup 類流程確認檔案計畫。
5. 只選擇實際需要的 profile、language pack、skills 與 hooks；不要因為配置全集很大就全部啟用。

## 資訊查核

## 已驗證

- `https://github.com/affaan-m/ECC` 是公開 repository，名稱與作者為 `affaan-m/ECC`。
- repository README 確實列出 agents、skills、commands、hooks、rules、memory、MCP 與 AgentShield 等功能。
- README 提供 `npx ecc-universal install --guided`、`/plugin install ecc@ecc` 及手動安裝路徑。
- Claude Code 官方文件確認 Claude Code 是可讀取程式碼庫、修改檔案、執行命令並整合開發工具的 agentic coding tool。

## 部分支持

「把配置複製到 `~/.claude/` 即可」只適用於部分手動安裝情境。ECC README 現在建議依 harness 與 scope 選擇安裝方式，並警告不要疊加不同安裝方法。

## 尚未確認

- affaan 的 Anthropic 官方黑客松冠軍身分目前只有 ECC README 的自述支持，尚未找到 Anthropic 官方獨立公告。
- 「十個月打磨」與「battle-tested」屬宣傳或作者描述，沒有獨立可重現的品質評測。
- 不能從 repository stars、forks 或 Threads 互動數推導軟體品質、安全性或適合所有專案。

# 實際應用情境

- 想把 Claude Code 的 code review、測試、研究、資安檢查與規劃流程模組化。
- 團隊需要在多個專案中共享一組可版本控制的 agents、skills 與 rules。
- 需要先建立最小配置，再逐步加入 hooks、MCP 與安全掃描，而不是依賴一段大型 system prompt。

# 風險與限制

配置集合會改變 Claude Code 的行為、檔案操作與 hooks 執行方式。安裝前應閱讀每個 hook、MCP server、permission 設定與 script，尤其不要在未理解內容時把未知程式直接放入個人 home directory。對既有 `~/.claude/` 先備份，並使用專案隔離或 dry-run 驗證。

## 來源證據

公開證據圖片已經裁切，只保留 repository 標題、描述與上方公開介面；原始圖片另存於 `source-archive/public/2026-08-07-threads-ecc-original-og.jpg`，不進入公開網站。

原始 Threads 分享 URL：
https://www.threads.com/share/BAWgRnAJsA/

解析後 canonical URL：
https://www.threads.com/@prompt_case/post/DT4GbiBFOcx

## 參考資料

- [ECC GitHub repository](https://github.com/affaan-m/ECC)
- [ECC README](https://raw.githubusercontent.com/affaan-m/ECC/main/README.md)
- [Claude Code 官方文件](https://code.claude.com/docs/en/overview)
