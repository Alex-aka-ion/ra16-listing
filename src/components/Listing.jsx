import React from "react";
import Item from "./Item";

export default function Listing({items = []}) {
    return (
        <div className="item-list">
            {items.map((e) => <Item item={e} key={e.listing_id}/>)}
        </div>
    );
}
