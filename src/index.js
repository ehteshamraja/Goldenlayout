import React from "react";
import { render } from "react-dom";
import { GoldenLayoutComponent } from "./goldenLayoutComponent";
import { MyGoldenPanel } from "./myGoldenPanel";
import { AppContext } from "./appContext";

class App extends React.Component {
  state = { contextValue: "default value" };
  render() {
    return (
      <div>
        <h2>GoldenLayout with React:</h2>
        
        <AppContext.Provider value={this.state.contextValue}>
          <GoldenLayoutComponent //config from simple react example: https://golden-layout.com/examples/#qZXEyv
            htmlAttrs={{ style: { height: "500px", width: "1000px" } }}
            config={{
              content: [
                {
                  type: "row",
                  content: [
                    {
                      title: "A react component",
                      type: "react-component",
                      component: "testItem",
                    },
                    
                    
                  ]
                }
              ]
            }}
            registerComponents={myLayout => {
              myLayout.registerComponent("testItem", MyGoldenPanel);
            }}
          />
        </AppContext.Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
