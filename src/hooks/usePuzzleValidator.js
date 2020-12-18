import { ref, watch } from "vue";
import { verticalIndexes, diagonalIndexes } from "../assets/constants";

const usePuzzleValidator = (index) => {
  const rows = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
  const columns = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
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
      console.log(value);
      if (value === 5) {
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
      rows.first++;
      return;
    }
    if (index < 10) {
      rows.second++;
      return;
    }
    if (index < 15) {
      rows.third++;
      return;
    }
    if (index < 20) {
      rows.fourth++;
      return;
    }
    if (index < 25) {
      rows.fifth++;
      return;
    }
  }
  function addIndexToColumn(index) {
    console.log(columns);
    if (verticalIndexes.col1.includes(index)) {
      columns.first++;
      return;
    }
    if (verticalIndexes.col2.includes(index)) {
      columns.second++;
      return;
    }
    if (verticalIndexes.col3.includes(index)) {
      columns.third++;
      return;
    }
    if (verticalIndexes.col4.includes(index)) {
      columns.fourth++;
      return;
    }
    if (verticalIndexes.col5.includes(index)) {
      columns.fifth++;
      return;
    }
  }

  return { hasWon };
};

export default usePuzzleValidator;
