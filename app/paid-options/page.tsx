'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PaidOptions() {
    const router = useRouter();
    const [showCallBackModal, setShowCallBackModal] = useState(false);
    const [callBackSubmitted, setCallBackSubmitted] = useState(false);

    const handleCallBackSubmit = () => {
        setCallBackSubmitted(true);
        setTimeout(() => {
            setShowCallBackModal(false);
            setCallBackSubmitted(false);
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Premium Services!</h2>
                <p className="text-gray-600 text-lg">
                    Choose from our exclusive offerings designed just for you
                </p>
            </div>

            {/* Premium Options Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Paid Diet Chart */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold">Paid Diet Chart</h3>
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <p className="text-purple-100">
                            Get your personalized nutrition plan with detailed meal schedules and recipes
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Customized meal plans based on your consultation</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Detailed nutritional breakdown and calorie tracking</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Weekly meal prep guides and shopping lists</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Healthy recipe alternatives and substitutions</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Monthly progress tracking and adjustments</span>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-purple-800 text-center">
                                <span className="font-semibold">Already included</span> in your advance payment!
                            </p>
                        </div>

                        <button
                            onClick={() => alert('Diet chart will be sent to your email within 24 hours!')}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                        >
                            Access Diet Chart
                        </button>
                    </div>
                </div>

                {/* Kitchen Food Service */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold">Kitchen Food Service</h3>
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <p className="text-orange-100">
                            Enjoy freshly prepared, healthy meals delivered to your doorstep
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Meals prepared according to your diet plan</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Fresh ingredients and expert cooking</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Flexible delivery schedules (daily, weekly)</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Portion-controlled, calorie-counted meals</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Contactless delivery and hygiene certified</span>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-orange-800 text-center">
                                <span className="font-semibold">Premium add-on service</span> - Pricing based on your plan
                            </p>
                        </div>

                        <button
                            onClick={() => setShowCallBackModal(true)}
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
                        >
                            Request Call Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Completion Message */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🎉 Congratulations!</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    You've successfully completed your consultation journey. Your personalized diet chart will be prepared by our nutrition experts and sent to you within 24 hours. For any queries, feel free to use our chat support.
                </p>
                <button
                    onClick={() => router.push('/')}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                </button>
            </div>

            {/* Call Back Modal */}
            {showCallBackModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8">
                        {callBackSubmitted ? (
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                                <p className="text-gray-600">We'll call you back within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Request Call Back</h3>
                                    <button
                                        onClick={() => setShowCallBackModal(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Our team will contact you to discuss the kitchen food service options and pricing.
                                </p>
                                <div className="space-y-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Preferred time for call"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    <textarea
                                        placeholder="Any specific requirements? (Optional)"
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                                    />
                                </div>
                                <button
                                    onClick={handleCallBackSubmit}
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Submit Request
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
