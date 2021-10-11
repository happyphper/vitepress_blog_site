module.exports = {
  lang: "zh-CN",
  title: "王码码",
  description: "王码码的笔记",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "技术笔记", link: "/notes/" },
      { text: "好书推荐", link: "/books/" },
      { text: "Github", link: "https://github.com/happyphper" },
    ],
    sidebar: {
      "/notes": [
        {
          text: "Golang",
          collapsable: true,
          children: [
            // { text: "前言", link: "/books/深入理解计算机系统/前言" },
          ],
        },
        {
          text: "Flutter",
          collapsable: true,
          children: [],
        },
        {
          text: "Web前端",
          collapsable: true,
          children: [],
        },
        {
          text: "其他",
          collapsable: true,
          children: [],
        },
      ],
      "/books/": [
        { text: "栏目介绍", link: "/books/" },
        { text: "如何阅读一本书", link: "/books/how-to-read-a-book" },
        { text: "深入理解计算机系统", link: "/books/computer-systems" },
        { text: "算法导论", link: "/books/introduction-to-algorithms" },
      ],
    },
  },
};
