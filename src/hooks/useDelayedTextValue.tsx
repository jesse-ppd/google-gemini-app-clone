import { useEffect, useState } from "react";

export function useDelayedTextValue(value: string) {
  const [delayedValue, setDelayedValue] = useState("");

  useEffect(() => {
    async function startDelayAnimation() {
      if (delayedValue.length > 0) setDelayedValue("");
      if (value) {
        const allCharacters = value.split("");

        for await (const character of allCharacters) {
          const newCharacter = await new Promise<string>((resolve, reject) => {
            setTimeout(() => {
              resolve(character);
            }, 5);
          });

          setDelayedValue((prevValue) => (prevValue += newCharacter));
        }
      }
    }

    startDelayAnimation();
  }, [value]);

  return delayedValue;
}
