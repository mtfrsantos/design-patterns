import RoundHole from "../../src/structural/adapter/client/RoundHole";
import RoundPeg from "../../src/structural/adapter/service/RoundPeg";
import SquarePeg from "../../src/structural/adapter/service/SquarePeg";
import SquarePegToRoundPegAdapter from "../../src/structural/adapter/adapter/SquarePegToRoundPegAdapter";

test("Should return a round peg that fits in round hole", function () {
    const roundHole = new RoundHole(5);
    const roundPeg = new RoundPeg(5);
    expect(roundHole.checkFitsHole(roundPeg)).toEqual(true);
});

test("Should return a square peg that fits in round hole", function () {
    const roundHole = new RoundHole(5);
    const squarePeg = new SquarePeg(5); // radius = 3.53553
    const squarePegAdapted = new SquarePegToRoundPegAdapter(squarePeg);
    expect(roundHole.checkFitsHole(squarePegAdapted)).toEqual(true);
});

test("Should return a square peg that does not fit in round hole", function () {
    const roundHole = new RoundHole(5);
    const squarePeg = new SquarePeg(10); // radius = 7.07107
    const squarePegAdapted = new SquarePegToRoundPegAdapter(squarePeg);
    expect(roundHole.checkFitsHole(squarePegAdapted)).toEqual(false);
});
