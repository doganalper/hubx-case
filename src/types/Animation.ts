import { HTMLMotionProps, Transition } from "framer-motion";

export interface Animation {
    from: HTMLMotionProps<"div">['initial'];
    to: HTMLMotionProps<"div">['animate'];
    transition: Transition;
}