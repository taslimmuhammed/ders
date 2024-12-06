import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Github, Twitter } from "lucide-react"
import ConnectWallet from "./ConnectWallet"

const LandingPage = ({address}) => {
    const features = [
        {
            title: "Built with Latest Tech",
            description: "Powered by Next.js 14, TypeScript, and Tailwind CSS for a modern development experience."
        },
        {
            title: "Beautiful Components",
            description: "Leveraging shadcn/ui for consistent, accessible, and customizable components."
        },
        {
            title: "Responsive Design",
            description: "Fully responsive layout that works seamlessly across all devices and screen sizes."
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        Build Beautiful Web Apps Faster
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Start your next project with our modern tech stack and beautiful components.
                        Ship products faster with less hassle.
                    </p>
                    
                        {address==''?<ConnectWallet/>:
                        <div className="flex gap-4 justify-center">
                        <Button size="lg" className="gap-2">
                            Validate Contracts<ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2">
                            Review Contracts <Github className="w-4 h-4" />
                            </Button></div>}
                    
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-lg">
                            <CardContent className="pt-6">
                                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Join thousands of developers building modern web applications.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg" className="gap-2">
                            Sign Up Now <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        © 2024 Your Company. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon">
                            <Twitter className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Github className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage