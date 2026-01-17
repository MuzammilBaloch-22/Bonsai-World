import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ message, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-elevated"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium">{message}</p>
          <button
            onClick={onClose}
            className="ml-2 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
