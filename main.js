/* 像素报 — 排印辅助：日期、印章、版次指示 */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------- 报头日期（中文数字） -------- */

  const DIGITS = "〇一二三四五六七八九";
  const MONTHS = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
  const DAYS = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  const WEEK = ["日", "一", "二", "三", "四", "五", "六"];

  const digits = (value) =>
    String(value)
      .split("")
      .map((d) => DIGITS[Number(d)])
      .join("");

  const dayWord = (d) => {
    if (d <= 10) return DAYS[d];
    if (d < 20) return "十" + DAYS[d - 10];
    if (d === 20) return "二十";
    if (d < 30) return "廿" + DAYS[d - 20];
    if (d === 30) return "三十";
    return "卅一";
  };

  const now = new Date();
  const today = document.getElementById("today");
  if (today) {
    today.textContent =
      `${digits(now.getFullYear())}年${MONTHS[now.getMonth()]}月${dayWord(now.getDate())}日` +
      ` · 星期${WEEK[now.getDay()]}`;
  }

  /* -------- 版面感知 -------- */

  const links = Array.from(document.querySelectorAll(".edition-nav a[data-edition]"));
  const editionNum = document.getElementById("edition-num");
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = (id) => {
    let current = null;
    links.forEach((a) => {
      const on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("is-active", on);
      if (on) current = a;
    });
    if (current && editionNum) {
      editionNum.textContent = current.dataset.edition;
    }
  };

  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* -------- 落章 -------- */

  const stamp = () => document.body.classList.add("stamped");
  if (reduceMotion) stamp();
  else window.setTimeout(stamp, 420);
})();
