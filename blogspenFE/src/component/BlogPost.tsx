import { Button } from "@nextui-org/react"
import { NotRecommend } from "./icons/NotRecommend"
import { HeartIcon } from "./icons/HeartIcon"
import { Save } from "./icons/Save"
import { ChatIcon } from "./icons/ChatIcon"

export const BlogPost = () => {
    return (
        <div className="flex max-w-2xl flex-col items-center rounded-2xl border md:flex-row mt-8 mb-8">
            <div className="h-full w-full md:h-[200px] md:w-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>
            <div>
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        About Macbook
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Macbook
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Apple
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Laptop
                        </span>
                    </div>
                    <div className="mt-3 gap-1 flex items-center justify-between space-x-2">
                        <div className="flex items-center space-x-2">
                            <img
                                className="inline-block h-8 w-8 rounded-full"
                                src="https://nextui.org/avatars/avatar-1.png"
                                alt="Dan_Abromov"
                            />
                            <span className="flex flex-col">
                                <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
                                <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
                            </span>
                        </div>
                        <div className="pr-3">
                        <Button isIconOnly color="danger" aria-label="Like" size="sm" variant="ghost" className="border-none" >
                            <HeartIcon />
                        </Button>
                        <Button isIconOnly color="warning" aria-label="save" size="sm" variant="ghost" className="border-none" >
                            <NotRecommend />
                        </Button>
                        <Button isIconOnly color="default" aria-label="save" size="sm" variant="ghost" className="border-none" >
                            <ChatIcon />
                        </Button>
                        <Button isIconOnly color="default" aria-label="Like" size="sm" variant="ghost" className="border-none" >
                            <Save />
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
