import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
}

const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Experience',
    entries: [
      {
        period: 'Sep 2024 – Jun 2027',
        place: 'Dalian Maritime University',
        role: 'Logistics Engineering and Management',
        points: [
          'GPA 4.28/5, ranked 2nd among 28 students.',
          'Core courses: Operations Research and Optimization Models, Modern Optimization Techniques, Traffic and Logistics System Simulation Technology, Logistics Information Management.',
          'Scholarships and honors: university second-class scholarship and third-class scholarship.',
        ],
      },
      {
        period: 'Sep 2020 – Jun 2024',
        place: 'Hunan University of Technology',
        role: 'Engineering Cost',
        points: [
          'GPA 3.56/5, ranked 3rd among 59 students.',
          'Core courses: Principles of Economics, Management Information Systems, Engineering Economics, Engineering Quota Principles, Engineering Cost Planning and Control.',
          'Scholarships and honors: National Encouragement Scholarship and university second-class scholarship.',
        ],
      },
      {
        period: 'Sep 2020 – Jun 2022',
        place: 'University Youth League Publicity Department',
        role: 'Head of the Technical Photography Team',
        points: [
          'Formulated the annual work plan, organized team responsibilities, and led photography and official publicity for 30+ large campus events.',
          'Operated the campus Douyin account with 20K+ followers, led content planning and production, and created multiple viral videos that significantly increased the online impact of campus events.',
          'Led recruitment and training system development, built a 15-member core team, and helped many members earn recognition as Outstanding Officers.',
        ],
      },
      {
        period: 'Sep 2022 – Dec 2022',
        place: 'Class 2201 of Engineering Cost',
        role: 'Assistant to the Class Advisor',
        points: [
          'Assisted the class advisor in daily class management, including notices, information collection, materials organization, and student communication, ensuring steady progress in class affairs.',
          'Independently planned and hosted themed class meetings focused on study style development and merit evaluation, taking charge of event design, process organization, and on-site coordination.',
          'Built communication bridges between teachers and students, improved class cohesion and collaboration through themed education and collective activities, and was awarded the title of Outstanding Assistant.',
        ],
      },
      {
        period: 'Sep 2024 – Jun 2027',
        place: 'Class 3, Logistics Engineering and Management',
        role: 'Publicity Committee Member and Organization Committee Member',
        points: [
          'Assisted the class committee with organizational development and daily management, including activity planning, personnel coordination, notice delivery, and material organization.',
          'Handled class publicity and information communication, including event promotion, announcements, copywriting, photo archiving, and material submission.',
          'Supported themed class meetings, Youth League Day activities, volunteer service, and academic exchange events, taking charge of pre-event publicity, on-site organization, documentation, and post-event summary promotion.',
        ],
      },
      {
        period: 'Jun 2025 – Sep 2025',
        place: 'Sansure Biotech Inc.',
        role: 'Procurement Specialist',
        points: [
          'Supplier management: assisted the procurement manager in reviewing supplier qualifications and segmented 127 suppliers into four KPI-based categories—strategic (15%), preferred (35%), watchlist (40%), and phase-out (10%); established a dynamic evaluation mechanism and optimized 23 redundant suppliers.',
          'End-to-end procurement execution and optimization: independently handled the full process from purchase request to payment closure; proficiently used SAP to review and consolidate around 20 purchase requests per day, prepare purchase orders, follow up execution, and coordinate on-site acceptance.',
          'Settlement: independently coordinated supplier settlement and standardized corporate payment processing, ensuring zero accounting errors.',
          'Warehouse management: independently managed daily inbound and outbound materials and related data, accurately checked material specifications, quantities, and validity periods, conducted weekly stocktaking, prepared ledgers, and followed up abnormal orders, claims, returns, and on-site data collection.',
          'Organized routine meetings and tracked decision progress from quarterly review meetings.',
        ],
      },
      {
        period: 'Dec 2025 – Mar 2026',
        place: 'Li Auto',
        role: 'Supply Chain Specialist',
        points: [
          'Contractor coordination: independently managed 16 contractors, including monthly inspection task assignment and acceptance, statutory-holiday duty scheduling and post-holiday acceptance, work-order settlement, and training arrangements for newly reported technical operations personnel.',
          'Frontline operations liaison: independently coordinated with frontline operations personnel across the nationwide charging network, received fault reports, analyzed causes, escalated findings to management to support strategic decisions, and handled daily purchase requests, ordering and shipments to ensure timely material response.',
          'Operations data processing: assisted with monthly and quarterly work-order data consolidation to analyze charging volume and fault rates by region, province/city and charging station; developed an automated data-processing system that reduced manual effort and processing time while significantly improving efficiency.',
          'Organized weekly, monthly and quarterly routine meetings and participated in tracking actions and decisions from periodic review meetings.',
        ],
      },
    ],
  },
  zh: {
    title: '经历',
    entries: [
      {
        period: '2024-09 – 2027-06',
        place: '大连海事大学',
        role: '物流工程与管理',
        points: [
          '绩点：4.28/5｜专业排名：2/28。',
          '主修课程：运筹与优化模型、现代优化技术、交通物流系统仿真技术、物流信息管理。',
          '奖学金荣誉：校级二等奖学金、三等奖学金。',
        ],
      },
      {
        period: '2020-09 – 2024-06',
        place: '湖南工业大学',
        role: '工程造价',
        points: [
          '绩点：3.56/5｜专业排名：3/59。',
          '主修课程：经济学原理、管理信息系统、工程经济学、工程定额原理、工程成本规划与控制。',
          '奖学金荣誉：国家励志奖学金、校级二等奖学金。',
        ],
      },
      {
        period: '2020-09 – 2022-06',
        place: '校团委宣传部',
        role: '技术摄影组负责人',
        points: [
          '制定团队年度工作计划并分工落实，带队完成 30+ 场大型活动拍摄及官方宣传任务。',
          '运营校园抖音号（粉丝 2 万+），负责选题策划与内容产出，在任期间账号产出多条爆款视频，有效提升校园活动线上影响力。',
          '主导招新选拔与培训机制建设，组建 15 人骨干团队，多数成员获评“优秀干事”。',
        ],
      },
      {
        period: '2022-09 – 2022-12',
        place: '工程造价2201班',
        role: '班主任助理',
        points: [
          '协助班主任开展班级日常事务管理，负责通知传达、信息统计、材料收集及学生沟通等工作，及时了解并反馈同学诉求，保障班级各项工作有序推进。',
          '围绕学风建设、评优评先等重点工作，独立策划并主持主题班会，完成活动方案设计、流程组织及现场协调。',
          '主动搭建师生及同学间沟通桥梁，关注班级整体氛围与成员参与度，通过主题教育和集体活动有效提升班级凝聚力与协作意识，工作表现获得师生认可，最终获评“优秀班助”。',
        ],
      },
      {
        period: '2024-09 – 2027-06',
        place: '物理工程与管理3班',
        role: '宣传委员兼任组织委员',
        points: [
          '负责协助班委开展班级组织建设和日常管理工作，配合完成班级活动策划、人员协调、通知传达及材料整理等事务。',
          '负责班级宣传工作及信息传达，协助班委做好班级活动宣传、通知发布、文案撰写、照片资料整理及材料报送等工作。',
          '协助开展主题班会、团日活动、志愿服务、学术交流等活动，负责活动前期宣传、现场组织、过程记录和后期总结宣传，提升班级活动影响力和同学参与度。',
        ],
      },
      {
        period: '2025-06 – 2025-09',
        place: '圣湘生物科技股份有限公司',
        role: '采购专员',
        points: [
          '供应商管理：协助采购经理审核供应商资质，并基于 KPI 考核体系将 127 家供应商分级为战略型（15%）、优选型（35%）、观察型（40%）、淘汰型（10%）四类矩阵；建立动态评估机制，累计优化冗余供应商 23 家。',
          '采购全流程执行与优化：独立负责从采购申请到付款结案的端到端流程。熟练操作 SAP 系统，高效完成日均 20 份采购申请的审核与整合；精准执行采购申请的审核与数据统计、采购订单制作、跟进及现场验收。',
          '结算：独立对接供应商结算，规范处理对公支付，保障了账款零差错。',
          '仓库管理：独立负责日常的物料出入库与数据管理，精准核验物料规格、数量与有效期，确保账实相符；负责每周一次的仓库物资盘点，清点物资的基本库存量并制作台账，为库存优化与运营决策提供数据支持；负责日常订单过程中异常订单的跟进处理、索赔退运处理、现场数据收集等。',
          '负责日常例会组织，以及季度复盘会议决策进展跟进。',
        ],
      },
      {
        period: '2025-12 – 2026-03',
        place: '理想汽车',
        role: '供应链专员',
        points: [
          '承包商对接：独立对接 16 家承包商，工作内容涉及每月巡检任务的派发与验收、协助法定节假日值守任务的安排与派发及假期收尾验收、工单账款结算，以及承包商新上报技术运维人员的课程培训安排。',
          '对接一线运营：独立对接全国充电网络一线运维人员，及时接收故障情况并做好原因分析，同步向上级反馈，支持战略决策；负责每日一线采购需求的下单和寄件，确保物资及时响应。',
          '运维数据处理：协助整理每月、每季度的工单数据，用于分析各大区、省市乃至充电站的充电量数据和故障发生率，支持下一阶段管理决策；并在数据处理过程中开发设计一项自动化数据整理系统，在节省人力与时间的同时大幅提高工作效率。',
          '负责每周、每月、每季度例会的组织，并参与跟进阶段性总结决策会议。',
        ],
      },
    ],
  },
}

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function getPointAssignments(total: number) {
  const points = [...FOCUS_POINTS]
  const assignment: Record<number, string> = {}
  if (total <= 0) return assignment

  if (total <= points.length) {
    for (let i = 0; i < total; i++) assignment[i] = points[i]
    return assignment
  }

  const used = new Set<number>()
  points.forEach((point, idx) => {
    let target = Math.round((idx * (total - 1)) / (points.length - 1))
    while (used.has(target) && target < total - 1) target += 1
    while (used.has(target) && target > 0) target -= 1
    used.add(target)
    assignment[target] = point
  })
  return assignment
}

function Entry({ entry, point }: { entry: ResumeEntry; point?: string }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={point}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  const pointAssignments = getPointAssignments(data.entries.length)
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} point={pointAssignments[i]} />
        ))}
      </div>
    </section>
  )
}
