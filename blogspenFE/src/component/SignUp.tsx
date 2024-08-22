import { Input, Button, useDisclosure, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { SignIn } from "./SignIn";
import { useState } from "react";
import { SignupSchema } from "@amitx13/blogspen-zod-validator";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function SignUp() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [popoverVisible, setPopoverVisible] = useState(false);
    const [form, setForm] = useState<SignupSchema>({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async() => {
        if (form.email && form.username && form.password) {
            setPopoverVisible(false);
            try{
                const res = await axios.post(`${BACKEND_URL}/api/v1/signup`,form)
                console.log("res",res)

            }catch{
                //alert user
            }
        } else {
            setPopoverVisible(true);
        }
    };

    return (
        <div className="h-screen ">
            <div className="w-full flex sticky top-0 mt-28">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md p-6">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Sign up</h2>
                    <p className="mt-2 text-base mb-2">
                        Already have an account?{' '}
                        <a
                            href="#"
                            title=""
                            className="font-medium transition-all duration-200 hover:underline"
                        >
                            <Button variant="light" size="sm" onPress={onOpen} color="primary" className="text-lg text-left">Sign In</Button>
                            <SignIn isOpen={isOpen} onOpenChange={onOpenChange} />
                        </a>
                    </p>
                    <form className="flex flex-col gap-4">
                        <Input
                            isRequired
                            label="Username"
                            name="username"
                            placeholder="Enter your Username"
                            onChange={handleChange}
                            value={form.username}
                        />
                        <Input
                            isRequired
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            onChange={handleChange}
                            value={form.email}
                        />
                        <Input
                            isRequired
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            onChange={handleChange}
                            value={form.password}
                        />
                        <div className="flex gap-2 justify-end">
                            <Popover placement="bottom" showArrow={true} isOpen={popoverVisible} color={"warning"} isDismissable={true} onClose={() => setPopoverVisible(false)}>
                                <PopoverTrigger>
                                    <div className="w-full">
                                        <Button fullWidth color="primary" onPress={handleSubmit}>
                                            Sign up
                                        </Button>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent >
                                    <div className="px-1 py-2">
                                        <div className="text-small font-bold">Incomplete Form</div>
                                        <div className="text-tiny">Please fill out all fields before submitting.</div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </form>
                    <div className="mt-3 flex">
                        <Button
                            className="relative inline-flex w-full items-center justify-center rounded-md border px-3.5 py-2.5 font-semibold transition-all duration-200 focus:outline-none"
                        >
                            <span className="mr-2 inline-block">
                                <svg
                                    className="h-6 w-6 text-rose-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                </svg>
                            </span>
                            Google
                        </Button>
                        <Button
                            className="relative inline-flex w-full items-center justify-center rounded-md border px-3.5 py-2.5 font-semibold transition-all duration-200 focus:outline-none"
                        >
                            <span className="mr-2 inline-block">
                                <svg
                                    aria-hidden="true"
                                    className="octicon octicon-mark-github"
                                    height="24" version="1.1" viewBox="0 0 16 16"
                                    width="24">
                                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </span>
                            Github
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
