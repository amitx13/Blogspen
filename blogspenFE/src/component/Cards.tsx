import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";

interface TrendingCardProps {
    title: string;
    buttonText: string;
    isDivider?: boolean;
    children?: React.ReactNode;
    className?: string; 
}

export const Cards = ({ title, buttonText, children, isDivider = true, className }: TrendingCardProps) => {
    return (
        <Card className={`max-w-[380px] ${className}`} >
            {title && <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">{title}</p>
                </div>
            </CardHeader>}
            {children && (
                <CardBody className="font-medium">
                    {children}
                </CardBody>
            )}
            {isDivider && <Divider />}
            {buttonText && <CardFooter className="flex justify-center">
                <Button color="default" size="md" radius="full" variant="solid" className="w-3/4">
                    {buttonText}
                </Button>
            </CardFooter>}
        </Card>
    );
}