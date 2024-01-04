import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
function App() {
    return (
        <div>
          <Header />
            <div
                style={{
                    minHeight: "400px",
                    color: "green",
                }}
            >
                <h1>new react project</h1>
            </div>
            <Footer />
        </div>
    );
}
 
export default App;
