import https from "https";
import fs from "fs";
import handler from "serve-handler";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, "dist");

// 🔐 Lire les certificats
const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/alphatek.fr/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/alphatek.fr/fullchain.pem"),
};

const server = https.createServer(options, (req, res) => {
  return handler(req, res, {
    public: distPath,
    rewrites: [
      { source: "**", destination: "/index.html" },
    ],
  });
});

server.listen(3005, () => {
  console.log("Serveur HTTPS lancé sur https://alphatek.fr:3005");
});
