import Container from "./ui/Container";


const Contact = () => {
    return (
        <Container>
            <div className="mb-20 px-20">
                <div>
                    <h1 className="text-center mb-10 text-2xl font-semibold text-[#ff3115]">Contact Us</h1>
                </div>
                <div className="flex gap-6">
                    <div className="flex-1">
                        <label>
                            <input className="w-full border py-2 rounded-lg pl-3 mb-4 hover:border-[#ff3115]" placeholder="Full Name" type="text" name="" id="" />
                        </label>
                        <label>
                            <input className="w-full border py-2 rounded-lg pl-3 mb-4 hover:border-[#ff3115]" placeholder="Mobile Number" type="text" name="" id="" />
                        </label>
                        <label>
                            <input className="w-full border py-2 rounded-lg pl-3 hover:border-[#ff3115]" type="text" placeholder="Email ID" name="" id="" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="">
                            <textarea className="border w-full h-full rounded-lg pl-3 pt-2 hover:border-[#ff3115]" placeholder="Message" name="" id="" cols="" rows=""></textarea>
                        </label>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;