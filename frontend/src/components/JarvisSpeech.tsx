import { useEffect } from "react";
import toast from "react-hot-toast";

export const useJarvisSpeech = (active: boolean) => {
  useEffect(() => {
    if (!active) return; // Only run when active

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Speech Recognition API not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.trim();
      toast.success(`Jarvis heard: ${transcript}`);

      // Custom commands
      if (transcript.toLowerCase().includes("hello jarvis")) {
        toast.success("Hello! How can I assist you?");
      }

      // Time command
      if (transcript.toLowerCase().includes("time")) {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        if (hours === 0) hours = 12;

        const minutesStr = minutes < 10 ? "0" + minutes : minutes;
        const timeStr = `${hours}:${minutesStr} ${ampm}`;

        toast(`The current time is ${timeStr}`);
      }

      if (transcript.toLowerCase().includes("i am iron man")) {
        toast("Love you 3000 ❤️");
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, [active]);
};
