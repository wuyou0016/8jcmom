// 全站基础配置。只放品牌/域名/语言等站点级事实，
// 不放具体文章 SEO、Provider 数据、Ranking 数据——那些属于内容/数据层。

export const siteConfig = {
  siteName: '机场荟',
  brandName: '机场荟',
  brandNameEn: 'Jichanghui',
  url: 'https://8jc.mom',
  locale: 'zh-CN',
  language: 'zh-CN',

  // 简洁、真实的站点描述，不为 SEO 堆砌关键词。
  // 定位与"机场吧"刻意区分开：机场吧偏"导航+知识科普"综合入口，
  // 机场荟（"荟"=荟萃/汇集）偏"横向对比+选购决策"，同一套维度把
  // 不同服务商并排放在一起比，帮读者更快做判断，不是简单换个牌子
  // 复制同一套定位描述。
  description:
    '机场荟专注机场代理的横向对比与选购决策，用同一套维度并排呈现不同服务商的价格、线路与资料透明度，帮你更快缩小选择范围。',

  defaultTitle: '机场荟｜机场横向对比与选购决策',
  defaultDescription:
    '机场荟专注机场代理的横向对比与选购决策，用同一套维度并排呈现不同服务商的价格、线路与资料透明度，帮你更快缩小选择范围。',

  // 页面未提供 og:image 时的默认图路径。文件本身尚未创建，
  // 待未来真正需要时再制作，这里只先固定配置位置。
  defaultOgImage: '/images/og/default.png',

  // 编辑团队署名，不虚构个人专家/权威身份。
  author: {
    name: '机场荟编辑团队',
  },
} as const;
