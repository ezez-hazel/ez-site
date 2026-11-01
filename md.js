const markdownIt = require("markdown-it");

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildAttrs(attrs, except = []) {
  return (attrs || [])
    .filter(([k]) => !except.includes(k))
    .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
    .join(" ");
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  let src = token.attrGet("src") || "";
  const alt = token.content || "";
  const title = token.attrGet("title") || "";

  // 解析 #dark= 片段
  let darkSrc = "";
  const m = src.match(/^(.*?)#dark=(.*)$/);
  if (m) {
    src = m[1];
    darkSrc = m[2];
  }

  // 顺手去掉 /src 前缀（接上一轮逻辑）
  src = src.replace(/^\/src\//, "/");
  darkSrc = darkSrc.replace(/^\/src\//, "/");

  const commonAttrs = [
    ["alt", alt],
    ["loading", "lazy"],
    ["decoding", "async"],
  ];
  if (title) commonAttrs.push(["title", title]);

  // 只有一张图：走普通 img
  if (!darkSrc) {
    const attrs = [["src", src], ...commonAttrs];
    return `<img ${buildAttrs(attrs)}>`;
  }

  // 双图：输出 <picture>
  const lightAttrs = [["src", src], ...commonAttrs];
  const darkSourceAttrs = [
    ["srcset", darkSrc],
    ["media", "(prefers-color-scheme: dark)"],
  ];
  const lightSourceAttrs = [
    ["srcset", src],
    ["media", "(prefers-color-scheme: light)"],
  ];

  return [
    "<picture>",
    `  <source ${buildAttrs(darkSourceAttrs)}>`,
    `  <source ${buildAttrs(lightSourceAttrs)}>`,
    `  <img ${buildAttrs(lightAttrs)}>`,
    "</picture>",
  ].join("\n");
};

module.exports = md;