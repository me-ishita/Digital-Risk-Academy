import { X } from "lucide-react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                onClick={onClose}
            />

            {/* MODAL BOX */}
            <div className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8 animate-fadeIn">

                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:text-white"
                >
                    <X size={20} />
                </button>

                {/* TITLE */}
                <h2 className="text-2xl font-semibold text-white mb-6">
                    Get Your Brochure
                </h2>

                {/* FORM */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <input type="text" placeholder="First Name"
                        className="input-glass" />

                    <input type="text" placeholder="Last Name"
                        className="input-glass" />

                    <input type="email" placeholder="Email"
                        className="input-glass col-span-1 sm:col-span-1" />

                    <input type="tel" placeholder="Phone"
                        className="input-glass" />

                    <select className="input-glass text-white bg-white/10">
                        <option className="text-black bg-white">Total Work Experience</option>
                        <option className="text-black bg-white">0-1 years</option>
                        <option className="text-black bg-white">2-5 years</option>
                        <option className="text-black bg-white">5+ years</option>
                    </select>

                    <input type="text" placeholder="Organisation/University"
                        className="input-glass" />


                    {/* DISCLAIMER */}
                    <p className="text-xs text-white/70 col-span-1 sm:col-span-2">
                        By clicking below, you agree to receive communications via Email/Call/WhatsApp.
                    </p>

                    {/* DOWNLOAD BUTTON */}
                    <a
                        href="/brochure/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-1 sm:col-span-2 mt-2 text-center py-3.5 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-700 text-white hover:shadow-xl hover:shadow-blue-500/30 transition active:scale-[0.98]"
                    >
                        DOWNLOAD BROCHURE
                    </a>

                </form>
            </div>
        </div>
    );
}