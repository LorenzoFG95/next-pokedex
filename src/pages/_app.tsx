import { useRouter } from "next/router";
import { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [input, setImput] = useState("");

  const onHandleImput = (e) => {
    setImput(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokemon/${input}`);
  };

  return (
    <div>
      <nav>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Cerca un pokemon"
            value={input}
            onChange={onHandleImput}
          />
          <input type="submit" />
        </form>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
