'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TimeSlot {
    id: string;
    date: string;
    time: string;
    available: boolean;
}

const mockSlots: TimeSlot[] = [
    { id: '1', date: '2026-01-20', time: '10:00 AM', available: true },
    { id: '2', date: '2026-01-20', time: '02:00 PM', available: true },
    { id: '3', date: '2026-01-20', time: '04:00 PM', available: false },
    { id: '4', date: '2026-01-21', time: '10:00 AM', available: true },
    { id: '5', date: '2026-01-21', time: '11:30 AM', available: true },
    { id: '6', date: '2026-01-21', time: '03:00 PM', available: true },
    { id: '7', date: '2026-01-22', time: '09:00 AM', available: true },
    { id: '8', date: '2026-01-22', time: '01:00 PM', available: false },
    { id: '9', date: '2026-01-22', time: '04:30 PM', available: true },
];

export default function SlotSelection() {
    const router = useRouter();
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

    const handleConfirm = () => {
        if (selectedSlot) {
            localStorage.setItem('selectedSlot', JSON.stringify(selectedSlot));
            router.push('/booking-confirmation');
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    };

    // Group slots by date
    const slotsByDate = mockSlots.reduce((acc, slot) => {
        if (!acc[slot.date]) {
            acc[slot.date] = [];
        }
        acc[slot.date].push(slot);
        return acc;
    }, {} as Record<string, TimeSlot[]>);

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Select Your Consultation Slot</h2>
                    <p className="text-gray-600">
                        Choose a convenient time for your personalized nutrition consultation
                    </p>
                </div>

                {/* Slots Grid */}
                <div className="space-y-8 mb-8">
                    {Object.entries(slotsByDate).map(([date, slots]) => (
                        <div key={date}>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {formatDate(date)}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {slots.map((slot) => (
                                    <button
                                        key={slot.id}
                                        onClick={() => slot.available && setSelectedSlot(slot)}
                                        disabled={!slot.available}
                                        className={`p-4 rounded-lg border-2 transition-all ${!slot.available
                                                ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                                                : selectedSlot?.id === slot.id
                                                    ? 'bg-primary-50 border-primary-600 text-primary-700 shadow-md'
                                                    : 'bg-white border-gray-300 text-gray-700 hover:border-primary-400 hover:bg-primary-50'
                                            }`}
                                    >
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold">{slot.time}</span>
                                        </div>
                                        {!slot.available && (
                                            <span className="text-xs mt-1 block">Unavailable</span>
                                        )}
                                        {selectedSlot?.id === slot.id && (
                                            <div className="mt-2 flex justify-center">
                                                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Selected Slot Summary */}
                {selectedSlot && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <p className="text-green-800 font-semibold mb-1">Selected Slot:</p>
                        <p className="text-green-700">
                            {formatDate(selectedSlot.date)} at {selectedSlot.time}
                        </p>
                    </div>
                )}

                {/* Confirm Button */}
                <div className="text-center">
                    <button
                        onClick={handleConfirm}
                        disabled={!selectedSlot}
                        className={`px-12 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg ${selectedSlot
                                ? 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-[1.02] active:scale-[0.98]'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Confirm Slot
                    </button>
                </div>

                {/* Info Box */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        <span className="font-semibold">Note:</span> Please select a slot that works best for you. You'll receive a confirmation once your booking is complete.
                    </p>
                </div>
            </div>
        </div>
    );
}
