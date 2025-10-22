import Image from "next/image";
import { ContactForm } from "../components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2">Contact Us</h1>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
