export const siteInfo = {
  title: "Kanade",
  description: "A strong Astro template to start to share frontend development, tinkering daily life and shining moments life.",
  keywords: ["Astro", "Kanade", "Blog", "Sudoria", "Frontend development"],
  // 发布到域名时设置 SITE_URL，例如 https://your-blog.example。
  url: import.meta.env.SITE_URL || "http://localhost:4321",
};

export const headerConfig = {
  title: "Kanade",
  navLinks: [
    { name: "Home", icon: "icon-[bx--bxs-home-circle]", url: "/" },
    { name: "Posts", icon: "icon-[material-symbols--article]", url: "/posts/" },
    { name: "Msg", icon: "icon-[basil--comment-solid]", url: "/messages/" },
    { name: "Stacks", icon: "icon-[mingcute--link-3-line]", url: "/friends/" },
    { name: "About", icon: "icon-[mynaui--indifferent-ghost-solid]", url: "/about/" },
  ],
};

export const welcomeConfig = {
  title: "Welcome, I'm Kanade",
  subTitle: "Write your passion into code, collect your daily life as poetry.",
  bgImage: "/images/hero.webp",
};

export const personalInfo = {
  name: "Sudoria",
  englishName: "Sudoria",
  avatar: "/images/sudoria.jpg",
  role: "Developer Full stack",
  bio: "Between code and life, seek a little romance.",
  github: "https://github.com/sudoriaa",
  socialLinks: [
    { name: "GitHub", icon: "icon-[jam--github]", url: "https://github.com/szorfein" },
    { name: "RSS", icon: "icon-[lucide--rss]", url: "/rss.xml" },
    { name: "Messages", icon: "icon-[lucide--mail]", url: "/messages/" },
  ],
  status: "Available",
};
