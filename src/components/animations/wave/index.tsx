import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import { delay } from '../utils';

const ICON = require('./wave.json');

export default function Wave() {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [playerRef])


    return (
        <Player
            ref={playerRef}
            icon={ICON}
            size={96}
            onComplete={() => {
                delay(1000).then(() => {
                    playerRef.current?.playFromBeginning()
                })
            }
            }
        />
    );
}