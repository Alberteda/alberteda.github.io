import { useMedia } from "use-media"


export const useScreenSizes = () => {
    // below 1023 is device
    const isDevice = useMedia({ minWidth: 0, maxWidth: 1023 })

    // smallish desktop between 1024 and 1440
    const isDesktop = useMedia({ minWidth: 1024, maxWidth: 1439 })

    // large isDesktop is 1440 and up
    const isLargeDesktop = useMedia({ minWidth: 1440 })

    // ignore screen width, just inspect userAgent
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

    return {
        isDevice,
        isDesktop,
        isLargeDesktop,
        isTablet
    } as const
}