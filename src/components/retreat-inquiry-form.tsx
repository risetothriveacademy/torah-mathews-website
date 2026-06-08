"use client";

import { useState } from "react";

// Temporary retreat inquiry form. This is UI only — there is intentionally NO
// GoHighLevel (GHL) or other CRM integration wired up yet. On submit the form
// simply shows a thank-you message and does not send the entered data anywhere.
//
// FUTURE INTEGRATION: replace the handleSubmit logic below (and/or the <form>
// element) with the GoHighLevel form embed / API call when the CRM is ready.
export function RetreatInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-200 bg-teal-50 px-8 py-10 text-center"
      >
        <h3 className="text-2xl font-bold text-teal-800 mb-3">Thank You</h3>
        <p className="text-lg text-teal-900 leading-relaxed">
          Your request has been received. A member of Torah Mathews&apos; team
          will be in touch shortly with retreat information tailored to your
          organization.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="retreat-name"
            className="block text-sm font-medium text-slate-900"
          >
            Name
          </label>
          <input
            id="retreat-name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#209bab] focus:outline-none focus:ring-1 focus:ring-[#209bab]"
          />
        </div>

        <div>
          <label
            htmlFor="retreat-organization"
            className="block text-sm font-medium text-slate-900"
          >
            Organization
          </label>
          <input
            id="retreat-organization"
            name="organization"
            type="text"
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#209bab] focus:outline-none focus:ring-1 focus:ring-[#209bab]"
          />
        </div>

        <div>
          <label
            htmlFor="retreat-email"
            className="block text-sm font-medium text-slate-900"
          >
            Email
          </label>
          <input
            id="retreat-email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#209bab] focus:outline-none focus:ring-1 focus:ring-[#209bab]"
          />
        </div>

        <div>
          <label
            htmlFor="retreat-phone"
            className="block text-sm font-medium text-slate-900"
          >
            Phone
          </label>
          <input
            id="retreat-phone"
            name="phone"
            type="tel"
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#209bab] focus:outline-none focus:ring-1 focus:ring-[#209bab]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="retreat-audience"
          className="block text-sm font-medium text-slate-900"
        >
          Audience Type
        </label>
        <select
          id="retreat-audience"
          name="audienceType"
          required
          defaultValue=""
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#209bab] focus:outline-none focus:ring-1 focus:ring-[#209bab]"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="NGO">NGO</option>
          <option value="Nonprofit">Nonprofit</option>
          <option value="Church">Church</option>
          <option value="Ministry">Ministry</option>
          <option value="Corporate">Corporate</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="retreat-message"
          className="block text-sm font-medium text-slate-900"
        >
          Message
        </label>
        <textarea
          id="retreat-message"
          name="message"
          rows={5}
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#209bab] focus:outline-none focus:ring-1 focus:ring-[#209bab]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#209bab] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1a7a86] sm:w-auto"
      >
        Request Retreat Information
      </button>
    </form>
  );
}
