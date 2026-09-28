---
layout: layouts/post.njk
title: 直播推送
tags:
  - tools
---

# 直播推送

监测直播间开播状态并进行统一推送的服务。

当前使用轮询方式工作，开播前轮询间隔为`1min`，开播后轮询间隔为`5min`。

## Bark (iOS)

1. 在 iOS 上安装 Bark，并允许`重要提醒`通知权限。

    <a target='_blank' href='https://apps.apple.com/cn/app/bark-custom-notifications/id1403753865' style='margin: 15px;'>
    <picture>
      <source media='(prefers-color-scheme: dark)' srcset='/icons/Download_on_the_App_Store_Badge_CNSC_RGB_wht_092917.svg' />
      <img src='/icons/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg' height='60px' alt='在 App Store 下载' />
    </picture>
    </a>

2. 将服务器添加到 Bark

    [添加服务器](bark://addServer?address=https%3A%2F%2Fbark.xn--4gqa980aba.vip)

    或手动添加
    - https://bark.一几一几.vip
    - https://bark.xn--4gqa980aba.vip （当上一个 URL 无法添加时）

    注意不要泄露 Bark 中的 `Key`，任何拥有 `Key` 的人都可以向你发送通知。

**Bark 推送会以重要提醒（类似地震预警）方式响最多30s，使用前请务必确保你是真正的满考子**

<!-- ## Accnotify (Android)

即将推出

## Webhook

即将推出 -->
