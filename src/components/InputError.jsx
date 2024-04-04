import React from "react";
import { motion } from "framer-motion";
import Badge from "../modules/components/badge/Badge";

export default function InputError({ message }) {
  return (
    <motion.p {..._framer_error}>
      <Badge text={message} color="red" alert />
    </motion.p>
  );
}

const _framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
