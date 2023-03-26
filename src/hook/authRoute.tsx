import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const authRoute = (Component: any) => {
    return (props: any) => {
        const router = useRouter();
        useEffect(() => {
            const checkToken = async () => {
                const token: any = localStorage.getItem("token");

                if (!token) {
                    router.replace("/login");
                } else {
                    return <Component {...props} />;
                }
            }
            checkToken();
        }, [router]);
        
    }
};

export default authRoute
