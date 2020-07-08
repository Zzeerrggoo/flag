/*
 Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
 Если есть - выведите 'да', а если нет - выведите 'нет'.
 */

const a = [1, 2, 3, 4, 4, 5];
let flag = false;

for (let i = 1; i < a.length; ++i) {
  flag = a[i] === a[i - 1];
  if (flag) {
    break;
  }
}

/*if (flag) {
  alert( 'Array contains equal items? - yes' );
} else {
  alert( 'Array contains equal items? - no' );
}*/
/**
 * lsdfldks
 */
alert( `Array contains equal items? - ${flag
                                        ? 'да'
                                        : 'нет'}` );

