import { useContext } from "react";
import { UserContext } from "../App";
import "./Home.css";
const Home = (props: any) => {
	const { userState, dispatch } = useContext(UserContext);
	console.log(userState);

	return <div>Hello {userState.username}</div>;
};
export default Home;
