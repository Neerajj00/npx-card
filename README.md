# 🃏 business card

<a href="https://www.npmjs.com/package/devratdave">
    <img alt="npm" src="https://img.shields.io/npm/v/devratdave?style=flat-square">
</a>

<a href="https://www.npmjs.com/package/devratdave">
    <img alt="npm" src="https://img.shields.io/npm/dt/devratdave?style=flat-square">
</a>

_Digital business card._

![business card][card]

### 📦 Installation

Installation is not required, as you can run this package with [`npx`][npx].

### 🥑 Usage

```
npx devratdave
```

### 🕺🏼 Create Your Own

First, [fork][fork] this repository, clone it your machine, and install the dependencies.

```bash
git clone https://github.com/devratdave/business-card.git
cd business-card
npm install
```

Next, use the `data.js` to create your configuration. You can also modify the configuration manually if you prefer.

```bash
npm run generate
```

Then, update the `name` field in [`package.json`][package]. I highly recommend that the `name` field matches your primary online username (ex: `devratdave`).

Finally, [publish][publish] the package to `npm`.

```bash
npm publish
```

Now anyone with `npm` installed can see your business card!

```bash
npx devratdave
```

### ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [linkedin][linkedin] or [twitter][twitter] to ask any other questions

### 🎞 Credit

📖 accomplished with the help of this [article][article]

[issues]: https://github.com/devratdave/business-card/issues
[linkedin]: https://linkedin.com/in/devratdave
[twitter]: https://twitter.com/dave_devrat
[package]: https://github.com/devratdave/business-card/blob/master/package.json
[fork]: https://github.com/devratdave/business-card/fork
[card]: public/business-card.png
[npx]: https://npmjs.com/package/npx
[article]: https://medium.com/@natterstefan/how-to-create-your-personal-npm-business-card-816dfc66ca8
[publish]: https://docs.npmjs.com/cli/v6/commands/npm-publish
