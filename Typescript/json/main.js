import chalk from "chalk";
import countries from "./countries.json" assert { type: "json" };
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    if (element.name.startsWith("P")) {
        console.log(`Country Name is ${chalk.white.bgRed.bold(element.name)} and Country code is ${chalk.white.bgGreen.bold(element.code)}`);
    }
}
