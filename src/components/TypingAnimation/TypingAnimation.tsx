import { useEffect, useState } from 'react';

const phrases = [
  'a voice',
  'an ownership stake',
  'an opportunity to profit',
  // ...more phrases
];

const TypingAnimation: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: number;

    const handleTyping = () => {
      const currentPhraseIndex = loopNum % phrases.length;
      const fullPhrase = phrases[currentPhraseIndex];

      setText(isDeleting 
        ? fullPhrase.substring(0, text.length - 1) 
        : fullPhrase.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullPhrase) {
        // Pause at end of typing before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(200);
        }, 1500);
      } else if (isDeleting && text === '') {
        // Finished deleting, go to next phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        // Continue typing/deleting
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <span className="typing-container text-white text-3xl font-bold">
          {text}
          <span className="cursor">|</span> {/* This is your cursor */}
        </span>
      );
};

export default TypingAnimation;
