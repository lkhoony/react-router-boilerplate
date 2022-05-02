import GlobalStyles from "./styles/globals";
import {ThemeProvider} from "styled-components";
import theme from "./themes/theme";
import {Provider} from "mobx-react";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

const App = (props) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Provider>
                    <BrowserRouter>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Redirect
                                    to={"/home"}
                                />
                            )}
                        />
                        <Switch>
                            <Route path={"/home"} component={HomePage}></Route>
                            <Route path={"/home"} component={HomePage}></Route>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;