import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    return (
        <div>
            <p style={{ color: "red", fontSize: "30px" }}>
                {error.status == "404" ? "404 Page Not Found" : ""}
            </p>
        </div>
    );
}   