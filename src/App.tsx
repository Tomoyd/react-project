import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import './App.css';
import routes from './router';
import PageContext from './store';

function App() {
    return (
        <Suspense fallback={null}>
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <Switch>
                            {routes.map((item) => {
                                return (
                                    <Route
                                        path={item.path}
                                        key={item.name}
                                        component={lazy(item.component)}
                                    ></Route>
                                );
                            })}
                        </Switch>
                    </Router>
                </div>
            </Provider>
        </Suspense>
    );
}

export default App;
