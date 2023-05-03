import { useRouter } from "next/router";
import uuid4 from "uuid4";
import Form from "../../components/Form";
import { StyledHeader, StyledFooter } from "@/components";

export default function AddEvent() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventObject = Object.fromEntries(formData);

    const id = uuid4();
    const eventData = { ...eventObject, id };

    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");

    if (response.ok) {
    } else {
      console.error("Failed to add event");
    }
  }

  return (
    <>
      <StyledHeader>Add an Event</StyledHeader>
      <Form onSubmit={handleSubmit} />
      <StyledFooter></StyledFooter>
    </>
  );
}
