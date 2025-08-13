import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Template {
    id: number;
    name: string;
    category: string;
    preview_image: string;
    description: string;
}

interface Props {
    templates: {
        data: Template[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        meta: {
            current_page: number;
            total: number;
            per_page: number;
        };
    };
    auth?: {
        user?: {
            name: string;
            email: string;
        };
    };
    [key: string]: unknown;
}

export default function TemplatesPage({ templates, auth }: Props) {
    const getCategoryEmoji = (category: string) => {
        switch (category) {
            case 'birthday': return '🎂';
            case 'wedding': return '💒';
            case 'graduation': return '🎓';
            case 'anniversary': return '💕';
            case 'general': return '✨';
            default: return '🎨';
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'birthday': return 'bg-pink-100 text-pink-800';
            case 'wedding': return 'bg-purple-100 text-purple-800';
            case 'graduation': return 'bg-green-100 text-green-800';
            case 'anniversary': return 'bg-red-100 text-red-800';
            case 'general': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <>
            <Head title="Beautiful Templates - Boardify" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Navigation */}
                <nav className="bg-white/80 backdrop-blur-md border-b border-blue-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-blue-900">Boardify</span>
                            </Link>
                            
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                                    Home
                                </Link>
                                <Link href="/events" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                                    Events
                                </Link>
                                <span className="text-blue-900 font-medium">Templates</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                {auth?.user ? (
                                    <div className="flex items-center space-x-3">
                                        <span className="text-blue-700 font-medium">Hi, {auth.user.name}!</span>
                                        <Link href="/dashboard">
                                            <Button className="bg-blue-600 hover:bg-blue-700">Dashboard</Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href="/register">
                                            <Button className="bg-blue-600 hover:bg-blue-700">
                                                Get Started
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                            🎨 Beautiful Templates
                        </h1>
                        <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                            Choose from our collection of stunning greeting card designs for every occasion
                        </p>
                    </div>
                </section>

                {/* Templates Grid */}
                <section className="pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {templates.data.length === 0 ? (
                            <div className="text-center py-16">
                                <Star className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">No Templates Available</h3>
                                <p className="text-blue-700 mb-8">
                                    Templates are being prepared. Check back soon!
                                </p>
                                <Link href="/">
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    {templates.data.map((template) => (
                                        <div key={template.id} className="bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            {/* Template Preview */}
                                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                                {/* Sample design based on category */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    {getCategoryEmoji(template.category)}
                                                    <Star className="w-8 h-8 text-blue-600 ml-2" />
                                                </div>
                                                
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                    <div className="text-white text-center">
                                                        <Star className="w-6 h-6 mx-auto mb-2" />
                                                        <p className="text-sm font-medium">Preview</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Template Info */}
                                            <div className="space-y-2">
                                                <h3 className="font-semibold text-blue-900 text-sm leading-tight line-clamp-2">
                                                    {template.name}
                                                </h3>
                                                
                                                <Badge variant="secondary" className={`text-xs ${getCategoryColor(template.category)} border-0`}>
                                                    {getCategoryEmoji(template.category)} {template.category}
                                                </Badge>
                                                
                                                {template.description && (
                                                    <p className="text-xs text-blue-600 line-clamp-2">
                                                        {template.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {templates.meta.total > templates.meta.per_page && (
                                    <div className="flex justify-center mt-12">
                                        <div className="flex items-center space-x-2">
                                            {templates.links.map((link, index) => (
                                                link.url ? (
                                                    <Link
                                                        key={index}
                                                        href={link.url}
                                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                                            link.active
                                                                ? 'bg-blue-600 text-white'
                                                                : 'bg-white/80 text-blue-700 hover:bg-blue-50 border border-blue-200'
                                                        }`}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                ) : (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 rounded-md text-sm font-medium text-gray-400 bg-white/50"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* Categories Info */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">Template Categories</h2>
                            <p className="text-blue-700">Perfect designs for every type of event</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { category: 'birthday', name: 'Birthday', description: 'Celebrate special days' },
                                { category: 'wedding', name: 'Wedding', description: 'Love and union' },
                                { category: 'graduation', name: 'Graduation', description: 'Academic achievements' },
                                { category: 'anniversary', name: 'Anniversary', description: 'Milestones and memories' },
                                { category: 'general', name: 'General', description: 'All-purpose designs' },
                            ].map((cat) => (
                                <div key={cat.category} className="text-center">
                                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                                        <span className="text-2xl">{getCategoryEmoji(cat.category)}</span>
                                    </div>
                                    <h3 className="font-semibold text-blue-900 mb-1">{cat.name}</h3>
                                    <p className="text-sm text-blue-600">{cat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Create Your Greeting? 🌟
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Browse active events and start sending personalized greetings with these beautiful templates!
                        </p>
                        
                        <Link href="/events">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                                Browse Events
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-200 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Heart className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-blue-900">Boardify</span>
                        </div>
                        <p className="text-blue-600 mb-4">Making every event more memorable with digital greetings</p>
                        <div className="flex justify-center space-x-6 text-sm">
                            <Link href="/" className="text-blue-700 hover:text-blue-900">Home</Link>
                            <Link href="/events" className="text-blue-700 hover:text-blue-900">Events</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}