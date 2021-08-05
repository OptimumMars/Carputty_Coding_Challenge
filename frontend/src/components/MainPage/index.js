import React, { useState } from 'react';
import './MainPage.css';
import ProgressBar from '../ProgressBar';

function MainPage() {

    const obj = {
        goal: 5000,
        total: 0,
        donors: 0,
    }

    // console.log("this is the obj ---", obj)

    const [fundraiser, setFundraiser] = useState(obj);

    const [amount, setAmount] = useState(5);

    // console.log("this is the fundraiser state ---", fundraiser)

    const [progress, setProgress] = useState(0)

    // console.log("this is the progress bar initial state ---", progress)

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
        // console.log("this is the progress bar new percent ---", progress)
    }

    return (
        <div>
            <div className="popup">
                <p className="content">${fundraiser.goal - fundraiser.total} still needed to fund this project</p>
            </div>
            <div className="card">
                <ProgressBar completed={progress}></ProgressBar>
                <div className="content">
                    <h2 className="header">Only four days left to fund this project</h2>
                    <p>Join the {fundraiser.donors} other donors who have already supported this project.</p>
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
