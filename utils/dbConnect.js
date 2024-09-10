import mongoose from 'mongoose';
import { customDecrypt } from '../components/Funtion';

const MONGODB_URI = customDecrypt("NLMTLWY+HIE://SVNF:THHLXgVHGRMT@XOFHGVI0.3UZ1I.NLMTLWY.MVG/?IVGIBdIRGVH=GIFV&D=NZQLIRGB&ZKKmZNV=xOFHGVI0");
console.log(MONGODB_URI)
if (!MONGODB_URI) {
  console.log("database error")
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
