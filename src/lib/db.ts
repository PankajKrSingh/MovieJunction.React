import fs from "fs";
import path from "path";

function dataPath(resource: string) {
  return path.join(process.cwd(), "data", `${resource}.json`);
}

export async function readJSON<T = any>(resource: string): Promise<T[]> {
  const p = dataPath(resource);
  try {
    const raw = await fs.promises.readFile(p, "utf8");
    return JSON.parse(raw || "[]") as T[];
  } catch (err: any) {
    if (err.code === "ENOENT") return [] as T[];
    throw err;
  }
}

export async function writeJSON(resource: string, data: unknown) {
  const p = dataPath(resource);
  await fs.promises.writeFile(p, JSON.stringify(data, null, 2), "utf8");
}

export async function getAll<T = any>(resource: string): Promise<T[]> {
  return await readJSON<T>(resource);
}

export async function add<T extends { id?: number } = any>(resource: string, item: Omit<T, "id">): Promise<T & { id: number }> {
  const list = (await readJSON<T>(resource)) || [];
  const id = list.reduce((m, x) => Math.max(m, (x as any).id || 0), 0) + 1;
  const toAdd = Object.assign({ id }, item) as T & { id: number };
  list.push(toAdd as unknown as T);
  await writeJSON(resource, list);
  return toAdd;
}

export async function update<T = any>(resource: string, id: string | number, patch: Partial<T>): Promise<T | null> {
  const list = (await readJSON<T>(resource)) || [];
  const idx = list.findIndex((x) => String((x as any).id) === String(id));
  if (idx === -1) return null;
  list[idx] = Object.assign({}, list[idx], patch);
  await writeJSON(resource, list);
  return list[idx];
}
