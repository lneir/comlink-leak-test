# comlink-leak-test
Comlink will leak memory in certain scenarios...see discussion here: https://github.com/GoogleChromeLabs/comlink/issues/63

This package takes example from discussion and uses uses a modified version of comlink (https://github.com/lneir/comlink) that provides an additional method: unexpose, to resolve the memory leak problem.
