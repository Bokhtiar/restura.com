import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const authRoute = (Component: any) => {
    return (props: any) => {
        const router = useRouter();
        const [authenticated, setAuthenticated] = useState(false);
        useEffect(() => {
            const checkToken = async () => {
                const token: any = localStorage.getItem("token");

                if (!token) {
                    router.replace("/login");
                } else {
                    setAuthenticated(true)
                }
            }
            checkToken();
        }, [router]);

        if (authenticated) {
            return (
                <Component {...props} />
            );
        } else {
            return null;
        }
    }
};
