import { useState, useEffect } from "react";

export default function useElementOnScreen(ref, rootMargin = "75px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    let current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}
