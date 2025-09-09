import chalk from "chalk";

export const theme = {
  primary: "#9b5de5",          // purple
  accent: "#f15bb5",           // pink accent
  gold: "#f7b801",             // highlight (optional)
  leetcode: "#ffb703",
  github: "#6e5494",           // GitHub purple
  linkedin: "#4cc9f0",         // cyan-blue
  email: "#ef476f",            // coral red
  gradient: ["#9b5de5", "#10002b"], // purple → near black
  borderName: "magentaBright", // box border
  borderHex: "#9b5de5",
  dim: "#adb5bd"               // modern gray
};

const data = {
  name: chalk.hex(theme.primary).bold("🚀 Neeraj Gupta"),
  handle: chalk.hex(theme.accent)("@neerajgupta"),
  work: `${chalk.hex(theme.dim)("SDE Intern")} ${chalk.hex(theme.gold)("at National Informatics Centre")}`,
  leetcode: "https://leetcode.com/u/Neerajj00/",
  github: "https://github.com/neerajj00",
  linkedin: "https://linkedin.com/in/neerajj00",
  web: "https://my-portfolio-3pqp.vercel.app/",
  email: "neerajkgupta33@gmail.com",
  card: chalk.hex(theme.dim)("npx") + " " + chalk.hex(theme.accent)("neerajgupta"),

  linksColored: {
    leetcode: chalk.hex(theme.leetcode)("leetcode.com/u/Neerajj00"),
    github: chalk.hex(theme.github)("github.com/neerajj00"),
    linkedin: chalk.hex(theme.linkedin)("linkedin.com/in/neerajj00"),
    web: chalk.hex(theme.gold)("my-portfolio-3pqp.vercel.app"),
    email: chalk.hex(theme.email)("neerajkgupta33@gmail.com")
  }
};

export default data;
