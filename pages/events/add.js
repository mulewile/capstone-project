import { useRouter } from "next/router";
import uuid4 from "uuid4";
import Form from "../../components/Form";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";

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

    if (response.ok) {
      router.push(`/`);
    } else {
      console.error("Failed to add event");
    }
  }

  const cancelAdd = () => {
    router.push(`/`);
  };

  return (
    <>
      <StyledHeader>Add an Event</StyledHeader>
      <Form onSubmit={handleSubmit} onClick={cancelAdd} />
      <StyledFooter></StyledFooter>
    </>
  );
}
