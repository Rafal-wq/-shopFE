import React from "react";
import {ShopItemEntity} from "types";
import {ShopItemTableRow} from "./ShopItemTableRow";

interface Props {
    shopItems: ShopItemEntity[];
}

export const ShopItemsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {
            props.shopItems.map(shopItem => (
                <ShopItemTableRow shopItem={shopItem} key={shopItem.id}/>
            ))
        }
        </tbody>
    </table>
);