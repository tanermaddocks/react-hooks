
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const defaultUserJwtData = {
	accessToken: "",
	refreshToken: ""
}

export const UserJwtContext = createContext(defaultUserJwtData);


export function UserJwtProvider({children}){
	let [userJwtData, setUserJwtData] = useState(defaultUserJwtData);

	return(
		<UserJwtContext.Provider value={[userJwtData, setUserJwtData]}>
			{children}
		</UserJwtContext.Provider>
	)
}