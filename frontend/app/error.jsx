"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <p className="mt-2 text-gray-600">{error?.message ?? "Unknown error"}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 rounded bg-blue-600 text-white"
      >
        Try again
      </button>
    </div>
  );
}
