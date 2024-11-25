import { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import { FirebaseProvider } from "./providers/FirebaseProvider";
import { LocationProvider } from "./providers/LocationProvider";

import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import Register from "./pages/Register";

import WithoutSignupFeed from "./pages/WithoutSignupFeed";
import ProfileFeed from "./pages/ProfileFeed";
import UserFeed from "./pages/UserFeed";
import UserTag from "./pages/UserTag";

import Map from "./pages/Map";
import DemoMap from "./pages/DemoMap";

import PrivatePost from "./pages/PrivatePost";
import PublicPost from "./pages/PublicPost";



import FeedaUpdate from "./pages/FeedaUpdate";


 //import { SimpleMap } from "./components/SimpleMap";
//import Item from "../components/Item";

import { CommunityProvider } from "./providers/CommunityProvider";
import { PostProvider } from "./providers/PostProvider";
import { ExifProvider } from './providers/ExifProvider';
//  import { LocationTagProvider } from './providers/LocationTagProvider';
// import Map from './pages/Map';
// import { GeoFirestore, GeoCollectionReference } from 'geofirestore';
// import firebase from 'firebase/app';
// import 'firebase/firestore';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/feeda":
        title = "";
        metaDescription = "";
        break;
      case "/22-private-post":
        title = "";
        metaDescription = "";
        break;
      case "/21-public-post":
        title = "";
        metaDescription = "";
        break;
      case "/user-tags":
        title = "User Tags";
        metaDescription = "";
        break;
      case "/user-feed":
        title = "User Feed";
        metaDescription = "";
        break;
      case "/authentication":
        title = "SafeSnap Authentication";
        metaDescription = "";
        break;
      case "/feedaupdate":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "User Profile Feed";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  //  // Initialize Firestore and GeoFirestore
  //  useEffect(() => {
  //   const firestore = firebase.firestore();
  //   const geoFirestore = new GeoFirestore(firestore);

  //   const performGeoQuery = () => {
  //     const geoCollection = geoFirestore.collection('locations');
  //     const query = geoCollection.near({ center: new firebase.firestore.GeoPoint(53.54992, 10.00678), radius: 10 });

  //     query.get().then((snapshot) => {
  //       snapshot.docs.forEach((doc) => {
  //         console.log(doc.id, '=>', doc.data());
  //       });
  //     });
  //   };

  //   performGeoQuery();
  // }, []);
  return (
    <FirebaseProvider>
      <AuthProvider>
        <CommunityProvider>
          <LocationProvider>
            <ExifProvider>
              <PostProvider>
                {/* <LocationTagProvider> */}
                  <Routes>
                    {/* Introduction Page */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/authentication" element={<Authentication />} />
                    <Route path="/register" element={<Register />} />

                    {/*Feed Without Signup*/}
                    <Route path="/without-signup" element={<WithoutSignupFeed />} />

                    {/*Signup Home Feed*/}
                    <Route path="/user-profile" element={<ProfileFeed />} />
                    <Route path="/user-tags" element={<UserTag />} />
                    <Route path="/user-feed" element={<UserFeed />} />

                    {/* <Route path="/map-view" element={<Map />} /> */}
                    <Route path="/map-view" element={<DemoMap />} />

                    <Route path="/22-private-post" element={<PrivatePost />} />
                    <Route path="/21-public-post" element={<PublicPost />} />
                    

                    <Route path="/feedaupdate" element={<FeedaUpdate />} />

                    
                    
                  </Routes>
                  {/* <div className="App">
                    <h1>My Google Map</h1>
                    <SimpleMap />
                    </div> */}
                {/* </LocationTagProvider> */}

              </PostProvider>
            </ExifProvider>
          </LocationProvider>
        </CommunityProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
