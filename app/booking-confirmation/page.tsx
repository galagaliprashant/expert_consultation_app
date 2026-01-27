'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// 🎭 DEMO MODE: Set to true for client demos to bypass API calls
const DEMO_MODE = true;

interface TimeSlot {
    date: string;
    time: string;
}

export default function BookingConfirmation() {
    const router = useRouter();
    const [slot, setSlot] = useState<TimeSlot | null>(null);
    const [userDetails, setUserDetails] = useState<any>(null);
    const [meetLink, setMeetLink] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [whatsappSent, setWhatsappSent] = useState(false);

    useEffect(() => {
        const storedSlot = localStorage.getItem('selectedSlot');
        const storedUser = localStorage.getItem('userDetails');

        if (storedSlot) {
            setSlot(JSON.parse(storedSlot));
        }
        if (storedUser) {
            setUserDetails(JSON.parse(storedUser));
        }
    }, []);

    // Automatically schedule meeting and send WhatsApp when data is available
    useEffect(() => {
        const scheduleBooking = async () => {
            if (!slot || !userDetails) return;

            try {
                setLoading(true);
                setError('');

                // 🎭 DEMO MODE: Use mock data for client demos
                if (DEMO_MODE) {
                    // Simulate API delay for realistic demo
                    await new Promise(resolve => setTimeout(resolve, 1500));

                    // Set mock success data
                    setMeetLink('https://meet.google.com/abc-defg-hij');
                    setWhatsappSent(true);
                    setLoading(false);
                    return;
                }

                const response = await fetch('/api/confirm-booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: userDetails.name,
                        email: userDetails.email || `${userDetails.phone}@temp.com`, // Fallback email
                        phone: userDetails.phone,
                        date: slot.date,
                        time: slot.time,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.details || data.error || 'Failed to confirm booking');
                }

                setMeetLink(data.meetLink);
                setWhatsappSent(data.whatsappSent);
                setLoading(false);
            } catch (err: any) {
                console.error('Booking error:', err);
                setError(err.message || 'Failed to schedule meeting. Please contact support.');
                setLoading(false);
            }
        };

        scheduleBooking();
    }, [slot, userDetails]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    };

    const handleDone = () => {
        router.push('/feedback');
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mb-4"></div>
                        <p className="text-gray-600 text-lg">Scheduling your consultation...</p>
                        <p className="text-gray-500 text-sm mt-2">Creating Google Meet link and sending WhatsApp notification</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Error</h2>
                        <p className="text-red-600 mb-6">{error}</p>
                        <button
                            onClick={() => router.push('/slot-selection')}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Success State */}
                {!loading && !error && (
                    <>
                        {/* Success Icon */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                            <p className="text-gray-600">
                                Your consultation has been successfully scheduled
                            </p>
                            {whatsappSent && (
                                <div className="mt-3 inline-flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp notification sent!
                                </div>
                            )}
                        </div>

                        {/* Google Meet Link */}
                        {meetLink && (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Google Meet Link
                                </h3>
                                <div className="bg-white rounded-lg p-4 mb-3">
                                    <a
                                        href={meetLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 break-all font-medium"
                                    >
                                        {meetLink}
                                    </a>
                                </div>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(meetLink);
                                        alert('Meeting link copied to clipboard!');
                                    }}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy Meeting Link
                                </button>
                            </div>
                        )}

                        {/* Booking Details */}
                        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Consultation Details</h3>

                            {slot && (
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-600">Date</p>
                                            <p className="font-semibold text-gray-900">{formatDate(slot.date)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-600">Time</p>
                                            <p className="font-semibold text-gray-900">{slot.time}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {userDetails && (
                                <div className="mt-4 pt-4 border-t border-primary-200">
                                    <div className="flex items-start">
                                        <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-600">Contact Information</p>
                                            <p className="font-semibold text-gray-900">{userDetails.name}</p>
                                            <p className="text-gray-700">{userDetails.phone}</p>
                                            {userDetails.email && <p className="text-gray-700">{userDetails.email}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Next Steps */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                What Happens Next?
                            </h3>
                            <ul className="space-y-2 text-blue-800">
                                <li className="flex items-start">
                                    <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                                    <span>You've received a WhatsApp message with the Google Meet link</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                                    <span>A calendar invite has been sent to your email address</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                                    <span>Join the Google Meet 5 minutes before the scheduled time</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                                    <span>After the consultation, you'll be able to provide feedback and access premium services</span>
                                </li>
                            </ul>
                        </div>

                        {/* Done Button */}
                        <div className="text-center">
                            <button
                                onClick={handleDone}
                                className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Done
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
