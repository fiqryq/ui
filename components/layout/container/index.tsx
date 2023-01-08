import React from "react"
import { cva, type VariantProps } from "class-variance-authority";

const containerStyles = cva("mx-auto",
    {
        variants: {
            variant: {
                wrapper: "max-w-7xl sm:px-6 lg:px-8",
                content: "px-4 sm:px-6 lg:px-8"
            },
        },
        compoundVariants: [
            {
                variant: ["wrapper", "content"],
            },
        ],
        defaultVariants: {
            variant: "wrapper",
        },
    });

type ContainerProps = VariantProps<typeof containerStyles> & {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({
    children,
    variant,
    className
}) => {
    return <div className={containerStyles({ variant, className })}>{children}</div>
}

export default Container