import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    // other "users" fields...
  }).index("email", ["email"]),
  journals: defineTable({
    type: v.string(),
    title: v.string(),
    authors: v.string(),
    firstAuthor: v.string(),
    coAuthors: v.union(v.number(), v.string()),
    journalName: v.string(),
    paymentType: v.string(),
    volume: v.string(),
    year: v.number(),
    pages: v.string(),
    date: v.optional(v.string()),
    url: v.string(),
    isbn: v.string(),
    pdf: v.string(),
  }),
  // Your other tables...
});

export default schema;