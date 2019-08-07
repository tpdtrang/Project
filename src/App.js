import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import HandbookPage from './components/pages/HandbookPage';
import RoomPage from './components/pages/RoomPage';
import HandbookBdPage from './components/pages/HandbookBdPage';
import FormTourPage from './components/pages/form/FormTourPage';
import FormHbPage from './components/pages/form/FormHbPage';
import FormRoomPage from './components/pages/form/FormRoomPage';
import TableRoomPage from './components/pages/table/TableRoomPage';
import TableTourPage from './components/pages/table/TableTourPage';
import TableHbPage from './components/pages/table/TableHbPage';
import ContactPage from './components/pages/ContactPage';
import AdminPage from './components/pages/AdminPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import TourPage from './components/pages/TourPage';
import NewPage from './components/pages/NewPage';
import FormNewPage from './components/pages/form/FormNewPage';
import TableNewPage from './components/pages/table/TableNewPage';
import BodyroomPage from './components/pages/BodyroomPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: '1', path: '/', component: HomePage, exact: true },
        { id: '3', path: '/rooms', component: RoomPage, exact: true },
        { id: '2', path: '/handbook', component: HandbookPage, exact: true },
        { id: '4', path: '/handbook/:id', component: HandbookBdPage, exact: true },
        { id: '5', path: '/formtour', component: FormTourPage, exact: true },
        { id: '6', path: '/formhb', component: FormHbPage, exact: true },
        { id: '7', path: '/formroom', component: FormRoomPage, exact: true },
        { id: '8', path: '/tableroom', component: TableRoomPage, exact: true },
        { id: '9', path: '/tabletour', component: TableTourPage, exact: true },
        { id: '10', path: '/tablehb', component: TableHbPage, exact: true },
        { id: '11', path: '/contact', component: ContactPage, exact: true },
        { id: '12', path: '/formhb/:hb', component: FormHbPage, exact: true },
        { id: '13', path: '/admin', component: AdminPage, exact: true },
        { id: '14', path: '/login', component: LoginPage, exact: true },
        { id: '15', path: '/signup', component: SignupPage, exact: true },
        { id: '16', path: '/tours', component: TourPage, exact: true },
        { id: '17', path: '/formroom/:room', component: FormRoomPage, exact: true },
        { id: '18', path: '/news', component: NewPage, exact: true },
        { id: '19', path: '/formnew', component: FormNewPage, exact: true },
        { id: '20', path: '/tablenew', component: TableNewPage, exact: true },
        { id: '21', path: '/rooms/:id', component: BodyroomPage, exact: true },
        { id: '22', path: '/formtour/:tour', component: FormTourPage, exact: true },
        { id: '23', path: '/formnew/:new', component: FormNewPage, exact: true }
      ]
    }

  }
  render() {
    return (
      <Router>
        <Switch>
          {this.state.data.map(data => (
            <Route key={data.id} exact={data.exact} path={data.path} component={data.component} ></Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
