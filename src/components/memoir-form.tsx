"use client";

import { useState } from "react";

export function MemoirForm() {
  // Temporary lead capture form. No CRM/HubSpot integration is wired up — the
  // submit handler simply shows a confirmation message and does not send the
  // entered data anywhere yet.
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mt-5 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700">
      <p className="font-semibold text-slate-900 mb-1">
        Request the Free Memoir
      </p>
      <p>
        Enter your details below to receive a complimentary PDF copy of Torah
        Mathews&apos; memoir and occasional encouragement resources related to
        trauma recovery, resilience, faith, and emotional healing.
      </p>

      {submitted ? (
        <p
          role="status"
          className="mt-4 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 font-medium text-teal-800"
        >
          Thank you. Your request has been received. We will email your free
          memoir shortly.
        </p>
      ) : (
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="memoir-first-name"
              className="block text-sm font-medium text-slate-900"
            >
              First Name
            </label>
            <input
              id="memoir-first-name"
              name="firstName"
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
            />
          </div>

          <div>
            <label
              htmlFor="memoir-email"
              className="block text-sm font-medium text-slate-900"
            >
              Email Address
            </label>
            <input
              id="memoir-email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800"
          >
            Receive My Free Memoir
          </button>
        </form>
      )}
    </div>
  );
}
