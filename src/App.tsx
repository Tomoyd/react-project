import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router';
import { lazy, Suspense } from 'react';
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
