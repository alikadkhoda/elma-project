import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

type AnimationCounterProps = {
    from:number;
    to:number;
    animationOptions?:KeyframeOptions;
}
export default function AnimationCounter({from, to, animationOptions}:AnimationCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, {once: true})

    useIsomorphicLayoutEffect(()=> {
        const element = ref.current
        if(!element) return
        if(!inView) return

        if(window.matchMedia('(prefers-reduced-motion)').matches){
            element.textContent = String(to)
            return
        }

        element.textContent = String(from)

        const controls = animate(from, to, {
            duration: 1.5,
            ease: 'easeOut',
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0)
            }
        })

        return ()=> {
            controls.stop()
        }
    },[ref, inView, from, to])
  return (
    <span ref={ref} className="text-8xl text-lime-500"></span>
  )
}
