"use client";

import { useDeleteChatbotModal } from "@/components/modals/delete-chatbot-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Chatbot } from "@/lib/schema/chatbots";

export default function ChatbotDeleteCard({ chatbot }: { chatbot: Chatbot }) {
  const [, setDeleteChatbotModalOpen, DeleteChatbotModal] =
    useDeleteChatbotModal(chatbot);
  return (
    <>
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle>Delete Chatbot</CardTitle>
          <CardDescription>
            Permanently delete your chatbot on {APP_NAME}, and their stats. This
            action cannot be undone - please proceed with caution.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="destructive"
            onClick={() => setDeleteChatbotModalOpen(true)}
          >
            Delete Chatbot
          </Button>
        </CardFooter>
      </Card>
      <DeleteChatbotModal />
    </>
  );
}
