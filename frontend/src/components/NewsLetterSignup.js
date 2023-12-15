import { useFetcher } from "react-router-dom";
import classes from "./NewsLetterSignup.module.css";
import { useEffect, useRef } from "react";

function NewsletterSignup() {
  const formRef = useRef(null);
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }

    formRef.current.reset();
  }, [data, state]);

  return (
    <fetcher.Form
      ref={formRef}
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
