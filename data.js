window.KNOWLEDGE_RADAR_DATA = {
  "generatedAt": "2026-08-10T17:50:21+00:00",
  "count": 10,
  "notes": [
    {
      "id": "articles/2026-08-10-facebook-word-ai-learning.md",
      "title": "Facebook 社團｜用 Gemini Notebook 反轉 Word 文件教學順序",
      "date": "2026-08-10",
      "originalUrl": "https://www.facebook.com/share/p/19B9DX4JFz/",
      "source": "https://www.facebook.com/groups/aixedu/posts/1051544647841255/",
      "author": "未取得",
      "topics": [],
      "tags": [
        "Gemini Notebook",
        "Word",
        "docx",
        "AI 教學",
        "文件生成",
        "教育科技"
      ],
      "importance": "medium",
      "status": "partially-verified",
      "lowInformation": false,
      "summary": "這則 Facebook 貼文主張，Word 教學可以從先教操作規則，改為先讓 Gemini Notebook 產生包含目錄、頁碼與階層的 Word 文件，再回頭理解文件結構。配圖展示直接指令與 YAML 兩種生成方式；功能細節仍需依實際帳號、地區與產品版本測試。",
      "keyPoints": [
        "貼文將傳統 Word 教學的『先學規則再完成文件』，改成『先產出文件再理解結構』。",
        "配圖展示 Gemini Notebook 輸出 Word docx、包含目錄與頁碼的流程。",
        "YAML 範例包含 format: docx、include_toc: true、include_pagenumber: true 與 toc_level: 3。"
      ],
      "actionableInsights": [
        "先讓 AI 產出一份可檢查的文件，再逐項拆解標題階層、分節、頁碼與目錄設定。",
        "將 AI 生成文件當作教學範例，不取代學生對 Word 文件結構與格式控制的理解。",
        "實際使用前以自己的 Gemini Notebook 帳號測試 docx 匯出、目錄層級與頁碼是否可編輯。"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-10",
      "coverImage": "assets/public/source-images/2026-08-10-facebook-word-ai-learning-cover.jpg",
      "articleUrl": "articles/2026-08-10-facebook-word-ai-learning.html"
    },
    {
      "id": "articles/2026-08-08-threads-soolboyss-skills.md",
      "title": "Threads｜用 Codex 按工作需求逐步補充 4 個 Skills",
      "date": "2026-08-08",
      "originalUrl": "https://www.threads.com/share/_pznmwheb/",
      "source": "Threads 公開貼文；作者實名不列入公開文章",
      "author": "soolboyss",
      "topics": [],
      "tags": "[Codex, Skills, GitHub, 前端設計, 簡報, 繁體中文寫作, 房仲工具]",
      "importance": "medium",
      "status": "partially-verified",
      "lowInformation": false,
      "summary": "作者分享以 Codex 建立房仲工具、網站與自動化時，依實際缺口逐步補充 Find Skills、Frontend Design、Guizang PPT Skill 與 Humanizer-zh-TW 四個 GitHub Skills。本文核對 repository 是否存在及 README 可支持的功能，不把個人使用感受視為客觀成效。",
      "keyPoints": [
        "貼文列出 Find Skills、Frontend Design、Guizang PPT Skill 與 Humanizer-zh-TW 四個 repository。",
        "四個 GitHub repository 均可查到；README 可支持的 Codex、Claude Skills、簡報與繁體中文寫作功能各有差異。",
        "作者的最常用與效果改善屬個人經驗，不能直接視為客觀效能證明。"
      ],
      "actionableInsights": [
        "先按工作需求找能力缺口，再逐一檢查 Skill 的 README、授權、腳本與相依套件。",
        "安裝多個 Skills 前先確認 Codex 版本、skills 目錄與各 repository 的相容性。",
        "安裝後列出位置與可用功能，並在隔離專案測試第三方 Skills。"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-08",
      "coverImage": "assets/public/source-images/2026-08-08-threads-soolboyss-skills-cover.webp",
      "articleUrl": "articles/2026-08-08-threads-soolboyss-skills.html"
    },
    {
      "id": "articles/2026-08-08-facebook-openclaw-crawler.md",
      "title": "Facebook 社團｜Crawl4AI：免雲端 API 金鑰的開源網頁爬蟲",
      "date": "2026-08-08",
      "originalUrl": "https://www.facebook.com/share/p/19WYUbajKN/",
      "source": "https://github.com/unclecode/crawl4ai",
      "author": "未取得",
      "topics": [],
      "tags": "[Crawl4AI, web-crawling, web-scraping, LLM, Firecrawl, OpenClaw, n8n]",
      "importance": "medium",
      "status": "partially-verified",
      "lowInformation": false,
      "summary": "Facebook 社團貼文介紹 Crawl4AI，將它描述為完全開源、免申請 API 金鑰的 LLM-friendly 網頁爬蟲與 scraper，作為 Firecrawl 免費額度用完後的替代方案。官方 repository 與 README 已確認；免 API 金鑰的說法應限定為本地開源核心，不代表所有網站、雲端服務或受限內容都不需要憑證。",
      "keyPoints": [
        "貼文介紹的工具是 unclecode/crawl4ai。",
        "官方 README 提供 pip 安裝、crawl4ai-setup 與 crawl4ai-doctor，並描述本地開源爬取能力。",
        "不需要 Crawl4AI 雲端 API key，不代表爬取登入內容、受限網站或使用第三方 LLM 時不需要其他憑證。"
      ],
      "actionableInsights": [
        "先用本地 Crawl4AI 測試公開網頁，再評估是否需要雲端 API、代理或登入 session。",
        "安裝前檢查 Playwright、Chromium、網站 robots、服務條款與資料授權。",
        "將抓取結果保存為原始 HTML 與可查核 Markdown，分離 private、public 與 source archive。"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-08",
      "coverImage": "assets/public/source-images/2026-08-08-facebook-openclaw-crawler-cover.jpg",
      "articleUrl": "articles/2026-08-08-facebook-openclaw-crawler.html"
    },
    {
      "id": "topics/privacy-policy.md",
      "title": "公開文章與私密證據處理規則",
      "date": "2026-08-07T20:00:00+08:00",
      "originalUrl": "",
      "source": "system",
      "author": "",
      "topics": [
        "privacy"
      ],
      "tags": [
        "private",
        "policy"
      ],
      "importance": "critical",
      "status": "evergreen",
      "lowInformation": false,
      "summary": "不確定是否可公開的內容一律留在本機 private，且不得進入 GitHub Pages。",
      "keyPoints": [
        "預設 private",
        "個資與內部文件不得公開",
        "建站程式硬性排除 private 與 source-archive"
      ],
      "actionableInsights": [
        "公開前必須有明確 public 標記"
      ],
      "verificationStatus": "not-reviewed",
      "verifiedAt": "",
      "coverImage": "",
      "articleUrl": "articles/privacy-policy.html"
    },
    {
      "id": "topics/ai-learning-radar-guide.md",
      "title": "AI 學習雷達使用指南",
      "date": "2026-08-07T18:10:19+00:00",
      "originalUrl": "https://m11515115e.github.io/ai-learning-radar/",
      "source": "AI 學習雷達公開網站與本機知識庫",
      "author": "Hermes Agent",
      "topics": [
        "knowledge-management",
        "ai-learning",
        "local-first"
      ],
      "tags": [
        "local-first",
        "Markdown",
        "workflow",
        "privacy",
        "GitHub Pages",
        "LINE"
      ],
      "importance": "high",
      "status": "evergreen-reviewed",
      "lowInformation": false,
      "summary": "AI 學習雷達以 local-first Markdown 作為主資料來源，保留原始快照與整理版，將明確標示為 public 的內容建成可搜尋的靜態網站；私人或公開性不明的內容留在本機。",
      "keyPoints": [
        "Markdown 是主資料來源，網站是可重建的公開輸出",
        "原始快照與整理版分開保存",
        "public/private 隔離由建站、驗證與部署檢查共同保護",
        "公開來源筆記採用截圖、證據、查核表與參考連結格式"
      ],
      "actionableInsights": [
        "分享連結時附上用途、重要性與公開性",
        "每次歸檔後重建網站並執行 validate-kb",
        "每週回顧新內容，補上跨主題連結與可執行行動"
      ],
      "verificationStatus": "verified",
      "verifiedAt": "2026-08-07T18:10:19+00:00",
      "coverImage": "assets/public/source-images/2026-08-07-ai-learning-radar-home.png",
      "articleUrl": "articles/ai-learning-radar-guide.html"
    },
    {
      "id": "articles/2026-08-07-facebook-codex-sol-goal-ideas.md",
      "title": "Facebook｜Codex 額度重置前的 Sol 與 /goal 任務靈感清單",
      "date": "2026-08-07T17:49:21+00:00",
      "originalUrl": "https://www.facebook.com/groups/1713764039757273/permalink/1794884368311906/",
      "source": "Facebook 公開小組",
      "author": "輝堂 HUI KAI",
      "topics": [
        "Codex",
        "AI coding agent",
        "生產力"
      ],
      "tags": [
        "Sol",
        "/goal",
        "/imagegen",
        "任務規劃",
        "配額管理",
        "prompt engineering"
      ],
      "importance": "medium",
      "status": "reviewed",
      "lowInformation": false,
      "summary": "這篇公開貼文把 Codex 的剩餘額度視為一段有限的工作時窗，提出用 /goal 拆解專案稽核、效能改善、產品發想、人生情境模擬與課程設計等任務；其中可直接驗證的是官方確實列出 /goal、/usage 與 gpt-5.6-sol，/imagegen 則不能當作標準內建指令，需視環境或自訂 skill 而定。",
      "keyPoints": [
        "把大型任務改寫成有範圍、有檢查點、有可驗證成果的 /goal。",
        "貼文列出程式稽核、App 改善、檔案整理、生活情境推演、產品點子與課程設計等使用方向。",
        "官方文件可確認 /goal、/usage 與 gpt-5.6-sol 的存在；貼文中的 /imagegen 並未在官方 slash commands 清單中出現。"
      ],
      "actionableInsights": [
        "先用小型、可中斷且能產出檔案或報告的任務驗證流程，再投入大型任務。",
        "要求 agent 先列計畫、分階段執行、回報證據與剩餘工作，不要只給一句『已完成』。",
        "把額度重置前的工作視為實驗時窗，不把未完成的 agent 輸出當成事實或承諾。"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-07T17:49:21+00:00",
      "coverImage": "assets/public/source-images/2026-08-07-facebook-codex-sol-goal-post.png",
      "articleUrl": "articles/2026-08-07-facebook-codex-sol-goal-ideas.html"
    },
    {
      "id": "articles/2026-08-07-facebook-reel-brand.md",
      "title": "Facebook Reels｜以 Claude 與視覺工具快速產生品牌廣告素材提案",
      "date": "2026-08-07",
      "originalUrl": "https://www.facebook.com/share/r/14XLdkKajV4/?mibextid=wwXIfr",
      "source": "Facebook Reels",
      "author": "Christine",
      "topics": [
        "Claude",
        "AI tools",
        "graphic design",
        "marketing",
        "ad creatives"
      ],
      "tags": [
        "品牌廣告",
        "視覺提案",
        "prompt",
        "Stilla",
        "Bloom",
        "Claude"
      ],
      "importance": "medium",
      "status": "reviewed",
      "lowInformation": false,
      "summary": "這則 Facebook Reels 展示以品牌資料生成六張廣告素材提案的工作流程；公開 metadata 可確認影片文字、作者顯示與 OG 縮圖，但無法從未登入來源確認實際 prompt、完整工具鏈、影片全部內容或廣告成效。",
      "keyPoints": [
        "影片描述邀請觀眾留言 BRAND 取得 prompt 與工具連結。",
        "OG 縮圖展示六張 Stilla／Bloom 介面中的品牌廣告視覺，包括文案、圖片與 Start Free Trial CTA。",
        "截圖可作為案例展示，但不能單獨證明 Claude 或工具能穩定產生高品質廣告，也不能證明商業轉換效果。"
      ],
      "actionableInsights": [
        "將品牌名稱、受眾、產品利益、語氣、版位與 CTA 統一整理成可重複使用的 prompt brief。",
        "先生成多個版位變體，再人工檢查品牌用字、版權、產品真實性與廣告規範。",
        "以點擊率、轉換率、審核通過率與製作時間做 A/B 測試，不把視覺完成度當成成效。"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-07",
      "coverImage": "assets/public/source-images/2026-08-07-facebook-reel-brand-cover.jpg",
      "articleUrl": "articles/2026-08-07-facebook-reel-brand.html"
    },
    {
      "id": "articles/2026-08-07-threads-visual-syntax-ugc.md",
      "title": "Threads｜一次開箱延伸成六款 AI UGC 分鏡的提示詞鎖定流程",
      "date": "2026-08-07",
      "originalUrl": "https://www.threads.com/share/E1gnn1keV/",
      "source": "Threads 公開貼文",
      "author": "visual_syntax.ai",
      "topics": [
        "AI UGC",
        "image-generation",
        "storyboard",
        "prompt-engineering",
        "content-marketing"
      ],
      "tags": [
        "Threads",
        "開箱",
        "連續分鏡",
        "角色一致性",
        "產品一致性",
        "Reels",
        "短片廣告"
      ],
      "importance": "high",
      "status": "public-reviewed",
      "lowInformation": false,
      "summary": "visual_syntax.ai 示範如何先固定創作者、服裝、場景、包裝、產品與品牌色，再逐鏡只改動動作、鏡位、鏡頭與表情，將一次開箱延伸成六個連續的 AI UGC 分鏡。",
      "keyPoints": [
        "先建立可重用的創作者與產品鎖定欄位",
        "六個分鏡依序涵蓋鉤子、俯視拆盒、產品揭示、第一身使用、細節特寫與反應收尾",
        "不要把六張圖片當作獨立生成，應先建立主鏡與產品主視覺再逐鏡延伸",
        "貼文是工作流程示範，不代表任何特定 AI 模型已被證實支援完整一致性"
      ],
      "actionableInsights": [
        "先寫一份角色、服裝、場景、包裝與產品的鎖定表",
        "先生成中性主鏡與產品主視覺，再複製到各分鏡",
        "每鏡只修改一組變數並以分鏡表檢查連續性",
        "發布前檢查品牌、包裝文字、手部、產品形狀與 CTA 是否跨鏡一致"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-07",
      "coverImage": "assets/public/source-images/2026-08-07-threads-visual-syntax-ugc-cover.jpg",
      "articleUrl": "articles/2026-08-07-threads-visual-syntax-ugc.html"
    },
    {
      "id": "articles/2026-08-07-facebook-share-1bq9xuguqj.md",
      "title": "Facebook 分享連結｜目前無法取得公開貼文內容",
      "date": "2026-08-07",
      "originalUrl": "https://www.facebook.com/share/p/1Bq9XugUqJ/?mibextid=wwXIfr",
      "source": "Facebook 分享連結",
      "author": "未取得",
      "topics": [
        "Facebook",
        "來源擷取"
      ],
      "tags": [
        "login-required",
        "low-information",
        "share-url"
      ],
      "importance": "low",
      "status": "low-information",
      "lowInformation": true,
      "summary": "Facebook 分享連結可解析到一個 story.php 來源，但一般、mobile 與 mbasic 入口都被導向登入頁；目前無法確認原貼文作者、日期、文字、圖片或主張。",
      "keyPoints": [
        "分享 URL 解析到 story_fbid 28404907259101663、頁面 id 100000273051128。",
        "一般 Facebook、m.facebook.com 與 mbasic.facebook.com 都要求登入。",
        "未取得足以建立公開證據型文章的正文或媒體資料。"
      ],
      "actionableInsights": [
        "若要繼續查核，需要使用者提供可公開讀取的 canonical 貼文、貼文截圖或原文內容。",
        "在取得正文前，不應推測主題、作者、日期或查核結論。"
      ],
      "verificationStatus": "unverified",
      "verifiedAt": "2026-08-07",
      "coverImage": "assets/public/source-images/2026-08-07-facebook-share-unavailable.svg",
      "articleUrl": "articles/2026-08-07-facebook-share-1bq9xuguqj.html"
    },
    {
      "id": "articles/2026-08-07-threads-ecc.md",
      "title": "Threads｜Claude Code 的 ECC 配置全集與可重現安裝方式",
      "date": "2026-08-07",
      "originalUrl": "https://www.threads.com/share/BAWgRnAJsA/",
      "source": "https://www.threads.com/@prompt_case/post/DT4GbiBFOcx",
      "author": "prompt_case",
      "topics": [],
      "tags": [
        "Claude Code",
        "ECC",
        "agents",
        "skills",
        "hooks",
        "MCP",
        "開源專案"
      ],
      "importance": "high",
      "status": "unverified",
      "lowInformation": false,
      "summary": "這則 Threads 貼文介紹 affaan-m 的 ECC（Everything Claude Code）公開 repository，集中管理 Claude Code 的 agents、skills、commands、hooks、rules 與 MCP 相關配置；repository 與官方安裝方式已確認，但 Anthropic 黑客松冠軍身分與十個月打磨說法仍屬自述。",
      "keyPoints": [
        "ECC 是 affaan-m 維護的公開 repository，包含多種 Claude Code 與其他 harness 的配置元件。",
        "README 提供 npx guided installer、Claude Code plugin 與手動 profile，不應無條件把整個資料夾複製到 ~/.claude/。",
        "Anthropic 黑客松冠軍、十個月打磨與 battle-tested 屬未獲獨立證實的宣傳性主張。"
      ],
      "actionableInsights": [
        "安裝前先閱讀 README 並選擇單一安裝方法。",
        "先檢查既有 ~/.claude/，使用 guided、dry-run 或 doctor 類流程避免配置重複。",
        "只啟用實際需要的 skills、hooks、MCP 與 permissions，先在隔離專案測試。"
      ],
      "verificationStatus": "partially-verified",
      "verifiedAt": "2026-08-07",
      "coverImage": "assets/public/source-images/2026-08-07-threads-ecc-cover.jpg",
      "articleUrl": "articles/2026-08-07-threads-ecc.html"
    }
  ]
};
