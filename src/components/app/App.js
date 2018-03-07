import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../album/Albums';
import Album from '../album/Album';
import Header from './Header';
import Loading from './Loading';
import './app.css';
import '../../styles/variables.css';

export default class App extends Component {

  render() {
    const { loading, error } = this.props;
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Loading/>
            <Switch>
              <Route path="/albums" component={Albums}/>
              <Route path="/albums/:id" component={Album}/>
              <Redirect to="/albums"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}




//       <div id="container">
//         <div className="main-body">
//           <header id="main-header">
//             <h1>Image Gallery</h1>
//           </header>
//           <main id="main-content">
//             <div>
//               <p>{loading ? 'LOADING' : '' }</p>
//               { error && 
//                 <pre style={{ color: 'red', fontSize: '1.5em' }}>
//                   {error.message
//                     ? error.message
//                     : error.error ? error.error : error }
//                 </pre>
//               }
//               <Album/>
//             </div>
//           </main>
//           <footer id="main-footer"></footer>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(
//   state => ({
//     loading: state.loading,
//     error: state.error
//   }),
//   null
// )(App);