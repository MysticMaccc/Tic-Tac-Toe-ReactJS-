

export default function GameBoard({ onSelectSquare, board }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {/*col is the null for each column in a specific row, col is renamed to playerSymbol*/}
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        {/* disabled = check if playerSymbol is not null or if it contains X or O */}
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}