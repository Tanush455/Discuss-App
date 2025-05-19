import CommentCreateForm from "../../../../../components/comment-create-form";
import CommentList from "@/components/comment-list";
import PostShow from "@/components/post-show";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

type PostShowPageProps = {
  params: Promise<{ slug: string; postId: string }>;
};

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, postId } = await params;
  return (
    <div className="space-y-3">
      <Link href={`/topics/${slug}`}>
        <Button variant={"link"}>
          <ChevronLeft />
          Back to {slug}
        </Button>
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostShowPage;