import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { MailIcon } from "./icons/MailIcon";
import { LockIcon } from "./icons/LockIcon";
import { SigninSchema } from "@amitx13/blogspen-zod-validator";
import { useState } from "react";

interface SignInProps {
  isOpen: boolean
  onOpenChange: (val: boolean) => void
}

export const SignIn = ({ isOpen, onOpenChange }: SignInProps) => {

  const [popoverVisible, setPopoverVisible] = useState(false);
  const [form, setForm] = useState<SigninSchema>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {
    if (form.email && form.password) {
      console.log("API call with form data:", form);
      setPopoverVisible(false);
    } else {
      setPopoverVisible(true);
    }
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="2xl"
        shadow="lg"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  onChange={handleChange}
                  value={form.email}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handleChange}
                  value={form.password}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Popover placement="right" showArrow={true} isOpen={popoverVisible} color={"warning"} isDismissable={true} onClose={() => setPopoverVisible(false)}>
                  <PopoverTrigger>
                    <div>
                      <Button color="primary" onPress={handleSubmit}>
                        Sign in
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
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
