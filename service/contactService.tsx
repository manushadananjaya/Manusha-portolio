export interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactForm(formData: FormData) {
  try {
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send the message");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
}
