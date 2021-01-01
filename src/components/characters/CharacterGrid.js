import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

function CharacterGrid({ items, isLoading }) {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            {items.map((e, i) => (
                <CharacterItem item={e} key={e.char_id} />
            ))}
        </section>
    )
}

export default CharacterGrid
