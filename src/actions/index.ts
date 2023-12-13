"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

// Create
export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect("/");
}

// Edit
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

// Delete
export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
