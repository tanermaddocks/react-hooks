import { useContext } from "react";
import { UserJwtContext } from "../contexts/UserJwtContext";
import { jwtDecode } from "jwt-decode";

export function UserProfile(){
	let [userJwtData] = useContext(UserJwtContext);


	if (userJwtData.accessToken){
		return (
			<div>
				<h2>{userJwtData.accessToken}</h2>
				<h2>{jwtDecode(userJwtData.accessToken).sub}</h2>
			</div>
		)
	} else {
		return(
			<div>
				<p>Please log in or create an account!</p>
			</div>
		)
	}

}