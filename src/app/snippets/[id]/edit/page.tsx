import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div className="">
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
