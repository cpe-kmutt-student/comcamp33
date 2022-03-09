import { BlobAnimation } from "./BlobAnimation"
import { BlueBlob } from "./Blobs/BlueBlob"
import { PinkBlob } from "./Blobs/PinkBlob"
import { PurpleBlob } from "./Blobs/PurpleBlob"

export const BGAnimation = () => {
    return (
        <>
            <div className="absolute top-0 right-0 w-full h-full z-10">
                <BlobAnimation inity={0} speed={10}><PinkBlob /></BlobAnimation>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-10">
                <BlobAnimation initx={0} inity={0} speed={12}><BlueBlob /></BlobAnimation>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-10">
                <BlobAnimation speed={8}><PurpleBlob /></BlobAnimation>
            </div>
        </>
    )
}