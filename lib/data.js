import chalk from "chalk";

export const theme = {
  primary: "#00E0FF",          // name, key highlights
  accent: "#FF6F61",           // handle, command
  gold: "#F4D35E",             // company, website
  leetcode: "#1DA1F2",
  github: "#6E5494",
  linkedin: "#0A66C2",
  email: "#D44638",
  gradient: ["#00E0FF", "#FF6F61"], // banner/header gradient
  borderName: "cyanBright",    // boxen keyword
  borderHex: "#64D2FF",        // FYI: visual reference (boxen still needs a name)
  dim: "#9AA4B2"
};

const data = {
  name: chalk.hex(theme.primary).bold("🚀 Neeraj Gupta"),
  handle: chalk.hex(theme.accent)("@neerajgupta"),
  work: `${chalk.white("SDE Intern")} ${chalk.hex(theme.gold)("at National Informatics Centre")}`,
  leetcode: "https://leetcode.com/u/Neerajj00/",
  github: "https://github.com/neerajj00",
  linkedin: "https://linkedin.com/in/neerajj00",
  web: "https://my-portfolio-3pqp.vercel.app/",
  email: "neerajkgupta33@gmail.com",
  card: chalk.white("npx") + " " + chalk.hex(theme.accent)("neerajgupta"),

  // Pre-colored link labels (optional convenience)
  linksColored: {
    leetcode: chalk.hex(theme.leetcode)("https://leetcode.com/u/Neerajj00/"),
    github: chalk.hex(theme.github)("https://github.com/neerajj00"),
    linkedin: chalk.hex(theme.linkedin)("https://linkedin.com/in/neerajj00"),
    web: chalk.hex(theme.gold)("https://my-portfolio-3pqp.vercel.app/"),
    email: chalk.hex(theme.email)("neerajkgupta33@gmail.com")
  }
};

export default data;
