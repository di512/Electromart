// app/api/inngest/route.js
import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [], // Empty functions array
});