$ready(() =>
   $all('[data-local-date]').forEach((item) => {
       const part = item.getAttribute('data-local-date').split('-');
       const date = new Date(part[0], Number(part[1]) - 1, part[2]);
       item.innerHTML = date.toDateString();
   })
);