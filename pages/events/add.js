import { useRouter } from "next/router";
import uuid4 from "uuid4";
import Form from "../../components/Form";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";

export default function AddEvent() {
  const router = useRouter();

  async function postEventToAPI(eventData) {
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.ok;
    } catch (error) {
      console.error("An error occurred:", error);
      return false;
    }
  }

  async function handleSubmit(eventData) {
    try {
      const id = uuid4();
      const eventWithId = { ...eventData, id };

      const isSuccess = await postEventToAPI(eventWithId);

      if (isSuccess) {
        router.push("/events/overview");
      } else {
        console.error("Failed to add the event. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred while adding the event:", error);
    }
  }

  return (
    <>
      <StyledHeader>Add an Event</StyledHeader>
      <Form onSubmit={handleSubmit} />
      <StyledFooter>WePlan</StyledFooter>
    </>
  );
}
