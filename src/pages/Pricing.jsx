/* eslint-disable react/prop-types */

import { Check } from 'lucide-react'

function PricingCard({ title, price, features }) {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-4xl font-extrabold text-indigo-600 mb-6">${price}<span className="text-base font-normal text-gray-600">/month</span></p>
        <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
            <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>{feature}</span>
            </li>
            ))}
        </ul>
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Choose Plan
        </button>
        </div>
    )
}

export default function Pricing() {
    const plans = [
        {
        title: 'Basic',
        price: 9.99,
        features: ['100 images/month', 'Basic API access', 'Email support'],
        },
        {
        title: 'Pro',
        price: 19.99,
        features: ['500 images/month', 'Advanced API access', 'Priority email support', 'Bulk processing'],
        },
        {
        title: 'Enterprise',
        price: 49.99,
        features: ['Unlimited images', 'Full API access', '24/7 phone support', 'Custom integration'],
        },
    ]

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Choose Your Plan</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
            Select the perfect plan for your background removal needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
            ))}
        </div>
        </main>
    )
}