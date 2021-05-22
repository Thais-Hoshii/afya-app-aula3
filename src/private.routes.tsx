import { Route, Redirect } from 'react-router-dom';
import jwt from "jsonwebtoken";

const privateRoutes: any = ({ component: Component, path: Path, ...rest }: any) => {
    const isLogin: string | null = localStorage.getItem("@tokenAfyaApp");
    const isSectionActive: any = () => {
        if (isLogin === undefined || null) {
            return false;
        } else {
            const onlyToken: any = isLogin?.split(" ")[1];
            const tokenPayLoad: any = jwt.decode(onlyToken);

            const expSeconds = tokenPayLoad.exp;
            const timeNow = Date.now() / 1000;

            return timeNow > expSeconds ? false : true;
        }
    }

    console.log(isSectionActive());

    return (
        <Route {...rest} render={ props => (
            isLogin != null ? <Component {...props} /> : <Redirect to="/login" />
        )}/>
    );
}

export default privateRoutes;