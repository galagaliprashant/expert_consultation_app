'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancePayment() {
    const router = useRouter();
    const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failure'>('idle');
    const advanceAmount = 499; // Fixed advance amount

    const handlePayment = () => {
        setPaymentStatus('processing');

        // Simulate payment processing
        setTimeout(() => {
            // Simulate 90% success rate
            const isSuccess = Math.random() > 0.1;

            if (isSuccess) {
                setPaymentStatus('success');
                localStorage.setItem('paymentCompleted', 'true');
                setTimeout(() => {
                    router.push('/paid-options');
                }, 2000);
            } else {
                setPaymentStatus('failure');
            }
        }, 2000);
    };

    const handleRetry = () => {
        setPaymentStatus('idle');
    };

    if (paymentStatus === 'processing') {
        return (
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4 animate-pulse">
                        <svg className="w-12 h-12 text-primary-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing Payment...</h2>
                    <p className="text-gray-600">Please wait while we process your payment securely.</p>
                </div>
            </div>
        );
    }

    if (paymentStatus === 'success') {
        return (
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-4">Your advance payment of ₹{advanceAmount} has been processed.</p>
                    <p className="text-primary-600">Redirecting to premium services...</p>
                </div>
            </div>
        );
    }

    if (paymentStatus === 'failure') {
        return (
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h2>
                    <p className="text-gray-600 mb-6">
                        We couldn't process your payment. Please check your payment details and try again.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={handleRetry}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Try Again
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Advance Payment</h2>
                    <p className="text-gray-600">
                        Secure your personalized diet plan and premium services
                    </p>
                </div>

                {/* Payment Amount Card */}
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 mb-8 text-center">
                    <p className="text-gray-600 mb-2">Amount to Pay</p>
                    <div className="text-5xl font-bold text-primary-600 mb-4">
                        ₹{advanceAmount}
                    </div>
                    <p className="text-sm text-gray-600">One-time advance payment</p>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Included:</h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="font-semibold text-gray-900">Personalized Diet Chart</p>
                                <p className="text-sm text-gray-600">Customized nutrition plan based on your consultation</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="font-semibold text-gray-900">Access to Premium Services</p>
                                <p className="text-sm text-gray-600">Kitchen food service and ongoing support</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="font-semibold text-gray-900">Follow-up Consultations</p>
                                <p className="text-sm text-gray-600">Track your progress with expert guidance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Button */}
                <div className="text-center mb-6">
                    <button
                        onClick={handlePayment}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center"
                    >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Pay Advance
                    </button>
                </div>

                {/* Security Note */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <div>
                            <p className="text-sm text-green-800">
                                <span className="font-semibold">Secure Payment:</span> Your payment information is encrypted and processed securely. We never store your card details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
