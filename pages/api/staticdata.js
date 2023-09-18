import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "/json");
  const json = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  res.status(200).json(json);
}
