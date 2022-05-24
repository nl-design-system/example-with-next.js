import { useRouter } from "next/router";
import { useEffect } from "react";

export default function StepperForm() {
  const { push, pathname } = useRouter();

  // Hack to catch root without slug. Might be handled with custom routing, but will work till then
  useEffect(() => {
    push(`${pathname}/1`);
  }, [pathname, push]);

  return null;
}
