#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import open from "open";
import ora from "ora";
import figlet from "figlet";

import data, { theme } from "./lib/data.js";

// --- Utility: typewriter effect ---
async function typewriter(text, delay = 30) {
  for (let char of text) {
    process.stdout.write(char);
    await new Promise((r) => setTimeout(r, delay));
  }
  process.stdout.write("\n");
}

// --- Fade-out helper ---
async function fadeOut(text, steps = 5, delay = 120) {
  let opacity = 1;
  for (let i = 0; i < steps; i++) {
    console.clear();
    console.log(
      chalk.hex(theme.primary).dim(text) // fade with purple dim
    );
    opacity -= 1 / steps;
    await new Promise((r) => setTimeout(r, delay));
  }
  console.clear();
}

// --- Banner ---
function renderBanner(text) {
  return gradient(theme.gradient).multiline(
    figlet.textSync(text, { font: "Standard" })
  );
}

// --- First run (animations + card + menu) ---
async function showCard() {
  console.clear();

  // 🎬 Intro animations
  await typewriter(chalk.hex(theme.dim)("> Booting developer profile..."));
  const glitch = chalkAnimation.glitch("Loading portfolio...");
  await new Promise((r) => setTimeout(r, 1500));
  glitch.stop();
  await fadeOut("Loading portfolio...");

  const welcomeAnim = chalkAnimation.rainbow("✨ Welcome! Glad to have you here ✨");
  await new Promise((r) => setTimeout(r, 1000));
  welcomeAnim.stop();
  console.log("\n");

  // Banner + header
  console.log(renderBanner("Neeraj Gupta") + "\n");
  console.log(gradient(theme.gradient)("───────  Neeraj Card  ───────") + "\n");

  // Card info
  const newline = "\n";
  const heading = `${data.name} ${chalk.dim("/")} ${data.handle}`;
  const working = `${chalk.bold("Work:")}     ${data.work}`;
  const leetcode = `${chalk.bold("Leetcode:")}  ${data.linksColored.leetcode}`;
  const github = `${chalk.bold("GitHub:")}   ${data.linksColored.github}`;
  const linkedin = `${chalk.bold("LinkedIn:")} ${data.linksColored.linkedin}`;
  const web = `${chalk.bold("Web:")}      ${data.linksColored.web}`;
  const mail = `${chalk.bold("Email:")}    ${data.linksColored.email}`;
  const card = `${chalk.bold("Card:")}     ${data.card}`;

  const output = [
    heading,
    newline,
    working,
    leetcode,
    github,
    linkedin,
    web,
    newline,
    card,
    mail
  ].join(newline);

  console.log(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: theme.borderName
    })
  );

  // then go to menu
  await showMenu(true);
}

// --- Menu only (loop) ---
async function showMenu(firstRun = false) {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: chalk.hex(theme.primary)("Where would you like to go?"),
      choices: [
        { name: "🌐 Website", value: "web" },
        { name: "💻 GitHub", value: "github" },
        { name: "🔗 LinkedIn", value: "linkedin" },
        { name: "💡 Leetcode", value: "leetcode" },
        { name: "👋 Exit", value: "exit" }
      ]
    }
  ]);

  await handleAction(answers.action, firstRun);
}

// --- Handle actions ---
async function handleAction(action, firstRun) {
  let spinner;
  switch (action) {
    case "leetcode":
      spinner = ora(chalk.hex(theme.leetcode)("Opening Leetcode...")).start();
      await open(data.leetcode);
      await new Promise((r) => setTimeout(r, 2000));
      spinner.succeed(chalk.hex(theme.leetcode)("Leetcode opened 🚀"));
      console.log("\n");
      break;

    case "github":
      spinner = ora(chalk.hex(theme.github)("Opening GitHub...")).start();
      await open(data.github);
      await new Promise((r) => setTimeout(r, 2000));
      spinner.succeed(chalk.hex(theme.github)("GitHub opened 🚀"));
      console.log("\n");
      break;

    case "linkedin":
      spinner = ora(chalk.hex(theme.linkedin)("Opening LinkedIn...")).start();
      await open(data.linkedin);
      await new Promise((r) => setTimeout(r, 2000));
      spinner.succeed(chalk.hex(theme.linkedin)("LinkedIn opened 🚀"));
      console.log("\n");
      break;

    case "web":
      spinner = ora(chalk.hex(theme.gold)("Opening Website...")).start();
      await open(data.web);
      await new Promise((r) => setTimeout(r, 2000));
      spinner.succeed(chalk.hex(theme.gold)("Website opened 🚀"));
      console.log("\n");
      break;

    case "exit":
      console.log(chalk.hex(theme.primary)("👋 Thanks for stopping by!"));
      return; // stop loop
  }

  // 🔁 Loop back (menu only, no banner/card after first run)
  await showMenu();
}

// --- Run ---
showCard();
