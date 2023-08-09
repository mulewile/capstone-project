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

  async function handleSubmit(eventObject) {
    const id = uuid4();
    const eventData = { ...eventObject, id };
    const isSuccess = await postEventToAPI(eventData);
    if (isSuccess) {
      router.push("/events/overview");
    } else {
      console.error("Failed to add event");
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
