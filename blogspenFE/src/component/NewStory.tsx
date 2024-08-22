import { Divider } from "@nextui-org/react";
import { useState } from "react";

export default function NewStory() {
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    return (
        <div className="h-full pl-10 pr-10 sm:pl-36 sm:pr-36 md:pr-48 md:pl-48 lg:pr-64 lg:pl-64 xl:pl-80 xl:pr-80 2xl:pl-96 2xl:pr-96">
            <div className="flex justify-center">
                <h1 className="text-3xl font-extralight mt-3 mr-2">Title</h1>
                <textarea
                    className="text-4xl outline-none w-full mt-3 resize-none !bg-inherit"
                    placeholder="Tell your story..."
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                />
            </div>
            <Divider orientation="horizontal" className="mt-3 mb-3" style={{ borderWidth: '2px', borderColor: 'rgba(0, 0, 0, .84)' }} />
            <div className="flex justify-center">
                <h1 className="text-xl font-extralight mt-3 mr-3">Content</h1>
                <textarea
                    className="text-xl outline-none w-full mt-3 resize-none h-screen !bg-inherit"
                    placeholder="Tell your story..."
                    value={contentValue}
                    onChange={(e) => setContentValue(e.target.value)}
                />
            </div>
        </div>
    );
}
