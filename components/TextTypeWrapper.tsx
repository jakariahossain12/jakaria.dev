"use client";

import TextType from "./TextType";

 // or wherever your TextType is

const TextTypeWrapper = () => {
  return (
    <TextType
      text={["Full Stack Web Developer!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      reverseMode={false}
      variableSpeed={false}
      onSentenceComplete={() => {}}
    />
  );
};

export default TextTypeWrapper;