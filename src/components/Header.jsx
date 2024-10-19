import { Link } from 'react-router-dom'
import { Image } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <Image className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BG Remover AI</span>
            </div>
            <nav>
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            </ul>
            </nav>
        </div>
        </header>
    )
}