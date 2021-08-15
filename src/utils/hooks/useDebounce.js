import React, { useState } from "react";

export default function useDebounce() {
  const [typingtimeout, settypingtimeout] = useState("");
  function Debounce(funct, wait) {
    clearTimeout(typingtimeout);
    const timeout = setTimeout(() => funct(), wait);
    settypingtimeout(timeout);
  }
  return Debounce;
}
