import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, query, where } from 'firebase/firestore';
import { useFirebaseContext } from './FirebaseProvider';
import { useAuthContext } from './AuthProvider'; // Assuming you have an AuthProvider

export const CommunityContext = createContext({});

const CommunityProvider = (props) => {
  const { children } = props;
  const { myFS } = useFirebaseContext();
  const { user } = useAuthContext(); // To get the current user's ID
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCommunities = async () => {
    try {
      const communitiesCollection = collection(myFS, 'communities');
      const communitiesSnapshot = await getDocs(communitiesCollection);
      const communitiesList = communitiesSnapshot.docs.map((doc) => ({
        cid: doc.id,
        community_name: doc.data().community_name,
        community_description: doc.data().community_description,
        community_imageUrl: doc.data().community_imageUrl,
        tag: doc.data().tag,
        subscribed_users: doc.data().subscribed_users || []
      }));
      setCommunities(communitiesList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching communities: ', error);
      setError(error);
      setLoading(false);
    }
  };

  const addCommunity = async (communityData) => {
    try {
      // Check if a community with the same name already exists
      const communityQuery = query(
        collection(myFS, 'communities'),
        where('community_name', '==', communityData.community_name)
      );
      const existingCommunities = await getDocs(communityQuery);

      if (existingCommunities.empty) {
        const newCommunityRef = doc(collection(myFS, 'communities'));
        await setDoc(newCommunityRef, {
          community_name: communityData.community_name,
          community_description: communityData.community_description,
          community_imageUrl: communityData.community_imageUrl,
          tag: communityData.tag,
          subscribed_users: []
        });
        console.log(`Added new community: ${communityData.community_name}`);
      } else {
        console.log(`Community already exists: ${communityData.community_name}`);
      }
    } catch (error) {
      console.error('Error adding community: ', error);
      setError(error);
    }
  };

  const addInitialCommunities = async () => {
    const initialCommunities = [
      {
        community_name: 'Ice Slips',
        community_description: 'A community for discussing ice slips and related safety measures.',
        community_imageUrl: '/path/to/ice-slips-image.png',
        tag: '#iceslips'
      },
      {
        community_name: 'Libraries Near Me',
        community_description: 'A community for sharing information about libraries in your vicinity.',
        community_imageUrl: '/path/to/libraries-image.png',
        tag: '#librariesnearme'
      },
      {
        community_name: 'Recreational Activities Near Me',
        community_description: 'A community for finding and sharing recreational activities nearby.',
        community_imageUrl: '/path/to/recreational-activities-image.png',
        tag: '#recreationalactivitiesnearme'
      }
    ];

    for (const community of initialCommunities) {
      await addCommunity(community);
    }
    await fetchCommunities(); // Refresh the communities list after adding
  };

  useEffect(() => {
    fetchCommunities();
    // Uncomment the following line to add initial communities
    // addInitialCommunities();
  }, []);

  const subscribeToCommunity = async (cid) => {
    if (!user) return; // Ensure user is logged in
    try {
      const communityRef = doc(myFS, 'communities', cid);
      await updateDoc(communityRef, {
        subscribed_users: arrayUnion(user.uid)
      });
      fetchCommunities(); // Refresh the communities list
    } catch (error) {
      console.error('Error subscribing to community: ', error);
      setError(error);
    }
  };

  const unsubscribeFromCommunity = async (cid) => {
    if (!user) return; // Ensure user is logged in
    try {
      const communityRef = doc(myFS, 'communities', cid);
      await updateDoc(communityRef, {
        subscribed_users: arrayRemove(user.uid)
      });
      fetchCommunities(); // Refresh the communities list
    } catch (error) {
      console.error('Error unsubscribing from community: ', error);
      setError(error);
    }
  };

  const isUserSubscribed = (cid) => {
    if (!user) return false; // Ensure user is logged in
    console.log("<<<<<<<<id is"+cid);
    const community = communities.find((community) => community.cid === cid);
    return community ? community.subscribed_users.includes(user.uid) : false;
  };

  const theValues = {
    communities,
    loading,
    error,
    addCommunity,
    subscribeToCommunity,
    unsubscribeFromCommunity,
    isUserSubscribed,
    refreshCommunities: fetchCommunities,
    addInitialCommunities, // Expose this function if you want to trigger it from outside
  };

  return (
    <CommunityContext.Provider value={theValues}>
      {children}
    </CommunityContext.Provider>
  );
};

const useCommunityContext = () => {
  const context = useContext(CommunityContext);

  if (context === undefined) {
    throw new Error('useCommunityContext was used outside of its Provider');
  }

  return context;
};

export { CommunityProvider, useCommunityContext };
