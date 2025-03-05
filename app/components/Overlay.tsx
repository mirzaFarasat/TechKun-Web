import { memo, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState, ReactNode } from "react";

export interface OverlayRef {
    show(): void,
    hide(): void,
    toggle(): void
};

export interface OverlayProps {
    children: ReactNode,
    isOpen: boolean,
    onToggle(value: boolean): void
};

const Overlay = memo(forwardRef<OverlayRef, OverlayProps>(({ children, isOpen, onToggle }, ref) => {
    const [isMounted, setMounted] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    const show = useCallback(() => {
        setMounted(true);
        onToggle(true);
    }, [onToggle]);

    const hide = useCallback(() => {
        onToggle(false);
    }, [onToggle]);

    const toggle = useCallback(() => {
        isOpen ? hide() : show();
    }, [isOpen]);

    useImperativeHandle(ref, () => ({
        show,
        hide,
        toggle,
    }), [show, hide, toggle]);

    const onAnimationEnd = useCallback((e: AnimationEvent) => {
        e.animationName === "overlay-exit" && setMounted(false);
    }, []);

    useEffect(() => {
        overlayRef.current?.addEventListener("animationend", onAnimationEnd);
        return () => overlayRef.current?.removeEventListener("animationend", onAnimationEnd);
    }, [overlayRef.current]);

    useEffect(() => {
        const onClickBelow = (event: MouseEvent) => {
            let element = overlayRef.current;
            let rect = element?.getBoundingClientRect();
            if (rect && (event.clientY > rect.bottom))
                hide();
        };

        document.addEventListener("click", onClickBelow);
        return () => document.removeEventListener("click", onClickBelow);
    }, []);

    return isMounted ? (
        <div ref={overlayRef}
            className={`${isOpen ? "animate-[overlay-entry_0.3s_ease-in]" : "animate-[overlay-exit_0.3s_ease-in] opacity-0"}`}
            onClick={hide}
        >
            {children}
        </div>
    ) : null;
}));

export default Overlay;
