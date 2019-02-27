import React from 'react';

export default function SearchForm(props) {
    return <form action="search">
        Search Price Range:
    <select name="gift-lists" id="">
            <option value="$0 - $20">$0 - $20</option>
            <option value="$20 - $50">$20 - $50</option>
            <option value="$50 - $100">$50 - $100</option>
            <option value="$100 - $250">$100 - $250</option>
            <option value="$250 - $500">$250 - $500</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000+">$1000+</option>
        </select> <br />
        Search Holiday:
    <select name="gift-lists" id="">
            <option value="Christmas/Hanukkah">Christmas/Hanukkah</option>
            <option value="Valentine's Day">Valentine's Day</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Easter">Easter</option>
            <option value="Father's/Mother's Day">Father's/Mother's Day</option>
            <option value="Spontaneous!">Spontaneous!</option>
        </select><br />
        Search Recipient:
    <select name="gift-lists" id="">
            <option value="Boyfriend/Husband">Boyfriend/Husband</option>
            <option value="Girlfriend/Wife">Girlfriend/Wife</option>
            <option value="Brother/Sister">Brother/Sister</option>
            <option value="Father/Mother">Father/Mother</option>
            <option value="Friend">Friend</option>
            <option value="Grandfather/Grandmother">Grandfather/Grandmother</option>
            <option value="Pet">Pet</option>
        </select><br />
        <input type="submit" value="Search for Gifts" />
    </form>
}