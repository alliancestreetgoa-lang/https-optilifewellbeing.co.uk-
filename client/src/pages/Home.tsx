import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<string | null>(null);

  async function checkHealth() {
    try {
      const res = await fetch("/api/health");
      const data = await res.json();
      setStatus(JSON.stringify(data));
    } catch (e) {
      setStatus("Error connecting to API");
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">Welcome</h1>
      <p className="text-muted-foreground text-lg">Your app is running successfully.</p>
      <button
        onClick={checkHealth}
        className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
      >
        Check API Health
      </button>
      {status && (
        <p className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-md">
          API Response: {status}
        </p>
      )}
    </div>
  );
}
