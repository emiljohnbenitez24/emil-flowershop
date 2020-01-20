import React, { useState, useEffect } from 'react';

const Items = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch('http://192.168.254.100:8877/api/user/list');
        const itemsList = await data.json()
        console.log(itemsList)
        setItems(itemsList)
    };

    return (
        <div>
            {items.map(item => (
                <h1 key={item.id}>{item.firstName}</h1>
            ))}
        </div>

    );
}


export default Items;
