(() => {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const template = [
    "---",
    'title: "My article"',
    "date: " + today,
    'summary: ""',
    "---",
    "",
    "Write your article here.",
    "",
  ].join("\n");
  const url = new URL("https://github.com/fabianlog/fabianlog.github.io/new/main/_articles");
  url.searchParams.set("filename", "new-article-" + Date.now() + ".md");
  url.searchParams.set("value", template);
  document.getElementById("open-editor").href = url.href;
  window.location.replace(url.href);
})();
