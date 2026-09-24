---
layout: layouts/base.njk
title: 直播推送
tags:
  - tools
---

# 直播推送

监测直播间开播状态并进行统一推送的服务。

当前使用轮询方式工作，开播前轮询间隔为`1min`，开播后轮询间隔为`5min`。

## Bark (iOS)

1. 在 iOS 上安装 Bark，并允许`重要提醒`通知权限。

    <a target='_blank' href='https://apps.apple.com/cn/app/bark-custom-notifications/id1403753865' style='padding: 10px;'>
    <img src='/icons/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg' height='40' />
    </a>

2. [添加服务器](bark://addServer?address=https%3A%2F%2Fbark.xn--4gqa980aba.vip)

<!-- ## Accnotify (Android)

即将推出

## Webhook

即将推出 -->
