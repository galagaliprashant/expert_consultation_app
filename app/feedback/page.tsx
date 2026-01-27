'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Feedback() {
    const router = useRouter();
    const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | null>(null);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (feedbackType) {
            // Store feedback
            localStorage.setItem('consultationFeedback', JSON.stringify({
                type: feedbackType,
                comment,
                timestamp: new Date().toISOString(),
            }));

            setSubmitted(true);

            // Route based on feedback
            setTimeout(() => {
                if (feedbackType === 'positive') {
                    router.push('/advance-payment');
                } else {
                    router.push('/');
                }
            }, 1500);
        }
    };

    if (submitted) {
        return (
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                    <p className="text-gray-600">Your feedback has been recorded.</p>
                    {feedbackType === 'positive' && (
                        <p className="text-primary-600 mt-2">Redirecting to payment options...</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">How was your consultation?</h2>
                    <p className="text-gray-600">
                        Your feedback helps us improve our services
                    </p>
                </div>

                {/* Feedback Options */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Positive Feedback */}
                    <button
                        onClick={() => setFeedbackType('positive')}
                        className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300 transform hover:scale-105 ${feedbackType === 'positive'
                                ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl'
                                : 'bg-white border-2 border-gray-300 hover:border-green-500 text-gray-700'
                            }`}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-4">
                                <svg className={`w-16 h-16 ${feedbackType === 'positive' ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Positive</h3>
                            <p className={`text-sm ${feedbackType === 'positive' ? 'text-green-100' : 'text-gray-600'}`}>
                                The consultation was helpful and met my expectations
                            </p>
                            {feedbackType === 'positive' && (
                                <div className="mt-4">
                                    <svg className="w-8 h-8 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </button>

                    {/* Negative Feedback */}
                    <button
                        onClick={() => setFeedbackType('negative')}
                        className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300 transform hover:scale-105 ${feedbackType === 'negative'
                                ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl'
                                : 'bg-white border-2 border-gray-300 hover:border-red-500 text-gray-700'
                            }`}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-4">
                                <svg className={`w-16 h-16 ${feedbackType === 'negative' ? 'text-white' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Negative</h3>
                            <p className={`text-sm ${feedbackType === 'negative' ? 'text-red-100' : 'text-gray-600'}`}>
                                The consultation didn't meet my expectations
                            </p>
                            {feedbackType === 'negative' && (
                                <div className="mt-4">
                                    <svg className="w-8 h-8 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </button>
                </div>

                {/* Comment Field */}
                <div className="mb-8">
                    <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Comments <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                        placeholder="Tell us more about your experience..."
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        onClick={handleSubmit}
                        disabled={!feedbackType}
                        className={`px-12 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg ${feedbackType
                                ? 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-[1.02] active:scale-[0.98]'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Submit Feedback
                    </button>
                </div>

                {/* Info Box */}
                {feedbackType === 'positive' && (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-green-800">
                            <span className="font-semibold">Great!</span> Since you had a positive experience, you'll be able to access our premium services after submitting your feedback.
                        </p>
                    </div>
                )}

                {feedbackType === 'negative' && (
                    <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-sm text-amber-800">
                            <span className="font-semibold">We're sorry to hear that.</span> Your feedback will help us improve. Our team may reach out to you to better understand your concerns.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
