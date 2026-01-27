'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to Your Health Journey
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Let's find the perfect nutrition plan for you
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Do you want a predefined diet?
                </h3>
                <p className="text-gray-600 text-center mb-8">
                    Choose a ready-made diet plan for quick guidance, or book a personalized consultation for a custom nutrition strategy tailored to your goals.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* YES Button */}
                    <button
                        onClick={() => router.push('/predefined-diet')}
                        className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-2">YES</h4>
                            <p className="text-green-100 text-sm">
                                Get instant access to our expertly crafted diet plans and cooking guidance
                            </p>
                            <div className="mt-4 flex items-center justify-center text-sm">
                                <span className="bg-green-400 bg-opacity-30 px-3 py-1 rounded-full">
                                    Quick & Easy
                                </span>
                            </div>
                        </div>
                    </button>

                    {/* NO Button */}
                    <button
                        onClick={() => router.push('/user-details')}
                        className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-2">NO</h4>
                            <p className="text-blue-100 text-sm">
                                Book a personalized consultation for a custom diet plan designed just for you
                            </p>
                            <div className="mt-4 flex items-center justify-center text-sm">
                                <span className="bg-blue-400 bg-opacity-30 px-3 py-1 rounded-full">
                                    Personalized Approach
                                </span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Helper Section */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Not sure which to choose?</span> Our predefined diets are great for general guidance, while personalized consultations provide tailored nutrition strategies for specific health goals, allergies, or medical conditions.
                </p>
            </div>
        </div>
    );
}
