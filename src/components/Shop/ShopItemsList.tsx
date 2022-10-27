import React, {useEffect, useState} from "react";
import {ShopItemsTable} from "./ShopItemsTable";
import {ShopItemEntity} from 'types';

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
        <h1>Shop items</h1>
        <ShopItemsTable shopItems={itemsList}/>
    </>
};