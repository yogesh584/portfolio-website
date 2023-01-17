import React, { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "50a62d3c-6807-43f0-8bf0-c7fc5f220149");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div className="relative min-h-screen font-poppins text-white pt-24 mb-32">
            <div className="absolute min-h-full min-w-full flex flex-col items-center justify-center">
                <div className="text-center flex flex-col items-center gap-5">
                    <h1 className="text-4xl tracking-wider">Get In Touch</h1>
                    <img
                        src="/portfolio-website/images/divider.webp"
                        alt="Divider_Image"
                        className="w-[76px]"
                    />
                </div>
                <div className="w-full md:max-w-[950px] sm:px-6 mt-16">
                    <span className="text-[#2f89fc] font-poppins tracking-wide">
                        {result}
                    </span>
                </div>
                <div className="flex w-full px-4 items-center flex-col gap-12 md:gap-0 md:flex-row md:max-w-[950px] justify-between mt-4 sm:px-6">
                    <div className="w-full md:w-1/2">
                        <form onSubmit={onSubmit}>
                            <div className="flex gap-8 mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="NAME *"
                                    className="bg-transparent border-b-[1px] border-b-[#ffffff80] w-1/2 text-white text-sm pb-2 outline-none tracking-wider placeholder:text-[#ffffff80] placeholder:font-bold placeholder:text-xs"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="bg-transparent border-b-[1px] border-b-[#ffffff80] w-1/2 text-white text-sm pb-2 outline-none tracking-wider placeholder:text-[#ffffff80] placeholder:font-bold placeholder:text-xs"
                                    placeholder="EMAIL *"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                className="bg-transparent border-b-[1px] border-b-[#ffffff80] w-full text-white text-sm pb-2 outline-none tracking-wider placeholder:text-[#ffffff80] placeholder:font-bold placeholder:text-xs mb-4 mt-4"
                                placeholder="SUBJECT *"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="WRITE YOUR MESSAGE... *"
                                className="bg-transparent border-b-[1px] h-40 border-b-[#ffffff80] w-full mb-6 mt-4 text-white text-sm pb-2 outline-none tracking-wider placeholder:text-[#ffffff80] placeholder:font-bold placeholder:text-xs"
                                required
                            ></textarea>
                            <button className="capitalize bg-[#1f1f1f] transition-all duration-300 rounded-md text-white border-[2px] border-[#1f1f1f] px-4 py-4 hover:bg-transparent">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="w-full md:w-auto flex flex-col">
                        <div className="flex flex-col mb-8">
                            <span className="text-[#ffffff80] text-sm font-bold tracking-wider mb-2">
                                EMAIL
                            </span>
                            <a
                                href="mailto:yjangid584@gmail.com"
                                className="tracking-wider transition-all duration-300 text-[#2f89fc] hover:text-white"
                            >
                                yjangid584@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-[#ffffff80] text-sm font-bold tracking-wider mb-2">
                                LINKEDIN
                            </span>
                            <a
                                href="https://www.linkedin.com/in/jangidYogesh/"
                                className="tracking-wider transition-all duration-300 text-[#2f89fc] hover:text-white"
                            >
                                Yogesh Jangid
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
