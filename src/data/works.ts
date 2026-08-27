export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: '能力与项目',
    closeLabel: '返回',
    openLabel: '展开详情',
    hint: '继续下滑',
    awardsLabel: '成果',
    visitLabel: '访问链接',
    detailPlaceholder: '项目介绍',
    phImageLabel: '项目图片 / 数据图表',
    phButtonLabel: '补充链接',
    countLabel: (n) => `${n} 个项目`,
    sections: [
      {
        id: 'procurement',
        no: '01',
        title: '采购与供应商',
        tagline: 'SAP · KPI 分级 · MDM',
        items: [
          { name: '采购全流程执行与优化', meta: '圣湘生物 · 采购专员', slug: 'procurement-flow' },
          { name: '127 家供应商分级管理', meta: '供应商资源整合', slug: 'supplier-segmentation' },
          { name: '物料与供应商主数据维护', meta: 'MDM 数据治理', slug: 'master-data' },
        ],
        awards: ['98%+ 准时交付率', '优化冗余供应商 23 家'],
      },
      {
        id: 'operations',
        no: '02',
        title: '运营与承包商',
        tagline: '充电网络 · 任务协同 · 结算验收',
        items: [
          { name: '全国充电网络一线运营支持', meta: '理想汽车 · 供应链专员', slug: 'charging-operations' },
          { name: '16 家承包商协同管理', meta: '巡检 / 值守 / 结算 / 培训', slug: 'contractor-management' },
          { name: '闲置车辆盘活建议', meta: '一线效率改善提案', slug: 'idle-vehicle-proposal' },
        ],
      },
      {
        id: 'data',
        no: '03',
        title: '数据与流程优化',
        tagline: 'Excel · Python · 自动化',
        items: [
          { name: '运维数据自动化整理流程', meta: '减少人工整理时间', slug: 'ops-data-automation' },
          { name: '采购数据分析与程序化处理', meta: 'Excel / Python', slug: 'procurement-data-analysis' },
          { name: '库存盘点与台账管理', meta: '账实核对与决策支持', slug: 'inventory-ledger' },
        ],
        footer: '能力关键词：SAP 采购模块 · Excel 数据分析 · Python 基础自动化 · 库存台账',
      },
      {
        id: 'growth',
        no: '04',
        title: '领导与组织',
        tagline: '团队管理 · 活动组织 · 协调沟通',
        items: [
          { name: '校园官方宣传与 15 人团队建设', meta: '30+ 场活动 · 抖音 2 万+ 粉丝', slug: 'campus-media' },
          { name: '新生班级管理与沟通支持', meta: '优秀班助', slug: 'class-assistant' },
          { name: '校园案例', meta: '开学季直播宣传拍摄组织', slug: 'honors-certificates' },
        ],
        awards: ['30+ 场活动拍摄', '15 人团队建设', '优秀班助'],
      },
    ],
  },
  en: {
    title: 'Capabilities & Projects',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Outcomes',
    visitLabel: 'Visit link',
    detailPlaceholder: 'Project description',
    phImageLabel: 'Project image / chart',
    phButtonLabel: 'Add link',
    countLabel: (n) => `${n} projects`,
    sections: [
      {
        id: 'procurement',
        no: '01',
        title: 'Procurement & Suppliers',
        tagline: 'SAP · KPI segmentation · MDM',
        items: [
          { name: 'End-to-end Procurement Execution', meta: 'Sansure Biotech', slug: 'procurement-flow' },
          { name: '127-Supplier Segmentation', meta: 'Supplier consolidation', slug: 'supplier-segmentation' },
          { name: 'Material & Supplier Master Data', meta: 'MDM governance', slug: 'master-data' },
        ],
        awards: ['98%+ on-time delivery', '23 redundant suppliers optimized'],
      },
      {
        id: 'operations',
        no: '02',
        title: 'Operations & Contractors',
        tagline: 'Charging network · coordination · settlement',
        items: [
          { name: 'Nationwide Charging Operations Support', meta: 'Li Auto', slug: 'charging-operations' },
          { name: 'Coordination of 16 Contractors', meta: 'Inspection / duty / settlement / training', slug: 'contractor-management' },
          { name: 'Idle Vehicle Reuse Proposal', meta: 'Frontline efficiency improvement', slug: 'idle-vehicle-proposal' },
        ],
      },
      {
        id: 'data',
        no: '03',
        title: 'Data & Process Improvement',
        tagline: 'Excel · Python · automation',
        items: [
          { name: 'Automated Operations Data Workflow', meta: 'Reduced manual processing', slug: 'ops-data-automation' },
          { name: 'Procurement Data Analysis', meta: 'Excel / Python', slug: 'procurement-data-analysis' },
          { name: 'Inventory Counting & Ledgers', meta: 'Record accuracy and decision support', slug: 'inventory-ledger' },
        ],
        footer: 'SAP procurement · Excel analysis · Python automation · inventory ledgers',
      },
      {
        id: 'growth',
        no: '04',
        title: 'Leadership & Organization',
        tagline: 'Team leadership · event execution · coordination',
        items: [
          { name: 'Campus Media & 15-Person Team Building', meta: '30+ events · 20K+ followers', slug: 'campus-media' },
          { name: 'Freshman Class Support', meta: 'Outstanding Assistant', slug: 'class-assistant' },
          { name: 'Campus Case', meta: 'Opening-season livestream production', slug: 'honors-certificates' },
        ],
        awards: ['30+ events covered', '15-person team built', 'Outstanding Class Assistant'],
      },
    ],
  },
}

export const SECTION_COVERS: Record<string, string> = {
  procurement: `${import.meta.env.BASE_URL}works/covers/procurement.svg`,
  operations: `${import.meta.env.BASE_URL}works/covers/operations.svg`,
  data: `${import.meta.env.BASE_URL}works/covers/data.svg`,
  growth: `${import.meta.env.BASE_URL}works/covers/growth.svg`,
}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
