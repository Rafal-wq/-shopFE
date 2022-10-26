import React, {useEffect, useState} from "react";
import {ShopItemEntity} from "../../types/shopItems";
import {ShopItemsTable} from "./ShopItemsTable";

export const ShopItemsList = () => {
    const [itemsList, setItemsList] = useState<ShopItemEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/shop');
            const data = await res.json();
            setItemsList(data);
        })();
    }, []);

    if (itemsList === null) {
        return <p>Loading...</p>;
    }
    return <>
        <ShopItemsTable shopItems={itemsList}/>
    </>
};