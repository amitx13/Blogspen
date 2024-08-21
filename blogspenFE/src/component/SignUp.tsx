// import { Button, useDisclosure } from "@nextui-org/react";
// import { SignIn } from "./SignIn"

// export function SignUp() {
//     const {isOpen, onOpen, onOpenChange} = useDisclosure();

//   return (
//     <section>
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//           <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//             <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Sign up</h2>
//             <p className="mt-2 text-base ">
//               Already have an account?{' '}
//               <a
//                 href="#"
//                 title=""
//                 className="font-medium transition-all duration-200 hover:underline"
//               >
//                 <Button onPress={onOpen} color="primary">Sign In</Button>
//                 <SignIn isOpen={isOpen} onOpenChange={onOpenChange}/>
//               </a>
//             </p>
//             <form action="#" method="POST" className="mt-8">
//               <div className="space-y-5">
//                 <div>
//                   <label htmlFor="name" className="text-base font-medium ">
//                     {' '}
//                     Full Name{' '}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="text"
//                       placeholder="Full Name"
//                       id="name"
//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="text-base font-medium ">
//                     {' '}
//                     Email address{' '}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="email"
//                       placeholder="Email"
//                       id="email"
//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <label htmlFor="password" className="text-base font-medium ">
//                       {' '}
//                       Password{' '}
//                     </label>
//                   </div>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border  bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="password"
//                       placeholder="Password"
//                       id="password"
//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <button
//                     type="button"
//                     className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7"
//                   >
//                     Create Account 
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <div className="mt-3 space-y-3">
//               <button
//                 type="button"
//                 className="relative inline-flex w-full items-center justify-center rounded-md border  px-3.5 py-2.5 font-semibold  transition-all duration-200 focus:outline-none"
//               >
//                 <span className="mr-2 inline-block">
//                   <svg
//                     className="h-6 w-6 text-rose-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
//                   </svg>
//                 </span>
//                 Sign up with Google
//               </button>
//               <button
//                 type="button"
//                 className="relative inline-flex w-full items-center justify-center rounded-md border px-3.5 py-2.5 font-semibold transition-all duration-200 focus:outline-none"
//               >
//                 <span className="mr-2 inline-block">
//                   <svg
//                     className="h-6 w-6 text-[#2563EB]"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
//                   </svg>
//                 </span>
//                 Sign up with Facebook
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="h-full w-full">
//           <img
//             className="mx-auto h-full w-full rounded-md object-cover"
//             src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
//             alt=""
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, useDisclosure} from "@nextui-org/react";
import {Key} from '@react-types/shared';
import { SignIn } from "./SignIn";

export function SignUp() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selected, setSelected] = React.useState<Key>("login");

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="sign-up" title="Sign up">
            <p className="mt-2 text-base ">
              Already have an account?{' '}
               <a
                href="#"
                title=""
                className="font-medium transition-all duration-200 hover:underline"
              >
                <Button size="sm"   onPress={onOpen} color="primary">Sign In</Button>
                <SignIn isOpen={isOpen} onOpenChange={onOpenChange}/>
              </a>
            </p>
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
