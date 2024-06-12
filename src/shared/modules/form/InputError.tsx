import React from "react";
import { motion } from "framer-motion";
import Badge from "../badge/Badge";

interface InputErrorPropsType {
  message: string;
}

const InputError: React.FC<InputErrorPropsType> = ({ message }) => {
  return (
    <motion.p {..._framer_error}>
      <Badge text={message} color="red" alert />
    </motion.p>
  );
};

const _framer_error: ErrorType = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default InputError;

////////////////////////////////////////////////

interface OpacityAndYType {
  opacity: number;
  y: number;
}

interface DurationType {
  duration: number;
}

interface ErrorType {
  initial: OpacityAndYType;
  animate: OpacityAndYType;
  exit: OpacityAndYType;
  transition: DurationType;
}
