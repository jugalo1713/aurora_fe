"use server";

import { connectToDatabase } from "../mongoose";

export async function createTercero() {
  await connectToDatabase();
}
