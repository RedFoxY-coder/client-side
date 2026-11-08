import { $isAuthorized, $isLoading, checkAuthEvent } from "@/stores/userStore";
import { useUnit } from "effector-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
export function useCheckAuth() {
    const router = useRouter()
    const pathname = usePathname()

    const [checkAuth, isAuthorized] = useUnit([checkAuthEvent, $isAuthorized])

     useEffect(() => {
        checkAuth()
      }, [checkAuth])
      
     useEffect(() => {
        if(isAuthorized != null){
    if (isAuthorized && pathname == '/welcome') {
      router.replace('/stacks/1')
    }
    if(!isAuthorized && pathname.startsWith('/stacks')) {
         router.replace('/welcome')
    }
}
  }, [isAuthorized])
}