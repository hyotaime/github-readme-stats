import numbro from "numbro";
import zhCN from "numbro/languages/zh-CN.js";
import jaJP from "numbro/languages/ja-JP.js";
import enGB from "numbro/languages/en-GB.js";

const lang = {
    zhCN,
    jaJP,
    enGB,
};

// Register languages
numbro.registerLanguage(lang.enGB, true);
numbro.registerLanguage(lang.jaJP, true);
numbro.registerLanguage(lang.zhCN, true);

// General number formatter
function generalFormatter(num) {
    return Math.abs(num) > 999
        ? numbro(num).format("0.0a", "native")
        : Math.sign(num) * Math.abs(num);
}

// Locale definitions
const LOCALE = {
    en_US: {
        HEADING: "$[name]'$[apostrophe] GitHub Stats",
        STARS: "Total Stars",
        COMMITS: "Total Commits",
        PRS: "Total PRs",
        ISSUES: "Total Issues",
        CONTRIBS: "Contributed to",
        YEAR_SUFFIX: "",
        NUMBRO: {
            INIT: function () {
                numbro.setLanguage("en-US", true);
            },
            doNumberFormat: generalFormatter,
        },
    },
    zh_CN: {
        HEADING: "$[name]的GitHub帐号",
        STARS: "Stars数",
        COMMITS: "Commits数",
        PRS: "PRs数",
        ISSUES: "Issues数",
        CONTRIBUTS: "Contributed数",
        YEAR_SUFFIX: "年",
        NUMBRO: {
            INIT: function () {
                numbro.setLanguage("zh-CN", true);
            },
            doNumberFormat: generalFormatter,
        },
    },
    ja_JP: {
        HEADING: "$[name]のGitHubアカウント",
        STARS: "Stars数",
        COMMITS: "Commits数",
        PRS: "PRs数",
        ISSUES: "Issues数",
        CONTRIBS: "Contributed数",
        YEAR_SUFFIX: "年",
        NUMBRO: {
            INIT: function () {
                numbro.setLanguage("ja-JP", true);
            },
            doNumberFormat: generalFormatter,
        },
    },
};

let loc = null;

// Set the current locale
function setLocale(xloc) {
    loc = LOCALE[xloc] || LOCALE.en_US;
    loc.NUMBRO.INIT();
}

// Default locale setting
setLocale("en_US");

// Exported functions
export function getLocal() {
    return loc;
}

export { setLocale, LOCALE };
