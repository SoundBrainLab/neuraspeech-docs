document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    // Keep within-page anchors and special actions working normally.
    if (/^(#|mailto:|tel:|javascript:)/i.test(href)) return;

    link.target = "_blank";
    link.relList.add("noopener", "noreferrer");
  });
});