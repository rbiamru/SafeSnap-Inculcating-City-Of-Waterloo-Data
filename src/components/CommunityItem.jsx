import { memo } from "react";
import Item from "./Item";
import Button from "./Button";
import { useCommunityContext } from "../providers/CommunityProvider";
//using the bootstrap styling sheet
import "bootstrap/dist/css/bootstrap.min.css";

const { communities, loading, error, subscribeToCommunity, unsubscribeFromCommunity } = useCommunityContext();

const CommunityItem = memo(({ className = "" , community }) => {
  return (<div key={community.cid} className="flex items-center justify-between w-full">
            <Item
                avatar="/avatar-5@2x.png" // Replace with actual community avatar if available
                helenaHills={community.community_name}
                helenahills={`${community.subscribed_users.length} members`}/>
            <Button variant="primary"
                    onClick={() => subscribeToCommunity(community.cid)}>
                      Subscribe
            </Button>
        </div>
  );
});

export default CommunityItem;
