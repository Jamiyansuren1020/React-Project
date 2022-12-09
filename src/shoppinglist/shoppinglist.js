import React, { useEffect } from "react";
import { useState, useReducer } from "react";
import axios from 'axios'
import './shopping.css'

export default function ShoppingList () {
    const [shopItems, setShopItems] =useState([])

    const bestBuyApi = () => {
        axios
        .get('https://api.bestbuy.com/v1/products?format=json&show=sku,productId,name,type,regularPrice,salePrice,onSale,url,categoryPath,customerReviewAverage,customerReviewCount,department,largeImage,genre,albumTitle,releaseDate&apiKey=j7RQXCsGGeSc5GaXv0slAOAm')
        .then((res) => {
            if (res.status === 200) {
                setShopItems(res.data.products)
            }
        })
    }
    useEffect(() => {
        bestBuyApi()
    }, [])
    return(
        <div className="shop-main-container">
                {shopItems.map((item) => {
                    return (
                        <div className="bestbuy-container">
                            <div className="bestbuy-picture">
                                <div><img src={item.largeImage}/></div>
                            </div>
                            <div className="bestbuy-movie-detail">
                                <div>{item.name}</div>
                                <span>sku:{item.sku}</span>
                                <span>Release Date:{item.releaseDate}</span>
                                <span>{item.customerReviewAverage}</span>
                                <span>{item.customerReviewCount} Review</span>
                            </div>
                            <div className="movie-price">
                            <div>${item.regularPrice}</div>
                            <div>${item.salePrice}</div>
                            <div><button>Add to Cart</button></div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    
                </div>
            
            {/* <pre>{JSON.stringify(shopItems, null, 2)}</pre> */}
        </div>
    )
}