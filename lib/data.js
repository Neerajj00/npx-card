import chalk from "chalk";

export const theme = {
  primary: "#00E0FF",          // name, key highlights
  accent: "#FF6F61",           // handle, command
  gold: "#F4D35E",             // company, website
  twitter: "#1DA1F2",
  github: "#6E5494",
  linkedin: "#0A66C2",
  email: "#D44638",
  gradient: ["#00E0FF", "#FF6F61"], // banner/header gradient
  borderName: "cyanBright",    // boxen keyword
  borderHex: "#64D2FF",        // FYI: visual reference (boxen still needs a name)
  dim: "#9AA4B2"
};

const data = {
  name: chalk.hex(theme.primary).bold("🚀 Devrat Dave"),
  handle: chalk.hex(theme.accent)("@devratdave"),
  work: `${chalk.white("Software Engineering Intern")} ${chalk.hex(theme.gold)("at National Informatics Centre")}`,
  twitter: "https://twitter.com/dave_devrat",
  github: "https://github.com/devratdave",
  linkedin: "https://linkedin.com/in/devratdave",
  web: "https://portfolio-topaz-tau-21.vercel.app/",
  email: "devratdave02@hotmail.com",
  card: chalk.white("npx") + " " + chalk.hex(theme.accent)("devratdave"),

  // Pre-colored link labels (optional convenience)
  linksColored: {
    twitter: chalk.hex(theme.twitter)("https://twitter.com/dave_devrat"),
    github: chalk.hex(theme.github)("https://github.com/devratdave"),
    linkedin: chalk.hex(theme.linkedin)("https://linkedin.com/in/devratdave"),
    web: chalk.hex(theme.gold)("https://portfolio-topaz-tau-21.vercel.app/"),
    email: chalk.hex(theme.email)("devratdave02@hotmail.com")
  }
};

export default data;
