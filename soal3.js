let kata = "pintu";
kata = "pintu";

function print(inputan) {
  kata = inputan;
  katasplit = kata.split("");
  katasplitreverse = katasplit.slice().reverse();
  katasplitreversejoin = katasplitreverse.join("");

  if (kata == katasplitreversejoin) {
    return true;
  } else {
    return false;
  }
}

print("pintu");
