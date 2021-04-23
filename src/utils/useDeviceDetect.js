import { useEffect, useState } from "react"
import { ObjectShallowEqualityCheck, isMobile, isTablet, isDesktop } from "@/utils/globalFunctions"


export default function useDeviceDetect () {
    
    const [devices, setDevices] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false
    })


    useEffect(()=>{

        setDevices({
            isMobile: isMobile(),
            isTablet: isTablet(),
            isDesktop: isDesktop()
        })

        window.addEventListener('resize',()=>{

            let obj = {
                        isMobile: isMobile(),
                        isTablet: isTablet(),
                        isDesktop: isDesktop()
                    };

            if(!ObjectShallowEqualityCheck(devices, obj) )
            {
                setDevices(obj)
            }
        });

    },[])

    return devices
}