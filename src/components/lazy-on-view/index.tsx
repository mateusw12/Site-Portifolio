import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  props?: any;
}

export function LazySection({ Component, props }: LazySectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Component {...props} />
        </Suspense>
      )}
    </div>
  );
}
