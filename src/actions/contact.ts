"use server";

export async function submitContactFormAction(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // Delay response by 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Contact form submission:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    return {
      success: true,
      message: `${formData.name}, Your message has been sent successfully!`,
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      success: false,
      message: "Failed to process form submission",
    };
  }
}
