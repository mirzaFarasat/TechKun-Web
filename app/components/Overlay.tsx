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
    const contentRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position for animation effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const show = useCallback(() => {
        setMounted(true);
        onToggle(true);
        // Prevent body scrolling when overlay is open
        document.body.style.overflow = 'hidden';
    }, [onToggle]);

    const hide = useCallback(() => {
        onToggle(false);
        // Restore body scrolling when overlay is closed
        document.body.style.overflow = '';
    }, [onToggle]);

    const toggle = useCallback(() => {
        isOpen ? hide() : show();
    }, [isOpen, hide, show]);

    useImperativeHandle(ref, () => ({
        show,
        hide,
        toggle,
    }), [show, hide, toggle]);

    const onAnimationEnd = useCallback((e: AnimationEvent) => {
        e.animationName === "overlay-exit" && setMounted(false);
    }, []);

    useEffect(() => {
        const overlay = overlayRef.current;
        overlay?.addEventListener("animationend", onAnimationEnd);
        return () => overlay?.removeEventListener("animationend", onAnimationEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [overlayRef.current, onAnimationEnd]);

    useEffect(() => {
        const onClickBelow = (event: MouseEvent) => {
            const element = overlayRef.current;
            const rect = element?.getBoundingClientRect();
            if (rect && (event.clientY > rect.bottom))
                hide();
        };

        document.addEventListener("click", onClickBelow);
        return () => document.removeEventListener("click", onClickBelow);
    }, [hide]);

    // Calculate backdrop blur based on scroll position for a dynamic effect
    const backdropBlur = Math.min(8, scrollY / 100);

    // Calculate entry animation duration based on scroll (faster when scrolled down)
    const entryDuration = Math.max(0.2, 0.3 - (scrollY / 5000));
    const entryAnimationStyle = `overlay-entry ${entryDuration}s cubic-bezier(0.16, 1, 0.3, 1)`;
    const exitAnimationStyle = `overlay-exit 0.25s cubic-bezier(0.7, 0, 0.84, 0)`;

    return isMounted ? (
        <div 
            ref={overlayRef}
            className={`fixed inset-0 z-50 flex flex-col items-center ${
                isOpen ? "animate-[overlay-entry_0.3s_ease-in]" : "animate-[overlay-exit_0.3s_ease-in] opacity-0"
            }`}
            onClick={(e) => {
                // Close when clicking outside content
                if (e.target === overlayRef.current) {
                    hide();
                }
            }}
            style={{
                backdropFilter: `blur(${backdropBlur}px)`,
                WebkitBackdropFilter: `blur(${backdropBlur}px)`,
                backgroundColor: `rgba(0, 0, 0, ${isOpen ? 0.2 : 0})`,
                transition: 'background-color 0.3s ease'
            }}
        >
            <div 
                ref={contentRef}
                className={`mt-16 max-w-full ${
                    isOpen 
                    ? `animate-[${entryAnimationStyle}]` 
                    : `animate-[${exitAnimationStyle}] opacity-0`
                }`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    transformOrigin: 'top center',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}
            >
                {children}
            </div>
        </div>
    ) : null;
}));

export default Overlay;