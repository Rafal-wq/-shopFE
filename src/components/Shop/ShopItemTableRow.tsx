import React from "react";
import {ShopItemEntity} from "../../types/shopItems";

interface Props {
    shopItem: ShopItemEntity;
}

export const ShopItemTableRow = (props: Props) => (
    <tr>
        <td>{props.shopItem.id}</td>
        <td>{props.shopItem.name}</td>
        <td>{props.shopItem.description}</td>
        <td>{props.shopItem.price}</td>
    </tr>
);