import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Resume from './ui/Resume'
import Works from './ui/Works'

type Lang = 'zh'

const NAV_ITEMS = [
  { label: '首页', href: '#home' },
  { label: '经历', href: '#experience' },
  { label: '能力与项目', href: '#projects' },
  { label: '联系我', href: '#contact' },
  { label: '荣誉证书', href: '#honors' },
]

const SKILLS = [
  'SAP MM/SD',
  'Excel 高级',
  'Python',
  'SQL',
  'Power BI',
  '数据分析',
  '采购管理',
  '供应商管理',
  '需求计划',
  '库存管理',
  '沟通协调',
  '英语 CET-6',
]

const HIGHLIGHTS = [
  { value: '2', label: '段', sub: '相关垂直经历', note: '采购与供应链方向的垂直实战经历' },
  { value: '18', label: '项', sub: '荣誉奖项', note: '奖学金、竞赛与组织荣誉持续积累' },
  { value: '4', label: '类', sub: '能力模块', note: '采购供应商、运营协同、数据优化、领导组织' },
  { value: '持续', label: '', sub: '学习成长', note: '保持复盘与迭代，持续提升专业能力' },
]



const HONORS = [
  {
    year: '2021',
    date: '2021',
    title: '国家励志奖学金',
    description: '获评 2020—2021 学年度国家励志奖学金，学业成绩与综合表现获得认可。',
  },
  {
    year: '2021',
    date: '2021',
    title: '优秀共青团干部',
    description: '在 2020—2021 年度共青团工作中表现突出，荣获“优秀共青团干部”称号。',
  },
  {
    year: '2021',
    date: '2021',
    title: '全国大学生环保知识竞赛优秀奖',
    description: '参加由中国生物多样性保护与绿色发展基金会、四川省生态文明促进会等单位主办的 2021 年第五届全国大学生环保知识竞赛，荣获优秀奖。',
  },
  {
    year: '2021',
    date: '2021',
    title: '节能知识竞答一等奖',
    description: '在 2021 年“百万大学生·西部绿色支援下之节能知识竞答”中荣获一等奖，并获授“绿色志愿者”称号。',
  },
  {
    year: '2021',
    date: '2021',
    title: '全国大学生 5·25 心理知识大赛二等奖',
    description: '参加“心上的中国”全国大学生 5·25 心理知识大赛，凭借稳定表现荣获二等奖。',
  },
  {
    year: '2021',
    date: '2021',
    title: '“冯如杯”全国大学生航空知识竞赛全国决赛二等奖',
    description: '进入“冯如杯”全国大学生航空知识竞赛全国决赛，并荣获二等奖。',
  },
  {
    year: '2022',
    date: '2022',
    title: '第八届湖南省“互联网+”大学生创新创业大赛高教主赛道三等奖',
    description: '参赛项目《基于火电厂余热利用的生活垃圾预处理与分选系统》荣获高教主赛道省级三等奖。',
  },
  {
    year: '2022',
    date: '2022',
    title: '第八届湖南省“互联网+”大学生创新创业大赛产业命题赛道三等奖',
    description: '参赛项目《工业废水综合治理与利用》荣获产业命题赛道省级三等奖。',
  },
  {
    year: '2022',
    date: '2022',
    title: '优秀负责人',
    description: '在 2022 年度校青年传媒中心工作中表现突出，凭借团队组织、任务推进与宣传工作成果获评“优秀负责人”。',
  },
  {
    year: '2022',
    date: '2022',
    title: '全国大学生“魅力冬奥”冬奥知识讲解员活动一等奖',
    description: '参加 2022 全国大学生“魅力冬奥”冬奥知识讲解员活动，荣获一等奖，并获授“讲解员”荣誉称号。',
  },
  {
    year: '2022',
    date: '2022',
    title: '第二届中医药文创产品设计大赛三等奖',
    description: '参加 2022 年首届全国大学生中医药健康文化知识竞赛暨第二届中医药文创产品设计大赛，荣获三等奖。',
  },
  {
    year: '2022',
    date: '2022',
    title: '高校大学生诗词竞答大赛决赛二等奖',
    description: '参加 2022 高校大学生诗词竞答大赛并进入决赛，最终荣获二等奖。',
  },
  {
    year: '2022',
    date: '2022',
    title: '全国大学生线上运动会一等奖',
    description: '在“青春飞扬，同心战疫”全国大学生线上运动会活动中取得优异成绩，荣获一等奖。',
  },
  {
    year: '2022',
    date: '2022',
    title: '中国青少年篮球双线志愿活动一等奖',
    description: '参加全国大学生运动宣传志愿行动之“中国青少年篮球双线支援活动暨全国高校‘追梦篮球王’和‘超炫啦啦队’招募选拔赛”，荣获一等奖。',
  },
  {
    year: '2022',
    date: '2022.12',
    title: '校级二等奖学金',
    description: '2021—2022 学年成绩显著、综合表现突出，荣获校级二等奖学金。',
  },
  {
    year: '2022',
    date: '2022.12',
    title: '校级三好学生',
    description: '2021—2022 学年在学业与综合素质方面表现突出，获评校级“三好学生”。',
  },
  {
    year: '2024',
    date: '2024',
    title: '校级三等奖学金',
    description: '研究生入学阶段综合表现优异、排名靠前，荣获校级三等奖学金。',
  },
  {
    year: '2025',
    date: '2025',
    title: '校级二等奖学金',
    description: '2024—2025 学年度成绩表现优异、综合素质突出，荣获校级二等奖学金。',
  },
]

