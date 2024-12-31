import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import { delay } from '../utils';

const ICON = require('./waves.json');

export default function Waves() {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [playerRef])


    return (
        <Player
            ref={playerRef}
            icon={ICON}
            size={1080}
        />
    );
}