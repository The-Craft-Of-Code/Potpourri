import {useState, useEffect, useMemo} from "react";

export default function useElementOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting && entry.intersectionRatio >= 0.5)
    },
    {
      rootMargin: "0px",
      threshold: 0.9
    }
  ), [])

  useEffect(() => {
    let current = ref.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [observer, ref]);
  return isIntersecting;
}
