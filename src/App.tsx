import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './router';
import PageContext from './store';

function App() {
    return (
        <Suspense fallback={null}>
            <PageContext>
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
            </PageContext>
        </Suspense>
    );
}

export default App;
