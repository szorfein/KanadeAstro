export const siteInfo = {
  title: "Szorfein",
  description: "苏多莉亚的小小记录站。分享前端开发、折腾日常，以及生活里闪闪发光的片刻。",
  keywords: ["Astro", "Kanade", "博客", "Sudoria", "前端开发"],
  // 发布到域名时设置 SITE_URL，例如 https://your-blog.example。
  url: import.meta.env.SITE_URL || "http://localhost:4321",
};

export const headerConfig = {
  title: "Drowr",
  navLinks: [
    { name: "Home", icon: "icon-[bx--bxs-home-circle]", url: "/" },
    { name: "Posts", icon: "icon-[material-symbols--article]", url: "/posts/" },
    { name: "Msg", icon: "icon-[basil--comment-solid]", url: "/messages/" },
    { name: "Stacks", icon: "icon-[mingcute--link-3-line]", url: "/friends/" },
    { name: "About", icon: "icon-[mynaui--indifferent-ghost-solid]", url: "/about/" },
  ],
};

export const welcomeConfig = {
  title: "Welcome, I'm Szorfein",
  subTitle: "Code is like humor. When you have to explain it, it's bad.",
  bgImage: "/images/hero.webp",
};

export const personalInfo = {
  name: "Szorfein",
  englishName: "Szorfein",
  avatar: "/images/sudoria.jpg",
  role: "Developer Full stack",
  bio: "Code is like humor. When you have to explain it, it's bad.",
  github: "https://github.com/szorfein",
  socialLinks: [
    { name: "GitHub", icon: "icon-[jam--github]", url: "https://github.com/szorfein" },
    { name: "RSS", icon: "icon-[lucide--rss]", url: "/rss.xml" },
    { name: "Messages", icon: "icon-[lucide--mail]", url: "/messages/" },
  ],
  status: "Available",
};
