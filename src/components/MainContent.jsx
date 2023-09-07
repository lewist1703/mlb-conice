export default function MainContent(){
    return(
        <main>
            <p className="desc"><b>
                Test your baseball knowledge with
                our interactive MLB player stats guessing game. Can you guess the players
                based on their career statistics?
            </b></p>

            <div className="player-button">
                <button className="get-player">
                    New Player Stats
                </button>
            </div>

            <div className="stats">
                <div className="stat"><span>WAR</span><span>42.3</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>ABS</span><span>2000</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>HITS</span><span>3000</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>HRS</span><span>479</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>AVG</span><span>.331</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>RBIS</span><span>1987</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>SBS</span><span>201</span></div>
                <div className="seperator"><span>|</span><span>|</span></div>

                <div className="stat"><span>OPS</span><span>.863</span></div>
            </div>

            <div className="guess-div">
                <input type="text" placeholder="Enter Player's Name" />
                <button className="guess-player">
                    Submit
                </button>
            </div>
        </main>
    )
}