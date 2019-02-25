import React from 'react';

export default function PostGiftForm(props) {
    return <form>
        Gift Name: <input type="text" />
        Price Range: <select name="gift-lists" id="">
            <option value="$0 - $20">$0 - $20</option>
            <option value="$20 - $50">$20 - $50</option>
            <option value="$50 - $100">$50 - $100</option>
            <option value="$100 - $250">$100 - $250</option>
            <option value="$250 - $500">$250 - $500</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000+">$1000+</option>
        </select> <br></br>
    </form>
}