const { default: Image } = require("next/image");

const First = () => (
    <>
        <div className="absolute h-full w-screen top-0 right-0">
            <Image src="/assets/first/radiant.svg" quality={100} layout="fill" objectFit="contain" alt="light" />
        </div>
        <div className="h-[60vh] relative mx-5">
            <Image src="/assets/logo.png" quality={100} layout="fill" objectFit="contain" alt="com camp logo" />
        </div>
        <div className="absolute bottom-0 right-0 w-[100%] md:h-[35vh] h-[40vh]">
            <Image src="/assets/first/town.png"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="background town"
            />
        </div>
    </>
)

export default First