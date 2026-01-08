import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const dbPath = path.join(dataDir, "blood.db");
export const db = new Database(dbPath);

// Enable concurrency
db.pragma("journal_mode = WAL");

// ---------- TABLES ----------
db.prepare(`
CREATE TABLE IF NOT EXISTS login (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS enquiry_registration (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT,
  Phone TEXT,
  Aadhar TEXT,
  Address TEXT,
  BloodGroup TEXT,
  Email TEXT,
  created_at TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS registration (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT,
  PhoneNumber TEXT,
  AdharNumber TEXT,
  Address TEXT,
  Bloodgroup TEXT,
  Sevakendra TEXT,
  DateofBirth TEXT,
  Email TEXT,
  created_at TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS old_data (
  ID INTEGER PRIMARY KEY,
  Name TEXT,
  Phone TEXT,
  Gender TEXT,
  BloodGroup TEXT,
  DateOfBirth TEXT,
  Address TEXT,
  Sevakendra TEXT
)
`).run();
