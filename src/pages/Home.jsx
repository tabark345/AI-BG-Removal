import  { useState } from 'react'
import { Upload, Zap, Shield, RefreshCw , ImageDown} from 'lucide-react'

const API_KEY = '9eGQwzq93qzUSoWtGs1kyDxt' // Replace with your actual API key

    export default function Home() {
    const [file, setFile] = useState(null)
    const [processedImage, setProcessedImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
        setFile(URL.createObjectURL(selectedFile))
        setProcessedImage(null)
        }
    }

    const removeBackground = async () => {
        setLoading(true)
        const formData = new FormData()
        formData.append('image_file', await fetch(file).then(r => r.blob()), 'image.jpg')

        try {
        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
            'X-Api-Key': API_KEY,
            },
            body: formData,
        })

        if (response.ok) {
            const blob = await response.blob()
            setProcessedImage(URL.createObjectURL(blob))
        } else {
            console.error('Error removing background')
        }
        } catch (error) {
        console.error('Error:', error)
        }

        setLoading(false)
    }

    const downloadImage = () => {
        const link = document.createElement('a')
        link.href = processedImage
        link.download = 'processed_image.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Remove Image Backgrounds with AI
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
            Upload your image and let our advanced AI remove the background in seconds.
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            {processedImage ? (
                <div className="relative">
                <img src={processedImage} alt="Processed image" className="w-full h-64 object-contain rounded-lg" />
                <div className="mt-4 flex justify-between">
                    <button
                    onClick={() => {
                        setFile(null)
                        setProcessedImage(null)
                    }}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                    Remove Image
                    </button>
                    <button
                    onClick={downloadImage}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    >
                    <ImageDown className="w-5 h-5 mr-2" />
                    Download Image
                    </button>
                </div>
                </div>
            ) : file ? (
                <div className="relative">
                <img src={file} alt="Uploaded image" className="w-full h-64 object-cover rounded-lg" />
                <button
                    onClick={removeBackground}
                    className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Remove Background'}
                </button>
                </div>
            ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </label>
            )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
                <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Get results in seconds, not minutes.</p>
            </div>
            <div className="text-center">
                <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
                <p className="text-gray-600">Your images are processed securely and then deleted.</p>
            </div>
            <div className="text-center">
                <RefreshCw className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlimited Use</h3>
                <p className="text-gray-600">Remove backgrounds from as many images as you need.</p>
            </div>
            </div>
        </div>
        </main>
    )
}