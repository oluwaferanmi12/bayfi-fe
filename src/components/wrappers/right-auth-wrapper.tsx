import { Text } from "@/components/texts/text";
import appleBlackCard from "@/assets/svg/authAppleCard.svg";
import appleGiftCardBlack from "@/assets/svg/appleGiftCardBlack.svg";
import authDstvSub from "@/assets/svg/authDstvSub.svg";
import authBitcoin from "@/assets/svg/authBitcoin.svg";
import authEthereum from "@/assets/svg/authEthereum.svg";
import { motion } from "framer-motion";
import Image from "next/image";




export const AnimatedAuthSide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="bg-bayfi-black-500 h-full min-h-full w-full authDarkBackground">
        <div className="w-[60%] px-8 mb-12 pt-12">
          <Text
            type="header-white-32"
            value="Trade giftcards, cryptocurrency "
          />
          <Text type="header-dark-light-32" value="app " />
          <Text type="header-white-32" value="pay bills" />
          <Text type="header-dark-light-32" value="-all in one app!" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Image src={appleBlackCard} alt="apple-black-card" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-end">
            <Image src={appleGiftCardBlack} alt="" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image src={authDstvSub} alt="apple-black-card" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-end">
            <Image src={authBitcoin} alt="" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image src={authEthereum} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
