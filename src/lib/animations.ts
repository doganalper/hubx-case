import { Animation } from "../types/Animation";

export const BASE_PHONE_ANIMATION: Animation = {
    from: { y: '100%' },
    to: { y: '0%' },
    transition: { duration: 0.4, ease: 'easeOut' },
}

export const SIGN_STAMP_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: { right: 0, scale: 0, top: '30%', width: '60%', x: '50%' },
        to: { scale: 1 },
        transition: { duration: 0.2, ease: 'easeOut', delay: 1 },
    },
    {
        from: { scale: 0, top: '50%', width: '60%', x: '-50%' },
        to: { scale: 1 },
        transition: { duration: 0.2, ease: 'easeOut', delay: 1.1 },
    },
]

export const BATCH_SCANNING_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: {
            left: '50%',
            scale: 1.2,
            width: '66.4%',
            x: '-50%',
            y: '110%',
        },
        to: { scale: 1, y: '0%' },
        transition: { duration: 0.2, ease: 'easeOut', delay: 0.7 },
    },
    {
        from: {
            left: '50%',
            scale: 1.2,
            width: '78.1%',
            x: '-50%',
            y: '110%',
        },
        to: { bottom: '-17px', scale: 1, y: '0%' },
        transition: { duration: 0.2, ease: 'easeOut', delay: 1 },
    },
    {
        from: {
            left: '50%',
            scale: 1.2,
            width: '82.6%',
            x: '-50%',
            y: '110%',
        },
        to: { bottom: '-15px', scale: 1, y: '0%' },
        transition: { duration: 0.2, ease: 'easeOut', delay: 1.3 },
    },
]

export const ADVANCED_FILTERS_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: { opacity: 0, width: '11.7%', x: '-70%' },
        to: { opacity: 1 },
        transition: { duration: 0.2, ease: 'easeOut', delay: 0.7 },
    },
    {
        from: { opacity: 0, right: 0, width: '11.7%', x: '70%' },
        to: { opacity: 1 },
        transition: { duration: 0.2, ease: 'easeOut', delay: 1 },
    },
]

export const EXPORT_SHARE_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: {
            left: '50%',
            rotate: '40deg',
            width: '6.6%',
            x: '-50%',
            y: '100%',
        },
        to: { left: '-5%', rotate: '0deg', y: '-100%' },
        transition: { duration: 0.4, ease: 'easeOut', delay: 0.7 },
    },
    {
        from: {
            left: '50%',
            rotate: '26deg',
            width: '43.5%',
            x: '-50%',
            y: '100%',
        },
        to: { left: '14%', rotate: '-0deg', y: '0%' },
        transition: { duration: 0.4, ease: 'easeOut', delay: 1 },
    },
    {
        from: { left: '50%', width: '35.5%', x: '-50%', y: '100%' },
        to: { left: '50%', y: '-25%' },
        transition: { duration: 0.4, ease: 'easeOut', delay: 1.3 },
    },
    {
        from: {
            left: '50%',
            rotate: '-26deg',
            width: '43.5%',
            x: '-50%',
            y: '100%',
        },
        to: { left: '90%', rotate: '-0deg', y: '0%' },
        transition: { duration: 0.4, ease: 'easeOut', delay: 1.6 },
    },
]