import * as middleware from '@/utils/middleware'

/**
 * `app` 名称
 */
export const AppName = "Spark Store"

/**
 * `app` 介绍
 */
export const AppDesc = "Have more."

/**
 * 主菜单
 */
// 愿望墙: http://www.shenmo.tech:420/?p=91
// 应用问题反馈: http://www.shenmo.tech:420/?p=419
// APP建议: http://www.shenmo.tech:420/?p=422
export const AppMainPageMenus = [
  {
    title: "搜索应用(暂未开放)",
    id: 0,
    router: "Search"
  },
  {
    title: "愿望墙",
    id: 91
  },
  {
    title: "问题反馈",
    id: 419
  },
  {
    title: "APP建议",
    id: 422
  }
]