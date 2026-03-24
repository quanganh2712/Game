"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, MessageSquare, Tag, FileText } from "lucide-react";

const categories = [
  "bug report",
  "suggestion",
  "content issue",
  "other"
];

export default function FeedbackPage() {
  const [category, setCategory] = useState("bug report");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validateForm = () => {
    if (!subject.trim()) return "Subject is required";
    if (!description.trim()) return "Description is required";
    return null;
  };

  const submit = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          subject,
          description
        })
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setSubject("");
        setDescription("");
      } else {
        setError("Failed to send feedback. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-950 to-zinc-900 text-white p-4">
      <div className="w-full max-w-2xl p-8 rounded-3xl bg-zinc-950/60 backdrop-blur-xl border border-white/10 shadow-xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-sky-500/5 to-blue-500/5 rounded-3xl"></div>
        <div className="relative z-10">

          <div className="text-center mb-8">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl font-bold bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Send Feedback
            </h1>
            <p className="text-zinc-300 mt-2">Help us improve your experience</p>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-zinc-300 mb-2">
              <Tag className="w-4 h-4 mr-2" />
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-950/60 border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-zinc-800 text-white">{c}</option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-zinc-300 mb-2">
              <FileText className="w-4 h-4 mr-2" />
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Brief title for your feedback..."
              className="w-full p-4 rounded-xl bg-zinc-950/60 border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-zinc-300 mb-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your issue, suggestion, or feedback in detail..."
              className="w-full p-4 rounded-xl bg-zinc-950/60 border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm h-40 resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-3 shrink-0" />
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {/* Button */}
          <button
            onClick={submit}
            disabled={loading}
            className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 transition-all duration-200 font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3" />
                Send Feedback
              </>
            )}
          </button>

          {/* Success */}
          {success && (
            <div className="mt-6 p-4 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center animate-fade-in">
              <CheckCircle className="w-5 h-5 text-sky-400 mr-3 shrink-0" />
              <p className="text-sky-300">Feedback sent successfully! Thank you for your feedback.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}