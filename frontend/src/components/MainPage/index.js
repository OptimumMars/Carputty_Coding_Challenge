import React, { useState } from 'react';
import './MainPage.css';
import ProgressBar from '../ProgressBar';

function MainPage() {

    const obj = {
        goal: 5000,
        total: 0,
        donors: 0,
    }

    const [fundraiser, setFundraiser] = useState(obj);

    const [amount, setAmount] = useState(5);

    const [progress, setProgress] = useState(0)

    function buttonPress(e) {
        e.preventDefault();

        const update = {
            goal: 5000,
            total: fundraiser.total += parseInt(amount, 10),
            donors: fundraiser.donors += 1
        }

        const bar = (update.total / 5000) * 100;

        setFundraiser(update);

        setProgress(bar)
    }

    return (
        <div>
            <div className="popup_container">
                <div className="popup">
                    <p className="content"><strong>${fundraiser.goal - fundraiser.total}</strong> still needed to fund this project</p>
                </div>
                <div className="triangle">.</div>
            </div>
            <div className="card">
                <ProgressBar completed={progress}></ProgressBar>
                <div className="content">
                    <h2 className="header">Only four days left to fund this project</h2>
                    <p>Join the <strong>{fundraiser.donors}</strong> other donors who have already supported this project.</p>
                    <form onSubmit={buttonPress}>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="input" />
                        <button type="submit" className="button">Give Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default MainPage
