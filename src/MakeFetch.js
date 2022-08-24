import React from 'react'

async function MakeFetch(URL) {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            return result;
        } catch (error) {
            console.log("error", error);
        }
    };

export default MakeFetch