import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Bighex() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      {theme === "light" ? (
        <img
          className="w-full"
          src="https://user-images.githubusercontent.com/64256342/152588880-e94c9c2f-b16b-4a29-859e-503b6232709c.png"
          alt="bg-hex-light"
        />
      ) : (
        <div>
          <img
            className="w-full"
            src="https://user-images.githubusercontent.com/64256342/152582867-0af6c439-c88d-4faa-aa57-08ba60e39e92.png"
            alt="bg-hex"
          />
        </div>
      )}
    </div>
  );
}

export default Bighex;
