import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import AppRoutes from "./routes"; 
import { StoreProvider } from "./hooks/useGlobalReducer";

const Main = () => {
    const stars = Array.from({ length: 100 }).map(() => ({
        top: Math.random() * 100,    // posición vertical entre 0% y 100%
        left: Math.random() * 100    // posición horizontal entre 0% y 100%
    }));

    return (
        <React.StrictMode>
            <StoreProvider>
                <div className="stars-container">
                    {stars.map((star, index) => (
                        <div
                            key={index}
                            className="star"
                            style={{
                                top: `${star.top}%`,
                                left: `${star.left}%`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="background-overlay">
                    <AppRoutes />
                </div>
            </StoreProvider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

