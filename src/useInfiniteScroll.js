import { useEffect, useRef } from "react";

const useInfiniteScroll = (loadMore, hasMore) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return; // 沒有更多內容時，不執行監聽

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore(); // 觸發載入
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMore, hasMore]);

  return observerRef;
};

export default useInfiniteScroll;
