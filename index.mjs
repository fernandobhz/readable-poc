import { Readable } from "stream";

const rs = new Readable({ encoding: "utf8", read() {} });

setInterval(() => {
  rs.push(new Date().toISOString());
}, 1000);

rs.on('data', console.log);