const HONOR_YEARS = ['2021', '2022', '2024', '2025']

function HonorsPage({ onReturnHome }: { onReturnHome: () => void }) {
  const endRef = useRef<HTMLDivElement | null>(null)
  const returningRef = useRef(false)

  useEffect(() => {
    const target = endRef.current
    if (!target) return

    let timer: number | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || returningRef.current) return
        returningRef.current = true
        timer = window.setTimeout(onReturnHome, 900)
      },
      { threshold: 0.85 }
    )

    observer.observe(target)
    return () => {
      observer.disconnect()
      if (timer) window.clearTimeout(timer)
    }
  }, [onReturnHome])

  return (
    <main className="honors-page" id="honors" aria-label="荣誉证书">
      <section className="honors-hero">
        <div>
          <span className="honors-kicker">HONORS · CERTIFICATES</span>
          <h1>荣誉证书</h1>
          <p>将奖学金、学科竞赛、创新创业与组织荣誉按年份归档，记录持续学习与实践积累。</p>
        </div>
        <div className="honors-summary" aria-label="荣誉概览">
          <strong>{HONORS.length}</strong>
          <span>项荣誉</span>
          <em>2021 — 2025</em>
        </div>
      </section>

      <section className="honors-timeline" aria-label="荣誉时间轴">
        {HONOR_YEARS.map((year) => {
          const items = HONORS.filter((item) => item.year === year)
          return (
            <section className="honor-year" key={year}>
              <div className="honor-year-label">
                <span>{year}</span>
                <small>{items.length} 项</small>
              </div>
              <div className="honor-year-list">
                {items.map((item, index) => (
                  <motion.article
                    className="honor-entry"
                    key={`${item.title}-${item.date}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
                    transition={{ duration: 0.55, delay: Math.min(index * 0.025, 0.16) }}
                  >
                    <span className="honor-dot" aria-hidden="true" />
                    <div className="honor-entry-body">
                      <div className="honor-date">{item.date}</div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          )
        })}
      </section>

      <div className="honors-end" ref={endRef}>
        <span>已浏览至最后一项</span>
        <strong>即将自动返回首页</strong>
        <button type="button" onClick={onReturnHome}>立即返回首页</button>
      </div>
    </main>
  )
}


const STRENGTHS = [
  '数据分析：能够用数据支撑业务判断与流程优化。',
  '供应链管理：覆盖采购执行、供应商管理、库存与结算。',
  '沟通协作：具备跨部门、跨承包商与校园组织沟通经验。',
  '学习能力：擅长快速熟悉流程与工具，自主搭建自动化思路。',
  '逻辑思维：注重结构化拆解问题与结果导向推进。',
]

function TopNav() {
  return (
    <header className="dashboard-topbar">
      <a className="brand" href="#home" aria-label="Qiaoling Home">
        <span className="brand-mark">QL</span>
        <span className="brand-name">QIAOLING</span>
      </a>
      <nav className="dashboard-nav" aria-label="主导航">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function HeroDashboard() {
  return (
    <section className="dashboard-hero" id="home">
      <div className="dashboard-grid dashboard-grid-top">
        <aside className="glass-card profile-card" id="contact">
          <div className="profile-avatar">QL</div>
          <h1 className="profile-name">巧玲</h1>
          <p className="profile-tag">供应链类｜数据分析</p>

          <div className="profile-meta-list">
            <div className="profile-meta-item">
              <span className="meta-icon">📅</span>
              <div>
                <strong>2002.09</strong>
                <span>出生年月</span>
              </div>
            </div>
            <div className="profile-meta-item">
              <span className="meta-icon">📍</span>
              <div>
                <strong>湖南长沙</strong>
                <span>籍贯</span>
              </div>
            </div>
            <div className="profile-meta-item">
              <span className="meta-icon">📞</span>
              <div>
                <strong>15073180903</strong>
                <span>联系方式</span>
              </div>
            </div>
            <div className="profile-meta-item">
              <span className="meta-icon">✉️</span>
              <div>
                <strong>15073180903@163.com</strong>
                <span>电子邮箱</span>
              </div>
            </div>
          </div>

        </aside>

        <section className="hero-stage">
          <div className="hero-stage-ring" aria-hidden="true" />
          <motion.img
            src={`${import.meta.env.BASE_URL}images/qiaoling-portrait-half.png`}
            alt="巧玲的二维人物形象"
            className="hero-portrait"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </section>

        <section className="hero-copy-column">
          <div className="glass-card intro-card">
            <p className="intro-greeting">👋 你好，我是 <span>巧玲</span> ✦</p>
            <div className="intro-pill">物流工程与管理｜211硕士研究生</div>
            <p className="intro-body">
              具备采购与供应链实习经验，熟悉 SAP 等系统操作，擅长数据分析与流程优化，
              以结果为导向，致力于在供应链领域持续创造价值。
            </p>
            <div className="intro-chips">
              <span>数据驱动</span>
              <span>逻辑清晰</span>
              <span>结果导向</span>
            </div>
          </div>

          <div className="glass-card quote-card">
            <div className="quote-mark">“</div>
            <p>
              用数据连接供需，用专业创造价值，<br />
              让供应链更高效，让商业更美好。
            </p>
            <strong>— Qiaoling</strong>
          </div>
        </section>

      </div>

      <div className="dashboard-grid dashboard-grid-bottom" id="skills">
        <section className="glass-card skill-card">
          <h3>个人评价</h3>
          <div className="skill-tags">
            {['认真细致','责任心','执行力','担当','开朗外向','沟通协调','自制力','抗压能力','学习力','适应性'].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="highlight-grid">
          {HIGHLIGHTS.map((item) => (
            <div key={item.sub} className="glass-card highlight-card">
              <div className="highlight-value-row">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
              <div className="highlight-sub">{item.sub}</div>
              <div className="highlight-note">{item.note}</div>
            </div>
          ))}
        </section>

        <section className="glass-card strength-card">
          <h3>核心优势</h3>
          <ul>
            {STRENGTHS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default function App() {
  const worksRef = useRef<HTMLElement | null>(null)
  const lang: Lang = 'zh'
  const [view, setView] = useState<'home' | 'honors'>(() =>
    typeof window !== 'undefined' && window.location.hash === '#honors' ? 'honors' : 'home'
  )

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash || '#home'
      if (hash === '#honors') {
        setView('honors')
        window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }))
        return
      }

      setView('home')
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (hash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
          }
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      })
    }

    syncRoute()
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  const returnHome = () => {
    setView('home')
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#home`)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  return (
    <div className="dashboard-app">
      <div className="dashboard-bg" aria-hidden="true">
        <div className="dashboard-glow glow-1" />
        <div className="dashboard-glow glow-2" />
        <div className="dashboard-gridlines" />
      </div>

      <TopNav />
      {view === 'honors' ? (
        <HonorsPage onReturnHome={returnHome} />
      ) : (
        <main className="content dashboard-content">
          <HeroDashboard />
          <div id="experience">
            <Resume lang={lang} />
          </div>
          <div id="projects">
            <Works lang={lang} innerRef={worksRef} />
          </div>
        </main>
      )}
    </div>
  )
}

