'use client';

import { useRouter } from 'next/navigation';

export default function PredefinedDiet() {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Predefined Diet Plan</h2>

                <div className="prose max-w-none">
                    {/* Diet Content */}
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Balanced Nutrition Plan</h3>
                        <p className="text-gray-600 mb-4">
                            This expertly crafted diet plan is designed to provide balanced nutrition for general health and wellness.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                            <p className="text-green-800 font-semibold">
                                ✓ Balanced macronutrients
                                <br />
                                ✓ Rich in vitamins and minerals
                                <br />
                                ✓ Suitable for most adults
                            </p>
                        </div>

                        {/* Meal Plan */}
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm mr-3">Breakfast</span>
                                    Morning Fuel
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>2 whole eggs (boiled or scrambled)</li>
                                    <li>2 slices whole wheat toast</li>
                                    <li>1 cup fresh fruit salad</li>
                                    <li>1 glass milk or plant-based alternative</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="bg-orange-400 text-orange-900 px-3 py-1 rounded-full text-sm mr-3">Lunch</span>
                                    Midday Energy
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>1 cup brown rice or quinoa</li>
                                    <li>150g grilled chicken or tofu</li>
                                    <li>2 cups mixed vegetables (steamed or roasted)</li>
                                    <li>1 small bowl salad with olive oil dressing</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-sm mr-3">Snack</span>
                                    Afternoon Boost
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>1 handful mixed nuts</li>
                                    <li>1 apple or banana</li>
                                    <li>Green tea or herbal tea</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="bg-purple-400 text-purple-900 px-3 py-1 rounded-full text-sm mr-3">Dinner</span>
                                    Evening Nourishment
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>150g grilled fish or lentils</li>
                                    <li>1 cup roasted vegetables</li>
                                    <li>1 small sweet potato</li>
                                    <li>1 bowl vegetable soup</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Cooking Guidance */}
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Guidance</h3>

                        <div className="bg-blue-50 rounded-lg p-6 mb-4">
                            <h4 className="font-semibold text-blue-900 mb-2">Preparation Tips:</h4>
                            <ul className="list-disc list-inside text-blue-800 space-y-1">
                                <li>Meal prep on Sundays for the week ahead</li>
                                <li>Use minimal oil - prefer grilling, baking, or steaming</li>
                                <li>Season with herbs and spices instead of salt</li>
                                <li>Keep vegetables colorful for maximum nutrients</li>
                            </ul>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-6">
                            <h4 className="font-semibold text-amber-900 mb-2">Important Notes:</h4>
                            <ul className="list-disc list-inside text-amber-800 space-y-1">
                                <li>Drink 8-10 glasses of water daily</li>
                                <li>Adjust portions based on your activity level</li>
                                <li>Consult a doctor if you have specific health conditions</li>
                                <li>This is a general plan - personalized plans available through consultation</li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Done Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push('/')}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
