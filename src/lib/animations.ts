import { Animation } from "../types/Animation";

export const BASE_PHONE_ANIMATION: Animation = {
    from: { y: '100%' },
    to: { y: '0%' },
    transition: { duration: 0.5, ease: 'easeOut' },
}

export const SIGN_STAMP_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: { scale: 0, top: '30%', x: '50%', right: 0, width: '60%' },
        to: { scale: 1 },
        transition: { duration: 0.3, ease: 'easeOut', delay: 1 },
    },
    {
        from: { scale: 0, top: '50%', x: '-50%', width: '60%' },
        to: { scale: 1 },
        transition: { duration: 0.3, ease: 'easeOut', delay: 1.2 },
    },
]

export const BATCH_SCANNING_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: {
            y: '110%',
            left: '50%',
            x: '-50%',
            scale: 1.2,
            width: '66.4%',
        },
        to: { y: '0%', scale: 1 },
        transition: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
    },
    {
        from: {
            y: '110%',
            left: '50%',
            x: '-50%',
            scale: 1.2,
            width: '78.1%',
        },
        to: { y: '0%', scale: 1, bottom: '-17px' },
        transition: { duration: 0.3, ease: 'easeOut', delay: 1.1 },
    },
    {
        from: {
            y: '110%',
            left: '50%',
            x: '-50%',
            scale: 1.2,
            width: '82.6%',
        },
        to: { y: '0%', scale: 1, bottom: '-15px' },
        transition: { duration: 0.3, ease: 'easeOut', delay: 1.4 },
    },
]

export const ADVANCED_FILTERS_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: { opacity: 0, x: '-70%', width: '11.7%' },
        to: { opacity: 1 },
        transition: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
    },
    {
        from: { opacity: 0, right: 0, x: '70%', width: '11.7%' },
        to: { opacity: 1 },
        transition: { duration: 0.3, ease: 'easeOut', delay: 1.1 },
    },
]

export const EXPORT_SHARE_ANIMATION: Animation[] = [
    BASE_PHONE_ANIMATION,
    {
        from: {
            y: '100%',
            left: '50%',
            x: '-50%',
            rotate: '40deg',
            width: '6.6%',
        },
        to: { y: '-100%', left: '-5%', rotate: '0deg' },
        transition: { duration: 0.5, ease: 'easeOut', delay: 0.8 },
    },
    {
        from: {
            y: '100%',
            left: '50%',
            x: '-50%',
            rotate: '26deg',
            width: '43.5%',
        },
        to: { y: '0%', left: '14%', rotate: '-0deg' },
        transition: { duration: 0.5, ease: 'easeOut', delay: 1.1 },
    },
    {
        from: { y: '100%', left: '50%', x: '-50%', width: '35.5%' },
        to: { y: '-25%', left: '50%' },
        transition: { duration: 0.5, ease: 'easeOut', delay: 1.4 },
    },
    {
        from: {
            y: '100%',
            left: '50%',
            x: '-50%',
            rotate: '-26deg',
            width: '43.5%',
        },
        to: { y: '0%', left: '90%', rotate: '-0deg' },
        transition: { duration: 0.5, ease: 'easeOut', delay: 1.7 },
    },
]