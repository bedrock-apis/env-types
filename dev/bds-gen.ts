import { platform } from "node:process";
import { Installation, getLatestDownloadLink, DisposableMode } from "@bedrock-apis/bds-utils";
import { existsSync } from "node:fs";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { text } from 'node:stream/consumers';

const temp = ".temp";
if (!existsSync(temp)) await mkdir(temp);

const link = await getLatestDownloadLink({
  platform: platform as "win32",
  preview: true,
});

if (!link)
  throw new ReferenceError("Failed to obtain download link for latest BDS");

const name = link.substring(link.lastIndexOf("/") + 1);
const installation_path = resolve(temp, name);
if (!existsSync(installation_path)) await mkdir(installation_path);

await using installation = await Installation.From({ directory: installation_path, disposableMode: DisposableMode.StopRunningServes });
if (!installation.getExecutableFile()) await installation.install(link);

await rm("./.temp/bedrock-server-1.26.40.31.zip/development_behavior_packs", {recursive: true});
const rsc = await installation.data.import("behavior_pack");

installation.config.setAllowed(["@minecraft/server-net"]);
await installation.worlds.clear();
const world = await installation.worlds.create("level_data", {
  behavior_packs: rsc,
  experiments: ["gametest"],
  resource_packs: [],
});

installation.properties.set("level-name", world.levelName);
const process = await installation.run([]);
//process.enabledOutputRedirection();
const task = text(process.process.stdout);
await new Promise(res=>setTimeout(res, 3_000));
await process.stop(false);
console.log((await task));
const data = JSON.parse((await task).match(/---([^-]+)---/)?.[1]!);
console.log(data);

await writeFile("test/gen.ts", data.src);
