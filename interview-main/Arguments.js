function showArgsRegular() {
  console.log(arguments);
}

const showArgsArrow = () => {
  console.log(arguments);
}

showArgsRegular(1, 2, 3);
showArgsArrow(1, 2, 3);
