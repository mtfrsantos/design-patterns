import RoundHole from "../../src/structural/adapter/client/RoundHole";
import RoundPeg from "../../src/structural/adapter/service/RoundPeg";
import SquarePeg from "../../src/structural/adapter/service/SquarePeg";
import SquarePegAdapter from "../../src/structural/adapter/adapter/SquarePegAdapter";

test("Should return a round peg that fits in round hole", function () {
    const roundHole = new RoundHole(5);
    const roundPeg = new RoundPeg(5);
    expect(roundHole.fits(roundPeg)).toEqual(true);
});

test("Should return a square peg that fits in round hole", function () {
    const roundHole = new RoundHole(5);
    const squarePeg = new SquarePeg(5); // radius = 3.53553
    const squarePegAdapted = new SquarePegAdapter(squarePeg);
    expect(roundHole.fits(squarePegAdapted)).toEqual(true);
});

test("Should return a square peg that does not fit in round hole", function () {
    const roundHole = new RoundHole(5);
    const squarePeg = new SquarePeg(10); // radius = 7.07107
    const squarePegAdapted = new SquarePegAdapter(squarePeg);
    expect(roundHole.fits(squarePegAdapted)).toEqual(false);
});
