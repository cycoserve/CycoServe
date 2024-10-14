import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

function StayUpdated() {
    return (
        <>
            {/* Stay Updated Section at the Bottom */}
            <div className="mt-8 pt-8 border-t border-zinc-800">
                <div className="text-start">
                <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                    <form className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                        />
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Mail className="h-4 w-4 mr-2" />
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StayUpdated