import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export const BookMarkCard = () => {
    return (
        <Card className="max-w-[380px] " >
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">Bookmarks</p>
                </div>
            </CardHeader>
            <CardBody className="font-medium">
                <p>Make beautiful websites regardless of your design experience.</p>
                <p className="text-sm text-gray-500">by John Doe</p>
            </CardBody>
            <CardBody className="font-medium">
                <p >Make beautiful websites regardless of your design experience.</p>
                <p className="text-sm text-gray-500">by John Doe</p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-center">
                <Button color="default" size="md" radius="full" variant="solid" className="w-3/4">
                    See all bookmarks
                </Button>
            </CardFooter>
        </Card>
    );
}