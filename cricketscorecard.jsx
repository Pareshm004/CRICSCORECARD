import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [balls, setBalls] = useState(0);
    const [over, setOver] = useState(0);
    const [showLegByeOptions, setShowLegByeOptions] = useState(false);
    const [showNoBallOptions, setShowNoBallOptions] = useState(false);
    const [showFreeHitOptions, setShowFreeHitOptions] = useState(false);
    const [showWideOptions, setShowWideOptions] = useState(false);

    useEffect(() => {
        setOver(Math.floor(balls / 6));
    }, [balls]);

    const increment = (runs) => {
        setCount(count + runs);
        if (runs !== 0) {
            setBalls(balls + 1);
        }
    };

    const wideRun = (runs) => {
        setCount(count + runs+1);
        setShowWideOptions(false);
    };

    const legByeRun = (runs) => {
        setCount(count + runs);
        setBalls(balls + 1);
        setShowLegByeOptions(false);
    };

    const noBallRun = (runs) => {
        setCount(count + runs + 1);
        setShowNoBallOptions(false);
    };

    const freeHitRun = (runs) => {
        setCount(count + runs);
        setBalls(balls + 1);
        setShowFreeHitOptions(false);
    };

    const reset = () => {
        setCount(0);
        setWicket(0);
        setBalls(0);
        setOver(0);
        setShowLegByeOptions(false);
        setShowNoBallOptions(false);
        setShowFreeHitOptions(false);
        setShowWideOptions(false);
    };

    const wicketFall = () => {
        if (wicket < 10) {
            setWicket(wicket + 1);
            setBalls(balls + 1);
        }
    };

    return (
        
        <div className='count'>
            <h1><div className='heading'>Cricket Score Card</div></h1>
            <h1 className='count-display'>{count} - {wicket} in {balls} balls ({Math.floor(balls / 6)} overs)</h1>
            {wicket >= 10 && <p>All Out!!</p>}
            <button className="button" onClick={() => increment(1)}>Single Run</button>
            <button className="button" onClick={() => increment(2)}>Double Run</button>
            <button className="button" onClick={() => increment(3)}>Triple</button>
            <button className="button" onClick={() => increment(4)}>Four Runs</button>
            <button className="button" onClick={() => increment(6)}>Six Runs</button>
            <button className="button" onClick={wicketFall}>Wicket</button>
            <button className="button" onClick={() => setBalls(balls + 1)}>Dot Ball</button>
            <button className="button" onClick={() => setShowWideOptions(!showWideOptions)}>Wide</button>
            <button className="button" onClick={() => setShowLegByeOptions(!showLegByeOptions)}>Leg Bye</button>
            <button className="button" onClick={() => setShowNoBallOptions(!showNoBallOptions)}>No Ball</button>
            <button className="button" onClick={() => setShowFreeHitOptions(!showFreeHitOptions)}>Free Hit</button>
            {showWideOptions && (
                <div>
                    <button className="button" onClick={() => wideRun(0)}>Wide+0</button>
                    <button className="button" onClick={() => wideRun(1)}>Wide+1</button>
                    <button className="button" onClick={() => wideRun(2)}>Wide+2</button>
                    <button className="button" onClick={() => wideRun(3)}>Wide+3</button>
                    <button className="button" onClick={() => wideRun(4)}>Wide+4</button>
                </div>
            )}
            {showLegByeOptions && (
                <div>
                    <button className="button" onClick={() => legByeRun(0)}>Leg Bye+0</button>
                    <button className="button" onClick={() => legByeRun(1)}>Leg Bye+1</button>
                    <button className="button" onClick={() => legByeRun(2)}>Leg Bye+2</button>
                    <button className="button" onClick={() => legByeRun(3)}>Leg Bye+3</button>
                    <button className="button" onClick={() => legByeRun(4)}>Leg Bye+4</button>
                </div>
            )}
            {showNoBallOptions && (
                <div>
                    <button className="button" onClick={() => noBallRun(0)}>No Ball+0</button>
                    <button className="button" onClick={() => noBallRun(1)}>No Ball+1</button>
                    <button className="button" onClick={() => noBallRun(2)}>No Ball+2</button>
                    <button className="button" onClick={() => noBallRun(3)}>No Ball+3</button>
                    <button className="button" onClick={() => noBallRun(4)}>No Ball+4</button>
                    <button className="button" onClick={() => noBallRun(5)}>No Ball+5</button>
                    <button className="button" onClick={() => noBallRun(6)}>No Ball+6</button>
                </div>
            )}
            {showFreeHitOptions && (
                <div>
                    <button className="button" onClick={() => freeHitRun(0)}>Free Hit+0</button>
                    <button className="button" onClick={() => freeHitRun(1)}>Free Hit+1</button>
                    <button className="button" onClick={() => freeHitRun(2)}>Free Hit+2</button>
                    <button className="button" onClick={() => freeHitRun(3)}>Free Hit+3</button>
                    <button className="button" onClick={() => freeHitRun(4)}>Free Hit+4</button>
                    <button className="button" onClick={() => freeHitRun(5)}>Free Hit+5</button>
                    <button className="button" onClick={() => freeHitRun(6)}>Free Hit+6</button>
                </div>
            )}
            <button className="button" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
