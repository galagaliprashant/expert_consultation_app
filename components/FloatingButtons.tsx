'use client';

import { useState } from 'react';

export default function FloatingButtons() {
    const [showChat, setShowChat] = useState(false);
    const [showCallBack, setShowCallBack] = useState(false);

    return (
        <>
            {/* Floating Chatbot Button */}
            <button
                onClick={() => setShowChat(!showChat)}
                className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Open chat"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>

            {/* Floating Request Call Back Button */}
            <button
                onClick={() => setShowCallBack(!showCallBack)}
                className="fixed bottom-24 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Request call back"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </button>

            {/* Chat Modal */}
            {showChat && (
                <div className="fixed bottom-28 right-6 w-80 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
                    <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold">Chat with us</h3>
                        <button onClick={() => setShowChat(false)} className="hover:bg-primary-700 rounded p-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4 h-64 overflow-y-auto bg-gray-50">
                        <p className="text-sm text-gray-600">Hello! How can we help you today?</p>
                    </div>
                    <div className="p-4 border-t">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                </div>
            )}

            {/* Call Back Modal */}
            {showCallBack && (
                <div className="fixed bottom-44 right-6 w-80 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
                    <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold">Request Call Back</h3>
                        <button onClick={() => setShowCallBack(false)} className="hover:bg-green-700 rounded p-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="tel"
                            placeholder="Your phone number"
                            className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                            Submit Request
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
