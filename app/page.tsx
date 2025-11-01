export default function Home() {
  const highlights = [
    {
      title: "复合能力",
      desc:
        "既有传统行业经验，又掌握 AI 技术应用，能够快速理解不同行业痛点。",
    },
    {
      title: "实战经验",
      desc: "从项目运营到技术落地，具备完整的商业闭环思维",
    },
    {
      title: "学习能力",
      desc: "多次实现跨领域转型，始终保持对新兴技术的敏锐度",
    },
  ];

  const focuses = [
    {
      title: "AI企培",
      desc: "针对企业的痛点，为企业提供差异化的培训方案。",
      tags: ["企业培训", "岗位实战", "落地指导"],
    },
    {
      title: "AI 工具应用开发",
      desc:
        "针对中小企业营销、内容创作等场景，开发轻量化 AI 解决方案",
      tags: ["营销自动化", "内容生成", "轻量化"],
    },
    {
      title: "AI 赋能服务",
      desc:
        "提供 AI 提示词优化、工作流搭建等定制化服务，帮助企业提升效率",
      tags: ["提示词工程", "工作流", "效率提升"],
    },
    {
      title: "创业孵化",
      desc:
        "搭建 AI 工具学习社群，整合资源，孵化更多 AI 应用项目。",
      tags: ["社群", "资源整合", "项目孵化"],
    },
  ];

  const steps = [
    { num: "01", title: "诊断痛点", desc: "快速理解业务与限制" },
    { num: "02", title: "方案设计", desc: "明确目标与成功度量" },
    { num: "03", title: "快速验证", desc: "小步快跑迭代落地" },
    { num: "04", title: "扩展沉淀", desc: "形成可复制的资产" },
  ];

  const vision =
    "我相信，凭借多元化的经验积累和对 AI 行业的深刻理解，能够在创业赛道上找到差异化定位，为企业和个人提供高价值的 AI 解决方案。期待与志同道合的伙伴一起，探索 AI 技术的无限可能！";

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <section className="flex flex-col gap-6">
          <span className="inline-flex h-8 items-center rounded-full border border-zinc-200 px-3 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            个人主页
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            连接商业与技术的复合型实践者
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            既有传统行业经验，又掌握 AI 技术应用，从项目运营到技术落地，形成完整的商业闭环思维。
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              联系我
            </a>
            <a
              href="#focus"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-5 text-zinc-900 transition-colors hover:bg-black/[.04] dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-[#1a1a1a]"
            >
              了解方向
            </a>
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Focuses */}
        <section id="focus" className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              目前我计划聚焦以下方向
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              可按需调整为更具体的主题
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {focuses.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {f.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            商业闭环落地方法
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  {s.num}
                </div>
                <h3 className="mt-2 text-base font-medium text-zinc-900 dark:text-zinc-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mt-20">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              愿景与合作
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {vision}
            </p>
            <div className="mt-6">
              <a
                href="mailto:you@example.com"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                立即联系
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} 个人主页 · 保持对新技术的敏锐度
        </footer>
      </main>
    </div>
  );
}
