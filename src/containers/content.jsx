import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Result from "../pages/Result";
const TheContent = () => {
  return (
    <Switch>
      <Route path="/result" name={'result'}component={Result}/>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
};
export default TheContent;
