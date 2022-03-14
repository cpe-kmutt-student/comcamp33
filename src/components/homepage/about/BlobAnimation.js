import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BlobAnimation = ({ initx, inity, children, speed }) => {
  const [x, setX] = useState(0);
  const [speedX, setSpeedX] = useState(speed);
  const [y, setY] = useState(0);
  const [speedY, setSpeedY] = useState(speed);

  useEffect(function onFirstMount() {
    setX(initx ?? Math.random() * (window.innerWidth - 200));
    setY(inity ?? Math.random() * (window.innerHeight * 0.93 - 200));
  }, []);


    const ORIGSPEEDX = 10;
    const ORIGSPEEDY = 10;
    return (<motion.div
        className="w-64 h-64"
        animate={{ x: x, y: y }}
        transition={{
            ease: "linear"
            //duration: 0.001
            // repeat: Infinity
        }}
        onAnimationComplete={() => {
            setX(x + speedX);
            setY(y + speedY);
            if (x <= -50) {
                setSpeedX(ORIGSPEEDX);
            }
            if (x >= window.innerWidth - 100) {
                setSpeedX(-ORIGSPEEDX);
            }


        if (y <= 0) {
          setSpeedY(ORIGSPEEDY);
        }

        if (y >= window.innerHeight * 0.93) {
          setSpeedY(-ORIGSPEEDY);
        }
      }}
    >
      {children}
    </motion.div>
  );
};
