import Image from "next/image"
import { BlobAnimation } from "./BlobAnimation"

export const BGAnimation = () => {
    return (
        <>
            <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden">
                <BlobAnimation inity={0} speed={10}><Image src="/assets/RedFloat.png" alt="blob" layout="fill" objectFit="contain" /></BlobAnimation>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden">
                <BlobAnimation initx={0} inity={0} speed={12}><Image src="/assets/BlueFloat.png" alt="blob" layout="fill" objectFit="contain" /></BlobAnimation>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden">
                <BlobAnimation speed={8}><Image src="/assets/PurpleFloat.png" alt="blob" layout="fill" objectFit="contain" /></BlobAnimation>
            </div>
        </>
    )
}
