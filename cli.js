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
      chalk.rgb(
        Math.floor(255 * opacity),
        Math.floor(111 * opacity),
        Math.floor(97 * opacity)
      )(text)
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

// --- Main Card ---
async function showCard() {
  console.clear();

  // 🎬 Intro
  await typewriter(chalk.green("> Booting developer profile..."));
  const glitch = chalkAnimation.glitch("Loading portfolio...");
  await new Promise((r) => setTimeout(r, 1500));
  glitch.stop();

  // 🌀 Fade-out glitch text
  await fadeOut("Loading portfolio...");

  // Welcome message
  const welcomeAnim = chalkAnimation.rainbow("✨ Welcome! Glad to have you here ✨");
  await new Promise((r) => setTimeout(r, 1000));
  welcomeAnim.stop();
  console.log("\n");

  // 🏷️ ASCII Banner
  console.log(renderBanner("Devrat Dave") + "\n");

  // ✨ Elegant gradient header
  console.log(gradient(["#00e0ff", "#ff6f61"])("───────  Dev Card  ───────") + "\n");

  // 📦 Boxed card
  const newline = "\n";
  const heading = `${data.name} ${chalk.dim("/")} ${data.handle}`;
  const working = `${chalk.bold("Work:")}     ${data.work}`;
  const twitter = `${chalk.bold("Twitter:")}  ${data.linksColored.twitter}`;
  const github = `${chalk.bold("GitHub:")}   ${data.linksColored.github}`;
  const linkedin = `${chalk.bold("LinkedIn:")} ${data.linksColored.linkedin}`;
  const web = `${chalk.bold("Web:")}      ${data.linksColored.web}`;
  const mail = `${chalk.bold("Email:")}    ${data.linksColored.email}`;
  const card = `${chalk.bold("Card:")}     ${data.card}`;

  const output = [
    heading,
    newline,
    working,
    twitter,
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
      borderColor: "cyanBright"
    })
  );

  // 🎯 Interactive menu
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Where would you like to go?",
      choices: [
        { name: "🌐 Website", value: "web" },
        { name: "💻 GitHub", value: "github" },
        { name: "🔗 LinkedIn", value: "linkedin" },
        { name: "🐦 Twitter", value: "twitter" },
        { name: "👋 Exit", value: "exit" }
      ]
    }
  ]);

  await handleAction(answers.action);
}

// --- Handle actions with spinner ---
async function handleAction(action) {
  let spinner;
  switch (action) {
    case "twitter":
      spinner = ora("Opening Twitter...").start();
      await open(data.twitter);
      spinner.succeed("Twitter opened 🚀");
      break;
    case "github":
      spinner = ora("Opening GitHub...").start();
      await open(data.github);
      spinner.succeed("GitHub opened 🚀");
      break;
    case "linkedin":
      spinner = ora("Opening LinkedIn...").start();
      await open(data.linkedin);
      spinner.succeed("LinkedIn opened 🚀");
      break;
    case "web":
      spinner = ora("Opening Website...").start();
      await open(data.web);
      spinner.succeed("Website opened 🚀");
      break;
    case "exit":
      console.log(chalk.green("👋 Thanks for stopping by!"));
      process.exit(0);
  }
}

// --- Run ---
showCard();