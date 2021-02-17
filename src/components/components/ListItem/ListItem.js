import React from 'react';
import Button from './components/Button/Button';

let id = 0;

function ListItem({ wishes }) {
    const [currentWishes, setCurrentWishes] = React.useState(wishes)

    function handleCurrentWishes(wishToDelete) {
    setCurrentWishes(wishes.filter((wish) => wish === wishToDelete))
}

return wishes.map((wish) => {
    return <div className='card'>
            <p key={id++}>{wish}</p>
            <Button handleCurrentWishes={handleCurrentWishes}>remove</Button>
    </div>
})
}

export default ListItem;