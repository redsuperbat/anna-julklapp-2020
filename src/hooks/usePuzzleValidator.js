import { ref, watch } from "vue";
import { verticalIndexes, diagonalIndexes } from "../assets/constants";

const usePuzzleValidator = (index) => {
  const rows = { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0 };
  const columns = { c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 };
  const diagonals = { d1: 0, d2: 0 };
  const hasWon = ref(false);

  watch(index, (theNewIndex) => {
    addIndexToRow(theNewIndex);
    addIndexToColumn(theNewIndex);
    addIndexToDiagonal(theNewIndex);
    validate();
  });

  function validate() {
    console.log(
      "Validating...",
      "Columns:",
      columns,
      "Rows:",
      rows,
      "Diagonals:",
      diagonals
    );
    const validators = Object.values({ ...columns, ...rows, ...diagonals });
    for (const value of validators) {
      if (value === 5) {
        console.log("WOW YOU WON!!!!");
        hasWon.value = true;
      }
    }
  }

  function addIndexToDiagonal(index) {
    if (diagonalIndexes.dia1.includes(index)) {
      diagonals.d1++;
    }
    if (diagonalIndexes.dia2.includes(index)) {
      diagonals.d2++;
    }
  }

  function addIndexToRow(index) {
    if (index < 5) {
      rows.r1++;
      return;
    }
    if (index < 10) {
      rows.r2++;
      return;
    }
    if (index < 15) {
      rows.r3++;
      return;
    }
    if (index < 20) {
      rows.r4++;
      return;
    }
    if (index < 25) {
      rows.r5++;
      return;
    }
  }
  function addIndexToColumn(index) {
    if (verticalIndexes.col1.includes(index)) {
      columns.c1++;
      return;
    }
    if (verticalIndexes.col2.includes(index)) {
      columns.c2++;
      return;
    }
    if (verticalIndexes.col3.includes(index)) {
      columns.c3++;
      return;
    }
    if (verticalIndexes.col4.includes(index)) {
      columns.c4++;
      return;
    }
    if (verticalIndexes.col5.includes(index)) {
      columns.c5++;
      return;
    }
  }

  return { hasWon };
};

export default usePuzzleValidator;
