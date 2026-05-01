import { X } from "lucide-react";
import { useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: Props) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        org: ""
    });

    const [errors, setErrors] = useState<any>({});

    if (!isOpen) return null;

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   const validate = () => {
    let newErrors: any = {};

    // Required checks
    if (!formData.firstName) newErrors.firstName = "This field is required";
    if (!formData.lastName) newErrors.lastName = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.phone) newErrors.phone = "This field is required";
    if (!formData.experience || formData.experience === "Total Work Experience")
        newErrors.experience = "This field is required";
    if (!formData.org) newErrors.org = "This field is required";

    // ✅ Gmail validation
    if (formData.email && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
        newErrors.email = "Please enter a valid Gmail address";
    }

    // ✅ Phone validation (10 digits only)
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

    const handleDownload = (e: any) => {
        e.preventDefault();

        if (!validate()) return;

        // proceed download
        window.open("/brochure/index.html", "_blank");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                onClick={onClose}
            />

            {/* MODAL BOX */}
            <div className="relative w-full max-w-2xl rounded-2xl 
bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 
backdrop-blur-2xl border border-white/10 
shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
p-6 sm:p-8 animate-fadeIn text-white">

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

                    <div>
                        <input type="text" name="firstName" placeholder="First Name"
                            onChange={handleChange}
                            className="input-glass" />
                        {errors.firstName && <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                        <input type="text" name="lastName" placeholder="Last Name"
                            onChange={handleChange}
                            className="input-glass" />
                        {errors.lastName && <p className="text-xs text-red-400 mt-1">{errors.lastName}</p>}
                    </div>

                    <div>
                        <input type="email" name="email" placeholder="Email"
                            onChange={handleChange}
                            className="input-glass" />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <input type="tel" name="phone" placeholder="Phone"
                            onChange={handleChange}
                            className="input-glass" />
                        {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <select
                            name="experience"
                            onChange={handleChange}
                            className="input-glass text-white bg-white/10"
                        >
                            <option className="text-black bg-white">Total Work Experience</option>
                            <option className="text-black bg-white">0-1 years</option>
                            <option className="text-black bg-white">2-5 years</option>
                            <option className="text-black bg-white">5+ years</option>
                        </select>
                        {errors.experience && <p className="text-xs text-red-400 mt-1">{errors.experience}</p>}
                    </div>

                    <div>
                        <input type="text" name="org" placeholder="Organisation/University"
                            onChange={handleChange}
                            className="input-glass" />
                        {errors.org && <p className="text-xs text-red-400 mt-1">{errors.org}</p>}
                    </div>

                    {/* DISCLAIMER */}
                    <p className="text-xs text-white/70 col-span-1 sm:col-span-2">
                        By clicking below, you agree to receive communications via Email/Call/WhatsApp.
                    </p>

                    {/* DOWNLOAD BUTTON */}
                    <button
                        onClick={handleDownload}
                        className="col-span-1 sm:col-span-2 mt-2 text-center py-3.5 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-700 text-white hover:shadow-xl hover:shadow-blue-500/30 transition active:scale-[0.98]"
                    >
                        DOWNLOAD BROCHURE
                    </button>

                </form>
            </div>
        </div>
    );
}