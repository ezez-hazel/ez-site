const script = document.currentScript;
const randomBackgroundImage = script?.dataset.backgroundImages?.split(",")[Math.floor(Math.random() * script.dataset.backgroundImages.split(",").length)];
const imageProxyDomain = script?.dataset.proxyDomain;
const imageProxyReferer = script?.dataset.proxyReferer;

if (randomBackgroundImage && imageProxyDomain && imageProxyReferer) {
  const imageProxyUrl = new URL("/image-proxy", imageProxyDomain);
  imageProxyUrl.searchParams.set("url", randomBackgroundImage);
  imageProxyUrl.searchParams.set("referer", imageProxyReferer);
  document.body.style.backgroundImage = `url("${imageProxyUrl}")`;
}