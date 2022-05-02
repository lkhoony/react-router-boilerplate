import GlobalStyles from "./styles/globals";
import {ThemeProvider} from "styled-components";
import theme from "./themes/theme";
import {Provider} from "mobx-react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
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
                            <Route path={"/group"} component={LoginPage}/>
                            <Route path={"/home"} component={HomePage}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;