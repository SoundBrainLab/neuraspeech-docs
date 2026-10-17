document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach((link) => {
    const url = new URL(link.href, document.baseURI);

    // Open only external HTTP/HTTPS links in new tabs.
    if (
      ["http:", "https:"].includes(url.protocol) &&
      url.origin !== window.location.origin
    ) {
      link.target = "_blank";
      link.relList.add("noopener", "noreferrer");
    }
  });
});