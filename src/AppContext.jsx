import { createContext, use, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const [light, setLight] = useState(() => {
		return JSON.parse(localStorage.getItem("light")) ?? true;
	});

	const [session, setSession] = useState(() => {
		return JSON.parse(localStorage.getItem("session")) ?? "";
	});

	const [pColor, setPColor] = useState("")
	const [bgColor, setBgColor] = useState("")
	const [buttonBgColor, setButtonBgColor] = useState("")
	const [buttonColor, setButtonColor] = useState("")
	const [hoverColor, setHoverColor] = useState("")

	useEffect(() => {
		localStorage.setItem("light", JSON.stringify(light));
	}, [light]);

	useEffect(() => {
		localStorage.setItem("session", JSON.stringify(session));
	}, [session]);

	useEffect(() => {
		setPColor(light ? "black" : "white")
		setBgColor(light ? "#B9E5FF" : "#184887")
		setButtonBgColor(light? "#184887" : "#B9E5FF")
		setButtonColor(light ? "white" : "black")
		setHoverColor(light ? "#184887" : "#B9E5FF")
	}, [light])

	const toggleLight = () => {
		setLight((prev) => !prev)
	}

	const value = useMemo(
		() => ({ light, toggleLight, session, setSession }),
		[light, session]
	);

	return (
		<AppContext.Provider value={value}>
			<style>
				{`:root { 
					--p-color: ${pColor}; 
					--bg-color: ${bgColor}; 
					--button-bg-color: ${buttonBgColor}; 
					--button-color: ${buttonColor};
					--hover-color: ${hoverColor};
				}
				`}
				</style>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
	  throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
  };
